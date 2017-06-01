angular.module('ContactosApp').constant('rolAdmin', 1);
angular.module('ContactosApp').constant('rolCelador', 2);

angular.module('ContactosApp').config(['$routeProvider', '$httpProvider', function config($routeProvider, $httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        $routeProvider.
                when('/', {
                    controller: 'loginController',
                    templateUrl: 'app/template/login.html'
                }).
                when('/inicio', {
                    controller: 'inicioController',
                    templateUrl: 'app/template/inicio.html'
                }).
                otherwise('/');
    }
]);