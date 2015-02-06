var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService) {
	
	$scope.myQuotes = dataService.getData();



	// $scope.addQuotes = function(){
	// 	dataService.addData = ('$scope.addData');
	// }

	// $scope.removeData = dataService.removeData() {
	// 	dataService.removeData = ('scope.removeData');
	// }

	// $scope.getData = dataService.getData() {
	// 	dataService.getData = ('scope.getData')
	// }


	// $scope.author = '';
	// $scope.text = '';


});
