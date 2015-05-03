function setup(router) {
	router.get('/', function(req, res){
		res.render('index', { title: 'Hey', message: 'Hello there!'});
	});
}

exports.setup = setup;