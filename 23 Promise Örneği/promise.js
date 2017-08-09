var islem = new Promise(function(resolve, reject)
{
	var random = Math.floor(Math.random() * (3-1)) +1;
	setTimeout(function()
	{
		if(random === 1)
		{
			resolve("başarılı");
		}
		else
		{
			reject("error");
		}
	}, 1000);
});

islem.then(function(response)
{
	console.log(response);
})
.catch(function(error)
{
	console.log(error);
});