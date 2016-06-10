var myNinjaApp = angular.module('myNinjaApp', ['ngRoute']); // Creating the module

// A function that will fire before application runs

myNinjaApp.config(['$routeProvider', function($routeProvider){

  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html'
    })
    .when('/directory', {
      templateUrl: 'views/directory.html',
      controller: 'ninjaController'
    }).otherwise({
      redirectTo: '/home'
    });

}]);

// Controllers

  // Controllers control application data

  myNinjaApp.controller('ninjaController', ['$scope',function($scope) {
      $scope.removeNinja = function(ninja) {
        var removedNinja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removedNinja, 1);

      };

      $scope.addNinja = function() {
        $scope.ninjas.push({
          name: $scope.newninja.name,
          belt: $scope.newninja.belt,
          rate: parseInt($scope.newninja.rate),
          available: true
        });

        $scope.newninja.name = "";
        $scope.newninja.belt = "";
        $scope.newninja.rate = "";
      };

      $scope.ninjas = [
        {
          name: 'Yoshi',
          belt: 'Black',
          rate: 10,
          available: true
        },
        {
          name: 'Genji',
          belt: 'Green',
          rate: 20,
          available: true
        },
        {
          name: 'Ryu',
          belt: 'Orange',
          rate: 30,
          available: true
        },
        {
          name: 'Gaiden',
          belt: 'Blue',
          rate: 50,
          available: true
        },
        {
          name: 'Yoshiro',
          belt: 'Yellow',
          rate: 45,
          available: false
        }
      ];



  }]);
