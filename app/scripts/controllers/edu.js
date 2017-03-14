'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:EduCtrl
 * @description
 * # EduCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('EduCtrl', function ($scope, $window) {
    $scope.teaching = [
      {term: "Learn R in 2 hours through examples", classes: [
        {code: 'R 101', title:'English version', link:'https://firebasestorage.googleapis.com/v0/b/firebase-bcloud.appspot.com/o/tutorials%2FLearn%20R%20through%20examples.pdf?alt=media&token=8998509d-b8e2-46c8-a52d-697b9206a715', type:'file'},
        {code: 'R 101', title:'Chines version', link:'https://firebasestorage.googleapis.com/v0/b/firebase-bcloud.appspot.com/o/tutorials%2FR_intro_chinese2.pdf?alt=media&token=51a082ac-417c-4dde-a444-357293a5a55f', type:'file'},
        {code: 'R 101', title:'Learn R interactively', link:'https://statsdsu.firebaseapp.com', type:'link'}]
      },
      {term: "2017 Spring", classes:[
        {code:'STAT 435/535', title:'Applied Bioinformatics', Credits:'3', link:'', type:'noLink'},
        {code:'STAT 414', title:'R Programming', Credits:'3', link:'', type:'noLink'},
        {code:'STAT 429', title:'Tp-Data Visualization in R', Credits:'3', link:'', type:'noLink'}]
      },
      {term: "2016 Fall", classes:[
        {code:'STAT 736', title:'Bioinformatics', Credits:'3', link:'', type:'noLink'}]
      },
      {term: "2016 Summer", classes:[
        {code:'Summer Event', title:'2016 Data Analytics Camp for High Schoolers', link:'https://statsdsu.firebaseapp.com/#/course-detail/-KIMnC0W_09BA9RQrjmq' , type:'link'}]
      }
    ];

    $scope.accessLink = function(type, link){
      switch(type) {
        case 'file':
          console.log('file')
          downloadLink(link);
          break;
        case 'link' :
        console.log('link')
          goToLink(link);
          break;
      }
    }
    var goToLink=function(addr){
      if(addr != "")
        $window.open(addr, 'target=_blank');
    }
    var downloadLink = function(addr){
      $window.open(addr, 'Download');
    }
  });
