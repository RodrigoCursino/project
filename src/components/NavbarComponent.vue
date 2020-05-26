<template>
  <div>
  <b-navbar toggleable="lg" type="dark" class="itau_color_orange">
     <div class="container">
        <b-navbar-brand href="#">
          <img src="@/assets/itau-logo.png" width="45px" alt="Logo">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" ></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>

          <b-navbar-nav>
              <li class="nav-item" v-for="(route, key) in routes" :key="key">
                <router-link class="nav-link" :to="route.path"> {{route.title}} </router-link>
              </li>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <b>User</b>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <router-link class="dropdown-item" to="/users">Usuários</router-link>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
     
     </div>
  </b-navbar>
</div>
</template>

<script>

export default {
  name: 'navbar-component',
  props:{routes: {default: () => [], type:  Array}},
  data: () => ({
  })
}
</script>

<style>
  .itau_color_orange {
    background: orangered;
    font-weight: 500!important;
  }
  .itau_color_orange .nav-link {
    color: white!important;
  }
  .itau_color_orange .nav-link:hover {
    color:yellow!important;
  }
</style>
