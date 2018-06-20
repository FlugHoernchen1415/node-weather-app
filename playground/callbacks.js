var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Me'
  };

  setTimeout(() => {
    callback(user);
  }, 2000);
};

getUser(31, (user) => {
  console.log(user);
});

/*
https://maps.googleapis.com/maps/api/geocode/json?address=friedrichshagener%20stra%C3%9Fe%206g&key=AIzaSyBkaZSetgBv0d0h2MRaHapdvMlYdK464FU
*/ 