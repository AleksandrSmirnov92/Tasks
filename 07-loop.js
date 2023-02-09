'use strict'
// for, while, do-while, for-of, for-in
const task1 = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
}
// task1(0)
// task1(1)
// task1(3)
const task2 = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }
}
// task2(0)
// task2(1)
// task2(3)
const task3 = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(1)
    }
}
// task3(0)
// task3(1)
// task3(3)
const task4 = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(n)
    }
}
// task4(0)
// task4(1)
// task4(3)
const task5 = (n) => {
//     for (let i = 0; i < n; i++) {
//         console.log(n - i)
//     }
    for (let i = n; i >= 1; i--) {
        console.log(i)
    }
}
// task5(0)
// task5(1)
// task5(3)
const task6 = (n) => {
    for (let i = n - 1; i >= 0; i--) {
        console.log(i)
    }
}
// task6(0)
// task6(1)
// task6(3)
const task7 = (n) => {
    for (let i = 1; i <= n; i += 2) {
        console.log(i)
    }
}
// task7(0)
// task7(1)
// task7(3)
// task7(6)
const task8 = (n) => {
    for (let i = 2; i <= n; i += 2) {
        console.log(i)
    }
}
// task8(0)
// task8(1)
// task8(3)
// task8(6)
const task9 = (a, b) => {
    for (let i = a; i <= b; i++) {
        console.log(i)
    }
}
// task9(0, 1)
// task9(5, 7)
// task9(10, 10)
const task10 = (a, b) => {
    for (let i = b - 1; i > a; i--) {
        console.log(i)
    }
}
// task10(0, 1)
// task10(5, 7)
// task10(10, 15)
const task11 = (n) => {
    for (let i = n - 1; i >= 0; i -= 2) {
        console.log(i)
    }
}
// task11(1)
// task11(3)
// task11(4)
const task12 = (n) => {
    for (let i = n; i > 0; i -= 2) {
        console.log(i)
    }
}
// task12(1)
// task12(3)
// task12(4)
const task13 = (p, n) => {
    for (let i = 1; i <= n; i++) {
        console.log(p * i)
    }
}
// task13(300, 3)
// task13(199.75, 4)
const task14 = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(i % 2)
    }
}
// task14(2)
// task14(5)
const task15 = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(i % 3)
    }
}
// task15(2)
// task15(5)
const task16 = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(i % 2 + 1)
    }
}
// task16(2)
// task16(5)
const task17 = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(i % 3 + 1)
    }
}
// task17(2)
// task17(5)
const task18 = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(1 - i % 2)
    }
}
// task18(2)
// task18(5)
const task19 = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(2 - i % 3)
    }
}
// task19(2)
// task19(5)
const task20 = (n) => {
    for (let i = 0; i < n; i++) {
        // console.log((i % 2) + (i % 4))
        console.log(i % 3 * 2)
    }
}
// task20(2)
// task20(5)
const task21 = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(i % 3 * 2 + 2)
    }
}
// task21(2)
// task21(5)
const task22 = (n) => {
    // for (let i = 0; i < n; i++) {
    //     console.log(1 - i % 2 * 2)
    // }
    let x = 1
    for (let i = 0; i < n; i++) {
        console.log(x)
        x *= -1
    }
}
// task22(2)
// task22(5)
const task23 = (n) => {
    let x = 1
    for (let i = 0; i < n; i++) {
        console.log(x * (i % 3 + 1))
        x *= -1
    }
}
// task23(2)
// task23(6)
const task24 = (n) => {
    // for (let i = 0; i < n; i++) {
    //     console.log(i % 2 * 4 + 3)
    // }
    let x = 3
    for (let i = 0; i < n; i++) {
        console.log(x)
        x = 10 - x
    }
}
// task24(2)
// task24(5)
const task25 = (n) => {
    for (let i = 2; i <= n; i++) {
        if (i % 2 === 0 || i % 3 === 0) {
            console.log(i)
        }
    }
}
// task25(3)
// task25(6)
const task26 = (n) => {
    for (let i = n; i > 1; i--) {
        if (i % 2 === 0 || i % 3 === 0) {
            console.log(i)
        }
    }
}
// task26(5)
// task26(6)
const task27 = (a, b) => {
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            console.log(i, 2, 3)
        }
        else if (i % 2 === 0) {
            console.log(i, 2)
        }
        else if (i % 3 === 0) {
            console.log(i, 3)
        }
        else {
            console.log(i)
        }
    }
}
// task27(1, 7)
// task27(8, 15)
const task28 = (n) => {
    let x = 0
    for (let i = 1; i <= n; i++) {
        x += i
        console.log(x)
    }
}
// task28(3)
// task28(5)
const task29 = (n) => {
    let x = 1
    for (let i = 1; i <= n; i++) {
        x *= i
        console.log(x)
    }
}
// task29(3)
// task29(5)
const task30 = (n) => {
    const k = Math.floor(n / 2)
    for (let i = 1; i <= k; i++) {
        console.log(i, n - i)
    }
}
// task30(8)
// task30(7)
const task31 = (a, b) => {
    let k = 0
    while (a <= b) {
        a *= 3
        b *= 2
        k++
    }
    console.log(k)
}
// task31(1, 1)
// task31(2, 3)
// task31(3, 15)
const task32 = (a, b) => {
    // ДОДЕЛАТЬ САМОСТОЯТЕЛЬНО
}
// task32(1, 1)
// task32(2, 3)
// task32(3, 5)

const seq = (...args) => {
    let i = 0
    return {
        hasNext() {
            return i < args.length
        },
        next() {
            if (i === args.length) {
                throw new Error('Считано больше элементов, чем есть в последовательности')
            }
            return args[i++]
        }
    }
}

const task33 = (a) => {
    while (a.hasNext()) {
        console.log(a.next())
    }
}
// task33(seq(4, 1, 2))
// task33(seq(777))
// task33(seq(-1, -2, -3))
const task34 = (a) => {
    let b = 0
    while (a.hasNext()) {
        b += a.next()
    }
    console.log(b)
}
// task34(seq(4, -1, 2))
// task34(seq(777))
// task34(seq(-1, -2, -3))
const task35 = (a) => {
    let b = 0
    let c = 0
    while (a.hasNext()) {
        b += a.next()
        c++
    }
    console.log(b / c)
}
// task35(seq(4, 2, 6))
// task35(seq(4, 3, -1))
// task35(seq(7, 1, 1, 1))
const task36 = (a) => {
    let m = a.next()
    while (a.hasNext()) {
        const x = a.next()
        if (x > m) {
            m = x
        }
    }
    console.log(m)
}
// task36(seq(4, 2, 6))
// task36(seq(-4, -3))
// task36(seq(7, 1, 1))
const task37 = (a) => {
    let m = a.next()
    let pos = 1
    let min = 1
    while (a.hasNext()) {
        pos++
        const x = a.next()
        if (x < m) {
            m = x
            min = pos
        }
    }
    console.log(min)
}
// task37(seq(4, 5, 1, 6, 3))
// task37(seq(-3, -4))
// task37(seq(3, 7, 3))

const task38 = (a) => {
    let m = a.next()
    let pos = 1
    let max = 1
    while (a.hasNext()) {
        pos++
        const x = a.next()
        if (x >= m) {
            m = x
            max = pos
        }
    }
    console.log(max)
}
// task38(seq(4, 5, 1, 6))
// task38(seq(-3, -4))
// task38(seq(3, 7, 3, 7))
const task39 = (a) => {
    while (a.hasNext()) {
        const x = a.next()
        if (x === 0) {
            break
        }
        console.log(x)
    }
}
// task39(seq(1, 2, 0, 3, 0))
// task39(seq(3, 2, 1, 0))
const task40 = (a, s) => {
    let m = 0
    while (a.hasNext()) {
        const x = a.next()
        m += x
        if (m < s) {
            console.log(x)
        }
        else {
            break
        }
    }
}
// task40(seq(1, 2, 0, 3, 0, -2, -4), 5)
// task40(seq(3, -2, 2, 1), 4)
const task41 = (a) => {
    let m = a.next()
    while (a.hasNext()) {
        const x = a.next()
        console.log(m)
        if (m === x) {
            break
        }
        m = x
    }
}
// task41(seq(1, 2, 0, 0, 3))
// task41(seq(3, 2, 1, 2, 2, 3))
const task42 = (a) => { // НЕ СДЕЛАНА
    let m = a.next()
    while (a.hasNext()) {
        const x = a.next()
        if (m !== x) {
            console.log(m)
            m = x
        }
        if (m === 0 || x === 0) {
            continue
        }
    }
    console.log(m)
}
// task42(seq(1, 2, 0, 0, 3, 3))
// task42(seq(3, 0, 2, 0, 1, 0, 1))
const task43 = (a) => {
    const m = a.next()
    let b = a.next()
    while (a.hasNext()) {
        const x = a.next()
        if (x > m) {
            continue
        }
        console.log(b)
        if (x + b >= m) {
            break
        }
        b = x
    }
}
// task43(seq(5, 2, 2, 1, 8, 3, 4, 0))
// task43(seq(10, 2, 12, 6, 17, 8, 9))
const task44 = (a) => {
    let b = false
    while (a.hasNext()) {
        const x = a.next()
        if (x < 0) {
            b = true
            break
        }
    }
    console.log(b)
}
// task44(seq(4, 5, 1, 6))
// task44(seq(-3, -4))
// task44(seq(3, 7, -3, 7))

const task45 = (a) => {
    let b = a.next()
    let c = true
    while (a.hasNext()) {
        const x = a.next()
        if (x <= b) {
            c = false
            break
        }
        b = x
    }
    console.log(c)
}
// task45(seq(1, 4, 5, 10))
// task45(seq(3, 4, 5, 4))
// task45(seq(3, 3, 4))
// task45(seq(-3, -2, -1))
const task46 = (a) => {
    let b = a.next()
    let c = true
    while (a.hasNext()) {
        const x = a.next()
        if (x > b) {
            c = false
            break
        }
        b = x
    }
    console.log(c)
}
// task46(seq(10, 5, 4, 1))
// task46(seq(4, 3, 2, 3))
// task46(seq(4, 3, 3))
// task46(seq(-3, -2, -1))
const task47 = (a) => {
    let b = a.next()
    let c = 0
    while (a.hasNext()) {
        const x = a.next()
        if (x > b) {
            b = x
            c++
        }
    }
    console.log(c)
}
// task47(seq(4, 7, 9))
// task47(seq(-3, -2, -4))
// task47(seq(10))
const task48 = (a) => {
    // let c
    // let b = a.next()
    // while (a.hasNext()) {
    //     if (b > 0) {
    //         c = true
    //     }
    //     else {
    //         c = false
    //     }
    //     const x = a.next()
    //     if (x > 0) {
    //         c = true
    //         b = x
    //     }
    //     else {
    //         b = x
    //     }
    // }
    // console.log(c)
    let even = false
    let res = true
    while (a.hasNext()) {
        const x = a.next()
        if (even && x <= 0) {
            res = false
            break
        }
        even = !even
    }
    console.log(res)
}
// task48(seq(-4, 7, -9))
// task48(seq(-3, 2, -4, -2))
// task48(seq(10, 10))
// task48(seq(1, -2, 3, 4, 5, 6))
const task49 = (a) => {
    let b = 0
    let s = 0
    while (a.hasNext()) {
        const c = a.next()
        b += c
        s += b
    }
    console.log(s)
}
// task49(seq(2, 2, 3))
// task49(seq(3, 2, 1))
// task49(seq(1, 1, 1, 1))
const task50 = (a) => {
    let even = false
    a.next()
    let b = a.next()
    let q = true
    while (a.hasNext()) {
        const c = a.next()
        if (even) {
            if (c <= b) {
                q = false
                break
            }
            b = c
        }
        even = !even
    }
    console.log(q)
}
// task50(seq(-4, 7, -9))
// task50(seq(-3, 2, -4, -2))
// task50(seq(-1, 3, -2, 7, -3))
// task50(seq(-1, 3, -2, 7, -3, 5))
const task51 = (a) => {
    let even = false
    let b = a.next()
    let q = true
    while (a.hasNext()) {
        const c = a.next()
        if (even) {
            if (c > b) {
                q = false
                break
            }
            b = c
        }
        even = !even
    }
    console.log(q)
}
// task51(seq(1, 1, 1))
// task51(seq(5, 2, 2))
// task51(seq(-1, 3, 0, 7, -3))
// task51(seq(1, 3, 0, 7, 2))
const task52 = (a) => {
    let b = 0
    let q = 1
    while (a.hasNext()) {
        const c = a.next()
        b += c * q
        q *= -1
    }
    console.log(b)
}
// task52(seq(1, -1, 1))
// task52(seq(5, 2, 2))
// task52(seq(-1, 3, 0, 7, -3))
const task53 = (a) => {
    let b = 0
    let q = 0
    while (a.hasNext()) {
        const c = a.next()
        if (c <= 0) {
            b++
        }
        else {
            q++
        }
    }
    console.log(q, b)
}
// task53(seq(1, -1, 1))
// task53(seq(5, 2, 2))
// task53(seq(-1, 3, 0, 7, -3))
const task54 = (a) => {
    let b = 0
    let q = 0
    while (a.hasNext()) {
        const c = a.next()
        q++
        if (c % 2 === 0) {
            b = q
            break
        }
    }
    console.log(b)
}
// task54(seq(5, 2, 4))
// task54(seq(2, 6, 4, 8))
// task54(seq(7, 3, 1))
const task55 = (a) => {
    let b = 0
    let q = 0
    while (a.hasNext()) {
        const c = a.next()
        q++
        if (c % 2 === 0) {
            b += q
        }
    }
    console.log(b)
}
// task55(seq(1, 2, 4))
// task55(seq(2, 6, 4, 8))
// task55(seq(7, 3, 1))
const task56 = (a) => {
    let b = 0
    let q = 0
    let w = 0
    while (a.hasNext()) {
        const c = a.next()
        q++
        if (c % 2 !== 0) {
            b += q
            w += c
        }
    }
    console.log(b, w)
}
// task56(seq(1, 2, 4))
// task56(seq(7, 3, 1))
// task56(seq(2, 6, 4, 8))
const task57 = (a) => {
    let b = a.next()
    let q = a.next()
    if (b < q) {
        [b, q] = [q, b]
    }
    while (a.hasNext()) {
        const c = a.next()
        if (c > b) {
            q = b
            b = c
        }
        else if (c > q) {
            q = c
        }
    }
    console.log(b, q)
}
// task57(seq(3, 1, 5, 2))
// task57(seq(-1, -2, -3, -4))
// task57(seq(4, 5, 3, 5))
// task57(seq(6, 4, 5))
// task57(seq(4, 5))
const task58 = (a) => {
    let e = a.next()
    let q = a.next()
    e += q
    while (a.hasNext()) {
        const c = a.next()
        const u = q + c
        if (e < u) {
            e = u
        }
        q = c
    }
    console.log(e)
}
// task58(seq(3, 2, 5, 1))
// task58(seq(-1, -2, -3, -4))
// task58(seq(3, 5, 4, 6))
// task58(seq(10, 9, 8, 7, 20))
const task59 = (a) => {
    let e = a.next()
    let q = 1
    while (a.hasNext()) {
        const c = a.next()
        if (e === c) {
            q += 1
        }
        else {
            e = c
            console.log(q)
            q = 1
        }
    }
    console.log(q)
}
// task59(seq(0, 1, 0, 1))
// task59(seq(1, 1, 1, 0))
// task59(seq(0, 0, 1, 1))
const task60 = (a) => {
    let e = a.next()
    let q = 1
    while (a.hasNext()) {
        const c = a.next()
        if (e !== c) {
            q += 1
            e = c
        }
    }
    console.log(q)
}

// const findMax = (a) => {
//     let q = 1
//     while (a.hasNext()) {
//         const c = a.next()
//         if (c < q) {
//             q = c
//         }
//     }
//     console.log(q)
// }
// findMax(seq(3, 2, 4, 2)) // 4

// task60(seq(0, 1, 0, 1))
// task60(seq(1, 1, 1, 0))
// task60(seq(0, 0, 0, 0))
// task60(seq(0, 0, 1, 1, 0, 0, 1, 1, 0, 0))
const task61 = (a) => {
    let e = a.next()
    let q = 1
    let w = 1
    while (a.hasNext()) {
        const c = a.next()
        if (e === c) {
            q += 1
        }
        else {
            e = c
            if (q > w) {
                w = q
            }
            q = 1
        }
    }
    if (q > w) {
        w = q
    }
    console.log(w)
}
// task61(seq(0, 1, 0, 1))
// task61(seq(1, 1, 1, 0))
// task61(seq(0, 0, 0, 0))
// task61(seq(0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1))
const task62 = (a) => {
    let e = a.next()
    let q = 1
    let w = 0
    while (a.hasNext()) {
        const c = a.next()
        q++
        if (e === c) {
            e += c
        }
        else {
            w = q
            break
        }
    }
    console.log(w)
}
// task62(seq(3, 3, 6, 12))
// task62(seq(0, 0, 0, 0))
// task62(seq(1, 1, 1, 1))
const task63 = (a) => {
    let e = a.next()
    let q = 2
    let s = 0
    let w = a.next()
    while (a.hasNext()) {
        const c = a.next()
        q++
        if (e + w === c) {
            e = w
            w = c
        }
        else {
            s = q
            break
        }
    }
    console.log(s)
}
// task63(seq(1, 1, 2, 3, 5))
// task63(seq(5, 6, 11, 17, 18))
// task63(seq(1, 1, 1, 1))
const task64 = (a) => {
    let q = 1
    let s = 0
    while (a.hasNext()) {
        s += a.next() * q
        q *= -1
    }
    console.log(s === 0)
}
// task64(seq(1, 1, 2, 7, 5))
// task64(seq(2, 3, 2, 3, 2))
// task64(seq(1, 1, 1, 1, 1))
const task65 = (a, k) => {
    let y = 1 // k-й элемент
    let w = 0 // количество подходящих чисел
    while (a.hasNext()) {
        const c = a.next()
        if (c < y) {
            break
        }
        w++
        if (w === k) {
            y = c
        }
    }
    console.log(w)
}
// task65(seq(10, 9, 8, 7, 7, 7, 5, 5), 5)
// task65(seq(3, 2, 1, 0, 0), 5)
// task65(seq(0, 0, 0, 0), 2)
const task66 = (a) => {
    let value = a.next()
    let maxLen = 1
    let seriaLen = 1
    let maxPos = 1
    let seriaPos = 1
    let counter = 1
    while (a.hasNext()) {
        const c = a.next()
        counter++
        if (c === value) {
            seriaLen++
        }
        else {
            // заходим, когда закончилась серия
            // про завершённую серию знаем
            // длину и номер начала
            if (seriaLen > maxLen) {
                maxLen = seriaLen
                maxPos = seriaPos
            }
            seriaPos = counter
            seriaLen = 1
            value = c
        }
    }
    if (seriaLen > maxLen) {
        maxPos = seriaPos
    }
    console.log(maxPos)
}
// task66(seq(0, 1, 0, 1))
// task66(seq(0, 1, 1, 1))
// task66(seq(1, 0, 1, 1))
const task67 = (a) => {
    let value = a.next()
    let maxLen = 1
    let seriaLen = 1
    let maxPos = 1
    let seriaPos = 1
    let counter = 1
    while (a.hasNext()) {
        const c = a.next()
        counter++
        if (c === value) {
            seriaLen++
        }
        else {
            // заходим, когда закончилась серия
            // про завершённую серию знаем
            // длину и номер начала
            if (seriaLen > maxLen) {
                maxLen = seriaLen
                maxPos = seriaPos
            }
            seriaPos = counter
            seriaLen = 1
            value = c
        }
    }
    if (seriaLen >= maxLen) {
        maxPos = seriaPos
    }
    console.log(maxPos)
}
// 0 0 0 1 1 1 0 0 0 -> 1
// 0 0 0 1 1 1 0 0 0 -> 7
// task67(seq(0, 1, 0, 1))
// task67(seq(0, 1, 1, 1))
// task67(seq(1, 0, 1, 1))
// task67(seq(1, 1, 1, 0))
const task68 = (p, n) => {
    for (let i = 1; i <= n; i++) {
        console.log(p * i / 10)
    }
}
// task68(300, 3)
// task68(199.75, 4)
const task69 = (p, n) => {
    // for (let i = 1; i <= n; i++) {
    //     // console.log(Math.floor((p * w) * 100) / 100)
    //     // console.log((i * 2 + 10) * p / 10)
    //     console.log(i * p / 5 + p)
    // }
    n = 10 + n * 2
    for (let i = 12; i <= n; i += 2) {
        console.log(i * p / 10)
    }
}
// task69(100, 3)
// task69(149.5, 4)
const task70 = (n) => {
    // let num1 = 4
    // let num2 = 7
    // for (let i = 1; i <= n; i++) {
    //     if (i % 2 === 1) {
    //         console.log(num1)
    //         num1 += 10
    //     }
    //     else {
    //         console.log(num2)
    //         num2 += 10
    //     }
    // }
    let x = 4
    for (let i = 1; i <= n; i++) {
        console.log(x)
        x += i % 2 !== 0 ? 3 : 7
    }
}
// task70(1)
// task70(2)
// task70(4)
// task70(3)
const task71 = (n) => {
    // let num1 = 4
    // let num2 = 7
    // let sum = 0
    // for (let i = 1; i <= n; i++) {
    //     if (i % 2 === 1) {
    //         sum += num1
    //         num1 += 10
    //     }
    //     else {
    //         sum += num2
    //         num2 += 10
    //     }
    //     console.log(sum)
    // }
    let x = 4
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += x
        x += i % 2 !== 0 ? 3 : 7
        console.log(sum)
    }
}
// task71(1)
// task71(2)
// task71(3)
// task71(4)
