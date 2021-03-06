/* JavaScript App */


const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=movies&count=10",
	"method": "POST",
	"headers": {
		"x-rapidapi-key": "4950b89030msh4c28afa1db60111p195a38jsn4897232f033b",
		"x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
