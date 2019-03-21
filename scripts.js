const app = document.getElementById('root')
var request = new XMLHttpRequest()
console.log(request);
request.open('GET', 'http://play-cricket.com/api/v2/match_detail.json?&match_id=3328002&api_token=212ca0102140da76011c0ed0e42c8378', true)
console.log(request);
request.onload = function() {
    // Begin accessing JSON data here
    console.log(request);
    var data = JSON.stringify(this.response)
    console.log(data);
}
  request.send()