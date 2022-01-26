//alert("Hello my js")
var table=true;
let chair="One chair"
console.log(table);
console.log(chair);
let testBoolean=true;
console.log(testBoolean);
let testNumber=10;
console.log(testNumber);
let testString="Hello ma´friend";
console.log(testString);
let testBooleanObject=new Boolean(true);
console.log(testBooleanObject);
let testNumberObject=new Number(10);
console.log(testNumberObject);

let testStringObject=new String("Text");
console.log(testStringObject);

let nameObj="Mihai";
let surname="Aurelian";
let age=23;
/*let question=`How old is ${nameObj} ${surname}`;
let answer=" he is "+age+" years old"
console.log(question);
console.log(answer);*/
let question="How are you ".concat(nameObj)+" ".concat(surname);
console.log(question);

let operator_a=12;
let operator_b=5;
let sum=operator_a+operator_b;
let rest=operator_a-operator_b;
let mult=operator_a*operator_b;
let div=operator_a/operator_b;
console.log(sum);
console.log(rest);
console.log(mult);
console.log(div);

let expo=operator_a**operator_b;
let incr=operator_a+1;
let decr=operator_a--;

console.log(expo);
console.log(incr);
console.log(decr);

console.log(operator_a+=5);
console.log(operator_a-=5);
console.log(typeof(testBoolean));
console.log(typeof(testStringObject));
let testNull=null;
console.log(typeof(testNull));
let testUndefined;
console.log(testUndefined);

var first_array=[];
var second_array=new Array(3);
var third_array=new Array(3,5);
var fourtg_array=new Array(3,5,"Seville",true,third_array);
console.log(first_array);
console.log(second_array);
console.log(third_array);
console.log(fourtg_array);

console.log(third_array[1]);
console.log(fourtg_array[4],[0]);
console.log(fourtg_array.length);
console.log(fourtg_array.push("Spain"));
console.log(fourtg_array);
for(var i=0;i<fourtg_array.length;i++){
    console.log("Entramos en la iterqcion de "+fourtg_array[i]);
}
for(var i=fourtg_array.length;i>=0;i--){
    console.log("Entramos en la iterqcion de "+fourtg_array[i]);
}

var i=fourtg_array.length;
for(;i>=0;i--){
    console.log("Thiord iteration "+fourtg_array[i]);
}

fourtg_array.forEach(function(element){
    console.log("Fourth iteration "+element);
})




