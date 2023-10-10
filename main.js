

function setup() {
  
  canvas.mouseReleased(classifyCanvas);
  synth = window.speechSynthesis;
}

function preload() {

 
}



function clearCanvas() {

 
}

function draw() {

  //Defina strokeWeight como 13
  strokeWeight();
  //Defina a cor de stroke como preto
  stroke();
  //Se o moude for clicado, desenhe uma linha entre a posição antiga e atual do mouse
  if () {
    line();
  }
}

function classifyCanvas() {
 
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results);
  
  document.getElementById('label').innerHTML = 'Nome: ' + result.replace('_', ' ');


  document.getElementById('confidence').innerHTML = 'Precisão: ' + Math.round(results[0].confidence * 100) + '%';

  utterThis = new SpeechSynthesisUtterance(result.replace('_', ' '));
  synth.speak(utterThis);
  
}


