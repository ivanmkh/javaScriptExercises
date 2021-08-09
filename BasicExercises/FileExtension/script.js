function getExtension() {
    let fileName = document.getElementById("fileName").value;
    fileExtension = fileName.split('.')[1];
    document.getElementById("result").innerHTML = `The extension is: ${fileExtension}`;
}