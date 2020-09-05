var http = require('http')
    
url = "http://echo.jsontest.com/key/value/show/data/format/json/type/testapp"

// Muuttujat esitelty erikseen. Ei tarvitse olla koodissa suoraan mukana.
const print_out = data => console.log(data)
const repsonse_handler = response => {
    response.setEncoding('utf8')
    response.on('data', print_out)
}
// HTTP Get-pyyntö
// Voi yhdistää omaan severiohjelmaan suhteellisen helposti
http.get(url, repsonse_handler)