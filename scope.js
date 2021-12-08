let extra= 20
function sum(first,second) {
    let result =first+second+extra
    if(result>50){
        let mode="happy"
    }
console.log(extra);
    return result
}
//let & const is block scope
//but var is multilevel scope to parent
const out= sum(45,4)
console.log(out);