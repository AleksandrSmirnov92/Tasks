'use strict'

const task1 = (a) => {
    const n1 = a % 10
    const n2 = Math.floor(a / 10)
    console.log(n1 + n2, n1 * n2)
}
// task1(38)
// task1(12)
const task2 = (a) => {
    console.log(a++)
    console.log(a--)
}
// task2(5)
// task2(12)
const task3 = (a, b) => {
    console.log(++a, --b)
    console.log(a, b)
    console.log(a++, b--)
    console.log(a, b)
}
// task3(5, 5)
// task3(10, 20)
const task4 = (a, b) => {
    a += 2
    b -= a
    console.log(a, b)
}
// task4(5, 9)
// task4(-1, 0)
// task4(-4, -6)
const task5 = (a, b) => {
    a /= 2
    b *= a
    console.log(a, b)
}
// task5(5, 9)
// task5(-1, 0)
// task5(-4, -6)
const task6 = (a, b) => {
    a %= 3
    b **= a
    console.log(a, b)
}
// task6(5, 9)
// task6(1, 7)
// task6(6, 10)
const task7 = (a, b) => {
    const c = (a ** 2 + b ** 2) ** 0.5
    const p = a + b + c
    console.log(c, p)
}
// task7(3, 4)
// task7(5, 7)
const task8 = (a, b) => {
    // a = b - a
    // b -= a
    // a += b
    a += b
    b = a - b
    a -= b
    console.log(a, b)
}
// task8(5, 7)
// task8(-5, 3)

const task9 = (a, b) => {
    const c = b
    b = a
    a = c
    console.log(a, b)
}
// task9(5, 7)
// task9(-5, 3)
const task10 = (a, b) => {
    [a, b] = [b, a]
    console.log(a, b)
}
// task10(5, 7)
// task10(-5, 3)
const task11 = (a, b, c) => {
    const d = a
    a = b
    b = c
    c = d
    console.log(a, b, c)
}
// task11(1, 4, 7)
// task11(10, 15, 20)
const task12 = (a, b, c) => {
    [a, b, c] = [b, c, a]
    console.log(a, b, c)
}
// task12(1, 4, 7)
// task12(10, 15, 20)
const task13 = (a) => {
    a *= a
    console.log(a)
    a *= a
    console.log(a)
    a *= a
    console.log(a)
}
// task13(1)
// task13(2)
// task13(10)
