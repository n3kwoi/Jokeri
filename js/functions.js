
let number = 0
let number1 = 0
let number2 = 0
let number3 = 0
let number4 = 0
let number5 = 0
let number6 = 0
let totalRowCount = 0

const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * max) + min;
}

document.querySelector('#funktio').addEventListener('click', () => {

    let number = getRandomIntNumberInRange(0,9);
    let number1 = getRandomIntNumberInRange(0,9)
    let number2 = getRandomIntNumberInRange(0,9)
    let number3 = getRandomIntNumberInRange(0,9)
    let number4 = getRandomIntNumberInRange(0,9)
    let number5 = getRandomIntNumberInRange(0,9)
    let number6 = getRandomIntNumberInRange(0,9)

    let table = document.getElementById("numbers");
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
 
    cell1.innerHTML = number;
    cell2.innerHTML = number1;
    cell3.innerHTML = number2;
    cell4.innerHTML = number3;
    cell5.innerHTML = number4;
    cell6.innerHTML = number5;
    cell7.innerHTML = number6;

    let totalRowCount = table.rows.length-1;
    let result = document.querySelector('output')
    result.innerHTML = totalRowCount
})