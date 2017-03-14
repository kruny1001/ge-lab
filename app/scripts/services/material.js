'use strict';

/**
 * @ngdoc service
 * @name statsdsuApp.Material
 * @description
 * # Material
 * Factory in the statsdsuApp.
 */
angular.module('statsdsuApp')
  .factory('Material', function ($q, $firebaseArray, $firebaseObject) {

    var ref = firebase.database().ref()
    var courseRef = ref.child('courses');
    var chapterRef = ref.child('chapters');
    var materialRef = ref.child('materials');
    //var challengeRef = ref.child('challenges');
    var onComplete = function(error) {
      if (error) {
        $log.info('Remove Data failed');
      } else {
        $log.info('Remove Data succeeded');
      }
    };

    // Public API here
    return {
      create: function(chapterObj){
        var newChapterRef = chapterRef.push();
        $log.info(chapterRef)
        chapterObj.pubStatus = true;
        chapterObj.createdAt = firebase.database.ServerValue.TIMESTAMP
        var parentCourse = $firebaseObject(ref.child('courses').child(chapterObj.parentCourseId))
        parentCourse.$loaded().then(function(){
          if(parentCourse.chapterList === undefined){
            parentCourse.chapterList=[];
            parentCourse.chapterList.push(newChapterRef.key)
          }
          else {
            parentCourse.chapterList.push(newChapterRef.key)
          }
          parentCourse.$save();
        })
        newChapterRef.set(chapterObj);
      },
      //getChapter: function(chapterId){
      //  return $firebaseObject(chapterRef.child(chapterId));
      //},
      //list: function(){
      //  return $firebaseArray(classRef);
      //},
      //listByCourseId:function(arrChapterId){
      //
      //  //var listChapterRef = firebase.database().ref().child('chapters')
      //  //    .orderByChild('parentCourseId').equalTo(courseId);
      //  //return $firebaseArray(listChapterRef);
      //  var chapterArray = [];
      //  arrChapterId.forEach(function(val, index){
      //    var chapter = firebase.database().ref().child('chapters').child(val)
      //    chapterArray.push($firebaseObject(chapter))
      //  })
      //
      //  return chapterArray;
      //},
      addMaterial: function(materialObj, type){
        return $q(function(resolve, resect){
          var newMaterial = materialRef.child(type).push();

          materialObj = _.omitBy(materialObj, _.isNil);
          newMaterial.set(materialObj, function(error){
            if(error){
              $log.info(error)
              reject('Error: '+ error);
            }

            else{
              //$log.info(newMaterial)
              resolve(newMaterial.key);
            }

          });
        })
      },
      listMaterials: function(chapterId){
        var listMaterialRef = firebase.database().ref().child('materials')
          .orderByChild('parentChapterId').equalTo(chapterId);
        return $firebaseArray(listMaterialRef);
      },
      //removeChapter: function(chapterId){
      //  //list materials
      //  var query = materialRef.orderByChild('parentChapterId').equalTo(chapterId)
      //  var materials = $firebaseArray(query);
      //  materials.$loaded().then(function(snap){
      //    snap.forEach(function(mat){
      //      materials.$remove(mat)
      //    })
      //    var targetChapterRef = chapterRef.child(chapterId)
      //    var chapter = $firebaseObject(targetChapterRef)
      //    chapter.$remove()
      //    var course
      //  })
      //  //remove materials
      //},
      removeMaterial: function(materialId, courseId){
        //var newMaterial = chapterRef.child(courseId).child('materials').push();
        //newMaterial.set(materialObj);
      },
      //addChallenge: function(challengeObj){
      //  return $q(function(resolve, resect){
      //    var newChallenge = challengeRef.push();
      //    newChallenge.set(challengeObj, function(error){
      //      if(error)
      //        reject('Error: '+ error);
      //      else
      //        resolve('Success');
      //    });
      //  })
      //}
    };
  });
