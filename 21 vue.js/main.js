var app = new Vue
	(
	{
		el: '#app',
		data: 
			{
				message: 'Hello Vue!',
				count: 0
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
					}
			}
	}
	);