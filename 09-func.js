// 1
const mul2 = (a) => {
    return a * 2
}
// console.log(mul2(1))
// console.log(mul2(3))

const task2 = (a) => {
    console.log(mul2(mul2(a)), mul2(mul2(a)) + mul2(a))
}
// task2(2)
// task2(-1)
// task2(5)

// 3
const sumPair = (a, b) => {
    return a + b
}
// console.log(sumPair(1, 2))
// console.log(sumPair(5, -3))
const task4 = (a, b) => {
    console.log(sumPair(a, b) + sumPair(a, b), sumPair(a, b *= -1))
}
// task4(5, 3)
// task4(10, 20)

// 5
const isEven = (a) => {
    if (a % 2 === 0) {
        return true
    }
    else {
        return false
    }
}
// console.log(isEven(5))
// console.log(isEven(6))
const task6 = (a, b, c) => {
    if (isEven(a) === true && isEven(b) === true && isEven(c) === true) {
        console.log(true)
    }
    else {
        console.log(false)
    }
    if (isEven(a) === false || isEven(b) === false || isEven(c) === false) {
        console.log(true)
    }
    else {
        console.log(false)
    }
    if (isEven(a) === isEven(b) && isEven(b) === isEven(c)) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}
// task6(5, 3, 7)
// task6(4, 2, 6)
// task6(5, 1, 2)

// 7
const endsWith47 = (a) => {
    if (a % 10 === 4 || a % 10 === 7) {
        return true
    }
    else {
        return false
    }
}
// console.log(endsWith47(7))
// console.log(endsWith47(14))
// console.log(endsWith47(21))
// console.log(endsWith47(70))
// console.log(endsWith47(27))
// console.log(endsWith47(304))
const task8 = (a, b, c) => {
    let sum = 0
    if (endsWith47(a) === true) {
        sum += 1
    }
    if (endsWith47(b) === true) {
        sum += 1
    }
    if (endsWith47(c) === true) {
        sum += 1
    }
    console.log(sum)
    if ((endsWith47(a) || endsWith47(b)) === true && endsWith47(c) === false) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}
// task8(5, 3, 7)
// task8(14, 17, 5)
// task8(4, 804, 77)

// 9
const abs = (a) => {
    return Math.abs(a)
}
// console.log(abs(10))
// console.log(abs(-14))
// console.log(abs(-0))
// console.log(abs(0))

// 10
const sign = (a) => {
    let b = 0
    if (a > 0) {
        b = 1
    }
    if (a < 0) {
        b = -1
    }
    return b
}
// console.log(sign(10))
// console.log(sign(-14))
// console.log(sign(-0))
// console.log(sign(0))

// 11
const arraysEqual = (a, b) => {
    let c = false
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i] && a.length === b.length) {
            c = true
        }
        else {
            c = false
            break
        }
    }
    return c
}
// console.log(arraysEqual([1, 2, 3], [1, 2, 3]))
// console.log(arraysEqual([3, 2, 1], [1, 2, 3]))
// console.log(arraysEqual([1, 2, 3], [1, 2]))
// console.log(arraysEqual([1, 2], [1, 2, 3]))

// 12
const startsWith = (a, b) => {
    // if (a.length !== b.length) {
    //     return false
    // }
    for (let i = 0; i < b.length; i++) {
        if (b[i] !== a[i]) {
            return false
        }
    }
    return true
}
// console.log(startsWith([1, 2, 3], [1, 2, 3]))
// console.log(startsWith([1, 2, 3], [1, 2]))
// console.log(startsWith([1, 2, 3], []))
// console.log(startsWith([1, 2, 3], [2, 3]))
// console.log(startsWith([1, 2, 3], [1, 3]))
// console.log(startsWith([1, 2, 3], [1, 2, 3, 4]))

// 13
const endsWith = (a, b) => {
    let c = true
    for (let i = 0; i < b.length; i++) {
        if (a[a.length - 1 - i] !== b[b.length - 1 - i]) {
            c = false
            break
        }
    }
    return c
}
// console.log(endsWith([1, 2, 3], [1, 2, 3]))
// console.log(endsWith([1, 2, 3], [1, 2]))
// console.log(endsWith([1, 2, 3], []))
// console.log(endsWith([1, 2, 3], [2, 3]))
// console.log(endsWith([1, 2, 3], [1, 3]))
// console.log(endsWith([1, 2, 3], [1, 2, 3, 4]))
const task14 = (a) => {
    console.log(sumPair(...a))
}
// task14([1, 2])
// task14([3, 4])
const task15 = (a) => {
    for (const x of a) {
        console.log(sumPair(...x))
    }
}
// task15([[1, 2]])
// task15([[3, 4], [5, 6]])
// task15([[7, 6], [5, 4], [3, 2]])

//16
const sum = (...args) => {
    let sum = 0
    for (const x of args) {
        sum += x
    }
    return sum
}
// console.log(sum())
// console.log(sum(1))
// console.log(sum(1, 2))
// console.log(sum(2, 1, 3))
const task17 = (a) => {
    console.log(sum(...a))
}
// task17([4, 2, 5])
// task17([7, 2, 3])
// task17([-1])

// 18
const max = (a, ...other) => {
    for (const x of other) {
        if (x > a) {
            a = x
        }
    }
    return a
}
// console.log(max(1))
// console.log(max(1, 2))
// console.log(max(2, 1))
// console.log(max(2, 1, 3))
// console.log(max(2, 3, 1))
// console.log(max(-2, -3, -1))
const task19 = (a) => {
    console.log(max(...a))
}
// task19([4, 2, 5])
// task19([7, 2, 3])
// task19([-1])

const task20 = (f, args) => {
    console.log(f(...args))
}
// task20(mul2, [7])
// task20(sumPair, [4, 3])
// task20(isEven, [3])
// task20(endsWith47, [74])
// task20(abs, [-22])
// task20(sign, [-22])
// task20(startsWith, [[1, 2, 3], [1, 2]])
// task20(endsWith, [[1, 2, 3], [1, 2]])
// task20(sum, [1, 2, 3])
// task20(max, [3, 2, 1])
const task21 = (f, ...args) => {
    console.log(f(...args))
}
// task21(mul2, 7)
// task21(sumPair, 4, 3)
// task21(isEven, 3)
// task21(endsWith47, 74)
// task21(abs, -22)
// task21(sign, -22)
// task21(startsWith, [1, 2, 3], [1, 2])
// task21(endsWith, [1, 2, 3], [1, 2])
// task21(sum, 1, 2, 3)
// task21(max, 3, 2, 1)

//22
const forEach = (a, f) => {
    for (const x of a) {
        f(x)
    }
}
// forEach([4, 2, 1], (n) => {
//     console.log(n * 2)
// })
// console.log('---')
// let s = 0
// forEach([4, 2, 1], (n) => {
//     s += n
// })
// console.log(s)
// console.log('---')
// forEach([10, 20], console.log)
const task23 = (a) => {
    let s = 0
    forEach(a, (n) => {
        if (endsWith47(n) === true) {
            s += 1
        }
    })
    console.log(s)
}
// task23([4, 2, 5])
// task23([7, 14, 27])
// task23([17, 71, 41, 14])
const task24 = (a) => {
    let s = 0
    a.forEach(function(item) {
        if (endsWith47(item) === true) {
            s += 1
        }
    })
    console.log(s)
}
// task24([4, 2, 5])
// task24([7, 14, 27])
// task24([17, 71, 41, 14])

// 25

const find = (a, f) => {
    let n
    for (const x of a) {
        if (f(x) === true) {
            n = x
            break
        }
    }
    return n
}
// console.log(find([3, 5, 6, 7], isEven))
// console.log(find([22, 34, 37, 14], endsWith47))
// console.log(find([1, 2, 3], (x) => x < 0))
const task26 = (a) => {
    console.log(find(a, (n) => {
        let b = false
        if (n % 3 === 0) {
            b = true
        }
        return b
    }))
    console.log(find(a, (n) => {
        let b = false
        if (n > 10) {
            b = true
        }
        return b
    }))
}
// task26([4, 2, 5])
// task26([2, 9, 27])
// task26([17, 5, 6, 3])
const task27 = (a) => {
    const c = a.find(item => item % 3 === 0)
    const b = a.find(item => item > 10)
    console.log(c)
    console.log(b)
}
// task27([4, 2, 5])
// task27([2, 9, 27])
// task27([17, 5, 6, 3])

// 28
const findIndex = (a, f) => {
    let c = -1
    for (const x of a) {
        if (f(x) === true) {
            c = a.indexOf(x)
            break
        }
    }
    return c
}
// console.log(findIndex([3, 5, 6, 7], isEven))
// console.log(findIndex([22, 34, 37, 14], endsWith47))
// console.log(findIndex([1, 2, 3], (x) => x < 0))
const task29 = (a) => {
    console.log(findIndex(a, (n) => {
        let c = false
        if (n % 3 === 0) {
            c = true
        }
        return c
    }))
    console.log(findIndex(a, (n) => {
        let c = false
        if (n > 10) {
            c = true
        }
        return c
    }))
}
// task29([4, 2, 5])
// task29([2, 9, 27])
// task29([17, 5, 6, 3])

// 31
const map = (a, f) => {
    const c = []
    for (const x of a) {
        c.push(f(x))
    }
    return c
}
// console.log(map([4, 2, 1], mul2))
// console.log(map([4, 2, 9], isEven))
// console.log(map([4, 2, 9], (x) => x % 2))
const task32 = (a) => {
    let c = 0
    console.log(map(a, abs))
    console.log(map(a, (n) => {
        c += n
        return c
    }))
}
// task32([1, 2, -3])
// task32([-1, 2, -3])
// task32([1, -2, 3, -4])
const task33 = (a) => {
    let q = 0
    const c = a.map(abs)
    const b = a.map(function(n) {
        q += n
        return q
    })
    console.log(c)
    console.log(b)
}
// task33([1, 2, -3])
// task33([-1, 2, -3])
// task33([1, -2, 3, -4])

// 34
const count = (a, f) => {
    let sum = 0
    for (const x of a) {
        if (f(x) === true) {
            sum += 1
        }
    }
    return sum
}
// console.log(count([10], () => true))
// console.log(count([4, 2, 1], isEven))
// console.log(count([4, 2, 9, 74], endsWith47))
// console.log(count([-1, 2, -3, 5, 1], (x) => x > 0))
const task35 = (a) => {
    console.log(count(a, (n) => {
        let c = false
        if (n % 2 === 0) {
            c = true
        }
        return c
    }))
    console.log(count(a, (n) => {
        let c = false
        if (n % 3 === 0 || n % 2 === 0) {
            c = true
        }
        return c
    }))
}
// task35([2, 4, 3, 5])
// task35([6, 8, 9, 10, 11, 12])
// task35([3, 9, 27, 81])

// 36
const filter = (a, f) => {
    const c = []
    for (const x of a) {
        if (f(x) === true) {
            c.push(x)
        }
    }
    return c
}
// console.log(filter([4, 2, 1], isEven))
// console.log(filter([4, 2, 9, 74], endsWith47))
// console.log(filter([-1, 2, -3, 5, 1], (x) => x > 0))
const task37 = (a) => {
    const c = []
    console.log(filter(a, (n) => {
        let c = false
        if (n % 2 === 1) {
            c = true
        }
        return c
    }),
    filter(a, (n) => {
        c.push(n)
        let g
        for (let i = 0; i < c.length; i++) {
            if (i % 2 === 1) {
                g = true
            }
            else {
                g = false
            }
        }
        return g
    }))
}
// task37([2, 4, 3, 5])
// task37([1, 2, 3, 3, 2, 1])
// task37([2, 4, 8, 16, 32])