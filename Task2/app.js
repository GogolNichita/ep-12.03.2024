function wordUpperCaseLast(word){
    return word.substring(0, word.length - 1) + word[word.length - 1].toUpperCase()
}

function ucLast(phrase) {
    if (!phrase) {
        return phrase;
    }
const words = phrase.split(/\b/);

    return words.map(word => wordUpperCaseLast(word)).join("");
}

const words = prompt("Enter the phrase ");
console.log(ucLast(words));
alert(ucLast(words));