module.exports = function(app) {
    var User = app.models.User;
    User.create({email: 'samithahewawasam@gmail.com', username: 'samitha', password: '123456'}, function(err, userInstance) {
    console.log(userInstance);
  });
};