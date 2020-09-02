var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
exports.getComments = function(feedID) {
    function reqListener () {
        return this.responseText
      }
      
      var oReq = new XMLHttpRequest();
      oReq.addEventListener("load", reqListener);
      oReq.open("GET", "https://api.popjam.com/v1/feed-items/" + feedID + "/comments");
      oReq.send();   
}