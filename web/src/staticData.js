function init(app, express) {
  	app.use('/bower', express.static('bower_components'));
	app.use('/css', express.static('css'));
	app.use('/favicon.ico', express.static('img/favicon.ico'));
	app.use(express.static('img'));
	app.use(express.static('views'));
	app.use('/jsx', express.static('views/react'));
}

exports.init = init;