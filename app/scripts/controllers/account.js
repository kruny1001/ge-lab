'use strict';
/**
 * @ngdoc function
 * @name muck2App.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Provides rudimentary account management functions.
 */
angular.module('statsdsuApp')
  .controller('AccountCtrl', function ($scope, $firebaseAuth, user, $firebaseObject, $timeout, $firebaseArray) {

    var authObj = $firebaseAuth();
    $scope.user = user;
    $scope.logout = function() { Auth.$signOut(); };
    $scope.messages = [];
    var profile = $firebaseObject(firebase.database().ref().child('users/'+user.uid));
    console.log(profile);
    profile.$bindTo($scope, 'profile');
    $scope.changePassword = function(oldPass, newPass, confirm) {
      $scope.err = null;
      if( !oldPass || !newPass ) {
        error('Please enter all fields');
      }
      else if( newPass !== confirm ) {
        error('Passwords do not match');
      }
      else {
        authObj.$updatePassword({email: profile.email, oldPassword: oldPass, newPassword: newPass})
          .then(function() {
            success('Password changed');
          }, error);
      }
    };

    $scope.changeEmail = function(pass, newEmail) {
      $scope.err = null;
      authObj.$updateEmail({password: pass, newEmail: newEmail, oldEmail: profile.email})
        .then(function() {
          profile.email = newEmail;
          profile.$save();
          success('Email changed');
        })
        .catch(error);
    };

    function error(err) {
      alert(err, 'danger');
    }

    function success(msg) {
      alert(msg, 'success');
    }
  });
