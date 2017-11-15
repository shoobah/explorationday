(function(){
    function explorationdayController(explorationdayService){
        var vm = this;
        vm.title = 'Explorationday'
        explorationdayService.getData().then(function(response){
            vm.data = response;
        }, function(error){
           console.log(error); 
        });
        
    }

    explorationdayController.$inject = ['explorationdayService'];

    angular.module('explorationdayModule').component('explorationday', {
        templateUrl: 'explorationday.template.html',
        controller: explorationdayController
    });
})();