
var bobPerson = {
	name: 'Bob',
	age : 13
};

var maryPerson = {
	name: 'Mary',
	age : 34
};

var suziePerson = {
	name : 'Suzie',
	age : 80
};

var people =[bobPerson, maryPerson, suziePerson];

// var forEach = function(array, fn) {
//   var next = function(array, n, fn) {
//     if (n < array.length) {
//       fn(array[n]);
//       next(array, n+1, fn);
//     }
//   };
//   next(array, 0, fn);
// };

// var fruits = ['60 limes', '8 lemons', '12 oranges'];
// var purchasedFruits = ['40 limes', '8 lemons', '12 oranges'];

// forEach(fruits, function(fruit) {
//   console.log("I need to purchase " + fruit + ".");
// });

// forEach(purchasedFruits, function(fruit) {
//   console.log("I purchased " + fruit + " today.");
// });


var newAge = function (element, index, array) {
	console.log(index);
}

var updateAge = function(array) {
	var n = 0;
	// array.prototype.forEach(newAge(n));
	newAge(array);
	// return newAge
}; 

updateAge(people)

// forEach(people, updateAge);

// describe('updateAge', function() {
//   it('add one year to ever persons previous age', function() {
//     expect(bobPerson.age).to.deep.equal(14);
//     expect(maryPerson.age).to.deep.equal(35);
//     expect(suziePerson.age).to.deep.equal(81);
//   });
// });
