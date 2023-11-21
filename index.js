// Write your code here!
  // don't add the string "feet" to the if like distance + "feet"
 // pay attention to spacing can fail test for too many spaces
 // the orders matter which way they go 

 let feet = 400;

function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return "This one is on me!";
  }  else if (someValue > 400 && someValue <= 2000 ) {
    return "That will be twenty bucks.";
  } else if (someValue > 2000 && someValue <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (someValue > 2500) {
    return "No can do.";
  }
}


function ternaryCheckCity(city){
  // Write your code here!
  return city === "NYC"? "Ok, sounds good.": "No go.";
  // returning the city not the ternaryCheckCity

}

function switchOnCharmFromTip(charm){
  // Write your code here!
  switch(charm) {
    case "generous":
      return "Thank you so much."
    case "not as generous":
      return "Thank you."
    default: 
      return "Bye."
  }
}