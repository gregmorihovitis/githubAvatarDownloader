const request = require('request');
const auth = require('./secrets.js')

function getRepoContributors(repoOwner, repoName, callback) {
//https://api.github.com/repos/jquery/jquery/contributors
  let options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': "auth.githubToken"
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
    console.log(currUser.avatar_url);
  });
}



