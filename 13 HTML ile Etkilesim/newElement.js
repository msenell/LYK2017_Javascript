
var gonder_butonu = document.getElementById("gonder");
//HTML içerisine bir element ekleme.
/*
var icerik = document.getElementById("div_icerik");

var paragraf = document.createElement("p");
paragraf.inner = "Gönderdim.";

gonder_butonu.addEventListener('click', function()
{
	icerik.appendChild(paragraf);
});
*/

//Sepet içerisindeki ürünleri liste olarak sayfaya bastırma:
var sepet = 
[
	{
		ad: "ayakkabi",
		fiyat: 40
	},
	{
		ad: "bal",
		fiyat: 20
	},
	{
		ad: "klavye",
		fiyat: 100
	}
];

var liste = document.getElementById("sepet");

gonder_butonu.addEventListener('click', function()
{

	sepet.forEach(function(element)
	{
		var list_item = document.createElement("li");
		list_item.innerText = element.ad + " : " + element.fiyat + " TL";
		liste.appendChild(list_item);

	});
});


