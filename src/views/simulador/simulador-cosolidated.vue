<template>
<div class="card simulador_consolidated_risc" ref="consolidated">
<div class="cards_panel_header">
  Simulação
</div>
<div class="card-body" ref="cosolidatedBody">
  <table class="table">
  </table>
</div>
</div>
</template>

<script scoped>
export default {
  name: 'simulador-cosolidated',
  data: () => ({
    show: false,
  }), 
  methods: {
    colapseBody() {
      if(this.show) {
        this.$refs.cosolidatedBody.style.display = 'none'
      } else {
        this.$refs.cosolidatedBody.style.display = ''
      }
      this.$emit('colapse', {el: 'cosolidated', show: this.show})
      this.show = !this.show
    }
  }
}
</script>

<style scoped>

</style>
