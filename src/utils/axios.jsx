import axios from 'axios'

const instance =axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Mjc3NzgwZTA0ZTc0NTVhZjExMjllOWE1OGYyMjQ5YSIsIm5iZiI6MTczNDI0NzkwMS4yMjgsInN1YiI6IjY3NWU4NWRkMzhiYzdlMGRjMzVmNjllMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0weDcm_cholxV4Qn7dkfS4OKjpak0gz0O2LNvC3ZDII'
      }
})

export default instance