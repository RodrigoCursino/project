<template>
  <div class="main_content">
    <header-shared-component :title="'Simulador'">
    <div class="row no-gutters">
        <date-picker v-model="date"
                      input-class="form-control form-control-sm"
                      class="mr-3" 
                      format="DD/MM/YYYY">
        </date-picker>
        <h5 class="ml-auto money_title">{{ total | money }}</h5>
    </div>
    </header-shared-component>
      <div class="container">
        <div class="d-flex" refs="productsGrid">
            <simulador-product-list-component 
                ref="products"
                @colapse="colapsePanel"
                :products="products"
            />
            <simulador-cosolidated
                ref="cosolidated" 
                @colapse="colapsePanel"
              />
        </div>
        <div class="row">
          <div class="col-12">
                <simulador-map-risc-list-component :riscs="riscs"
                                                    ref="map"
                                                    @colapse="colapsePanel"
                />
          </div>
        </div>
      </div>
  </div>
</template>

<script scoped>

import { simuladores } from '@/response/products'
import { riscs } from '@/response/riscs'
import { FormatUtilsMixin } from '@/mixins/formatUtilsMixin'
import HeaderSharedComponent from '@/components/shared/header-shared'
import DatePicker from 'vue2-datepicker'
import SimuladorProductListComponent from './simulador-product-list-component'
import SimuladorMapRiscListComponent from './simulador-map-risc-list-component'
import SimuladorCosolidated            from './simulador-cosolidated'
import { SimuladorMixin } from '@/components/modules/Simulador/SimuladorMixin'
export default {
  name: 'simulador-view-component',
  components: {
    HeaderSharedComponent,
    DatePicker, 
    SimuladorProductListComponent, 
    SimuladorMapRiscListComponent,
    SimuladorCosolidated 
  },
  mixins: [FormatUtilsMixin, SimuladorMixin],
  mounted() {
      this.date     = this.date ? this.date : this.$moment(new Date(),'LL').toDate()
      this.products = simuladores
      this.riscs    = riscs
  },
  data: () => ({
    date: null,
    products: [],
    riscs:[],
    modo: "carteira",
    filter: "",
    refsArray: ['map', 'products','cosolidated']
  }), 
  methods: {
      colapsePanel(e) {
          if(e.show) {
            if(e.el === 'map') {
              this.$refs.map.$el.style.height = '65vh' 
              this.$refs.map.$el.style.setProperty("margin-top", "56px", "important")
              this.$refs.cosolidated.$el.style.height = '0vh'
              this.$refs.products.$el.style.height    = '0vh'
              this.$refs.products.show = false
            } else {
              this.$refs.map.$el.style.height = '0vh' 
              this.$refs.map.$el.style.setProperty("margin-top", "0px")
              this.$refs.cosolidated.$el.style.height = '65vh'
              this.$refs.products.$el.style.height    = '65vh'
            }
          } else {
            if (e.el === 'map') {
              this.$refs[e.el].$el.style.height = '36vh' 
              this.$refs[e.el].$el.style.setProperty("margin-top", "0px")
              this.$refs.cosolidated.$el.style.height = '36vh'
              this.$refs.products.$el.style.height    = '36vh'
            } else {
              this.$refs.map.$el.style.setProperty("margin-top", "0px")
              this.$refs.cosolidated.$el.style.height = '36vh'
              this.$refs.products.$el.style.height    = '36vh'
              this.$refs.map.$el.style.height = '36vh' 
            }  
          }
         
          
        //  if(e.show) {
        //    auxArray.forEach( item => {
        //         this.$refs[item].$el.style.height = '65vh'
        //    })
        //  } else {
        //    auxArray.forEach( item => {
        //        this.$refs[item].$el.style.height = '0vh'
        //        this.$refs[item].show = true
        //    })
        //  }
        
      }
  }
}
</script>

<style scoped>
  .simulador_products_panel {
    width: 75%;
    margin-right: 0.5em;
    height: 36vh;
    transition: all 2s;
  }
  .simulador_consolidated_risc {
    width: 25%;
    height: 36vh;
    transition: all 2s;
  }
  .simulador_map_risc {
    height: 36vh;
    transition: all 2s;
  }
  .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .money_title{
    color: rgb(18, 235, 145);
  }
</style>
