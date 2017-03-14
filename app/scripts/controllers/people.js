'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:PeopleCtrl
 * @description
 * # PeopleCtrl
 * Controller of the statsdsuApp
 *
 *
 *
 Tyler Wilson
 Yuguang "James" Ban
 Jason Hennesseey
 Liming Lai
 Padmapriya Swaminathan
 Cai Li
 Josie M. Wallin
 Lance Cundy
 Miao Liu
 Wei Wang
 Chao Gao
 Him Acharya


 Jianli Qi
 Gaixin "Sue" Jiang
 Sara Brockmueller
 Elizabeth Rettedale
 Dong He
 Maurice Ling

 */
angular.module('statsdsuApp')
  .controller('PeopleCtrl', function ($scope, $window) {
    $scope.prof = [{ name:'Xijin Ge', img:'', email:'Xijin.Ge@sdstate.edu'}];
    $scope.phd = [{ name:'Valerie Bares', img:'', email:'Valerie.Bares@sdstate.edu'},{ name:'Mohamed Aburweis', img:'', email:'Mohamed.aburweis@sdstate.edu'},{ name:'Dongmin Jung', img:'', email:'Dongmin.jung@jacks.sdstate.edu'}];
    $scope.ms = [{ name:'Kevin Son', img:'', email:'Eunwoo.son@sdstate.edu'},{ name:'Yesmin Farzana', img:'', email:'MostFarzana.Yesmin@sdstate.edu'},{ name:'Yohannes Tecleab', img:'', email:'MostFarzana.Yesmin@sdstate.edu'}];
    $scope.visits = [{ name:'Xiaoyu Ji ', img:'', email:'Xiaoyu.Ji@sdstate.edu'}];
    $scope.graduates = [{ name:' Tyler Wilson', img:'', email:''},{ name:' Yuguang "James" Ban', img:'', email:''},{ name:'Jason Hennesseey', img:'', email:''}
      ,{ name:'Liming Lai', img:'', email:''},{ name:'Padmapriya Swaminathan', img:'', email:''},{ name:'Cai Li', img:'', email:''}
      ,{ name:'Josie M. Wallin', img:'', email:''},{ name:'Lance Cundy', img:'', email:''},{ name:'Miao Liu', img:'', email:''},{ name:'Chao Gao', img:'', email:''}
      ,{ name:'Him Acharya', img:'', email:''},{ name:'Wei Wang', img:'', email:''}];
    $scope.FRA = [{ name:'Jianli Qi', img:'', email:''},{ name:'Gaixin "Sue" Jiang', img:'', email:''},{ name:'Sara Brockmueller', img:'', email:''},{ name:'Elizabeth Rettedale', img:'', email:''}
      ,{ name:'Dong He', img:'', email:''},{ name:'Maurice Ling', img:'', email:''}];

    $scope.sendEmail = function($event, email){
      console.log(123)
      $window.open("mailto:"+ email + "?subject=" + "[Ge-lab.org] Email");
    }
  });
