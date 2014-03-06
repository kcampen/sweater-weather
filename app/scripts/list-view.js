var ListView = Backbone.View.extend({

	etsyTemplate: _.template($('#sweater-template').text()),

	initialize: function(){

		$('.browse').html(this.el);
		this.render();
	},
	render: function(){
		var renderTemplate = this.etsyTemplate(this.model.attributes);

		this.$el.html(renderTemplate);

	}
});

var WeatherView = Backbone.View.extend({

	createTemplate: _.template($('#weather-template').text()),

	initialize: function(){

		$('.browse').html(this.el);
		this.render();
	},
	render: function(){
		var renderTemplate = this.createTemplate({model: this.model});

		this.$el.html(renderTemplate);
	}
});