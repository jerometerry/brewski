function setup(router) {
	router.get('/brews/', function(req, res){
		
		res.json([
			{name: "brew1", author: "Pete Hunt", text: "This is one comment"}, 
			{name: "brew2", author: "Jordan Walke", text: "This is *another* comment"}, 
			{name: "brew3", author: "Jerome Terry", text: "This is cool"}
			]);
	});
}

exports.setup = setup;