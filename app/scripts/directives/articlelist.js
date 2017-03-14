'use strict';

/**
 * @ngdoc directive
 * @name statsdsuApp.directive:articleList
 * @description
 * # articleList
 */
angular.module('statsdsuApp')
  .directive('articleList', function ($log, $firebaseArray) {
    return {
      templateUrl: 'views/directives/article-list.html',
      restrict: 'E',
      scope:{
        icon:'@',
        type:'@',
        nameList:'@',
        limit: '@'
      },
      link: function postLink(scope, element, attrs) {
        element.css('margin','2px')
        var type = scope.type;
        var name = scope.nameList;
        var ref = firebase.database().ref('materials/'+type)
        $firebaseArray(ref).$loaded().then(function(val){
          scope.articles = val;
        })
      }
    };
  })

  .directive('newsList', function ($log, $firebaseArray) {
    return {
      templateUrl: 'views/directives/news-list.html',
      restrict: 'E',
      scope:{
        type:'@',
        nameList:'@',
        limit: '@'
      },
      link: function postLink(scope, element, attrs) {
        element.css('margin','2px');
        element.css('backgroundColor','white');
        var type = scope.type;
        var name = scope.nameList;
        $log.info(scope.limit)
        var ref = firebase.database().ref('article/'+type).limitToLast(Number(scope.limit))
        $firebaseArray(ref).$loaded().then(function(val){
          scope.articles = val;
        })
      }
    };
  });
