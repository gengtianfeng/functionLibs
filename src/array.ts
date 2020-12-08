
/**
 * 平铺数组
 * @param array 原属组
 * 
 * tips: 纯数组[string | number | boolean]可快捷操作
 *  exp: array.toString().split(',').map(item=> +item )
 */
export const arrayFlat = <T>(array: Array<T>): Array<T> => {
  let arr: Array<T> = [];
  array.forEach(item => {
    if(Array.isArray(item)) {
      arr = arr.concat(arrayFlat(arr));
    } else {
      arr.push(item)
    }
  });
  return arr;
};