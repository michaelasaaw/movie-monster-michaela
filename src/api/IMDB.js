const MovieDB = require('moviedb')('083fa5e11411b1e085ce96b058432e29');

class IMDB {
    constructor()
    searchMovie(title) {
        mdb.searchMovie({ query: 'Alien' }, (err, res) => {
            console.log(res);
        });
    }
}