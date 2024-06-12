// service-worker.js

// Define o nome do cache
const CACHE_NAME = 'rideshare-cache-v1';

// Lista de recursos a serem armazenados em cache
const urlsToCache = [
    '/',
    '/styles.css',
    '/manifest.json',
    '/icone_localizacao.png',
    '/icons/29x29.png',
    '/icons/40x40.png',
    '/icons/icons-144x144.png',
    '/icons/57x57.png',
    '/icons/58x58.png',
    '/icons/60x60.png',
    '/icons/80x80.png',
    '/icons/87x87.png',
    '/icons/114x114.png',
    '/icons/120x120.png',
    '/icons/512x512.png',
    '/icons/180x180.png',
    '/icons/1024x1024.png',
    '/cadastro.html' // Certifique-se de adicionar outras páginas que você queira disponibilizar offline
];

// Instalação do service worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

// Ativação do service worker
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});


self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
