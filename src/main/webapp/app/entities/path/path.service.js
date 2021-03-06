(function() {
    'use strict';
    angular
        .module('carpoolingCsid2016App')
        .factory('Path', Path);

    Path.$inject = ['$resource'];

    function Path ($resource) {
        var resourceUrl =  'api/paths/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
