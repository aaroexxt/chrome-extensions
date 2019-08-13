setTimeout(function(){
    

var s = document.createElement('script');
s.src = chrome.extension.getURL('slitherhax.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);
};

if (window.location.host == "slither.io") {
var img = document.createElement('img');
img.src = chrome.extension.getURL('images/cursor.png'); 
img.id = "cursor";
document.body.appendChild(img);
}
local
},500);
