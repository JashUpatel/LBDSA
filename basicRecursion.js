// 1. You are given an array. The task is to reverse the array and print it.

const arr = [5, 4, 3, 2, 1];
// Output: [1,2,3,4,5]

// brute force approach: iterating from n-1 to 1;
// TC - O(n)
// SC - O(n)
const reverseBF = (arr) => {
  const reverseArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }

  return reverseArr;
};

// console.log(reverseBF(arr));

// optimised approach: two pointer approach with swapping
// TC - O(n)
// SC - O(1) // optimised SC to O(1)
const reverse2Pointer = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }

  return arr;
};

// console.log(reverse2Pointer(arr));

// optimised approach using recursion
// TC - O(n)
// SC - O(n)
const reverse2PointerRecFunc = (arr, start, end) => {
  // base condition
  if (start >= end) return arr;
  //   if (start < end) {
  [arr[start], arr[end]] = [arr[end], arr[start]];
  //   let temp = arr[start];
  //   arr[start] = arr[end];
  //   arr[end] = temp;
  //   dont use post increment decrement operator while passing as param in function
  //   else should also return something
  return reverse2PointerRecFunc(arr, start + 1, end - 1);
  //   }
  //   return arr;
};

const reverseUsingRecursion = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  return reverse2PointerRecFunc(arr, start, end);
};

// console.log(reverseUsingRecursion(arr));

// 2. palindrome using recursion
// TC - O(n)
// SC - O(n)
function isPalindromeRec(str, start = 0, end = str.length - 1) {
  if (start >= end) return true;
  if (str[start] !== str[end]) return false;
  return isPalindromeRec(str, start + 1, end - 1);
}

// Example usage:
// console.log(isPalindromeRec("racecar")); // true
// console.log(isPalindromeRec("hello")); // false

// 3. fibonnaci service upto index i.e 0 based

const input = 6;
// Output: 0 1 1 2 3 5 8

// const fibonacci = (n) => {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// };

// for (let i = 0; i <= input; i++) {
//   console.log(fibonacci(i));
// }

// TC - O(n)
// SC - O(n)
const fibonacciSeries = (index) => {
  if (index == 0) return [0];
  if (index == 1) return [0, 1];
  const series = [0, 1];

  for (let j = 2; j <= index; j++) {
    const fib = series[j - 1] + series[j - 2];
    series.push(fib);
  }
  return series;
};

// console.log(fibonacciSeries(input));

// fibonnaci using recursion

const fibonacciRecursiveFunc = (arr, input) => {
  if (input < 2) {
    // printing the series
    // arr.push(input);
    return input;
  }

  const last = fibonacciRecursiveFunc(arr, input - 1);
  const secondLast = fibonacciRecursiveFunc(arr, input - 2);
  // for fibonnaci value at the index
  // return last + secondLast;
  // console.log(
  //   "Fibonacci value at index " +
  //     input +
  //     " is: " +
  //     last +
  //     secondLast +
  //     "=" +
  //     (last + secondLast)
  // );
  // arr.push(last + secondLast);
  return last + secondLast;
};

const fibonacciSeriesWithRecursion = (input) => {
  const series = [];
  // for getting fibonnaci value at index here series array not required
  return fibonacciRecursiveFunc(series, input);

  // fibonacciRecursiveFunc(series, input);
  // wont work as will remove duplicates using set so 0,1,1= 0,1
  // without set there will be duplicates of 0,1
  // return [...new Set(series)];
  // return series;
};

console.log(fibonacciSeriesWithRecursion(input));

// print fib series using recursion
const fibonacciRecursiveSeries = (n, arr = []) => {
  if (n === 0) {
    arr.push(0);
    return arr;
  }
  if (n === 1) {
    arr.push(0, 1);
    return arr;
  }
  fibonacciRecursiveSeries(n - 1, arr);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
};

const input2 = 6;
const fibSeries = fibonacciRecursiveSeries(input2);
console.log(fibSeries.join(" ")); // Output: 0 1 1 2 3 5 8
