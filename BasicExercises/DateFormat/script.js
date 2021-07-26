/*
* Write a JavaScript program to get the current date.  Go to the editor
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

let currentDate = new Date();
let mm = currentDate.getMonth().toString().padStart(2, 0);
let dd = currentDate.getDate().toString().padStart(2, 0);
let yyyy = currentDate.getFullYear();

document.getElementById('format1').innerHTML = `${mm}-${dd}-${yyyy}`;
document.getElementById('format2').innerHTML = `${mm}/${dd}/${yyyy}`;
document.getElementById('format3').innerHTML = `${dd}-${mm}-${yyyy}`;
document.getElementById('format4').innerHTML = `${dd}/${mm}/${yyyy}`;