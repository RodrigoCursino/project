import Vue from 'vue'
import Vuex from 'vuex'

import User        from '@/components/modules/User'
import Simulador   from '@/components/modules/Simulador'

const modules = {
  User,
  Simulador
};

Vue.use(Vuex)

const store = new Vuex.Store({
  modules
});

export default store