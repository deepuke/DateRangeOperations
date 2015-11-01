(function() {
	'use strict';

	angular.module('tableApp').controller('tableCtrl', tableController);
	tableController.$inject = [];
	function tableController() {
		var _self = this;

		this.addRow = function(id) {
			_self.persons.splice(3, 0, {

				flag : true,
				details : {
					id : id,
					desc : 'desctipton 2',
					remark : 'remark 2'
				}
			});
		};
		
		this.removeRow = function(id){
			_self.persons.splice(3, 1);
		};

		this.person = [];

		_self.persons = [{
			flag : false,
			id : 1,
			name : 'Deepu',
			age : '32'
		}, {
			flag : true,
			details : {
				id : 1,
				desc : 'Description 1',
				remark : 'Remark 1'
			}
		}, {
			flag : false,
			id : 2,
			name : 'Anisha',
			age : '25'
		}, {
			flag : false,
			id : 3,
			name : 'Chandrika',
			age : '59'
		}];
	}

})();
