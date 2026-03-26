function isDivider(substr: string, str: string): boolean {
  let compare = "";
  const howManyTimes = str.length / substr.length;
  for (let i = 0; i < howManyTimes; i++) {
    compare += substr;
  }
  return compare === str;
}
function bruteforce(str1: string, str2: string): string {
  let result = "";
  const shorterString = str1.length < str2.length ? str1 : str2;
  for (let i = 0; i < shorterString.length; i++) {
    // console.log(str1.length % (i+1) !== 0 || str2.length % (i+1) !== 0)
    if (str1.length % (i + 1) !== 0 || str2.length % (i + 1) !== 0) {
      continue;
    }
    const substring1 = str1.slice(0, i + 1);
    const substring2 = str2.slice(0, i + 1);
    console.log(substring1, substring2);
    if (substring1 !== substring2) {
      break;
    }
    if (isDivider(substring1, str1) && isDivider(substring2, str2)) {
      result = substring1;
    }
  }
  return result;
}

// 15, 12
// 12, 3
// 3, 0

// 12, 15
// 15,

function gcd(x: number, y: number): number {
  if (y === 0) {
    return x;
  } else {
    return gcd(y, x % y);
  }
}

function solution(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }
  return str1.slice(0, gcd(str1.length, str2.length));
}

function gcdOfStrings(str1: string, str2: string): string {
  return solution(str1, str2);
}

console.log(gcdOfStrings("ABCABC", "ABC"));
