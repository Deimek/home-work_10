
const userNumber = prompt('Ente ryour number 1 - 100, please');
console.log(`User numaber ${userNumber}`);

if (userNumber === null) {
    alert('ok, bye');
    console.log('ok, bye');
}
else if (!userNumber.trim() || isNaN(userNumber) || !Number.isInteger(+userNumber)) {
    alert('Error: invalid number, try egain...!!!');
    console.log('Error: invalid number, try egain...!!!');
}
else if (0 < +userNumber && +userNumber <= 100) {
    // console.log('ok');
    for (let i = 1; i ** 2 <= userNumber; i++) {

        const result = i;


        console.log(`Number - ${i}, square - ${i ** 2}`);
    }


}
else {
    alert('Error: invalid  number, try egain...!!!');
    console.log('Error: invalid number, try egain...!!!');


}


