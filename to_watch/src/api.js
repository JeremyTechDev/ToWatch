//Get data of the top TV Shows
export function fetchTVShows(page = 1) {
  const endpoint = window.encodeURI(
    `https://www.episodate.com/api/most-popular?page=1`
  );

  return fetch(endpoint)
    .then(res => res.json())
    .then(data => {
      return data.tv_shows
    });
}
