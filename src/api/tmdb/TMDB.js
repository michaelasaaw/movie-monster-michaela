const axios = require('axios')
const PUBLIC_API_KEY = '083fa5e11411b1e085ce96b058432e29'
const BASE_API_URL = 'https://api.themoviedb.org/3/'

class TMDB {

    async getMoviesBySearch(inputValue) {  
        return await axios.get(`${BASE_API_URL}search/movie?api_key=${PUBLIC_API_KEY}&query=${inputValue}`)
    }

    async getRequestToken() {
        return await axios.get(`${BASE_API_URL}authentication/token/new?api_key=${PUBLIC_API_KEY}`)
    }

    async createSession(requestToken) {
        return await axios.post(`${BASE_API_URL}authentication/session/new?api_key=${PUBLIC_API_KEY}`, { request_token: requestToken })
    }

    async getAccountDetails(sessionID) {
        return await axios.get(`${BASE_API_URL}account/new?api_key=${PUBLIC_API_KEY}&session_id=${sessionID}`)
    }

    async getFavourites(){
        return await axios.get(`${BASE_API_URL}account/${localStorage.account_id}/favorite/movies?api_key=${PUBLIC_API_KEY}&session_id=${localStorage.session_id}&language=en-US&sort_by=created_at.asc&page=1`)
    }

    async manageFavourites(movieID, status) {
        return await axios.post(`${BASE_API_URL}account/${localStorage.account_id}/favorite?api_key=${PUBLIC_API_KEY}&session_id=${localStorage.session_id}`, {
            media_type: "movie",
            media_id: Number(movieID),
            favorite: status
          })
    }

    async getWatchlist(){
        return await axios.get(`${BASE_API_URL}account/${localStorage.account_id}/watchlist/movies?api_key=${PUBLIC_API_KEY}&session_id=${localStorage.session_id}&language=en-US&sort_by=created_at.asc&page=1`)
    }

    async manageWatchlist(movieID, status) {
        return await axios.post(`${BASE_API_URL}account/${localStorage.account_id}/watchlist?api_key=${PUBLIC_API_KEY}&session_id=${localStorage.session_id}`, {
            media_type: "movie",
            media_id: Number(movieID),
            watchlist: status
        })
    }

    async destroySession(sessionID) {
        return await axios.delete(`${BASE_API_URL}authentication/session?api_key=${PUBLIC_API_KEY}`, {
            session_id: sessionID
        })
    }

}

export default TMDB