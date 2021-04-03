/*
swipe_screen.js
CIS 454 Project
John Paul Besong, Doung Lan Cheung, Jeremy Gavrilov, Skyler Hall, Kyra Thomas, Maricel Vicente

Javascript file to assist with screen swiping.
*/

// Globals
//var to keep track of the current profile from the list of profiles to pull from
var currentProfile_index = 0; 
var profile_data;

loadJSON(function (response) {
    // Parse JSON string into object
    profile_data = JSON.parse(response);
});


//user clicks yes, load and go to next profile to the card on the left
document.getElementById("yes_button").addEventListener("click", function () {

    var yes_promise = new Promise(function (resolve, reject) {
        //create new profile card to the left of current card
        push_ret = pushProfile("yes"); 
        currentProfile = push_ret[0];
        newProfile = push_ret[1];


        //load info into card
        next_profile_info = profile_data["results"][currentProfile_index];
        next_profile_name = next_profile_info["name"]["first"] + " " + next_profile_info["name"]["last"];
        next_profile_picture = next_profile_info["picture"]["medium"];

        document.getElementById("template_profile_slide_name").innerHTML = next_profile_name;
        document.getElementById("template_profile_slide_img").setAttribute("src", next_profile_picture);

        if (document.getElementById("old_profile") != null) {
            console.log("yes promise success")

            //wait until carousel transition has finished
            /*$("#profile_card_carousel").on('slid.bs.carousel', function () {
               
            });*/

            //go to card
            $("#profile_card_carousel").carousel("prev");

            //remove old profile html
            popProfile(currentProfile);

            currentProfile_index = currentProfile_index + 1;
        }
        else {
            console.log("yes promise fail")
        }
    });

    yes_promise.then(function (result) {

    }, function (err) {
        console.log(err);
    });

    /*
    push_ret = pushProfile("yes"); //create new profile card to the left of current card
    currentProfile = push_ret[0];
    newProfile = push_ret[1];


    //load info into card
    next_profile_info = profile_data["results"][currentProfile_index];
    next_profile_name = next_profile_info["name"]["first"] + " " + next_profile_info["name"]["last"];
    next_profile_picture = next_profile_info["picture"]["medium"];

    document.getElementById("template_profile_slide_name").innerHTML = next_profile_name;
    document.getElementById("template_profile_slide_img").setAttribute("src", next_profile_picture);


    //remove old profile html
    //wait until carousel transition has finished
    $("#profile_card_carousel").on('slid.bs.carousel', function () {
        popProfile(currentProfile);
    });

    //go to card
    $("#profile_card_carousel").carousel("prev");
    // $("#profile_card_carousel").carousel(currentIndex - 1);
*/

});



//user clicks no, load and go to next profile to the card on the right
document.getElementById("no_button").addEventListener("click", function () {

    var no_promise = new Promise(function (resolve, reject) {
        push_ret = pushProfile("no"); //create new profile card to the left of current card
        currentProfile = push_ret[0];
        newProfile = push_ret[1];


        //load info into card
        next_profile_info = profile_data["results"][currentProfile_index];
        next_profile_name = next_profile_info["name"]["first"] + " " + next_profile_info["name"]["last"];
        next_profile_picture = next_profile_info["picture"]["medium"];

        document.getElementById("template_profile_slide_name").innerHTML = next_profile_name;
        document.getElementById("template_profile_slide_img").setAttribute("src", next_profile_picture);

        if (document.getElementById("old_profile") != null) {
            console.log("no promise success")

            //wait until carousel transition has finished
            /*$("#profile_card_carousel").on('slid.bs.carousel', function () {
               
            });*/

            //go to card
            $("#profile_card_carousel").carousel("next");

            //remove old profile html
            popProfile(currentProfile);

            currentProfile_index = currentProfile_index + 1;
        }
        else {
            console.log("no promise fail")
        }
    });

    no_promise.then(function (result) {

    }, function (err) {
        console.log(err);
    });



});


function pushProfile(direction) { //creates a new profile card to show next

    //copy template profile html into a new div element
    var template_profile_html = document.getElementById("template_profile_slide").innerHTML;
    var new_profile = document.createElement("div");
    new_profile.innerHTML = template_profile_html; //copy html

    //rename ids for current profile
    document.getElementById("template_profile_slide").setAttribute("id", "old_profile");
    document.getElementById("template_profile_slide_name").setAttribute("id", "old_profile_name");
    document.getElementById("template_profile_slide_img").setAttribute("id", "old_profile_img");

    //set attributes for new profile
    new_profile.setAttribute("class", "carousel-item");
    new_profile.setAttribute("id", "template_profile_slide");



    //insert card to the right of the current card
    if (direction == "no") {
        //document.getElementById("old_profile");
        var curr_profile = document.getElementById("carousel_inner").firstChild;
        document.getElementById("carousel_inner").insertBefore(new_profile, null);

    }
     //insert card to the left of the current card
    else {
        var curr_profile = document.getElementById("carousel_inner").firstChild;
        document.getElementById("carousel_inner").insertBefore(new_profile, curr_profile);
    }

    return [curr_profile, new_profile]

}

//removed html of old profile card
function popProfile(to_delete) {

    document.getElementById("old_profile").remove();

}

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    // Replace 'my_data' with the path to your file
    xobj.open('GET', './dummy_profiles.json', true); 
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}
