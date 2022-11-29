"use strict";

// function simpleArraySum(ar) {
//   let sum = 0;
//   for (i = 0; i < ar.length; i++) {
//     sum += ar[i];
//   }
//   console.log(sum);
// }

// simpleArraySum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);

// function compareTriplets(a, b) {
//   let alice = 0;
//   let bob = 0;

//   for (let i = 0; i < a.length; i++) {
//     if (a[i] > b[i]) {
//       alice++;
//     } else if (a[i] < b[i]) {
//       bob++;
//     }
//   }

//   console.log([alice, bob]);
// }

// const a = [6, 0, 3, 4, 4];
// const b = [4, 0, 6, 5, 8];
// compareTriplets(a, b);

// function diagonalDifference(arr) {
//   let sum1 = 0;
//   let sum2 = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum1 += arr[i][i];
//     sum2 += arr[i][arr.length - 1 - i];
//   }
//   const diff = Math.abs(sum1 - sum2);
//   console.log(diff);
// }

// diagonalDifference([
//   [11, 2, 4, 3],
//   [4, 5, 6, 3],
//   [10, 8, -12, 6],
//   [11, 18, 12, 15],
// ]);

// function plusMinus(arr) {
//   let positive = 0;
//   let negative = 0;
//   let zero = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       positive++;
//     } else if (arr[i] < 0) {
//       negative++;
//     } else if (arr[i] === 0) {
//       zero++;
//     }
//   }
//   positive = (positive / arr.length).toFixed(6);
//   negative = (positive / arr.length).toFixed(6);
//   zero = (zero / arr.length).toFixed(6);
//   const result = positive + "\n" + negative + "\n" + zero;
//   return result;
// }

// const arr = [-4, 3, -9, 0, 4, 1];
// console.log(plusMinus(arr));

// function staircase(n) {
//   for (let i = 1; i <= n; i++) {
//     const aaa = "#".repeat(i);
//     const bbb = " ".repeat(n - i);
//     const ccc = bbb + aaa;
//     console.log(ccc);
//   }
// }

// function miniMaxSum(arr) {
//   arr.sort((a, b) => {
//     return a - b;
//   });

//   let sum1 = 0;
//   let sum2 = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     sum1 += arr[i];
//     sum2 += arr[i + 1];
//   }

//   console.log(`${sum1}  ${sum2}`);
// }

// function birthdayCakeCandles(candles) {
//   candles.sort((a, b) => {
//     return a - b;
//   });
//   const tallest = candles.filter((x) => x === candles[candles.length - 1]);

//   console.log(tallest.length);
// }
// birthdayCakeCandles([9, 3, 1, 4, 7, 9]);

function timeConversion(s) {
  if (s.includes("PM") && s.slice(0, 2) === "12") {
    let newS = s.replace("PM", "");
    return newS;
  } else if (s.includes("PM")) {
    let newS = s.replace("PM", "");
    newS = newS.slice(-6);
    return Number(s.substr(0, 2)) + 12 + newS;
  } else if (s.includes("AM") && s.slice(0, 2) === "12") {
    let newS = s.replace("AM", "");
    newS = newS.slice(-6);
    return +s.substr(0, 2) - 12 + "0" + newS;
  } else if (s.includes("AM")) {
    let newS = s.replace("AM", "");
    return newS;
  }
}

console.log(timeConversion("12:45:54AM"));
