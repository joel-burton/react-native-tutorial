
var api = {

    // fetches user bio from github
    getBio(username) {
        username = username.toLowerCase().trim();
        var url = "https://api.github.com/users/" + username;

        return fetch(url).then((response) => response.json());
    },

    // fetches user repositories from github
    getRepos(username) {
        username = username.toLowerCase().trim();
        var url = "https://api.github.com/users/" + username + "/repos";

        return fetch(url).then((response) => response.json());
    },

    getNotes(username) {
        username = username.toLowerCase().trim();
        url = 'https://github-saver-9b85e.firebaseio.com/' + username + '.json';
        return fetch(url).then((response) => response.json());
    },

    addNote(username, note) {
        username = username.toLowerCase().trim();
        url = 'https://github-saver-9b85e.firebaseio.com/' + username + '.json';

        return fetch(url, {
            method: 'post',
            body: JSON.stringify(note)
        }).then((response) => response.json());
    }
};

module.exports = api;
