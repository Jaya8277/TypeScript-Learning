   
const taxcalculator = require("../tax-calculator");

describe("Testing tax calculation", function () {
  test("should work on all posititive numbers", function () {
    expect(taxcalculator(0)).toBe(0);
    expect(taxcalculator(249999)).toBe(0);
    expect(taxcalculator(250000)).toBe(25000);
    expect(taxcalculator(500000)).toBe(100000);
    expect(taxcalculator(1200000)).toBe(360000);
    expect(taxcalculator(9000000)).toBe(2700000);
  });
});