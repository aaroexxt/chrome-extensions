// Saves options to chrome.storage.sync.

setInterval(function(){//Interval of checking and disabling assisted pos, cursor, and chars
    if (document.getElementById('assistedControl').checked == false) {
        document.getElementById('assistedCursor').disabled = true;
        document.getElementById('assistedPoints').disabled = true;
    } else {
        document.getElementById('assistedCursor').disabled = false;
        document.getElementById('assistedPoints').disabled = false;
    }
},100);

function save_options() {
  var lag = document.getElementById('lag').value;
  var showFPS = document.getElementById('showFPS').checked;
  var showTrack = document.getElementById('showTrack').checked;
  var showHack = document.getElementById('showHack').checked;
  var showCrash = document.getElementById('showCrash').checked;
  var showDead = document.getElementById('showDead').checked;
  var showHackXY = document.getElementById('showHackXY').checked;
  var showPointer = document.getElementById('showPointer').checked;
  var assistedControl = document.getElementById('assistedControl').checked;
  if (assistedControl == false) {
    var assistedCursor = false;
    var assistedPoints = false;
  } else {
  var assistedCursor = document.getElementById('assistedCursor').checked;
  var assistedPoints = document.getElementById('assistedPoints').checked;
}
localStorage["lag"] = lag;
localStorage["showFPS"] = showFPS;
localStorage["showTrack"] = showTrack;
localStorage["showHack"] = showHack;
localStorage["showCrash"] = showCrash;
localStorage["showDead"] = showDead;
localStorage["showHackXY"] = showHackXY;
localStorage["showPointer"] = showPointer;
localStorage["assistedControl"] = assistedControl;
localStorage["assistedCursor"] =  assistedCursor;
localStorage["assistedPoints"] =  assistedPoints;
  (function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  })();
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
var lag = localStorage["lag"];
  var showFPS = localStorage["showFPS"];
  var showTrack = localStorage["showTrack"];
  var showHack = localStorage["showHack"];
  var showCrash = localStorage["showCrash"];
  var showDead = localStorage["showDead"];
  var showHackXY = localStorage["showHackXY"];
  var showPointer = localStorage["showPointer"];
  var assistedControl = localStorage["assistedControl"];
  var assistedCursor = localStorage["assistedCursor"];
  var assistedPoints = localStorage["assistedPoints"];
    document.getElementById('lag').value = lag;
    document.getElementById('showFPS').checked = str2bool(showFPS);
    document.getElementById('showTrack').checked = str2bool(showTrack);
    document.getElementById('showHack').checked = str2bool(showHack);
    document.getElementById('showCrash').checked = str2bool(showCrash);
    document.getElementById('showDead').checked = str2bool(showDead);
    document.getElementById('showHackXY').checked = str2bool(showHackXY);
    document.getElementById('assistedControl').checked = str2bool(assistedControl);
    document.getElementById('showPointer').checked = str2bool(showPointer);
    document.getElementById('assistedPoints').checked = str2bool(assistedPoints);

}

function str2bool(strvalue){
  return (strvalue && typeof strvalue == 'string') ? (strvalue.toLowerCase() == 'true' || strvalue == '1') : (strvalue == true);
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_options);
