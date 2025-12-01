// Step-by-step evaluation of: 
// 18 ÷ (3+3) × 4 − {12 − [5 × (2+1)]} + 7^2

console.log("Step 1: parentheses");
let a = 3 + 3;          // (3+3)
let b = 2 + 1;          // (2+1)
console.log(a, b);

console.log("Step 2: bracket multiplication");
let c = 5 * b;          // 5 × (2+1)
console.log(c);

console.log("Step 3: curly brackets");
let d = 12 - c;         // 12 − [5 × (2+1)]
console.log(d);

console.log("Step 4: exponent");
let e = 7 ** 2;         // 7^2
console.log(e);

console.log("Step 5: divide and multiply");
let f = 18 / a;         // 18 ÷ (3+3)
let g = f * 4;          // (18 ÷ 6) × 4
console.log(f, g);

console.log("Step 6: final sum");
let result = g - d + e; // subtracting −3 = +3
console.log("Final answer:", result);






