import { IIsCollision } from "../models/isCollision";

// logic for checking if an alien has hit one of the defender's shields

// how do we know if a shield has been hit you ask ? -> logic is the following, we take the 2 HTML elements ( both are divs) and check if one has entered the position of the other using the getBoundingClientRect()
// check the isCollision method for more information

// the name of the func is quite the mouthful I know
export function shieldAlienLazerShotCollisionChecker(
  alienLazerShot: HTMLDivElement,
  isCollision: IIsCollision
) {
  // selects all of the shield HTML elements and stores them in an array
  let shields = document.querySelectorAll(
    ".shield"
  ) as NodeListOf<HTMLDivElement>;
  // loops through the shield elements and check if any has been hit
  shields.forEach((shield) => {
    // shields have 3 "lives", each hit removes one and damages them which is represented by changing the sprite with a more damaged version
    if (
      isCollision(shield, alienLazerShot) &&
      shield.classList.contains("shield-destroyed") === false
    ) {
      if (shield.classList.contains("shield-full-hp")) {
        shield.classList.remove("shield-full-hp");
        shield.classList.add("shield-1hit");
      } else if (shield.classList.contains("shield-1hit")) {
        shield.classList.remove("shield-1hit");
        shield.classList.add("shield-2hits");
      } else if (shield.classList.contains("shield-2hits")) {
        shield.classList.remove("shield-2hits");
        shield.classList.add("shield-3hits");
      } else if (shield.classList.contains("shield-3hits")) {
        // when the shield is destroyed it leaves a "wreck" and cannot stop alien attacks
        shield.classList.add("shield-destroyed");
      }
      // removes alien attack after it has hit the shield
      alienLazerShot.remove();
    }
  });
}
