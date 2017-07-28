function printToScreen(item)
{
	console.log(item);
}

function kare(sayi)
{
	console.log(sayi*sayi);
}

function foreach(arrayForPrint, printFuction)
{
	for(i = 0; i<arrayForPrint.length; i++)
	{
		printFuction(arrayForPrint[i]);
	}
}

var _array = [1, 4, 6, 7, 8, 9, 0];

//foreach(_array, printToScreen);

foreach(_array, kare);

