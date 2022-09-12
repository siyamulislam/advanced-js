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

//char Set  []
re = /h[ea]llo/; // [] must be any one from the bracket
re = /h[^ia]llo/; // [] anything except from the bracket
re = /^[hea]ello/; // [] must start any one from the bracket
re = /[a-z]ello/; // [] any one a to z from the bracket
re = /^[A-W]/; // First later must be capital ZSiam";
re = /[A-Za-z]ello/; // any A-Z or a-z0-9A-Z or a-z
re = /[0-9]ello/; // any 0-9
re = /[0-9][0-9][0-9]ello/; // multiple digit
re = /^[0-9]ello/; // any must 0-9
re = /[^0-9]ello/; // any expect 0-9

//Braces {} - Quantifier
re=/hel{3}o/; // l must me 3 times
re = /[0-9]{10}/; // 10 digit
re = /[0-9]{|3,5}/; // range 3- 5
re = /[0-9]{3,}/; // at least 3 times
re = /^[0-9]{2,5}$/; // only 2-5 digit
re = /^[0-9]{0,3}(\.(00|50)?)$/; // not more than 3 digits and can have decimal that is either .50 or .00

//Parentheses () - grouping
re =/^([0-9]){3}/ //start with only 3  digits
re =/^01([0-9]){9}$/ //bd number match 11 digit  only
re =/^\+8801([0-9]){9}$/ // number match 11 digit  with country code
re = /^([0-9]x){3}/ //2x9x8x9x match pattern like this
str="2x9x8x9x";

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