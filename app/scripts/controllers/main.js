'use strict';

//jscs:disable requireCamelCaseOrUpperCaseIdentifiers

/**
 * @ngdoc function
 * @name movieExplorerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieExplorerApp
 */
angular.module('movieExplorerApp')
  .controller('MainCtrl', function (movies) {
    var ctrl = this;

    ctrl.movies = [];
	ctrl.slides = [];

    movies.getDiscoverMovies().then(function(result)
    {
      ctrl.movies = result;
	  
	  angular.forEach(ctrl.movies, function(movie)
	  {
		if(movie.backdrop_path)
		{
			movies.getImageURL(movie.backdrop_path,'w780').then(function(imageUrl)
			{
				ctrl.slides.push(imageUrl);	
			});
		}
	});
	  ctrl.currentSlide = 0;
    });
	
	ctrl.getNextSlideIndex = function()
	{
		if(ctrl.currentSlide === ctrl.slides.length -1)
		{
			return 0;
		}
		return ctrl.currentSlide + 1;
	};
	
	ctrl.getPreviousSlideIndex = function()
	{
		if(ctrl.currentSlide === 0)
		{
			return ctrl.slides.length -1;
		}
		return ctrl.currentSlide - 1;
	};
	
	ctrl.slideIsVisible = function(index)
	{
		return index === ctrl.currentSlide ||
			   index === ctrl.getPreviousSlideIndex() ||
			   index === ctrl.getNextSlideIndex();
	};
	
	ctrl.getSlideClass =function(index)
	{
		if(index === ctrl.currentSlide)
		{
			return 'current';
		}else if(index === ctrl.getPreviousSlideIndex()){
			return 'previous';
		}else if(index === ctrl.getNextSlideIndex()) {
			return 'next';
		}
		return '';
	};
	
	ctrl.gotoSlide = function(index)
	{
		ctrl.currentSlide = index;
	};
  });

  // jscs:enable requireCamelCaseOrUpperCaseIdentifiers