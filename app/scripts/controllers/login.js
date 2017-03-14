'use strict';
/**
 * @ngdoc function
 * @name statsdsuApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Manages authentication to any active providers.
 */
angular.module('statsdsuApp')
  .controller('LoginCtrl', function ($scope, $location, $firebaseAuth, $q, $timeout) {

    $scope.facobookProvider = new firebase.auth.FacebookAuthProvider();
    $scope.facobookProvider.addScope('email');
    $scope.facobookProvider.addScope('user_friends');
    var authObj = $firebaseAuth();

    $scope.oauthLogin = function(provider) {
      $scope.err = null;
      authObj.$signInWithPopup(provider).then(saveProfile).then(redirect, showError);
    };

    $scope.anonymousLogin = function() {
      $scope.err = null;
      authObj.$authAnonymously({rememberMe: true}).then(redirect, showError);
    };

    $scope.passwordLogin = function(email, pass) {
      $scope.err = null;
      authObj.$authWithPassword({email: email, password: pass}, {rememberMe: true}).then(
        redirect, showError
      );
    };

    $scope.createAccount = function(email, pass, confirm) {
      $scope.err = null;
      if( !pass ) {
        $scope.err = 'Please enter a password';
      }
      else if( pass !== confirm ) {
        $scope.err = 'Passwords do not match';
      }
      else {
        authObj.$createUser({email: email, password: pass})
          .then(function () {
            // authenticate so we have permission to write to Firebase
            return authObj.$authWithPassword({email: email, password: pass}, {rememberMe: true});
          })
          .then(createProfile)
          .then(redirect, showError);
      }

      function createProfile(user) {
        var ref = firebase.database().ref().child('users/' + user.uid), def = $q.defer();
        ref.set({email: email, name: firstPartOfEmail(email)}, function(err) {
          $timeout(function() {
            if( err ) {
              def.reject(err);
            }
            else {
              def.resolve(ref);
            }
          });
        });
        return def.promise;
      }
    };

    function saveProfile(ref) {
      var name = ref.user.providerData[0].displayName;
      var email = ref.user.providerData[0].email;
      var photoURL = ref.user.providerData[0].photoURL;
      var providerId = ref.user.providerData[0].providerId;

      var userRef = firebase.database().ref().child('users/' + ref.user.uid), def = $q.defer();
      userRef.update({email: email, name: name, photoURL: photoURL, providerId: providerId}, function(err) {
        if (err) {
          def.reject(err);
        } else {
          def.resolve(userRef);
        }
        return def.promise;
      });
    }
    function firstPartOfEmail(email) {
      return ucfirst(email.substr(0, email.indexOf('@'))||'');
    }

    function ucfirst (str) {
      // inspired by: http://kevin.vanzonneveld.net
      str += '';
      var f = str.charAt(0).toUpperCase();
      return f + str.substr(1);
    }

    function redirect(user) {
      $location.path('/account');
    }

    function showError(err) {
      $scope.err = err;
    }


  });
