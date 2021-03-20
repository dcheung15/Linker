/*
collect_dummy_profiles.js
CIS 454 Project
John Paul Besong, Doung Lan Cheung, Jeremy Gavrilov, Skyler Hall, Kyra Thomas, Maricel Vicente

Javascript file to collect dummy profiles for testing.
*/

$.ajax({
    url: 'https://randomuser.me/api/?results=100&inc=gender,name,location,email,login,dob,phone,id,picture&format=json&dl',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });