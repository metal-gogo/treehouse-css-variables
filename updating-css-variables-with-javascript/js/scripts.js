

// set a random hex value
function randomHex() {
  let max = 1 << 24;
  let hex = (max + Math.floor(Math.random() * max)).toString(16).slice(-6);
  return `#${hex}`;
}
