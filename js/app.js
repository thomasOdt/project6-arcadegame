// Enemies our player must avoid
let Enemy = function(startX, startY, speed) {
    this.sprite = 'images/enemy-bug.png';
    this.x = startX;
    this.y = startY;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.speed*dt;
    // if enemy gets to the end of the canvas reset its position.
    if(this.x > 600) {
        this.reset();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.reset = function() {
    // get a new starting x so there isn't a pattern between enemies.
    this.x = xValues[Math.floor(Math.random() * xValues.length)];
};

//Player class.
let Player = function(startX, startY) {
    this.sprite = 'images/char-boy.png';
    this.x = startX;
    this.y = startY;
};

Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(key){
   //player movement and check boundaries
    if(key === 'left' && this.x > 0){
       this.x -= 100;
   } else if (key === 'right' && this.x < 400) {
       this.x += 100;
   } else if (key === 'up' && this.y > 0) {
       this.y -= 90;
   } else if (key === 'down' && this.y < 400) {
       this.y += 90;
   }
};

// Place all enemy objects in an array called allEnemies
let allEnemies = [];
// some default start positions
const xValues = [-100,-225,-350,-450,-575,-675];
const yValues = [60, 140, 220];
for(let i =1;i<=8;i++){
    // get a random start position from array above.
    let x = xValues[Math.floor(Math.random() * xValues.length)];
    let y = yValues[Math.floor(Math.random() * yValues.length)];
    let speed;
    // each has a diffirent speed. 1st row is slowest, last row the fastest.
    if(y=== 60){
        speed = 250;
    } else if(y === 140) {
        speed = 200;
    } else {
        speed = 150;
    }
    allEnemies[i] = new Enemy(x, y, speed);
}
// Place the player object in a variable called player
let player = new Player(200,400);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
