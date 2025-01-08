function makeid(l) {
  let res = "";
  for (let i = 0; i < l; i++) {
    // Generate random digit (0-9)
    let a = Math.floor(Math.random() * 10); 
    // Convert the digit to a character (as a number string)
    let s = String.fromCharCode(65 + a); // '48' is the ASCII value for '0'
    res += s;
  }
  return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
