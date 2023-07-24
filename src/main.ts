
// ---------- Objects,Arrays,Tuples & Enums--------- 

// let stringArr = ['one','hey','Dave']

// let guitars = ['Strat','Les Paul',5150]

// let mixedData = ['EVH',1984,true]

// stringArr[0] = 'John'
// stringArr.push('hey')

// guitars[0] = 1984
// guitars.unshift('Jim')

// let test = []
// let bands: string[] = []
// bands.push('Vna Helen')

// // Tuple
// let myTuple: [string,number,boolean] = ['Deve',42,true]

// let mixed = ['John',1,false]

// myTuple[1] = 42

// //objects
// let myObj: object
// myObj = []
// console.log(typeof myObj);
// myObj = bands
// myObj = {}

// const exampleObj = {
//     prop1: 'Dave',
//     prop2: true,
// }

// exampleObj.prop1 = 'John'

// interface Guitarist {
//     name?: string,
//     active: boolean,
//     albums: (string | number)[]
// }

// let evh: Guitarist = {
//     name: 'Eddie',
//     active: false,
//     albums: [1984,5150,'OU812'],
// }

// let jp: Guitarist = {
//     active: true,
//     albums: ['I','II','IV'],
// }

// const greetGuitarist = (guitarist: Guitarist) => {
//     if(guitarist.name){
//         return `Hello ${guitarist.name.toUpperCase()}!`
//     }
//     return 'Hello!'
// }

// console.log(greetGuitarist(jp));

// //Enums

// enum Grade {
//     U = 1,
//     D,
//     C,
//     B,
//     A,
// }

// console.log(Grade.U);



//------------- typeScript functions ------------


//type Aliases
//aliases help codes dry(don't repeat your self)
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

interface Guitarist {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
}

type UserId = stringOrNumber 

// literal types
let myName: 'Dave'

// let username: 'Dave' | 'John | 'Amy'
// username = 'Amy'  -> Gave an error


// functions
const add = (a:number,b:number): number => {
    return a + b
}

const logMsg = (message: any):void => {
    console.log(message);
}

logMsg('Hello!')
logMsg(add(2,3))

let subtract = function (c: number, d: number):number {
    return c-d
}

type mathFunction = (a:number , b:number) => number
// interface mathFunction {
//     (a: number, b: number): number
// } 

let multiply: mathFunction = function (c,d){
    return c*d
}

logMsg(multiply(2,3))

// optional parameters

const addAll = (a:number, b:number ,c?:number) : number => {
    if(typeof c !== 'undefined'){
        return a +b +c
    }
    return a + b
}

// default param value
const sumAll = (a:number = 10, b:number ,c:number = 2) : number => {
    return a + b + c
}

logMsg(addAll(2,3,2))
logMsg(addAll(2,3)) 
logMsg(sumAll(2,3))
logMsg(sumAll(undefined,3))

// Rest parameters

const total = (a:number,...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(1,2,3,4))

const createError = (errMsg: string):never =>{
   throw new Error(errMsg)
}

const infinite =()=>{
    let i: number = 1
    while (true){
        i++
        if (i>100) break
    }
}

//custom type guard
const isNumber=(value: any): boolean =>{
    return typeof value === "number"
         ? true :false 
}

//use of the never type
const numberOrString = (value: number | string): string=>{
    if (typeof value === 'string') return 'string'
    if(isNumber(value)) return 'number'
    return createError('This should never happen!')
}