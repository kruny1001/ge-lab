'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:TimelinesCtrl
 * @description
 * # TimelinesCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('TimelinesCtrl', function ($scope, $firebaseArray) {
    var timeLineRef = firebase.database().ref('timelines');
    $scope.timelines = $firebaseArray(timeLineRef)
    $scope.addNewTimeline = function(){}
    $scope.editTimeline = function(itemId){

    }
  });
