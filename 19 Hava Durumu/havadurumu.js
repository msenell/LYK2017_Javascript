var selCities = $("#selCities");

var loading = $("#loading");

getWeather(getSelectedCity());

function getSelectedCity()
{
	return $("#selCities option:selected").val();
}

selCities.change(function()
{
	getWeather(getSelectedCity());
});

//İstenen şehre ajax talebini yapacak fonksiyon:
function getWeather(city)
{
	loading.show();
	$.ajax(
	{url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + ",&lang=tr&units=metric&APPID=0617b0b806920586bbd5d1ff4ef84189", 
	method: "GET"}).then(printWeatherToHTML);
}

//Sonucu görüntüleyecek fonksiyon:
function printWeatherToHTML(response)
{
	loading.hide();
	var pResult = $("#result");
	pResult.html(response.weather[0].description);
	sonuc.html("<img src='" +resimlink + "'>");
}

