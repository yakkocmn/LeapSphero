#!/usr/bin/env node

var leapjs = require('leapjs');

var controller = new leapjs.Controller();

//var sphero = require("sphero");

//var orb = sphero("/dev/tty.Sphero-RGG-AMP-SPP");

controller.on('connect', function() {
  console.log("Successfully connected.");
});

controller.on('deviceDisconnected', function() {
  console.log("A Leap device has been disconnected.");
});

//orb.startCalibration();
console.log("calibration started");

//setTimeout(function(){
  //orb.finishCalibration();
  //console.log("calibration finished");
//}, 5000);

controller.loop(function(frame){

  if(frame.hands.length > 0)
  {
    //data about hands
    var hand = frame.hands[0];
    var position = hand.palmPosition;
    var pitchRadians = hand.pitch();
    var rollRadians = hand.roll();
    var pitchRound = Math.round(pitchRadians * 100) / 100;
    //under 0.4 for forwards and over 1.0 for back
    var rollRound = Math.round(rollRadians * 100) / 100;
    //under -0.6 for right and over 0.3 for left
  }

  while(pitchRound > 0.4)
    orb.roll(150, 0);

  //print pitch and roll
  //console.log("pitch: " + pitchRound + "  roll: " + rollRound);

});

controller.connect();
