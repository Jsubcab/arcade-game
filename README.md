# Arcade Game: project for Udacity 

## Introduction

Game created by the materials of Udacity with Javascript. The game itself is a frog-style, that you need to move your character to avoid the enemies and to reach the top of the screen. If you arrive to the top or if you are touched by an enemy, the game gets restarted.

## Process

The engine file(app.js), is structured by:

- Superclass: Creature
    - Enemy: array of enemies
    - Player: player
    
# Superclass

Allows to make more efficient the code and allows the other classes that inherets from it to share position and sprites
    - X, Y, Sprites variables. Give us the position and which char is draw it in the board.
    - render function that allows to print the image.

# Enemy

Creates enemies randomly with different speed.
    - update allows to refresh the position of the enemy giving him different speed based in the var of the computer.

# Player

Control and check if the player arrives to the top of the map, if the player is trying to go out of the board or collides with the enemy, the game gets restarted.
    - allows to check if the player hits an enemy
    - checks if the player arrives to the top or if is trying to surpass the board.
