angular.module("myApp").factory('url', function ($http) {
        var url = 'http://localhost:8084'; 
//        var url = 'http://xin.nkn.uidaho.edu:8084';
        var timezone = "America/Los_Angeles";
//        var timezone = "America/Boise";

        var res = {
                url: url,
                timezone: timezone
        };
        return res;
});

