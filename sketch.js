let xBolinha = 0;
let diametro = 0;
let yBolinha = 200;

let velocidadeXBolinha = 6;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  
  //criar bolinha
  circle(xBolinha,yBolinha,diametro);
  
  //movimentação bolinha
  xBolinha += velocidadeXBolinha;
  
  //colisão com as borda 
  if (xBolinha > width || xBolinha < 0){
    xBolinha = 0;
    diametro = 0;
  }
  //mudança do tamanho
  if (xBolinha > 100){
    diametro += 3;
  }
  if (xBolinha > 300){
    diametro -= 6 ;
  }
  if (xBolinha > 500){
    diametro *= 0 ;
  }
}