angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'http://quizapiird-env-1.eba-b2ub2knd.us-east-2.elasticbeanstalk.com/';

    return service;
}]);