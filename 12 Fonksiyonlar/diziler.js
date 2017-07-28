var sayilar = [1,2,3,4,5,6,7,8,9,10,11,12];

//son elemanı diziden çıkarma:
//sayilar.pop;

//dizinin sonuna eleman ekleme:
//sayilar.push(13);

//Dizi üzerinde kaydırma yapma:
//sayilar.shift();

// ...

//Filtre kullanımı:
/*
var tek_sayilar = sayilar.filter(
	function(sayi)
	{
		return sayi % 2 == 1;
	});

console.log(tek_sayilar);

*/

/*

function square(num)
{
	return num*num;
}

var squared = sayilar.forEach(square);

console.log(squared);

*/

/*map() fonksiyonu dizi elemanlarını dilediğimiz fonksiyona tabi tutar ve bize her elemanın yeni değerinin bulunduğu bir dizi döndürür.*/
/*
var kareler = sayilar.map(function(sayi)
{
	return sayi*sayi;
});

console.log(kareler);
*/

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
/*
var toplam = sepet.map(function(eleman)
{
	return eleman.fiyat;
});

var total = toplam.reduce(function(top, elm)
{
	return top + elm;
}, 0);

console.log(total);

*/

var toplam = sepet.map(function(eleman)
{
	return eleman.fiyat;
}).
reduce(function(toplam, fiyat)
{
	return toplam + fiyat;
}, 0);

console.log(toplam);
