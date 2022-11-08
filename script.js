const getData = async (url, params) => {
  try {
    return await axios.get(url, params);
  } catch (error) {
    console.log(error)
  }
};

get.addEventListener('click', async (_event) => {
  selectElement = document.querySelector('#Movies');
  output = selectElement.options[selectElement.selectedIndex].value;
  if (output == 'dead apple') {
    const movieData = await getMovies1();
    console.log(movieData)
    callMovies(movieData)
  }
  if (output == 'the maze runner') {
    const movieData = await getMovies2();
    console.log(movieData)
    callMovies(movieData)
  }
  if (output == 'better days') {
    const movieData = await getMovies3();
    console.log(movieData)
    callMovies(movieData)
  }
  if (output == 'gotf') {
    const movieData = await getMovies4();
    console.log(movieData)
    callMovies(movieData)
  }
  if (output == '20thcengirl') {
    const movieData = await getMovies5();
    console.log(movieData)
    callMovies(movieData)
  }
  if (output == 'jtcote') {
    const movieData = await getMovies6();
    console.log(movieData)
    callMovies(movieData)
  }
  if (output == 'your eyes tell') {
    const movieData = await getMovies7();
    console.log(movieData)
    callMovies(movieData)
  }
  if (output == 'fairy tail') {
    const movieData = await getMovies8();
    console.log(movieData)
    callMovies(movieData)
  }
  if (output == 'jurassic park') {
    const movieData = await getMovies9();
    console.log(movieData)
    callMovies(movieData)
  }
  if (output == 'enola holmes 2') {
    const movieData = await getMovies10();
    console.log(movieData)
    callMovies(movieData)
  }
});

// 26ca7d300d9e397095fa7e1435f5eb3d

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

const getMovies1 = async () => {
  const movieData = await getData("https://api.themoviedb.org/3/movie/483455", {
    params: {
      api_key: "26ca7d300d9e397095fa7e1435f5eb3d",
      append_to_response: "videos",
    }
  });
  return movieData.data;
}

const getMovies2 = async () => {
  const movieData = await getData("https://api.themoviedb.org/3/movie/198663", {
    params: {
      api_key: "26ca7d300d9e397095fa7e1435f5eb3d",
      query: "the maze runner",
      append_to_response: "videos",
    }
  });
  return movieData.data;
}

const getMovies3 = async () => {
  const movieData = await getData("https://api.themoviedb.org/3/movie/575813", {
    params: {
      api_key: "26ca7d300d9e397095fa7e1435f5eb3d",
      query: "better days",
      append_to_response: "videos",
    }

  });
  return movieData.data;
}
const getMovies4 = async () => {
  const movieData = await getData("https://api.themoviedb.org/3/movie/76826", {
    params: {
      api_key: "26ca7d300d9e397095fa7e1435f5eb3d",
      query: "gotf",
      append_to_response: "videos",
    }

  });
  return movieData.data;
}
const getMovies5 = async () => {
  const movieData = await getData("https://api.themoviedb.org/3/movie/851644", {
    params: {
      api_key: "26ca7d300d9e397095fa7e1435f5eb3d",
      query: "20thcengirl",
      append_to_response: "videos",
    }

  });
  return movieData.data;
}
const getMovies6 = async () => {
  const movieData = await getData("https://api.themoviedb.org/3/movie/88751", {
    params: {
      api_key: "26ca7d300d9e397095fa7e1435f5eb3d",
      query: "jtcote",
      append_to_response: "videos",
    }

  });
  return movieData.data;
}
const getMovies7 = async () => {
  const movieData = await getData("https://api.themoviedb.org/3/movie/730154", {
    params: {
      api_key: "26ca7d300d9e397095fa7e1435f5eb3d",
      query: "your eyes tell",
      append_to_response: "videos",
    }

  });
  return movieData.data;
}
const getMovies8 = async () => {
  const movieData = await getData("https://api.themoviedb.org/3/movie/433422", {
    params: {
      api_key: "26ca7d300d9e397095fa7e1435f5eb3d",
      query: "fairy tail",
      append_to_response: "videos",
    }

  });
  return movieData.data;
}
const getMovies9 = async () => {
  const movieData = await getData("https://api.themoviedb.org/3/movie/329", {
    params: {
      api_key: "26ca7d300d9e397095fa7e1435f5eb3d",
      query: "jurassic park",
      append_to_response: "videos",
    }

  });
  return movieData.data;
}
const getMovies10 = async () => {
  const movieData = await getData("https://api.themoviedb.org/3/movie/497582", {
    params: {
      api_key: "26ca7d300d9e397095fa7e1435f5eb3d",
      query: "enola holmes 2",
      append_to_response: "videos",
    }

  });
  return movieData.data;
}