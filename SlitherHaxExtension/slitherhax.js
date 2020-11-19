/*
Welcome to my hack! It is very simple, it checks some points around the snake and moves the snake accordingly. I hope you have fun with it and please share it with your friends!
*/

String.prototype.contains = function(it) { return this.indexOf(it) != -1; }; //I know that this is bad to do
var hack = false;
var hackY = 0;
var hackX = 0;
var checkX = 0;
var checkY = 0;
var offsetX = 100;
var offsetY = 0;
var oldx = 0
var oldy = 0;
var mouseDown = false;
var x = 0;
var y = 0;
var c = 0;

var lagSetting = true;
var showFPS = true;
var showTrack = true;
var showHack = true;
var showCrash = true; 
var showDead = true; 
var showHackXY = true;
var assistedControl = true;
var showPointer = true;
var assistedCursor = true;
var assistedPoints = true;

/*var canvases = document.getElementsByTagName("canvas");
for (let i=0; i<canvases.length; i++) {
    let cI = canvases[i];
    if (cI.className == "nsi" && cI.width > 500) {
        console.log("cI: "+cI);
        cI.id = "slitherC";
    }
}*/

var checkPoints = ["0,0","10,10","10,0","0,10","-10,-10","-10,0","0,-10","20,20","20,0","0,20","-20,-20","-20,0","0,-20","30,30","30,0","0,30","-30,-30","-30,0","0,-30","40,40","40,0","0,40","-40,-40","-40,0","0,-40","40,40","40,0","0,40","-40,-40","-40,0","0,-40"];
var changePoints = ["600,0","-100,400","-100,300","600,580","-100,1000","1000,300","0,0","600,0","-100,400","-100,300","600,580","-100,1000","1000,300","0,0","600,0","-100,400","-100,300","600,580","-100,1000","1000,300","0,0","600,0","-100,400","-100,300","600,580","-100,1000","1000,300","0,0","600,0","-100,400","-100,300","600,580","-100,1000","1000,300","0,0"];

/*var checkPoints = ["0,0","10,10","10,0","0,10","-10,-10","-10,0","0,-10"];
var changePoints = ["600,0","-100,400","-100,300","600,580","-100,1000","1000,300","0,0"];*/

var RGBData = [];
var oldRGBData = [];
for (i=0; i<checkPoints.length; i++) {
    RGBData.push("");
    oldRGBData.push("");
}
var lastLoop = new Date;
var fps,fps2,gameLoop1Id,gameLoop2Id;
if (window.location.host == "slither.io") {
gameloop1Id = setInterval(gameLoop, 200);
} else {
    ID("cursor").remove();
}
function gameLoop() {
    var thisLoop = new Date;
    fps = 10000 / (thisLoop - lastLoop);
    fps = String(Math.round(fps*100)/100);
    lastLoop = thisLoop;
    if (Number(fps)<10) {
        fps = "0"+fps;
    }
    try{
    if (showHack){document.getElementById("hackIndicator").innerHTML = "Hack on: "+hack;}
    if (showHackXY){document.getElementById("dispHackX").innerHTML = "HackX: "+hackX; document.getElementById("dispHackY").innerHTML = "HackY: "+hackY;}}catch(e){clearInterval(gameLoop1Id)}
}

var interval = "";
var minimumColorChange = 60;
var debug = true;
if (window.location.host == "slither.io") {
    console.info("[SLITHERHAX] SlitherHax active");

for (i=0; i<document.getElementsByTagName("canvas").length; i++) {
    console.log("[SLITHERHAX] Searched canvases width: "+document.getElementsByTagName("canvas")[i].width); 
    if (document.getElementsByTagName("canvas")[i].width > 1000) {
        console.log("[SLITHERHAX] Found canvas width of 1100, renaming"); 
        document.getElementsByTagName("canvas")[i].id="slitherC";
    }
}
/*for (i=0; i<document.getElementsByTagName("div").length; i++) {
    if (document.getElementsByTagName("div")[i].innerHTML.length > 1) {
            console.log("[SLITHERHAX] Searched button value: "+document.getElementsByTagName("div")[i].innerHTML.substring(0,30));
    } 
    if (document.getElementsByTagName("div")[i].innerHTML.contains("Play")) {
        console.log("[SLITHERHAX] Found button with play, renaming"); 
        document.getElementsByTagName("div")[i].id="playButton";
    }
}*/
try{var slitherCanvas = ID('slitherC');}catch(e){var slitherCanvas = null; console.error("No slither.io canvas found, but you are on slither.io. Uh oh! (this shouldn't happen)"); alert("No canvas found, but user is on slither.io? (This should not happen!!!)")}

if (showFPS){var NewP = document.createElement("pre"); var pText = document.createTextNode(""); NewP.appendChild(pText); NewP.style.setProperty ("z-index", "2147483647", "important"); NewP.style.setProperty ("display", "block", "important"); NewP.style.setProperty ("position", "fixed", "important"); NewP.style.setProperty ("bottom", "30", "important"); NewP.style.setProperty ("color", "limegreen", "important"); NewP.style.setProperty ("font-family", "Menlo,Monaco,Consolas,Courier New,monospace", "important"); NewP.style.fontSize = "small"; NewP.id="fpsDisp"; document.body.appendChild(NewP);}
if (showHack){var NewP = document.createElement("pre"); var pText = document.createTextNode(""); NewP.appendChild(pText); NewP.style.setProperty ("z-index", "2147483647", "important"); NewP.style.setProperty ("display", "block", "important"); NewP.style.setProperty ("position", "fixed", "important"); NewP.style.setProperty ("bottom", "45", "important"); NewP.style.setProperty ("color", "limegreen", "important"); NewP.style.setProperty ("font-family", "Menlo,Monaco,Consolas,Courier New,monospace", "important"); NewP.style.fontSize = "small"; NewP.id="hackIndicator"; document.body.appendChild(NewP);} 
if (showHackXY){var NewP = document.createElement("pre"); var pText = document.createTextNode(""); NewP.appendChild(pText); NewP.style.setProperty ("z-index", "2147483647", "important"); NewP.style.setProperty ("display", "block", "important"); NewP.style.setProperty ("position", "fixed", "important"); NewP.style.setProperty ("bottom", "60", "important"); NewP.style.setProperty ("color", "limegreen", "important"); NewP.style.setProperty ("font-family", "Menlo,Monaco,Consolas,Courier New,monospace", "important"); NewP.style.fontSize = "small"; NewP.id="dispHackX"; document.body.appendChild(NewP); 
var NewP = document.createElement("pre"); var pText = document.createTextNode(""); NewP.appendChild(pText); NewP.style.setProperty ("z-index", "2147483647", "important"); NewP.style.setProperty ("display", "block", "important"); NewP.style.setProperty ("position", "fixed", "important"); NewP.style.setProperty ("bottom", "75", "important"); NewP.style.setProperty ("color", "limegreen", "important"); NewP.style.setProperty ("font-family", "Menlo,Monaco,Consolas,Courier New,monospace", "important"); NewP.style.fontSize = "small"; NewP.id="dispHackY"; document.body.appendChild(NewP);}
if (showCrash){var NewP = document.createElement("pre"); var pText = document.createTextNode(""); NewP.appendChild(pText); NewP.style.setProperty ("z-index", "2147483647", "important"); NewP.style.setProperty ("display", "block", "important"); NewP.style.setProperty ("position", "fixed", "important"); NewP.style.setProperty ("bottom", "90", "important"); NewP.style.setProperty ("color", "limegreen", "important"); NewP.style.setProperty ("font-family", "Menlo,Monaco,Consolas,Courier New,monospace", "important"); NewP.style.fontSize = "small"; NewP.id="crashSide"; document.body.appendChild(NewP);}
if (showDead){var NewP = document.createElement("pre"); var pText = document.createTextNode(""); NewP.appendChild(pText); NewP.style.setProperty ("z-index", "2147483647", "important"); NewP.style.setProperty ("display", "block", "important"); NewP.style.setProperty ("position", "fixed", "important"); NewP.style.setProperty ("bottom", "105", "important"); NewP.style.setProperty ("color", "limegreen", "important"); NewP.style.setProperty ("font-family", "Menlo,Monaco,Consolas,Courier New,monospace", "important"); NewP.style.fontSize = "small"; NewP.id="deadIndicator"; document.body.appendChild(NewP);}
if (showTrack){var NewP = document.createElement("pre"); var pText = document.createTextNode(""); NewP.appendChild(pText); NewP.style.setProperty ("z-index", "2147483647", "important"); NewP.style.setProperty ("display", "block", "important"); NewP.style.setProperty ("position", "fixed", "important"); NewP.style.setProperty ("bottom", "120", "important"); NewP.style.setProperty ("color", "limegreen", "important"); NewP.style.setProperty ("font-family", "Menlo,Monaco,Consolas,Courier New,monospace", "important"); NewP.style.fontSize = "small"; NewP.id="trackingX"; document.body.appendChild(NewP);
var NewP = document.createElement("pre"); var pText = document.createTextNode(""); NewP.appendChild(pText); NewP.style.setProperty ("z-index", "2147483647", "important"); NewP.style.setProperty ("display", "block", "important"); NewP.style.setProperty ("position", "fixed", "important"); NewP.style.setProperty ("bottom", "135", "important"); NewP.style.setProperty ("color", "limegreen", "important"); NewP.style.setProperty ("font-family", "Menlo,Monaco,Consolas,Courier New,monospace", "important"); NewP.style.fontSize = "small"; NewP.id="trackingY"; document.body.appendChild(NewP);}
if (showCrash){ID("crashSide").innerHTML="No crash detected";}
if (showDead){ID("deadIndicator").innerHTML="Dead: false";}
if (showTrack){ID("trackingX").innerHTML="Tracking X: 0";
ID("trackingY").innerHTML="Tracking Y: 0";}
if (showFPS){ID("fpsDisp").innerHTML="FPS: Not activated yet";}
if (assistedCursor){var img = ID("cursor");
img.style.setProperty ("z-index", "2147483647", "important"); 
img.style.setProperty ("display", "block", "important"); 
img.style.setProperty ("position", "absolute", "important");} else {
    ID("cursor").remove();
}
function relMouseCoords(event){
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;
    var currentElement = this;

    do{
        totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
        totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
    }
    while(currentElement = currentElement.offsetParent)

    canvasX = event.pageX - totalOffsetX;
    canvasY = event.pageY - totalOffsetY;

    return {x:canvasX, y:canvasY}
}


HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;

function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "[SLITHERHAX] Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}
function Update(e) {
    if (mouseDown) {
if (ID("slitherC").style.display != "none") {
/*var mousePos = slitherCanvas.relMouseCoords(e);
    x = mousePos.x;
    y = mousePos.y;*/
    x = e.clientX;
    y = e.clientY;
    setPos(ID("cursor"),x,y);
    if (oldx-x > 10 || oldy-y > 10) {
    c = slitherCanvas.getContext("2d");
    try{clearInterval(gameLoop2Id)}catch(e){}
    gameLoop2Id = setInterval(function(){
        if (showFPS) {
        var thisLoop = new Date;
    fps2 = 55 / (thisLoop - lastLoop);
    fps2 = String(Math.round(fps2*100)/100);
    lastLoop = thisLoop;
    if (Number(fps2)<10) {
        fps2 = "0"+fps2;
    }
    document.getElementById("fpsDisp").innerHTML = "External FPS: "+fps+", Internal FPS: "+fps2;}
        if (Number(RGBData[0].split(" ")[0])-Number(oldRGBData[0].split(" ")[0])<1 && Number(RGBData[0].split(" ")[0])-Number(oldRGBData[0].split(" ")[0])>-1) {
            console.log("You died!");
            if (showDead){ID("deadIndicator").innerHTML = "Dead: true";}
        } else {
            if (showDead){ID("deadIndicator").innerHTML = "Dead: false";}
        }
    for (i=0; i<checkPoints.length; i++) {
        checkX = /*x +*/ Number(checkPoints[i].split(",")[0]);// + offsetX;
        checkY = /*y +*/ Number(checkPoints[i].split(",")[1]);// + offsetY;
        //console.log("CheckX: "+checkX+", CheckY: "+checkY);
        imgData = c.getImageData(checkX, checkY, ID("slitherC").width, ID("slitherC").height).data;
        RGBData[i] = imgData[0]+" "+imgData[1]+" "+imgData[2];
        //console.log(RGBData[i]+oldRGBData[i]);
        if (RGBData[i].split(" ")[0]-oldRGBData[i].split(" ")[0] > minimumColorChange || RGBData[i].split(" ")[1]-oldRGBData[i].split(" ")[1] > minimumColorChange || RGBData[i].split(" ")[2]-oldRGBData[i].split(" ")[2] > minimumColorChange) {
            if (assistedPoints){slitherCanvas.drawPoint(checkX,checkY,0,255,0,255);}
            if (showCrash){ID("crashSide").innerHTML = "Crash at x"+checkPoints[i].split(",")[0]+", y"+checkPoints[i].split(",")[1];}
            hack = true;
            xm = Number(changePoints[i].split(",")[0]);
            ym = Number(changePoints[i].split(",")[1]);
            hackX = xm;
            hackY = ym;
            //console.log("XM set: "+xm+", YM set: "+ym);
        } else {
            hack = false;
            if (assistedPoints){slitherCanvas.drawPoint(checkX,checkY,255,0,0,255);}
        }
    }
    if (showTrack){ID("trackingX").innerHTML="Tracking X: "+x;
    ID("trackingY").innerHTML="Tracking Y: "+y;}
        for (j=0; j<oldRGBData.length; j++) {
            oldRGBData[j] = RGBData[j];
        }
    },200);
} else {
    oldy = y;
    oldx = x;
}
}
}
}

/*window.onload = function() {
setTimeout(function(){this.addEventListener('mousemove', mouseUpdated)},100);
}*/

document.onmousemove = function(e) {
    Update(e);
}

document.onmousedown = function() {
    mouseDown = true;
}

document.onmouseup = function() {
    mouseDown = false;
}

} else {
    console.log("[SLITHERHAX] SlitherIOHax inactive");
}

function ID(el) {
    return document.getElementById(el);
}


function setPos(el,x,y) {
  el.style.position = "absolute";
  el.style.left = x+'px';
  el.style.top = y+'px';
}

function drawPoint(x,y,r,g,b,a){//Not in HTML5, so had to add it
var canvas = this;
var ctx = canvas.getContext("2d");
var id = ctx.createImageData(2,2);
var d  = id.data;
d[0]   = r;
d[1]   = g;
d[2]   = b;
d[3]   = a;
ctx.putImageData( id, x, y );
}
HTMLCanvasElement.prototype.drawPoint = drawPoint;

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}