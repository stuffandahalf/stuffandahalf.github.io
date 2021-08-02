export default {
	target: 'static',
	ssr: false,
	head: {
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		],
		css: [
			/*'~/fomantic-ui/dist/semantic.css'*/
		],
		script: [
			/*{ src: '~/fomantic-ui/dist/semantic.js' }*/
		]
	}
};

