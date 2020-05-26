<template>
  <div id="app">
    <login-view-component v-if="!log"></login-view-component>
    <div v-else>
      <navbar-component :routes="routes">
      </navbar-component>
      <content-component>
        <router-view></router-view>
      </content-component>
      <footer-component></footer-component>
    </div>
  </div>
</template>
<script>


import NavbarComponent    from '@/components/NavbarComponent'
import LoginViewComponent from "@/views/login/login"
import ContentComponent   from '@/components/ContentComponent'
import FooterComponent    from '@/components/FooterComponent'
export default {
  name: 'app',
  components: {
    NavbarComponent, 
    FooterComponent, 
    ContentComponent, 
    LoginViewComponent,
  },
  data () {
    return {
      routes: [
        {path: '/consolidador-hl', title: 'Consolidador HL'},
        {path: '/simulador', title: 'Simulador'},
      ],
      log: true
    }
  }
}
</script>

<style scoped lang="scss">
</style>
