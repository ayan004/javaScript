console.log('This is tut48_RegularExpressions-CharacterSets.js')

//Regular Expressions
    //Basic Functions
    //Metacharacter Symbols
    //Character Sets

let reg = /ayan/;

//Character Sets
reg = /ay[iaez]n/; //[iaez] indicates can be anything i,a,e or z
reg = /a[i-z]an/; //[i-z] indicates can be anything from i to z  
reg = /a[^bcdfg]an/; //[^bcdfg] indicates that particular character should not be within b,c,d,f and g
reg = /a[^bcdfg]a[a-z]/; //one regular expression literal can include more than one character set 
reg = /a[^bcdfgA-Z]a[a-zA-Z0-9]/; //[a-zA-Z0-9]indicates this character set includes a to z, A to Z and 0 to 9
reg = /a[^bcdfgA-Z]a[a-zA-Z0-9][567]/; //this expression indicates you can have as many as character sets you want in an expression

//Qualifiers - we use {}
reg = /aya{1}n/; //a{1} -> number of a should be 1
reg = /aya{2,4}n/; //a{2,4} -> number of a should be from 2 to 4 

//Groupings - we use parenthesis for groupings
reg = /(aya){2}/; //(aya){2} -> (aya)should occour 2 times

//below expression contain different character set including qualifiers, groupings 
reg = /(aya){2}f[5-9][c-g]a{2}/;

let str = "ayan is a good boy and ayaayaf7eaan6 is a bhola bacha";

let result = reg.exec(str);
console.log("The result from exec is ",result);

if(reg.test(str)){
    console.log(`The string "${str}" include the expression "${reg.source}"`)
} else {
    console.log(`The string "${str}" does not include the expression "${reg.source}"`)
}