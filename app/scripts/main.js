console.log('b r r r');

$(document).ready(function(){

	router = new MainRouter();

	Backbone.history.start();

	var items = new EtsyItemsCollection();


	// $('.js-main-btn').on('click', function(){

	// 	var keywords = $('.js-city-input').val();

	// 	window.location.hash = 'city/' + name;
	// 	console.log(keywords);
	// 	$('.js-city-input').val('')
	// })
});