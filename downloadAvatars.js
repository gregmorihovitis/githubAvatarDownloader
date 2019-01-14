const request = require('request');
const auth = require('./secrets.js')

function getRepoContributors(repoOwner, repoName, callback) {
//https://api.github.com/repos/jquery/jquery/contributors
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': "auth.githubToken"
    }
  };
}

//Test Code
getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});


