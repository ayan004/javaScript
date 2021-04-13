console.log('This is tut44_ErrorHandling&TryCatchFinally.js')

let a = 4;
if(a === 5  ){
    throw new Error('This is undefined')
} else {
    console.log('This is not undefined')
}

// console.log('This is the end of this page')

// ultabhai()  --if ultabhai() is called here, then below code should not have run

try{
    ultabhai()
} catch(error){
    console.log(`This is an error - ${error}`)
} finally {
    console.log('This is the end of this page')
}

