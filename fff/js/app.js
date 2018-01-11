'use strict';

/* Controllers */
var app = angular.module('agendaApp', []);

app.controller('AgendaController', function () {
	/* scope */
	this.contactos = [
	    {
	    	"nombre" : "Juan",
	    	"apellido" : "Perez",
	    	"telefono" : "321472352",
	    	"email" : "juan@gmail.com",
	    	"direccion" : "Corrientes 37, 3B"
	    },
	    { "nombre" : "Pablo", "apellido" : "Alvarez", "telefono" : "666", "email" : "pablo@gmail.com", "direccion" : "Corrientes 37, 4B"},
	    { "nombre" : "Maria", "apellido" : "Rodriguez", "telefono" : "47584777", "email" : "maria@gmail.com", "direccion" : "Corrientes 37, 2B"},
	    { "nombre" : "Andrea", "apellido" : "Garcia", "telefono" : "888890", "email" : "andrea@gmail.com", "direccion" : "Corrientes 37, 1B"}
	];

	this.textoBusqueda = '';

	this.filtroActual = '';
	this.sel_options = ['Juan', 'Pablo', 'María', 'Andrea'];

	this.buscar = function() {
		this.filtroActual = this.textoBusqueda
	};

});
  
  
