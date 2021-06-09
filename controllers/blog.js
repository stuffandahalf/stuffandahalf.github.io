'use strict';

function blogController($scope, $http, $location, blogData)
{
	$scope.blogData = blogData;
	
	getBlogArticles($http, blogData);
	
	$scope.u = blogUtils;
	
	$scope.goto = function (article) {
		blogData.article = article;
		$location.path('/blog/' + article.getAttribute('url'));
	}
}

