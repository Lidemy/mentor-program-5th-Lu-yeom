## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼  
　　在Mysql中，varchar和text的欄位可以用來儲存字元型別的資料，差別在於varchar可以指定字元長度，text則否。  

## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？  
　　cookie是一種小型的文字檔案，透過加密的方式儲存在用戶端，會記錄用戶的資訊，例如會員登錄、瀏覽紀錄等。  
　　cookie通常存放在瀏覽器中。當伺服器收到HTTP請求時，會傳送set-cookie的回應，瀏覽器便會將cookie儲存起來，之後對同一個domain發送HTTP request的時候，瀏覽器就會將cookie帶在HTTP request的Cookie header裡。  

## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？  
　　一個會員系統，有基本的功能規劃，如登入、註冊等。這些功能可能會使用常見的命名方式，例如login.php、register.php，在網址列上更改php的名稱，或許就可以直接切換到指定頁面，無須經過註冊或登入功能。  

