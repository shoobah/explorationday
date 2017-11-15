(function(){
    function listController(){
        var vm = this;
    }

    angular.module('explorationdaylistModule').component('explorationdaylist', {
        templateUrl: 'explorationdaylist.template.html',
        controller: listController,
        bindings: {
            data: '<'
        }
    });
})();