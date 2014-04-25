var MainRouter = Backbone.Router.extend({

	routes: {
		'' : 'noList',
		'list/:keyword' : 'showSweater',
		'city/:name' : 'showTemp'
	},
	
	initialize: function(){
		// this.weather = new WeatherData();
		this.items = new EtsyItemsCollection();
		this.items.on('add', function(item){
			new ListView({model: item});
		});
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
		$('browse').html('');

		this.items.url += ('&keywords=' + keyword);

		this.items.fetch();

	}
	// showTemp: function(name){
	// 	this.weather.fetch({success: function(weatherDataResponse){
	// 		new WeatherView({model: weatherDataResponse});
	// 		 console.log('this', weatherDataResponse);

	// 		 EtsyItem.url += '&keywords=sunglasses';


	// 			this.items.fetch();

		// if (weatherDataResponse.get('main').temp > 60){
		// 	console.log('yes?', weatherDataResponse.get('main').temp)
		// 	var weatherHot = this.items.url += '&keywords=sunglasses';
		// 	// weatherHot.url += '&keywords=sunglasses';
		// 	new ListView({model: weatherHot});
		// } 
		// else {
		// 	var weatherCold = new EtsyItemsCollection();
		// 	weatherCold.url += '&keywords=sweather';
		// 	new ListView({model: etsyItem});

		// }
		// }});
	// }


});
// want to create an if else statement. if temp = x, new etsy collection.
// if temp = y new etsy collection. had weatherHot in initialize and showTemp. after 
// showTemp this.weather.fetch, cant seem to get weather defined outside of that function.
