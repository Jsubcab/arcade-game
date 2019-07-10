

// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = -100;
    this.y= 0;
    this.speed = 0;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed;
    if (this.x > 500) {
        this.x = -100;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Player class

class Player {
    constructor() {
        this.sprite = 'images/char-boy.png';
        this.x = 200;
        this.y = 400;
    }

    update() {

    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(e) {
            switch (e) {
                case 'left':
                    if(this.x != 0){
                    this.x -=100;
                    }
                    break;
                case 'up':
                    if(this.y != 0){
                    this.y -=100;
                    }
                    break;
                case 'right':
                    if (this.x != 400){
                    this.x +=100;
                    }
                    break;
                case 'down':
                    if (this.y !=400) {
                    this.y +=100;
                    }
                    break;
            }

    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const enemy1 = new Enemy();
enemy1.speed = 3;
enemy1.y = 140;
const enemy2 = new Enemy();
enemy2.speed = 4;
enemy2.y = 220;
const enemy3 = new Enemy();
enemy3.speed = 5;
enemy3.y = 60;

const allEnemies = [enemy1,enemy2, enemy3];

const player = new Player();

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
