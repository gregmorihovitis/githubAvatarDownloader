const request = require('request');
const auth = require('./secrets.js')
const fs = require('fs');

function getRepoContributors(repoOwner, repoName, callback) {
  let options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': 'Token ' + auth.githubToken
    }
  };

  request(options, function(err, res, body) {
    let userData = JSON.parse(body);

    callback(err, userData);
    });
}

//Test Code
getRepoContributors("jquery", "jquery", avatarURLS);

function avatarURLS(err, userInfo){
  if(err) throw err;

  userInfo.forEach(currUser => {
    downloadImageByURL(currUser.avatar_url, 'avatars/' + currUser.login);
  });
}

function downloadImageByURL(url, filePath){

  request.get(url)
  .on('error', err => {throw err})

  .pipe(fs.createWriteStream(filePath), console.log("Download Complete!"));
}

// downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg");



