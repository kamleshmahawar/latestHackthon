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

	$scope.getFilterResult = function(filter){
		var data = {};
		    data.catagory = [];
		    angular.forEach(filter, function(value, key) {
			  data.catagory.push(value);
			});
		couponSearchService.filterSearch(data).then( 
			 function(response){
				$scope.resultData=response;
			} , 
			 function(status){$scope.emptyPage=true;alert("failed");}
		);

	}

    
    $scope.colourIncludes = [];
    
    $scope.includeColour = function(colour) {
        var i = $.inArray(colour, $scope.colourIncludes);
        if (i > -1) {
            $scope.colourIncludes.splice(i, 1);
        } else {
            $scope.colourIncludes.push(colour);
        }
    }
    
    $scope.colourFilter = function(fruit) {
        if ($scope.colourIncludes.length > 0) {
            if ($.inArray(fruit.colour, $scope.colourIncludes) < 0)
                return;
        }
        
        return fruit;
    }

})

})();