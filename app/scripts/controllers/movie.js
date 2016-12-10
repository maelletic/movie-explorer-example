'use strict';

//jscs:disable requireCamelCaseOrUpperCaseIdentifiers

/**
 * @ngdoc function
 * @name movieExplorerApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the movieExplorerApp
 */
angular.module('movieExplorerApp')
  .controller('MovieCtrl', function ($routeParams,movies) {
    var ctrl = this;

    ctrl.movie = {};
	ctrl.images = [];

    movies.getMovie($routeParams.movieId).then(function(result)
    {
      ctrl.movie = result;
	  angular.forEach(ctrl.movie.images.backdrops, function(backdrop)
	  {
		movies.getImageURL(backdrop,'w300').then(function(imagePath)
		{
			ctrl.images.push(imagePath);
		});
	  });
    });

  });

  // jscs:enable requireCamelCaseOrUpperCaseIdentifiers