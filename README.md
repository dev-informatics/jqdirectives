jqdirectives
============

A set of AngularJS directives for Jquery-UI controls.

============
jqDialog
============
Just set the ng-controller attribute for any elements within the
directive enhanced element for the dialog to inherit the jqDialog
controller $scope.

-Sample Markup

<div jq-dialog modal="true" auto-open="true" height="350" width="350" title="'This is a title'">
	<div ng-controller="DemoController">
		<div>{{contact.firstname}} {{contact.lastname}}</div>
		<label for="firstname">First Name</label>
		<input type="text" id="FirstName" ng-model="contact.firstname" /><br/>
		<label for="lastname">Last Name</label>
		<input type="text" id="lastname" ng-model="contact.lastname" />
		<br />
		<button ng-click="alert()">
			Submit
		</button>
		<button ng-click="close()">
			Close
		</button>
	</div>
</div>

-A Sample Controller

yourModule.controller('DemoController', ['$scope', '$window', function($scope, $window){
	$scope.alert = function(){
		$window.alert('Hello, ' + $scope.contact.firstname + " " + $scope.contact.lastname);
	};
}]);

-Within the jqDialog directive.

...,
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
},...

You will notice that the sample markup calls $scope methods on both the jqDirective controller and DemoController.

============
