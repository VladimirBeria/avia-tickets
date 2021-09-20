const promise = new Promise(random)

console.log(promise)
promise
    .then(x => {
        console.log(x)
        return x
    })
    .then(y => console.log(y))
    .catch(err => console.log(err))

function random(resolve, reject) {
    setTimeout(() => reject('err'), 3000)
}