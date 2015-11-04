(function() {
	'use strict';

	angular.module('tableApp').controller('tableCtrl', tableController);
	tableController.$inject = [];
	function tableController() {
		var _self = this;

		this.person = [];

		this.calculate, this.toggleDetailsView;

		_self.calculate = function() {
			for (var i = 0; i < _self.persons.length; i++) {
				if (_self.persons[i].selected && !checkItemExist('id_' + _self.persons[i].id)) {

					var newObj = {
						id : 'id_' + _self.persons[i].id,
						showFlag : true,
						toggleFlag : false,
						details : {
							desc : 'description ' + 'id_' + _self.persons[i].id,
							remark : 'remark ' + 'id_' + _self.persons[i].id
						}
					};
					_self.persons.splice((i + 1), 0, newObj);
					_self.persons[i].showDropIcon = !_self.persons[i].showDropIcon;

				}
			}
		};

		function checkItemExist(id) {
			var flag = false;
			for (var i = 0; i < _self.persons.length; i++) {
				if (_self.persons[i].id === id) {
					flag = true;
					break;
				}
			}
			return flag;
		}


		this.toggleDetailsView = function(index) {
			_self.persons[index + 1].toggleFlag = !_self.persons[index + 1].toggleFlag;
		};

		_self.persons = [{
			selected : false,
			showFlag : false,
			showDropIcon : false,
			id : '1',
			name : 'Deepu',
			age : '32'
		}, {
			selected : false,
			showFlag : false,
			showDropIcon : false,
			id : '2',
			name : 'Anisha',
			age : '25'
		}, {
			selected : false,
			showFlag : false,
			showDropIcon : false,
			id : '3',
			name : 'Chandrika',
			age : '59'
		}];
	}

})();
