function isPalindrome(x: number): boolean {
  const xStr = String(x);
  return xStr === xStr.split("").reverse().join("");
}
