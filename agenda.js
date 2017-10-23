var agenda = angular.module("Agenda", []);
agenda.controller('agendaController', function($scope){
	$http.get('contatos.json').then(function(response) {
		
	});
});
