/************************
THE SIMPLECLOCK EXTENSION
    By Aaron Becker
*///*********************

//This is a simple extension which adds a clock to the bottom lefthand side of your browser window. Mouseover to use!
//Hope you enjoy!


var d,hour,minute,lastMouseover = 0;
var doneFading,mouseDetect,timefade = false;
var clockType = "simple";
var allowFade = true;

var timeUntilFade = 3;

String.prototype.contains = function(it) { return this.indexOf(it) != -1; }; //I know that this is bad to do

function fade(type, ms, el) {
	doneFading = false;
	setTimeout(function(){doneFading = true;},ms);
  var isIn = type === 'in',
    opacity = isIn ? 0 : 1,
    interval = 50,
    duration = ms,
    gap = interval / duration;

  if(isIn) {
    el.style.display = 'inline';
    el.style.opacity = opacity;
  }

  function func() {
    opacity = isIn ? opacity + gap : opacity - gap;
    el.style.opacity = opacity;

    if(opacity <= 0 || opacity >= 1) {window.clearInterval(fading); }//doneFading = true;}
  }

  var fading = window.setInterval(func, interval);

}

	setTimeout(function(){var NewP = document.createElement("pre"); var pText = document.createTextNode(""); NewP.appendChild(pText); NewP.style.setProperty ("z-index", "2147483647", "important"); NewP.style.setProperty ("display", "block", "important"); NewP.style.setProperty ("position", "fixed", "important"); NewP.style.setProperty ("bottom", "0", "important"); NewP.style.setProperty ("left", "10", "important"); NewP.style.setProperty ("color", "limegreen", "important"); NewP.style.setProperty ("font-family", "Menlo,Monaco,Consolas,Courier New,monospace", "important"); NewP.style.fontSize = "x-large"; NewP.id="timeLeft"; document.body.appendChild(NewP);},500);
	setTimeout(function(){document.getElementById("timeLeft").addEventListener('mouseover', function() {
	mouseDetect = true;
}, true); },500);

  setTimeout(function(){
  document.getElementById("timeLeft").addEventListener("mouseenter",function(){document.body.style.cursor = "pointer";});
  document.getElementById("timeLeft").addEventListener("mouseleave",function(){document.body.style.cursor = "auto";});
  document.getElementById("timeLeft").addEventListener("click",function(){
    if (clockType == "simple") {
        clockType = "complex";
    } else {
        clockType = "simple";
    }
    mouseDetect = true;
  });
  document.getElementById("timeLeft").addEventListener("mouseup",function(){
    setTimeout(function(){window.getSelection().removeAllRanges();},500);
  });
  document.getElementById("timeLeft").addEventListener("dblclick",function(e){
        mouseDetect = true;
        e.preventDefault();
        window.getSelection().removeAllRanges();
        var color = document.getElementById("timeLeft").style.color;
        if (color == "limegreen") {
            setColor("green");
        } else if (color == "green") {
            setColor("blue");
        } else if (color == "blue") {
            setColor("lightblue");
        } else if (color == "lightblue") {
            setColor("purple");
        } else if (color == "purple") {
            setColor("pink");
        } else if (color == "pink") {
            setColor("red");
        } else if (color == "red") {
            setColor("orange");
        } else if (color == "orange") {
            setColor("yellow");
        } else if (color == "yellow") {
            setColor("limegreen");
        }
    });

    document.getElementById("timeLeft").addEventListener("contextmenu",function(e){e.preventDefault();});
    
    document.getElementById("timeLeft").addEventListener("mousemove",function(e){e.preventDefault(); mouseDetect = true;});

    document.getElementById("timeLeft").style.backgroundColor = document.body.style.backgroundColor;
  },501);


window.addEventListener("keydown",handleKey,true);

function handleKey(e){
        if (e.keyCode == 76) {
            if (allowFade) {
                allowFade = false; 
                fade('in', 300, document.getElementById("timeLeft"));
            } else {
                allowFade = true; 
                fade('out', 1000, document.getElementById("timeLeft"));
            }
        }
    }

    function setColor(color) {
        document.getElementById("timeLeft").style.color = color;
    }

function makeUnselectable(node) {
    if (node.nodeType == 1) {
        node.setAttribute("unselectable", "on");
    }
    var child = node.firstChild;
    while (child) {
        makeUnselectable(child);
        child = child.nextSibling;
    }
}



var interval = setInterval(function(){
				if (mouseDetect == true) {
						if (doneFading && timefade) {
						if (allowFade){fade('in', 300, document.getElementById("timeLeft"))};
					}
						timefade = false;
						lastMouseover = 0;
						mouseDetect = false;
					} else {
						lastMouseover++;
					}
					if (lastMouseover >= timeUntilFade) {
						if (timefade != true) {
							if (allowFade) {fade('out', 1000, document.getElementById("timeLeft"))};
							timefade = true;
					}
				}

    d = new Date(); var hour = d.getHours();
  minute = d.getMinutes();
  second = d.getSeconds();
  amPM = (hour > 11) ? "pm" : "am";
  if(hour > 12) {
    hour -= 12;
  } else if(hour == 0) {
    hour = "12";
  }
  if(minute < 10) {
    minute = "0" + minute;
  }
  if(second < 10) {
    second = "0" + second;
  }
    if (clockType == "simple") {
		document.getElementById("timeLeft").innerHTML = hour + ":" + minute + amPM;
    } else {
        document.getElementById("timeLeft").innerHTML = hour + ":" + minute + ":" + second + amPM;
    }
},1000);