
$.ajax({
    url: 'https://randomuser.me/api/?results=100&inc=gender,name,location,email,login,dob,phone,id,picture&format=json&dl',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });