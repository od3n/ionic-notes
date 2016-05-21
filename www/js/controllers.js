angular.module('starter.controllers', ['ionic', 'ngCordova'])
.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('NotesCtrl', function($scope, $http) {
  // $scope.notes = [
  //   { id: 1, note: 'Note 1', date: '2016-01-01' },
  //   { id: 2, note: 'Note 2', date: '2016-01-02' },
  //   { id: 3, note: 'Note 3', date: '2016-01-03' },
  //   { id: 4, note: 'Note 4', date: '2016-01-04' },
  //   { id: 5, note: 'Note 5', date: '2016-01-05' },
  // ];

  //var url = 'http://kembara.my/notes.json';
  var url = 'notes.json';
  $http.get(url).then(function (response) {
    $scope.notes = response.data;
  }, function (error) {
  });
})

.controller('NoteCtrl', function($scope, $stateParams, $http) {
  //$scope.note_id = $stateParams.noteId

  //$scope.note = { id: 1, note: 'Note 1', date: '2016-01-01' };

  // var url = 'http://kembara.my/note1.json';
  var url = 'note.json';
  $http.get(url).then(function (response) {
    $scope.note = response.data;
    //alert(response.data);
  }, function (error) {
  });
})

.controller('AddCtrl', function($scope, $http) {
  $scope.note = { note: 'My note', date: new Date() };

  $scope.submit = function() {
    var url = 'http://kembara.my/note.php';
    $http.post(url, $scope.note).then(function (response) {
      alert(response.data);
    }, function (error) {
    });
  }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
