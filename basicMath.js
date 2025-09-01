// Basic math for DSA

// 1. Count digits in a number

// const N = 0;
// o/p - 1
// const N = 7789;
// Output: 4

// brute force approach to count digits in number
// TC - O(log10 N) dividing the number by 10 on each iteration hence log base 10
// SC - O(1) no extra space
const countDigits = (num) => {
  if (num == 0) return 1;
  let count = 0;
  while (num > 0) {
    num = parseInt(num / 10);
    count++;
  }

  return count;
};

// optimised approach to count digits
// TC - O(1) as log10 function complete calculation and
// returns answer in constant time regardless of input size
// SC - O(1)
// log is used to perform multiplication and division using addtion and subtraction
// eg. x*y can be calculated as log10 x + log10 y for easy calculation
// x/y can be done as log10 x - log10 y
// here 12345 = 0.12345 * 10^5 = log10 0.12345 + log10 10^5 = 5*log10 10 + some negligible constant decimal val
// hence it will result 5
const countDigitsOptimised = (num) => {
  if (num == 0) return 1;

  // log is only for positive number
  // for 0 and negative it is undefined so function return NaN
  return parseInt(Math.log10(num)) + 1;
};

// console.log(countDigits(Math.abs(N)));
// console.log(countDigitsOptimised(Math.abs(N)));

// 2. Check if a number is Palindrome or Not

// const N = 4554;
//  Output: true
// const N = 7789;
// Output: false

// Optimal Solution for palindrome
// TC - O(log10 N)
// SC - O(1)
// Time Complexity: O(log10N + 1) where N is the input number.
// The time complexity is determined by the number of digits in the input integer N.
// In the worst case when N is a multiple of 10 the number of digits in N is log10 N + 1.

// In the while loop we divide N by 10 until it becomes 0 which takes log10N iterations.
// In each iteration of the while loop we perform constant time operations like
// modulus and division and pushing elements into the vector.
// Space Complexity: O(1) as only a constant amount of additional memory
// for the reversed number regardless of size of the input number.
const checkPalindrome = (num) => {
  let numCopy = num;
  let result = 0;

  while (numCopy > 0) {
    let lastDigit = numCopy % 10;
    result = result * 10 + lastDigit;
    numCopy = parseInt(numCopy / 10);
  }
  return num === result;
};

// console.log(checkPalindrome(N));

// 3. Check if a number is Armstrong Number or not
// An Amrstrong number is a number that is equal to
// the sum of its own digits each raised to the power of the number of digits.

// const N = 153;
// const N = 371;
//  Output:True
// const N = 154;
//  Output:False

// Time Complexity: O(log10N + 1) where N is the input number.
// The time complexity is determined by the number of digits in the input integer N.
// In the worst case when N is a multiple of 10 the number of digits in N is log10 N + 1.
// In the while loop we divide N by 10 until it becomes 0 which takes log10N iterations.
// In each iteration of the while loop we perform constant time operations like
// modulus and division and pushing elements into the vector.
// Space Complexity: O(1) as only a constant amount of additional memory
// for the reversed number regardless of size of the input number.

const checkArmstrong = (num) => {
  let numCopy = num;
  let result = 0;

  while (numCopy > 0) {
    let lastDigit = numCopy % 10;
    const cube = lastDigit * lastDigit * lastDigit;
    // const cube = Math.pow(lastDigit, 3); //can use inbuilt pow function
    result = result + cube;
    numCopy = parseInt(numCopy / 10);
  }
  return num === result;
};

// console.log(checkArmstrong(N));

// 4. Given an integer N, return all divisors of N.

// const N = 36;
//  Output:[1, 2, 3, 4, 6, 9, 12, 18, 36]

// brute force approach: divide and check from 1 to n
// TC - O(n)
// SC - O(n)
const checkDivisors = (num) => {
  const out = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) out.push(i);
  }

  return out;
};

// Optimised approach: we can notice that all the divisor occur before sqrt of the n
// hence we can check from 1 to sqrt n and find all the divisor

// Time Complexity: O(sqrt(N)) where N is the input number.
// The algorithm iterates through each number from 1 to the square root of N
// once to check if it is a divisor.

// Space Complexity : O(2*sqrt(N))where N is the input number.
// This approach allocates memory for an array to hold all the divisors.
//  The size of this array could go to be 2*(sqrt(N)).
const checkDivisorsOptimised = (num) => {
  const out = [];
  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) out.push(i);
    if (parseInt(num / i) !== i) out.push(parseInt(num / i));
  }

  return out.sort((a, b) => a - b);
};

// console.log(checkDivisors(N));
// console.log(checkDivisorsOptimised(N));

// 5. Check if a number is prime or not
// const N = 2;
// Output:True

// const N = 10;
// Output: False

// brute force approach: check from 2 to n-1 if it divides or not

// Time Complexity: O(N) where N is the input number as we iterate from 1 to N
// performing constant-time operation for each iteration.

// Space Complexity : O(1) as the space used by the algorithm
// does not increase with the size of the inpu
const checkPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

// optimised approach: as divisors pair repeat after sqrt of num
// check from 2 to sqrt num and confirm if it is prime or not

// Time Complexity: O(sqrt(N))where N is the input number.
//  The loop iterates up to the square root of n performing constant time operations at each step.

// Space Complexity : O(1)
const checkPrimeOptimised = (num) => {
  for (let i = 2; i * i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

// console.log(checkPrime(N));
// console.log(checkPrimeOptimised(N));

// 6. Given two integers N1 and N2, find their greatest common divisor.
// const N1 = 9;
// const N2 = 12;
// Output:3

const N1 = 20;
const N2 = 15;
// Output: 5

// brute force approach: check from 1 to smaller value of n
// TC -
const findGCD = (n1, n2) => {
  let maxDiv = 1;
  let n = n1 > n2 ? n1 : n2;
  let m = n === n1 ? n2 : n1;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && m % i === 0) maxDiv = i;
  }

  return maxDiv;
};

// Time Complexity: O(min(N1, N2)) where N1 and N2 is the input number.
// The algorithm iterates from 1 to the minimum of N1 and N2
// and each iteration checks whether both the numbers are divisible
// by the current number (constant time operations).

// Space Complexity: O(1)
// slightly better approach could be starting from min of n1,n2 to 1
// complexity would remain same in worst cases
function findGcd(n1, n2) {
  // Initialize gcd to 1
  let gcd = 1;

  // Iterate from 1 up to the minimum of n1 and n2
  for (let i = 1; i <= Math.min(n1, n2); i++) {
    // Check if i is a common factor of both n1 and n2
    if (n1 % i === 0 && n2 % i === 0) {
      // Update gcd to the current common factor i
      gcd = i;
    }
  }
}

// optimised approach: using euclid theorem
// Time Complexity: O(log(min(N1, N2))) where N1 and N2 is the input number.
// The algorithm repeatedly reduces the problem size by replacing the larger number
//  with its remainder when divided by the smaller number.
// Each step reduces the size of the numbers significantly,
// making the algorithm logarithmic in nature.

// Space Complexity: O(1)
const findGCDOptimsed = (n1, n2) => {
  while (n1 > 0 && n2 > 0) {
    if (n1 > n2) n1 = n1 % n2;
    else n2 = n2 % n1;
  }
  if (n1 === 0) return n2;
  else return n1;
};

// console.log(findGCD(N1, N2));
console.log(findGCDOptimsed(N1, N2));
