console.log('This is tut51_iterators.js')

//Iterator function
function fruitsIterator(values){
    let nextIndex = 0;
    //we will return an object
    return{
        next: function(){
            if(nextIndex < values.length){
                return{
                    value: values[nextIndex++],
                    done: false
                }              
            } else {
                return{
                    done: true
                }
            }
        }
    }
}

const myArray = ['Apples', 'Grapes', 'Oranges', 'Bhindi']
console.log("My array is ", myArray)

//using the iterator
const fruits = fruitsIterator(myArray)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)


