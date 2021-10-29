let base64String = "";
  
function selected() {
    var file = document.querySelector(
        'input[type=file]')['files'][0];
  
    var reader = new FileReader();
      
    reader.onload = function () {
        base64String = reader.result.replace("data:", "")
            .replace(/^.+,/, "");
  
        imageBase64Stringsep = base64String;
        console.log("Base64String about to be printed "+base64String);
        let fileConsole = document.getElementById('fileConsole');
        let imageTag = document.createElement('img')
        imageTag.src = `data:image/png;base64,${base64String}`;
        fileConsole.appendChild(imageTag);
    }
    reader.readAsDataURL(file);
}

// ============================================================================================