'use strict';

const blogPageComponent = {
	templateUrl: 'components/blogpage/blogpage.html',
	bindings: {
		article: '<'
	},
	controller: function (blogFactory) {
		angular.extend(this, blogFactory);
		
		//~ $scope.$watch(function () {
			//~ if (!blogData.currentArticle) {
				//~ if (!blogData.blog) {
					//~ getBlogArticles($http, blogData).then(function (response) {
						//~ $scope.article = blogData.blog.querySelector('[url=' + $routeParams.article);
					//~ }, function (response) {
						//~ console.log(response);
					//~ });
				//~ } else {
					//~ ctrl.article = blogData.blog.querySelector('[url=' + $routeParams.article);
				//~ }
			//~ } else {
				//~ ctrl.article = blogData.currentArticle;
			//~ }
		//~ });
		
		this.$onInit = function () {
			$('#blog-modal').modal();
		}
	}
};
