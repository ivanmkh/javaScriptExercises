/*
* Write a JavaScript program to rotate the string 'w3resource' in right direction 
* by periodically removing one letter from the end of the string and attaching it to the front.
*/

function rotate(currentString) {

    if (!currentString) return;
    
    // execute rotation 
    let currentArray = currentString.split(''); 
    let lastChar = currentArray.pop(); 
    currentArray.unshift(lastChar); 
    currentString = currentArray.join(''); 

    return currentString;
}

function animate(elementId) {
    setInterval(() => {
        let innerHTML;
        innerHTML = document.getElementById(elementId).innerHTML;
        document.getElementById(elementId).innerHTML = rotate(innerHTML);
    }, 500);
}