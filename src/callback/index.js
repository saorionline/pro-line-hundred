function sum(num1, num2) {
    return num1 + num2;
}

function add(num1, num2, addition) {
    return addition(num1, num2);
}

console.log(add(2,2,sum));

setTimeout(function () {
    console.log('Hi Dear Machine');
},2000)

function greeting (logicName) {
    console.log(`How are you ${logicName}`);
}

setTimeout(greeting, 2000, 'Alexa');

// new deal

function myFunc(callback){
    setTimeout(callback, 2000)
    console.log("wait")
}