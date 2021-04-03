/*
applicant_swipe_screen.js
CIS 454 Project
John Paul Besong, Doung Lan Cheung, Jeremy Gavrilov, Skyler Hall, Kyra Thomas, Maricel Vicente

Function that collects dummy profiles from randomizor.
*/

$.ajax({
    url: 'https://randomuser.me/api/?results=100&inc=gender,name,location,email,login,dob,phone,id,picture&format=json&dl',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });