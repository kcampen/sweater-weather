var WeatherData = Backbone.Model.extend({

	url: function(){
		return 'http://api.openweathermap.org/data/2.5/weather?units=imperial&id=4580543&callback=?'
	}
});

