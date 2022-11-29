

function calculate(){
    let output = document.querySelector('output');
    let firstNum = parseFloat(document.querySelector('#first-num').value);
    if(isNaN(firstNum)){
    throw "Invalid Input First Number";
    }
    let secondNum = parseFloat(document.querySelector('#second-num').value);
    if(isNaN(secondNum)){
    throw "Invalid Input Second Number";
    }
    let operator = document.querySelector('#operator').value;
    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
}
let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    try{
    calculate();
    }
    catch(err){
    console.warn("invalid input to calculator:  ");
    console.error(err);
    }
    finally{
    console.log("Done Calculating!");
    }
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// Start your code here
errorBtns[0].addEventListener('click', () => {
    //Console.log();
    console.log("Hey you, out there in the cold, getting lonely, getting old...");
});
errorBtns[1].addEventListener('click', () => {
    //Console.error();
    console.error("Can you feel me?");
});
errorBtns[2].addEventListener('click', () => {
    //Console.count();
    console.count();
});
errorBtns[3].addEventListener('click', () => {
    //Console.warn();
    console.warn("Hey you, standing in the aisles, with itchy feet and fading smiles");
});
errorBtns[4].addEventListener('click', () => {
    //Console.assert();
    pigs = 0;
    canFly = 1;
    console.assert((pigs > canFly), "Can you feel me?!");
});
errorBtns[5].addEventListener('click', () => {
    //Console.clear();
    console.clear();
});

pinkFloydRanks = {Animals: 1,
                "The Wall": 2,
                "Dark Side of the Moon": 3}
errorBtns[6].addEventListener('click', () => {
    //Console.dir();
    console.dir(pinkFloydRanks);
});
errorBtns[7].addEventListener('click', () => {
    console.dirxml(errorBtns[7]);
});
errorBtns[8].addEventListener('click', () => {
    //Console.groupstart();
    console.group("New Group!!!");
});
errorBtns[9].addEventListener('click', () => {
    //Console.groupend();
    console.groupEnd();
});
errorBtns[10].addEventListener('click', () => {
    //Console.table();
    console.table(pinkFloydRanks);
});
errorBtns[11].addEventListener('click', () => {
    //Console.timerstart();
    console.time();
});
errorBtns[12].addEventListener('click', () => {
    //Console.timerend();
    console.timeEnd();
});
errorBtns[13].addEventListener('click', () => {
    //Console.trace();
    function trace_this_func (){
    function inside(){
        console.trace()
    }
    inside();
    }
    trace_this_func();
});
errorBtns[14].addEventListener('click', () => {
    //Console.GLOBAL ERROR();
    for(let i = 0; i<10; i++){
    
    }
    console.log(i);
    
});
// You may move this JS to another file if you wish