$(document).ready(function() {

	var weekday = new Array(7);
	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
	
	

	function calculateDate(refDate) {
		var fromDate = new Date();
		if(refDate){
			fromDate = new Date(refDate);
		}
		
		var dayString, dayNumber, date;
		var currentDay = fromDate.getDate();
		var currentMonth = fromDate.getMonth() + 1;
		var currentYear = fromDate.getFullYear();
		console.log(fromDate.getFullYear() + "-" + fromDate.getMonth() + "-" + fromDate.getDate());

		var dayCount = new Date(currentYear, currentMonth, 0).getDate();
		for (var i = 0; i < 7; i++) {

			if (dayCount < (currentDay + i)) {
				currentDay = 1;

				if (currentMonth === 12) {
					currentMonth = 1;
					currentYear += 1;
				} else {
					currentMonth += 1;
				}

			} else {
				currentDay++;
			}

			console.log(currentMonth + "/" + currentDay + "/" + currentYear);
			var newDateString = currentMonth + "/" + currentDay + "/" + currentYear;
			var newDate = new Date(newDateString);
			dayString = weekday[newDate.getDay()];
			console.log(dayString);
			if (dayString === 'Tuesday') {
				fromDate = newDateString;
				break;
			}
		}
		return newDateString;
	}

	function calculateFutureDate(fromDate) {
		
		var toDate = new Date(fromDate);
		var dayString, dayNumber, date;
		var currentDay = toDate.getDate();
		var currentMonth = toDate.getMonth() + 1;
		var currentYear = toDate.getFullYear();
		console.log(toDate.getFullYear() + "-" + toDate.getMonth() + "-" + toDate.getDate());

		var dayCount = new Date(currentYear, currentMonth, 0).getDate();
		
		for (var i = 0; i < 91; i++) {
			var cnt = currentDay + 1;
			if (dayCount < cnt) {
				currentDay = 1;

				if (currentMonth === 12) {
					currentMonth = 1;
					currentYear += 1;
				} else {
					currentMonth += 1;
				}

			} else {
				currentDay++;
			}
			
			var newDateString = currentMonth + "/" + currentDay + "/" + currentYear;
			var newDate = new Date(newDateString);
			dayString = weekday[newDate.getDay()];
			console.log(i);
			console.log(currentMonth + "/" + currentDay + "/" + currentYear +" : "+dayString);		
			
		}
		return newDateString;
	}

	fromDate = calculateDate();
	toDate = calculateDate(calculateFutureDate(fromDate));
	$('#fromDate').val(fromDate);
	$('#toDate').val(toDate);

});
