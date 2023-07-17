document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);

export let keys = {};
function onKeyDown(e) {
  keys[e.code] = true;
}

function onKeyUp(e) {
  keys[e.code] = false;
}
