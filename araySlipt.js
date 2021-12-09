const num = [1,2,3,4,5,6,7,8,9,10];
const part = num.slice(1,1); //slice= (start to endBoundary index)
console.log(num);
console.log(part);

const remove = num.splice(1,3,45); //splice = start index  to ,how many to delete, inject elements
console.log(remove);
console.log(num);
const together=num.join(" ~ ")
console.log(together);