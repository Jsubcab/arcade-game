# Project for Udacity 

## Introduction

Game created by the materials of Udacity with Javascript. The game itself is a frog-style, that you need to move your character to the top of the screen for restarting the game.

## Process

The file that has the engine (app.js), is structured by:

- Superclass: Creature
    - Enemy: array of enemies
    - Player: player
    
# Superclass

Allows to resume the code and to allow the other classes that inherets from it to share position and sprites

# Enemy

The class that creates enemies randomly with different speed.

# Player

The player that we can control and checks if we arrives to the top of the map, if we are trying to go out of the board and to check if collides with the enemy for restarting the game.
