<script setup>
defineProps({
  title: {
    type: String,
    default: "Title",
  },
  text: {
    type: String,
    default: "Text",
  },
});
</script>

<template>
  <div class="card">
    <div class="card__title">
      {{ title }}
    </div>

    <div>
      {{ text }}
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid white;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  flex-direction: column;
}

.card__title {
  font-size: 24px;
  font-weight: bold;
}
</style>
