/*
* OPERATORS
*
* Operators DO something to variables, like 'add', 'divide', etc.
*/

console.log('Increment and decrement:');

var i = 0;
console.log('i: ', i);
i++;
console.log('i++: ', i);
i+=1;
console.log('i+=1: ', i);
i--;
console.log('i--: ', i);
i-=1;
console.log('i-=1: ', i);

console.log('\n\nUnary operators:');

console.log('Addition: 1 + 1:', 1 + 1);
console.log('Subtraction: 1 - 1:', 1 - 1);
console.log('Multiplication: 2 * 2:', 2 * 2);
console.log('Division: 4 / 2:', 4 / 2);
console.log('Remainder: 5 % 2:', 5 % 2);

console.log('\n\nThe \'NOT\' operator (!)');

var PMisATwat = true;
console.log('PMisATwat: ', PMisATwat);
console.log('!PMisATwat: ', !PMisATwat);

console.log('\n\nThe \'typeof\' operator');

var string = 'string';
var int = 2;
var float = Math.PI;
var arr = [];
var func = function(){};
var obj = {};
console.log('typeof string: ', typeof string);
console.log('typeof int: ', typeof int);
console.log('typeof float: ', typeof float);
console.log('typeof arr: ', typeof arr);
console.log('typeof func: ', typeof func);
console.log('typeof obj: ', typeof obj);

console.log('\n\nThe DELETE operator (removes a property from an object)');
obj.name = "ed";
obj.bike = true;
console.log('Object with properties', obj);
console.log('Now delete(obj.bike)')
delete(obj.bike);
console.log('Object with properties after delete', obj);

/*

Binary logical operators

Logical operators are typically used with boolean (logical) values, and when they are, they return a boolean value.

&&
Logical AND.
||
Logical OR.
Conditional (ternary) operator

(condition ? ifTrue : ifFalse)
The conditional operator returns one of two values based on the logical value of the condition.

Assignment operators

An assignment operator assigns a value to its left operand based on the value of its right operand.

=
Assignment operator.
*=
Multiplication assignment.
/=
Division assignment.
%=
Remainder assignment.
+=
Addition assignment.
-=
Subtraction assignment


<
Less than operator.
>
Greater than operator.
<=
Less than or equal operator.
>=
Greater than or equal operator.
Equality operators

The result of evaluating an equality operator is always of type Boolean based on whether the comparison is true.

==
Equality operator.
!=
Inequality operator.
===
Identity operator.
!==
Nonidentity operator.

http://www.maritimejournal.com/__data/assets/pdf_file/0020/1033940/Javascript-The-Good-Parts.pdf

*/
