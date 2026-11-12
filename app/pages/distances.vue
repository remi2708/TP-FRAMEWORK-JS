<script setup>
const distances = useDistances()
</script>

<template>
  <TitrePage>Les distances</TitrePage>
  <TableauDistances :distances="distances" />
</template>
