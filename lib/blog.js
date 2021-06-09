'use strict';

async function getBlogArticles($http, blogData)
{
	return new Promise(function (resolve, reject) {
		//$http.get('https://raw.githubusercontent.com/stuffandahalf/stuffandahalf.github.io/angularjs/resources/blog/blog.xml').then(function (response) {
		$http.get('/resources/blog/blog.xml').then(function (response) {
			var parser = new DOMParser();
			blogData.blog = parser.parseFromString(response.data, 'text/xml').firstElementChild;
			resolve(response);
		}, function (response) {
			console.log(response);
			reject(response);
		});
	});
}

const blogUtils = {
	getContents: function (element, childTag, join='') {
		var out = '';
		const elems = element.getElementsByTagName(childTag);
		for (var i = 0; i < elems.length; i++) {
			if (i) {
				out += join;
			}
			out += elems[i].textContent;
		}
		return out;
	},
	getDate: function (element, childTag, join='') {
		const dateStr = blogUtils.getContents(element, childTag, join);
		const date = new Date(dateStr);
		return date.toLocaleDateString('en-us', {
			month: 'long',
			day: 'numeric',
			year: 'numeric'
		});
	}
}
