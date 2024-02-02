function squareDigits(num) {
    let newNum = num.toString().split('').map((n) => Number(n ** 2));
    return +newNum.join('');
}