// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.
// let i = 0;
// console.log(1 >= i);
// console.log(0 >= i);
// console.log(-3 >= i);

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// let i = "test";

// console.log(i === 'test');
// console.log(i === "qwerty");
// console.log(i === true);



// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// function calc(value) {
//     if (value > 10) {
//         console.log(value -5);
//     } else {
//         console.log(value +5);
//     }
// }

// calc(1);
// calc(10);
// calc(13);

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const month = [
//     "January",
//     "February ",
//     "March ",
//     "April ",
//     "May ",
//     "June ",
//     "July ",
//     "August ",
//     "September ",
//     "October ",
//     "November ",
//     "December ",
// ]

// let value = Number(prompt("Enter please number 1 - 12"));

// if (value >= 1 && value <= 12) {
//     alert(`Your number is equal to the month: ${month[value - 1]}`);
// } else {
//     alert("Please enter the number!")
// }

// console.log(month[value - 1])

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let value = prompt("Enter a three-digit number").split("");

// function calc(value) {
// let sum = 0;

// for (let i = 0; i < value.length; i++) {
//     sum += Number(value[i])
// }
// return sum;
// }

// alert(`The sum of your numbers is : ${calc(value)}`)
// console.log(calc(value));