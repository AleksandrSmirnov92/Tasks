'use srict'

const task1 = (a) => {
    console.log(a * 2)
}
// task1(1)
// task1(15.5)
// task1(-7.25)

const task2 = (a) => {
    console.log(a / 2)
}
// task2(2)
// task2(15.5)
// task2(-6)
const task3 = (a) => {
    console.log(a * 2)
    console.log(a / 2)
}
// task3(2)
// task3(15.5)
// task3(-6)
const task4 = (a, b) => {
    console.log(a + b, a - b)
}
// task4(5, 3)
// task4(15.5, 0.5)
// task4(7, 7.5)
const task5 = (a, b) => {
    console.log(a ** 2, b ** 2)
    console.log((a + b) ** 2)
}
// task5(1, 1)
// task5(5, 3.5)
// task5(-2, 2.5)
const task6 = (k1, p1, k2, p2) => {
    console.log(k1 * p1 + k2 * p2)
}
// task6(1, 10, 1, 20)
// task6(5, 100, 10, 4.5)
// task6(2, 1.5, 5, 1.5)
const task7 = (a, b) => {
    console.log(b - a + 1)
}
// task7(-1, 1)
// task7(0, 3)
// task7(1, 10)
const task8 = (a, b) => {
    console.log(b - a - 1)
}
// task8(-1, 1)
// task8(0, 3)
// task8(1, 10)
// a + 0 * d, a + 1 * d, a + 2 * d, a + 3 * d...
const task9 = (a, d, n) => {
    console.log(a + (n - 1) * d)
}
// task9(100, 10, 3)
// task9(1, 1, 5)
// task9(-100, 50, 6)
const task10 = (a, d, n) => {
    console.log((a + a + (n - 1) * d) / 2 * n)
}
// task10(0, 5, 3)
// task10(10, 10, 4)
// task10(-100, 50, 5)
const task11 = (a) => {
    console.log(1 - a)
}
// task11(0)
// task11(1)
const task12 = (a) => {
    console.log(3 - a)
}
// task12(1)
// task12(2)
const task13 = (a) => {
    console.log(11 - a)
}
// task13(4)
// task13(7)
const task14 = (a) => {
    console.log(4 - a)
}
// task14(-3)
// task14(7)
const task15 = (a, b, c) => {
    console.log(a + b - c)
}
// task15(1, 3, 3)
// task15(10, 20, 10)
// task15(-4.5, -5.5, -5.5)
const task16 = (a) => {
    console.log(4 - a)
}
// task16(1)
// task16(2)
// task16(3)
const task17 = (a) => {
    console.log(8 - a)
}
// task17(2)
// task17(4)
// task17(6)
const task18 = (a) => {
    console.log(12 - 3 * a)
}
// task18(1)
// task18(2)
// task18(3)
const task19 = (a) => {
    console.log(40 - a * 10)
}
// task19(1)
// task19(2)
// task19(3)
const task20 = (n, m, p) => {
    // console.log((((m - n) - ((m - n) - (p - n))) * 100) / (m - n))
    console.log((p - n) * 100 / (m - n))
}
// task20(100, 200, 150)
// task20(1000, 5000, 1450)
// task20(1.5, 6.5, 2.5)
const task21 = (d, n) => {
    console.log(d / (n - 1))
}
// task21(1, 3)
// task21(1.5, 6)
// task21(5, 10)
const task22 = (m, w, h) => {
    console.log(w + m * 2, h + m * 2)
}
// task22(5, 100, 100)
// task22(40, 500, 300)
// task22(50, 1000, 200)
const task23 = (a, b) => {
    console.log(a ** 0.5, b ** 0.5)
    console.log((a + b) ** 0.5)
}
// task23(9, 16)
// task23(0, 4)
// task23(8, 2.25)
const task24 = (w, h, x, y) => {
    console.log((w + x) * (h + y) / (w * h))
}
// task24(1280, 720, 640, 360)
// task24(640, 480, 640, 240)
// task24(960, 540, 960, 540)
const task25 = (w, h, p) => {
    console.log((w * p / h) ** 0.5)
}
// task25(4, 3, 120000)
// task25(16, 9, 14400)
// task25(20, 9, 288000)
