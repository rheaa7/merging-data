
/* 
    app.js
    Angular application for the address book challenge

    Add code here to create a new Angular application and controller.
    The array of employee objects is already in a global variable named 'pawneeEmployees'

*/

"use strict";

angular.module('AddressBook', [])
	.controller('AddressController', function($scope) {
		//initialize variable with list of employees such that it'll be accessed in the view
		$scope.employees = pawneeEmployees;
		$scope.order = 'lastName';

	});