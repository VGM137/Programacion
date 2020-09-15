var numeros = 100
//Modo 1
//var divisible = false;
//Modo 2
//if(i % 3 != 0 && i % 5 != 0)

for(var i = 1; i<=100; i++)
{
  divisible = false;
//  if(i % 3 == 0)
  if(esDivisible(i,3))
  {
    document.write("Fizz");
//    divisible = true;
  }

//  if(i % 5 == 0)
  if(esDivisible(i, 5))
  {
    document.write("Buzz");
//    divisible = true;
  }

//if(!divisible)
//  if(i % 3 != 0 && i % 5 != 0)
  if(!esDivisible(i, 3) && !esDivisible(i, 5))
  {
    document.write(i);
  }
  document.write("<br/>");
}

//Modo 3
function esDivisible(num, divisor)
{
  if(num % divisor == 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}
