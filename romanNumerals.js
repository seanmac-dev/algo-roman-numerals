function toRomanLazy(num) {
  let output = "";
  let romanNumeralToArabic = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 }
  let romanNumeralPriorityOrder = ['M', 'D', 'C', 'L', 'X', 'V', 'I']

  for (let romanNumeral of romanNumeralPriorityOrder) {
    let arabicNum = romanNumeralToArabic[romanNumeral];
    // 1000, 500, 100, 50, 10, 5, 1
    let numRoman = Math.floor(num / arabicNum);
    // assign to numRoman, the floor value of 4000 / 1000
    for (let i = 0; i < numRoman; i++) {
      // do this while i < 4
      output += romanNumeral;
      // add the romanNumeral that holds value from object to the output
      num -= arabicNum;
      // take input num and subtract current arabicNum
      // ex. 4005 - 1000 = 3005...3005 - 1000 = 2005....
      // 2005 - 1000 = 1005...1005 - 1000 = 5
    }
  };

  return output;
}
console.log(toRomanLazy(4))

// const IV = 4;
// const IX = 9;
// const XL = 40;
// const CD = 400;
// const CM = 900;


function toRoman(num) {
  let output = "";
  let romanNumeralToArabic = {
    "I": 1,
    "IV": 4,
    "V": 5,
    "IX": 9,
    "X": 10,
    "XL": 40,
    "L": 50,
    "C": 100,
    "CD": 400,
    "D": 500,
    "CM": 900,
    "M": 1000
  }

  let romanNumeralPriorityOrder = ['M', 'CM', 'D', 'CD', 'C', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

  for (let romanNumeral of romanNumeralPriorityOrder) {
    let arabicNum = romanNumeralToArabic[romanNumeral];
    // 1000, 500, 100, 50, 10, 5, 1
    let numRoman = Math.floor(num / arabicNum);
    // assign to numRoman, the floor value of 4000 / 1000
    for (let i = 0; i < numRoman; i++) {
      // do this while i < 4
      output += romanNumeral;
      // add the romanNumeral that holds value from object to the output
      num -= arabicNum;
      // take input num and subtract current arabicNum
      // ex. 4005 - 1000 = 3005...3005 - 1000 = 2005....
      // 2005 - 1000 = 1005...1005 - 1000 = 5
    }
  };

  return output;
}
console.log(toRoman(4))
module.exports = { toRoman, toRomanLazy };
