const max = Math.pow(2, 31) - 1;
const min = Math.pow(2, 31);
const maxStr = String(max);
const minStr = String(min);

function reverse(x: number): number {
  let multiplier = 1;
  if (x < 0) {
    multiplier = -1;
    x *= multiplier;
  }

  const stringX = String(x);
  const reversedStringX = stringX.split("").reverse().join("");

  let isLowerThanLimit = false;
  if (reversedStringX.length <= 9) {
    isLowerThanLimit = true;
  }
  for (let i = 0; i < reversedStringX.length; i++) {
    if (!isLowerThanLimit) {
      if (multiplier > 0 && i === 9) {
        if (Number(reversedStringX[i]) > 7) {
          return 0;
        }
      }
      if (Number(reversedStringX[i]) > Number(minStr[i])) {
        return 0;
      }
      if (Number(reversedStringX[i]) < Number(minStr[i])) {
        isLowerThanLimit = true;
      }
    }
  }

  const result = Number(reversedStringX) * multiplier;

  return result;
}

console.log(reverse(123));
console.log(reverse(-321));
console.log(reverse(120));
console.log(reverse(-2147483412));

// 2147483647
// -2147483648

// 11101
// 1+0+2+4+8=15

//
