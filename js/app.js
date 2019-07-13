class Creature {
    constructor(x,y,char) {
        this.x=x;
        this.y=y;

        switch(char) {
        case 1:
        this.sprite = 'images/char-boy.png';
        break;
        
        case 2:
        this.sprite = 'images/char-cat-girl.png';
         break;
        
        case 3:
        this.sprite = 'images/enemy-bug.png';
        break;
            } 
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

class Enemy extends Creature {
    constructor(x,y,sprite) {
        super(x,y,sprite);
        this.speed = Math.floor(Math.random() * 100) + 100;
    }

    update(dt) {
        this.x += this.speed * dt;
        if (this.x > 500) {
            this.x = -100;
        }
    }
}

//Player class

class Player extends Creature{
    constructor(x,y,char) {
        super(x,y,char);
    }

    restart() {
        this.x =200;
        this.y =400;
    }

    update() {
        if (this.y === -100) {
            this.restart();
        }

    for (let enemies of allEnemies) {
        if (
            enemies.y === this.y 
            && 
            this.x >= enemies.x - 100
            &&
            this.x <= enemies.x + 100
        ) {
            this.restart();
        }
    }
      
    }

    handleInput(e) {
            switch (e) {
                case 'left':
                    if(this.x != 0){
                    this.x -=100;
                    }
                    break;
                case 'up':
                    if(this.y != -100){
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

const numEnemies = 4;
const allEnemies = [];

for (let i = 0; i< numEnemies; i++)
    allEnemies.push(new Enemy(-100, Math.floor(Math.random() * 230) + 20 , 3));

const player = new Player(200,400,1);

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
