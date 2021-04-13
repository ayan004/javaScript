console.log('tut49_RegularExpressions-ShorthandCharacterClasses.js')

//character classes
let reg = /\wood/; //\w indicates a word character. A word character -> _ or alphabet or numbers
reg = /\w+od/; //'\w+' -> one or more word character
reg = /\Wgood/; //'\W' -> non-word character
reg = /\W+good/; //'\W+' -> one or more non-word character
reg = /\d is/; //'\d' -> indicates digit
reg = /\d+7ea/; //'\d+' -> indicates one or digit
reg = /\Daaya/; //'\D' -> indicates non-digit
reg = /\D+aaya/; //'\D+' -> indicates one or more non-digit
reg = /\sgood/; //'\s' -> indicates whitespace character
reg = /\s+good/; //'\s+' -> indicates one or more whitespace character
reg = /\Sood/; //'\S' -> indicates non-whitespace character
reg = /\S+ood/; //'\S+' -> indicates one or more non-whitespace character
reg = /good\b/; //'\b' -> word boundary

//Assertions
reg = /i(?=sa)/; //(?=sa) -> indicates after 'i' there should be 'sa'
reg = /go(?!od)/; //(?!od) -> indicates after 'go' there should not be 'od'

let str = "ayan isagood boy go and ayaayaf787eaan6 is a bhola bacha";

let result = reg.exec(str);
console.log("The result from exec is ",result);

if(reg.test(str)){
    console.log(`The string "${str}" include the expression "${reg.source}"`)
} else {
    console.log(`The string "${str}" does not include the expression "${reg.source}"`)
}