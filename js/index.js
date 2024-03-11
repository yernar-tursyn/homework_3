// ========= Task 3

// const userName = prompt('Логин:');
// let password = prompt('Пароль');


// if (userName === 'admin') {
//     console.log(password);
//     if (password === 'BlackOverlord') {
//         console.log('Welcome!');
//     } else if (password === null || password === ''){
//     }  console.log('Wrong Password!'); // ?
// } else if (userName === null || userName === '') {
//     console.log('Login canceled');
// } else {
//     console.log('Unknown user');
// }

// ========= Task 4

// const drinks = ['milk', 'beer', 'beer', 'milk', 'milk'];
// for (let i = 0; i < drinks.length; i++) {
//     if (drinks[i] === 'milk') {
//         console.log('good');
//     } else if (drinks[i] === 'beer') {
//         console.log('bad');
//     }
// }

// ========= Task 5

// const table = prompt('Символ');

// let array = '';

// for (let i = 1; i <= 7; i++) {

//   for (let j = 1; j <= 20; j++) {

//     array += table;    
//   }
//   array += '\n';
// } alert(array);


// ========= Task 6

// const timer = prompt('Введите значения в секундах');

// const calc = timer / 3600;

// console.log('Осталось ' + Math.floor(calc) + ' часов');


// ========= Task 7


// // Генерация случайного числа от 1 до 9


// let randomNumber_first = Math.floor(Math.random() * 9) + 1;
// let randomNumber_second = Math.floor(Math.random() * 9) + 1;


// let result_all = prompt('What is ' + randomNumber_first + '*' + randomNumber_second + '?')
// // alert(result_all);
// // console.log(result_all);


// let result = randomNumber_first * randomNumber_second;

// if (result == result_all) {
//     console.log('correct');
// } 

// else {
//     console.log('incorrect');
// }

// ========= Доп.задания

// Task 1

// const number_one = prompt('Введите первое число');
// const number_two = prompt('Введите второе число');

// if (number_one > number_two) {
//     console.log('Первое число больше второго');
// } else if (number_one < number_two) {
//     console.log('Второе число больше первого');
// } else {
//     console.log('Числа равны');
// }

// Task 2

// const table = prompt('Символ');

// let array = '';


//   for (let j = 1; j <= 30; j++) {

//     array += '*';    
//   }

//   array += '\n';
  
//   array += `* ${table} *`;

//   array += '\n';
 
//   for (let j = 1; j <= 30; j++) {

//     array += '*';    
//   }
// alert(array);

// Task 3

// function calculateAge() {
//     var birthDate = prompt("Введите вашу дату рождения в формате 'гггг-мм-дд':");
//     var currentDate = new Date();

//     var parsedBirthDate = new Date(birthDate);
//     if (isNaN(parsedBirthDate)) {
//         alert("Некорректный формат даты. Пожалуйста, введите в формате 'гггг-мм-дд'.");
//         return;
//     }

//     var ageInAll = currentDate - parsedBirthDate;
//     var ageInSeconds = ageInAll / 1000;
//     var ageInMinutes = ageInSeconds / 60;
//     var ageInHours = ageInMinutes / 60;
//     var ageInDays = ageInHours / 24;
//     var ageInMonths = ageInDays / 30.44;
//     var ageInYears = ageInMonths / 12;

//     alert("Вы прожили:\n" +
//         Math.floor(ageInYears) + " лет\n" +
//         Math.floor(ageInMonths % 12) + " месяцев\n" +
//         Math.floor(ageInDays % 30.44) + " дней\n" +
//         Math.floor(ageInHours % 24) + " часов\n" +
//         Math.floor(ageInMinutes % 60) + " минут\n" +
//         Math.floor(ageInSeconds % 60) + " секунд"); 
// }

// calculateAge();


// Task 4

// const number = prompt('Введите целое число от 1 до 100');

// switch (number) {
//     case (!isNaN(number)): 
//     case number === null:
//     case number >= 1 && number <= 100: 
//         console.log('"Пожалуйста, введите корректное целое число от 1 до 100."');
//         break;

//     default:
//         console.log('sdfs');
//         break;
// }

var numbers = [];
var sum = 0;
var count = 0;

while (true) {
    var userInput = prompt("Введите целое число от 1 до 100:");

    // Проверяем, если пользователь нажал "Отмена"
    if (userInput === null) {
        break;
    }

    // Преобразуем введенное значение в число
    var number = parseInt(userInput);

    // Проверяем, является ли введенное значение числом и соответствует ли критериям
    if (!isNaN(number) && number >= 1 && number <= 100) {
        numbers.push(number);
        sum += number;
        count++;
    } else {
        alert("Пожалуйста, введите корректное целое число от 1 до 100.");
    }
}

if (count > 0) {
    var average = sum / count;
    console.log("Количество введенных чисел: " + count);
    console.log("Среднее арифметическое: " + average);
} else {
    console.log("Вы не ввели ни одного корректного числа.");
}


// 