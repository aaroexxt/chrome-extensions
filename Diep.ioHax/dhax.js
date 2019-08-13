/************************
THE DIEP.IO HACKS EXTENSION
    By Aaron Becker
*///*********************

//Simple test of diep.io hacks
//Hope you enjoy!


var AUTOENTER_NAME = "deeznutsRsquish";




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

Node.prototype.fire=function(type,options){
     var event=new CustomEvent(type);
     for(var p in options){
         event[p]=options[p];
     }
     this.dispatchEvent(event);
}



var nameInterv = setInterval(function(){
    try {
        if (document.getElementById("textInput").style.height != "") {
            document.getElementById("textInput").value = AUTOENTER_NAME;
            document.fire("keydown",{keyCode:13,charCode:13});
            clearInterval(nameInterv);
        }
    } catch(e) {
        //console.error("Auto nameset error: '"+e+"'");
        clearInterval(nameInterv);
    }
},500);