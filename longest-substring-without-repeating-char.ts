function bruteforce(s: string): number {
  let maxLenght = 0;
  for (let i = 0; i < s.length; i++) {
    let substr = "";
    for (let j = i; j < s.length; j++) {
      substr += s[j];
      const substrSet = new Set(substr.split(""));
      // check if repetitions
      if (substrSet.size !== substr.length) {
        break;
      }
    }
    if (substr.length > maxLenght) {
      const substrSet = new Set(substr.split(""));
      console.log(substrSet);

      maxLenght = substrSet.size;
    }
  }
  return maxLenght;
}

function split(s: string): number {
  let maxLenght = 0;
  for (let i = 0; i < s.length; i++) {
    const splitted = s.split(s[i]);
    console.log(splitted);

    for (let j = 0; j < splitted.length; j++) {
      const splitStr = splitted[j];
      const splitSet = new Set(splitStr.split(""));
      if (splitSet.size === splitStr.length) {
        console.log(splitStr);
        if (splitSet.size + 1 > maxLenght) {
          maxLenght = splitSet.size + 1;
        }
      }
    }
  }

  return maxLenght;
}

function hasDuplications(s: string): boolean {
  const set = new Set(s.split(""));
  if (set.size === s.length) {
    return false;
  }
  return true;
}

function trackingLeftRight(s: string): number {
  let left = 0;
  let right = 0;
  let max = 0;
  const stringLength = s.length;
  if (stringLength > 0) {
    max = 1;
  }
  while (left !== stringLength - 1 && right !== stringLength) {
    const sliced = s.slice(left, right + 1);
    if (hasDuplications(sliced)) {
      console.log("DUPLICATED", { sliced });
      left += 1;
    } else {
      console.log("NOT DUPLICATED", { sliced });
      if (max < sliced.length) {
        max = sliced.length;
      }

      right += 1;
    }
    console.log({ left, right, stringLength });
  }
  return max;
}

function lengthOfLongestSubstring(s: string): number {
  return trackingLeftRight(s);
}

// console.log(lengthOfLongestSubstring("pwwkew")); //3
// console.log(lengthOfLongestSubstring("abcabcbb")); //3
// console.log(lengthOfLongestSubstring(" ")); //1
console.log(lengthOfLongestSubstring("")); //0
// console.log(lengthOfLongestSubstring("001100")); //2
// console.log(lengthOfLongestSubstring("ohomm")); //3

// [idx, streak]
// [0,1]
// 1
// is repetition ? create new
