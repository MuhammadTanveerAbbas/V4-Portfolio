/* intentionally empty – prevents 404 from browser extensions */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());
