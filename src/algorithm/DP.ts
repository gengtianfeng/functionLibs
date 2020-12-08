/**
 * @description 动态规划类
 */



/**
 * 爬楼梯问题、斐波那契数列类问题
 * @param n 
 * @description 动态规划在性能方面优于递归
 * exp: 有一楼梯共M级，刚开始时你在第一级，若每次只能跨上一级或二级，要走上第M级，共有多少种走法？
 */
 const jumpStepDynamic = (n : number) => {
  if(n <= 2) return; 

  const dpArr = new Array(n);

  [dpArr[0], dpArr[1]] = [1, 2];

  Array(n-2).forEach((value, index) => {
    dpArr[index + 2] = dpArr[index] + dpArr[index + 1];
  });

  return dpArr[n - 1];
 }