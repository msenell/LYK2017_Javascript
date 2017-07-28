
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
	var toplam = 0;

	sepet.forEach(function(element)
	{
		//Sepetteki ürünleri liste olarak yazdırma:
		/*
		var list_item = document.createElement("li");
		list_item.innerText = element.ad + " : " + element.fiyat + " TL";
		liste.appendChild(list_item);
		*/
		var newRow = document.createElement("tr");
		/*
		var tdNo = document.createElement("td");
		tdNo.innerText =
		newRow.appendChild(tdNo);
		*/
		var tdName = document.createElement("td");
		tdName.innerText = element.ad;
		newRow.appendChild(tdName);

		toplam = toplam + element.fiyat;
		var tdPrice = document.createElement("td");
		tdPrice.innerText = element.fiyat;
		newRow.appendChild(tdPrice);

		liste.appendChild(newRow);

	});
	var totalRow = document.createElement("tr");
	var tdTotal = document.createElement("td");
	tdTotal.innerText = "Toplam Fiyat: " + toplam;
	totalRow.appendChild(tdTotal);
	liste.appendChild(totalRow);
});


