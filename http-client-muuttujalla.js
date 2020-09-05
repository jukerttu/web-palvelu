var http = require('http');
    
url = "http://echo.jsontest.com/key/value/show/data/format/json/type/testapp"

const print_out = (data) => console.log(data);

// HTTP Get-pyyntö
// Voi yhdistää omaan severiohjelmaan suhteellisen helposti
// Moderni tapa käyttää => eikä function kutsua.
http.get(url, (response) => {
   response.setEncoding('utf8');
   response.on('data', print_out)
});