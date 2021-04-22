const add = (a, b) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number') reject("Datatype Error")
            else resolve(a + b);
        }, 1000);
    })


add(3, 8).then(
    result => console.log(result),
    error => console.log(error)
);

let string = ''
console.log(!string);