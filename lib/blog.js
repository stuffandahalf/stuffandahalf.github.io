'use strict';

const blogFactory = function () {
	return {
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
			const dateStr = this.getContents(element, childTag, join);
			const date = new Date(dateStr);
			return date.toLocaleDateString('en-us', {
				month: 'long',
				day: 'numeric',
				year: 'numeric'
			});
		}
	};
}
