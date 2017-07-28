var veri = null;

function getDataFromDB()
{
	console.log("Data is getting...");

	//1000 ms sonra parametre olarak verdiğimiz fonksiyon çalışacak.
	setTimeout(
		function()
		{
			veri = "Mustafa";
		},
		1000);
}

function printToScreen()
{
	console.log("Data is : " + veri);
}

//Veriyi alacak fonksiyon. 1000 ms sonra veriyi alacak.
getDataFromDB();  
//Veriyi ekrana yazdıracak fonksiyon. Fakat fonksiyon veri almayı beklemeyecek ekrana Data is: null yazacaktır. Beklemesi için aşağıdaki gibi yazmalıyız.
printToScreen(); 

console.log();

console.log("---Doğru Çözüm---");

var veri = null;

function getDataFromDB(callback)
{
	console.log("Data is getting...");

	//1000 ms sonra parametre olarak verdiğimiz fonksiyon çalışacak.
	setTimeout(
		function()
		{
			veri = "Mustafa";
			callback();
		},
		1000);
}

function printToScreen()
{
	console.log("Data is : " + veri);
}

//Veriyi alacak fonksiyon. 1000 ms sonra veriyi alacak ve parametre olarak verdiğimiz fonksiyonu çağıracak.
getDataFromDB(printToScreen);  

console.log();

console.log("---Birden Fazla İşlem Mevcutsa---");

var veri = null;

function getDataFromDB(callback, callback2)
{
	console.log("Data is getting...");

	//1000 ms sonra parametre olarak verdiğimiz fonksiyon çalışacak.
	setTimeout(
		function()
		{
			veri = "Mustafa";
			callback(callback2);
		},
		1000);
}

function printToScreen(callback2)
{
	setTimeout(
		function()
		{
			callback2();
		});
}

function konsol()
{
	console.log("Data is: " + veri);
}

//Veriyi alacak fonksiyon. 1000 ms sonra veriyi alacak ve parametre olarak verdiğimiz fonksiyonu çağıracak.
getDataFromDB(printToScreen, konsol); 