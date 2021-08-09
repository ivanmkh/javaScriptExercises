function convert() {
    // f = c*9/5 + 32
    let celsius = parseFloat(document.getElementById('celsius').value);
    document.getElementById('fahrenheit').innerHTML = ((celsius * 9 / 5) + 32).toFixed(2);
}