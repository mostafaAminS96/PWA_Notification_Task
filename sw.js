this.addEventListener("install", (event) => {
    console.log("service worker installed");
    this.skipWaiting()
    event.waitUntil(
      caches
        .open("simpleApp-1")
        .then((cache) => {
          return cache.addAll([
            "register.html",
            "register.css"
          ]);
        })
        .catch((err) => console.log(err))
    );
  });

  
  this.addEventListener("activate", () => {
    console.log("Inside activate phase");
  });
  

  this.addEventListener("fetch", (event) => {
    console.log(event.request.url);
    event.respondWith(
      caches
        .match(event.request)
        .then((file) => {
          if (file) {
            console.log("founded in cache");
            return file;
          }
          console.log(event.request.url);
          return fetch(event.request.url);
        })
        .catch((err) => console.log(err))
    );
  });
  