console.log('this is tut43 on async/await'); 

function makeRequest(location){
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`)
        if(location === 'Facebook'){
            resolve('Facebook says Hi')
        } else {
            reject('We can only talk to Facebook')
        }
    })
}

function processRequest(response){
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra Information + ${response}`)
    })
}

// makeRequest('Facebook').then(response => {
//     console.log('Response received')
//     return processRequest(response)
// }).then(processedResponse => {
//     console.log(processedResponse)
// }).catch(err => {
//     console.log(err)
// })

//This doWork() function does the same work as the above commented out code written with then and catch

async function doWork(){
    try{
        const response = await makeRequest('Google')
        console.log('Response received')
        const processedResponse = await processRequest(response)
        console.log(processedResponse)    
    } catch (error){
        console.log('test')
        console.log(error)
    }
}

doWork()