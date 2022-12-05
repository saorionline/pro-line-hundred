const functionAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(()=> resolve('Async!'), 2000)
            : reject( new Error('Error'));
    });
}

const secondFunction = async () => {
    const myHashyBul = await functionAsync();
    console.log(secondFunction);
    console.log("Hello")
}

console.log('Before');
secondFunction();
console.log('After');