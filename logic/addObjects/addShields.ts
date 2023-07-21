// logic for rendering the defender shields capsulated in a single module with 2 classes

// the HTML element will always exist this is why a non-null assertion operator (!) is used
const gameArea = document.querySelector(".game-area")! as HTMLDivElement;

// first class to renders a single shield when the constructor is called.
// additionally each instance contains reference to the html div element the alien is render into
//private class used only in this module
class AddSingleShield {
  // the HTML element will always exist this is why a non-null assertion operator (!) is used
  singleShield!: HTMLDivElement;

  constructor() {
    this.render();
  }

  // creates a div element gives it the appropriate class for the defender shield
  private render() {
    this.singleShield = document.createElement("div");
    this.singleShield.classList.add("shield", "shield-full-hp");
  }
}

// second class renders all 4 shields when the constructor is called.
// additionally each instance contains reference to the html div element the alien cluster is render into
export class AddShields {
  // the HTML element will always exist this is why a non-null assertion operator (!) is used
  shieldField!: HTMLDivElement;

  constructor() {
    this.render();
    this.config();
  }

  // creates a div element gives it the appropriate class for the shield field ( hey that rhymes!)
  private render() {
    this.shieldField = document.createElement("div");
    this.shieldField.classList.add("shield-field");

    // loop to create 4 single shields and append each to the shield field ( hey that rhymes, for a second time, what are the odds, right?)
    for (let i = 1; i <= 4; i++) {
      const singleShieldInstance = new AddSingleShield();
      const singleShield = singleShieldInstance.singleShield;
      this.shieldField.appendChild(singleShield);
    }
  }

  // places the shields in their respective positions and renders them to the game screen
  private config() {
    this.shieldField.style.width = gameArea.offsetWidth / 1.25 + "px";
    this.shieldField.style.top = gameArea.offsetHeight - 200 + "px";
    this.shieldField.style.left = gameArea.offsetWidth / 10 + "px";

    gameArea.appendChild(this.shieldField);
  }
}
