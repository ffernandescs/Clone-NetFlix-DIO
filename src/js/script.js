const API_KEY = 'api_key=01c872009e3da59bda66ffbb471393ae&language=pt-BR';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/original'


const requests = {
    fetchPopular: `${BASE_URL}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${API_KEY}&language-pt-BR`,
    fetchTrending: `${BASE_URL}/trending/tv/week?${API_KEY}`,
    fetchTrending2: `${BASE_URL}/trending/movie/week?${API_KEY}`,
    fetchNetflixOrignals: `${BASE_URL}/discover/tv?${API_KEY}&with_networks=213`,
    fetchActionMovies: `${BASE_URL}/discover/movie?${API_KEY}&with_genres=28`,
    fetchComedyMovies: `${BASE_URL}/discover/movie?${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `${BASE_URL}/discover/movie?${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `${BASE_URL}/discover/movie?${API_KEY}&with_genres=35`,
    fetchDocumentaries: `${BASE_URL}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${API_KEY}&language-pt-BR`,
  };

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
            const firstDate = new Date(data.first_air_date)
            const bannerPont = document.querySelector('.bannerPont')
            const bannerYear = document.querySelector('.bannerYear')
            const bannerTemp = document.querySelector('.bannerTemp')
        
            bannerPont.innerHTML = data.vote_average + ' ' + 'Pontos'
            bannerYear.innerHTML = firstDate.getFullYear();
            bannerTemp.innerHTML = data.number_of_seasons + ' ' + 'Temporadas'
            
        
        })
    })
    
    const btnInfo = document.querySelector('.btnInfo')
    const popup = document.querySelector('.popupBox')


    btnInfo.addEventListener('click', () => {
        const textBanner = document.querySelector('.textBanner');
        const bannerPopup = document.querySelector('.bannerPopup img');
        const textInfoPonto = document.querySelector('.pontos h4');
        const descPopup = document.querySelector('.descPopup');
        popup.classList.add('active')
        
        textBanner.innerHTML = setMovie.name
        descPopup.innerHTML = setMovie.overview
        textInfoPonto.innerHTML = setMovie.vote_average + ' ' + 'Pontos'
        bannerPopup.src = `${IMG_URL}${setMovie.backdrop_path}`

        fetch(requestInfo.fetchNetflixOrignals2)
        .then((res) => res.json())
        .then((data) => {
            data.genres.forEach(genre => {
                const textGenre = document.querySelector('.categoriasPopup');
                const genreTag = `<span>${genre.name}</span>`
                textGenre.insertAdjacentHTML('beforeend', genreTag)
            })
        }) 
        
    })


})


fetch(requests.fetchNetflixOrignals)
.then((res) => res.json())
.then((data) => {
    data.results.forEach(movie => {
        const movieEl = document.querySelector('.containerSlider');
        const itemSlider = `<div class="slide" data-movie="${movie.id}">
                                <img class="slideImg" src="${IMG_URL}${movie.backdrop_path}" data-movie="${movie.id}">
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
                                            <button type="button" class="btn btn-dark" >
                                            <i class="bi bi-hand-thumbs-down"></i>
                                            </button>
                                        </div>

                                        
                                        <button type="button" class="btn btn-dark btnPopupOpen">
                                        <i class="bi bi-chevron-down"></i>
                                        </button>
                                    </div>
                                    <div class="textInfo">
                                        <h3 class="textName">${movie.name}</h3>
                                        <h4>${movie.vote_average} Pontos</h4>
                                    </div>
                                </div>
                            </div>`

        movieEl.insertAdjacentHTML('beforeend', itemSlider)


        const telPopup = document.querySelector(`[data-movie="${movie.id}"] .slideImg`);
        const popup = document.querySelector('.popupBox')
        const requestInfo = {
            fetchNetflixOrignals2: `${BASE_URL}/tv/${movie.id}?${API_KEY}&with_networks=213`,
            
        }

        telPopup.addEventListener('click', () => {
            const textBanner = document.querySelector('.textBanner');
            const bannerPopup = document.querySelector('.bannerPopup img');
            const textInfoPonto = document.querySelector('.pontos h4');
            const descPopup = document.querySelector('.descPopup');
            popup.classList.add('active')
            
            textBanner.innerHTML = movie.name
            descPopup.innerHTML = movie.overview
            textInfoPonto.innerHTML = movie.vote_average + ' ' + 'Pontos'
            bannerPopup.src = `${IMG_URL}${movie.backdrop_path}`

            fetch(requestInfo.fetchNetflixOrignals2)
            .then((res) => res.json())
            .then((data) => {
                data.genres.forEach(genre => {
                    const textGenre = document.querySelector('.categoriasPopup');
                    const genreTag = `<span>${genre.name}</span>`
                    textGenre.insertAdjacentHTML('beforeend', genreTag)
                })
            }) 
            
        })
    })
})

fetch(requests.fetchTrending)
.then((res) => res.json())
.then((data) => {

    data.results.forEach(movie => {

        const movieEl = document.querySelector('.box1');
        const itemSlider = `<div class="slide" data-movie="${movie.id}">
                                <img class="slideImg" src="${IMG_URL}${movie.backdrop_path}" data-movie="${movie.id}">
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
                                            <button type="button" class="btn btn-dark" >
                                            <i class="bi bi-hand-thumbs-down"></i>
                                            </button>
                                        </div>

                                        
                                        <button type="button" class="btn btn-dark btnPopupOpen">
                                        <i class="bi bi-chevron-down"></i>
                                        </button>
                                    </div>
                                    <div class="textInfo">
                                        <h3 class="textName">${movie.name}</h3>
                                        <h4>${movie.vote_average} Pontos</h4>
                                    </div>
                                </div>
                            </div>`

        movieEl.insertAdjacentHTML('beforeend', itemSlider)


        const telPopup = document.querySelector(`[data-movie="${movie.id}"] .slideImg`);
        const popup = document.querySelector('.popupBox')
        const requestInfo = {
        fetchNetflixOrignals2: `${BASE_URL}/tv/${movie.id}?${API_KEY}&with_networks=213`,

        }

        telPopup.addEventListener('click', () => {

        const textBanner = document.querySelector('.textBanner');
        const bannerPopup = document.querySelector('.bannerPopup img');
        const textInfoPonto = document.querySelector('.pontos h4');
        const descPopup = document.querySelector('.descPopup');
        popup.classList.add('active')

        textBanner.innerHTML = movie.name
        descPopup.innerHTML = movie.overview
        textInfoPonto.innerHTML = movie.vote_average + ' ' + 'Pontos'
        bannerPopup.src = `${IMG_URL}${movie.backdrop_path}`

        fetch(requestInfo.fetchNetflixOrignals2)
        .then((res) => res.json())
        .then((data) => {
            data.genres.forEach(genre => {
                const textGenre = document.querySelector('.categoriasPopup');
                const genreTag = `<span>${genre.name}</span>`
                textGenre.insertAdjacentHTML('beforeend', genreTag)
                })
                }) 

            })
        })
})

fetch(requests.fetchTrending2)
.then((res) => res.json())
.then((data) => {

    data.results.forEach(movie => {

        const movieEl2 = document.querySelector('.box2');
        const itemSlider2 = `<div class="slide movie" data-movie="${movie.id}">
                                <img class="slideImg" src="${IMG_URL}${movie.poster_path}" data-movie="${movie.id}">
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
        const telPopup = document.querySelector(`[data-movie="${movie.id}"] .slideImg`);
        const popup = document.querySelector('.popupBox')
        const requestInfo = {
        fetchNetflixOrignals2: `${BASE_URL}/movie/${movie.id}?${API_KEY}&with_networks=213`,

        }

        telPopup.addEventListener('click', () => {

        const textBanner = document.querySelector('.textBanner');
        const bannerPopup = document.querySelector('.bannerPopup img');
        const textInfoPonto = document.querySelector('.pontos h4');
        const descPopup = document.querySelector('.descPopup');
        popup.classList.add('active')

        textBanner.innerHTML = movie.title
        descPopup.innerHTML = movie.overview
        textInfoPonto.innerHTML = movie.vote_average + ' ' + 'Pontos'
        bannerPopup.src = `${IMG_URL}${movie.backdrop_path}`

        fetch(requestInfo.fetchNetflixOrignals2)
        .then((res) => res.json())
        .then((data) => {
            data.genres.forEach(genre => {
                const textGenre = document.querySelector('.categoriasPopup');
                const genreTag = `<span>${genre.name}</span>`
                textGenre.insertAdjacentHTML('beforeend', genreTag)
                })
                }) 

            })
        
        
    })
})


fetch(requests.fetchActionMovies)
.then((res) => res.json())
.then((data) => {

    data.results.forEach(movie => {

        const movieEl2 = document.querySelector('.box3');
        const itemSlider2 = `<div class="slide movie" data-movie="${movie.id}">
                                <img class="slideImg" src="${IMG_URL}${movie.poster_path}" data-movie="${movie.id}">
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
        
        const telPopup = document.querySelector(`[data-movie="${movie.id}"] .slideImg`);
        const popup = document.querySelector('.popupBox')
        const requestInfo = {
        fetchNetflixOrignals2: `${BASE_URL}/movie/${movie.id}?${API_KEY}&with_networks=213`,

        }

        telPopup.addEventListener('click', () => {
            console.log('adsa')

        const textBanner = document.querySelector('.textBanner');
        const bannerPopup = document.querySelector('.bannerPopup img');
        const textInfoPonto = document.querySelector('.pontos h4');
        const descPopup = document.querySelector('.descPopup');
        popup.classList.add('active')

        textBanner.innerHTML = movie.title
        descPopup.innerHTML = movie.overview
        textInfoPonto.innerHTML = movie.vote_average + ' ' + 'Pontos'
        bannerPopup.src = `${IMG_URL}${movie.backdrop_path}`

        fetch(requestInfo.fetchNetflixOrignals2)
        .then((res) => res.json())
        .then((data) => {
            data.genres.forEach(genre => {
                const textGenre = document.querySelector('.categoriasPopup');
                const genreTag = `<span>${genre.name}</span>`
                textGenre.insertAdjacentHTML('beforeend', genreTag)
                })
                }) 

            })
        
        
    })
})

fetch(requests.fetchComedyMovies)
.then((res) => res.json())
.then((data) => {

    data.results.forEach(movie => {

        const movieEl2 = document.querySelector('.box4');
        const itemSlider2 = `<div class="slide movie" data-movie="${movie.id}">
                                <img class="slideImg" src="${IMG_URL}${movie.poster_path}" data-movie="${movie.id}">
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
        
        const telPopup = document.querySelector(`[data-movie="${movie.id}"] .slideImg`);
        const popup = document.querySelector('.popupBox')
        const requestInfo = {
        fetchNetflixOrignals2: `${BASE_URL}/movie/${movie.id}?${API_KEY}&with_networks=213`,

        }

        telPopup.addEventListener('click', () => {
            console.log('adsa')

        const textBanner = document.querySelector('.textBanner');
        const bannerPopup = document.querySelector('.bannerPopup img');
        const textInfoPonto = document.querySelector('.pontos h4');
        const descPopup = document.querySelector('.descPopup');
        popup.classList.add('active')

        textBanner.innerHTML = movie.title
        descPopup.innerHTML = movie.overview
        textInfoPonto.innerHTML = movie.vote_average + ' ' + 'Pontos'
        bannerPopup.src = `${IMG_URL}${movie.backdrop_path}`

        fetch(requestInfo.fetchNetflixOrignals2)
        .then((res) => res.json())
        .then((data) => {
            data.genres.forEach(genre => {
                const textGenre = document.querySelector('.categoriasPopup');
                const genreTag = `<span>${genre.name}</span>`
                textGenre.insertAdjacentHTML('beforeend', genreTag)
                })
                }) 

            })
        
        
    })
})

fetch(requests.fetchHorrorMovies)
.then((res) => res.json())
.then((data) => {

    data.results.forEach(movie => {

        const movieEl2 = document.querySelector('.box5');
        const itemSlider2 = `<div class="slide movie" data-movie="${movie.id}">
                                <img class="slideImg" src="${IMG_URL}${movie.poster_path}" data-movie="${movie.id}">
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
        
        const telPopup = document.querySelector(`[data-movie="${movie.id}"] .slideImg`);
        const popup = document.querySelector('.popupBox')
        const requestInfo = {
        fetchNetflixOrignals2: `${BASE_URL}/movie/${movie.id}?${API_KEY}&with_networks=213`,

        }

        telPopup.addEventListener('click', () => {
            console.log('adsa')

        const textBanner = document.querySelector('.textBanner');
        const bannerPopup = document.querySelector('.bannerPopup img');
        const textInfoPonto = document.querySelector('.pontos h4');
        const descPopup = document.querySelector('.descPopup');
        popup.classList.add('active')

        textBanner.innerHTML = movie.title
        descPopup.innerHTML = movie.overview
        textInfoPonto.innerHTML = movie.vote_average + ' ' + 'Pontos'
        bannerPopup.src = `${IMG_URL}${movie.backdrop_path}`

        fetch(requestInfo.fetchNetflixOrignals2)
        .then((res) => res.json())
        .then((data) => {
            data.genres.forEach(genre => {
                const textGenre = document.querySelector('.categoriasPopup');
                const genreTag = `<span>${genre.name}</span>`
                textGenre.insertAdjacentHTML('beforeend', genreTag)
                })
                }) 

            })
        
        
    })
})

fetch(requests.fetchRomanceMovies)
.then((res) => res.json())
.then((data) => {

    data.results.forEach(movie => {

        const movieEl2 = document.querySelector('.box6');
        const itemSlider2 = `<div class="slide movie" data-movie="${movie.id}">
                                <img class="slideImg" src="${IMG_URL}${movie.poster_path}" data-movie="${movie.id}">
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
        
        const telPopup = document.querySelector(`[data-movie="${movie.id}"] .slideImg`);
        const popup = document.querySelector('.popupBox')
        const requestInfo = {
        fetchNetflixOrignals2: `${BASE_URL}/movie/${movie.id}?${API_KEY}&with_networks=213`,

        }

        telPopup.addEventListener('click', () => {
            console.log('adsa')

        const textBanner = document.querySelector('.textBanner');
        const bannerPopup = document.querySelector('.bannerPopup img');
        const textInfoPonto = document.querySelector('.pontos h4');
        const descPopup = document.querySelector('.descPopup');
        popup.classList.add('active')

        textBanner.innerHTML = movie.title
        descPopup.innerHTML = movie.overview
        textInfoPonto.innerHTML = movie.vote_average + ' ' + 'Pontos'
        bannerPopup.src = `${IMG_URL}${movie.backdrop_path}`

        fetch(requestInfo.fetchNetflixOrignals2)
        .then((res) => res.json())
        .then((data) => {
            data.genres.forEach(genre => {
                const textGenre = document.querySelector('.categoriasPopup');
                const genreTag = `<span>${genre.name}</span>`
                textGenre.insertAdjacentHTML('beforeend', genreTag)
                })
                }) 

            })
        
        
    })
})

fetch(requests.fetchDocumentaries)
.then((res) => res.json())
.then((data) => {

    data.results.forEach(movie => {

        const movieEl2 = document.querySelector('.box7');
        const itemSlider2 = `<div class="slide movie" data-movie="${movie.id}">
                                <img class="slideImg" src="${IMG_URL}${movie.poster_path}" data-movie="${movie.id}">
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
        
        const telPopup = document.querySelector(`[data-movie="${movie.id}"] .slideImg`);
        const popup = document.querySelector('.popupBox')
        const requestInfo = {
        fetchNetflixOrignals2: `${BASE_URL}/movie/${movie.id}?${API_KEY}&with_networks=213`,

        }

        telPopup.addEventListener('click', () => {
            console.log('adsa')

        const textBanner = document.querySelector('.textBanner');
        const bannerPopup = document.querySelector('.bannerPopup img');
        const textInfoPonto = document.querySelector('.pontos h4');
        const descPopup = document.querySelector('.descPopup');
        popup.classList.add('active')

        textBanner.innerHTML = movie.title
        descPopup.innerHTML = movie.overview
        textInfoPonto.innerHTML = movie.vote_average + ' ' + 'Pontos'
        bannerPopup.src = `${IMG_URL}${movie.backdrop_path}`

        fetch(requestInfo.fetchNetflixOrignals2)
        .then((res) => res.json())
        .then((data) => {
            data.genres.forEach(genre => {
                const textGenre = document.querySelector('.categoriasPopup');
                const genreTag = `<span>${genre.name}</span>`
                textGenre.insertAdjacentHTML('beforeend', genreTag)
                })
                }) 

            })
        
        
    })
})








const btnClosePopPup = document.querySelector('.btnClose');

btnClosePopPup.addEventListener('click', () => {
    const telaPopup = document.querySelector('.popupBox');
    const categoriasPopup = document.querySelector('.categoriasPopup');

    telaPopup.classList.remove('active')
    categoriasPopup.innerHTML = ''
    
})

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(scrollY > 10) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')
    }
    
  
  })

  const containerControls = document.querySelectorAll('[data-control]');



  containerControls.forEach(containerControls => {
    containerControls.addEventListener('mouseover', () => {
        if(containerControls.dataset.control === '1') {
            document.querySelector(`[data-control="1"] .btnPosition`).classList.add('active')
        }
        if(containerControls.dataset.control === '2') {
            document.querySelector(`[data-control="2"] .btnPosition`).classList.add('active')
        }
        if(containerControls.dataset.control === '3') {
            document.querySelector(`[data-control="3"] .btnPosition`).classList.add('active')
        }
        if(containerControls.dataset.control === '4') {
            document.querySelector(`[data-control="4"] .btnPosition`).classList.add('active')
        }
    })
})

  containerControls.forEach(containerControls => {
    containerControls.addEventListener('mouseout', () => {
        if(containerControls.dataset.control === '1') {
            document.querySelector(`[data-control="1"] .btnPosition`).classList.remove('active')
        }
        if(containerControls.dataset.control === '2') {
            document.querySelector(`[data-control="2"] .btnPosition`).classList.remove('active')
        }
        if(containerControls.dataset.control === '3') {
            document.querySelector(`[data-control="3"] .btnPosition`).classList.remove('active')
        }
        if(containerControls.dataset.control === '4') {
            document.querySelector(`[data-control="4"] .btnPosition`).classList.remove('active')
        }
    })
})



