/* Offline-tuki: appi latautuu välimuistista jos hallissa ei ole kenttää. */
const CACHE = "americano-v4";
const ASSETS = ["./", "./index.html"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  if (new URL(e.request.url).origin !== self.location.origin) return;
  // Välimuisti ensin (offline ja nopeus), mutta tuore versio haetaan aina taustalla
  // talteen, joten päivitys näkyy seuraavalla avauskerralla.
  const fresh = fetch(e.request).then(res => {
    if (res.ok) {
      const copy = res.clone();
      return caches.open(CACHE).then(c => c.put(e.request, copy)).then(() => res);
    }
    return res;
  });
  e.waitUntil(fresh.catch(() => {}));
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(hit =>
      hit || fresh.catch(() => caches.match("./index.html"))
    )
  );
});
