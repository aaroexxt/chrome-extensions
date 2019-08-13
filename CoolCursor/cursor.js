/************************
THE COOLCURSOR EXTENSION
    By Aaron Becker
*///*********************

//This code is based on some code I found on a website somewhere, which I then heavily modified to make it better.
//Hope you enjoy!





setTimeout(function(){

    if (window.location.host.indexOf("google") == -1 && window.location.host.indexOf("youtube") == -1 && window.location.host.indexOf("chrome") == -1) {
        console.info("CoolCursor V3.2.9.5 active");
        document.body.style.cursor = 'none'; //Make sure cursor is hidden

        coolCursor.init("/images/cursor.gif",32,32); //path height width
        coolCursor.offset = [0,0];
        coolCursor.displayDuration = 0;
        coolCursor.start();
        coolCursor.show();
        coolCursor.initListener();
    } else {
        console.info("CoolCursor not active this page because it dosen't work here")
    }

},100);
var altPressed = false;
var allowChange = true;
var updateInterval = 0;




var coolCursor = {
        offset: [0,0],//image x,y offsets from cursor position in pixels. Enter 0,0 for no offset
        heightofimg: 0,
        widthofimg: 0,
        displayDuration: 0,//duration in seconds image should remain visible. 0 for always.
        debugMode: false,
        init: function(path, height, width) {
            if (document.getElementById("mouseCursor") == null) {
            coolCursor.heightofimg = height;
            coolCursor.widthofimg = width;
            var newDiv = document.createElement("div");
            newDiv.id = "trailimageid"
            newDiv.style = "position:absolute;visibility:visible;left:0px;top:0px;width:1px;height:1px";
            document.body.appendChild(newDiv);
            window.dispatchEvent(new CustomEvent('spawnCursor', {pathto: path}));
        } else {
            console.warn("[CoolCursor] Warning: mouseCursor element already found. Are you on a page that already uses my library?")
        }
        },

        gettrailobj: function() {
            if (document.getElementById) {
                return document.getElementById("trailimageid").style
            } else if (document.all) {
                return document.all.trailimageid.style;
            }
        },

        truebody: function() {
            return (!window.opera && document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.body
        },

        initListener: function() {
            function keydownHandler(e) {
                if (e.keyCode == 67 && altPressed) {
                    if (document.onmousemove == "" || document.onmousemove == null || document.onmousemove == "null" || document.onmousemove == undefined || document.onmousemove == "undefined") {
                        coolCursor.start();
                        coolCursor.show();
                        alert("CoolCursor active!");
                        allowChange = true;
                        document.body.style.cursor = 'none';
                    } else {
                        coolCursor.stop();
                        coolCursor.hide();
                        document.body.style.cursor = 'auto';
                        allowChange = false;
                        alert("CoolCursor disabled.");
                    }
                } else if (e.keyCode == 18 && altPressed == false) {
                    altPressed = true;
                } else if (e.keyCode != 18){
                    altPressed = false;
                }
            }
                // register your handler method for the keydown event
                    if (document.addEventListener) {
                        document.addEventListener('keydown', keydownHandler, false);
                    } else if (document.attachEvent) {
                        document.attachEvent('onkeydown', keydownHandler);
                }
        },

        hidetrail: function() {
            coolCursor.gettrailobj().visibility = "hidden"
            document.onmousemove = ""
        },


        show: function() {
            okToMove = true;
            document.getElementById("trailimageid").style.visibility = "visible";
        },

        hide: function() {
            okToMove = false;
            document.getElementById("trailimageid").style.visibility = "hidden";
        },

        start: function() {
            document.onmousemove = followmouse;
            if (coolCursor.displayDuration > 0) {
                setTimeout("coolCursor.hidetrail()", coolCursor.displayDuration * 1000);
            }
            updateInterval = setInterval(function(){coolCursor.fixElements()},1000);
        },

        stop: function() {
                document.onmousemove = "";
                clearInterval(updateInterval);
            },

        setCursorByID: function(id,cursorStyle) { //heh, don't even use it
            var elem;
            if (document.getElementById && (elem=document.getElementById(id)) ) {
                if (elem.style) {
                    elem.style.cursor=cursorStyle
                };
             }
        },

        fixElements: function() {
            if (document.getElementsByTagName && document.addEventListener) {
                var elementsToFix = ["button","input","title","span","h3","h1","img","a","p","checkbox","td","tr"];
                for (j=0; j<elementsToFix.length; j++) {
                    if (coolCursor.debugMode) {console.log("Elemsfix: "+elementsToFix[j]);}
                    for (i=0; i<document.getElementsByTagName(elementsToFix[j]).length; i++) {
                        if (coolCursor.debugMode) {console.log("Elem: "+document.getElementsByTagName(elementsToFix[j])[i]);}
                        document.getElementsByTagName(elementsToFix[j])[i].addEventListener('mouseenter', function(){
                            if (allowChange) {
                            coolCursor.hide();
                            if (coolCursor.debugMode) {console.log("Entered "+elementsToFix[j]+" element");}
                            document.body.style.cursor = 'auto';
                            }
                        });
                        document.getElementsByTagName(elementsToFix[j])[i].addEventListener('mouseleave', function(){
                            if (allowChange) {
                            coolCursor.show();
                            document.body.style.cursor = 'none';
                            if (coolCursor.debugMode) {console.log("Exited "+elementsToFix[j]+" element");}
                            }
                        });
                    }
                }
} else {
    console.error("coolCursor: either getElementsByTagName or addEventListsner is missing");
    alert("Error updating elements list! Your browser may be too old, or a page might have broken this feature. Removing it temporarily so it dosent happen again.");
    clearInterval(updateInterval);
    document.body.style.cursor = 'auto';
}
        }

        }

        function followmouse(e) {
            var xcoord = coolCursor.offset[0];
            var ycoord = coolCursor.offset[1];
            if (typeof e != "undefined") {
                xcoord += e.pageX
                ycoord += e.pageY
            } else if (typeof window.event != "undefined") {
                xcoord += coolCursor.truebody().scrollLeft + event.clientX
                ycoord += coolCursor.truebody().scrollTop + event.clientY
            }
            var docwidth = document.all ? coolCursor.truebody().scrollLeft + coolCursor.truebody().clientWidth : pageXOffset + window.innerWidth - 15
            var docheight = document.all ? Math.max(coolCursor.truebody().scrollHeight, coolCursor.truebody().clientHeight) : Math.max(document.body.offsetHeight, window.innerHeight)
            if (xcoord + coolCursor.heightofimg + 3 > docwidth || ycoord + coolCursor.widthofimg > docheight) {
                coolCursor.gettrailobj().display = "none";
            } else {
                if (okToMove) {
                    coolCursor.gettrailobj().display = "inline";
                    coolCursor.gettrailobj().left = xcoord + "px";
                    coolCursor.gettrailobj().top = ycoord + "px";
                } else {
                    coolCursor.gettrailobj().display = "none";
                }
            }
        }