/**
 * 全排列问题 https://leetcode-cn.com/problems/permutations/
 * @param nums 
 * @returns
 */
function permute(nums) {
  // 结果
  let result = [];
  // dfs
  const dfs = (nums, path) => {
    // 满足条件 => 退出
    if (path.length === nums.length) {
      result = [...result, path];
    }

    // 选择 in 选择列表
    for (let i of nums) {
      // 做选择
      if (path.includes(i)) {
        continue;
      }
      // dfs
      dfs(nums, [...path, i]);
      // 撤销选择
    }
  };
  dfs(nums, result);
  return result;
}

// var permute = function (nums) {
//   let result = [];

//   const dfs = (nums, k, path) => {
//     // 可选列表
//     // 决策阶段
//     // 路径
//     // 决策退出条件

//     if (k === nums.length) {
//       result.push([...path]);
//       return;
//     }

//     // 在可选列表中做决策
//     for (let item of nums) {
//       if (path.includes(item)) {
//         continue;
//       }
//       dfs(nums, k + 1, [...path, item]);
//     }
//   };

//   dfs(nums, 0, []);
//   return result;
// };
