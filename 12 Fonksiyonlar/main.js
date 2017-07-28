function tekcift(sayi)
{
	if (sayi % 2 == 0) 
	{
		return "çift";
	}
	else
	{
		return "tek";
	}

}

var sonuc = "Gönderilen sayı " + tekcift(3) + "tir.";

//console.log(sonuc);

function rCounter(start)
{
	for( ; start>=0; start--)
	{
		console.log(start);
	}
}

var sayi = parseInt(prompt("Sayı Giriniz:"));
if(sayi > 0)
{
	rCounter(sayi);
}
else
{
	console.log("Sayı uygun aralıkta değil.");
}