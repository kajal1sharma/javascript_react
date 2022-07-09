//Array

// let arr=[1,2,3,4,5];
//  console.log("length",arr.length);

// //rest operator 
// function printAllValues(...arr){
   

// console.log(arr)

// for( let i =0 ;i<arr.length;  i++){

//     console.log("element number "+i +" = "+ arr[i])
  
// }

    // console.log(arr[0])
    // console.log(arr[1])
    // console.log(arr[2])
    // console.log(arr[3])
    // console.log(arr[4])
//}
//change data=> code will reamin same=> loop

// printAllValues(10,23,4,456,587,78);

// function add(a, b, ...arr){
// console.log(b);
// let sum=0;
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i];
// }
// return sum;
// }


// console.log(add("add it " ,"sdfskd", 2 ,34, 4, 4));


// let arr=[2,4,6,8,10];

// let arr2=new Array(1,2,3,4,5);

function checkEven(ele){
    return ele%2==0
}


function ArrClass(...rest){

    this.arr=rest;
    this.print=function(){
        for(let i=0;i<this.arr.length;i++){
            console.log(this.arr[i]);
        }
    }
   
    this.every=function(argFun){
        
                    let finalResult=false;
                    for(let i=0;i< this.arr.length;i++){
                        let result=argFun(this.arr[i]);
                        if(result===false){
                            return false;
                        }
                        else{
                            finalResult=true;
                        }
                    }
                    return finalResult;
                }

this.everyPrint=function(printfunc){
                    for(let i=0;i< this.arr.length;i++){
                        printfunc(this.arr[i])
                    }
                }

}

//user defined
function print(ele){
    console.log("printing : "+ele)
}
let myobj= new ArrClass(2,22,42,4,6);
//myobj.print();
myobj.everyPrint(print)
console.log(myobj.every(checkEven));


























































