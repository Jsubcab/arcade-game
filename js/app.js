/*
Superclass Creature allow to share the positions on the board,
the sprites and the creation of the image
*/
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

/*
Enemy inherit from creature and adds the speeds is going to use
*/

class Enemy extends Creature {
    constructor(x,y,sprite) {
        super(x,y,sprite);
        //random speed for every enemy
        this.speed = Math.floor(Math.random() * 100) + 100;
    }

    /*dt takes the speed for every computer, plus the speed
    of the enemy and if the enemy surpass the position of 500px
    restarts his position.
    */
    update(dt) {
        this.x += this.speed * dt;
        if (this.x > 500) {
            this.x = -100;
        }
    }
}

//Player class that inherit from creature

class Player extends Creature{
    constructor(x,y,char) {
        super(x,y,char);
    }
    //starting position
    restart() {
        this.x =200;
        this.y =400;
    }
    
    update() {
        // for every enemy is checked his position and if it collides
        // with the player, restarts
    for (let enemies of allEnemies) {
        if (
            this.y <= enemies.y + 40
            && 
            this.y >= enemies.y - 40
            && 
            this.x >= enemies.x - 95
            &&
            this.x <= enemies.x + 95
        ) {
            this.restart();
        }
    }
      
    }
    /* the function detects what is pressed and says if can move or not
    the player, checking the limits of the board */
    handleInput(e) {
        //if arrives to the top, the position gets restarted
        if (this.y === 0) {
            this.restart();
        }
        //limits of the board
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

//amount of enemies
const numEnemies = 4;
//array of enemies
const allEnemies = [];
//creation of enemies with random position Y
for (let i = 0; i< numEnemies; i++){
    allEnemies.push(new Enemy(-100, Math.random() * 250, 3));
}

//creation of player
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
