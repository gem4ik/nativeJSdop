//1. Массивы, как проверить что это массив, способы создания массивов
const arr = [100, 200, 300, 400]

// const arr1 = {
//     0: 100,
//     1: 200,
//     2: 300,
//     3: 400
// }

// const constrArr = new Array(5)
// console.log(typeof constrArr[0])

//2. Способы достучаться до элементов в массиве


// console.log(typeof arr)
// console.log(Array.isArray(arr))
// console.log(Array.isArray(arr1))


//3. Свойство length
// length - старший индекс + 1

// console.log(arr.length)
// console.log(arr.length = 0)
// // arr[123] = 1
// console.log(arr.length)


// получи последний элемент массива с помощью length?
// console.log(arr[arr.length - 1])

// какой есть более современный метод для этого?
// console.log(arr.at(-1))


//4. ДП массивов, spread, rest
// const element0 = arr[0]
// const element1 = arr[1]
// const element2 = arr[2]
// const element3 = arr[3]

const [, , , num4] = arr

// console.log( num4)


// что сидит в rest в объекте и в массиве?
const [, , ...rest] = arr

const obj = {
    name: 'Vitalya',
    age: 29
}

const {...rest1} = obj
const obj2 = {...obj}

// console.log(rest)
// console.log(rest1)

// const func1 = (a, b, ...rest3)=> {
//     console.log(rest3)
// }
//
// func1(1,2,3,4,5)

//5. Сравнение массивов
const newArr = arr
// newArr[0] = 100200
// console.log(newArr[0])
// console.log(arr[0])
// console.log(newArr === arr)


const newCopy = [...arr]
// newCopy[0] = 100200
// console.log(newCopy === arr)

// console.log(newCopy[0])
// console.log(arr[0])


//6. Базовые операции с массивами (добавление, удаление)

// push, unshift
// обновленную длину массива возвращают
// const resPush = arr.push(1000, 2000, 3000)
// const resUnshift = arr.unshift(0)

// console.log(resPush)
// console.log(resUnshift)
// console.log(arr)

// pop, shift
// удаляемые элемент
// const resPop = arr.pop()
// const resShift = arr.shift()
// console.log(arr)
// // console.log(resPop)
// console.log(resShift)

// какая операция затратнее? -> вначале

// delete !!! никогда не использовать
// delete arr[0]
// console.log(arr.length)
// console.log(arr[0])
// console.log(arr)

//7. Итерация по массивам
const developer1 = {
    name: 'Airat',
    salary: 2000
}

const developer2 = {
    name: 'Vanya',
    salary: 3000
}

const allDevelopers = [{...developer1}, {...developer2}]
// console.log(allDevelopers)


// цикл for
const names = ['airat', 'vasya', 'kirill', 'ilya', 'vitalya']
// console.log(names[0])
// console.log(names[1])
// console.log(names[2])
// console.log(names[3])


// for (начало; условие ; шаг) {
//    блок кода
// }
//
// начало -> условие -> блок кода -> шаг -> условие -> блок кода -> шаг

// for (let index = 0; index < names.length; index++) {
//     console.log(names[index])
// }


// for of -> для массивов
// for (name of names) {
//     console.log(name)
// }

// for in -> для объектов
// const copyDeveloper1 = {}

// независимая копия объекта
// for (let key in developer1) {
//     // console.log(key)
//     copyDeveloper1[key] = developer1[key]
// }

// copyDeveloper1.name = 'Vitalya'
// console.log(copyDeveloper1)
// console.log(copyDeveloper1.name)
// console.log(developer1.name)


//8. Методы массивов
/*
Вопросы которыми нужно задаваться при работе с методами массивов:
1. Для чего нужен метод?
2. Сколько параметром принимает и какие?
3. Что возвращает метод?
4. Изменяет ли данный метод исходный массив?
 */

// forEach, map, filter
// names.forEach((value, index, array) => {
//     console.log('value---', value)
//     console.log('index---', index)
//     console.log('array---', array)
//     console.log('--------------')
//
// })

const newArray = []
const resForEach = names.forEach((value) => {
    newArray.push(value + '123')
})

// console.log(newArray)
// console.log(names)

const upperFirstLetterNames = names.map(el => el[0].toUpperCase() + el.slice(1))

// console.log(upperFirstLetterNames)
// console.log(names)

const filteredNames = names.filter((value) => value[0] === 'v')
// console.log(filteredNames)
// console.log(names)

// reduce

const numbers = [1, 2, 3, 4, 5]

// const resReduce = numbers.reduce(() => {}, нач значение)

const resReduce = numbers.reduce((acc, value) => acc + value, 0)


//8. Методы изменяющие исходный массив (мутирующие)
// push, pop, shift, unshift, reverse, fill, splice, sort

