(function(){
'use strict';
couponFetcher.controller('mainSearchController',function($scope ,couponSearchService ){


	$scope.rowCount=[];
    $scope.count=0;

	$scope.search = function(){
		var query = $scope.query;
		couponSearchService.search(query).then( 
			 function(response){ $scope.resultData=response; $scope.emptyPage=false;} , 
			 function(status){$scope.emptyPage=true;alert(status);}
		)
	}

	$scope.addRow = function(){
		$scope.rowCount.push($scope.count);
		$scope.count++;
		couponSearchService.offlineData().then( 
			 function(response){
				$scope.offlineData=response;
			} , 
			 function(status){$scope.emptyPage=true;alert("failed");}
		);
	}

	$scope.removeRow = function(){
	  if($scope.rowCount.length>=0){
	  	$scope.rowCount.pop();
	  }
	}

})

})();