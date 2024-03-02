const {Given, When, Then} = require('@cucumber/cucumber');

Given('Numbers are provided', function () {
    num1 = 5;
    num2 = 10;
    return console.log('Numbers are '+ num1 +' and '+ num2);
  });


  When('Sym up both numbers here', function () {
    sum = num1 + num2;
    return console.log('Addition is preformed here');
  });

  Then('Display sum of numbers', function () {
    return console.log('Sum of numbers are '+ sum);
  });
