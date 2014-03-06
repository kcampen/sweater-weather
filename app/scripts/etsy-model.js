var EtsyItem = Backbone.Model.extend({})


var EtsyItemsCollection = Backbone.Collection.extend({

	model: EtsyItem,

	url: 'https://openapi.etsy.com/v2/listings/active.js?&fields=title,price,listing_id&includes=Images&api_key=ja3tb7xftao8fo07ltq8iiza&limit=1&callback=?',

	parse: function(response){
		return response.results;
	}
})