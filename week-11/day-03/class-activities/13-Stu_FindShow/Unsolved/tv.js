var fs = require("fs");
var axios = require('axios');

var TV = function() {
  this.findShow = function(show) {
    // The following URL can be used to search the TV Maze API for a given show
  
    axios({
      method: 'get',
      url: "http://api.tvmaze.com/singlesearch/shows?q=" + show,
      responseType: 'data'
    })
      .then(function(response) {
        //console.log(response)
        console.log( "show: " + show);
        fs.appendFileSync("log.txt", show + "\n" );
        console.log( "genres: " + response.data.genres);
        fs.appendFileSync("log.txt", response.data.genres + "\n" );
    });
};
}



module.exports = TV;
