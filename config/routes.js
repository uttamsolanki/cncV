var home = require('../app/controllers/home');
var machines = require('../app/controllers/machines');

//you can include all your controllers

module.exports = function (app) {

    app.get('/machines/sysInfo', machines.sysInfo);
    app.get('/machines/statusInfo', machines.statusInfo);
    app.get('/machines/programDir', machines.programDir);
    app.get('/machines/alarmMsg', machines.alarmMsg);
    
    app.get('/login', home.login);
    app.get('/signup', home.signup);

    app.get('/', home.loggedIn, home.home);//home
    app.get('/home', home.loggedIn, home.home);//home

}
