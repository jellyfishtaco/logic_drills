function doTrafficLights() {
  turnOffLight();
  var activeLight = getActiveLight();
  if (activeLight === 'yellow') {
    turnYellow();
  }
  if (activeLight === 'green') {
    turnGreen();
  }
  if (activeLight === 'red') {
    turnRed();
  }
    
    
    
  console.log(activeLight);

}



function turnOffLights() {
  $('.traffic-light').removeClass('yellow-on red-on green-on');
}

function turnGreen() {
  turnOffLights();
  $('.green-light').addClass('green-on');
}

function turnYellow() {
  turnOffLights();
  $('.yellow-light').addClass('yellow-on');
}

function turnRed() {
  turnOffLights();
  $('.red-light').addClass('red-on');
}

function getActiveLight() {
  return (['red', 'green', 'yellow'])[Math.floor(Math.random() * 3)];
}

function handleClicks() {
  $('.js-control-lights').click(function() {
    doTrafficLights();
  });
}

$(handleClicks);
