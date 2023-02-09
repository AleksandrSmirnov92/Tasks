'use strict'
const task1 = (a) => {
    console.log(Math.floor(a), Math.ceil(a))
    console.log(Math.round(a))
}
// task1(0.7)
// task1(5.1)
// task1(10.5)
const task2 = (n) => {
    console.log(n % 7)
}
// task2(14)
// task2(17)
// task2(5)
const task3 = (r) => {
    console.log(r % 10)
}
// task3(5)
// task3(27)
// task3(150)
// task3(199)
const task4 = (t) => {
    console.log(t % 3600)
}
// task4(4567)
// task4(1619633183)
// task4(1584139518)
const task5 = (t) => {
    console.log(Math.floor(t / 3600) % 24, Math.floor(t / 60) % 60)
}
// task5(4567)
// task5(1619633183)
// task5(1584139518)
const task6 = (t) => {
    console.log((Math.floor(t / 3600) + 3) % 24, Math.floor(t / 60) % 60)
}
// task6(4567)
// task6(1619633183)
// task6(1584139518)
const task7 = (t) => {
    console.log((Math.floor(t / (3600 * 24)) + 4) % 7)
}
// task7(4567)
// task7(1619633183)
// task7(1584139518)
// task7(1529269035)
const task8 = (a) => {
    console.log(Math.floor(a / 10), a % 10)
}
// task8(38)
// task8(10)
// task8(91)
const task9 = (a) => {
    console.log(Math.floor(a / 10) % 10)
}
// task9 (10)
// task9 (65)
// task9 (7898)
const task10 = (a) => {
    console.log(Math.floor(a / 100) % 10)
}
// task10(100)
// task10(654)
// task10(7986)

const task11 = (a, b) => {
    console.log(Math.floor((b - a) / 2) + 1)
}
// task11(1, 5)
// task11(-3, 4)
// task11(90, 99)
// task11(16, 40)
const task12 = (a) => {
    console.log(a % 2)
}
// task12(0)
// task12(1)
// task12(5)
// task12(10)
const task13 = (a) => {
    console.log(a % 2 + 1)
}
// task13(0)
// task13(1)
// task13(5)
// task13(10)
const task14 = (a) => {
    console.log(1 - a % 2)
}
// task14(0)
// task14(1)
// task14(5)
// task14(10)
const task15 = (a) => {
    console.log(2 - a % 2)
}
// task15(0)
// task15(1)
// task15(5)
// task15(10)
const task16 = (n, x) => {
    // console.log(n - (n - 1) % x)
    console.log(x % n + 1)
}
// task16(5, 3)
// task16(5, 4)
// task16(10, 10)
// task16(10, 8)
const task17 = (n, x) => {
    // console.log(n - (n - x + 1) % n)
    console.log((x - 2 + n) % n + 1)
}
// task17(5, 3)
// task17(5, 1)
// task17(10, 10)
const task18 = (n, x, m) => {
    // console.log(x - (n + m) % (n - x + 1))
    console.log((x - 1 + m) % n + 1)
}
// task18(5, 3, 10)
// task18(5, 5, 5)
// task18(10, 5, 17)
const task19 = (n, x, m) => {
    // console.log(n - (n + m - 1) % (n - x + 1))
    // console.log((x - 1 - m + n * m) % n + 1)
    console.log((x - 1 - m % n + n) % n + 1)
}
// task19(5, 3, 10)
// task19(5, 5, 5)
// task19(10, 5, 17)
// task19(10, 6, 15)
const task20 = (h, m) => {
    console.log(Math.floor((h * 60 - m) / 60), Math.floor(h * 60 - m) % 60)
}
// task20(5, 1)
// task20(7, 333)
// task20(1, 59)
const task21 = (n, x, y) => {
    // console.log(Math.floor(((x * y) / y) / n) + 1, Math.floor(((x * y) / x) / n) + 1)
    console.log(Math.floor(x / n) + 1, Math.floor(y / n) + 1)
}
// task21(10, 5, 5)
// task21(10, 56, 30)
// task21(20, 99, 101)
const task22 = (n, k) => {
    console.log(Math.ceil(k / n), (k - 1) % n + 1)
}
// task22(5, 11)
// task22(8, 19)
// task22(10, 50)
// task22(6, 20)
const task23 = (bw, bh, pw, ph) => {
    console.log(Math.floor(bw / pw) * Math.floor(bh / ph))
}
// task23(500, 500, 300, 300)
// task23(500, 500, 200, 200)
// task23(1200, 700, 400, 350)
// task23(1000, 500, 250, 200)

const task24 = (h, m, n) => {
    console.log(Math.floor((h * 60 + m + n) / 60) % 24, (h * 60 + m + n) % 60)
}
// task24(10, 30, 40)
// task24(23, 45, 15)
// task24(22, 15, 310)
const task25 = (y, m, n) => {
    // console.log(Math.ceil((y * 12 + m + n - 12) / 12), (m + n - 1) % 12 + 1)
    console.log(y + Math.floor((m + n) / 12), (m + n - 1) % 12 + 1)
}
// task25(2020, 11, 2)
// task25(2008, 9, 144)
// task25(2018, 11, 1)
// task25(2012, 6, 14)
