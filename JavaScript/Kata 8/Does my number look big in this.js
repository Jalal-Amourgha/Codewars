let x = 1;

function narcissistic(value) {
    do {
        if (value > 10) {
            value = value / 10;
            x = x + 1;
        }
    } while (value > 10);
    return x;
}



console.log(narcissistic(19))