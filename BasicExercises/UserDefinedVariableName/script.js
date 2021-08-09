function create() {
    let variableName = document.getElementById("variableName").value;
    let obj = {
        [variableName] : 1
    }

    document.getElementById("result").innerHTML = `The variable \"${Object.keys(obj)}\" has been successfully created.`;
}