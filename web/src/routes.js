function setup(router, apiUrl) {
	router.get('/', function(req, res){
		res.render('pages/index', { 
			apiUrl: apiUrl
		});
	});
	
	router.get('/about', function(req, res){
		res.render('pages/about');
	});
}

exports.setup = setup;