angular.module('ContactosApp').service('registroUsuarioService', ['$http', function ($http) {

        this.agregarUsu = function (data) {
            return $http.post('http://localhost/LibretaDeContactos/www/server.php/agregarUsuario', $.param(data));
        };

        this.obtenerUsu = $http.get('http://localhost/LibretaDeContactos/www/server.php/obtenerUsuario');

        this.editarUsu = function (data) {
            return $http.post('http://localhost/LibretaDeContactos/www/server.php/editarUsuario', $.param(data));
        };

        this.eliminarUsu = function (data) {
            return $http.post('http://localhost/LibretaDeContactos/www/server.php/eliminarUsuario', $.param(data));
        };

        this.agregarCon = function (data) {
            return $http.post('http://localhost/LibretaDeContactos/www/server.php/agregarContacto', $.param(data));
        };

        this.editarCon = function (data) {
            return $http.post('http://localhost/LibretaDeContactos/www/server.php/editarContacto', $.param(data));
        };

        this.eliminarCon = function (data) {
            return $http.post('http://localhost/LibretaDeContactos/www/server.php/eliminarContacto', $.param(data));
        };
        
        this.obtenerConFamilia = $http.get('http://localhost/LibretaDeContactos/www/server.php/obtenerContactoFamilia');

        this.obtenerCon = $http.get('http://localhost/LibretaDeContactos/www/server.php/obtenerContacto');

    }]);