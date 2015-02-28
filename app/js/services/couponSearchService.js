(function(){
	'use strict';
   couponFetcher.services.service('couponSearchService',['$http','$q','backendURLs',function($http,$q,backendURLs){

	     this.search = function(query){
				var deferred = $q.defer();
				$http({
							method : 'GET',
							url : backendURLs.output
						})
						.success(function(data, status, headers,	config) {deferred.resolve(data)})
						.error(function(data, status, headers,config) {deferred.reject(status);});
				
				return deferred.promise;
			}
	    this.offlineData = function(){
				var deferred = $q.defer();
				$http({
							method : 'GET',
							url : backendURLs.productMaster
						})
						.success(function(data, status, headers,	config) {deferred.resolve(data)})
						.error(function(data, status, headers,config) {deferred.reject(status);});
				
				return deferred.promise;
		}
		this.filterSearch = function(data){
			var deferred = $q.defer();
				$http({
							method : 'POST',
							url : backendURLs.output,
							data : data
						})
						.success(function(data, status, headers,	config) {deferred.resolve(data)})
						.error(function(data, status, headers,config) {deferred.reject(status);});
				
				return deferred.promise;

		}



   }]);
})();