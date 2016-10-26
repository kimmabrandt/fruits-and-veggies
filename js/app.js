/* setup your angular app here */
var app = angular.module('FruitsnVeggies', []);
app.controller('fruits-n-veggies', ['$scope', function($scope){
	console.log("controller loaded");

var fruits = [
  'Apple',
  'Apricot',
  'Banana'
];

var vegetables = [
  'Artichoke',
  'Arugula',
  'Asparagus'
];

  $scope.newTodo = "";
  $scope.todo = [
  'Apple',
  'Apricot',
  'Banana',
  'Artichoke',
  'Arugula',
  'Asparagus'
  ];

  $scope.itemPosition = undefined;

  $scope.moveLeft = function(move) {
  	// $scope.itemLeft = $scope.todo;
  	$scope.itemPosition = "left";
  }

  $scope.moveRight = function(move) {
  	$scope.itemRight = $scope.todo;
  }






}]);

// debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);
