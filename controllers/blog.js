function blogController($scope, $http)
{
	$scope.articles = [];
	
	$http.get('https://raw.githubusercontent.com/stuffandahalf/stuffandahalf.github.io/angularjs/resources/blog/blog.xml').then(function (response) {
		//console.log(response);
		var parser = new DOMParser();
		const blogXml = parser.parseFromString(response.data, 'text/xml');
		console.log(blogXml);
		for (const articleXml of blogXml.getElementsByTagName('article')) {
			console.log(articleXml);
			var article = {
				date: articleXml.getElementsByTagName('date')[0].innerHTML,
				title: articleXml.getElementsByTagName('title')[0].innerHTML,
				abstract: articleXml.getElementsByTagName('abstract')[0].innerHTML,
				content: []
			};
			for (const paragraphXml of articleXml.getElementsByTagName('paragraph')) {
				article.content.push(paragraphXml.innerHTML);
			}
			$scope.articles.push(article);
		}
		console.log($scope.articles);
	}, function (response) {
		console.log(response);
	});
}

