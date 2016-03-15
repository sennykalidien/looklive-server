'use strict';

var currentCacheName = 'looklive-assets-1.1';

this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('looklive-assets-1.0').then(function(cache) {
            return cache.addAll([
                './',
                '/assets/css/style.css',
                '/assets/images/header.jpg',
                '/assets/images/logo.png',
                '/assets/images/icons/icns-3319a2fd.svg',
                '/assets/js/lib/routie.min.js',
                '/assets/js/app.js',
                '/assets/js/modules/page-module.js',
                '/assets/js/modules/router-module.js',
                '/sw.js',
                '/api/feed'
            ]);
        }),
        caches.open(currentCacheName).then(function(cache) {
            console.log('caching', currentCacheName);
            return cache.addAll([
                './',
                '/assets/css/style.css',
                '/assets/images/header.jpg',
                '/assets/images/logo.png',
                '/assets/images/icons/icns-3319a2fd.svg',
                '/assets/js/lib/routie.min.js',
                '/assets/js/app.js',
                '/assets/js/modules/page-module.js',
                '/assets/js/modules/router-module.js',
                '/sw.js',
                '/api/feed'
            ]);
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
						return cacheName.startsWith('looklive-assets-1.0');
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

this.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if(response) {
                    //console.log('found cached response', response);
                    return response;
                } else {
                    //console.log('response not in cache, fetching it');
                    //return fetch(event.request);
                    return fetchAndCache(event);
                }
            })
    );
});

function fetchAndCache(event) {
    return fetch(event.request).then(function(response) {
        return caches.open('looklive-images-1.0').then(function(cache) {
            console.log('fetched and caching', event.request);
            cache.put(event.request, response.clone());
            return response;
        });
    });
};