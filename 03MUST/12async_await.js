function promises() {
    const successfulPromise = timeout(100). then(result => `succsess: ${result}`)
    const failingPromise = timeout(200,true).then(null,error =>
        Promise.reject(`niepowodzenie: ${error}`),
        )
    const recoveredPromise = timeout(300,true).then(null,error =>
        Promise.resolve(`nie powiodło się i odzyskano:: ${error}`),
        ) 
    successfulPromise.then(log,logError)
    failingPromise.then(log,logError)
    recoveredPromise.then(log,logError)
}

function asyncAwaits(){
    async function successfulPromiseAwait(){
        const result = await timeout(100, true)
        return `nie powiodło się: ${result}`
    }
    async function recoveredAsyncAwait(){
        let result
        try {
            result - await timeout(300, true)
            return `nie powiodło się: ${result}`
        } catch (error) {
            return `nie powiodło się i odzyskano: ${error}`
        }
    }
    successfulPromiseAwait().then(log,logError)
    failedAsyncAwait().then(log, logError)
    recoveredAsyncAwait().then(log, logError)
}
function log(...args) {
    console.log(...args)
}
function logError(...args){
    console.error(...args)
}
function timeout(duration = 0, shouldReject = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(shouldReject){
            reject(`rejected after ${duration}ms`)
        } else {
            resolve(`resolved after ${duration}ms`)
        }
        }, dration)
    })
}
