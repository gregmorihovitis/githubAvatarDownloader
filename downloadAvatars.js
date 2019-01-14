const request = require('request');

function getRepoContributors(repoOwner, repoName, callback) {
//https://api.github.com/repos/jquery/jquery/contributors
}

//Test Code
getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});

//gregmorihovitis:9976f474ccd142e881324a3aa9613e3d127512f9