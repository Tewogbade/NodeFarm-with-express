"use strict";

const http = require("http");
const fs = require("fs");

// fs.readFile(`${__dirname}/txt/start.txt", "utf-8`, (err, dataStart) => {
//   fs.readFile(`${__dirname}/txt/read-this.txt", "utf-8`, (err, dataRead) => {
//     fs.readFile(`${__dirname}/txt/append.txt`, "utf-8", (err, dataAppend) => {
//       fs.writeFile(
//         `${__dirname}txt/final.txt`,
//         dataStart + " " + dataRead + " " + dataAppend,
//         (err, data) => {
//           fs.readFile(
//             `${__dirname}txt/final.txt`,
//             "utf-8",
//             (err, dataFinal) => {
//               console.log(dataFinal);
//             }
//           );
//         }
//       );
//     });
//   });
// });

new Promise((resolve, reject) => {
  fs.readFile(`${__dirname}/txt/start.txt`, "utf-8", (err, dataStart) => {
    // console.log(dataStart);
    // resolve(dataStart);
  });
})
  .then((resolve, reject) => {
    (dataStart) => {
      fs.readFile(
        `${__dirname}/txt/read-this.txt`,
        "utf-8",
        (err, dataRead) => {
          const data = dataStart + " " + dataRead;
          console.log(data);
          resolve(data);
        }
      );
    };
  })
  .then((data) => {
    console.log(data);
  });
// .then((dataStart, dataRead) => {
//   fs.readFile(`${__dirname}/txt/append.txt`, "utf-8", (err, dataAppend) => {
//     const allData = data + " " + dataAppend;
//     console.log(dataStart + " " + dataRead + " " + dataAppend);

//   });
// });

// .then((dataRead) => {
//   resolve(console.log(dataRead));
// });

// .then(
//   fs.readFile(
//     `${__dirname}/txt/read-this.txt", "utf-8`,
//     (err, dataRead) => {}
//   )
// )
// .then(
//   fs.readFile(`${__dirname}/txt/append.txt`, "utf-8", (err, dataAppend) => {})
// )
// .then(
//   fs.readFile(`${__dirname}/txt/append.txt`, "utf-8", (err, dataAppend) => {})
// )
// .then(
//   fs.writeFile(
//     `${__dirname}txt/final.txt`,
//     dataStart + " " + dataRead + " " + dataAppend,
//     (err, data) => {}
//   )
// )
// .then(
//   fs.readFile(`${__dirname}txt/final.txt`, "utf-8", (err, dataFinal) => {
//     console.log(dataFinal);
//   })
// )
// .catch((err) => {
//   console.error(err);
// });
