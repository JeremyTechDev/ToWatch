//Get data of the top TV Shows
export function fetchTVShows(page = 1) {
  const endpoint = window.encodeURI(
    `https://www.episodate.com/api/most-popular?page=${page}`
  );

  return fetch(endpoint)
    .then(res => res.json())
    .then(data => {
      if (!data.items) {
        throw new Error(data.message);
      }
      return data
    });
}
