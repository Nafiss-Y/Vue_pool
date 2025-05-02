<!-- filepath: /home/yn/Vue_pool/src/components/Table.vue -->
<template>
	<div class="person-table" data-testid="person-table">
	  <div class="person-table__form" data-testid="person-form">
		<h3 class="person-table__title">Add New Person</h3>
		<div class="person-table__inputs">
		  <div class="person-table__field">
			<label class="person-table__label">Name</label>
			<input 
			  type="text" 
			  v-model="newPerson.name" 
			  placeholder="Enter name"
			  class="person-table__input"
			  data-testid="input-name" 
			/>
		  </div>
		  <div class="person-table__field">
			<label class="person-table__label">Surname</label>
			<input 
			  type="text" 
			  v-model="newPerson.surname" 
			  placeholder="Enter surname"
			  class="person-table__input" 
			  data-testid="input-surname"
			/>
		  </div>
		  <div class="person-table__field">
			<label class="person-table__label">Age</label>
			<input 
			  type="number" 
			  v-model.number="newPerson.age" 
			  placeholder="Enter age"
			  class="person-table__input"
			  data-testid="input-age" 
			/>
		  </div>
		  <button 
			@click="addPerson" 
			class="person-table__button person-table__button--save"
			data-testid="btn-save"
		  >
			Save
		  </button>
		</div>
	  </div>
  
	  <div class="person-table__container" data-testid="table-container">
		<table class="person-table__table">
		  <thead>
			<tr>
			  <th class="person-table__header">Name</th>
			  <th class="person-table__header">Surname</th>
			  <th class="person-table__header">Age</th>
			  <th class="person-table__header">Action</th>
			</tr>
		  </thead>
		  <tbody>
			<tr 
			  v-for="(person, index) in personsList" 
			  :key="index"
			  class="person-table__row"
			  :data-testid="`person-row-${index}`"
			>
			  <td class="person-table__cell" :data-testid="'person-name-' + index">{{ person.name }}</td>
			  <td class="person-table__cell" :data-testid="'person-surname-' + index">{{ person.surname }}</td>
			  <td class="person-table__cell" :data-testid="'person-age-' + index">{{ person.age }}</td>
			  <td class="person-table__cell">
				<button 
				  @click="deletePerson(index)" 
				  class="person-table__button person-table__button--delete"
				  :data-testid="`btn-delete-${index}`"
				>
				  DELETE
				</button>
			  </td>
			</tr>
		  </tbody>
		</table>
	  </div>
	</div>
  </template>
  <script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Person {
	name: string;
	surname: string;
	age: number;
}

const props = defineProps<{
	initialPersons?: Person[];
}>();

const personsList = ref<Person[]>([]);

const newPerson = ref<Person>({
	name: '',
	surname: '',
	age: 0
});

onMounted(() => {
if (props.initialPersons && props.initialPersons.length) {
	personsList.value = [...props.initialPersons];
}
});


const addPerson = () => {
if (newPerson.value.name && newPerson.value.surname && newPerson.value.age > 0) {
		personsList.value.push({
		name: newPerson.value.name,
		surname: newPerson.value.surname,
		age: newPerson.value.age
	});

	newPerson.value = {
		name: '',
		surname: '',
		age: 0
	};
}
};

const deletePerson = (index: number) => {
	personsList.value.splice(index, 1);
};
</script>

<style lang="scss" scoped>
@use "sass:color";

$primary-color: #4caf50;
$danger-color: #f44336;
$light-bg: #f5f5f5;
$border-color: #ddd;
$border-radius: 8px;
$box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

.person-table {
max-width: 800px;
margin: 0 auto;
padding: 1.25rem;

&__title {
	margin-top: 0;
	margin-bottom: 1rem;
	font-size: 1.25rem;
	color: #333;
}

&__form {
	background-color: $light-bg;
	padding: 1.5rem;
	border-radius: $border-radius;
	margin-bottom: 1.5rem;
	box-shadow: $box-shadow;
}

&__inputs {
	display: flex;
	gap: 1rem;
	align-items: flex-end;
	
	@media (max-width: 768px) {
	flex-wrap: wrap;
	}
	
	@media (max-width: 480px) {
	flex-direction: column;
	}
}

&__field {
	display: flex;
	flex-direction: column;
	flex: 1;
	min-width: 120px;
	
	@media (max-width: 768px) {
	min-width: calc(33% - 1rem);
	}
	
	@media (max-width: 480px) {
	width: 100%;
	}
}

&__label {
	font-size: 0.875rem;
	margin-bottom: 0.5rem;
	font-weight: 500;
}

&__input {
	padding: 0.75rem;
	border: 1px solid $border-color;
	border-radius: 4px;
	font-size: 0.875rem;
	
	&:focus {
	outline: none;
	border-color: $primary-color;
	box-shadow: 0 0 0 2px rgba($primary-color, 0.2);
	}
}

&__button {
	padding: 0.75rem 1rem;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-weight: 500;
	transition: all 0.2s ease;
	
	&--save {
	background-color: $primary-color;
	color: white;
	
	&:hover {
		// Replace darken() with color.adjust()
		background-color: color.adjust($primary-color, $lightness: -8%);
	}
	}
	
	&--delete {
	background-color: $danger-color;
	color: white;
	font-size: 0.75rem;
	padding: 0.5rem 0.75rem;
	
	&:hover {
		// Replace darken() with color.adjust()
		background-color: color.adjust($danger-color, $lightness: -8%);
	}
	}
	
	@media (max-width: 480px) {
	width: 100%;
	margin-top: 0.5rem;
	}
}

&__container {
	overflow-x: auto; // For horizontal scrolling on small screens
	box-shadow: $box-shadow;
	border-radius: $border-radius;
}

&__table {
	width: 100%;
	border-collapse: collapse;
	border-radius: $border-radius;
	overflow: hidden; // For border-radius to work with table
}

&__header {
	background-color: #f2f2f2;
	font-weight: 600;
	text-align: left;
	padding: 1rem;
	border-bottom: 1px solid $border-color;
	
	@media (max-width: 480px) {
	padding: 0.75rem;
	}
}

&__row {
	transition: background-color 0.2s;
	
	&:hover {
	background-color: rgba($light-bg, 0.5);
	}
	
	&:last-child .person-table__cell {
	border-bottom: none;
	}
}

&__cell {
	padding: 1rem;
	border-bottom: 1px solid $border-color;
	
	@media (max-width: 480px) {
	padding: 0.75rem;
	}
}

// Responsive table adjustments for very small screens
@media (max-width: 360px) {
	&__header, &__cell {
	padding: 0.5rem;
	}
}
}
</style>

