console.log('This is tut47_RegularExpressionsMetacharacters.js')

let reg = /ayan/;

//below is some examples of metacharacter symbols
reg = /^ayan/; // ^ at the starting of the reg means string starts with
reg = /cha$/; // $ at the end of the reg means string ends with
reg = /ay.n/; // in place of dot(.) you can put any single character and then try to find in the 'str' 
reg = /ay*n/; //in place of * you can put any number of character from 0 to infinite and then try to find in the 'str'
reg = /ayi?any?/; //the existance of 'i' and 'y' are optional
reg = /ayan\(/; // putting '\' before any metacharacter, makes the metacharacter lose its property and work like a normal character 

let str = "ayan( is a good boy and ayan( is a bhola bacha";

let result = reg.exec(str);
console.log("The result from exec is ",result);

if(reg.test(str)){
    console.log(`The string "${str}" include the expression "${reg.source}"`)
} else {
    console.log(`The string "${str}" does not include the expression "${reg.source}"`)
}