//Greg Morihovitis
//Week 2 Day 1 GitHub Avatar downloader

require('dotenv').config()
const request = require('request');
const fs = require('fs');
let userInput = process.argv.slice(2);


function getRepoContributors(repoOwner, repoName, callback) {
  let options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': 'Token ' + process.env.token
    }
  };

//requests the given information and only procceeds if the repository is valid
  request(options, function(err, res, body) {
    if(res.statusCode === 200){
      let userData = JSON.parse(body);
      callback(err, userData);
    }

    else{
      console.log('Please enter a valid repo.')
    }
  });
}


function avatarURLS(err, userInfo){
  if(err) throw err;

  userInfo.forEach(currUser => {
    downloadImageByURL(currUser.avatar_url, 'avatars/' + currUser.login + '.png');
  });
}

function downloadImageByURL(url, filePath){

  request.get(url)
  .on('error', err => {throw err})

  .pipe(fs.createWriteStream(filePath), console.log("Download Complete!"));
}

//Checks the valid amount of inputs and if so executes code
if(userInput.length === 2){
  getRepoContributors(userInput[0], userInput[1], avatarURLS);
}
else{
  console.log('Please enter a valid owner name and repo name');
}



