//=============================this==================================
/////////////////??????/////////strict mode///////////////
// this - контекст вызова. Равен глобальному объекту {

// }

// Что это такое?
// объект перед точкой

// Какой тип данных?
// Чему равен? - объект
// console.log(this === global) в ноде global
// console.log(this === window) в браузере window

// для чего это?

// доказательство что это такое


//=============================Метод объекта==================================

// 1. Метод объекта

// способы создания метода объекта

const user = {
    name: 'Zhenya',
    age: 24,
    isMan: true,
// 1й способ
    sayHi() {
        return 'Привет'
    },
    getAge(inc, dec) {
        return `мне ${this.age + inc[0]} года`
    },
    getUser() {
        return this
    },
    getFullInfo() {
        return `имя: ${this.name}, возраст:${this.age}`
    }
}

const user1 = {
    name: 'Vlad',
    age: 30,
    isMan: false,
}

// 2-й способ
// sayHi: function () {return 'Привет'}

// 3й способ
// user.sayHi = function () {return 'Привет'}
// 4й способ
// function sayHi () {return 'привет'}
// user.sayHi = sayHi
// 5й способ
// const sayHi = () => {
//     return `привет ${user.name}`
// }
// user.sayHi = sayHi
//
// console.log(user.sayHi())
//=============================call, bind, apply==================================

// call, bind, apply(методы функций)
// что за методы?
//все устанавливают контекст
// для чего нужны?
//call и apply позволяют передать доп параметры
// что принимают в качестве параметров?

// call
// console.log(user.getAge.call(user1, 5, 2))
// apply
// console.log(user.getAge.call(user1, [5]))
// bind
// const userFullName = user.getFullInfo.bind(user1)
// console.log(userFullName())

//пример
// const teamLead = {
//     salary: 5000,
//     name: 'Denis',
//     workExp: 7,
// }
// const junior = {
//     salary: 500,
//     name: 'Iliya',
//     workExp: 0,
// }
// function  printDevInfo(extraInfo = '') {
//     return `name: ${this.name},
//      salary:${this.salary},
//       exp: ${this.workExp},
//        extra info: ${extraInfo}`
// }
//
// console.log(printDevInfo.bind(junior)('loh'))
// console.log(printDevInfo.call(teamLead, 'Ne Loh'))
//=============================Случаи потери контекста==================================
// когда делаем копию функции вне объекта
// при объявлении в стрелочном синтаксисе(у стрелочных функций нет контекста this)
//=============================Функция-конструктор==================================

// Функция-конструктор
const person = {
    name: 'Denis',
    age: 24,
    isMan: true,
}
// для чего нужна
// создание объектов
// Правила при работе с функцией конструктор
// 1. Имя функции начинается с большой буквы
// 2. При вызове надо использовать ключевое слово new
// Базовая запись
function Person(name,age,isMan) {
    this.name = name
    this.age = age
    this.isMan = isMan
}
    const person1 = new Person('Denis', 23, true)
// console.log(person1)
// Разница по сравнению с обычной функцией (что возвращают)
// она возвращает объект
// Что делать, если нужно добавить свойство?


// ---------------------------------- Задачи -----------------------------------------------

/*
1. Создайте объект car, у которого есть свойство brand и метод getBrand,
который выводит название марки машины.
Вызовите метод getBrand как метод объекта car.

2. Создайте объект counter, у которого есть свойство count и методы increment, decrement и reset,
которые увеличивают, уменьшают, зануляют (сбрасывает) значение счетчика соответственно.
Используйте ключевое слово this для обращения к свойству count.

3. Создайте объект person, у которого есть свойства name и age.
Создайте метод greet, который выводит сообщение с именем и возрастом персоны.
Используйте метод bind для создания новой функции,
которая будет связывать значение this с объектом person.

4. Создайте объект calculator, у которого есть свойства x и y и методы сложения и умножения этих чисел.
Создайте другой объект user, у которого есть свойства a и b.
Используйте метод call или apply для вызова методов объекта calculator с аргументами из объекта user.
 */









