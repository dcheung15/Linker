

//document.getElementById("user_profile_inputName").readOnly = true;
//document.getElementById("user_profile_inputEmail").readOnly = true;

window.onload = function() {
    document.getElementById("user_profile_edit_button").onclick = edit_user_profile;
    document.getElementById("user_profile_save_button").onclick = save_user_profile;

}

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

// enables user profile buttons to be edited
function edit_user_profile() {
    
    document.getElementById("user_profile_inputName").readOnly = false;
    document.getElementById("user_profile_inputEmail").readOnly = false;
}

// disables user profile buttons to prevent editing
function save_user_profile() {
    
    document.getElementById("user_profile_inputName").readOnly = true;
    document.getElementById("user_profile_inputEmail").readOnly = true;
}