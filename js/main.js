var can1;
var can2;
var ctx1;
var ctx2;

var lastTime;
var deltaTime;

var canWidth;
var canHeight;

var bgImg = new Image();

document.body.onload = game;

function game() {
    console.log('game');
    init();
    lastTime = Date.now();
    deltaTime = 0;
    gameloop();
}

function init() {
    can1 = document.getElementById('canvas1');
    ctx1 = can1.getContext('2d');
    can2 = document.getElementById('canvas2');
    ctx2 = can2.getContext('2d');

    bgImg.src = 'image/background.jpg';

    canWidth = can1.width;
    canHeight = can1.height;
}

function gameloop() {
    window.requestAnimFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;

    drawBG();
}