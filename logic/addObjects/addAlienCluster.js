const gameArea = document.querySelector(".game-area");

// class to render a single Alien
class AddSingleAlien {
  alien;
  constructor() {
    this.render();
    return this.alien;
  }
  render() {
    this.alien = document.createElement("div");
    this.alien.classList.add("alien");
  }
}

// class to render the whole alien cluster
export class AddAlienCluster {
  alienCluster;

  constructor(x, game) {
    this.render(x, game);
    return this.alienCluster;
  }

  render(x, game) {
    this.alienCluster = document.createElement("div");
    this.alienCluster.classList.add("alien-cluster");

    for (let i = 0; i < game.maxAlienClusterSize; i++) {
      const alien = new AddSingleAlien();

      if (i < 11) {
        alien.classList.add("alien-40pts");
      } else if (i < 33) {
        alien.classList.add("alien-20pts");
      } else {
        alien.classList.add("alien-10pts");
      }
      this.alienCluster.appendChild(alien);
    }
    this.alienCluster.style.top = game.offsetHeight + "px";
    this.alienCluster.x = x;
    this.alienCluster.style.left = this.alienCluster.x + "px";
    gameArea.appendChild(this.alienCluster);
  }
}
