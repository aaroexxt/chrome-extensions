var blockList = ["youtube.com,1800","addictinggames.com,1800","miniclip.com,1800","armorgames.com,1800","kongregate.com,1800","newgrounds.com,1800","roblox.com,600","minecraft.net,600","agar.io,600"]; //Page then comma then time (in seconds) 0 seconds for no access
var alerts = ["You have 10 seconds left on this site, you should probably save your work!^10","You have 30 seconds left on this site, maybe do something!^30","You have 10 minutes left on this site.^600","You have 30 minutes left on this site.^1800","You have 1 hour left on this site.^3600"];
var hax = false;

var interval = "";
var timeLeft = 1;
var faded = false;
var doneFading = false;
var mouseDetect = false;
var timefade = false;
var lastMouseover = 0;

var timeUntilFade = 2;

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

setTimeout(function(){var NewP = document.createElement("pre"); var pText = document.createTextNode(""); NewP.appendChild(pText); NewP.style.setProperty ("z-index", "2147483647", "important"); NewP.style.setProperty ("display", "block", "important"); NewP.style.setProperty ("position", "fixed", "important"); NewP.style.setProperty ("bottom", "0", "important"); NewP.style.setProperty ("color", "green", "important"); NewP.style.setProperty ("font-family", "Menlo,Monaco,Consolas,Courier New,monospace", "important"); NewP.style.fontSize = "x-large"; NewP.id="timeLeft"; document.body.appendChild(NewP);},500);
String.prototype.contains = function(it) { return this.indexOf(it) != -1; }; //I know that this is bad to do
function fixZero (time) {
    if (time < 10) {time   = "0"+time;}
    return time;
}
setTimeout(function(){document.getElementById("timeLeft").addEventListener('mouseover', function() {
	mouseDetect = true;
}, true);},500);
(function(){
for (i=0; i<blockList.length; i++) {
	var oldi = 0;
	console.log("[BLOCKER] Host: "+window.location.host+", blockList entry: "+"www."+blockList[i].split(",")[0]+", matches = "+eval(window.location.host == "www."+blockList[i].split(",")[0] || window.location.host == blockList[i].split(",")[0]));
	if (window.location.host == "www."+blockList[i].split(",")[0] || window.location.host == blockList[i].split(",")[0]) {
		if (localStorage.getItem("remainingTime") == "" || localStorage.getItem("remainingTime") == null || localStorage.getItem("remainingTime") == undefined) {
			timeLeft = blockList[i].split(",")[1];
			localStorage.setItem("remainingTime",timeLeft);
			console.log("[BLOCKER] Set new localStorage");
		} else {
			timeLeft = localStorage.getItem("remainingTime");
			console.log("[BLOCKER] Got old localStorage, value = "+localStorage.getItem("remainingTime"));
		}
		oldi=i;
		i = blockList.length;
		var internalTimeLeft = timeLeft;
		interval = setInterval(function(){
			if (timeLeft <= 0) {
      			var now = new Date(); var night = new Date(now.getFullYear(),now.getMonth(),now.getDate() + 1,0,0,0); var msUntilMidnight = night.getTime() - now.getTime(); var timeUntilMidnight = Math.round(msUntilMidnight/1000/60/60)+":"+Math.round(msUntilMidnight/1000/60-(60*Math.round(msUntilMidnight/1000/60/60)))+":"+Math.round(msUntilMidnight/1000)-Math.floor(Number(String(3600/msUntilMidnight/1000/60/60).substring(0,5)))
					if (faded && doneFading) {
						if (timeUntilMidnight == null || timeUntilMidnight == undefined || timeUntilMidnight == NaN) {
						document.body.innerHTML = "<pre>   I'm sorry, your time on this page has expired for today. Contact Aaron Becker at 650-533-3585 if you think that this is a mistake.</pre>";
					} else {
						document.body.innerHTML = "<pre>   I'm sorry, your time on this page has expired for today. Contact Aaron Becker at 650-533-3585 if you think that this is a mistake. Time until reset is "+timeUntilMidnight+".</pre>";
					} } else {
					if (faded == false && doneFading == false && timeUntilMidnight == null || timeUntilMidnight == undefined || timeUntilMidnight == NaN) {
						fade('out', 5000, document.body);
						faded = true;
						setTimeout(function(){document.body.innerHTML = "<pre>   I'm sorry, your time on this page has expired for today. Contact Aaron Becker at 650-533-3585 if you think that this is a mistake.</pre>"; fade('in', 5000, document.body);},5000);
					} else if (faded == false && doneFading == false) {
						fade('out', 5000, document.body);
						faded = true;
						setTimeout(function(){document.body.innerHTML = "<pre>   I'm sorry, your time on this page has expired for today. Contact Aaron Becker at 650-533-3585 if you think that this is a mistake. Time until reset is "+timeUntilMidnight+".</pre>"; fade('in', 5000, document.body);},5000);
				}
			}

			} else {

					if (mouseDetect == true) {
						if (doneFading && timefade) {
						fade('in', 300, document.getElementById("timeLeft"));
					}
						timefade = false;
						lastMouseover = 0;
						mouseDetect = false;
					} else {
						lastMouseover++;
					}
					if (lastMouseover >= timeUntilFade) {
						if (timefade != true) {
							fade('out', 1000, document.getElementById("timeLeft"));
							timefade = true;
					}
				}
				document.getElementById("timeLeft").innerHTML = "Time Left: "+timeLeft;
				for (j=0; j<alerts.length; j++) {
					if (alerts[j].split("^")[1] == timeLeft) {
						alert(alerts[j].split("^")[0]);
					}
				}
			}
			if (new Date().toTimeString().split(' ')[0] == "0:0:0" || new Date().toTimeString().split(' ')[0] == "00:00:00" || new Date().toTimeString().split(' ')[0] == "24:0:0" || new Date().toTimeString().split(' ')[0] == "24:00:00" || hax) {
				timeLeft = blockList[oldi].split(",")[1];
				localStorage.setItem("time",blockList[oldi].split(",")[1]);
				console.log("[BLOCKER] Reset time to "+localStorage.getItem("remainingTime"));
				clearInterval(interval);
				setTimeout(function(){window.location.reload(true);},100);
			}
			if (internalTimeLeft != timeLeft) { //2nd is checking if it is first run, values may be different
					console.log("Cheater! Dumping values: timeLeft: "+timeLeft+", internalTimeLeft: "+internalTimeLeft+", matching = "+eval(internalTimeLeft == timeLeft));
					timeLeft = 0;
					internalTimeLeft = timeLeft;
					localStorage.setItem("time",timeLeft);
					window.location.reload(true);
				} else {
					timeLeft--;
					internalTimeLeft--;
					localStorage.setItem("time",timeLeft);
					//console.log("Dumping values: timeLeft: "+timeLeft+", internalTimeLeft: "+internalTimeLeft+", matching = "+eval(internalTimeLeft == timeLeft));
				}
		},1000);
	}
}
})();