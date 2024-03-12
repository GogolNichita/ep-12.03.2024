function Square(masiv) {
    const pozitive = masiv.filter(number => number >= 0);
    const negativeSquare = masiv.filter(number => number < 0).map(number => number * number);
    negativeSquare.push(...pozitive);
    return negativeSquare;
}

const array = [0, -5, 4, 3, -2, 8, 10];
console.log(Square(array));
