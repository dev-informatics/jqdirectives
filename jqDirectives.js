/*
 * @author: Michael Andrew Davidson
 * @description: The jqDirectives module provides directives to wrap jquery-ui widgets.
 * 
 */

'use strict';

var jqDirectives = angular.module('jqDirectives', []);

/**
 * jqDialog wraps dialog() and its respective functionality. 
 */
jqDirectives.directive('jqDialog', function(){
	var control = null;
	return {
		restrict: 'A',
		replace: false,
		compile: function(element, attrs){
			
			return function(scope, ele, attr, controllers){
								
				ele.dialog({
					autoOpen: scope.autoOpen,
					modal: scope.modal,
					height: scope.height,
					width: scope.width,
					title: scope.title
				});
				control = ele;
			};
		},
		controller: function($scope){
		
			$scope.close = function(){
				control.dialog("close");
			};
			
			$scope.option = function(option){				
				if(option == undefined || option.length == 0)
					return control.dialog("option");
				control.dialog("option", option);
			};
			
			$scope.options = function(options){
				control.dialog("option", options);
			};
			
			$scope.open = function(){
				control.dialog("open");
			};
			
			$scope.moveToTop = function(){
				control.dialog("moveToTop");
			};
			
			$scope.isOpen = function(){
				return control.dialog("isOpen");
			};
			
			$scope.destroy = function(){
				control.dialog("destroy");
			};
			
			$scope.widget = function(){
				return control.dialog("widget");
			};
		},
		scope: {
			autoOpen: "=",
			modal: "=",
			height: "=",
			width: "=",
			title: "="		
		}
	};
});