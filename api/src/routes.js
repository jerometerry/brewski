function setup(router) {
	router.get('/beers/', function(req, res){
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
	
	router.get('/breweries/', function(req, res){
		res.json([
			{ 
				name: "Goose Island Beer Co."
			}, 
			{ 
				name: "Cigar City Brewing"
			}, 
			{ 
				name: "Goose Island Beer Co."	
			}
		]);
	});
}

exports.setup = setup;