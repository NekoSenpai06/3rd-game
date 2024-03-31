var screen = document.querySelector("canvas");
var ctx = screen.getContext("2d");

// character size
var size = 10;

// speed/FramePerSeconds
var gameSpeed = 200;

// coordinates & velocity
var x = 10;
var y = 20;
var velX = 0;
var velY = 0;

setInterval(update, gameSpeed);

function update() {
   if(x === 300 && y === 370) {
        location.href = "dialogue2.html"    
    }
    
   ctx.clearRect(x, y, size, size);
   x += velX;
   y += velY;
   ctx.fillStyle = "lightblue";
   ctx.fillRect(x, y, size, size);
   
   ctx.fillStyle = "pink";
   ctx.fillRect(300, 370, size, size);
    
    if(x >= 310 || x <=  0) {
        velX = 0;
    }
    
    if(y <= 0 || y >= 390) {
        velY = 0;
    }
}

function goUp() {
    velY = -1*10;
    velX = 0;
}

function goDown() {
    velY = 1*10;
    velX = 0;
}

function goRight() {
    velY = 0;
    velX = 1*10;
}

function goLeft() {
    velY = 0;
    velX = -1*10;
}