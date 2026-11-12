<script setup>
defineOptions({ inheritAttrs: false })

defineProps({
  id: { type: String, required: true },
  label: { type: String, required: true }
})

const valeur = defineModel({ type: String, default: '' })
</script>

<template>
  <div>
    <label :for="id">{{ label }}</label>
    <slot>
      <ChampTexte :id="id" v-model="valeur" v-bind="$attrs" />
    </slot>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>
