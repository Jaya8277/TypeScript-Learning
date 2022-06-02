function taxcalculator(n)
 {
    if (n < 250000) 
    {
      return 0;
    } else if (n >= 250000 && n < 500000)
    {
      n = Math.floor(n / 10);
      return n;
    }
     else if (n >= 500000 && n < 1000000) 
    {
      n = Math.floor(n / 5);
      return n;
    }
    else if (n >= 1000000) 
    {
      n = Math.floor((3 * n) / 10);
      return n;
    }
  }
  
  
  module.exports = taxcalculator;