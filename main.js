const employees = [

	{ name: 'David Carlson', age: 30 },
	
	{ name: 'John Cena', age: 34 },
	
	{ name: 'Mike Sheridan', age: 25 },
	
	{ name: 'John Carte', age: 50 }
	
	];
	
	// Using filter method
	
	// Output:[ { name: "John Cena", age: 34 }, { name: "John Carte", age: 50 }]

	let a=employees.filter(function(e){
			return e.age>30
	})

	document.write(JSON.stringify(a))

	console.log(a)