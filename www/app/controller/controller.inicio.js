angular.module('ContactosApp').controller('inicioController', ['$scope', 'registroUsuarioService', '$sessionStorage', '$location', 'rolAdmin', '$route', '$timeout', function ($scope, agregarUsuario, $sessionStorage, $location, rolAdmin, $route, $timeout) {

        /*-- Arrays vacios a agregar --*/
        $scope.dataRegistrarUsuario = {
            cedula: '',
            alias: '',
            contrasena: '',
            rol: ''
        };

        $scope.dataRegistrarContacto = {
            foto: '',
            nombre: '',
            telefono: '',
            direccion: '',
            grupo: ''
        };
        /*-- Fin Arrays vacios a agregar --*/


        /* Declaracion de Alertas y arrays*/
        $scope.usuarios = [];
        $scope.contactosFamilia = [];
        $scope.contactos = [];
        $scope.edit = {};
        $scope.editCon = {};
        $scope.usuarioRegistrado = false;
        $scope.contactoRegistrado = false;
        $scope.usuarioEditado = false;
        $scope.contactoEditado = false;
        $scope.usuarioEliminado = false;
        $scope.contactoEliminado = false;
        /* Fin Declaracion de Alertas*/


        /* Funcion Pintar Tabla*/
        $scope.pintarTabla = function () {
            agregarUsuario.obtenerUsu.then(function successCallback(response) {
                switch (response.data.code) {
                    case 200:
                        $scope.usuarios = response.data.datos;
                        break;
                    case 500:
                        $scope.usuarios = [];
                }
            });
        };

        $scope.pintarTabla();
        
        $scope.pintarTablaConFamilia = function () {
            agregarUsuario.obtenerConFamilia.then(function successCallback(response) {
                switch (response.data.code) {
                    case 200:
                        $scope.contactosFamilia = response.data.datos;
                        break;
                    case 500:
                        $scope.contactosFamilia = [];
                }
            });
        };

        $scope.pintarTablaConFamilia();
        
        $scope.pintarTablaCon = function () {
            agregarUsuario.obtenerCon.then(function successCallback(response) {
                switch (response.data.code) {
                    case 200:
                        $scope.contactos = response.data.datos;
                        break;
                    case 500:
                        $scope.contactos = [];
                }
            });
        };

        $scope.pintarTablaCon();
        /* Fin Funcion Pintar Tabla */

        /*Funciones Agregar */
        $scope.submitNuevoUsuario = function () {
            agregarUsuario.agregarUsu($scope.dataRegistrarUsuario).then(function successCallback(response) {
                // console.log(response);

                $scope.usuarioRegistrado = false;
                $scope.dataRegistrarUsuario = {};
                if (response.data.code == 500) {
                } else {
                    $scope.usuarioRegistrado = true;
                    $scope.dataRegistrarUsuario = '';
//                    $timeout(function () {
//                        $('#nuevoUsuario').modal('toggle');
//                    }, 700);
                    $timeout(function () {
                        //$route.reload();
                        window.location.reload();
                    }, 1000);
                }
            }, function errorCallback(response) {
                console.error(response);
            });
        };

        $scope.submitNuevoContacto = function () {
            agregarUsuario.agregarCon($scope.dataRegistrarContacto).then(function successCallback(response) {
                // console.log(response);

                $scope.contactoRegistrado = false;
                $scope.dataRegistrarContacto = {};
                if (response.data.code == 500) {
                } else {
                    $scope.contactoRegistrado = true;
                    $scope.dataRegistrarContacto = '';
//                    $timeout(function () {
//                        $('#nuevoArticulo').modal('toggle');
//                    }, 700);
                    $timeout(function () {
                        // $route.reload();
                        window.location.reload();
                    }, 1000);
                }
            }, function errorCallback(response) {
                console.error(response);
            });
        };
        /* Fin Funciones Agregar */


        /* Funcion Editar */
        $scope.editar = function (dato) {
            $scope.edit.id = dato.usu_id;
            $scope.edit.cedula = dato.usu_cedula;
            $scope.edit.alias = dato.usu_alias;
            $scope.edit.rol = dato.usu_rol;
            $('#editarUsuario').modal('toggle');
        };

        $scope.submitEditarUsuario = function () {
            agregarUsuario.editarUsu($scope.edit).then(function successCallback(response) {
                $scope.usuarioEditado = false;
                $scope.edit = {};
                if (response.data.code == 500) {
                } else {
                    $scope.usuarioEditado = true;
                    $scope.edit = '';
                    $timeout(function () {
                        $('#editarUsuario').modal('toggle');
                    }, 700);
                    $timeout(function () {
                        // $route.reload();
                        window.location.reload();
                    }, 1000);
                }
            }, function errorCallback(response) {
                console.error(response);
            });
        };
        
        $scope.editarCon = function (dato) {
            $scope.editCon.id = dato.con_id;
            $scope.editCon.foto = dato.con_foto;
            $scope.editCon.nombre = dato.con_nombre;
            $scope.editCon.telefono = dato.con_telefono;
            $scope.editCon.direccion = dato.con_direccion;
            $scope.editCon.rol = dato.con_rol;
            $('#editarContacto').modal('toggle');
        };
        
        $scope.submitEditarContacto = function () {
            agregarUsuario.editarCon($scope.editCon).then(function successCallback(response) {
                $scope.contactoEditado = false;
                $scope.editCon = {};
                if (response.data.code == 500) {
                } else {
                    $scope.contactoEditado = true;
                    $scope.editCon = '';
                    $timeout(function () {
                        $('#editarContacto').modal('toggle');
                    }, 700);
                    $timeout(function () {
                        // $route.reload();
                        window.location.reload();
                    }, 1000);
                }
            }, function errorCallback(response) {
                console.error(response);
            });
        };
        /* Fin Funcion Editar*/
        
        
        /* Funcion Eliminar*/
        $scope.eliminar = function (dato) {
            $('#eliminarUsuario').modal('toggle');
            $scope.alias = dato.usu_alias;
            $scope.ideliminar = dato.usu_id;
        };
        
        $scope.submitEliminarUsuario = function () {
            agregarUsuario.eliminarUsu({id: $scope.ideliminar}).then(function successCallback(response) {
                $scope.usuarioEliminado = false;
                if (response.data.code == 500) {
                } else {
                    $scope.usuarioEliminado = true;
                    $timeout(function () {
                        $('#eliminarUsuario').modal('toggle');
                    }, 700);
                    $timeout(function () {
                        // $route.reload();
                        window.location.reload();
                    }, 1000);
                }
            }, function errorCallback(response) {
                console.error(response);
            });
        };
        
        $scope.eliminarCon = function (dato) {
            $('#eliminarContacto').modal('toggle');
            $scope.nombre = dato.con_nombre;
            $scope.ideliminar = dato.con_id;
        };
        
        $scope.submitEliminarContacto = function () {
            agregarUsuario.eliminarCon({id: $scope.ideliminar}).then(function successCallback(response) {
                $scope.contactoEliminado = false;
                if (response.data.code == 500) {
                } else {
                    $scope.contactoEliminado = true;
                    $timeout(function () {
                        $('#eliminarContacto').modal('toggle');
                    }, 700);
                    $timeout(function () {
                        // $route.reload();
                        //window.location.reload();
                    }, 1000);
                }
            }, function errorCallback(response) {
                console.error(response);
            });
        };
        /*Fin Funcion Eliminar*/


        /*-- ocultar divs --*/
        $scope.show = [];
        $scope.showDetail = function (id) {
            if ($scope.show[id] === true) {
                $scope.show[id] = false;
            } else {
                $scope.show[id] = true;
            }
        };
        /*-- Fin ocultar divs --*/
    }]);
