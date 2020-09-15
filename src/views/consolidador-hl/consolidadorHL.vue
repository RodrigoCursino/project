<template>
  <div>
    <header-shared-component :title="'Ops'">
         <div class="d-flex">
            <date-picker v-model="date"
                         input-class="form-control form-control-sm"
                         class="mr-3" 
                         format="DD/MM/YYYY">
            </date-picker>
            <select v-model="modo" 
                    class="form-control form-control-sm col-3">
                <option value="">Selecione um Processamento</option>
                <option v-for="(processamento, i) in processamentos" :key="i" :value="processamento.processamento">{{ processamento.processamento }}</option>
            </select>
         </div>
    </header-shared-component>
    <div class="container">
        <div class="row no-gutters">
            <div class="col-6">
                <div class="mr-4" v-show="parameterFiles.length > 0">
                    <b>Paramétrico:</b>  
                    <div class="files_list cards_panel_shadow">
                        <table class="table table-sm table-striped">
                            <tbody>
                                <tr v-for="(file,k) in parameterFiles" :key="k">
                                <td :class="file.existe ? '' : 'alert-danger'"> 
                                    <b-icon-folder-fill></b-icon-folder-fill> &nbsp; 
                                    <span class="text_sm" :title="file.caminho">{{ file.caminho | textLimit }}</span>
                                </td>
                                </tr>
                            </tbody>
                        </table>
                        <button class="btn btn-sm btn-success btn_extra_sm">
                            CARREGAR
                        </button>
                    </div>
                </div>
                <div class="mr-4" v-show="historyFiles.length > 0">
                    <b>Simulação Histórica:</b>  
                    <div class="files_list cards_panel_shadow">
                        <table class="table table-sm table-striped">
                            <tbody>
                                <tr v-for="(history,h) in historyFiles" :key="h">
                                    <td colspan="2"> 
                                        <b-icon-folder-fill></b-icon-folder-fill> &nbsp; <span :title="history.caminho" class="text_sm">{{ history.caminho | textLimit }}</span>
                                    </td>
                                    <td>
                                        <button class="btn btn-sm btn-success btn_extra_sm">
                                            CARREGAR
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-6">
               <div class="files_view">
                   <table class="table table-sm table-striped">
                       <thead>
                           <tr>
                               <th></th>
                               <th class="table_title">Arquivo</th>
                               <th class="table_title">Data</th>
                               <th class="table_title">Tamanho</th>
                           </tr>
                       </thead>
                       <tbody>
                           <tr>
                               <td></td>
                               <td>
                                   <b-icon-folder-fill></b-icon-folder-fill> &nbsp; file:/Projects/Users/App/apilibrary/apilibrary.sln
                               </td>
                               <td>12/05/2020</td>
                               <td>15 mb</td>
                           </tr>
                           <tr>
                               <td></td>
                               <td>
                                   <b-icon-folder-fill></b-icon-folder-fill> &nbsp; file:/Projects/Users/App/apilibrary/apilibrary.sln
                               </td>
                               <td>08/05/2020</td>
                               <td>16 mb</td>
                           </tr>
                       </tbody>
                   </table>
               </div>
               <div class="d-flex justify-content-end">
                   <button class="btn btn-sm btn-danger btn_extra_sm">
                        LIMPAR BASE
                   </button>
               </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import HeaderSharedComponent from '@/components/shared/header-shared'
import DatePicker from 'vue2-datepicker';
import { processamentos } from '@/response/processamentos'
import { processamentosData } from '@/response/processamentos-data'
export default {
  name: 'consolidador-hl-view-component',
  components: {HeaderSharedComponent,DatePicker},
  watch: {
      modo: function (val) {
          this.parameterFiles = [];
          this.historyFiles   = [];
          for(var i = 0; i < 4; i++) {
              this.parameterFiles.push(processamentosData[val][i])
          }
          for(var j = 4; j < processamentosData[val].length; j++) {
              this.historyFiles.push(processamentosData[val][j])
          }
      }
  },
  mounted() {
      this.date = this.date ? this.date : this.$moment(new Date(),'LL').toDate()
      this.getProcessamentosList()
  },
  data: () => ({
    date: null,
    modo: "",
    processamentos: [],
    parameterFiles: [],
    historyFiles: [],
  }), 
  methods: {
      getProcessamentosList() {
          this.processamentos = processamentos;
      }
  },
  filters: {
      textLimit(val) {
          if(val) {
              return val.substring(0,55) + ' ...'
          }
      }
  }
}
</script>

<style scoped>
  .files_list {
      border: lightgrey solid 1px;
      border-radius: 5px;
      padding: 0.5em;
      margin-bottom: 1em;
      background-color: white;
  }
  .files_list  li {
      list-style-type: none;
      background-color: white;
      border-radius: 3px;
      padding: 0.4em;
      font-size: 0.75em;
  }
  .files_list li:nth-child(odd) {
      background-color: whitesmoke;
  }
  .file_alert {
      background-color: rgba(221, 21, 21, 0.466) !important;
  }
  .files_view {
      background-color: #cecece;
      height: 60vh;
      margin-bottom: 0.5em;
      border-radius: 5px;
      border: #928f8f 1px solid;
  }
</style>
