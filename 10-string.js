const task1 = () => {
    console.log('Hello, world!')
}
// task1()

const task2 = (a) => {
    console.log('Hello, ' + a)
}
// task2('world')
// task2('Simon')
// task2('Jerry')
const task3 = (a) => {
    console.log(`Hello, ${a}`)
}
// task3('world')
// task3('Simon')
// task3('Jerry')
const task4 = (greeting, name) => {
    console.log(`${greeting}, ${name}!`)
}
// task4('Hello', 'world')
// task4('Hi', 'John')
// task4('Salut', 'Mr. Smith')
const task5 = (a, b) => {
    console.log(`${a} + ${b} = ${a + b}`)
}
// task5(2, 4)
// task5(5, 3)
// task5(10, 27)
const task6 = (s) => {
    console.log(s[0], s[s.length - 1])
}
// task6('Abra')
// task6('Cadabra')
// task6(' . ')
const task7 = (a, b) => {
    if (a < b) {
        console.log(a, b)
    }
    else {
        console.log(b, a)
    }
}
// task7('about', 'baobab')
// task7('about', 'Baobab')
// task7('aaaa', 'aaaA')
// task7('AAA', 'AAAAA')
const task8 = (a, b) => {
    if (a === b) {
        console.log(0)
    }
    else if (a < b) {
        console.log(-1)
    }
    else {
        console.log(1)
    }
}
// task8('Test', 'Tes')
// task8('Test', 'Test')
// task8('Test', 'test')
const task9 = (s) => {
    if (s >= '0' && s <= '9') {
        console.log('digit')
    }
    else if (s >= 'a' && s <= 'z') {
        console.log('lower')
    }
    else if (s >= 'A' && s <= 'Z') {
        console.log('upper')
    }
    else {
        console.log('other')
    }
}
// task9('x')
// task9('W')
// task9('#')
// task9('3')
const task10 = (s) => {
    let sum = 0
    for (const x of s) {
        if (x === ' ') {
            sum++
        }
    }
    console.log(sum)
}
// task10('Count of spaces is 4')
// task10('   ')
// task10('Zero one two')
// task10('Zero')
const task11 = (s) => {
    // let b = false
    // let sum = 1
    // if (s.length >= 8) {
    //     for (const x of s) {
    //         if (x >= 'a' && x <= 'z') {
    //             sum++
    //             break
    //         }
    //     }
    //     for (const x of s) {
    //         if (x >= 'A' && x <= 'Z') {
    //             sum++
    //             break
    //         }
    //     }
    //     for (const x of s) {
    //         if (x >= '0' && x <= '9') {
    //             sum++
    //             break
    //         }
    //     }
    //     for (const x of s) {
    //         if ((x >= '0' && x <= '9') || (x >= 'A' && x <= 'Z') || (x >= 'a' && x <= 'z')) {
    //             // sum = sum
    //         }
    //         else {
    //             sum++
    //             break
    //         }
    //     }
    // }
    // if (sum === 5) {
    //     b = true
    // }
    // console.log(b)
    if (s.length < 8) {
        console.log(false)
    }
    else {
        let digit = false
        let lower = false
        let upper = false
        let other = false
        for (const c of s) {
            if (c >= '0' && c <= '9') {
                digit = true
            }
            else if (c >= 'a' && c <= 'z') {
                lower = true
            }
            else if (c >= 'A' && c <= 'Z') {
                upper = true
            }
            else {
                other = true
            }
        }
        console.log(digit && lower && upper && other)
    }
}
// task11('strongPassw0rd')
// task11('strongPa$$word')
// task11('strongP@ssw0rd')
// task11('Pa$$123')
// task11('Pa$$1234')
const task12 = (a) => {
    const x = a - a % 10
    console.log(`${x}-${x + 9}`)
}
// task12(5)
// task12(30)
// task12(101)
const task13 = (s) => {
    const b = Array.from(s)
    console.log(b)
}
// task13('Test')
// task13('12 34')
// task13('')
const task14 = (s) => {
    console.log(+s + 1)
}
// task14('4')
// task14('10')
// task14('321')
const task15 = (s) => {
    console.log(s.split(' '))
}
// task15('First second third')
// task15('   ')
// task15('12 34 567')
const task16 = (s) => {
    let c = ''
    for (const x of s.split(' ')) {
        c += x[0]
    }
    console.log(c)
    // console.log(s.split(' ').map(x => x[0]).join(''))
}
// task16('abra cada bra')
// task16('super puper string')
// task16('123 456')
const task17 = (s) => {
    // let b = 0
    // let g = 0
    // let h = ''
    // let c
    // for (const x of s) {
    //     if (x === ' ') {
    //         c = h * 1
    //         b += c
    //         g += b
    //         b = 0
    //         h = ''
    //     }
    //     else {
    //         h += x
    //     }
    // }
    // c = h * 1
    // b += c
    // g += b
    // console.log(g)

    let sum = 0
    for (const x of s.split(' ')) {
        sum += +x
    }
    console.log(sum)
}
// task17('2 2')
// task17('10 20 15')
// task17('1 11 111 1111')
const task18 = (s) => {
    let b = ''
    for (const x of s) {
        b += x
    }
    console.log(b)
}
// task18(['1', '2', '3', '4'])
// task18(['a', 'b', 'c'])
// task18(['a', '1', 'b', '2'])
const task19 = (a, d) => {
    // let b = ''
    // for (const x of a) {
    //     b += x
    //     b += d
    // }
    // console.log(b)
    if (a.length === 0) {
        console.log()
    }
    else {
        let b = a[0]
        for (let i = 1; i < a.length; i++) {
            b += d + a[i]
        }
        console.log(b)
    }
}
// task19([], ' + ')
// task19(['1', '2', '3', '4'], ' + ')
// task19(['a', 'b', 'c'], ', ')
// task19(['a', '1', 'b', '2'], ' ')
const task20 = (a, d) => {
    const b = a.join(d)
    console.log(b)
}
// task20([], ' + ')
// task20(['1', '2', '3', '4'], ' + ')
// task20(['a', 'b', 'c'], ', ')
// task20(['a', '1', 'b', '2'], ' ')
const task21 = (s) => {
    let b = ''
    for (const x of s) {
        if (x >= '0' && x <= '9') {
            continue
        }
        else {
            b += x
        }
    }
    console.log(b)
}
// task21('Delete a11 digit7')
// task21('12-34')
// task21('No digits')
const task22 = (s) => {
    console.log(s.indexOf('sub'))
}
// task22('Substring sub is here')
// task22('sub sub substring')
// task22('First substring only')
// task22('Zero')
const task23 = (s) => {
    const pos1 = s.indexOf('sub')
    const pos2 = s.indexOf('sub', pos1 + 1)
    console.log(pos2)
}
// task23('sub sub')
// task23('sub sub substring')
// task23('First substring only')
// task23('Zero')
const task24 = (s) => {
    console.log(s.lastIndexOf('sub'))
}
// task24('sub sub')
// task24('sub sub substring')
// task24('First substring only')
// task24('Zero')
const task25 = (s) => {
    const pos1 = s.lastIndexOf('sub')
    const pos2 = s.lastIndexOf('sub', pos1 - 1)
    console.log(pos2)
}
// task25('sub sub')
// task25('sub sub substring')
// task25('First substring only')
// task25('Zero')
const task26 = (s) => {
    let sum = 0
    let pos1 = s.indexOf('sub')
    while (pos1 !== -1) {
        pos1 = s.indexOf('sub', pos1 + 1)
        sum += 1
    }
    console.log(sum)
}
// task26('sub and sub and another sub')
// task26('sub only once')
// task26('no one')
const task27 = (s) => {
    console.log(s.slice(1, 4))
}
// task27('abcd')
// task27('Test string')
// task27('First-second')
const task28 = (s) => {
    console.log(s.slice(1, -1))
}
// task28('abcd')
// task28('Test string')
// task28('First-second')
const task29 = (s, n) => {
    console.log(s.slice(n))
}
// task29('abcd', 2)
// task29('Test string', 5)
// task29('First-second', 6)
const task30 = (s, n) => {
    console.log(s.slice(0, -n))
}
// task30('abcd', 2)
// task30('Test string', 3)
// task30('First-second', 7)
const task31 = (s) => {
    let b
    if (s.length % 2 === 0) {
        b = s.slice(0, s.length / 2)
    }
    else {
        b = s.slice(0, Math.floor(s.length / 2))
    }
    console.log(b)
}
// task31('abcd')
// task31('abcdefg')
// task31('1')
const task32 = (s) => {
    let b
    if (s.length % 2 === 0) {
        b = s.slice(s.length / 2)
    }
    else {
        b = s.slice(Math.floor(s.length / 2))
    }
    console.log(b)
}
// task32('abc')
// task32('abcd')
// task32('qwert')
const task33 = (s1, n1, s2, n2) => {
    let c = ''
    // for (let i = 0; i < s1.length; i++) {
    //     if (i === n1) {
    //         break
    //     }
    //     c += s1[i]
    // }
    c += s1.slice(0, n1)
    c += s2.slice(-n2)
    console.log(c)
}
// task33('abcd', 2, 'efgh', 2)
// task33('1 is one', 1, 'first', 2)
const task34 = (s) => {
    let b = ''
    for (let i = s.indexOf('-') + 1; i < s.lastIndexOf('-'); i++) {
        b += s[i]
    }
    console.log(b)
}
// task34('First-second-third')
// task34('1-2-3-4-5')
// task34('Only-one')
const task35 = (s) => {
    console.log(s.substr(1, 3))
}
// task35('abcd')
// task35('Test string')
// task35('First-second')
const task36 = (s) => {
    console.log(s.substr(3))
}
// task36('abcd')
// task36('Test string')
// task36('First-second')
const task37 = (s) => {
    console.log(s.substr(-3))
}
// task37('abcd')
// task37('Test string')
// task37('First-second')
const task38 = (s) => {
    console.log(s.replace('sub', 'SUB'))
}
// task38('The sub for replace')
// task38('First substring or second sub')
// task38('No one')
const task39 = (s, ss) => {
    console.log(s.replace(ss, `$${ss}`))
}
// task39('$200 - 100 = 100', '100')
// task39('Pro100 string', 'string')
// task39('Prosto string', '100')
const task40 = (s, ss) => {
    console.log(s.replace(ss, `${ss}...`))
}
// task40('$200 - 100 = 100', '100')
// task40('Pro100 string', 'string')
// task40('Prosto string', '100')
const task41 = (s, ss) => {
    console.log(s.replace(ss, `${ss}${ss}`))
}
// task41('abcabc', 'b')
// task41('test', 't')
// task41('1234', 'q')
const task42 = (s, ss) => {
    console.log(s.replace(ss, ''))
}
// task42('$200 - 100 = 100', '$200 - ')
// task42('Pro100 string', '100')
// task42('Prosto string', '100')
const task43 = (s) => {
    console.log(s.toLowerCase())
    console.log(s.toUpperCase())
}
// task43('Simple String With Words')
// task43('Pro100 string')
// task43('Prosto STRING')
const task44 = (s) => {
    if (s === s.toUpperCase()) {
        console.log('upper')
    }
    else if (s === s.toLowerCase()) {
        console.log('lower')
    }
    else {
        console.log('mixed')
    }
}
// task44('ASD')
// task44('fgh')
// task44('Zxc')
const task45 = (s) => {
    let sum = 0
    let pos1 = s.indexOf(' ')
    const x = s[0].toUpperCase()
    if (x === x.toUpperCase()) {
        sum += 1
        while (pos1 !== -1) {
            if (s[pos1 + 1] === s[pos1 + 1].toUpperCase()) {
                sum += 1
            }
            pos1 = s.indexOf(' ', pos1 + 1)
        }
    }
    console.log(sum)
}
// task45('Hello, world')
// task45('John Smith')
// task45('JohnSmith')
const task46 = (s) => {
    const b = s.replace(s[0], s[0].toUpperCase())
    console.log(b)
}
// task46('asd')
// task46('tEST')
// task46('Qwe')
const task47 = (s, n) => {
    console.log(s.padStart(n, '.'), s.padEnd(n, '.'))
}
// task47('text', 7)
// task47('long string', 3)
// task47('text', 4)
const task48 = (h, m) => {
    let b = `${h}:${m}`
    if (Math.floor(h / 10) === 0 && Math.floor(m / 10) === 0) {
        b = `0${h}:0${m}`
    }
    else if (Math.floor(h / 10) === 0) {
        b = `0${h}:${m}`
    }
    else if (Math.floor(m / 10) === 0) {
        b = `${h}:0${m}`
    }
    console.log(b)
}
// task48(8, 0)
// task48(13, 5)
// task48(9, 30)
// task48(22, 45)
const task49 = (s, n) => {
    let b = s
    if (s.length > n) {
        b = s.slice(0, n)
    }
    else if (s.length < n) {
        b = b.padEnd(n, '.')
    }
    console.log(b)
}
// task49('abc', 6)
// task49('abcdef', 4)
// task49('abc', 3)
const task50 = (s) => {
    console.log(`${s.trim()}.`)
    console.log(`${s.trimStart()}.`)
    console.log(`${s.trimEnd()}.`)
}
// task50('   login   ')
// task50('   pass   word')
// task50('admin ')
const task51 = (s) => {
    let x = false
    if (s.trim() === 'admin') {
        x = true
    }
    console.log(x)
}
// task51(' admin')
// task51('admin ')
// task51('admin')
// task51(' a d m i n ')
const task52 = (s) => {
    console.log(s.startsWith('Ab'))
    console.log(s.endsWith('ing'))
    console.log(s.includes('so'))
    console.log('-'.repeat(5))
}
// task52('Absolute')
// task52('String')
// task52('so, Ab is not in the begining')
const task53 = (s, start, end, inc) => {
    const b = s.split(' ')
    let sum1 = 0
    let sum2 = 0
    let sum3 = 0
    for (let i = 0; i < b.length; i++) {
        if (b[i].startsWith(start) === true) {
            sum1 += 1
        }
        if (b[i].endsWith(end) === true) {
            sum2 += 1
        }
        if (b[i].includes(inc) === true) {
            sum3 += 1
        }
    }
    console.log(sum1, sum2, sum3)
}
// task53('abc abb bca', 'a', 'b', 'c')
// task53('Abra cada bra Abra', 'ra', 'ra', 'ad')
// task53('some text with some words', 'w', 'some', 't')
const task54 = (v, p) => {
    if (v === p) {
        console.log('ничья')
    }
    else if ('knbk'.includes(v + p)) {
        console.log('Вася')
    }
    else {
        console.log('Петя')
    }
}
// task54()
// task54()
// task54()
// task54()
const task55 = (s) => {
    const b = s.split(' ')
    const c = ' class'
    const g = 'class'
    for (let i = 0; i < b.length; i++) {
        if (b[i].startsWith('class') === false && b[i] !== '') {
            s += c
        }
        else if (b[i] === '') {
            s += g
        }
    }
    console.log(s)
}
// task55('cclass classs')
// task55('class')
// task55('')
const task56 = (s) => {
    let c = ''
    const b = s.split(' ')
    for (let i = 0; i < b.length; i++) {
        if (b[i] === 'class') {
            continue
        }
        else {
            c += ` ${b[i]}`
        }
    }
    console.log(c.trimStart())
}
// task56('cclass classs')
// task56('class')
// task56('class test class')
const task57 = (s) => {
    let c = ''
    let b = ''
    let in1 = 0
    let in2 = 0
    for (let i = s.length; i > 0; i--) {
        if (s[i] === '/') {
            in1 = i + 1
            break
        }
    }
    for (let i = s.length; i > 0; i--) {
        if (s[i] === '.') {
            in2 = i
            break
        }
    }
    for (let i = in1; i < in2; i++) {
        c += s[i]
    }
    for (let i = in2 + 1; i < s.length; i++) {
        b += s[i]
    }
    console.log(`${b} ${c}`)
}
// task57('/var/www/index.html')
// task57('/var/log/log.01.tar.gz')
// task57('Zadachi na stroki.js')
const task58 = (s) => {
    console.log(s.charCodeAt())
}
// task58('a')
// task58('c')
// task58('A')
// task58('Z')
// task58('0')
// task58('9')
const task59 = (s) => {
    console.log(String.fromCharCode(s))
}
// task59(97)
// task59(99)
// task59(65)
// task59(90)
// task59(48)
// task59(57)
const task60 = (s) => {
    const b = s.charCodeAt()
    console.log(String.fromCharCode(b - 1), String.fromCharCode(b + 1))
}
// task60('b')
// task60('Ю')
// task60('N')
// task60('3')
const task61 = (n) => {
    const b = 'a'
    const c = b.charCodeAt()
    for (let i = 0; i < n; i++) {
        console.log(String.fromCharCode(c + i))
    }
}
// task61(1)
// task61(3)
const task62 = (n) => {
    const b = 'Z'
    const c = b.charCodeAt()
    for (let i = n; i > 0; i--) {
        console.log(String.fromCharCode(c - i + 1))
    }
}
// task62(1)
// task62(3)
const task63 = (n) => {
    let b = 'A'
    let c = b.charCodeAt()
    let d
    let g = c
    for (let i = 1; i < n + 1; i++) {
        d = c + i
        console.log(`${String.fromCharCode(g)}${String.fromCharCode(d)}`)
        g = c + i
    }
    // console.log(b)
}
// task63(1)
// task63(3)
const task64 = (a, b) => {
    const c = a.charCodeAt()
    const l = b.charCodeAt()
    let d = c
    let d2 = l
    let sum = 0
    for (let i = c, j = l; i < j; i++, j--) {
        sum += 1
    }
    if (sum % 2 === 0 || sum === 1) {
        for (let i = c, j = l; i < j; i++, j--) {
            console.log(`${String.fromCharCode(d)} ${String.fromCharCode(d2)}`)
            d = c + 1
            d2 = d2 - 1
        }
    }
    else {
        for (let i = c, j = l; i < j - 1; i++, j--) {
            console.log(`${String.fromCharCode(d)} ${String.fromCharCode(d2)}`)
            d = c + 1
            d2 = d2 - 1
        }
        console.log(`${String.fromCharCode(d + 1)} ${String.fromCharCode(d2)}`)
    }
}
// task64('a', 'c')
// task64('b', 'e')
// task64('d', 'i')