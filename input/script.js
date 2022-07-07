
let inputEle = document.getElementById('input');
let buttonEle =document.getElementById('button')
let nameStudent='sdsd';


function getName(event){
    // console.log(event.target)
    // console.log(event.target.value)
    nameStudent = event.target.value;
}

function printIt(event){
    console.log(nameStudent);
}
inputEle.addEventListener('change',getName)
// inputEle.addEventListener('click',printIt)

buttonEle.addEventListener('click', printIt);