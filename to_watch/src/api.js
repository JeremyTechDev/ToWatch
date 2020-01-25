//Get data of the top TV Shows
export function fetchTVShows() {
  const endpoint = window.encodeURI(
    `https://www.episodate.com/api/most-popular?page=1`
  );

  return fetch(endpoint)
    .then(res => res.json())
    .then(data => {
      for (let i in data.tv_shows) {
        getShowDetails(data.tv_shows[i].id).then(tvShow => {
          data.tv_shows[i].details = tvShow;
        });
      }

      return data.tv_shows;
    });
}

export function getShowDetails(showId) {
  const endpoint = window.encodeURI(
    `https://www.episodate.com/api/show-details?q=${showId}`
  );

  return fetch(endpoint)
    .then(res => res.json())
    .then(data => {
      //convert to date to a more friendly format
      data.tvShow.start_date = convertDate(data.tvShow.start_date);

      return data.tvShow;
    });
}

export function handleSearch(q) {
  const endpoint = window.encodeURI(
    `https://www.episodate.com/api/search?q=${q}&page=1`
  );

  return fetch(endpoint)
    .then(res => res.json())
    .then(data => {
      return data.tv_shows;
    });
}

//Convert date to format MM YYYY like Jan 2020
function convertDate(date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  date = new Date(date);
  date = months[date.getMonth()] + " " + date.getFullYear();
  return date;
}
