
const students= [
   {name:'shakil', id:10}, 
   {name:'ahmed', id:20},
   {name:'nai' , id:25},

];
const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const finding = students.find(s => s.id<20);
const filtering= students.filter(s => s.id>10);
console.log(finding)