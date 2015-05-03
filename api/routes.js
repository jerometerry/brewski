function setup(router) {
	router.get('/brews/', function(req, res){
		res.json([{name: "brew1"}, {name: "brew2"}, {name: "brew3"}]);
	});
}

exports.setup = setup;