function run() {
    let currentDate = new Date();
    console.log(currentDate);

    christmassDate = new Date("12/25/" + currentDate.getFullYear());
    if (christmassDate.getTime() < currentDate.getTime())
    christmassDate = new Date("12/25/" + (currentDate.getFullYear() + 1) );
    
    let days = ((christmassDate.getTime() - currentDate.getTime())/(1000*60*60*24)).toFixed(0);

    console.log(christmassDate);
    console.log(`${days} days  left till the next Christmass`);
}