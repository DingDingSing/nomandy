/**
 * @param {number} n
 * @return {number}
 */
// const memo = [];
// var fib = function (n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   if (memo[n]) return memo[n];
//   memo[n] = (fib(n - 1) + fib(n - 2)) % 1000000007;
//   return memo[n];
// };

// 1. 递归方法 自顶向下 fib(3) = fib(2) + fib(1)

const fib = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  const memo = [];
  return core(memo, n);
};

const core = (m, n) => {
  if (m[n]) return m[n];
  m[n] = (core(m, n - 1) + core(m, n - 2)) % 1000000007;
  return m[n];
};

// 2 dp 数组迭代法 自下向上 fib(1) + fib(2) = fib(3)
// 需要一个数组进行存储

const dpfib = (n) => {
  const dp = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }
  return dp[n];
};
