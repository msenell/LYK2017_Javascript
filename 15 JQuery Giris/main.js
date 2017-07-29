//btnShow id'li buton getirilir:
var btnShow = $("#btnShow");

//divSecret id'li div getirilir:
var divSecret = $("#divSecret");

//butona event eklenir:
btnShow.on("click", function(){
	//butona tıklandığında div görünür yapılır:
	divSecret.show();
});