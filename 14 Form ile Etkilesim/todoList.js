//Yapılacaklar listesini bu dizi içerisinde tutacağız:

var todoList = 
[
	{
		todo: "Çantanı hazırla",
		done: false
	},
	{
		todo: "Dişlerini fırçala",
		done: false
	},
	{
		todo: "Anahtarlarını al",
		done: false
	}
];

//HTML içerisinden form elementi çekilir:
var frmAddToDo = document.getElementById("frmAddToDo");

//form elementinin submit olayı dinlenir:
frmAddToDo.addEventListener("submit", function(evt)
{
	//Butona tıkladığında sayfayı yenilemesini engellemek için event'i sıfırlıyoruz:
	evt.preventDefault();
	//input alan ve listeye ekleme yapan fonksiyonu çağırıyoruz:
	getPriceToBasket();
	//Listeyi HTML sayfasına yazan fonksiyonu çağırıyoruz:
	printToHTML();
});

//Formdan yapılacak eylemi alan ve diziye ekleyen fonksiyon:
function getPriceToBasket()
{
	//Input içinden veriyi alma:
	var todoText = document.getElementsByName("txtToDo")[0].value;
	
	/*Sepet dizisine ekleme yapmak için bir yöntem: */
	todoList.push({todo : todoText, done: false});
}

//Elemanları HTML sayfasındaki listeye yazacak fonksiyon:
function printToHTML()
{
	//HTML içerisindeki ul elementi alınır:
	var list = document.getElementById("listToDo");

	//ul içerisi temizlenir:
	list.innerHTML = "";

	//todoList içerisindeki eylemler tek tek alınır:
	todoList.forEach(function(todoItem)
	{
		//Her eylem için bir <li> elementi oluşturulur:
		var list_item = document.createElement("li");
		//Eylem ismi ve tamamlanma durumu <li> elementi içerisine yazılır:
		list_item.innerText = todoItem.todo + " : " + todoItem.done;
		//Hazırlanan <li> elementi <ul> içine eklenir:
		list.appendChild(list_item);
	});
}


