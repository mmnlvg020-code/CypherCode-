/**
 * ==============================================================================
 * SERVICE WORKER (service-worker.js)
 * ==============================================================================
 * Este archivo es el responsable de hacer que la aplicación sea una PWA 
 * (Progressive Web App). Se ejecuta en un hilo separado del navegador y su
 * función principal es interceptar las peticiones de red para servir los 
 * archivos desde la memoria caché. Esto permite que la app funcione SIN INTERNET
 * y que cargue instantáneamente.
 * ==============================================================================
 */

// Nombre de la versión del caché. Si haces un cambio importante en la app, 
// cambia este número (ej. v64) para obligar a los navegadores a descargar los nuevos archivos.
const CACHE_NAME = 'guia-ingles-cache-v63';

// Lista de archivos vitales que se van a descargar y guardar en el dispositivo 
// del usuario la primera vez que entre a la página.
const FILES_TO_CACHE = [
  'index.html',
  'styles.css',
  'app.js',
  'service-worker.js',
  'data/topics.js',
  'data/flashcards.js',
  'data/quiz.js',
  'data/verbs.js',
  'data/exercises.js'
];

/**
 * EVENTO: 'install' (Instalación)
 * Se dispara la primera vez que el navegador lee este Service Worker.
 * Aquí abrimos nuestro "almacén" (caché) y guardamos todos los archivos de FILES_TO_CACHE.
 */
self.addEventListener('install', event => {
  // waitUntil asegura que el SW no se instale hasta que todo se haya descargado
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
      // skipWaiting() fuerza a que este nuevo SW tome el control inmediatamente,
      // sin esperar a que el usuario cierre todas las pestañas de la app.
      .then(() => self.skipWaiting())
  );
});

/**
 * EVENTO: 'activate' (Activación)
 * Se dispara justo después de que el SW se instala y toma el control.
 * Es el momento perfecto para "limpiar la basura" (borrar cachés de versiones anteriores).
 */
self.addEventListener('activate', event => {
  event.waitUntil(
    // Buscamos todas las llaves (nombres) de cachés guardados
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME) // Filtramos las que NO sean la versión actual
          .map(key => caches.delete(key))    // Y las borramos de la memoria
    ))
    // clients.claim() hace que el SW empiece a controlar las páginas abiertas inmediatamente
    .then(() => self.clients.claim())
  );
});

/**
 * EVENTO: 'fetch' (Petición de Red)
 * Se dispara CADA VEZ que la página pide algo (una imagen, un JS, un CSS, datos...).
 * Aquí aplicamos la estrategia "Cache First, falling back to Network" (Primero caché, luego red).
 */
self.addEventListener('fetch', event => {
  // Respondemos interceptando la petición
  event.respondWith(
    // 1. Miramos si lo que nos piden ya está guardado en el caché
    caches.match(event.request).then(cachedResponse => {
      // Si está en el caché, lo devolvemos instantáneamente (así funciona offline)
      if (cachedResponse) {
        return cachedResponse;
      }

      // 2. Si NO estaba en caché, intentamos descargarlo de internet (fetch)
      return fetch(event.request)
        .then(networkResponse => {
          // Si la respuesta falló o no es válida, devolvemos el error sin guardar nada
          if (!networkResponse || !networkResponse.ok) {
            return networkResponse;
          }

          // Si la descarga fue exitosa, abrimos el caché para guardar este archivo nuevo
          return caches.open(CACHE_NAME).then(cache => {
            // Solo cacheamos cosas que vengan de nuestro propio dominio (evitamos cachear APIs externas o extensiones)
            if (event.request.url.startsWith(self.location.origin)) {
              // Guardamos un clon (clone) porque la respuesta solo se puede leer una vez
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          });
        })
        .catch(() => {
          // 3. FALLO TOTAL (No estaba en caché y no hay internet)
          // Si lo que el usuario pedía era navegar a una página ('navigate'), 
          // le forzamos a ver nuestro 'index.html' en modo offline.
          if (event.request.mode === 'navigate') {
            return caches.match('index.html');
          }
        });
    })
  );
});
