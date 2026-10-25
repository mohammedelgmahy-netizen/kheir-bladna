// Network-only worker: lets Chrome offer "Install app". Caches nothing, so it never touches other apps on this domain.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => e.respondWith(fetch(e.request)));
