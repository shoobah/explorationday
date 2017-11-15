(function(){
    function explorationdayService($http){
        var self = this;
        self.getData = function(){
            return $http.get('http://localhost:3000/getall').then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                return response.status;
            });
        }
    }

    explorationdayService.$inject = ['$http'];

    angular.module('explorationdayModule').service('explorationdayService', explorationdayService);
})();