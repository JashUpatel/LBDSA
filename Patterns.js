const inp = 5;
const out = [];

// ---> half pyramid

// for (i = 0; i < inp; i++) {
//   for (j = 0; j <= inp - 1; j++) {
//     if (j >= inp - i - 1) out.push("*");
//     else out.push(" ");
//   }
//   console.log(...out);
//   out.splice(0);
// }

// ----> full pyramid with space

// for (i = 0; i < inp; i++) {
//   for (j = 0; j < inp - i - 1; j++) {
//     out.push(" ");
//   }
//   //   for (k = 0; k < i + 1; k++) {
//   //     out.push("*  ");
//   //   }
//   for (k = 0; k < 2 * i + 1; k++) {
//     if (k % 2 == 0) {
//       out.push("*");
//     } else out.push(" ");
//   }
//   console.log(...out);
//   out.splice(0);
// }

// ----> inverted hollow half pyramid

// for (i = inp - 1; i >= 0; i--) {
//   for (j = 0; j <= i; j++) {
//     if (j == 0 || j == i || i == inp - 1) out.push("*");
//     else out.push(" ");
//   }
//   console.log(...out);
//   out.splice(0);
// }

// ----> full pyramid

//approach 1

// var z = 0;

// for (i = 0; i < inp; i++) {
//   for (j = 0; j < inp; j++) {
//     if (j == inp - 1 || j >= inp - i - 1) out.push("*");
//     else out.push(" ");
//   }
//   for (k = 0; k < z; k++) {
//     out.push("*");
//   }
//   z++;
//   console.log(...out);
//   out.splice(0);
// }

// approach 2

// for (i = 0; i < inp; i++) {
//   for (j = 0; j < 2 * inp; j++) {
//     if (j >= inp - i - 1 && j <= inp + i - 1) out.push("*");
//     else out.push(" ");
//   }
//   console.log(...out);
//   out.splice(0);
// }

// ---> hollow full pyramid

//approach 1

// var z = 0;

// for (i = 0; i < inp; i++) {
//   for (j = 0; j < inp; j++) {
//     if (j == inp - i - 1 || i == inp - 1) out.push("*");
//     else out.push(" ");
//   }
//   for (k = 0; k < z; k++) {
//     if (k == z - 1 || i == inp - 1) out.push("*");
//     else out.push(" ");
//   }
//   z++;
//   console.log(...out);
//   out.splice(0);
// }

// approach 2

// for (i = 0; i < inp; i++) {
//   for (j = 0; j < 2 * inp - 1; j++) {
//     if (i == inp - 1 || j == inp - i - 1 || j == inp + i - 1) out.push("*");
//     else out.push(" ");
//   }
//   console.log(...out);
//   out.splice(0);
// }

// ---> hollow diamond

// for (i = 0; i < inp; i++) {
//   for (j = 0; j < inp - i - 1; j++) {
//     out.push(" ");
//   }
//   for (k = 0; k < 2 * i + 1; k++) {
//     if (k == 0 || k == 2 * i) out.push("*");
//     else out.push(" ");
//   }

//   console.log(...out);
//   out.splice(0);
// }

// for (i = 0; i < inp; i++) {
//   for (j = 0; j < i; j++) {
//     out.push(" ");
//   }
//   for (k = 0; k < 2 * inp - 2 * i - 1; k++) {
//     if (k == 0 || k == 2 * inp - 2 * i - 2) out.push("*");
//     else out.push(" ");
//   }

//   console.log(...out);
//   out.splice(0);
// }

//approach 2

// k = 0;
// for (i = 0; i < 2 * inp; i++) {
//   for (j = 0; j < 2 * inp - 1; j++) {
//     if (j == inp - i - 1 || j == inp + i - 1) {
//       out.push("*");
//       k++;
//     } else if (j == i - inp) {
//       out.push("*");
//     } else if (i >= inp && j == k - 1) {
//       out.push("*");
//       k--;
//     } else out.push(" ");
//   }

//   console.log(...out);
//   out.splice(0);
// }

// ---> flipped solid diamond

// for (i = 0; i < inp; i++) {
//   for (j = 0; j < 2 * inp + 1; j++) {
//     if (j == inp || (j > inp - i - 1 && j < inp + i + 1)) out.push(" ");
//     else out.push("*");
//   }

//   console.log(...out);
//   out.splice(0);
// }
// for (i = 0; i < inp; i++) {
//   for (j = 0; j < 2 * inp + 1; j++) {
//     if (j == inp || (j > i && j < 2 * inp - i)) out.push(" ");
//     else out.push("*");
//   }

//   console.log(...out);
//   out.splice(0);
// }

// half solid diamond

// for (i = 0; i < 2 * inp - 1; i++) {
//   cond = 0;
//   if (i < inp) cond = i;
//   else cond = inp - (i % inp) - 2;

//   for (j = 0; j <= cond; j++) {
//     out.push("*");
//   }

//   console.log(...out);
//   out.splice(0);
// }

//fancy pattern 1

// for (i = 0; i < inp; i++) {
//   for (j = 0; j < 2 * i + 1; j++) {
//     if (j % 2 == 0) out.push(i + 1);
//     else out.push("*");
//   }

//   console.log(...out);
//   out.splice(0);
// }

// for (i = inp - 1; i >= 0; i--) {
//   for (j = 0; j < 2 * i + 1; j++) {
//     if (j % 2 == 0) out.push(i + 1);
//     else out.push("*");
//   }

//   console.log(...out);
//   out.splice(0);
// }

// number hollow reverse half pyramid

// for (i = 0; i < inp; i++) {
//   for (j = i; j < inp; j++) {
//     if (i == 0 || j == i || j == inp - 1) out.push(j + 1);
//     else out.push(" ");
//   }

//   console.log(...out);
//   out.splice(0);
// }

// numeric full pyramid

// count = 0;
// for (i = 0; i < inp; i++) {
//   for (j = 0; j < 2 * inp; j++) {
//     if (j > inp - i - 1 && j < inp + i + 1) {
//       if (i > 0 && j > inp) {
//         count--;
//         out.push(count);
//       } else {
//         count++;
//         out.push(count);
//       }
//     } else {
//       out.push(" ");
//     }
//   }
//   console.log(...out);
//   out.splice(0);
// }

// numeric full pyramid

// k = inp;
// for (i = 0; i < inp; i++, k++) {
//   c = 0;
//   for (j = 0; j < k; j++) {
//     if (j < inp - i - 1) out.push(" ");
//     else if (j <= inp - 1) {
//       c++;
//       out.push(c);
//     } else {
//       c--;
//       out.push(c);
//     }
//     // if(j<=inp-1){
//     // out.push(c);
//     // c++; }
//     //  else if (j == inp) {
//     //   c = c - 2;
//     //   out.push(c);
//     //   c--;
//     // } else {
//     //   out.push(c);
//     //   c--;
//     // }
//   }
//   //   k++;
//   console.log(...out);
//   out.splice(0);
// }

// numeric hollow full pyramid

// count = 1;
// for (i = 0; i < inp; i++) {
//   for (j = 0; j < inp + i; j++) {
//     if (i == inp - 1) {
//       if (j % 2 == 0) out.push(count++);
//       else out.push(" ");
//     } else if (j >= inp - i - 1 && j <= inp + i - 1) {
//       if (j == inp - i - 1) out.push(1);
//       else if (j == inp + i - 1) out.push(i + 1);
//       else out.push(" ");
//     } else out.push(" ");
//   }

//   console.log(...out);
//   out.splice(0);
// }

// butterfly pattern

// pascals triangle

// for (i = 1; i <= inp; i++) {
//   c = 1;
//   for (j = 1; j <= i; j++) {
//     out.push(c);
//     c = (c * (i - j)) / j;
//   }

//   console.log(...out);
//   out.splice(0);
// }
