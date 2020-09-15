<template>
    <div class="card simulador_products_panel">
      <div class="cards_panel_header d-flex align-items-center">
        Listagem
        <input class="form-control col-3 form-control-sm ml-auto ml-auto"
               :value="lance | money"
               @focusout="setLance"
               type="text"
               placeholder="Lance"
        >
        <input class="form-control col-7 form-control-sm ml-auto ml-1"
               v-model="filter" 
               placeholder="Buscar"
               @input="keyPushSearch($event, filter)"
        />
        <b-icon-arrows-angle-expand v-if="show" @click="colapseBody()" class="ml-2"></b-icon-arrows-angle-expand>
        <b-icon-arrows-angle-contract v-else @click="colapseBody()" class="ml-2"></b-icon-arrows-angle-contract>
      </div>
      <div class="card-body cards_panel_tables_sm_content" ref="body">
        <div class="table-wrapper">
            <table class="table table-earnings table-sm table-hover">
              <thead class="fixed_head">
                  <tr>
                      <th style="width: 35px">
                        <input @click="productAllSelected()" v-model="productAll" type="checkbox">
                      </th>
                      <th v-for="(header, h) in headers" :key="`head-[${h}]`" :class="checkOrderBy(keyOrder,header.keyOrder)" 
                          @click="genericOrderBy(products, header.keyOrder, toggleOrder = !toggleOrder, keyOrder, header.auxParameter)"
                      >
                          <span class="text_sm">
                            {{ header.title }}
                            <b-icon-caret-down-fill v-if="checkOrderBy(!toggleOrder)"></b-icon-caret-down-fill>
                            <b-icon-caret-up-fill v-else></b-icon-caret-up-fill>
                          </span>
                      </th>
                      <th style="width: 100px"></th>
                  </tr>  
              </thead>
              <tbody>
                  <tr v-for="(product, p) in filterDataPagination(filterDataListBySearch(products))" :key="`body-[${p}]`" slot="tableBody">
                      <td><input @click="productSelected(product)" v-model="product.selected" type="checkbox"></td>
                      <td><span class="text_sm">{{ product.tipoDeProduto }}</span></td>
                      <td><span class="text_sm">{{ product.produto.tipo }}</span></td>
                      <td><span class="text_sm">{{ product.vencimento | filterDateTime}}</span></td>
                      <td><span class="text_sm">{{ product.codigo }}</span></td>
                      <td><span class="text_sm">{{ product.quantidade | money }}</span></td>
                      <td><span class="text_sm">{{ product.unidade }}</span></td>
                      <td >
                        <!-- <b-button-group size="sm"> -->
                          <b-button :class="lance <= total ? '' : 'block_buttom'" 
                                    :disabled="lance > total"
                                    class="btn-sm btn_extra_sm btn_grey btn_plus" 
                                    pill 
                                    @click="setAmount(product, true)">
                                     +
                          </b-button>
                          <b-button  class="btn-sm btn_extra_sm ml-1 btn_grey btn_minus" 
                                     pill 
                                     @click="setAmount(product, false)">
                                    &#8722;
                          </b-button>
                          <!-- :disabled="lance > total" -->
                          <!-- :class="lance <= total ? '' : 'block_buttom'" -->
                        <!-- </b-button-group> -->
                      </td>
                      <!-- <td>
                      </td> -->
                  </tr>
              </tbody>
          </table>
        </div>
      </div>
    </div>
</template>

<script scoped>

import { PaginationMixin } from '@/mixins/paginationMixin'
import { FormatUtilsMixin } from '@/mixins/formatUtilsMixin'
import { SimuladorMixin } from '@/components/modules/Simulador/SimuladorMixin'

export default {
  name: 'simulador-product-list-component',
  mixins: [PaginationMixin,FormatUtilsMixin,SimuladorMixin],
  components: {},
  props: {
      products: {
          required: true, 
          type: Array
      },
  },
  computed: {
  },
  watch: {
    products: function(val) {
      this.perPage = val.length;
    }
  }, 
  data: () => ({
    lance: 1000,
    headers: [
      {
        title: "Tipo De Produto",
        keyOrder: "tipoDeProduto",
        auxParameter: "",
      },
      {
        title: "Produto",
        keyOrder: "produto",
        auxParameter: "tipo",
      },
      {
        title: "Vencimento",
        keyOrder: "vencimento",
        auxParameter: "",
      },
      {
        title: "Código",
        keyOrder: "codigo",
        auxParameter: "",
      },
      {
        title: "Quantidade",
        keyOrder: "quantidade",
        auxParameter: "",
      },
      {
        title: "Unidade",
        keyOrder: "unidade",
        auxParameter: "",
      }
    ],
    show: false,
    productAll: false,
    filter: "",
    activeOnly: false,
    txtSearch: [],
    currentPage: 1,
    totalRows: 0,
    toggleOrder: false,
    keyOrder: {
        value: ''
    }, 
    perPage: 0,
    timerSearch: () => {},
    isLoadingSave: false
  }), 
  methods: {
    
    setLance(e){
      this.lance = e.target.value;
      this.lance = this.convertToMoneyToFloat(this.lance)._value;
    },

    setAmount(product, plus) {
       
      var _products = []

      this.products.forEach( x => {
        if(x.selected) {
          _products.push(x)
        }
      });

      if(_products.length === 0)
        _products.push(product)

       for(var p in _products) {
         this.updateProductValue(plus,_products[p])
       }
    },

    updateProductValue(operator, product) {
      this.set_value_in_total({operator, product, value: this.lance})
    },
    
    productSelected(product) {
      this.$set(product,'selected', !product.selected)
    },
    productAllSelected() {
      var _products = this.filterDataPagination(this.filterDataListBySearch(this.products))
      _products.forEach( x => {
          this.$set(x,'selected', !this.productAll)
      });
      this.productAll = !this.productAll
    },
    colapseBody() {
      this.show = !this.show
      this.$emit('colapse', {el: 'products', show: this.show})
    }
  }
}
</script>

<style scoped>
   .block_buttom {
     cursor: not-allowed !important;
     background-color: #ccc;
   }
</style>
