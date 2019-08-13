var hack = false;
var hackY = 0;
var hackX = 0;
//var checkPoints = ["+0,+0","+10,+10","+10,+0","+0,+10","-10,-10","-10,+0","+0,-10","+20,+20","+20,+0","+0,+20","-20,-20","-20,+0","+0,-20","+30,+30","+30,+0","+0,+30","-30,-30","-30,+0","+0,-30","+40,+40","+40,+0","+0,+40","-40,-40","-40,+0","+0,-40","+40,+40","+40,+0","+0,+40","-40,-40","-40,+0","+0,-40"];
var checkPoints = ["+50,+50","-50,-50"];
var lastLoop = new Date;
var fps,gameLoopId;
if (window.location.host == "slither.io") {
gameloopId = setInterval(gameLoop, 1);
}
function gameLoop() {
    var thisLoop = new Date;
    fps = 100000 / (thisLoop - lastLoop);
    fps = String(Math.round(fps*100)/100);
    lastLoop = thisLoop;
    if (Number(fps)<10) {
        fps = "0"+fps;
    }
    xm = hackX;
    ym = hackY;
    try{document.getElementById("fpsDisp").innerHTML = "FPS: "+fps;
    document.getElementById("hackIndicator").innerHTML = "Hack on: "+hack;
    document.getElementById("dispHackX").innerHTML = "HackX: "+hackX;
    document.getElementById("dispHackY").innerHTML = "HackY: "+hackY;}catch(e){clearInterval(gameLoopId)}
}

var interval = "";
var minimumColorChange = 60;
var lastUpdate1,lastUpdate2,lastUpdate3,lastUpdate4,lastUpdate5 = "0 0 0";
var c,p1,p2,p3,p4,p5 = 0;
var debug = true;
if (window.location.host == "slither.io") {
    console.info("[SLITHERHAX] SlitherHax active");

for (i=0; i<document.getElementsByTagName("canvas").length; i++) {
    console.log("[SLITHERHAX] Searched canvases width: "+document.getElementsByTagName("canvas")[i].width); 
    if (document.getElementsByTagName("canvas")[i].width == 1100) {
        console.log("[SLITHERHAX] Found canvas width of 1100, renaming"); 
        document.getElementsByTagName("canvas")[i].id="slitherC";
    }
}
try{var slitherCanvas = ID('slitherC');}catch(e){console.error("No canvas found, but you are on slither.io. WTF? (this shouldn't happen)");}

var NewP = document.createElement("pre"); var pText = document.createTextNode(""); NewP.appendChild(pText); NewP.style.setProperty ("z-index", "2147483647", "important"); NewP.style.setProperty ("display", "block", "important"); NewP.style.setProperty ("position", "fixed", "important"); NewP.style.setProperty ("bottom", "30", "important"); NewP.style.setProperty ("color", "limegreen", "important"); NewP.style.setProperty ("font-family", "Menlo,Monaco,Consolas,Courier New,monospace", "important"); NewP.style.fontSize = "small"; NewP.id="fpsDisp"; document.body.appendChild(NewP); 
var NewP = document.createElement("pre"); var pText = document.createTextNode(""); NewP.appendChild(pText); NewP.style.setProperty ("z-index", "2147483647", "important"); NewP.style.setProperty ("display", "block", "important"); NewP.style.setProperty ("position", "fixed", "important"); NewP.style.setProperty ("bottom", "45", "important"); NewP.style.setProperty ("color", "limegreen", "important"); NewP.style.setProperty ("font-family", "Menlo,Monaco,Consolas,Courier New,monospace", "important"); NewP.style.fontSize = "small"; NewP.id="hackIndicator"; document.body.appendChild(NewP); 
var NewP = document.createElement("pre"); var pText = document.createTextNode(""); NewP.appendChild(pText); NewP.style.setProperty ("z-index", "2147483647", "important"); NewP.style.setProperty ("display", "block", "important"); NewP.style.setProperty ("position", "fixed", "important"); NewP.style.setProperty ("bottom", "60", "important"); NewP.style.setProperty ("color", "limegreen", "important"); NewP.style.setProperty ("font-family", "Menlo,Monaco,Consolas,Courier New,monospace", "important"); NewP.style.fontSize = "small"; NewP.id="dispHackX"; document.body.appendChild(NewP); 
var NewP = document.createElement("pre"); var pText = document.createTextNode(""); NewP.appendChild(pText); NewP.style.setProperty ("z-index", "2147483647", "important"); NewP.style.setProperty ("display", "block", "important"); NewP.style.setProperty ("position", "fixed", "important"); NewP.style.setProperty ("bottom", "75", "important"); NewP.style.setProperty ("color", "limegreen", "important"); NewP.style.setProperty ("font-family", "Menlo,Monaco,Consolas,Courier New,monospace", "important"); NewP.style.fontSize = "small"; NewP.id="dispHackY"; document.body.appendChild(NewP);
var NewP = document.createElement("pre"); var pText = document.createTextNode(""); NewP.appendChild(pText); NewP.style.setProperty ("z-index", "2147483647", "important"); NewP.style.setProperty ("display", "block", "important"); NewP.style.setProperty ("position", "fixed", "important"); NewP.style.setProperty ("bottom", "90", "important"); NewP.style.setProperty ("color", "limegreen", "important"); NewP.style.setProperty ("font-family", "Menlo,Monaco,Consolas,Courier New,monospace", "important"); NewP.style.fontSize = "small"; NewP.id="crashSide"; document.body.appendChild(NewP);
var NewP = document.createElement("pre"); var pText = document.createTextNode(""); NewP.appendChild(pText); NewP.style.setProperty ("z-index", "2147483647", "important"); NewP.style.setProperty ("display", "block", "important"); NewP.style.setProperty ("position", "fixed", "important"); NewP.style.setProperty ("bottom", "105", "important"); NewP.style.setProperty ("color", "limegreen", "important"); NewP.style.setProperty ("font-family", "Menlo,Monaco,Consolas,Courier New,monospace", "important"); NewP.style.fontSize = "small"; NewP.id="deadIndicator"; document.body.appendChild(NewP);
var NewP = document.createElement("pre"); var pText = document.createTextNode(""); NewP.appendChild(pText); NewP.style.setProperty ("z-index", "2147483647", "important"); NewP.style.setProperty ("display", "block", "important"); NewP.style.setProperty ("position", "fixed", "important"); NewP.style.setProperty ("bottom", "120", "important"); NewP.style.setProperty ("color", "limegreen", "important"); NewP.style.setProperty ("font-family", "Menlo,Monaco,Consolas,Courier New,monospace", "important"); NewP.style.fontSize = "small"; NewP.id="trackingX"; document.body.appendChild(NewP);
var NewP = document.createElement("pre"); var pText = document.createTextNode(""); NewP.appendChild(pText); NewP.style.setProperty ("z-index", "2147483647", "important"); NewP.style.setProperty ("display", "block", "important"); NewP.style.setProperty ("position", "fixed", "important"); NewP.style.setProperty ("bottom", "135", "important"); NewP.style.setProperty ("color", "limegreen", "important"); NewP.style.setProperty ("font-family", "Menlo,Monaco,Consolas,Courier New,monospace", "important"); NewP.style.fontSize = "small"; NewP.id="trackingY"; document.body.appendChild(NewP);
ID("crashSide").innerHTML="No crash detected";
ID("deadIndicator").innerHTML="Dead: false";
ID("trackingX").innerHTML="Tracking X: 0";
ID("trackingY").innerHTML="Tracking Y: 0";
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
function everything(e) {
if (ID("slitherC").style.display != "none") {
var mousePos = slitherCanvas.relMouseCoords(e);
    x = mousePos.x;
    y = mousePos.y;
    c = slitherCanvas.getContext('2d');

    p1 = c.getImageData(x, y, 1, 1).data; //Center of snake
    p2 = c.getImageData(x-50, y, 1, 1).data; //Below snake
    p3 = c.getImageData(x+50, y, 1, 1).data; //Above snake
    p4 = c.getImageData(x, y-50, 1, 1).data; //Left of snake
    p5 = c.getImageData(x, y+50, 1, 1).data; //Right of snake
    lastUpdate1 = p1[0]+" "+p1[1]+" "+p1[2];
    lastUpdate2 = p2[0]+" "+p2[1]+" "+p2[2];
    lastUpdate3 = p3[0]+" "+p3[1]+" "+p3[2];
    lastUpdate4 = p4[0]+" "+p4[1]+" "+p4[2];
    lastUpdate5 = p5[0]+" "+p5[1]+" "+p5[2];
    var coord = "x=" + x + ", y=" + y;
    ID("trackingX").innerHTML="Tracking X: "+x;
    ID("trackingY").innerHTML="Tracking Y: "+y;
    //console.log("[SLITHERHAX] New data from move: Coords: "+coord);
    try{clearInterval(interval);}catch(e){}
    interval = setInterval(function(){
        c = slitherCanvas.getContext('2d');
        p1 = c.getImageData(x, y, 1, 1).data; //Center of snake
        p2 = c.getImageData(x-50, y, 1, 1).data; //Below snake
        p3 = c.getImageData(x+50, y, 1, 1).data; //Above snake
        p4 = c.getImageData(x, -50, 1, 1).data; //Left of snake
        p5 = c.getImageData(x, +50, 1, 1).data; //Right of snake
        if (debug){console.log("Debug log: "+p1[0]+" "+p1[1]+" "+p1[2]+", "+lastUpdate1);}//+", rgb diff "+Number(p1[0])-Number(lastUpdate1.split(" ")[0])+" "+Number(p1[1])-Number(lastUpdate1.split(" ")[1])+" "+Number(p1[2])-Number(lastUpdate1.split(" ")[2])
        if (p1[0] == Number(lastUpdate1.split(" ")[0])) {
            //console.log("You died!");
            ID("deadIndicator").innerHTML = "Dead: true";
        } else {
            ID("deadIndicator").innerHTML = "Dead: false"
        }
        if (p1[0]-Number(lastUpdate1.split(" ")[0]) > minimumColorChange || p1[1]-Number(lastUpdate1.split(" ")[1]) > minimumColorChange || p1[2]-Number(lastUpdate1.split(" ")[2]) > minimumColorChange) {
            console.warn("Crash centered: rgb "+p1[0]+" "+p1[1]+" "+p1[2]);
            document.getElementById("crashSide").innerHTML="Crash: centered (probably dead)";
            hack = true;
        } else {
            //console.log("No crash centered: rgb "+p1[0]+" "+p1[1]+" "+p1[2]);
            document.getElementById("crashSide").innerHTML="No crash detected";
            hack = false;
            hackX = 0;
            hackY = 0;
        }
        if (p2[0]-Number(lastUpdate2.split(" ")[0]) > minimumColorChange || p2[1]-Number(lastUpdate2.split(" ")[1]) > minimumColorChange || p2[2]-Number(lastUpdate2.split(" ")[2]) > minimumColorChange) {
            console.warn("Crash below: rgb "+p2[0]+" "+p2[1]+" "+p2[2]);
            document.getElementById("crashSide").innerHTML="Crash: below";
            hack = true;
            hackX = 0;
            hackY = 100;
        } else {
            //console.log("No crash below: rgb "+p2[0]+" "+p2[1]+" "+p2[2]);
            hack = false;
        }
        if (p3[0]-Number(lastUpdate3.split(" ")[0]) > minimumColorChange || p3[1]-Number(lastUpdate3.split(" ")[1]) > minimumColorChange || p3[2]-Number(lastUpdate3.split(" ")[2]) > minimumColorChange) {
            console.warn("Crash above: rgb "+p3[0]+" "+p3[1]+" "+p3[2]);
            document.getElementById("crashSide").innerHTML="Crash: above";
            hack = true;
            hackX = 0;
            hackY = -100;
        } else {
            //console.log("No crash above: rgb "+p3[0]+" "+p3[1]+" "+p3[2]);
            hack = false; 
        }
        if (p4[0]-Number(lastUpdate4.split(" ")[0]) > minimumColorChange || p4[1]-Number(lastUpdate4.split(" ")[1]) > minimumColorChange || p4[2]-Number(lastUpdate4.split(" ")[2]) > minimumColorChange) {
            console.warn("Crash left: rgb "+p4[0]+" "+p4[1]+" "+p4[2]);
            document.getElementById("crashSide").innerHTML="Crash: left";
            hack = true;
            hackX = 200;
            hackY = 10;
        } else {
            //console.log("No crash left: rgb "+p4[0]+" "+p4[1]+" "+p4[2]); 
            hack = false;
        }
        if (p5[0]-Number(lastUpdate5.split(" ")[0]) > minimumColorChange || p5[1]-Number(lastUpdate5.split(" ")[1]) > minimumColorChange || p5[2]-Number(lastUpdate5.split(" ")[2]) > minimumColorChange) {
            console.warn("Crash right: rgb "+p5[0]+" "+p5[1]+" "+p5[2]);
            hack = true;
            hackX = -200;
            hackY = 10;
        } else {
            //console.log("No crash right: rgb "+p5[0]+" "+p5[1]+" "+p5[2]);
            hack = false; 
        }
        lastUpdate1 = p1[0]+" "+p1[1]+" "+p1[2];
        lastUpdate2 = p2[0]+" "+p2[1]+" "+p2[2];
        lastUpdate3 = p3[0]+" "+p3[1]+" "+p3[2];
        lastUpdate4 = p4[0]+" "+p4[1]+" "+p4[2];
        lastUpdate5 = p5[0]+" "+p5[1]+" "+p5[2];
    },500);
}
}

/*window.onload = function() {
setTimeout(function(){this.addEventListener('mousemove', everything)},100);
}*/

document.onmousemove = function(e) {
    everything(e);
}

} else {
    console.log("[SLITHERHAX] SlitherIOHax inactive");
}

function ID(el) {
    return document.getElementById(el);
}
