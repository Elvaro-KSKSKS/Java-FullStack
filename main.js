$(document).ready(function() {
    const avatar = $('#avatar');
    const name = $('#name');
    const username = $('#username');
    const repositories = $('#repositories');
    const followers = $('#followers');
    const following = $('#following');
    const link = $('#link');
    console.log(avatar);

    fetch('https://api.github.com/users/elvaro-ksksks')
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            avatar.attr('src', json.avatar_url);
            name.text(json.name);
            username.text(json.login);
            repositories.text(json.public_repos);
            followers.text(json.followers);
            following.text(json.following);
            link.attr('href', json.html_url);
        })
        .catch(function(erro) {
            throw new Error('Ocorreu um erro ao obter os dados.');
        });
});