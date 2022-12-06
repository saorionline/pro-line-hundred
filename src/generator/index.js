
function* gen() {
    yield 1;
    yield 2;
    yield 3;
} 

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterate(array){
    for (let value of array){
        yield value
    }
}

const passList = iterate(["rocky", "dash", "lily", "carl"]);
console.log(passList.next().value);
console.log(passList.next().value);
console.log(passList.next().value);
console.log(passList.next().value);
console.log(passList.next().value);
console.log(passList.next().value);