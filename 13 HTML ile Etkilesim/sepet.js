var sepet = 
[
	{
		name: "ayakkabi",
		price: 40
	},
	{
		name: "bal",
		price: 20
	},
	{
		name: "klavye",
		price: 100
	}
];

function getPriceToBasket()
{
	//Prompt ile verileri alma:
	var pName = prompt("Ürün ismi giriniz:");
	var pPrice = parseInt(prompt("Ürün fiyatı giriniz:"));
	/*Sepet dizisine ekleme yapmak için bir yöntem:
	var newObject = 
	{
		name: pName,
		price: pPrice
	}
	sepet.push(newObject);
	*/

	//diğer yöntem:
	sepet.push({name : pName, price: pPrice});
}

function printToHTML()
{
	//HTML içerisindeki ul elementi alınır:
	var list = document.getElementById("sepetListesi");

	//ul içerisi temizlenir:
	list.innerHTML = "";

	//Sepet içerisindeki ürünler tek tek alınır:
	sepet.forEach(function(product)
	{
		//Her ürün için bir <li> elementi oluşturulur:
		var list_item = document.createElement("li");
		//Ürün adı ve fiyatı <li> elementi içerisine yazılır:
		list_item.innerText = product.name + " : " + product.price + " TL";
		//Hazırlanan <li> elementi <ul> içine eklenir:
		list.appendChild(list_item);
	});
}

//Ekle butonu alınır:
var btnEkle = document.getElementById("ekle");

//Ekle butonu için click olayı:
btnEkle.addEventListener('click', function()
{
	//Prompt ile verileri çekip sepete ekleyen fonksiyonu çağırma:
	getPriceToBasket();
	//Güncel sepeti HTML'e yazdıran fonksiyonu çağırma:
	printToHTML();
});