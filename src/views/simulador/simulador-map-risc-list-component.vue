<template>
<div class="w-100 mt-2 card simulador_map_risc">
  <div class="cards_panel_header d-flex align-items-center">
      Mapa de Risco
      <select class="form-control col-3 form-control-sm ml-auto mr-2"></select>
      <button class="btn btn-primary btn-sm btn_extra_sm ml-1">Mostrar Mapa</button>
      <select class="form-control col-3 form-control-sm mr-1 ml-3"></select>
      <button class="btn btn-primary btn-sm btn_extra_sm ml-1">Atualizar Simulação</button>
      <b-icon-arrows-angle-expand v-if="show" @click="colapseBody()" class="ml-2"></b-icon-arrows-angle-expand>
      <b-icon-arrows-angle-contract v-else @click="colapseBody()" class="ml-2"></b-icon-arrows-angle-contract>
  </div>
  <div class="card-body cards_panel_tables_sm_content" ref="mapBody">
    <div class="table-wrapper">
        <table class="table table-earnings table-sm table-hover">
            <thead class="fixed_head">
                <tr>
                    <th class="teste" v-for="(header, h) in headers" :key="`head-risc-[${h}]`" :class="checkOrderBy(keyOrder,header.keyOrder)" 
                        @click="genericOrderBy(riscs, header.keyOrder, toggleOrder = !toggleOrder, keyOrder, header.auxParameter)"
                    >
                        <span class="text_sm">
                        {{ header.title }}
                        <b-icon-caret-down-fill v-if="checkOrderBy(!toggleOrder)"></b-icon-caret-down-fill>
                        <b-icon-caret-up-fill v-else></b-icon-caret-up-fill>
                        </span>
                    </th>
                    <th class="teste">
                        <slot name="addHeader"></slot>
                    </th>
                </tr>  
            </thead>
            <tbody>
                <tr v-for="(risc, p) in filterDataPagination(filterDataListBySearch(riscs))" :key="`body-risc-[${p}]`" slot="tableBody">
                    <td v-for="(header, h) in headers" :key="`head-prop-[${h}]`" class="text_sm">{{ risc[header.keyOrder][header.auxParameter] || risc[header.keyOrder]}}</td>
                </tr>
            </tbody>
         </table>
    </div>
  </div>   
</div>
</template>

<script scoped>

import { PaginationMixin } from '@/mixins/paginationMixin'
import { SimuladorMixin } from '@/components/modules/Simulador/SimuladorMixin'
export default {
  name: 'simulador-map-risc-list-component',
  mixins: [PaginationMixin, SimuladorMixin],
  props: {
      riscs: {
          required: true, 
          type: Array
      }
  },
  watch: {
    riscs: function(val) {
      this.perPage = val.length;
    }
  }, 
  data: () => ({
    show: false,
    headers: [
      {
        title: "Grupo de Fator de Risco",
        keyOrder: "GrupoDeFatorDeRisco",
        auxParameter: "",
      },
      {
        title: "Fator de Risco",
        keyOrder: "FatorDeRisco",
        auxParameter: "",
      },
      {
        title: "Gestor",
        keyOrder: "gestor",
        auxParameter: "",
      },
      {
        title: "Métrica",
        keyOrder: "metrica",
        auxParameter: "",
      },
      {
        title: "Valor Da Métrica",
        keyOrder: "ValorDaMetrica",
        auxParameter: "",
      },
      {
        title: "Limite",
        keyOrder: "limite",
        auxParameter: "",
      },
      {
        title: "Consumo do Limite",
        keyOrder: "ConsumoDoLimite",
        auxParameter: "",
      },
      {
        title: "Valor da Simulação",
        keyOrder: "ValorDaSimulacao",
        auxParameter: "",
      },
      {
        title: "Consumo da Simulação",
        keyOrder: "ConsumoDaSimulacao",
        auxParameter: "",
      },
    ],
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
    colapseBody() {
      this.show = !this.show
      this.$emit('colapse', {el: 'map', show: this.show})
    }
  }
}
</script>

<style scoped>

</style>
