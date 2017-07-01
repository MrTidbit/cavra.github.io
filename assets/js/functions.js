var contentContainer = document.getElementById('contentContainer');
var contentFrame = document.getElementById('contentFrame');


var typed = new Typed('.write', {
  strings: ["Hello, World."],
  typeSpeed: 40, // typing speed
  startDelay: 0,
  backDelay: 750, // pause before backspacing
  smartBackspace: true,
  loop: false, // loop on or off (true or false)
  loopCount: false, // number of loops, false = infinite
  callback: function(){ } // call function after typing is done
});

var typed = new Typed('.write2', {
  strings: ["My name is Cory Avra"],
  typeSpeed: 40, // typing speed
  startDelay: 2000,
  backDelay: 750, // pause before backspacing
  smartBackspace: true,
  loop: false, // loop on or off (true or false)
  loopCount: false, // number of loops, false = infinite
  callback: function(){ } // call function after typing is done
});
