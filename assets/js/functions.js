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
  startDelay: 1500,
  backDelay: 750, // pause before backspacing
  smartBackspace: true,
  loop: false, // loop on or off (true or false)
  loopCount: false, // number of loops, false = infinite
  callback: function(){ } // call function after typing is done
});

var typed = new Typed('.write3', {
  strings: ["This website is crap", "This website is ^1000 under construction"],
  typeSpeed: 50, // typing speed
  backSpeed: 200, // typing speed
  startDelay: 3000,
  backDelay: 750, // pause before backspacing
  smartBackspace: true,
  loop: false, // loop on or off (true or false)
  loopCount: false, // number of loops, false = infinite
  callback: function(){ } // call function after typing is done
});
