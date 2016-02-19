/**
 * PersonController
 *
 * @description :: Server-side logic for managing people
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	findOne: function (request, response) {
		Person.find(request.params.id).exec(function(error, persons){
			var person = persons[0];
			person.fullName = person.firstName + ' ' + person.lastName;
			response.json(person);
		});
	}
};

