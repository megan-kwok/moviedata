const getData = async (url, params) => {
  try {
    return await axios.get(url, params);
  } catch (error) {
    console.log(error)
  }
};

get.addEventListener('click', async (_event) => {
  selectElement = document.querySelector('#Movies');
  id = selectElement.options[selectElement.selectedIndex].value;

  const movieData = await getMovies(id);
  callMovies(movieData)
});

function callMovies(movieData) {
  document.getElementById('div').innerHTML = "";

  const title = document.createElement("h2");
  title.innerHTML = movieData["title"];
  title.setAttribute("id", "title");
  document.getElementById("div").appendChild(title);

  const overview = document.createElement("p");
  overview.innerHTML = 'Overview: ' + movieData['overview'];
  overview.setAttribute('id', 'overview');
  document.getElementById('div').appendChild(overview);
  
  const runtime = document.createElement("p")
  runtime.innerHTML = 'Runtime: ' + movieData ['runtime'];
  runtime.setAttribute('id', 'runtime');
  document.getElementById('div').appendChild(runtime);

  const release_date = document.createElement ("p")
  release_date.innerHTML = 'Release Date: ' + movieData ['release_date'];
  release_date.setAttribute('id' , 'release_date');
  document.getElementById('div').appendChild(release_date);

  const popularity = document.createElement("p");
  popularity.innerHTML = 'Popularity: ' + movieData["popularity"];
  popularity.setAttribute("id", "popularity");
  document.getElementById("div").appendChild(popularity);

  const budget = document.createElement('p');
  budget.innerHTML = 'Budget: ' + movieData ["budget"];
  budget.setAttribute('id' , 'budget');
  document.getElementById('div').appendChild(budget);

  const vote_average = document.createElement('p');
  vote_average.innerHTML = "Vote Average: " + movieData ['vote_average'];
  vote_average.setAttribute('id' , 'vote_average');
  document.getElementById('div').appendChild(vote_average);

  const original_language = document.createElement("p");
  original_language.innerHTML = "Official Language: " + movieData["original_language"];
  original_language.setAttribute('id', 'original_language');
  document.getElementById('div').appendChild(original_language);

  const img1 = document.createElement("img");
  img1.src = 'https://image.tmdb.org/t/p/w500' + movieData['poster_path'];
  img1.setAttribute('id', 'img1');
  document.getElementById('div').appendChild(img1);

  const img2 = document.createElement("img");
  img2.src = 'https://image.tmdb.org/t/p/w500' + movieData['backdrop_path'];
  img2.setAttribute('id', 'img2');
  document.getElementById('div').appendChild(img2);
}

const getMovies = async (id) => {
  const movieData = await getData(`https://api.themoviedb.org/3/movie/${id}`, {
      params: {
          api_key: "26ca7d300d9e397095fa7e1435f5eb3d",
      }
  });
  return movieData.data;
}