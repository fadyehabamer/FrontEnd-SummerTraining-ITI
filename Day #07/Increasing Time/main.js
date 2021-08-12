var minutes_span = document.getElementById("minutes");
var seconds_span = document.getElementById("seconds");
var totalSeconds = 0;

function startNow() {
  begin = setInterval(beginTime, 1000);
}

function stopNow() {
  clearInterval(begin)
  totalSeconds = 0
  minutes_span.innerText = "00"
  seconds_span.innerText = "00"
}

function beginTime() {
  totalSeconds+=1;

  seconds_span.innerText = CheckZero(totalSeconds % 60);

  //   * change every 60 sec
  minutes_span.innerText = CheckZero(parseInt(totalSeconds / 60));
}


function CheckZero(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}