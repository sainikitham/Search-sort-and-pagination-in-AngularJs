var wash = angular.module("newApp",['angularUtils.directives.dirPagination']);
wash.controller("newcontroller",function($scope,$http)
		{
	     $http.get('MOCK_DATA.json')
	      .then(function(response) {
	     	$scope.employees = response.data;
     	})
	      
	      $scope.data = "firstname";
	      $scope.sortfield = false;
	      $scope.sortdata = function(thing)
	      {
	    	  $scope.sortfield = ($scope.data == thing) ? !$scope.sortfield  : false;
	    	  $scope.data = thing;
	    	  
	      };
	      $scope.getsymbol = function(thing)
	      {
	    	  if($scope.data == thing )
	    		  {
	    		  return $scope.sortfield ? 'arrow-up' : 'arrow-down';
	    		  }
	    	  return "";
	      };
	     
	      
		});