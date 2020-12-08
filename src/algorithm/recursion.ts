/**
 * @description 递归类
 */


/**
 * 快速排序
 * @param arr  
 * @description 分治思想、递归
 * 复杂度分析： 查找O(n)
 */
const quickSort = <T>(arr: T[]): T[] => {

  if(arr.length <= 1) {
    return arr;
  }

  const left: T[] = [];
  const right: T[] = [];

  // splice 后原arr会少一个，splice返回的是被删除的新的数组
  const current = arr.splice(0, 1);

  for (let i = 0; i < arr.length; i += 1) {
    
    if (Number(arr[i]) - Number(current) <= 0) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
    
  }

  // 递归，合并
  return quickSort(left).concat(current, quickSort(right));
}

/**
 * 深拷贝
 * @param origin 
 * @param target 
 * @description 循环递归
 * 递归条件：遇到引用值Array 或 Object
 */
const deepClone = (origin: any, target: any = {}) => {
  // tips 注意 for...in 与for...of 区别，根据场景选择
  for (let key in origin) {
    // hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。
    if (origin.hasOwnProperty(key)) {
      // 如果是数组，且嵌套
      if (Array.isArray(origin[key])) {
        target[key] = [];
        // 递归
        deepClone(origin[key], target[key])
      } else if (typeof origin[key] === 'object' && origin[key] !== null) { 
        //判断是对象嵌套对象的情况
        target[key] = {};
        // 递归
        deepClone(origin[key], target[key])
      } else {
        // 如果不是嵌套 ，就直接拷贝
        target[key] = origin[key]
      }
    }
  }
  return target
};


/**
 * 爬楼梯问题、斐波那契数列类问题
 * @param n 
 * exp: 有一楼梯共M级，刚开始时你在第一级，若每次只能跨上一级或二级，要走上第M级，共有多少种走法？
 */
const jumpStepFibonacci = (n: number) => {
  if(n<=2) return n;
  return jumpStepFibonacci(n - 1) + jumpStepFibonacci(n - 2);
};


/**
 * 二分查找
 * @description 二分查找的条件是对一组有序数组的查找，这一点很容易忘记，在使用二分查找的时候先要对数组进行排序。
 */

 const binaryFind = () => {
   
 }