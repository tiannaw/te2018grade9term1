const READLINE = require("readline-sync");
let year = 2003;
let a = Math.floor(year % 19);
let b = Math.floor(year / 100);
let c = Math.floor(year % 100);
let d = Math.floor(b / 4);
let e = Math.floor(b / 40);
let f = Math.floor(b + 8) % 25;
let g = Math.floor(b - f + 1) / 3;
let h = Math.floor(19 * a + b - g + 15) / 30;
let i = Math.floor(c / 4);
let k = Math.floor(c % 4);
let r = Math.floor(32 + 2 * e + 2 * i - h - k) / 7;
let m = Math.floor(a + 11 * h + 22 * r) / 451;
let n = Math.floor(h + r - 7 * m) / 31;
let p = Math.floor(h + r - 7 * m) % 31;

console.log(m)