// var a=5;
// console.log(a);

// function sum(a,b){
// 	return a+b;
// }

// console.log("sum: " + sum(2));

function order(name){
	name =name || "whatever!";
	console.log("chicken with " + name);
}

order("noodle");
order();

// var a=5;
// var b=a;

// console.log("before a:" + a);
// console.log("before b:" + b);
//  b=6;
// console.log("after a:" + a);
// console.log("after b:" + b);

// var c = {
// 	x: 5
// }

// var d = c;
// console.log("before d:" + d.x);
// console.log("before c:" + c.x);
// d.x=7;

// console.log("before a:" + c.x);
// console.log("before a:" + d.x);

// var message="in globale";
// console.log("globale message: " + message);

// var a = function(){
// 	var message ="inside";
// 	console.log("a: message: " + message);

// 	function b(){
// 		console.log("b: message: " + message);
// 	}
// 	b();
// }
// a();

var str1="hello";
str1+=" world";

console.log(str1 + "!");
