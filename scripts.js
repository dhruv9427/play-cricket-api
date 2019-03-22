var request = new XMLHttpRequest()
request.open('GET', 'http://play-cricket.com/api/v2/sites/3760/players?&api_token=212ca0102140da76011c0ed0e42c8378&include_everyone=yes&include_historic=no', true)
request.send()
request.onload = function() {
    var playerdata = JSON.stringify(this.response)
    console.log(playerdata);
    document.write(playerdata);
}

