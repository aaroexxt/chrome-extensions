if (window.location.host.indexOf("gizoogle") == -1 && window.location.port == "") {
    document.body.innerHTML = "Transzizzialating dat shiznit";
    setTimeout(function(){
        window.location.href = "http://gizoogle.net/tranzizzle.php?search="+window.location.href.substring(window.location.href.indexOf("//")+2,window.location.href.length);
    },0);
}