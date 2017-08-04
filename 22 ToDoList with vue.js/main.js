var app = new Vue
	(
	{
		el: '#app',
		data:
			{
				title: "",
				last_id: 4,
				todos:
					[
						{
							id: 0,
							title: "HTML",
							done: false
						},
						{
							id: 1,
							title: "CSS",
							done: true
						},
						{
							id: 2,
							title: "Javascript",
							done: false
						},
						{
							id: 3,
							title: "Markdown",
							done: true
						},
						{
							id: 4,
							title: "Vue JS",
							done: false
						}
					]
			},
		methods: 
			{
				toggleDone: function(todo)
				{
					//todo.done = !todo.done;

					this.todos = this.todos.map(function(obj)
					{
						if(todo.id === obj.id)
						{
							obj.done = !obj.done;
						}
						return obj;
					});

				},
				addNewToDo: function()
				{
					this.last_id++;
					this.todos.push
					(
					{
						id: this.last_id,
						title: this.title,
						done: false
					}
					);
					this.title = "";
				}				
			}
	}
	);