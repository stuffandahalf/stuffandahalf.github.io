function homeController($scope, $location, $routeParams)
{
	if ($routeParams.redirectTo) {
		console.log('here');
		const path = $routeParams.redirectTo;
		$location.search({});
		$location.path(path);
	}
}

