self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static").then((cache) => {
      return cache.addAll([
        "./",
        "./style.css",
        "./assets/logo-small.png",
        "./assets/logo-large.png",
       
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  console.log("Fetch request");
  e.respondWith(
    caches.match(e.request).then((reponse) => {
      return response || fetch(e.request);
    })
  );
});
