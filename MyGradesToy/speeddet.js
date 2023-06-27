//declaring various variables
let speedLimit = 70;
let userSpeed = 130;
let difference = userSpeed - speedLimit;
let divisor = difference / 5;
//checks if user is below the limit
if (difference < 0) {
  console.log("OK");
} 
//checks if divisor is less than 12 
else if (difference >= 5) {
  if (divisor < 12) {
//math.trunc gets rid of the floats
//string interpolation
    console.log(`you have ${Math.trunc(divisor)} demerit(s)`);
  }
   else {
    console.log("Your License is Suspended");
  }
}
