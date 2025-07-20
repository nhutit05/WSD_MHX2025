//BT1
const inp = document.getElementById("prime");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) if (n % i == 0) return false;
    return true;
}

btn.addEventListener("click", () => {
    const n = parseInt(inp.value);
    if (isNaN(n)) {
        result.textContent = "Vui lòng nhập số hợp lệ";
    } else {
        if (isPrime(n)) result.textContent = `${n} là số nguyên tố`;
        else result.textContent = `${n} không là số nguyên tố`;
    }
});

//BT2
function sumOddNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) if (i % 2 != 0) sum += i;
    return sum;
}

const btn1 = document.getElementById("btn1");
const inp1 = document.getElementById("odd");
const result1 = document.getElementById("result1");

btn1.addEventListener('click', () => {
    const n = parseInt(inp1.value);
    if (isNaN(n)) {
        result1.textContent = "Vui lòng nhập số hợp lệ";
    }
    else {
        let kq = sumOddNumbers(n);
        result1.textContent = `${kq}`;
    }
})

//BT3

const arr = document.getElementById("array");
const btn2 = document.getElementById("btn2");
const even = document.getElementById("even");
const max = document.getElementById("max");
const positive = document.getElementById("positive");

btn2.addEventListener('click', () => {
    const val = arr.value;
    const nums = val.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
    const evenNumbers = nums.filter(num => num > 0 && num % 2 == 0);
    const maxNumber = Math.max(...nums);
    const posNumbers = nums.filter(num => num > 0);
    even.textContent = `Even numbers: ${evenNumbers.length > 0 ? evenNumbers.join(', '): 'None'}`;
    max.textContent = `Max number: ${nums.length > 0 ? maxNumber: 'None'}`;
    positive.textContent = `Positive numbers: ${posNumbers.length > 0 ? posNumbers.join(', '): 'None'}`;
})
