'use strict';

function blogPageController($scope, $routeParams, $http, blogData)
{
	$scope.$watch(function () {
		if (!blogData.currentArticle) {
			if (!blogData.blog) {
				getBlogArticles($http, blogData).then(function (response) {
					$scope.article = blogData.blog.querySelector('[url=' + $routeParams.article);
				}, function (response) {
					console.log(response);
				});
			} else {
				$scope.article = blogData.blog.querySelector('[url=' + $routeParams.article);
			}
		} else {
			$scope.article = blogData.currentArticle;
		}
	});
	
	$scope.u = blogUtils;
}
