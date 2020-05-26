<template>
  <div class="main_content">
     <slot></slot>
  </div>
</template>

<script>
// import ConsolidadorHlComponent from "./views/consolidador-hl/consolidadorHL"
export default {
  name: 'content-component',
  data: () => ({
  })
}
</script>

<style scoped>
  .main_content {
    background: #e2e1e0;
    min-height: calc(100vh - calc(71px + 24px))
  }
</style>
