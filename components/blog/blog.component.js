'use strict';

const blogComponent = {
	templateUrl: 'components/blog/blog.html',
	bindings: {
		articles: '<'
	},
	controller: function ($location, blogFactory) {
		angular.extend(this, blogFactory);
		
		this.article = null;
		
		this.open = function (article) {
			this.article = article;
			$location.path('/blog/' + article.getAttribute('url'));
		}
		
		this.$onInit = function () {
			console.log(this.articles);
		}
	}
};
