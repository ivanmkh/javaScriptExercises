/*
* Write a JavaScript program to display the current day and time in the following format.
* Sample Output : Today is : Tuesday.
* Current time is : 10 PM : 30 : 38
*/

const DaysOfWeek = ['Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function showDay() {
    let currentDay = new Date().getDay();
    document.getElementById('currentWeekDay').innerHTML = DaysOfWeek[currentDay - 1];
}

function showTime() {
    setInterval( () => {
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();
        let seconds = new Date().getSeconds();
    
        let partOfTheDay = 'AM';
        if (hours > 12) {
            partOfTheDay = 'PM';
            hours -= 12;
        }
    
        document.getElementById('hours').innerHTML = formatTimePart(hours) + ' ' + partOfTheDay + ' : ';
        document.getElementById('minutes').innerHTML = formatTimePart(minutes) + ' : ';
        document.getElementById('seconds').innerHTML = formatTimePart(seconds);
    
    }, 1000);
}

function formatTimePart(timePart) {
    return timePart.toString().padStart(2, '0');

}