let Z = [1, 1, 11, 2, 3];
let x = 0;

function F(n) {
    n = n.sort((a, b) => a - b).slice(1, -1);
    for (let i = 0; i < n.length; i++) {
        x = x + n[i];
    }
    return x;
}

// other method


function F(n) {
    n = n.sort((a, b) => a - b).slice(1, -1).reduce((acc, current) => acc + current, 0);
    return x;
}


