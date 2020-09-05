var http = require('http');
    
url = "http://echo.jsontest.com/key/value/show/data/format/json/type/testapp"
// HTTP Get-pyyntö
// Voi yhdistää omaan severiohjelmaan suhteellisen helposti
// Moderni tapa käyttää => eikä function kutsua.
http.get(url, (response) => {
   response.setEncoding('utf8');
   response.on('data', (data) => {
     console.log(data);
   });
});