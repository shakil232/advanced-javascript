
const number =[5,4,8,9,6];
// const squre = [];
// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     const result = element * element;
//     squre.push(result)
    
// }
// console.log(squre)

// const maping = number.map(function(element){
//     return element*element;
// })

// const squer = element=> element*element
// console.log(squer)
const maping = number.map( x=> x*x );
// console.log(maping)
const filtering  = number.filter( x=> x>8 );
// console.log(filtering)
const filtering2  = number.filter( x=> x<8 );
// console.log(filtering2)

const finding  = number.find( x=> x>4 );
// console.log(finding)

