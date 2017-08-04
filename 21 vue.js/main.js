var app = new Vue
	(
	{
		el: '#app',
		data: 
			{
				message: 'Hello Vue!',
				count: 0,
				visible: true,
				posts: 
					[
						{
							id: 0,
							title: "Hello"
						},
						{
							id: 1,
							title: "World"
						}
					]
			},
		methods:
			{
				inc: function()
					{
						this.count = this.count + 1;
					},
				dec: function()
					{
						this.count = this.count - 1;
					},
				func: function(item)
					{
						console.log(item);
					}
			}
	}
	);