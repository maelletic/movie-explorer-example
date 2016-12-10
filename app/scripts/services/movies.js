'use strict';

//jscs:disable requireCamelCaseOrUpperCaseIdentifiers

/**
 * @ngdoc service
 * @name movieExplorerApp.movies
 * @description
 * # movies
 * Service in the movieExplorerApp.
 */
angular.module('movieExplorerApp')
  .service('movies', function ($http) {
    var service = this;

    service.getDiscoverMovies = function()
    {
      return $http.get('/datas/discover.json').then(function(response)
      {
        return response.data.results;
      });
    };

    service.getConfiguration = function()
    {
      //on sauvegarde en mémoire le résultat
      if(!service.configurationPromise)
      {
        service.configurationPromise = $http.get('/datas/configuration.json').then(function(response)
        {
          service.configuration = response.data;
          return response.data;
        });
      }
      return service.configurationPromise;
    };

    service.getMovie = function(movieId)
    {
		console.log('Get movie id'+movieId);
      //pour l'instant movieId ne sert à rien car ce sont des fausses données
      return $http.get('/datas/movie.json').then(function(response)
      {
        return response.data;
      });
    };

	service.getImageURL = function(imageOrPath, size)
	{
		return service.getConfiguration().then(function()
		{
			var path = imageOrPath.file_path || imageOrPath;
			return service.configuration.images.secure_base_url + size + path;
		});
	};
  });

  // jscs:enable requireCamelCaseOrUpperCaseIdentifiers