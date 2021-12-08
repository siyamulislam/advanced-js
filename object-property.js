const student = [
    {id:1,name:"Suliyman Sha"},
    {id:2,name:"Entugurul Bim"},
    {id:3,name:"Gundaru Bey"},
    {id:4,name:"Osman Bey"}
]
// const sName=[]
// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     sName.push(element.name)
// }
// console.log(sName);

const names = student.map(s=>s.name);
const ids = student.filter(sid=>sid.id>2);
console.log(names);
console.log(ids);




