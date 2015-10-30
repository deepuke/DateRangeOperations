$(document).ready(function() {

	var weekday = new Array(7);
	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";

	var toDate, fromDate = new Date();
	var dayString, dayNumber, date;
	var currentDay = fromDate.getDate();
	var currentMonth = fromDate.getMonth() + 1;
	var currentYear = fromDate.getFullYear();

	console.log(fromDate.getFullYear() + "-" + fromDate.getMonth() + "-" + fromDate.getDate());

	var dayCount = new Date(currentYear, currentMonth, 0).getDate();

	function calculateDate() {
		for (var i = 0; i < 7; i++) {

			if (dayCount < (currentDay + i)) {
				currentDay = 1;

				if (currentMonth == 11) {
					currentMonth = 0;
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
	fromDate = calculateDate(); 
	toDate = fromDate; //calculateFutureDate(fromDate);
	$('#fromDate').val(fromDate);
	$('#toDate').val(fromDate);

});
