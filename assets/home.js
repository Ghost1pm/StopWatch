  var second = 00;
  var tens = 00;
  var minute = 00;
  var hover = 00;
  var appendhover = document.getElementById('hover');
  var appendminute = document.getElementById('minute');
  var appendsecond = document.getElementById('second');
  var appendtens = document.getElementById('tens');
  var btnstart = document.getElementById('btn-Start');
  var btnstop = document.getElementById('btn-Stop');
  var btnreset = document.getElementById('btn-Reset');
  var Interval ;

    function start() {
      clearInterval(Interval);
      Interval = setInterval(startTime, 10);
    }
    function stop() {
      clearInterval(Interval);

    }
    function reset() {
      clearInterval(Interval);
      hover="00";
      minute="00";
      second="00";
      tens="00";
      appendtens.innerHTML = tens;
      appendsecond.innerHTML = second;
      appendminute.innerHTML = minute;
      appendhover.innerHTML = hover;

    }

    function startTime () {
      tens++

      if (tens <= 9) {
        appendtens.innerHTML ='0' + tens;
      }
      if (tens > 9) {
        appendtens.innerHTML = tens;
      }
      if (tens >  99) {
        second++;
        appendsecond.innerHTML = '0' + second;
        tens=0;
        appendtens.innerHTML ='0' + tens;
      }
      if (second > 9) {
        appendsecond.innerHTML = second;
      }
      if (second >60) {
        minute++;
        appendminute.innerHTML = '0' + minute;
        second=0;
        appendsecond.innerHTML = second;
      }
      if (minute > 9) {
        appendminute.innerHTML = minute;
      }
      if (minute >60) {
        hover++;
        appendminute.innerHTML = '0' + hover;
        minute=0;
        appendminute.innerHTML = minute;
      }
      if (hover > 9) {
        appendminute.innerHTML = hover;
      }
    }
