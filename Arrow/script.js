//console.log("Arrow fucntion")


// function printSchoolName(){
//     return "DPS"
// }

// const printIT= ()=>{
//     return "DPS"
// }

// const printIT2 =function (){

// }
//if single line code dont write return => implicit return 

//const printIT =(name, place)=> `my school is ${name} in ${place}`;
// const printIT=place=>`my place is ${place}`

// console.log(printIT("Delhi"));
// let name=printIT("Delhi");

// (function(){
// console.log("hi inside anonymous function")
// })()

//SINGLETON 


// let object= {};
// console.log(object)
//key value
//key=> name of properties and methods
//values 

let name="priya"

//let object={name:"neha" , place :"delhi" , class:"5th"}

// let object2={name:"neha2 ",
//  lastname: "sharma",
// getInfo:function(){
//     console.log("this is this " ,this)
//     console.log(`hello ${this.name} ${this.lastname}`)}
// }
// let object3=object2;
// object2.place="jaipur"
// object3.place="pune"
// console.log(object3)
// console.log(object2)
// console.log(object2.name)
// console.log(object2['name'])

// object2.getInfo()
//object2['getInfo']()
//console.log(object)


// function MyObject(){
//     let object={name:"neha2 ",
//      lastname: "sharma",
//     getInfo:function(){
//         // console.log("this is this " ,this)
//         console.log(`hello ${this.name} ${this.lastname}`)}
//     }
//     return object;
// }

// let a=MyObject();
// a.name="priya"
// a.getInfo()
// let b =MyObject();
// b.name="amit";
// b.getInfo()
// console.log(a,b)

// function  MyObject(){
//     this.name="priya",
//     this.place="delhi"
//     this.getInfo=()=>{
//         return `${this.name} from ${this.place}`
//     }
// }

function Address(houseno, block){
    this.houseno=houseno,
    this.block=block
}

function  MyObject(name, place, houseno, block){
    this.name=name,
    this.place=place,
    this.marks=[23,23,34,43,23],
    this.address=new Address(houseno, block)
    this.getInfo=()=>{
        return `${this.name} from ${this.place}`
    }
}

let obj1=new MyObject("priya", "delhi","34","A");
let obj2=new MyObject("amit", "pune","89","p");
console.log(obj1, obj2);


































