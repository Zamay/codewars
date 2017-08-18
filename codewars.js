function CalendarTable(aDate, weekdays) {
    console.log('aDate', aDate);
    console.log('weekdays', weekdays);

    this.getLastDayMonth = function () {
        let end = new Date(aDate.getFullYear(), aDate.getMonth() + 1, 0);
        return end.getDate();
    };
    this.getStartWeekday = function () {
        let start = new Date(aDate.getFullYear(), aDate.getMonth(), 1);
        let wd = start.getDay();
        return (wd === 0) ? 7 : wd;
    };
    this.getDays = function () {
        let days = [];
        for (let i = 1; i <= this.getLastDayMonth(); i++) days.push(i);
        return days;
    };

    function emptyTD(td) {
        td.className = 'other';
        td.innerHTML = '-';
    }
    let today = new Date();

    function fillTD(td, day) {
        td.innerHTML = day;
        if (aDate.getFullYear() == today.getFullYear() && aDate.getMonth() == today.getMonth() && day == today.getDate()) {
            td.className = 'today';
        }
    }
    this.getTable = function () {
        let table = document.createElement('table');
        table.id = 'table-c';
        table.className = 'table table-bordered text-center';
        let tr = document.createElement('tr');
        let i;
        for (i = 0; i < weekdays.length; i++) {
            let th = document.createElement('th');
            th.innerHTML = weekdays[i];
            tr.appendChild(th);
        }
        table.appendChild(tr);
        let firstWeekday = this.getStartWeekday();
        let days = this.getDays();
        let td;
        tr = document.createElement('tr');
        for (i = 1; i <= 7; i++) {
            td = document.createElement('td');
            if (i < firstWeekday) {
                emptyTD(td);
            } else {
                fillTD(td, days.shift());
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
        for (let row = 1; row <= 5; row++) {
            tr = document.createElement('tr');
            for (i = 0; i < 7; i++) {
                td = document.createElement('td');
                if (days.length > 0) {
                    fillTD(td, days.shift());
                } else {
                    emptyTD(td);
                }
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        return table;
    };

}

function Calendar(date) {

    let locale = window.navigator.language;

    function getLocalYearMonth(d) {
        return d.toLocaleDateString(locale, {
            year: 'numeric',
            month: 'long'
        });
    }

    function getFirstMonday() {
        let day = new Date();
        let weekday = day.getDay();
        let diff = day.getDate() - weekday + (weekday === 0 ? -6 : 1);
        day.setDate(diff);
        return day;
    }

    function getWeekdays() {

        let day = getFirstMonday();
        let days = [];

        function getLocalDay(num, day) {
            let wd = new Date(day);
            wd.setDate(day.getDate() + num);
            return wd.toLocaleDateString(locale, {
                weekday: 'short'
            });
        }

        for (let i = 0; i < 7; i++) {
            days.push(getLocalDay(i, day));
        }
        return days;
    }

    function createButton(html) {
        let btn = document.createElement('button');
        btn.className = 'btn btn-primary btn-sm';
        btn.innerHTML = html;
        return btn;
    }

    let weekdays = getWeekdays();

    function getCalendar() {

        let container = document.createElement('div');
        container.id = 'calendar-box';
        container.setAttribute('data-year', date.getFullYear());
        container.setAttribute('data-month', date.getMonth());

        let tableNav = document.createElement('table');
        tableNav.id = 'table-nc';
        tableNav.className = 'table text-center';
        let trNav = document.createElement('tr');

        let tdTitle = document.createElement('td');
        let title = document.createElement('h4');
        title.id = 'c-title';
        title.innerHTML = getLocalYearMonth(date);
        tdTitle.appendChild(title);

        let tdPrev = document.createElement('td');
        let btnPrev = createButton('<<');
        tdPrev.appendChild(btnPrev);

        let tdNext = document.createElement('td');
        let btnNext = createButton('>>');
        tdNext.appendChild(btnNext);

        trNav.appendChild(tdPrev);
        trNav.appendChild(tdTitle);
        trNav.appendChild(tdNext);
        tableNav.appendChild(trNav);
        container.appendChild(tableNav);

        let c_table = new CalendarTable(date, weekdays);
        container.appendChild(c_table.getTable());
        btnNext.addEventListener('click', getNextCalendar, false);
        btnPrev.addEventListener('click', getPrevCalendar, false);
        return container;
    }

    function switchCalendar(next) {
        let container = document.getElementById('calendar-box');
        let year = Number(container.getAttribute('data-year'));
        let month = Number(container.getAttribute('data-month')) + (next === true ? 1 : -1);

        let nDate = new Date(year, month, 1);
        container.setAttribute('data-year', nDate.getFullYear());
        container.setAttribute('data-month', nDate.getMonth());
        let oC = document.getElementById('table-c');
        let c_table = new CalendarTable(nDate, weekdays);
        container.replaceChild(c_table.getTable(), oC);
        let title = document.getElementById('c-title');
        title.innerHTML = getLocalYearMonth(nDate);
    }

    function getNextCalendar() {
        return switchCalendar(true);
    }

    function getPrevCalendar() {
        return switchCalendar(false);
    }

    return getCalendar();
}

window.onload = function () {
    let calendar = Calendar(new Date());
    document.getElementById('calendar').appendChild(calendar);
};