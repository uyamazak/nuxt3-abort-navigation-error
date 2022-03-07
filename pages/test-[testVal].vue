<template>
<div>
  this is test
  <pre>{{ params }}</pre>
</div>
</template>
<script setup >
definePageMeta({
  middleware: ['test-guard']
})
const { params } = useRoute()
</script>
