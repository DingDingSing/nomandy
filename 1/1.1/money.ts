/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// 暴力解法
var coinChange = function (coins, amount) {
  const sub = (m) => {
    // base case
    if (m === 0) return 0;
    if (m < 0) return -1;
    // 设为最大值、方便下面比较最小值
    let methods = Infinity;
    for (let item of coins) {
      // 子问题
      const subAmount = sub(m - item);
      // 子问题无解 进行下一次循环
      if (subAmount === -1) continue;
      methods = Math.min(methods, subAmount + 1);
    }
    return methods === Infinity ? -1 : methods;
  };
  return sub(amount);
};

// 记事本优化
var coinChange_e = function (coins, amount) {
  //记事本
  const memo = [];
  const sub = (m) => {
    // 存在已经解决子问题、返回子问题结果
    if (memo[m]) return memo[m];
    // base case
    if (m === 0) return 0;
    if (m < 0) return -1;
    let methods = Infinity;
    for (let item of coins) {
      // 子问题
      const subAmount = sub(m - item);
      // 子问题无解 进行下一次循环
      if (subAmount === -1) continue;
      methods = Math.min(methods, subAmount + 1);
    }
    //记录本次结果
    memo[m] = methods === Infinity ? -1 : methods;
    return memo[m];
  };
  return sub(amount);
};

// dp 先计算子问题
const coinChange_dp = (coins, amount) => {
  // 初始化长度
  const dp = new Array(amount + 1);
  // 填充 amount+1 代表最大值的标志
  dp.fill(amount + 1);
  // base case
  dp[0] = 0;
  for (let i = 0; i < amount + 1; i++) {
    // 计算每个子问题的结果
    for (let coin of coins) {
      // 子问题无解
      if (i - coin < 0) continue;
      // 取最小值
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount];
};
