'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:PubEditorCtrl
 * @description
 * # PubEditorCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('PubEditorCtrl', function ($scope, $firebaseArray) {
    $scope.newAuthor = function(chip) {
      $scope.pub.authors = $scope.authors;
      return chip;
    };
    $scope.pub={};
    $scope.authorsRemovable = true;
    $scope.authorsReadonly = false;
    $scope.authors = [];
    $scope.pub.links = [
      {name: 'title1', addr:'https://hello.com'},
      {name: 'title2', addr:'https://hello.com'}];
    $scope.addLink = function(){
      $scope.pub.links.push({addr:"", name:""});
    }
    $scope.removeLink = function(index){
      _.pullAt($scope.pub.links, index)
    }
    $scope.pushPub = function(){
      console.log('test')
      var ref = firebase.database().ref('pubs')
      $firebaseArray(ref).$add($scope.pub)

    }
  });