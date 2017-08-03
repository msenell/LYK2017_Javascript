var imdbID = "tt0060315";
var url1 = "http://www.omdbapi.com/?i=";
var url2 = "&apikey=c6c0355";

$(document).click(function(event)
	{
		var clickedTitle = $(event.target);
		if(clickedTitle.attr('name') === "movie-title")
		{
			console.log(clickedTitle);
			imdbID = clickedTitle.attr('imdb-id');
			$.ajax(
				{
					url: url1 + imdbID + url2,
					method: "GET"
				}).then(printDetailsToHTML);
		}
	});

function printDetailsToHTML(response)
{
	$("#movieTitle").append(response.Title);
	$("#subTitle").append(response.Type + ", " + response.Year + ", " + response.Genre + ", " + response.Runtime);
	$("#divPoster").html("<img src='" + response.Poster + "'>");
	$("#pRelease").append("Released: " + response.Released);
	$("#pPlot").append(response.Plot);
	var tblRatings = $("#tblRatings");

	var tblStr = "<tr>"+
		"<td><a href='http://www.imdb.com/title/" + response.imdbID + "' target='_blank'>" + "<img alt='imdb icon' src='img/imdb.gif'/>" +
		"</td><td>Rating/Votes : " + response.imdbRating +"/" + response.imdbVotes + "</td>";

	response.Ratings.forEach(function(rate)
	{
		tblStr = tblStr + "<td>" + rate.Source + " : </td><td>" + rate.Value + "</td>";
	});
	tblStr = tblStr + "</tr>";
	tblRatings.html(tblStr);
	
	$("#pMetascore").append("Metascore: " + response.Metascore);
	$("#pAwards").append("Awards: " + response.Awards);
	$("#tblCountry").html("<tr><td>Ülke : " + response.Country + "</td><td>Dil : " + response.Language + "</td></tr>");
	$("#pDirector").append("Yönetmen : " + response.Director);
	$("#pWriter").append("Yazar : " + response.Writer);
	$("#pActors").append("Oyuncular : " + response.Actors);
	$("#tblLast").html(
		"<tr>" +
		"<td>DVD : " + response.DVD + "</td>" + 
		"<td>Boxoffice : " + response.BoxOffice + "</td>" + 
		"<td>Production : " + response.Production + "</td>" +
		"</tr>");
	$("#pWebsite").html("<a href='" + response.Website + "' target= '_blank'>" + response.Website + "</a>");
}