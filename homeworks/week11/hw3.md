## 請說明雜湊跟加密的差別在哪裡，為什麼密碼要雜湊過後才存入資料庫
* 加密：可逆  
  * 需要密鑰，可以透過解密得到原文。  
* 雜湊：不可逆  　
  * 無論原本密碼的內容長短，雜湊演算法運算出的輸出都是固定的長度。  
  * 相同的內容，得到的輸出必定相同。  
  * 雜湊可以避免明文儲存使用者密碼，以防資料庫外洩時，攻擊者可以透過運算直接得到密碼，另一方面，只有使用者自己知道密碼。  


## `include`、`require`、`include_once`、`require_once` 的差別  
* `include`  
  通常使用在程式中的流程敘述，php在讀取到include的檔案時，才會讀取進來。引入檔案失敗會出現錯誤訊息，但程式可以繼續執行。      
* `include_once`  
  避免重複引入檔案，php會檢查檔案是否已被引入，如果是就忽略。  
* `require`  
  通常放在php的最前面，在php程式執行前，先讀取require指定印入的檔案，也可以將常用的函式引入。引入檔案失敗會出現錯誤訊息，程式會停止執行。   
* `require_once`  
  避免重複引入檔案，php會檢查檔案是否已被引入，如果是就忽略。


## 請說明 SQL Injection 的攻擊原理以及防範方法  
* SQL Injection 攻擊原理  
  * 透過修改 SQL 語句，改變他的語意，達成竊取資料/破壞資料的行為。  
  * 範例：登入網站時輸入帳號密碼    
  ```SELECT * FROM `users` WHERE `username` = $user_name AND `password` = $pswd```  
  駭客惡意植入  
  ```
  $user_name = '' OR 1 = 1
  $pswd = '' OR 1 = 1
  ```  
  執行SQL指定會改變  
  ```SELECT * FROM `users` ```  
* 防範方法  
  在php透過prepared Statements將字串拼接的部分，改為使用參數引入值，資料庫就不會將參數的內容視為 SQL 指令的一部份來執行  
  ```
  $stmt = $mysqli->prepare("SELECT * FROM `users` WHERE `username` = ? AND `password` = ?");
  $stmt->bind_param('ss', $username, $password);
  $stmt->execute();
  ```


##  請說明 XSS 的攻擊原理以及防範方法  
* XSS(Cross-Site Scripting)，譯為跨網站指令碼攻擊，是一種把惡意的腳本程式碼(HTML或Javascript)寫入網頁中，當其他使用者瀏覽網頁時，惡意程式碼就會執行，竊取Cookie資料或是Session劫持、釣魚欺騙等各種攻擊。  
* 防範方法  
  * 跳脫字元escape  
  任何允許使用者輸入的內容都需要檢查，刪除所有`<script>`、`onerror=`及其他任何可能執行代碼的字串。  
  * innerText  
  使用此屬性插入字串時，會被保證作為純粹的文字，也就不可能被插入惡意代碼執行了。  


## 請說明 CSRF 的攻擊原理以及防範方法  
* CSRF(Cross Site Request Forgery)，譯作跨網站請求偽造攻擊，駭客盜用使用者的身分，發送請求或是執行惡意程式碼。  
* 防範方法  
  * 檢查Referer，確認來源非跨站請求  
  * 隨機產生token，確認只有使用者自身意願下發出請求  
  * Double Submit Cookie，token儲存在cookie中，伺服器收到請求參數中的token，會比對Cookie中送出的token是否相同，不符就拒絕執行  
  * SameSite機制，透過在Cookie中加入SameSite，跨站請求時，就不會產生Cookie
