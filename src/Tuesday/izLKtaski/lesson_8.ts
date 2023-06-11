// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

import {logDOM} from "@testing-library/react";

export function sum(...nums: Array<number>): number {
    const numsSum = nums.reduce((a,b)=> a + b , 0)
    return numsSum
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number,b: number,c: number): string {
    if (a <= 0 || b <= 0 || c <= 0) {
        return "00"
    }
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "00"
    }
    if (a === b && b === c) {
        return "10"
    }
    if (a === b || b === c || a === c) {
        return "01"
    }
    return "11"
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number{
    const sumStr = number.toString()
    let sum = 0
    for (let i = 0; i<sumStr.length; i++) {
      sum += +sumStr[i]
    }
    return sum
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let sum1 = 0
    let sum2 = 0
    for (let i=0; i<arr.length; i++) {
        if(i%2 === 1) {
            sum1 += arr[i]
        }
        if(i%2 === 0) {
            sum2 += arr[i]
        }
    }
    return sum1 < sum2
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return array.filter(el=>el>0 && Number.isInteger(el)).map(el=>el**2)
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    // return (N * (N + 1)) / 2;
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let sum = 0;
    for (let i = 0; i <= N; i++) {
        sum += i;
    }
    return sum;
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let count = []
    for (let i=0;i<banknotes.length;i++){
        const countI = Math.floor(amountOfMoney / banknotes[i])
        amountOfMoney -= countI * banknotes[i]
        for (let j = 0; j < countI; j++) {
            count.push(banknotes[i]);
        }
    }
    return count
}

console.log(getBanknoteList(15300))