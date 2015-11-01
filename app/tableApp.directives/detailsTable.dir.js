(function(){
	'use strict';
	
	angular.module('tableApp').directive('detailsTable', detailsTable);
	
	function detailsTable(){
		var directive = {
			restrict : 'EA',
			replace:true,
			scope : {
				details : '='
			},
			templateUrl : 'app/tableApp.templates/descTable.html',
			controller : detailTableCtrl,
			controllerAs : 'ctrl',
			bindToController : true
		};
		
		return directive;
		
		function LinkFn(scope, el, attr, ctrl){
			//console.log(scope.details);
		}
	}
	
	function detailTableCtrl(){
		var _self = this;	
		console.log(_self.details);
	}
})();
