(function(){
	'use strict';
	
	angular.module('dateApp').controller('dateController', dateController);
	
	dateController.$inject=['$scope', '$filter'];
	
	function dateController($scope, $filter){
		$scope.date = {};
		$scope.date.fromDate = new Date().getTime();
		
		
		
	}
	
})();
