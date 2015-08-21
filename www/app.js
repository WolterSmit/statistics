var app = angular.module('app', []);

app.controller('test', function($scope){
	$scope.data = "Hoi";
	
});

app.controller("stat",function ($scope, $http) {
	
	$scope.data = "test";
	$scope.status = "-";
	
	$http.get("cgi-bin/conversation.json").
		then(function(response) {
			$scope.data = response.data;
		}, function(response) {
			$scope.data =  "failed" ;
			alert(response.status);
		});
	
});