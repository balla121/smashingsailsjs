/**
* Contact.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	type: {
  		type: 'string',
  		enum: ['mobile', 'work', 'home', 'skype', 'email'],
  		required: true,
  		size: 16
  	},
  	value: {
  		type: 'string',
  		size: 128,
  		required: true
  	},
  	person: {
  		model: 'Person',
  		required: true
  	}
  }
};

