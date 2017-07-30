//İşlem geçmişinin tutulacağı dizi:
var historyList = [];
var listHistory = $("#listHistory");

//İşlem geçmişini HTML sayfasına yazan fonksiyon:
function printHistoryToHTML(nums, processs, result)
{
	//Yeni history elementi:
	var history_item = 
	{
		num1 : nums[0],
		num2 : nums[1],
		prc : processs,
		res : result
	};
	//Oluşturulan history elementi historyList dizisine eklenir:
	historyList.push(history_item);
	//HTML içerisindeki liste boşaltılır:
	listHistory.html("");
	//historyList içerisindeki tüm elemanlar listeye yazılır:
	historyList.forEach(function(item)
	{
		//Her bir eleman <li> içerisine yazılır:
		listHistory.append("<li>" + item.num1 + item.prc + item.num2 + "=" + item.res + "</li>");
	});
}

//Form elementi yakalanarak submit event'ı sıfırlanır:
$("#frmCalculator").submit(function(evt)
{
	evt.preventDefault();
});

//Input'lar içerisinden sayıları alarak bir dizi içinde döndüren fonksiyon:
function getNumbers()
{
	//Name değeri 'nm' olan inputlar alınır:
	var num = $('input[name=nm]');
	//Bu input'ların value'leri dizi içine yazılır:
	var numbers = 
	[
		parseInt(num[0].value),
		parseInt(num[1].value)
	];
	//Dizi geri döndürülür:
	return numbers;
}

//Toplama butonu için EventListener tanımı:
$("#btnAdd").on("click", function()
{
	//Toplanacak sayılar alınır:
	var parameters = getNumbers();
	var toplam = parameters[0] + parameters[1];
	//Sayıların toplamı sonuç kısmına yazılır:
	$("#pResult").html("Result = <strong>" + toplam + "</strong>");
	//İşlem geçmiş işlemlere eklenir:
	printHistoryToHTML(parameters, "+", toplam);
});

//Çıkarma butonu için EventListener tanımı:
$("#btnSub").on("click", function()
{
	//Farkı alınacak sayılar alınır:
	var parameters = getNumbers();
	var fark = parameters[0] - parameters[1];
	//Sayıların farkı sonuç kısmına yazılır:
	$("#pResult").html("Result = <strong>" + fark + "</strong>");
	//İşlem geçmiş işlemlere eklenir:
	printHistoryToHTML(parameters, "-", fark);
});

//Çarpma butonu için EventListener tanımı:
$("#btnMul").on("click", function()
{
	//Çarpılacak sayılar alınır:
	var parameters = getNumbers();
	var carpim = parameters[0] * parameters[1];
	//Sayıların çarpımı sonuç kısmına yazılır:
	$("#pResult").html("Result = <strong>" + carpim + "</strong>");
	//İşlem geçmiş işlemlere eklenir:
	printHistoryToHTML(parameters, "*", carpim);
});

//Bölme butonu için EventListener tanımı:
$("#btnDiv").on("click", function()
{
	//Bölünecek sayılar alınır:
	var parameters = getNumbers();
	var bolum;
	//Sıfıra bölme hatası kontrol edilir:
	if(parameters[1] == 0)
	{
		//İkinci sayı sıfır ise hata mesajı gösterilir:
		bolum = "İkinci sayı sıfır olamaz!"
	}
	else
	{
		//Hata yoksa işlem yapılır:
		bolum = parameters[0] / parameters[1];
		//İşlem geçmiş işlemlere eklenir:
		printHistoryToHTML(parameters, "/", bolum);
	}
	//Sayıların bölümü sonuç kısmına yazılır:
	$("#pResult").html("Result = <strong>" + bolum + "</strong>");
});