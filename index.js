let fanspeed = 1;
let temp = 16;
let acstatus = false;

function toggleac() {
  acstatus = !acstatus;
  console.log(acstatus);
}
function increment() {
  if (temp < 29 && acstatus) {
    temp++;
    console.log(`tem is : ${temp}`);
  }
}
function decrement() {
  if (temp > 16 && acstatus) {
    temp--;
    console.log(`tem is : ${temp}`);
  }
}
function fantoggle() {
  if (acstatus) {
    if (fanspeed < 3) {
      fanspeed++;
    } else {
      fanspeed = 1;
    }
    console.log(fanspeed);
  }
}
