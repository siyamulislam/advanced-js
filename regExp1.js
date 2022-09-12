let re;
let str;
//literal Character
re=/llo/;
re=/llo/i; //i mean case sensitive
//meta Character
re=/^hello/i; //must start with
re=/world$/i; //must end with
re=/w..ld$/i; //dot match with any character 
re=/he?l?l?o/; // ? mean optional prev char
re=/he?l?l?o\??/; // escaping ? and check it

str="Hello World";
str="Hello Wrrld";
str="hlo!";

console.log(re.exec(str));
reTest(re,str);
function reTest(re,str) {
    if(re.test(str)){
         console.log(`'${str}' matches '${re.source}'`);
    }
    else {
         console.log(`'${str}' dose not match '${re.source}'`);
    }
}