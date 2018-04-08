(function () {
    'use strict';

    var calendarForm = document.getElementById("calendarForm"),
        calendarFormSubmit = function (event) {
            event.preventDefault();
        };

    calendarForm.addEventListener("submit", calendarFormSubmit);
})();
