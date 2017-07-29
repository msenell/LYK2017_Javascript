//btnShow id'li buton getirilir:
var btnShow = $("#btnShow");

//divSecret id'li div getirilir:
var divSecret = $("#divSecret");

//butona event eklenir:
btnShow.on("click", function(){
	//butona tıklandığında div görünür yapılır:
	//divSecret.show();

	//Butona hem göster hem de gizle özelliği vermek için:
	//1. yöntem:
	//divSecret.toggle();

	//2. yöntem:
	//Div'in css display property'si none ise görünür yapacağız:
	if(divSecret.css("display") == "none")
	{
		divSecret.show();
		//Burada buton text'ini de Gizle olarak değiştirelim:
		btnShow.text("Gizle");
	}
	//Div'in css property'si none değilse gizleyeceğiz:
	else
	{
		divSecret.hide();
		//Burada buton text'ini de Göster olarak değiştirelim:
		btnShow.text("Göster");
	}
});