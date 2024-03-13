function squareNegative(numbers) {
    return [
        ...numbers.filter(number => number >= 0),
        ...numbers.filter(number => number < 0).map(number => number ** 2)
    ];
}

const numbers = [0, -5, 4, 3, -2, 8, 10];
console.log(squareNegative(numbers));
