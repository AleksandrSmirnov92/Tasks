const task1 = (a) => {
    console.log(a.name, a.age)
}
// task1({ name: 'Vasya', age: 20 })
// task1({ age: 30, name: 'Petya' })
// task1({})
const task2 = (a) => {
    console.log(a['n a m e'], a['a g e'])
}
// task2({ 'n a m e': 'Vasya', 'a g e': 20 })
// task2({ 'a g e': 30, 'n a m e': 'Petya' })
// task2({})
const task3 = (a, k1, k2) => {
    console.log(a[k1], a[k2])
}
// task3({ name: 'Vasya', age: 20 }, 'name', 'age')
// task3({ a: 10, b: 20, c: 30 }, 'c', 'b')
// task3({}, 'k1', 'k2')
const task4 = (a) => {
    console.log(Object.keys(a))
}
// task4({ name: 'Vasya', age: 20 })
// task4({ a: 10, b: 20, c: 30 })
// task4({})
const task5 = (a) => {
    console.log(Object.values(a))
}
// task5({ name: 'Vasya', age: 20 })
// task5({ a: 10, b: 20, c: 30 })
// task5({})
const task6 = (a) => {
    console.log(Object.entries(a))
}
// task6({ name: 'Vasya', age: 20 })
// task6({ a: 10, b: 20, c: 30 })
// task6({})
const task7 = (s) => {
    console.log(Object.values(s))
}
// task7('')
// task7('abc')
// task7('test')
const task8 = (a) => {
    for (let key in a) {
        console.log(key, a[key])
    }
}
// task8({ name: 'Vasya', age: 20 })
// task8({ a: 10, b: 20, c: 30 })
// task8({})
const task9 = (a) => {
    let c 
    let b
    for (const key in Object.entries(a)) {
        [c, b] = key
    }
    console.log(c, b)
}
// task9({ name: 'Vasya', age: 20 })
// task9({ a: 10, b: 20, c: 30 })
// task9({})
const task10 = (a, k) => {
    console.log('name' in a)
    console.log(k in a)
}
// task10({ name: 'Vasya', age: 20 }, 'a')
// task10({ a: 10, b: 20, c: 30 }, 'c')
// task10({}, 'k')
const task11 = (a, k) => {
    let b = Array(k.length) 
    for (let i = 0; i < k.length; i++) {
        b[i] = k[i] in a
    }
}
// task11({ a: 20, b: 10, 0: 30 }, ['b', 'x', '0'])
// task11({ name: 'Вася', age: 20 }, ['age', 'age', 'name'])
// task11({}, ['a', 'a', 'a'])
const task12 = (a, k) => {
    delete a['name']
    delete a[k]
    console.log(a)
}
// task12({ name: 'Vasya', age: 20 }, 'a')
// task12({ a: 10, b: 20, c: 30 }, 'c')
// task12({}, 'k')
const task13 = (v1, v2) => {
    let ob = {name: v1, age: v2}
    console.log(ob)
 }
// task13('Vasya', 20)
// task13(undefined, false)
// task13(null, [true])
const task14 = (name, age) => {
    let ob = {name: name, age: age}
    console.log(ob)
}
//  task14('Vasya', 20)
//  task14(undefined, false)
//  task14(null, [true])
const task15 = (a) => {
    a.name = 'Vasya'
    console.log(a)
}
// task15({})
// task15({ age: 20 })
// task15({ name: 'Petya', age: 20 })
const task16 = (a, k, v) => {
   a[k] = v
   console.log(a)
}
// task16({}, 'name', 'Vasya')
// task16({ name: 'Vasya' }, 'age', 20)
// task16({ name: 'Petya', age: 20 }, 'name', 'Vasya')
const task17 = (a) => {
    a.age += 1
    a.salary += 2000
    console.log(a)
}
// task17({ age: 20, salary: 10000 })
// task17({ name: 'Vasya', age: 30, salary: 20000 })
const task18 = (a) => {
    if (a.a > a.b) {
        a.a += a.b
    }
    else {
        a.a += 1
        a.b += 1
    }
    console.log(a)
}
// task18({ a: 20, b: 10 })
// task18({ a: 20, b: 30 })
// task18({ a: 20, b: 20 })
const task19 = (a) => {
    let ob = {}
    for (let i = 0; i < a.length; i++) {
        ob[a[i]] = a[i]
    }
    console.log(ob)
}
// task19(['a', 'b', 'c'])
// task19([])
const task20 = (n) => {
    let ob = {}
    for (let i = 0; i < n; i++) {
        ob[i] = n
    }
    console.log(ob)
}
// task20(0)
// task20(1)
// task20(3)
const task21 = (n) => {
    let ob = {}
    for (let i = 0; i < n; i++) {
        ob[String.fromCharCode(97 + i)] = 97 + i
    }
    console.log(ob)
}
// task21(0)
// task21(1)
// task21(3)
const task22 = (s) => {
    let ob = {}
    for (let i = 0; i < s.length; i++) {
        ob[s[i]] = s.charCodeAt(i)
    }
    console.log(ob)
}
// task22('')
// task22('z')
// task22('test')
const task23 = (a) => {
    let ob = {}
    for (let key of a) {
        [ob[key[0]], ob[key[0]]] = key
    }
    console.log(ob)
}
// task23([['a', 10], ['b', 20]])
// task23([['name', 'Vasya'], ['age', 20]])
// task23([])
const task24 = (name) => {
    let ob = {
        Vasya: 'programer',
        Petya: 'QA',
        Misha: 'manager'
    }
    console.log(ob[name])
}
// task24('Vasya')
// task24('Petya')
// task24('Misha')
const task25 = (s) => {
    let ob = {}
    let sum = 0
    for (let i = 0; i < s.length; i++) {
        for (let x of s) {
            if (x === s[i]) {
                sum += 1
                ob[s[i]] = sum
            }
            else {
                ob[s[i]] = sum
            }
        }
        sum = 0
    }
    console.log(ob)
}
// task25('')
// task25('abc')
// task25('test')
const task26 = (a, d) => {
    const ob = Object.keys(d)
    for (let i = ob.length - 1; i >= 0; i--) {
        for (let c = 0; c < a.length; c++) {
            if (ob[i] === a[c]) {
                a[c] = d[ob[i]]
            }
        }
    }
    console.log(a)
}
// task26(['t', 'e', 's', 't'], {t: 'a', e: 'b'})
// task26(['a', 'a', 'a'], {a: 'b', b: 'a'})
// task26(['t', 'e', 's', 't'], {x: 't'})
const task27 = (a) => {
    const ob = {}
    let ob1 = Object.keys(a)
    let ob2 = Object.values(a)
    for (let i = 0; i < ob1.length; i++) {
        ob[ob2[i]] = ob1[i]
    }
    console.log(ob)
}
// task27({ a: 'x', b: 'y', c: 'z' })
// task27({ a: 'a', b: 'b', c: 'c' })
// task27({ a: 'a', b: 'a', c: 'a' })
const task28 = (a) => {
    const ob = {}
    for (let i = 0; i < a.length; i++) {
        ob[a[i]] = a[i + 1]
    }
    console.log(ob)
}
// task28(['a', 'b'])
// task28(['a', 'a', 'b', 'b'])
// task28(['a', 'b', 'a', 'b'])
const task29 = (a) => {
    const ob = Object.values(a)
    let obmax = ob[0]
    let sum = 0
    for (let i = 0; i < ob.length; i++) {
        if (ob[i] > obmax) {
            obmax = ob[i]
        }
        sum += ob[i]
    }
    console.log(obmax, sum)
}
// task29({ a: 5, b: 7, c: 3 })
// task29({ a: -3, b: -5, c: -1 })
// task29({ a: 10, a: 20, a: -3 })
const task30 = (a) => {
    let ob = Object.values(a)
    let ob1 = Object.keys(a)
    let obmax = ob[0]
    let sum = 0
    for (let i = 0; i < ob.length; i++) {
        if (ob[i] > obmax) {
            obmax = ob[i]
        }
        for (let i = 0; i < ob1.length; i++) {
            if (a[ob1[i]] === obmax) {
                sum = ob1[i]
            }
        }
    }
    console.log(sum)
}
// task30({ a: 5, b: 7, c: 3 })
// task30({ a: -3, b: -5, c: -1 })
// task30({ a: 10, b: 20, b: 10 })
const task31 = (a, b) => {
    let ob = {}
    for (let i = 0; i < a.length; i++) {
        ob[a[i]] = b[i]
    }
    console.log(ob)
}
// task31(['key1', 'key2'], ['value1', 'value2'])
// task31(['a', 'b'], ['c', 'd'])
// task31(['a', 'a', 'a'], ['b', 'c', 'd'])
const task32 = (a) => {
    let ob = {}
    for (let i = 0; i < a.length; i++) {
        ob[a[i.name] = a[i].value]
    }
    console.log(ob)
}
// task32([
//     { name: 'key1', value: 'value1' },
//     { name: 'key2', value: 'value2' }
// ]
// [
//     { name: 'a', value: 'b' },
//     { name: 'c', value: 'd' }
// ]
// [
//     { name: 'a', value: 'b' },
//     { name: 'a', value: 'c' }
// ])
// task32([
//     { name: 'key1', value: 'value1' },
//     { name: 'key2', value: 'value2' }
// ]
// [
//     { name: 'a', value: 'b' },
//     { name: 'c', value: 'd' }
// ]
// [
//     { name: 'a', value: 'b' },
//     { name: 'a', value: 'c' }
// ])
// task32([
//     { name: 'key1', value: 'value1' },
//     { name: 'key2', value: 'value2' }
// ]
// [
//     { name: 'a', value: 'b' },
//     { name: 'c', value: 'd' }
// ]
// [
//     { name: 'a', value: 'b' },
//     { name: 'a', value: 'c' }
// ])
const task33 = (a) => {
    let m = []
    let ob = Object.keys(a)
    let z = Object.values(a)
    for (let i = 0; i < ob.length; i++) {
        m.push(ob[i])
        m.push(z[i])
    }
    console.log(m)
}
// task33({ key1: 'value1', key2: 'value2' })
// task33({ a: 'b', c: 'd' })
// task33({ a: 'b', a: 'c' })
const task34 = (a) => {
   let [namee, age] = [a.name, a.age]
    console.log(namee, age)
}
// task34({ name: 'Vasya', age: 20 })
// task34({})
const task35 = (a) => {
    const [namee, age] = [a.v1, a.v2]
    console.log(namee, age)
}
// task35({ v1: 'Vasya', v2: 20 })
// task35({})
const task36 = (a) => {
    const { id, ...other } = a
    console.log(id, other)
}
// task36({ id: 1, name: 'Vasya' })
// task36({ id: 2, age: 20 })
// task36({ id: 3 })
const task37 = (a) => {
    const {data} = a.response
    console.log(data)
}
// task37({ response: { data: 'ok' } })
// task37({
//     method: 'GET',
//     response: {
//         status: 200,
//         data: [1, 2, 3]
//     }
// })
// task37({ response: {} })

const task38 = (a) => {
    let ob = {...a, name: 'Vasya'}
    console.log(ob)
}
// task38({ age: 20 })
// task38({ name: 'Petya', salary: 8000 })
const task39 = (a) => {
    let ob = { ...a }
    if ('name' in a === false) {
        ob = { ...a, name: 'vasya' }
    }
    console.log(ob)
}
// task39({ age: 20 })
// task39({ name: 'Petya', salary: 8000 })
const task40 = (a, b) => {
    const ob = { ...a, ...b }
    console.log(ob)
}
// task40({ name: 'Vasya' }, { age: 20 })
// task40({ name: 'Petya' }, { name: 'Vasya' })
// task40({ name: 'Petya', age: 20 },
// { name: 'Vasya', salary: 8000 })
const task41 = (a, b) => {
    const { name = a.name, age = b.age } = { name: b.name, age: a.age }
    console.log(name, age)
}
// task41({ name: 'Vasya' }, { age: 20 })
// task41({ name: 'Petya' }, { name: 'Vasya' })
// task41({ name: 'Petya', age: 20 },
// { name: 'Vasya', salary: 8000 })
const task42 = (a) => {
    const { name = 'Vasya', age = 20 } = a
    console.log(name, age)
}
// task42({ name: 'Petya', age: 30 })
// task42({ name: 'Petya' })
// task42({ salary: 8000 })
const task43 = (a) => {
    for (let x of a) {
        console.log(x.name, x.age)
    }
}
// task43([
//     { name: 'Vasya', age: 20 }
//     { name: 'Petya', age: 30 }
//     { name: 'Oksana', age: 18 }
//     { name: 'Mikhail', age: 35 }
// ])
const task44 = ({name, age}) => {
    console.log(name, age)
}
// task44({ name: 'Vasya', age: 20 })
// task44({ name: 'Petya', age: 30 })
// task44({})
const task45 = ({ id, ...other }) => {
    console.log(id, other)
}
// task45({ id: 1, name: 'Vasya', age: 20 })
// task45({ id: 2, salary: 8000 })
// task45({ id: 3 })
const task46 = (a) => {
    let (v1, v2) = {v1: a[0], v2: a[1].value}
    console.log(v1, v2)
}
// task46([{ value: 20 }, { value: 30 }])
// task46([
//     { value: [] },
//     { value: {} },
//     { value: null }
// ])
// task46([{}, {}])
const task47 = (a) => {
    let {v1 = 0, v2 = 0} = {v1: a[0].value, v2: a[1].value}
    console.log(v1, v2)
}
// task47([{ value: 20 }, { value: 30 }])
// task47([
//     { value: [] },
//     { value: {} },
//     { value: null }
// ])
// task47([{}, {}])

//++
const linkTest = (a, b) => {
    a.name = 'Vasya'
    b = { ...b, name: 'Vasya' }
    console.log(a)
    console.log(b)
}
// const a = { age: 20 }
// const b = { age: 20 }
// linkTest(a, b)
// console.log(a)
// console.log(b)
const task48 = (a) => {
    let {v1 = 0, v2 = 0} = {v1: a[0].value, v2: a[1].value}
    console.log(v1, v2)
}
// task48([
//     { id: 1, name: 'Vasya' },
//     { id: 2, name: 'Petya' }
// ])
// task48([
//     { id: 100, value: 'first' },
//     { id: 200, value: 'second' },
//     { id: 300, value: 'third' }
// ])
const task49 = (keys, values) => {
   let m = []
   for (let i =0; i < values.length; i++) {
       m.push({})
   }
   for (let i = 0; i <m.length; i++) {
       for (let c = 0; c < keys.length; c++) {
           m[i][keys[c]] = values[i][c]
       }
   }
   console.log(m)
}
// task49(['id', 'name', 'age'],
// [
//     [1, 'Vasya', 20],
//     [2, 'Petya', 30]
// ])
// task49(['key', 'value'],
// [
//     ['a', 100],
//     ['b', 200],
//     ['c', 300]
// ])
const task50 = (a) => {
    const obj = {}
    for (const x of a) {
        if (!(x.age in obj)) {
            obj[x.age] = []
        }
        obj[x.age].push(x)
    }
    console.log(obj)
}
// task50([
//     { id: 1, name: 'Vasya', age: 20 },
//     { id: 2, name: 'Petya', age: 30 },
//     { id: 3, name: 'Ivan', age: 20 },
//     { id: 4, name: 'Fedya', age: 30 }
// ])

const task51 = (a) => {
    const ob = {}
    for (let i of a) {
        if (i.department in ob) {
            continue
        }
        else {
            ob[i.department] = {
                avg: 0,
                best: []
            }
            
        }
    }
    let c = Object.keys(ob);
    let l = 0
    a.forEach((item) => {
        if (item.department in ob) {
            for (let i = 0; i < c.length; i++) {
                a.forEach((item)=>{
                    if (c[i] === item.department){
                        l += 1
                    }
                })
                ob[item.department].avg += item.salary / l;
                l = 0
                break;
            }
        }
    });
    
   c.forEach((item)=>{
        let b = 0
       a.forEach((items)=>{
            if (item === items.department){
                if (b <= items.salary){
                    b = items.salary
                }
                
            }
       })
       a.forEach((itemmm) =>{
            if(item === itemmm.department && b === itemmm.salary){
                ob[item].best.push(itemmm.name)
            } 
       })
       
   })
   console.log(ob)
   
    
}
task51([
    { department: 'one', name: 'Vasya', salary: 10000 },
    { department: 'two', name: 'Petya', salary: 12000 },
    { department: 'one', name: 'Misha', salary: 9000 },
    { department: 'two', name: 'Fedor', salary: 12000 },
    { department: 'three', name: 'Olga', salary: 9000 },
    { department: 'three', name: 'Ivan', salary: 10000 },
    { department: 'three', name: 'Anton', salary: 8000 },
    
])