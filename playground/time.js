const moment = require('moment');


// var date = new Date();
// var months = ['Jan'];
// console.log(date.getMonth());

var date = moment();
date.add(19, 'years').subtract(9, 'months')
console.log(date.format('MMM Do, YYYY'));
console.log(date.format('HH:mm'));
