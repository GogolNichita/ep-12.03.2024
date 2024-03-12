function ucLast(phrase) {
    let word = phrase.split(" ");
    if (!phrase) return word;

    word = word.map ((trash) => trash.substring(0,trash.length - 1) + trash[trash.length-1].toUpperCase())  ;

    return word.join(" ");
}

const word = prompt("Enter the phrase ");
console.log(ucLast(word));
alert(ucLast(word));