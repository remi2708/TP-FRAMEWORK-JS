export default defineNuxtPlugin(() => {
  const BASE_URL = 'https://api.open-meteo.com/v1'

  const meteo = {
    getMeteo: (latitude, longitude) =>
      $fetch(`${BASE_URL}/forecast`, {
        query: {
          latitude,
          longitude,
          current: 'temperature_2m,wind_speed_10m',
          timezone: 'Europe/Paris'
        }
      })
  }
  return { provide: { meteo } }
})
