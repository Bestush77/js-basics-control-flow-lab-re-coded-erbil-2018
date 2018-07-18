// Write your code in this file!

function scuberGreetingForFeet(num) {
  let answer;
  if(num<= 400)

  {
    return "This one is on me!";
  }
  else if (num >= 2000)
  
    {
      answer = "I will gladly take your thirty bucks.";
      return answer;
    }
  else if (num > 2500) 
    {
      answer= "No can do."
      return answer;
    }
}

function ternaryCheckCity(city) {
  city===NYC ? "Ok, sounds good." : "No go.";
}