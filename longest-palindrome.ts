function isPalindrome(s: string): boolean {
  const reversed = s.split("").reverse().join("");
  return reversed === s;
}

function allSubstrings(s: string): string[] {
  const result: string[] = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      result.push(s.slice(i, j + 1));
    }
  }
  return result;
}

function sortByLength(strings: string[]): string[] {
  return strings.sort((a, b) => {
    if (a.length > b.length) return -1;
    return 1;
  });
}

function bruteforce(s: string): string {
  if (isPalindrome(s)) {
    return s;
  }
  //   const substrings = sortByLength(allSubstrings(s));
  const substrings = allSubstrings(s);

  let candidate = "";

  for (const substring of substrings) {
    if (isPalindrome(substring) && substring.length > candidate.length) {
      candidate = substring;
    }
  }
  return candidate;
}

function expandAroundCenters(s: string, left: number, right: number) {
  let candidate = "";
  while (
    isPalindrome(s.slice(left, right + 1)) &&
    left >= 0 &&
    right <= s.length
  ) {
    candidate = s.slice(left, right + 1);
    left -= 1;
    right += 1;
  }
  return candidate;
}

function solution(s: string): string {
  if (isPalindrome(s)) {
    return s;
  }
  let longest = "";
  const nrOfCenters = s.length * 2 - 1;
  for (let i = 1; i <= nrOfCenters; i++) {
    let left = Math.floor(i / 2);
    let right = Math.floor(i / 2);
    if (i % 2 === 0) {
      left -= 1;
    }

    const longestForCenter = expandAroundCenters(s, left, right);
    if (longest.length < longestForCenter.length) {
      longest = longestForCenter;
    }
  }
  return longest;
}

function longestPalindrome(s: string): string {
  return solution(s);
}

// console.log(longestPalindrome("a")); // a
console.log(longestPalindrome("ccd")); // cc
// console.log(longestPalindrome("cbbd")); // bb
// console.log(longestPalindrome("")); // ""
// console.log(longestPalindrome(" ")); // " "
// console.log(
//   longestPalindrome(
//     "ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy",
//   ),
// );
