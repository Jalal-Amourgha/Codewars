let y = [-1, 2, 3, 4, -5];
let x = 0;

function PositiveSum(Arr) {
    for (let i = 0; i < Arr.length; i++) {
        if (Arr[i] > 0) {
            x = x + y[i];
        }
    }
    return x;
}


console.log(PositiveSum(y));
