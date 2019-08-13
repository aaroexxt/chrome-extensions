if (window.location.host == "aaronyun.local:8080" && (window.location.pathname == "/stream.html" || window.location.pathname == "/stream.html/")) {
    console.log("[YUNRELOAD] Set timer")
    setTimeout(function(){window.location.reload()},10000);
} else {
    //console.log("[YUNRELOAD] Pathname or host dosen't match")
}