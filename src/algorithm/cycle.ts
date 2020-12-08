/**
 * @description 循环类
 */



 /**
  * 二分查找
  * @description 二分查找的条件是对一组有序数组的查找，这一点很容易忘记，在使用二分查找的时候先要对数组进行排序。
  * @param array 操作数组
  * @param key 查找元素
  * @return 元素下标
  */
 const binSearch = <T extends number>(array: Array<T>, key: T) => {
   array = array.sort((a, b) => a - b);
		let start: number = 0;
		let mid: number = 0;
    let end: number = array.length - 1;
    
    while (start <= end) {
      mid = (end + start) >>> 1;
      
      if( key < array[mid] ) {

				end = mid - 1;
      
      }
			else if ( key > array[mid]) {
      
        start = mid + 1;
      
      } else {
      
        return mid;
      
      }
    }
    return -1;
 }