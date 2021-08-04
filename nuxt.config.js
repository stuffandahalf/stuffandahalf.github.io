import Fragment from 'vue-fragment';

export default {
	target: 'static',
	ssr: false,
	head: {
		title: 'Gregory Norton',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.8/dist/semantic.min.css' }
		],
		script: [
			{ src: 'https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js' },
			{ src: 'https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.8/dist/semantic.min.js' }
		]
	},
	plugins: [ '@/plugins/fragment' ]
};

