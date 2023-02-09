'use strict'

const A = (n) => {
    const a = Array.isArray(n) ? n : Array(n)
    const proxy = new Proxy(a, {
        get: (_, i) => {
            if (i === Symbol.iterator) {
                return a[i]
            }
            if (~~i === +i) {
                if (i < 0 || i >= a.length) {
                    throw new Error('Выход за границы массива: обращение по индексу ' + i + ' при длине ' + a.length)
                }
            }
            else if (i !== 'length') {
                throw new Error('Обращение к ' + i)
            }
            return a[i]
        },
        set: (_, i, value) => {
            if (~~i !== +i) {
                throw new Error('Невозможно записать значение в поле ' + i)
            }
            else if (i < 0 || i >= a.length) {
                throw new Error('Выход за границы массива: попытка записи по индексу ' + i + ' при длине ' + a.length)
            }
            a[i] = value
            return true
        }
    })
    return proxy
}

const task1 = (n) => {
    const a = A(n)
    for (let i = 0; i < n; i++) {
        a[i] = 0
    }
    console.log(a)
}
// task1(0)
// task1(1)
// task1(3)
const task2 = (n) => {
    // const a = Array(n)
    // a.fill(0)
    // console.log(a)
    console.log(Array(n).fill(0))
}
// task2(0)
// task2(1)
// task2(3)
const task3 = (a) => {
    console.log(a[0], a[a.length - 1])
}
// task3(A([1]))
// task3(A([2, 3]))
// task3(A([4, 5, 6, 7]))
const task4 = (n) => {
    const a = A(n)
    for (let i = 0; i < n; i++) {
        a[i] = i
    }
    console.log(a)
}
// task4(0)
// task4(1)
// task4(3)
const task5 = (n) => {
    const a = A(n)
    for (let i = 0; i < n; i++) {
        a[i] = i + 1
    }
    console.log(a)
}
// task5(0)
// task5(1)
// task5(3)
const task6 = (n) => {
    const a = A(n)
    for (let i = 0; i < n; i++) {
        a[i] = n
    }
    console.log(a)
}
// task6(0)
// task6(1)
// task6(3)
const task7 = (n) => {
    console.log(Array(n).fill(n))
}
// task7(0)
// task7(1)
// task7(3)
const task8 = (n) => {
    const a = A(n)
    // for (let c = n; c > 0; c--) {
    //     a[n - c] = c
    // }
    for (let i = 0; i < n; i++) {
        a[i] = n - i
    }
    console.log(a)
}
// task8(0)
// task8(1)
// task8(3)
const task9 = (n) => {
    const a = A(n)
    // for (let c = n; c >= 0; c--) {
    //     a[n - c] = c - 1
    // }
    for (let i = 0; i < n; i++) {
        a[i] = n - i - 1
    }
    console.log(a)
}
// task9(0)
// task9(1)
// task9(3)
const task10 = (a) => {
    for (let i = 0; i < a.length; i++) {
        a[i] *= 2
    }
    console.log(a)
}
// task10(A([]))
// task10(A([1]))
// task10(A([-2, 0, 5]))
const task11 = (a) => {
    for (let i = 1; i < a.length; i += 2) {
        a[i] *= 2
    }
    console.log(a)
}
// task11(A([]))
// task11(A([1, 1, 1]))
// task11(A([1, 2, 2, 1]))
const task12 = (a) => {
    for (let i = 0; i < a.length; i += 2) {
        a[i] *= 2
    }
    console.log(a)
}
// task12(A([]))
// task12(A([1, 1, 1]))
// task12(A([1, 2, 2, 1]))
const task13 = (a) => {
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 1) {
            a[i] *= 2
        }
    }
    console.log(a)
}
// task13(A([]))
// task13(A([1, 1, 1]))
// task13(A([1, 2, 3, 3]))
const task14 = (a) => {
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 1) {
            a[i] *= 2
        }
        else {
            a[i] /= 2
        }
    }
    console.log(a)
}
// task14(A([]))
// task14(A([1, 1, 2]))
// task14(A([2, 4, 3, 5]))
const task15 = (a) => {
    for (let i = 0; i < a.length; i++) {
        if (a[i] < 0) {
            a[i] = 0
        }
    }
    console.log(a)
}
// task15(A([]))
// task15(A([-1, 1, 2]))
// task15(A([-1, 2, 3, -4]))
const task16 = (a) => {
    for (let i = 0; i < a.length; i++) {
        if (a[i] < 0) {
            a[i] *= -1
        }
    }
    console.log(a)
}
// task16(A([]))
// task16(A([-1, 1, 2]))
// task16(A([-1, 2, 3, -4]))
const task17 = (a) => {
    for (let i = 1; i < a.length; i += 2) {
        console.log(a[i])
    }
}
// task17(A([1, 2, 4, 3]))
// task17(A([2, 3, 4]))
// task17(A([1, 2, 3, 4, 5, 6]))
const task18 = (a) => {
    for (const num of a) {
        if (num % 2 === 0) {
            console.log(num)
        }
    }
}
// task18(A([1, 2, 4, 3]))
// task18(A([2, 3, 4]))
// task18(A([1, 2, 3, 4, 5, 6]))
const task19 = (a) => {
    for (const num of a) {
        if (num % 10 === 4 || num % 10 === 7) {
            console.log(num)
        }
    }
}
// task19(A([41, 76, 0]))
// task19(A([2, 3, 4]))
// task19(A([4, 24, 107]))
const task20 = (a) => {
    for (const num of a) {
        if (num % 2 !== 0 && num % 3 !== 0) {
            console.log(num)
        }
    }
}
// task20(A([10, 9, 8]))
// task20(A([2, 3, 4, 5, 6]))
// task20(A([1, 5, 7, 9]))
const task21 = (a, value) => {
    let c = false
    for (const x of a) {
        if (x === value) {
            c = true
            break
        }
    }
    console.log(c)
}
// task21(A([]), 1)
// task21(A([10, 9, 9]), 9)
// task21(A([2, 3, 4, 5, 6]), 7)
const task22 = (a, value) => {
    console.log(a.includes(value))
}
// task22([], 1)
// task22([10, 9, 9], 9)
// task22([2, 3, 4, 5, 6], 7)
const task23 = (a, value) => {
    let c = -1
    for (let i = 0; i < a.length; i++) {
        if (a[i] === value) {
            c = i
            break
        }
    }
    console.log(c)
}
// task23(A([]), 1)
// task23(A([10, 9, 9]), 9)
// task23(A([7, 3, 4, 5, 6]), 7)
const task24 = (a, value) => {
    console.log(a.indexOf(value))
}
// task24([], 1)
// task24([10, 9, 9], 9)
// task24([7, 3, 4, 5, 6], 7)
const task25 = (a, value) => {
    let c = -1
    for (let i = a.length - 1; i >= 0; i--) {
        if (a[i] === value) {
            c = i
            break
        }
    }
    console.log(c)
}
// task25(A([]), 1)
// task25(A([10, 9, 9]), 9)
// task25(A([7, 3, 4, 5, 6]), 7)

const task26 = (a, x) => {
    console.log(a.lastIndexOf(x))
}
// task26([], 1)
// task26([10, 9, 9], 9)
// task26([7, 3, 4, 5, 6], 7)
const task27 = (n) => {
    const a = A(n)
    for (let i = 0; i < n; i++) {
        a[i] = i * 2
    }
    console.log(a)
}
// task27(0)
// task27(1)
// task27(3)
const task28 = (n) => {
    const a = A(n)
    for (let i = 0; i < n; i++) {
        a[i] = i * 2 + 1
    }
    console.log(a)
}
// task28(0)
// task28(1)
// task28(3)
const task29 = (n) => {
    const a = A(n)
    for (let i = 0; i < n; i++) {
        a[i] = i * 2 + 2
    }
    console.log(a)
}
// const x = 0
// task29(x)
// task29(1)
// task29(3)

const task30 = (a, b) => {
    a[0] = b[b.length - 1]
    b = a
    console.log(b)
}
// const a = A([5, 6, 7])
// const b = A([5, 6, 7])
// task30(a, b)
// console.log(a, b)
// const c = b
// task30(b, c)
// console.log(b, c)

const task31 = (a) => {
    const b = A(a.length)
    for (let i = 0; i < a.length; i++) {
        b[i] = a[i] * 2
    }
    console.log(b)
}
// task31(A([1]))
// task31(A([1, 2]))
// task31(A([5, 10, 5]))
const task32 = (a) => {
    const b = A(a.length)
    for (let i = 0; i < a.length; i++) {
        // if (i % 2 === 1) {
        //     b[i] = a[i] * 2
        // }
        // else {
        //     b[i] = a[i]
        // }
        b[i] = i % 2 === 1 ? a[i] * 2 : a[i]
    }
    console.log(b)
}
// task32(A([1]))
// task32(A([1, 2, 3]))
// task32(A([1, 1, 1, 1]))
const task33 = (a) => {
    const b = A(a.length)
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 !== 0) {
            b[i] = a[i] * 2
        }
        else {
            b[i] = a[i]
        }
    }
    console.log(b)
}
// task33(A([1]))
// task33(A([1, 3, 2]))
// task33(A([1, 1, 1, 1]))
const task34 = (a, b) => {
    const c = []
    for (let i = 0; i < a.length; i++) {
        c[i] = a[i] + b[i]
    }
    console.log(c)
}
// task34(A([1, 2]), A([2, 3]))
// task34(A([1, 2, 3]), A([3, 2, 1]))
// task34(A([1, 1, 1]), A([3, 2, 1]))
const task35 = (a, b) => {
    const c = []
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            c[i] = a[i]
        }
        else {
            c[i] = b[i]
        }
    }
    console.log(c)
}
// task35(A([1, 2]), A([2, 3]))
// task35(A([1, 2, 3]), A([3, 2, 1]))
// task35(A([1, 1, 1]), A([3, 2, 1]))
const task36 = (a, b) => {
    const c = []
    for (let i = 0; i < a.length; i++) {
        if (a[i] - b[i] > 0) {
            c[i] = a[i] - b[i]
        }
        else {
            c[i] = b[i] - a[i]
        }
    }
    console.log(c)
}
// task36(A([1, 2]), A([2, 3]))
// task36(A([1, 2, 3]), A([3, 2, 1]))
// task36(A([1, 1, 1]), A([3, 2, 1]))
const task37 = (a) => {
    const c = []
    for (let i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            c[i] = true
        }
        else {
            c[i] = false
        }
    }
    console.log(c)
}
// task37(A([1]))
// task37(A([1, -2, 0]))
// task37(A([0, 1, 2]))
const task38 = (x, y) => {
    const a = []
    let sum = 0
    for (let i = x; i <= y; i++) {
        a[sum] = i
        sum++
    }
    console.log(a)
}
// task38(0, 1)
// task38(5, 7)
// task38(-2, 0)
const task39 = (x, y) => {
    const a = []
    let sum = 0
    for (let i = y - 1; i > x; i--) {
        a[sum] = i
        sum++
    }
    console.log(a)
}
// task39(0, 1)
// task39(5, 7)
// task39(-2, 2)
const task40 = (n) => {
    const a = []
    let sum = 0
    let c = 0
    for (let i = 1; i <= n; i++) {
        c = i
        a[sum] = i
        sum++
        a[sum] = c
        sum++
    }
    console.log(a)
}
// task40(1)
// task40(2)
// task40(3)
const task41 = (n) => {
    const a = []
    let sum = 0
    let x = 1
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1) {
            a[sum] = x
        }
        else {
            a[sum] = x + i
            x = x + i
            x += i + 1
        }
        sum++
    }
    console.log(a)
}
// task41(1)
// task41(3)
// task41(5)
const task42 = (a) => {
    let sum
    const num1 = 0
    let num2 = 1
    sum = a[num1] + a[num2]
    for (let num3 = 2; num3 < a.length; num3++) {
        if (sum <= a[num2] + a[num3]) {
            sum = a[num2] + a[num3]
            num2 = num3
        }
    }
    console.log(sum)
}
// task42(A([2, 3]))
// task42(A([2, 1, 3, 0]))
// task42(A([2, 7, 0, 2, 9]))
// task42(A([-2, -7, 0, -2, -9]))
const task43 = (n) => {
    const a = A(n)
    a[0] = a[1] = 1
    for (let i = 2; i < n; i++) {
        a[i] = a[i - 1] + a[i - 2]
    }
    console.log(a)
}
// task43(2)
// task43(5)
// task43(7)
const task44 = (a) => {
    for (let i = 1; i < a.length; i += 2) {
        [a[i - 1], a[i]] = [a[i], a[i - 1]]
    }
    console.log(a)
}
// task44(A([1, 2, 3, 4]))
// task44(A([1, 2, 2, 1, 3]))
// task44(A([1, 5, 7]))
const task45 = (a) => {
    // const b = A(a.length)
    // let sum = 0
    // let c
    // for (let i = 0; i < a.length; i++) {
    //     if (i % 2 === 1) {
    //         b[sum] = a[i]
    //         b[i] = c
    //         sum += 2
    //     }
    //     else {
    //         b[i] = a[i]
    //         c = a[i]
    //     }
    // }
    // console.log(b)
    const b = A(a.length)
    b[b.length - 1] = a[a.length - 1]
    for (let i = 1; i < a.length; i += 2) {
        b[i] = a[i - 1]
        b[i - 1] = a[i]
    }
    console.log(b)
}
// task45(A([1, 2]))
// task45(A([1, 2, 3]))
// task45(A([10, 5, 1, 0]))
const task46 = (a) => {
    const b = A(a.length)
    b[0] = a[0]
    for (let i = 1; i < a.length; i++) {
        b[i] = b[i - 1] + a[i]
    }
    console.log(b)
}
// task46(A([1, 1, 1]))
// task46(A([2, 2, 2]))
// task46(A([10, 5, 1, 0]))
// task46(A([10, 5, 1, 0, 55, 0, 55]))
const task47 = (a) => {
    for (let i = 0, j = a.length - 1; i < j; i++, j--) {
        [a[i], a[j]] = [a[j], a[i]]
    }
    console.log(a)
}
// task47(A([1]))
// task47(A([10, 20, 15]))
// task47(A([5, 3, 7, 4]))
const task48 = (a) => {
    console.log(a.reverse())
}
// task48([1])
// task48([10, 20, 15])
// task48([5, 3, 7, 4])
const task49 = (a) => {
    const b = A(a.length)
    let j = a.length - 1
    for (let i = 0; i < a.length; i++) {
        b[i] = a[j]
        j--
    }
    console.log(b)
}
// task49(A([1]))
// task49(A([1, 0, 2]))
// task49(A([9, 7, 4]))
const task50 = (a) => {
    const c = a.length / 2
    for (let i = 0; i < c; i++) {
        [a[i], a[c + i]] = [a[c + i], a[i]]
    }
    console.log(a, c)
}
// task50(A([1, 2]))
// task50(A([1, 2, 3, 4]))
// task50(A([1, 2, 3, 3, 2, 1]))
const task51 = (a) => {
    let max = a[0]
    let sum = a[0]
    for (let i = 1; i < a.length; i++) {
        sum += a[i]
        if (sum > max) {
            max = sum
        }
    }
    console.log(max)
}
// task51(A([2, 3]))
// task51(A([-1, -2, -3]))
// task51(A([2, 3, -1, 0]))
// task51(A([2, 3, -1, 0, 2]))
const task52 = (a) => {
    const b = Array(6).fill(0)
    // for (const x of a) {
    //     b[x]++
    // }
    for (let i = 0; i < a.length; i++) {
        b[a[i]]++
    }
    console.log(b)
}
// task52(A([]))
// task52(A([0, 0, 0, 2, 3, 3]))
// task52(A([5, 2, 4, 3, 1, 0]))
const task53 = (a) => {
    // const b = []
    // for (let i = 1; i < a.length; i++) {
    //     if (i === 1) {
    //         b[i - 1] = a[a.length - 1]
    //     }
    //     b[i] = a[i - 1]
    // }
    // a = b
    // console.log(a)

    const t = a[a.length - 1]
    for (let i = a.length - 1; i >= 1; i--) {
        a[i] = a[i - 1]
    }
    a[0] = t
    console.log(a)
}
// task53(A([1, 2, 3]))
// task53(A([4, 1, 2, 3]))
// task53(A([3, 4, 1, 2]))
const task54 = (a) => {
    const t = a[0]
    for (let i = 1; i < a.length; i++) {
        a[i - 1] = a[i]
    }
    a[a.length - 1] = t
    console.log(a)
}
// task54(A([1, 2, 3]))
// task54(A([4, 1, 2, 3]))
// task54(A([3, 4, 1, 2]))
const task55 = (a) => {
    for (let i = 1; i < a.length; i++) {
        if (a[i - 1] > a[i]) {
            a[i - 1] = 0
        }
    }
    console.log(a)
}
// task55(A([1, 2]))
// task55(A([3, 2, 1]))
// task55(A([1, 2, 1, 2]))
const task56 = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        if (a[i] > a[i - 1]) {
            a[i] = 0
        }
    }
    console.log(a)
}

// task56(A([1, 2, 3, 4]))
// task56(A([3, 2, 1, 0]))
// task56(A([1, 3, 2, 4]))
const task57 = (a) => {
    const b = A(Math.floor(a.length / 2))
    let j = 0
    for (let i = 1; i < a.length; i += 2) {
        b[j] = a[i]
        j++
    }
    console.log(b)
}
// task57(A([1]))
// task57(A([1, 3, 2]))
// task57(A([1, 2, 1, 3]))
const task58 = (a, m, n) => {
    const b = A(n - m + 1)
    let j = 0
    for (let i = m - 1; i < n; i++) {
        b[j] = a[i]
        j++
    }
    console.log(b)
}
// task58(A([5, 4, 3]), 2, 3)
// task58(A([5, 6, 7, 8]), 1, 3)
// task58(A([9, 8, 7, 1, 2, 3]), 3, 5)
const task59 = (a, m, n) => {
    console.log(a.slice(m - 1, n))
}
// task59([5, 4, 3], 2, 3)
// task59([5, 6, 7, 8], 1, 3)
// task59([9, 8, 7, 1, 2, 3], 3, 5)
const task60 = (a, n) => {
    // const m = A(a.length * n)
    // let sum = 0
    // for (let i = 0; i < m.length; i++) {
    //     m[i] = a[sum]
    //     if (sum === a.length - 1) {
    //         sum = 0
    //     }
    //     else {
    //         sum++
    //     }
    // }
    // console.log(m)
    const m = A(a.length * n)
    for (let i = 0; i < m.length; i++) {
        m[i] = a[i % a.length]
    }
    console.log(m)
}
// task60(A([1]), 3)
// task60(A([1, 2]), 2)
// task60(A([9, 8]), 3)
const task61 = (a, x) => {
    // const m = Array(a.length + 1)
    // let sum = 0
    // for (let i = 0; i < a.length; i++) {
    //     if (sum === a.length - 1) {
    //         m[i] = a[sum]
    //         m[i + 1] = x
    //     }
    //     else {
    //         m[i] = a[sum]
    //         sum++
    //     }
    // }
    // console.log(m)
    const m = A(a.length + 1)
    for (let i = 0; i < a.length; i++) {
        m[i] = a[i]
    }
    m[a.length] = x
    console.log(m)
}
// task61(A([1]), 3)
// task61(A([1, 2]), 2)
// task61(A([9, 8, 7, 6]), 5)
const task62 = (a, x) => { // !!!! переделать по аналогии
    const m = Array(a.length + 1)
    let sum = 0
    for (let i = 0; i < a.length + 1; i++) {
        if (i === 0) {
            m[i] = x
            m[i + 1] = a[sum]
            i++
            // sum++
        }
        else {
            m[i] = a[sum]
            // sum++
        }
        sum++
        // console.log(i)
    }
    console.log(m)
}
// task62(A([1]), 3)
// task62(A([1, 2]), 2)
// task62(A([9, 8, 7, 6]), 5)
const task63 = (a, n) => {
    // const m = Array(a.length - 1)
    // let sum = 0
    // for (let i = 0; i < a.length; i++) {
    //     if (i !== x) {
    //         m[sum] = a[i]
    //         sum++
    //     }
    //     else {
    //         m[sum] = a[i + 1]
    //     }
    // }
    // console.log(m)
    const m = A(a.length - 1)
    for (let i = 0; i < n; i++) {
        m[i] = a[i]
    }
    for (let i = n + 1; i < a.length; i++) {
        m[i - 1] = a[i]
    }
    console.log(m)
}
// task63(A([1]), 0)
// task63(A([1, 2, 3]), 2)
// task63(A([9, 8, 7, 6]), 1)
const task64 = (a, b) => {
    const m = A(a.length + b.length)
    for (let i = 0; i < a.length; i++) {
        m[i] = a[i]
    }
    for (let i = 0; i < b.length; i++) {
        m[a.length + i] = b[i]
    }
    console.log(m)
}
// task64(A([1]), A([2]))
// task64(A([1, 2]), A([3]))
// task64(A([9, 8]), A([9, 8, 7]))
const task65 = (a, b) => {
    console.log(a.concat(b))
}
// task65([1], [2])
// task65([1, 2], [3])
// task65([9, 8], [9, 8, 7])
const task66 = (a) => {
    // for (let i = 0; i < a.length - 1; i++) {
    //     if (a[i] > a[i + 1]) {
    //         [a[i], a[i + 1]] = [a[i + 1], a[i]]
    //     }
    // }
    // console.log(a)
    const first = a[0]
    let i
    for (i = 1; i < a.length && a[i] < a[i - 1]; i++) {
        a[i - 1] = a[i]
    }
    a[i - 1] = first
    console.log(a)
}
// task66(A([3, 1, 2, 4]))
// task66(A([2, 1, 1, 2, 2]))
// task66(A([6, 2, 3, 4, 5]))
const task67 = (a) => { // !!!! переделать по аналогии
    for (let i = a.length - 1; i > 0; i--) {
        if (a[i] > a[i - 1]) {
            [a[i], a[i - 1]] = [a[i - 1], a[i]]
        }
    }
    console.log(a)
}
// task67(A([5, 4, 2, 3]))
// task67(A([2, 2, 1, 1, 2]))
// task67(A([5, 4, 3, 2, 6]))
const task68 = (a) => { // !!!! не работает
    // найти индексы начала и конца, затем сделать срез как в 58
    let c = []
    const j = a.length - 1
    let d = 0
    for (let i = 0; i < a.length; i++) {
        if (a[0] === 0 && a[j] === 0) {
            if (a[i] !== 0) {
                c[d] = a[i]
                d++
            }
        }
        else {
            c = a
        }
    }
    console.log(c)
}
// task68(A([3, 0, 0, 1, 2, 0, 0, 0]))
// task68(A([0, 0, 1, 2, 0]))
// task68(A([2, 0, 0, 3]))
// task68(A([0, 0, 0, 0]))
// task68(A([0, 0, 1, 2, 0, 0]))
const task69 = (a, b, m, n) => {
    const c = A(a.length - (n - m) + b.length)
    let j = 0
    for (let i = 0; i < m; i++) {
        c[j++] = a[i]
    }
    for (let i = 0; i < b.length; i++) {
        c[j++] = b[i]
    }
    for (let i = n; i < a.length; i++) {
        c[j++] = a[i]
    }
    console.log(c)
}
// task69(A([4, 5, 6, 7, 8]), A([9, 10]), 1, 4)
// task69(A([2, 3]), A([]), 1, 2)
// task69(A([1, 2, 3, 4]), A([5]), 1, 1)
const task70 = (a, m, n) => {
    // Math.ceil((a.length - m + 1) / n)
    // Math.floor((a.length - m) / n + 1)
    const b = A(Math.ceil((a.length - m + 1) / n))
    let sum = 0
    for (let i = m; i <= a.length; i += n) {
        b[sum] = a[i - 1]
        sum++
    }
    console.log(b)
}
// task70(A([5, 4, 3]), 1, 1)
// task70(A([5, 6, 7, 8]), 1, 2)
// task70(A([9, 8, 7, 1, 2, 3]), 2, 3)
const task71 = (a, b) => {
    // const c = Array(a.length + b.length)
    // let sum = 0
    // for (let i = 0; i < a.length; i++) {
    //     c[sum++] = a[i]
    // }
    // for (let i = 0; i < b.length; i++) {
    //     c[sum++] = b[i]
    // }
    // c.sort()
    // console.log(c)

    const m = A(a.length + b.length)
    let i = 0
    let left = 0
    let right = 0
    while (left < a.length && right < b.length) {
        if (a[left] < b[right]) {
            m[i++] = a[left++]
        }
        else {
            m[i++] = b[right++]
        }
    }
    while (left < a.length) {
        m[i++] = a[left++]
    }
    while (right < b.length) {
        m[i++] = b[right++]
    }
    console.log(m)
}
// task71(A([4, 7, 9]), A([3, 5]))
// task71(A([2, 3]), A([1, 2, 4]))
// task71(A([1, 3, 5]), A([2, 4, 6]))
const task72 = (a) => {
    const [x, y] = a
    console.log(x * y)
}
// task72(A([5, 3]))
// task72(A([2, 6]))
const task73 = (a) => {
    const [x = 1, y = 2] = a
    console.log(x, y)
}
// task73(A([10, 20]))
// task73(A([20]))
// task73(A([undefined, 30]))
// task73(A([, 30]))
// task73(A([]))
const task74 = (a) => {
    const [[x1, y1], [x2, y2]] = a
    console.log(x1, y1, x2, y2)
}
// task74(A([A([5, 3]), A([2, 4])]))
// task74(A([A([1, 4]), A([5, 7])]))
const task75 = (a) => {
    // const [x1, y1] = a[0]
    // const [x2, y2] = a[a.length - 1]
    const [[x1, y1], [x2, y2]] = [a[0], a[a.length - 1]]
    console.log(x1, y1, x2, y2)
}
// task75(A([A([5, 3])])) // [[5, 3]]
// task75(A([A([5, 3]), A([2, 4])]))
// task75(A([A([1, 4]), A([1, -1]), A([5, 7])]))
const task76 = (a) => {
    const [x, ...y] = a
    console.log(x, y)
}
// task76(A([1]))
// task76(A([2, 5, 6]))
// task76(A([4, 5, 8, 9]))
const task77 = (a) => {
    const [x, y, ...z] = a
    console.log(x, y, z)
}
// task77(A([1, 2]))
// task77(A([2, 5, 6]))
// task77(A([4, 5, 8, 9]))
const task78 = (a) => {
    const [[x1, ...y1], [x2, ...y2]] = [a[0], a[a.length - 1]]
    console.log(x1, y1, x2, y2)
}
// task78(A([A([1])]))
// task78(A([A([2, 5, 6]), A([7, 3, 9])]))
// task78(A([A([4]), A([]), A([8]), A([9, 2])]))
const task79 = (a) => {
    for (const [x, y] of a) {
        console.log(x + y)
    }
}
// task79(A([A([2, 5])]))
// task79(A([A([1, 2]), A([3, 4])]))
// task79(A([A([5, 1]), A([7, 8]), A([5, 5])]))
const task80 = (a) => {
    let r = Infinity
    // let r = a[0][0] * a[0][1]
    for (const [x, y] of a) {
        if (x * y < r) {
            r = x * y
        }
    }
    console.log(r)
}
// task80(A([A([5, 4])]))
// task80(A([A([3, 3]), A([2, 2]), A([4, 5])]))
// task80(A([A([1, 3]), A([3, 1]), A([2, 1])]))
const task81 = (a) => { // !!!! переделать по аналогии
    const q = Array(a.length - 1)
    let b = 0
    for (const [x, y] of a) {
        q[b++] = (x + y) * 2
    }
    let r = q[0]
    for (let i = 1; i < q.length; i++) {
        if (q[0] < q[i]) {
            r = q[i]
        }
    }
    console.log(r)
}
// task81(A([A([5, 3])]))
// task81(A([A([1, 3]), A([3, 1]), A([2, 1])]))
// task81(A([A([5, 5]), A([3, 4]), A([4, 4])]))
const task82 = ([a, b], [c, ...d]) => {
    console.log(a, b, c, d)
}
// task82(A([1, 2]), A([3, 4, 5]))
// task82(A([1, 2, 3]), A([4]))
const task83 = (a, b, m, n) => {
    a.splice(m, n - m, ...b)
    console.log(a)
}
// task83([4, 5, 6, 7, 8], [9, 10], 1, 4)
// task83([2, 3], [], 1, 2)
// task83([1, 2, 3, 4], [5], 1, 1)
const task84 = (a, x) => {
    const b = [...a, x]
    console.log(b)
}
// task84(A([]), 7)
// task84(A([1, 2]), 3)
// task84(A([4, 5, 6]), 10)
const task85 = (a, x) => {
    const b = [x, ...a]
    console.log(b)
}
// task85(A([]), 7)
// task85(A([1, 2]), 3)
// task85(A([4, 5, 6]), 10)
const task86 = (a, b) => {
    const q = [...a, ...b]
    console.log(q)
}
// task86(A([1]), A([2]))
// task86(A([1, 2]), A([3]))
// task86(A([9, 8]), A([9, 8, 7]))
const task87 = (a, b, x) => {
    const q = [...a, x, ...b]
    console.log(q)
}
// task87(A([]), A([]), 7)
// task87(A([1]), A([5]), 3)
// task87(A([1, 2]), A([2, 1]), 3)
const task88 = (a, n) => {
    a.push(n)
    console.log(a)
}
// task88([], 7)
// task88([1, 3], 2)
const task89 = (a) => {
    const q = a.pop()
    console.log(q, a)
}
// task89([7])
// task89([1, 3, 2])
const task90 = (a) => {
    const q = a.shift()
    console.log(q, a)
}
// task90([7])
// task90([1, 3, 2])
const task91 = (a, n) => {
    a.unshift(n)
    console.log(a)
}
// task91([], 7)
// task91([1, 3], 2)
