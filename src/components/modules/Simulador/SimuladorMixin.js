import { mapState, mapActions } from 'vuex';

export const SimuladorMixin = {
  computed: {
    ...mapState('Simulador',{
                   total: state => {
                       return state.total;
                   }
               }
    )
  },
  methods: {
    ...mapActions('Simulador',['set_value_in_total'])
  }
}