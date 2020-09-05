var http = require('http');
    
url = "http://echo.jsontest.com/key/value/show/data/format/json/type/testapp"
// HTTP Get-pyyntö
// Voi yhdistää omaan severiohjelmaan suhteellisen helposti
http.get(url, function (response) {
   response.setEncoding('utf8');
   response.on('data', function (data) {
     console.log(data);
   });
});