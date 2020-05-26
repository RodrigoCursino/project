<template>
  <div class="login_view d-flex flex-column justify-content-center align-items-center">
      <div class="user_icon itau_blue h1">
        <b-icon-person-fill></b-icon-person-fill>
      </div>
      <div class="d-flex flex-column">
        <div class="login_content">
            <p class="text-center">Acesso ao Sistema</p>
            <!-- <form autocomplete="off"> -->
                <div class="form-group">
                    <input type="text" 
                        v-model="user.racf"  
                        name="racf"  
                        class="form-control" 
                        placeholder="racf">
                </div>
                <div class="form-group">
                    <input type="text" 
                        v-model="user.password"  
                        name="password"  
                        class="form-control" 
                        placeholder="senha">
                </div>
                <div class="form-group">
                    <button class="btn btn-block itau_blue"> Entrar </button>
                </div>
            <!-- </form> -->
        </div>
        <div class="footer">
          {{ `Banco Itaú Unibanco S.A - Simulador de Risco de Mercado` }}
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'login-view-component',
  components: {},
  watch: {},
  mounted() {},
  data: () => ({
    user:{
        racf: "",
        password: ""
    },
    // date: this.$moment(new Date, 'YYYY').format('YYYY')
  }), 
  methods: {},
  filters: {}
}
</script>

<style scoped>
  .login_view {
    background-color: #ccc; 
    height: 100vh;
  }
.login_content {
    margin-top: 100px;
    padding: 2em;
    border-radius: 5px 5px 0px 0px;
    background-color: white;
}
.login_content p {
    color: #ccc;
    font-weight: 500;
    margin-bottom: 15px;
}
.user_icon svg {
    width: 1.5em;
    height: 1.5em;
}
.itau_blue {
    background-color: #004990;
    color:white;
} 
.user_icon {
    border: 3px solid #ccc;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    top: 150px;
    position: absolute;
    transition: 0.3s ease;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
.footer {
  background-color: orangered;
  padding: 0.5em;
  color: white;
  text-align: center;
  font-size: 0.8em;
}
.user_icon:hover{
  transform: rotateY(180deg);
}
</style>
