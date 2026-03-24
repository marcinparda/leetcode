// function twoSum(nums: number[], target: number): number[] {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i,j];
//             }
//         }
//     }
//     return [];
// };

function twoSum(nums: number[], target: number): number[] {
  const numbersMap: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    numbersMap.set(nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    const complementIdx = numbersMap.get(complement);
    if (complementIdx && complementIdx !== i) {
      return [i, complementIdx];
    }
  }
  return [];
}
