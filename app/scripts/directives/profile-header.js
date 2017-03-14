'use strict';

/**
 * @ngdoc directive
 * @name statsdsuApp.directive:profileHeader
 * @description
 * # profileHeader
 * Website header directive
 *
 *
 * Menu should be controlled by the admin level
 *
 */
angular.module('statsdsuApp')
  .directive('profileHeader', function ($firebaseAuth, $location) {
    return {
      templateUrl: 'views/templates/profile/header.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {


        scope.$watch('$location.path()', function(locationPath) {
          var crntPath = $location.path();
          switch(crntPath) {
            case '/people':
              break;
            case '/research':
              break;
            case '/publications':
              break;
            case '/software':
              break;
            case '/edu':
              break;
          }
        });

        scope.logout = function() { $firebaseAuth().$signOut(); };
        scope.menus = [
          //{name:"Class 2016", dest:"/classList"},
          {name:"People", dest:"/people", selected: false},
          {name:"Researh", dest:"/research", selected: false},
          {name:"Publications", dest:"/publications", selected: false},
          {name:"Software & Data", dest:"/software", selected: false},
          {name:"Teaching", dest:"/edu", selected: false},
          //{name:"People", dest:"/material/-KR9qDDwpdMOtaWZRBg2"},
          //{name:"Publications", dest:"/material/-KQb5LzELmkGc9xj72Yu"},
          //{name:"Software & Data", dest:"/material/-KREpyle5XmJC_m0QFEL"},
          //{name:"Publication", dest:"/material-list/-KQb5JEEs4S1LAM8EDDT"},
          //{name:"Education", dest:"/material/-KR9yxbTd0z1wX3X8khK"},
          //{name:"Login", dest:"/login"},
          //{name:"Account", dest:"/account"},
          //{name:"Logout", dest:"", action:"logout"}
        ]
        scope.actionMenu = function(target){
          if(target.dest !== "")
            $location.path(target.dest);
          else{
            if(target.action ==="logout")
              scope.logout();
          }
        }
        scope.goTo = function(dest){
          $location.path(dest);
        }
      }
    };
  });
