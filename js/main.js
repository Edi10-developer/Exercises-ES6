/***********************
     N I V E L   1
***********************/
/* 1.-
*********/
const multiply = (num1, num2) => num1 * num2;

const toCelsius = fahrenheit => (5 / 9) * fahrenheit - 32;

const padZeros = (num, totLen) => {
    let numStr = num.toString();
    let numZeros = totLen - numStr.length;
    for (let i of numZeros) {
        numStr += '0' + numStr;
    }
    return numStr;
}

const power = (base, exponent) => {
    let result = 1;
    for (let i of exponent) {
        result *= base;
    }
    return result;
}

const greet = (who) => console.log('Hello ' + who);


/* 2.-
*********/
var users = [
    { firstName: 'Homer', lastName: 'Simpson' },
    { firstName: 'Marge', lastName: 'Simpson' },
    { firstName: 'Bart', lastName: 'Simpson' },
    { firstName: 'Lisa', lastName: 'Simpson' },
    { firstName: 'Maggie', lastName: 'Simpson' }
];

users.map((user) => {
    user.firstName;
   // console.log(user.firstName + ' ' + user.lastName);
});


/* 3.-
*********/
var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
/* - 1) Method without reduce();
const readPhrase = () => {
    let phrase = '';
    for(let word of epic){
        phra += (' ' + word) 
    }
    console.log(phrase);
}
phrase();
*/
// - 2) Method with reduce();
const readPhrease = epic.reduce((phrase, word) => phrase + ' ' + word);
readPhrease();


/* 4.-
*********/
/* 5.-
*********/
/* 6.-
*********/