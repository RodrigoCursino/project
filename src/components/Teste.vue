<template>
  <div class="my-class">
    <div ref="ops" class="content-div d-flex justify-content-center">
        <button @click="aumentar()">aumetar</button>
    </div>
    <div ref="ops2" class="content-div-2 d-flex justify-content-center">
        <button @click="aumentar()">aumetar</button>
    </div>
  </div>
</template>
<script>

export default {
  name: 'teste-component',
  data () {
    return {
        explandir: true
    }
  },
  methods: {
      aumentar() {
          if(this.explandir) {
              this.explandir = false
              this.$refs.ops.style.width = "90%"
              this.$refs.ops2.style.width = "10%"
          } else {
              this.explandir = true
              this.$refs.ops.style.width = "50%"
              this.$refs.ops2.style.width = "50%"
          }
            
      }
  }
}
</script>

<style scoped >
    .my-class {
        background-color: grey;
        display: flex;

    }
    .content-div {
        height: 20vh;
        width: 50%;
        background-color: blanchedalmond;
        transition: width 2s;
    }
    .content-div-2 {
        height: 20vh;
        width: 50%;
        background-color: rgb(221, 137, 10);
        transition: width 2s;
    }
</style>
