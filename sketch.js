//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
//variáveis da velocidade da bolinha
let velocidadex = 2;
let velocidadey = 2;
let raio = diametro/2
//variáveis da raquete
let xraquete = 5
let yraquete = 150
let wraquete = 10
let hraquete = 90
//variáveis da velocidade da raquete
let velocidadeyr = 6

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda ();
  mostraRaquete ();
  movimentaminhaRaquete ();
  verificaColisaoRaquete(); 
 }
function mostraRaquete (){
  rect(xraquete, yraquete, wraquete, hraquete);
}

function movimentaminhaRaquete (){
  if (keyIsDown(UP_ARROW)) {
    yraquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yraquete += 10;
}
  }
  
function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro)
}

function movimentaBolinha(){
   xBolinha += velocidadex
  yBolinha += velocidadey
  
}

function verificaColisaoBorda (){
  if (xBolinha + raio> width ||
   xBolinha - raio < 0) {
  velocidadex *= -1;
  
}
  if (yBolinha + raio> height ||
   yBolinha - raio < 0){
    velocidadey *= -1;
      }
}

function verificaColisaoRaquete(){
  if (xBolinha + raio < xraquete + wraquete && yBolinha + raio < yraquete + hraquete && yBolinha + raio > yraquete + hraquete){
    velocidadex *= -1;
   }
}