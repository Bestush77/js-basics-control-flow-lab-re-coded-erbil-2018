// Write your code in this file!

function scuberGreetingForFeet(num) {
  let answer;
  if(num<= 400)

  {
    return "This one is on me!";
  }
  else if (num >= 2000 && num <= 2500)
  
    {
      return "I will gladly take your thirty bucks.";
      
    }
  else if (num > 2500) 
    {
      return "No can do."
      
    }
}

function ternaryCheckCity(city) {
  return city === "NYC" ? 'Ok, sounds good.' : "No go.";
}

function switchOnCharmFromTip(tip)
{
  switch(tip)
  {
    case : "Thank you so much.";
    break;
    case 50:  "Thank You";
    break;
    default: "Bye.";
  }
}
