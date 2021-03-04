/***********************
     L E V E L   1
***********************/
console.log('** + ** + ** + ** + ** + LEVEL 1 + ** + ** + ** + ** + **')
/* 1.-
*********/
console.log('****************  Exercise 1  *******************')
const multiply = (num1, num2) => num1 * num2;
// multiply();

const toCelsius = fahrenheit => (5 / 9) * fahrenheit - 32;
// toCelsius();

const padZeros = (num, totLen) => {
    let numStr = num.toString();
    let numZeros = totLen - numStr.length;
    for (let i of numZeros) {
        numStr += '0' + numStr;
    }
    return numStr;
}
// padZeros();

const power = (base, exponent) => {
    let result = 1;
    for (let i of exponent) {
        result *= base;
    }
    return result;
}
// power();

const greet = (who) => console.log('Hello ' + who);
// greet();


/* 2.-
*********/
console.log('****************  Exercise 2  *******************')
var users = [
    { firstName: 'Homer', lastName: 'Simpson' },
    { firstName: 'Marge', lastName: 'Simpson' },
    { firstName: 'Bart', lastName: 'Simpson' },
    { firstName: 'Lisa', lastName: 'Simpson' },
    { firstName: 'Maggie', lastName: 'Simpson' }
];

const showName = (users) => {
    users.map((user) => {
        user.firstName;
        // console.log(user.firstName + ' ' + user.lastName);
    });
}
// showName(users);


/* 3.-
*********/
console.log('****************  Exercise 3  *******************')
var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// - 1) Method without reduce();
const readPhrase = () => {
    let phrase = '';
    for (let word of epic) {
        phra += (' ' + word)
    }
}
// readPhrase();

// - 2) Method with reduce();
const read_phrase = epic.reduce((phrase, word) => phrase + ' ' + word);
// read_phrase();


/* 4.-
*********/
console.log('****************  Exercise 4  *******************')
const readPhraseReverse = ([...epic]) => {
    let phraseReverse = '';
    for (let i of epic.reverse()) {
        phraseReverse += (i + ' ');
    }
    return phraseReverse;
}
// readPhraseReverse([...epic]);


/* 5.-
*********/
console.log('****************  Exercise 5  *******************')
const doMoreWork = () => { console.log('Executing DO MORE WORK') }
const b = () => { console.log('Executing function B'); }
const a = async () => {
    await b();
    doMoreWork();
}
// a();


/* 6.-
*********/
console.log('****************  Exercise 6  *******************')
var tasks = [
    {
        'name': 'Start React web',
        'duration': 120
    },
    {
        'name': 'Work out',
        'duration': 60
    },
    {
        'name': 'Procrastinate on facebook',
        'duration': 240
    }
];

var tasksName = [];
// 1)- ForEach 
const getTaskName = () => {
    tasks.forEach(task => {
        tasksName.push(task.name);
    });
}
// getTaskName();

// 2)- Map
const readTaskName = () => {
    tasksName.push(tasks.map(task => { return task.name }));
}
// readTaskName();


/***********************
     L E V E L   2
***********************/
console.log('** + ** + ** + ** + ** + LEVEL 2 + ** + ** + ** + ** + **')
console.log('      ');
console.log('      ');
console.log('****************  Exercise 7  *******************')

const calculation = () => {
    let number1 = parseInt(prompt('First number:'));
    let number2 = parseInt(prompt('Second number:'));

    for (let i = 1; i < number2; i++) {
        console.log(`${number1} x ${i} = ${number1 * i}`);
    }
}
// calculation();


/* 8.-
*********/
console.log('****************  Exercise 8  *******************')
const calculation2 = () => {
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;

    var table = document.createElement("table");
    var tableBody = document.createElement("tbody");

    for (let i = 1; i < number2; i++) {
        var row = document.createElement("tr");

        for (let j = 1; j <= number2; j++) {
            var cell = document.createElement("td");
            var cellText = document.createTextNode(`${number1} x ${j} = ${number1 * j}`);

            cell.appendChild(cellText);
            row.appendChild(cell);
        }
    }
    tableBody.appendChild(row);
    table.appendChild(tableBody);
    document.querySelector('.result').appendChild(table);
    // tbl border attribute to 
    table.classList.add("table");
}

