//module and controller//
var app = angular.module('myMod');
app.controller('myCtrl', function($scope, $http){

// $http({
//   method: 'GET',
//   url: '/detroiters'
// }).then(function successCallback(response){
//   $scope.detroitSayings = response.data;
// });

//Retriving info from detroitRandom//
$http({
  method: 'GET',
  url: '/detroitRandom'
}).then(function successCallback(response){
  $scope.detroitSayings2 = response.data;
});

});
