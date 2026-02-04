"use strict";
const sa = new Map([
  ["Мансур", 13],
  ["Мота", 12],
  ["Ислам", 15],
]);

const swappedMap = new Map();

sa.forEach((value, key) => {
  swappedMap.set(value, key);
});

console.log(swappedMap);

// console.log(Object.fromEntries(sa));
