const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

//criar variável para objeto 

function preload() {
  //adicionar imagem de fundo
  backgroundImg = loadImage("./assets/background.gif");
  //adicionar imagem da torre
  
}


function setup() {
  //criar canvas para o fundo cobrir a tela inteira
 
  engine = Engine.create();
  world = engine.world;

  rectMode(CENTER);
  ellipseMode(RADIUS);
 
  //criar objeto torre, lembra da palavra chave para criar um objeto?

}

function draw() 
{
  background(189);
  //adicionando imagem para ser exibida
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);
//exibir a torre (Desafio 4)
 
}

