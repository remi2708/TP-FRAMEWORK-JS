<script setup>
const { $meteo } = useNuxtApp()

const { data: meteo } = await useAsyncData('meteo', () => $meteo.getMeteo(44.84, -0.58))
</script>

<template>
  <Encadre v-if="meteo">
    <p>Météo à Bordeaux : {{ meteo.current.temperature_2m }} °C, vent {{ meteo.current.wind_speed_10m }} km/h</p>
  </Encadre>
</template>
