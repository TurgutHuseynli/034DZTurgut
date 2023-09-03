//Тесты 1
// 1)
//для чего нужен AJAX?
//AJAX нужен для обновления страницы без её перезагрузки и передачи данных в фоновом режиме

// 2)
//для чего нужен веб API?
//API нужен для увеличения функциональности браузера и для упрощения кода

// 3)
//создайте обработчик события для кнопки ниже, которая будет перекидывать на предыдущую страницу в браузере при нажатии
{/* <button id='back'>Open</button> */}
// document.getElementById('back').addEventListener('click', () => {
//     history.back()
// })

// 4)
//создайте обработчик события для кнопки ниже, которая будет перекидывать на следующую страницу в браузере при нажатии
{/* <button id='next'>Open</button> */}
// document.getElementById('next').addEventListener('click', () => {
//     history.forward()
// })

// 5)
//создайте обработчик события для кнопки ниже, которая будет перекидывать на 3 страницы вперед в браузере при нажатии
{/* <button id='next'>Open</button> */}
// document.getElementById('next').addEventListener('click', () => {
//     history.go(3)
// })

// 6)
//создайте обработчик события для кнопки ниже, которая будет перекидывать на 3 страницы назад в браузере при нажатии
{/* <button id='next'>Open</button> */}
document.getElementById('next').addEventListener('click', () => {
    history.go(-3)
})

// 7)
//выведите в консоли локальное хранилище
console.log(localStorage)

// 8)
//добавьте обьект ниже в локальное хранилище под ключем 'user'
let newUser8 = {name: 'Alex', age: 24};
localStorage.setItem('user', newUser8)

// 9)
//получите из локального хранилища ранее добавленные данные и выведите в консоли
console.log(localStorage.getItem('user'))

// 10)
//для чего нужен localStorage?
//Для сохранения данных на странице на бесконечный срок.

// 11)
//для чего нужен sessionStorage?
//Для сохранения данных на странице до тех пор пока браузер не закроется.

// 12)
//добавьте обьект ниже в sessionStorage под ключем 'user'
let newUser12 = {name: 'Alex', age: 24};
sessionStorage.setItem('user', newUser12)

// 13)
//получите из sessionStorage ранее добавленные данные и выведите в консоли
console.log(sessionStorage.getItem('user'))

// 14)
//выведите в консоли все ключи из локального хранилища
console.log(localStorage.key())

// 15)
//выведите в консоли длину локального хранилища
console.log(localStorage.length)

// 16)
//удалите ранее добавленный ключ 'user' из локального хранилища
localStorage.removeItem('user')

// 17)
//очистите локальное хранилище
localStorage.clear()

//Тесты 2
// 1)
//выведите в консоли каждый элемент из массива [45, 12, 3, 2, 1, 35] с помощью forEach()
let arr1 = [45, 12, 3, 2, 1, 35]
arr1.forEach(item => {
    console.log(item)
})

// 2)
//создайте новый массив с помощью map() из массива [45, 46, 47] в котором все значения будут удвоены и выведите в консоли
let arr2 = [45, 46, 47]
let double = arr2.map(item => item*2)
console.log(double)

// 3)
//создайте новый массив только из чисел больше 5ти из массива [45, 12, 3, 2, 1, 35] с помощью filter()
let arr3 = [45, 12, 3, 2, 1, 35]
let moreThan = arr3.filter(item => item>5)

// 4)
//сложите все числа из массива [45, 12, 3, 2, 1, 35] с помощью reduce() и выведите результат в консоли
let num4 = arr3.reduce((total, item) => {
    return total+item
})
console.log(num4)

// 5)
//сложите все числа из массива [45, 12, 3, 2, 1, 35] с помощью reduce() и начального значения 50, выведите результат в консоли
let num5 = arr3.reduce((total, item) => {
    return total+item
}, 50)

// 6)
//создайте массив только из чисел больше 5ти используя every() из массива [45, 12, 3, 2, 1, 35]
function five(num){
    return num>5
}
let arr6 = [...arr3]
if(!arr6.every(five)){
    arr6.filter(item => item>5)
}

// 7)
//создайте массив только из чисел больше 5ти используя some() из массива [45, 12, 3, 2, 1, 35]
let arr7 = [...arr3]
if(!arr7.some(five)){
    arr6.filter(item => item>5)
}

// 8)
//используйте метод indexOf чтобы найти индекс 'apple' в массиве ниже
//???

// 9)
//используйте метод lastIndexOf чтобы найти индекс последнего 'apple' в массиве ниже
//???

// 10)
//проверьте находится ли 'apple' в массиве ниже
//???

// 11)
//выведите в консоли первое число которое больше 5ти из массива [1, 3, 4, 9, 0, 20]
let arr11 = [1, 3, 4, 9, 0, 20]
let found = false
for(let i of arr11){
    if(!found && i>5){
        found = true
        console.log(i)
    }
}

// 12)
//выведите в консоли индекс первого числа который больше 5ти из массива [1, 3, 4, 9, 0, 20]
found = false
for(let i in arr11){
    if(!found && arr11[i]>5){
        found = true
        console.log(i)
    }
}

// 13)
//превратите строку 'Hello' в массив с помощью from()
let abc13 = Array.from('Hello')

// 14)
//выведите в консоли все ключи из массива
//???
for(let i in arr3){
    console.log(i)
}

//Тесты 3
// 1)
//что выведет в консоли console.log(Boolean(10 > 9))
//true

// 2)
//что выведет в консоли console.log(Boolean(10 < 9))
//false

// 3)
//что выведет в консоли скрипт ниже
if (1 == 2) {
    console.log(true);
} else {
    console.log(false);
}
//false

// 4)
//что выведет в консоли скрипт ниже
if (1 < 2) {
    console.log(true);
} else {
    console.log(false);
}
//true

// 5)
//что выведет в консоли скрипт ниже
if (1 > 2) {
    console.log(true);
} else {
    console.log(false);
}
//false

// 6)
//что выведет в консоли скрипт ниже
let x6 = 0;
console.log(Boolean(x6));
//false

// 7)
//что выведет в консоли скрипт ниже
let x7 = -0;
console.log(Boolean(x7));
//false

// 8)
//что выведет в консоли скрипт ниже
let x8 = "";
console.log(Boolean(x8));
//false

// 9)
//что выведет в консоли скрипт ниже
let x9;
console.log(Boolean(x9));
//false

// 10)
//что выведет в консоли скрипт ниже
let x10 = null;
console.log(Boolean(x10));
//false

// 11)
//что выведет в консоли скрипт ниже
let x11 = false;
console.log(Boolean(x11));
//false

// 12)
//что выведет в консоли скрипт ниже
let x12 = 10/"H";
console.log(Boolean(x12));
//false

// 13)
//перечислите логические операторы
//<, >, ==, ===, ?, <=, >=, !=, !==, switch

// 14)
//что выведет в консоли скрипт ниже
if (1 > 2 && 2 < 3 || "hello".length < 4) {
    console.log(true);
} else {
    console.log(false);
}
//false

// 15)
//что выведет в консоли скрипт ниже
if (1 > 2 && 2 < 3 || "hello".length < 4) {
    console.log(true);
} else {
    console.log(false);
}
//false

// 16)
//что выведет в консоли скрипт ниже
if (1 > 2 || 2 < 3 || "hello".length != 4) {
    console.log(true);
} else {
    console.log(false);
}
//true

// 17)
//создайте структуру ниже с помощью if, else, else if
let money = 10;
/*
 если money больше или равно 5-ти, то вывести в консоли 'Я куплю пирог',
 иначе если money меньше 5-ти и больше 1, то вывести в консоли 'Мало денег',
 иначе вывести в консоли 'Денег нет'
*/
if(money >= 5){
    console.log('Я куплю пирог')
}else if(money < 5 && money > 1){
    console.log('Мало денег')
}else{
    console.log('Нет денег')
}

// 18)
//превратите скрипт ниже в switch
let day = new Date().getDay();

// if (day == 1) {
//     console.log('Monday');
// } else if (day == 2) {
//     console.log('Tuesday');
// } else if (day == 3) {
//     console.log('Wednesday');
// } else if (day == 4) {
//     console.log('Thursday');
// } else if (day == 5) {
//     console.log('Friday');
// } else {
//     console.log('Break Time!');
// }
switch(day){
    case 1:
        console.log('Monday')
    case 2:
        console.log('Tuesday')
    case 3:
        console.log('Wednesday')
    case 4:
        console.log('Thursday')
    case 5:
        console.log('Friday')
    default:
        console.log('Break Time!')
}



let num = '654765fdfds';

// if (/\s/g.test(num) || /[a-zA-Z]/g.test(num)) {
//     console.log(false)
// }

switch(/\s/g.test(num) || /[a-zA-Z]/g.test(num)){
    case true:
        console.log(false)
}