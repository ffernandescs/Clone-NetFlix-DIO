fetch(requests.fetchNetflixOrignals)
.then((res) => res.json())
.then((data) => {
    const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)]
    const banner = document.querySelector('.banner img')
    const bannerTitle = document.querySelector('.bannerTitle')
    const bannerDesc = document.querySelector('.bannerDesc')
    banner.src = IMG_URL + setMovie.backdrop_path
    bannerTitle.innerHTML = setMovie.name
    bannerDesc.innerHTML = setMovie.overview


    const requestInfo = {
        fetchNetflixOrignals2: `${BASE_URL}/tv/${setMovie.id}?${API_KEY}&with_networks=213`,

    }

    fetch(requestInfo.fetchNetflixOrignals2)
    .then((res) => res.json())
    .then((data) => {
        data.genres.forEach(genre => {
            const textGenre = document.querySelector('.textCategorias');
            const genreTag = `<span>${genre.name}</span>`
            textGenre.insertAdjacentHTML('beforeend', genreTag)
        })
    }) 
})


fetch(requests.fetchNetflixOrignals)
.then((res) => res.json())
.then((data) => {
    data.results.forEach(movie => {

        const movieEl = document.querySelector('.containerSlider');
        const itemSlider = `<div class="slide">
                                <img src="${IMG_URL}${movie.backdrop_path}">
                                <div class="containerMovie">
                                    <div class="buttonControls">
                                        <div class="btnLp">
                                            <button type="button" class="btn btn-light ">
                                            <i class="bi bi-play-fill px-0"></i>
                                            </button>
                                            <button type="button" class="btn btn-dark ">
                                            <i class="bi bi-plus"></i>
                                            </button>
                                            <button type="button" class="btn btn-dark ">
                                            <i class="bi bi-hand-thumbs-up"></i>
                                            </button>
                                            <button type="button" class="btn btn-dark ">
                                            <i class="bi bi-hand-thumbs-down"></i>
                                            </button>
                                        </div>

                                        
                                        <button type="button" class="btn btn-dark ">
                                        <i class="bi bi-chevron-down"></i>
                                        </button>
                                    </div>
                                    <div class="textInfo">
                                        <h3>${movie.name}</h3>
                                        <h4>${movie.vote_average} Pontos</h4>
                                    </div>
                                </div>
                            </div>`

        movieEl.insertAdjacentHTML('beforeend', itemSlider)
    })
})

fetch(requests.fetchTrending)
.then((res) => res.json())
.then((data) => {

    data.results.forEach(movie => {

        const movieEl = document.querySelector('.box1');
        const itemSlider = `<div class="slide">
                                <img src="${IMG_URL}${movie.backdrop_path}">
                                <div class="containerMovie">
                                    <div class="buttonControls">
                                        <div class="btnLp">
                                            <button type="button" class="btn btn-light ">
                                            <i class="bi bi-play-fill px-0"></i>
                                            </button>
                                            <button type="button" class="btn btn-dark ">
                                            <i class="bi bi-plus"></i>
                                            </button>
                                            <button type="button" class="btn btn-dark ">
                                            <i class="bi bi-hand-thumbs-up"></i>
                                            </button>
                                            <button type="button" class="btn btn-dark ">
                                            <i class="bi bi-hand-thumbs-down"></i>
                                            </button>
                                        </div>

                                        
                                        <button type="button" class="btn btn-dark ">
                                        <i class="bi bi-chevron-down"></i>
                                        </button>
                                    </div>
                                    <div class="textInfo">
                                        <h3>${movie.original_name}</h3>
                                        <h4>${movie.vote_average} Pontos</h4>
                                    </div>
                                </div>
                            </div>`

        movieEl.insertAdjacentHTML('beforeend', itemSlider)

        
    })
})
fetch(requests.fetchTrending2)
.then((res) => res.json())
.then((data) => {

    data.results.forEach(movie => {

        const movieEl2 = document.querySelector('.box2');
        const itemSlider2 = `<div class="slide movie">
                                <img src="${IMG_URL}${movie.poster_path}">
                                <div class="containerMovie">
                                    <div class="buttonControls">
                                        <div class="btnLp">
                                            <button type="button" class="btn btn-light ">
                                            <i class="bi bi-play-fill px-0"></i>
                                            </button>
                                            <button type="button" class="btn btn-dark ">
                                            <i class="bi bi-plus"></i>
                                            </button>
                                            <button type="button" class="btn btn-dark ">
                                            <i class="bi bi-hand-thumbs-up"></i>
                                            </button>
                                            <button type="button" class="btn btn-dark ">
                                            <i class="bi bi-hand-thumbs-down"></i>
                                            </button>
                                        </div>

                                        
                                        <button type="button" class="btn btn-dark ">
                                        <i class="bi bi-chevron-down"></i>
                                        </button>
                                    </div>
                                    <div class="textInfo">
                                        <h3>${movie.title}</h3>
                                        <h4>${movie.vote_average} Pontos</h4>
                                    </div>
                                </div>
                            </div>`

        movieEl2.insertAdjacentHTML('beforeend', itemSlider2)

        
    })
})
