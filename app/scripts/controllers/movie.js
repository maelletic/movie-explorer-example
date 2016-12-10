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

    movies.getMovie($routeParams.movieId).then(function(result)
    {
      ctrl.movie = result;
    });

    movies.getConfiguration().then(function(result){
      ctrl.configuration = result;
    });

    ctrl.getImageURL = function(image, size)
    {
      if(ctrl.configuration)
      {
        return ctrl.configuration.images.secure_base_url + size + image.file_path;
      }else{
        return null;
      }
    };

  });

  // jscs:enable requireCamelCaseOrUpperCaseIdentifiers