
var api = {

    // fetches user bio from github
    getBio(username){
        username = username.toLowerCase().trim();
        var url = "https://api.github.com/users/" + username;

        return fetch(url).then((response) => response.json());
    },

    // fetches user repositories from github
    getRepos(username){
        username = username.toLowerCase().trim();
        var url = "https://api.github.com/users/" + username + "/repos";

        return fetch(url).then((response) => response.json());
    }
};

module.exports = api;
