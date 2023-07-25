# space-invaders

![Space-Invaders-img](https://github.com/martin-lyubenov/space-invaders/assets/52383146/58c7d81b-64dc-44d0-998e-463c6e5ce31c)

Dear viewer,

This is a recreation of the all time classic arcade game Space Invaders. It was made using purely HTML, CSS and plain JS ( with TS) and bundled with Webpack.

Feel free to try it out here -> https://github.com/martin-lyubenov/space-invaders

What it can do:

- You can play the game using the arrow keys to move and the spacebar to shoot.

Dev dependencies:
-"typescript": "^5.1.6"
-"ts-loader": "^9.4.4",
-"webpack": "^5.88.2",
-"webpack-cli": "^5.1.4",
-"webpack-dev-server": "^4.15.1"

Overview of the file architecture.
index.html - the game has one main html file where all of the action takes place ( exciting!).
style.css - styling of the game, nothing special here.
various config files (TS, webpack, etc).
sounds folder - contains all of the sound effects
images folder - contains all of the sprites
dist folder - contains the Webpack bundle of the JavaScript files
logic folder - contains all of the game logic split into separate folders. More interesting folders here: 
- addObject contains all of the classes. Each class is used to rendering an HTML element on the screen (defender, alien, shield, etc...)
- animations contains the logic for animating the movement of the aliens and their lazer attacks
- generalGameInfo - contains config objects for the game
- player - contains config objects for the player
- util - contains 3 functions - the most interesting is isCollision - a function that checks if 2 items are occuping the same space in the DOM.
- main.ts - file that calls, either directly or indirectly, the rest of the logic and so runs the game

Things to bear in mind:

- The game is meant to be played on a screen which is at least 1024px wide.
- It does have a 'soundtrack' which start playing after starting the game

Please leave a comment.

Thank you!
