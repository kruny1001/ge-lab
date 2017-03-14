'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:PublicationsCtrl
 * @description
 * # PublicationsCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('PublicationsCtrl', function ($scope, $firebaseArray) {
    var pubsRef = firebase.database().ref('pubs');
    var pubs = $firebaseArray(pubsRef);
    pubs.$loaded().then(function(values){
      $scope.pubs = _.orderBy(values, 'year', 'desc')
    });


  });
