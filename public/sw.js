var currentCacheName = 'looklive-1.1';

this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('looklive-1.0').then(function(cache) {
            return cache.addAll([
                './',
                '/assets/css/style.css',
                '/assets/images/header.jpg',
                '/assets/images/icons/icns-3319a2fd.svg',
                '/assets/js/lib/routie.min.js',
                '/assets/js/lib/nanoajax.min.js',
                '/assets/js/app.js',
                '/assets/js/modules/page-module.js',
                '/assets/js/modules/router-module.js'
            ]);
        }),
        caches.open(currentCacheName).then(function(cache) {
            console.log('caching', currentCacheName);
            return cache.addAll([
                './',
                '/assets/css/style.css',
                '/assets/images/header.jpg',
                '/assets/images/icons/icns-3319a2fd.svg',
                '/assets/js/lib/routie.min.js',
                '/assets/js/lib/nanoajax.min.js',
                '/assets/js/app.js',
                '/assets/js/modules/page-module.js',
                '/assets/js/modules/router-module.js'
            ]);
        })        
    );
});


this.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if(response) {
                    console.log('found cached response', response);
                    return response;
                } else {
                    console.log('response not in cache, fetching it');
                    return fetch(event.request);
                }
            })
    );
});

this.addEventListener('activate', function(event) {
	console.log('delete old caches');
	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(
				cacheNames
					.filter(function(cacheName) {
						return cacheName.startsWith('looklive-1.');
					})
					.filter(function(cacheName) {
						return cacheName !== currentCacheName;
					})
					.map(function(cacheName) {
						console.log('deleted cache', cacheName);
						return caches.delete(cacheName);
					})
			);
		})
	);
});
