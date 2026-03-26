function mergeAlternately(word1: string, word2: string): string {
  let result = "";
  const length = word1.length > word2.length ? word1.length : word2.length;
  for (let i = 0; i < length; i++) {
    if (word1.at(i)) {
      result += word1[i];
    }
    if (word2.at(i)) {
      result += word2[i];
    }
  }
  return result;
}
