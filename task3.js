function test(S) {
    const numA = reduceStringToCharOccurences(S, 'a');

    if (numA === 0) {
        const numB = reduceStringToCharOccurences(S, 'b');

        if (numB < 3) {
            console.log('aa');
            return 0;
        }

        if (numB === 3) {
            return 1;
        }

        return ((numB - 1)*(numB - 2)) / 2;
    }

    if (numA % 3 !== 0) {
        return 0;
    }

    const aPerPart = numA / 3;
    let foundAs = 0;
    let charsBetween1and2 = 0;
    let charsBetween2and3 = 0;

    [...S].forEach(c => {
        if (c === 'a') {
            foundAs++;
        }

        if (foundAs === aPerPart) charsBetween1and2++;
        if (foundAs === (2 * aPerPart)) charsBetween2and3++;
    });

    return charsBetween1and2 * charsBetween2and3;   
}

function fact(n) {
    if (n < 0 || n === 0) return 1;

    return n * fact(n-1);
}

function reduceStringToCharOccurences(s, c) {
    return [...s].reduce((acc, el) => {
        return el === c ? ++acc : acc; 
    }, 0);
}

const input = "ababa";

console.log(test(input));
