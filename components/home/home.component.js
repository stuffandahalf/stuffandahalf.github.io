'use strict';

const homeComponent = {
	templateUrl: 'components/home/home.html',
	controller: function ($scope, $location, $routeParams) {
		if ($routeParams.redirectTo) {
			console.log('here');
			const path = $routeParams.redirectTo;
			$location.search({});
			$location.path(path);
			$location.replace();
		}
	}
};
