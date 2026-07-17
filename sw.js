/* New York — service worker
   Objectif : l'app démarre sans réseau, et les tuiles de carte déjà vues
   restent disponibles hors ligne (utile en roaming aux États-Unis). */

const SHELL = 'nyc-shell-v7';   // fichiers de l'app
const RUN   = 'nyc-run-v7';     // Leaflet + tuiles, mis en cache à l'usage

const FILES = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-180.png',
  './icon-192.png',
  './icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(SHELL)
      .then(c => Promise.allSettled(FILES.map(f => c.add(f))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== SHELL && k !== RUN).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const isTile = /basemaps\.cartocdn\.com|upload\.wikimedia\.org|en\.wikipedia\.org/.test(url.hostname);
  const isCdn  = url.hostname === 'cdnjs.cloudflare.com';

  // Tuiles et CDN : on sert le cache d'abord, on complète depuis le réseau.
  if (isTile || isCdn) {
    e.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(res => {
        const copy = res.clone();
        caches.open(RUN).then(c => c.put(req, copy));
        return res;
      }).catch(() => hit))
    );
    return;
  }

  // App : réseau d'abord (pour récupérer une mise à jour), cache en secours.
  if (url.origin === location.origin) {
    e.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(SHELL).then(c => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req).then(hit => hit || caches.match('./index.html')))
    );
  }
});
