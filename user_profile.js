
var user_photo_element = document.getElementById("user_photo_input");

user_photo_element.onchange = function (event) {
    var fileList = user_photo_element.files;
    //set new profile photo if a new one gets uploaded  

    //const formData = new FormData();
    //formData.append('new_user_photo', fileList[0]);

    fetch('/profile_images', {
        method: 'POST',
        body: fileList[0]
    })
        .then(alert(response))
        .then(response => response.json())
        .then(result => {
            alert('Success:' + result);
        })
        .catch(error => {
            alert('Error:' + error);
        });

    //var photo = document.getElementById("user_photo");
    //alert(fileList[0].name);
    //photo.setAttribute("src", fileList[0]);
}