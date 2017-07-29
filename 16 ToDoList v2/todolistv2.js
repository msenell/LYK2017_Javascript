//Yapılacaklar listesini bu dizi içerisinde tutacağız:

var todoList = 
[
	{
		todo: "Çantanı hazırla",
		done: false
	},
	{
		todo: "Dişlerini fırçala",
		done: true
	},
	{
		todo: "Anahtarlarını al",
		done: false
	}
];
printToHTML();

//Elemanları HTML sayfasındaki listeye yazacak fonksiyon:
function printToHTML()
{
	//HTML içerisindeki tamamlanmamış ul elementi alınır:
	var listNON = document.getElementById("listToDoNON");

	//HTML içerisindeki tamamlanmış ul elementi alınır:
	var listOK = document.getElementById("listToDoOK");

	//ul içerisi temizlenir:
	listNON.innerHTML = "";
	listOK.innerHTML = "";

	//todoList içerisindeki eylemler tek tek alınır:
	todoList.forEach(function(todoItem)
	{
		//Her eylem için bir <li> elementi oluşturulur:
		var list_item = document.createElement("li");
		//Eylem ismi <li> elementi içerisine yazılır:
		list_item.innerHTML = todoItem.todo;
		//Hazırlanan <li> elementi uygun <ul> içine eklenir:
		if(todoItem.done)
		{
			listOK.appendChild(list_item);
		}
		else
		{
			listNON.appendChild(list_item);
		}
	});
}