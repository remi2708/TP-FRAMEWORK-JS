<script setup>
defineProps({
  distances: { type: Array, required: true }
})
</script>

<template>
  <div class="tableau">
    <table>
      <thead>
        <tr>
          <th>Format</th>
          <th>Natation</th>
          <th>Vélo</th>
          <th>Course</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ligne in distances" :key="ligne.format">
          <td>{{ ligne.format }}</td>
          <td>{{ ligne.natation }}</td>
          <td>{{ ligne.velo }}</td>
          <td>{{ ligne.course }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.tableau {
  overflow-x: auto;
  border-radius: var(--rayon);
  background: var(--surface);
}

table {
  width: 100%;
  min-width: 420px;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  border-bottom: 1px solid #ccc;
  text-align: left;
}
</style>
