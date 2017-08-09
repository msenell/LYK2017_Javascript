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
		created : function()
		{
			var _todos = localStorage.getItem("todos");
			this.todos = _todos === null ? [] : JSON.parse(_todos);
			var _last_id = localStorage.getItem("last_id");
			this.last_id = _last_id === null ? 0 : parseInt(_last_id);
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
					this.updateStorage();

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
					this.updateStorage();
				},
				removeToDo: function(todo)
				{
					this.todos = this.todos.filter(function(item)
					{
						return todo.id !== item.id;
					});
					this.updateStorage();
				},
				clearDone: function()
				{
					this.todos.filter(function(item)
					{
						return !item.done;
					});
					this.updateStorage();
				},
				//Veriler Local Storage'a kaydedilir:
				updateStorage: function()
				{
					localStorage.setItem("todos", JSON.stringify(this.todos));
					localStorage.setItem("last_id", this.last_id);
				}				
			}
	}
	);