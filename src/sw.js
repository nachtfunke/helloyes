// Thank you, Chris Ferdinandi! https://gomakethings.com/improving-web-font-performance-with-service-workers/

addEventListener('install', event => {
    const fontFiles = [
        'assets/fonts/poppins-italic-subset.woff2',
        'assets/fonts/poppins-italic-subset.zopfli.woff',
        'assets/fonts/poppins-medium-subset.woff2',
        'assets/fonts/poppins-medium-subset.zopfli.woff',
        'assets/fonts/poppins-regular-subset.woff2',
        'assets/fonts/poppins-regular-subset.zopfli.woff',
        'assets/fonts/poppins-semibold-subset.woff2',
        'assets/fonts/poppins-semibold-subset.zopfli.woff',
        'assets/fonts/work-sans-variable-subset.woff2',
        'assets/fonts/work-sans-variable-subset.zopfli.woff'
    ]

    event.waitUntil(caches.open('core').then( cache => {
        cache.add(new Request('css/fonts.css'));
        fontFiles.forEach(file => cache.add(new Request(file)));
        return;
    }));
});

addEventListener('fetch', event => {
    var request = event.request;

    // Bug fix
	// https://stackoverflow.com/a/49719964
	if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') return;

    if (request.headers.get('Accept').includes('work-sans') || request.url.includes('poppins') || request.url.includes('css/fonts.css')) {
		event.respondWith(caches.match(request).then(response => response || fetch(request).then(response => response)));
	}
});