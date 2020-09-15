<template>
  <footer class="d-flex justify-content-center align-items-center itau_color_blue">
      <span>{{ `Simulador de Arquivos` }}</span>
  </footer>
</template>

<script>
export default {
  name: 'footer-component',
  data: () => ({
    
  })
}
</script>
<style scoped>
  .itau_color_blue {
    background-color: midnightblue;
    padding: 0.17em 0em;
    height: 24px;
    font-weight: 500;
    font-size: 0.6em !important;
    color: white
  }
</style>
