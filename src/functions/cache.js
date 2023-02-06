// Function for adding API-call into Cache
export const addDataIntoCache = (cacheName, url, response) => {
  const data = new Response(JSON.stringify(response));

  if ("caches" in window) {
    caches.open(cacheName).then((cache) => {
      cache.put(url, data);
    });
  }
};
