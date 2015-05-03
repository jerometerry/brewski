function setup(router) {
	router.get('/brews/', function(req, res){
		
		res.json([
			{ 
				name:    "Rare Bourbon County Brand Stout", 
				brewery: "Goose Island Beer Co.",
				style:   "American Imperial / Double Stout"
			}, 
			{ 
				name:    "Double Barrel Hunahpu's", 
				brewery: "Cigar City Brewing", 
				style:   "American Imperial / Double Stout"
			}, 
			{ 
				name:    "Proprietor's Bourbon County Brand Stout (2013)", 
				brewery: "Goose Island Beer Co.", 
				style:   "American Imperial / Double Stout"
			}
		]);
	});
}

exports.setup = setup;