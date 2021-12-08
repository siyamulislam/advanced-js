const num = [3,4,5,6,7,8,9]
//____________way 1________________
// const out = []
// for (let i = 0; i < num.length; i++){
//     const element = num[i]
//     const result = element*element
//     out.push(result)
// }
// console.log(out);
//____________way 2________________
// function square(x) {
//     return x*x 
// }
// const sq = num.map(square)
// console.log(sq); 
//____________way 3________________
const sq = num.map(x=>x*x);
console.log(sq);
//____________filter________________
const broVai = num.filter(x=>x>6);
console.log(broVai);
//____________find________________
const isThere = num.find(x=>x>6);
console.log(isThere);