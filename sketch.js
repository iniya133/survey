var form;
var email;
var emails = [];
var START = 0;
var PLAY = 1;
var gameState = START;
var email1, email2, email3, email4;
var database;
var counter = 0;

function setup() {
  createCanvas(1200,700);
  form = new Form();

  database = firebase.database();
}

function draw() {
  background(255);

  form.display();
  form.style();
  form.hide();
  form.updateState();
  form.StartSurvey();
  if(counter > 0){
    form.updateEmail()
  }
}