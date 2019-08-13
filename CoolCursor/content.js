var s = document.createElement('script');
s.src = chrome.extension.getURL('cursor.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);
};
window.addEventListener('spawnCursor', function(e) {
var follow = document.createElement("img");
//follow.width = width + "px";
//follow.height = height + "px";
if (e.pathto != undefined && e.pathto != "undefined") {
follow.src = chrome.extension.getURL(e.pathto);
var d = document.createElement("p");
d.innerHTML = e.pathto;
d.id = "test";
document.body.appendChild(d);
} else {
follow.src = chrome.extension.getURL("images/cursor.gif");
}
follow.id = "mouseCursor";
follow.style.setProperty("z-index", "2147483647", "important");
follow.border = 0;
document.getElementById("trailimageid").appendChild(follow);
});