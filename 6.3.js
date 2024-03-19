//CLOSURES//
// var sayBye = function (name) {
//     var text = 'Bye,' + name;
//     return () =>{
//         console.log(text);
//     }
// }
// sayBye('Me');
// var calledMe = sayBye('Me');
// calledMe();

// // CURRY//
// function add(a,b,c){
//     return a+b+c;
// }

// console.log(add(1,2,3));
// function addCuries(a){
//     return (b) => {
//         return (c) => {
//             return a + b + c;
//         }
//     }
// }
// console.log(addCuries(1)(2)(3));
// const ad1 = addCuries(1);
// const ad2 = ad1(2);
// const ad3 = ad2(4);

// console.log(ad3);

// //THIS//
// var student = {
//     name: 'Mai Ha Thi',
//     getName: function(){
//         console.log(this.name);
//         return this.name;
//     }
// };
// var _deStudent = student.getName();

// SCOPE CHAIN
// function step1(){
//     console.log(te);
// }

// function step2 () {
//     var te = 2;
//     step1();
// }
// step2();
// var te = "Global varibles";

 //LEXICAL SCOPE
// function fOuter(){
//     var x = "Hello";
//     function fInner(){
//         x = "World";
//     }
//     fInner();
//     return x;
// }
// document.write(fOuter());

// LEXICAL SCOPE
// var myFunction = function(){
//     var name = 'Ha Thi';
//     var myOtherFunction = function(){
//         console.log(' I am ' + name);
//     };
//     console.log(name);
//     myOtherFunction();
// };
// myFunction();

//Bind
// var checkNumericRange = function(value){
//     if(typeof value !== 'number')
//     return false;
// else
// return value>=this.minimum && value <= this.maximum;
// }
// var rage = { minimum: 10, maximum: 20 };
// var boundCheckNumericRange = checkNumericRange.bind(range);
// var result = boundCheckNumericRange(12);
// document.write(result);

//CALL APPLY
var sayHello = function(){ alert('Hello,' + this.name);};
var sayGoodbye = function(){ alert('Goodbye,'+ this.name);};
sayHello.call(person1);
sayGoodbye.call(person2);
sayHello.apply(person1);
sayGoodbye.apply(person2);

//
