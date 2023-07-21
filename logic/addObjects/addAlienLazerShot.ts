  // the HTML element will always exist this is why a non-null assertion operator (!) is used
const gameArea = document.querySelector(".game-area")! as HTMLDivElement;

// logic for rendering the alien lazer attacks

// class that renders one lazer attack when the constructor is called
// additionally each instance contains reference to the html div element the lazer is render into
export class AddAlienLazerShot {
  // the HTML element will always exist this is why a non-null assertion operator (!) is used
  alienLazerShot!: HTMLDivElement;

  constructor(alien: HTMLDivElement) {
    this.render(alien);
    this.config(alien);
  }

  // creates a div element gives it the appropriate class for the alien lazer attack
  private render(alien: HTMLDivElement) {
    // check if the alien exists ( if it is still "alive")
    // this prevents "dead" aliens from attacking beyond the grave ( wooooo, spooooky)
    if (alien === undefined) {
      return;
    }

    this.alienLazerShot = document.createElement("div");
    this.alienLazerShot.classList.add("alien-lazer-shot");
    this.alienLazerShot.y = alien.getBoundingClientRect().y;
    this.alienLazerShot.style.top = this.alienLazerShot.y + "px";
  }

  // apends the alien attack to the screen div element
  private config(alien: HTMLDivElement) {
    // positions the lazer attack right below the spesific alien
    this.alienLazerShot.style.left =
      alien.getBoundingClientRect().x + alien.offsetWidth / 2 - 12 + "px";
    gameArea.appendChild(this.alienLazerShot);
  }
}
