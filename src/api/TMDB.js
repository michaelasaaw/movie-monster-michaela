const axios = require('axios')
const PUBLIC_API_KEY = '083fa5e11411b1e085ce96b058432e29'
const mdb = require('moviedb')(PUBLIC_API_KEY)

class TMDB {
    search(inputValue, callback) {  
        mdb.searchMovie({ query: inputValue }, (err, res) => {
            if (err) { 
                console.error(err);
            } else {
                callback(res);
            }
        });
    }  

    createRequestToken() {
       axios.get('https://api.themoviedb.org/3/authentication/token/new?api_key=' + PUBLIC_API_KEY)
        .then(function (response) {
            if (window.location === "movie-monster-michaela.herokuapp.com" ) {
                window.location.href = "https://www.themoviedb.org/authenticate/" + response.data.request_token + "?redirect_to=https://movie-monster-michaela.herokuapp.com/approved?request_token=" +  response.data.request_token;
            }else {
                window.location.href = "https://www.themoviedb.org/authenticate/" + response.data.request_token + "?redirect_to=http://5.57.244.204:3000/approved?request_token=" +  response.data.request_token;
            }
            
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    createSession(requestToken) {
        axios.post('https://api.themoviedb.org/3/authentication/session/new?api_key=' + PUBLIC_API_KEY, {
            request_token: requestToken,
          })
          .then(function (response) {
            localStorage.session_id = response.data.session_id;
            this.setAccountDetails(response.data.session_id)
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    setAccountDetails(session_id) {
        axios.get('https://api.themoviedb.org/3/authentication/token/new?api_key=' + PUBLIC_API_KEY + '&session_id=' + session_id )
        .then(function (response) {
            localStorage.account_id = response.data.id;
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    getFavouritesMovies(callback){
        axios.get(
            'https://api.themoviedb.org/3/account/' + localStorage.account_id + 
            '/favorite/movies?api_key=' + PUBLIC_API_KEY + 
            '&session_id=' + localStorage.session_id +  '&language=en-US&sort_by=created_at.asc&page=1'
        )
        .then(function (response) {
            callback(response)
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    addToFavourites(movieID, callback) {
        axios.post('https://api.themoviedb.org/3/account/'+ localStorage.account_id +'/favorite?api_key=' + PUBLIC_API_KEY + '&session_id=' + localStorage.session_id, {
            media_type: "movie",
            media_id: Number(movieID),
            favorite: true
          })
          .then(function (response) {
            console.log(response)
            callback(response)
          })
          .catch(function (error, response) {
            console.log(error);
          });
    }

    getWatchlist(callback) {
        axios.get(
            'https://api.themoviedb.org/3/account/' + localStorage.account_id + 
            '/watchlist/movies?api_key=' + PUBLIC_API_KEY + 
            '&session_id=' + localStorage.session_id +  '&language=en-US&sort_by=created_at.asc&page=1'
        )
        .then(function (response) {
            callback(response)
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    addToWatchlist(movieID, callback){
        axios.post('https://api.themoviedb.org/3/account/'+ localStorage.account_id +'/watchlist?api_key=' + PUBLIC_API_KEY + '&session_id=' + localStorage.session_id, {
            media_type: "movie",
            media_id: Number(movieID),
            watchlist: true
          })
          .then(function (response) {
            console.log(response)
            callback(response)
          })
          .catch(function (error, response) {
            console.log(error);
          });
    }
}

export default TMDB