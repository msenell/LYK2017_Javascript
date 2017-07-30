//form içindeki inputtan alınacak arama kelimesi(bulunacak film):
var searchKey = null;
//Araya aranacak kelimeyi ekleyebilmek için api url'sini ikiye ayırıyoruz.
//1. kısım sonuna aranacak kelime eklenecek:
var urlAPI = 'http://www.omdbapi.com/?s=';
//2. kısım aranacak kelimeden sonra eklenecek:
var apiKey = "&apikey=ec6483bd";

//HTML tarafından getirilecek input elementi:
var txtSearch = $('input[name=txtSearch]')[0];

//Ajax ile dönen yanıtı ekrana bastıran fonksiyon:
function printMoviesToHTML(response)
{
	//HTML'deki <ul> elementi seçilir:
	var listResult = $('#listResult');
	listResult.html("");
	//response parametresi içerisinde bir obje vardır. Bu obje içerisinde 'Search' anahtar kelimesi ile bir dizi işaret edilir.
	//Bu dizi içerisinde bulunan filmler her biri bir obje olarak saklanır. Bu yüzden forEach'e response değil, response içindeki
	//Search dizisi verilir:
	response.Search.forEach(function(movie)
	{
		//Her bir film objesi 'movie' parametresi ile yakalanır:
		//Filmin içindeki 'Title', 'Year', 'imdbID', 'Type' ve 'Poster' bilgileri HTML içine eklenir:
		listResult.append
		(
			"<li>" +
				movie.Title +
				"<ul>" +
				"<li>" +
					movie.Year +
				"</li>" +
				"<li>" +
					movie.imdbID +
				"</li>" +
				"<li>" +
					movie.Type +
				"</li>" +
				"<li>" +
					"<img src='" + movie.Poster + "'>" +
				"</li>" +
				"</ul>" +
			"</li>"
		);
	});
}

//Arama butonunun 'click' olayı yakalanır:
$("#btnSearch").on("click", function(){
	//Input içerisinden aranacak kelime çekilir:
	searchKey = txtSearch.value;
	//URL'ler aranacak kelime ile birleştirilerek tam URL elde edilir:
	var cmpURL = urlAPI + searchKey + apiKey;
	//Tamamnalanan URL ile ajax talebi yapılır:
	$.ajax(
	{
		method: 'GET',
		url: cmpURL
		//Talep döndükten sonra printMoviesToHTML fonsiyonunun çağırılması ve içine response nesnesinin gönderilmesi söylenir:
	}).then(printMoviesToHTML); 
});

//Form elementi yakalanarak submit event'ı sıfırlanır:
$("#frmSearch").submit(function(evt)
{
	evt.preventDefault();
});