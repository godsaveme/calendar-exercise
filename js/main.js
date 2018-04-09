(function (m) {
    'use strict';

    var calendarForm = document.getElementById("calendarForm"),
        startDate = document.getElementById('startDate'),
        daysNumber = document.getElementById('daysNumber'),
        momentStartDate,
        momentEndDate,
        years,
        months,
        calendarFormSubmit = function (event) {
            event.preventDefault();
            calendarDataCalculation();
        };
        
    calendarForm.addEventListener("submit", calendarFormSubmit);

    function calendarDataCalculation() {
        momentStartDate = m(startDate.value);
        momentEndDate = m(startDate.value).add(daysNumber.value, 'd');
        years = momentEndDate.year() - momentStartDate.year() + 1;
        months = momentEndDate.month() - momentStartDate.month() + 1;
    }
})(moment);
