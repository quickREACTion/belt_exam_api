var exp = require('express');
var router = require('./server/routes.js');

var app = exp();

app.use(exp.static(__dirname + "/public/dist/public"));

router(app);

app.listen(8000, (errs)=>console.log(errs?errs: "server is gucci!"));