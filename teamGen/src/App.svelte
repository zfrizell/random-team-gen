<script>
	import { onMount } from 'svelte';

	import Person from './Person.svelte';
	$: people = [
		{ id: 3, name: 'Adam RC', selected: false},
		{ id: 4, name: 'Adam BA', selected: false},
		{ id: 5, name: 'Adam C', selected: false},
		{ id: 6, name: 'Aidan', selected: false},
		{ id: 7, name: 'Conrad', selected: false},
		{ id: 2, name: 'Dylan', selected: false},
		{ id: 8, name: 'Gabriel', selected: false},
		{ id: 11, name: 'Jack', selected: false},
		{ id: 10, name: 'Joe', selected: false},
		{ id: 12, name: 'James', selected: false},
		{ id: 13, name: 'Justin', selected: false},
		{ id: 14, name: 'Marley', selected: false},
		{ id: 9, name: 'Wiggles', selected: false},
		{ id: 1, name: 'Zack', selected: false},
	];

	function toggleSelection(id) {
		console.log(id);
		let person = people.find(person => person.id === id);
		if (!person) return
		person.selected = !person.selected;
		people = people
	}

	$: team1 = [];
	$: team2 = [];

	let sendToTeam1 = (Math.floor(Math.random() * 2) > 1 ? false : true);

	function pickTeams() {
		team1 = [];
		team2 = [];
		let counter = 0;
		let selectedPeopleCopy = [...people];
		
		let selectedPeople = selectedPeopleCopy.filter(person => person.selected === true).map(person => {
			person.newId = counter;
			counter++;
			return person;
		});
		console.log(people);
		console.log(selectedPeopleCopy);
		if (!selectedPeople) return;

		console.log(selectedPeople);

		let numOfPeople = selectedPeople.length;

		do {
			let randomNum = Math.floor(Math.random() * numOfPeople)
			if (selectedPeople.length > 0 && !selectedPeople.some(person => person.newId === randomNum)) continue;
	
			const index = selectedPeople.findIndex(person => person.newId === randomNum)
			
			if (sendToTeam1) {
				team1.push(selectedPeople[index]);
			} else {
				team2.push(selectedPeople[index]);
			}
			sendToTeam1 = !sendToTeam1;
	
			selectedPeople.splice(index, 1);
	
			console.log(team2, team1);
			team1 = team1;
			team2 = team2;
		
		} while (
			selectedPeople.length > 0
		)


		
	}

	

</script>

<h1>
	Team Selector
</h1>


<div class="people-holder">
	{#each people as person}
	<div
	on:click={() => toggleSelection(person.id)}
	>
	<Person
	selected={person.selected}
	person={person.name}/>
</div>
{/each}
</div>
<button class="middle" on:click={pickTeams}>Make Teams</button>

<div class="flex">
	<div>
		<h3>
			team 1: 
		</h3>
		{#each team1 as person}
		<div class="person-picked team1">
			{person?.name}
		</div>
		{/each}
	</div>

	<div>
		<h3>
			team 2: 
		</h3>
		{#each team2 as person}
		<div class="person-picked team2">
			{person?.name}
		</div>
		{/each}
	</div>
</div>

<style>
	.middle {
		margin: auto;
	}

	.person-picked {
		padding: 5px 8px;
        background-color: rgb(220, 220, 220);
        border-radius: 5px;
        width: fit-content;
        margin: 5px;
	}

	.flex {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
	}

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

	h1, h3 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}

	h3 {
		font-size: 1em;
		font-weight: 200;

	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>