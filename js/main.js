(function (m) {
    'use strict';

    var calendarForm = document.getElementById("calendarForm"),
        startDate = document.getElementById('startDate'),
        daysNumber = document.getElementById('daysNumber'),
        momentStartDate,
        momentStartDateIncremental,
        momentEndDate,
        years,
        months,
        daysOfTheWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        calendarFormSubmit = function (event) {
            event.preventDefault();
            calendarDataCalculation();
        };

    calendarForm.addEventListener("submit", calendarFormSubmit);

    function calendarDataCalculation() {
        momentStartDate = m(startDate.value);
        momentStartDateIncremental = m(startDate.value);
        momentEndDate = m(startDate.value).add(daysNumber.value, 'd');
        years = momentEndDate.year() - momentStartDate.year() + 1;
        months = momentEndDate.month() - momentStartDate.month() + 1;

        calendarRender();
    }

    function calendarRender() {
        yearRender(years);
    }

    function yearRender(years) {
        for (var i = 0; i < years; i++) {
            
            var parentNode = document.createElement("div"),
                node,
                textNode;
            parentNode.classList.add("flex-container");
            document.getElementById("calendarRender").appendChild(parentNode);

            for (var a = 0; a < daysOfTheWeek.length; a++) {
                node = document.createElement("span");
                textNode = document.createTextNode(daysOfTheWeek[a]);
                node.appendChild(textNode);
                parentNode.appendChild(node);
            }

            monthRender(i);
        }
    }

    function monthRender(i) {
        var node,
            textNode;
        for (var j = 0; j < months; j++) {
            node = document.createElement("span");
            textNode = document.createTextNode((m(momentStartDate.month() + j, 'MM').format('MMMM')) + ' ' + (momentStartDate.year() + i));
            node.appendChild(textNode);
            document.getElementById("calendarRender").appendChild(node);
            document.getElementById("calendarRender").appendChild(document.createElement("br"));
            weekRender(j);
        }
    }

    function weekRender(j) {
        var node,
            textNode;
        while (momentStartDateIncremental.month() === momentStartDate.month() + j && momentStartDateIncremental < momentEndDate) {
            var parentNode = document.createElement("div");
            parentNode.classList.add("flex-container");
            document.getElementById("calendarRender").appendChild(parentNode);
            for (var k = 0; k < 7; k++) {
                if (momentStartDateIncremental.month() === momentStartDate.month() + j && momentStartDateIncremental < momentEndDate) {
                    if (momentStartDateIncremental.day() === k) {
                        node = document.createElement("span");
                        if (momentStartDateIncremental.day() === 0 || momentStartDateIncremental.day() === 6) {
                            node.style.backgroundColor = "yellow";
                        } else {
                            node.style.backgroundColor = "lightgreen";
                        }
                        textNode = document.createTextNode(momentStartDateIncremental.date());
                        node.appendChild(textNode);
                        parentNode.appendChild(node);
                        momentStartDateIncremental.add(1, 'd');
                    } else {
                        node = document.createElement("span");
                        textNode = document.createTextNode('');
                        node.appendChild(textNode);
                        parentNode.appendChild(node);
                    }
                }
            }
        }
    }

})(moment);
