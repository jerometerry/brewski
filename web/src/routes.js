function setup(router, apiUrl) {
	router.get('/', function(req, res){
		res.render('index', { 
			title: 'Hey',
			apiUrl: apiUrl
		});
	});
}

exports.setup = setup;