exports.getComments = function(feedID) {
    function reqListener () {
        console.log(this.responseText);
      }
      
      var oReq = new XMLHttpRequest();
      oReq.addEventListener("load", reqListener);
      oReq.open("GET", "https://api.popjam.com/v1/feed-items/" + feedID + "/comments");
      oReq.send();   
}