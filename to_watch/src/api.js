//Get data of the top TV Shows
export function fetchTVShows() {
  const endpoint = window.encodeURI(
    `https://www.episodate.com/api/most-popular?page=1`
  );

  return fetch(endpoint)
    .then(res => res.json())
    .then(data => {
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
      
      for (let i in data.tv_shows) {
        getShowDetails(data.tv_shows[i].id).then(tvShow => {
          data.tv_shows[i].details = tvShow
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
      return data.tvShow
    });
}

/*
//converts the YYYY-MM-DD date format to MM YYYY format
      for (let i in data.tv_shows) {
        let date = data.tv_shows[i].start_date;
        date = new Date(date);
        data.tv_shows[i].start_date =
          months[date.getMonth()] + " " + date.getFullYear();
        return data.tv_shows;
      }
*/
