var MainRouter = Backbone.Router.extend({

	routes: {
		'' : 'noList',
		'list/:keyword' : 'showSweater',
		'city/:name' : 'showTemp'
	},
	
	initialize: function(){
		this.weather = new WeatherData();
		// var weatherHot = new EtsyItemsCollection();
		// weatherHot.url += '&keywords=sunglasses';
		// var weatherCold = new EtsyItemsCollection();
		// weatherCold.url += '&keywords=sweather';
	},
	// initialize: function(){
	// 	this.items = new EtsyItemsCollection();
	// 	console.log('what',this.items)
	// 	this.items.on('add', function(etsyItem){
	// 		new ListView({model: etsyItem});
	// 	});

	// },
	showSweater: function(keyword){
		// $('browse').html('');

		// this.items.url += ('&keywords=' + keyword);

		// this.items.fetch();

	},
	showTemp: function(name){
		this.weather.fetch({success: function(weatherDataResponse){
			new WeatherView({model: weatherDataResponse});
		}});


		if (weatherDataResponse.get('main').temp > 60){
			var weatherHot = new EtsyItemsCollection();
			weatherHot.url += '&keywords=sunglasses';
			new ListView({model: etsyItem});
		} 
		else {
			var weatherCold = new EtsyItemsCollection();
			weatherCold.url += '&keywords=sweather';
			new ListView({model: etsyItem});

		}
	}


});
