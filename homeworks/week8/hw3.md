## 什麼是 Ajax？  
　　任何非同步與伺服器交換資料的方式皆可稱為AJAX，好處是不會換頁。  
    例：
```
<script> 
  const request = new XMLHttpRequest() 
  request.onload = function() { 
    if (request.status >= 200 && request.status < 400) { //判斷HTTP狀態碼 
      console.log(request.responseText) 
    } else { 
      console.log('err') 
    } 
  }
  request.onerror = function() {  //如果出現錯誤
    console.log('error')
  }
  request.open('GET', 'https://google.com', true) //open代表發request到目標網址, true代表非同步
  request.send() //把request發出去
</script>
```  

## 用 Ajax 與我們用表單送出資料的差別在哪？  
* form表單會用action和method來決定提交目的地和提交方式，需要跳轉頁面。  
* AJAX用JS來傳送資料，不需要跳轉頁面，瀏覽器發送request給伺服器，伺服器回傳response給頁面上的JS。  


## JSONP 是什麼？  
　　JSON可以讓網頁從其他的網域 (cross-domain) 請求資料，不會受同源政策影響。　　


## 要如何存取跨網域的 API？  
　　基於安全性考量，同源政策規定了某些特定的資源、程式碼，必須在同源的情況下才可以存取。  
　　但如果都要限制在同源政策下的話，前後端開發會非常難以進行，也沒辦法用 XHR 的方式套用其他 SDK 的 API。也因此出現了 CORS（Cross-Origin Resource Sharing）的機制。  
　　那麼跨來源請求是怎麼運作的呢？主要是由兩個 Header 來做相對的存取控制，Origin 和Access-Control-Allow-Origin。  
　　只要發送請求時的 Origin 和回應的 header 中 Access-Control-Allow-Origin 的值相同，或是Access-Control-Allow-Origin: * （代表允許任何網域存取資源）  
　　以上的限制都是透過瀏覽器，如果沒有經過瀏覽器，其實就沒有限制。


## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？  
　　同源政策的限制都是透過瀏覽器，如果沒有經過瀏覽器(例如node.js)，其實就沒有限制。  
　　

