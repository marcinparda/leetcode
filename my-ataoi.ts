const max = Math.pow(2, 31) - 1;
const min = -Math.pow(2, 31);

function isDigit(s: string): boolean {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return numbers.includes(s);
}

function isSign(s: string): boolean {
  return s === "-" || s === "+";
}

function bruteforce(s: string): number {
  s = s.trim();
  let firstDigitFound = false;
  let signFound = false;
  let multiplier = 1;
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (isSign(s[i])) {
      if (firstDigitFound || signFound) {
        break;
      }
      signFound = true;
      if (s[i] === "-") {
        multiplier = -1;
      }
      continue;
    }
    if (isDigit(s[i])) {
      result += s[i];
      firstDigitFound = true;
      signFound = true;
      continue;
    }
    // not a sign, not a digit, end of work
    break;
  }
  const numberResult = Number(result) * multiplier;
  if (max < numberResult) {
    return max;
  }
  if (min > numberResult) {
    return min;
  }
  return numberResult;
}

function myAtoi(s: string): number {
  return bruteforce(s);
}

console.log(myAtoi("   +0 123"));
console.log(myAtoi(" -042"));
console.log(myAtoi("1337c0d3"));
console.log(myAtoi("0-1"));
console.log(myAtoi("words and 987"));
