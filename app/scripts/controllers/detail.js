'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('DetailCtrl', function ($scope, $log, $location, $routeParams, $mdMedia, $compile, $firebaseObject) {
    $scope.testAuthor = 'Admin';
    $scope.testView = 0;
    $scope.testBest = 1;
    var cntObj;
    if($routeParams.id !== undefined){
      $scope.type = $routeParams.type
      switch($scope.type) {
        case 'baseNews': {
          $scope.comment = false;
          $scope.analytics = false;
          break;
        }
        default: {
          $scope.comment = true;
          $scope.analytics = true;
        }
      }


      $scope.id = $routeParams.id
      var ref = firebase.database().ref('materials/'+$scope.type+'/'+$scope.id);
      $firebaseObject(ref).$loaded().then(function(val){
        cntObj = val;
        $scope.cnt = val.cnt;
        $scope.title = val.title;
        bindHtml(val.cnt)
      })
    }
    // mobile view
    if($mdMedia('xs')){
      $scope.styleMobile = {}
    }
    $scope.$watch(function() { return $mdMedia('gt-sm'); }, function(big) {
      $log.info(big)
      $scope.bigScreen = big;
    });
    $scope.$watch(function() { return $mdMedia('sm'); }, function(big) {
      $log.info(big)
      $scope.smallScreen = big;
    });
    $scope.deleteCnt = function(){
      cntObj.$remove().then(function(){
        $location.path('articleList/'+$scope.type);
      })
    }
    //load 5 module first
    function bindHtml(cnt) {
      //target Content HTML
      var content = angular.element('.content')
      cnt.forEach(function(val, index){
        if(val.type === 'editor-text'){
          var container = angular.element(document.createElement('md-content'))
          container.css( "background-color","white");
          container.css('margin-top','20px;');
          container.css('margin-botton','20px;');
          var courseCnt = angular.element(document.createElement('editor-text-view'));
          courseCnt.attr('cnt', 'cnt['+index+']');
          courseCnt.attr('mode', 'read');
          courseCnt.attr('index', index);
          container.append(courseCnt)
          content.append(container)
          //content.append("<md-content><editor-text-view ng-cloack index='"+index+"' mode='read' cnt='cnt["+index+"]'></editor-text-view></md-content>")
        } else if(val.type ==='iframe-module'){
          var container = angular.element(document.createElement('md-content'))
          container.css('margin-top','20px;');
          container.css('margin-botton','20px;');
          var courseCnt = angular.element(document.createElement('iframe-module'));
          courseCnt.attr('cnt', 'cnt['+index+']');
          courseCnt.attr('mode', 'read');
          courseCnt.attr('index', index);
          container.append(courseCnt)
          content.append(container)
        }
        else if(val.type ==='steps'){
          $log.info(val)
          var container = angular.element(document.createElement('md-content'))
          container.css('margin-top','20px;');
          container.css('margin-botton','20px;');
          var courseCnt = angular.element(document.createElement('se-steps'));
          courseCnt.attr('cnt', 'cnt['+index+']');
          courseCnt.attr('mode', 'read');
          courseCnt.attr('index', index);
          container.append(courseCnt)
          content.append(container)
        }
        else if(val.type ==='survey'){
          var courseCnt = angular.element(document.createElement('se-survey'));
          content.append(courseCnt)
        } else if(val.type === 'code-terminal'){
          content.append('<md-content><code-terminal></code-terminal></md-content>')
        } else if(val.type === 'slide-course'){
          content.append('<md-content><slide-course></slide-course></md-content>')
        }
        else if(val.type === 'r-code-exe'){
          var courseCnt = angular.element(document.createElement('r-code-exe'));
          courseCnt.attr('cnt', 'cnt['+index+']');
          courseCnt.attr('index', index);
          courseCnt.attr('mode', 'read');
          content.append(courseCnt)
        }
        else if(val.type === 'challenge'){
          var courseCnt = angular.element(document.createElement('challenge'));
          courseCnt.attr('index',index);
          courseCnt.attr('mode','read');
          content.append(courseCnt)
        }
      })
      $compile(content)($scope);
    }
  });
