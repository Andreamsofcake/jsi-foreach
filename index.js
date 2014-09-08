
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


var updateAge = function(array, yearsAdded, index) {
	array[index].age += yearsAdded;
	console.log (array[index]);
};

for (person in people) {
	updateAge(people, 1, person);
}

// forEach(people, updateAge);

// describe('updateAge', function() {
//   it('add one year to ever persons previous age', function() {
//     expect(bobPerson.age).to.deep.equal(14);
//     expect(maryPerson.age).to.deep.equal(35);
//     expect(suziePerson.age).to.deep.equal(81);
//   });
// });
