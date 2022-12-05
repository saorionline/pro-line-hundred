const promise = new Promise(function (resolve, reject){
    resolve('correct!')
});

const cows = 9;

const countCows = new Promise(function(resolve, reject){
    if (cows>10){
        resolve(`There are ${cows} cows`); 
    } else {
        reject("Unexistant");
    }
});

countCows.then((result)=>{
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('End'));