<script>
	import Person from './Person.svelte';
	$: people = [
		{ id: 1, name: 'Zack', selected: false},
		{ id: 2, name: 'Dylan', selected: true},
		{ id: 3, name: 'Adam', selected: false}
	];


	function toggleSelection(id) {
		let person = people.find(person => person.id === id);
		if (!person) return
		
		person.selected = !person.selected;

		people = people

		console.log(people)
	}
</script>

<h1>
	Team Selector
</h1>


<div class="people-holder">
	{#each people as person}
	<!-- <div>
		{person.selected}
	</div> -->
	<div
	on:click={() => toggleSelection(person.id)}
	>
		<Person
		selected={person.selected}
		person={person.name}/>
	</div>
	{/each}
</div>

<style>
	.people-holder {
		display: flex;
		flex-wrap: wrap;
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>