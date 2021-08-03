/*
* Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
*/

function leapyear(year)
{
    let isLeap = ((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0) )? 'is leap' : 'is not leap';
    console.log(`The ${year} year ${isLeap}`);
}


leapyear(100);
leapyear(2016);
leapyear(2000);
leapyear(1700);
leapyear(1800);
leapyear(new Date().getFullYear());
