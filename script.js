const getData = async (url, params) => {
  try {
    return await axios.get(url, params);
  } catch (error) {
    console.log(error)
  }
};

//  iframe.src = https://www.youtube.com/embed/${trailer}

function callMovies(movieData) {
  document.getElementById('div').innerHTML = "";

  const runtime = document.createElement("p")
  runtime.innerHTML = 'Runtime:' + movieData ['runtime']
  runtime.setAttribute('id', 'runtime');
  document.getElementById('div').appendChild(runtime);

  const overview = document.createElement("p");
  overview.innerHTML = 'Overview' + movieData['overview'];
  overview.setAttribute('id', 'overview');
  document.getElementById('div').appendChild(overview);

  const img = document.createElement("img");
  img.src = 'https://image.tmdb.org/t/p/w500' + movieData['poster_path'];
  img.setAttribute('id', 'img');
  document.getElementById('div').appendChild(img);
  console.log(movieData['poster_path'])

  const original_title = document.createElement("h1");
  original_title.innerHTML = movieData['original_title'];
  original_title.setAttribute('id', 'movietitle');
};

const getMovies1 = async () => {
  const movieData = await getData("https://api.themoviedb.org/3/movie/483455", {
    params: {
      api_key: "26ca7d300d9e397095fa7e1435f5eb3d",
      query: "dead apple",
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
  const movieData = await getData("https://api.themoviedb.org/3/movie/280", {
    params: {
      api_key: "26ca7d300d9e397095fa7e1435f5eb3d",
      query: "terminator",
      append_to_response: "videos",
    }

  });
  return movieData.data;
}

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
  if (output == 'terminator') {
    const movieData = await getMovies10();
    console.log(movieData)
    callMovies(movieData)
  }
});