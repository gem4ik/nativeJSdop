//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// repeatString("yo", 3, ", ") => "yo, yo, yo"
// repeatString("yo", 0, ", ") => ""
// repeatString("yo", 1, ", ") => "yo"
// function repeatString(yo, num, space) {
//     const newStr = (yo+' ').repeat(num).split(' ')
//     newStr.pop()
//     return newStr.join(space)
// }
// console.log(repeatString('yo', 5 , "-"))



//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// function checkStart(word, str) {
//     return word.startsWith(str)
// }
// console.log(checkStart('qwerty', "qwertf"))

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."
// function truncateString(str, num) {
//     return str.slice(0, str.length-num)
// }
// console.log(truncateString('qwertyqwerty',1))

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка или не строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи.") => "Всем"
// getMinLengthWord("") => null
// getMinLengthWord(123) => null
// getMinLengthWord(true) => null
// getMinLengthWord(undefined) => null
// function getMinLengthWord(str){
//     if (str === '' && typeof str === 'string') {
//         return null
//     } else {
//         const strArr = str.trim().split(' ')
//         let word = strArr[0]
//         for (let i=1;i<strArr.length;i++) {
//             if (strArr[i].length < word.length){
//                 word = strArr[i]
//             }
//         }
//         return word
//     }
// }
//
// console.log(getMinLengthWord("Привет меня зовут Миша йц "))

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ") => "Всем Студентам Инкубатора Желаю Удачи!"
// function setUpperCase(str){
//     return str.toLowerCase().split(' ')
// }
//
// console.log(setUpperCase('вСем стУдентам инКубатора ЖелАю уДачИ!'))
// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
// * с учётом повторяющихся символов в подстроке


// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true //*false
// isIncludes("Incubator", "inba") => true  //*true
// isIncludes("Incubator", "Incubatorrr")=> true //*false





  




