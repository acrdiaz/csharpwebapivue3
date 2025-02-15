<script setup>
import { ref, onMounted } from 'vue'
import api from '../api';

defineProps({
  msg: String,
})

const notes = ref([]);

onMounted(async () => {
  await refreshData();
});

async function refreshData() {
  const { data } = await api.get('/GetNotes')
    .catch((error) => {
      console.error(error);
    });
  notes.value = data;
}

async function addNewNotes() {
  const newNotes = document.getElementById('newNotes').value;
  const formData = new FormData();
  formData.append('newNotes', newNotes);

  const { data } = await api.post('/AddNotes', formData)
    .catch((error) => {
      console.error(error);
    });
  refreshData();
  alert(data);
}

async function deleteNotes(id) {
  const { data } = await api.delete('/DeleteNotes', { params: { id } })
    .catch((error) => {
      console.error(error);
    });
  refreshData();
  alert(data);
}

</script>

<template>
  <h5>{{ msg }}</h5>

  <input id="newNotes" />&nbsp;
  <button @click="addNewNotes()">Add Notes</button>

  <div class="card">
    <p v-for="note in notes" :key="note.id">
      <b>* {{ note.description }}</b>&nbsp;
      <button @click="deleteNotes(note.id)">Delete Note</button>
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
