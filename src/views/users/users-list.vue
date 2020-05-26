<template>
    <div class="row no-gutters">
        <div class="card w-100">
            <div class="cards_panel_header d-flex align-items-center">
               Usuários
               <input class="form-control col-4 form-control-sm ml-auto"
                    v-model="filter" 
                    placeholder="Buscar"
                    @input="keyPushSearch($event, filter)"
               />
               <select class="form-control col-2 form-control-sm ml-3"
                       v-model="type"
               >
                   <option :value="0">Selecione um Tipo</option>
                   <option :value="1">Área de Risco</option>
                   <option :value="2">Área de Negócios</option>
               </select>
               <toggle-buttom-shared-component class="mt-2 ml-2" v-model="activeOnly"/>
            </div>
            <div class="pr-2 pl-2 pt-2">
                <table class="table table-sm table-hover">
                    <thead class="fixed_head">
                        <tr>
                            <th v-for="(header, h) in headers" :key="`head-[${h}]`" :class="checkOrderBy(keyOrder,header.keyOrder)" 
                                @click="genericOrderBy(users, header.keyOrder, toggleOrder = !toggleOrder, keyOrder, header.auxParameter)"
                            >
                                <span class="text_sm">
                                {{ header.title }}
                                <b-icon-caret-down-fill v-if="checkOrderBy(!toggleOrder)"></b-icon-caret-down-fill>
                                <b-icon-caret-up-fill v-else></b-icon-caret-up-fill>
                                </span>
                            </th>
                            <th class="text_sm">Ativo</th>
                            <th style="width: 200px"></th>
                        </tr>  
                    </thead>
                    <tbody>
                        <tr v-for="(user, u) in filterDataPagination(filterDataListBySearch(filterByType))" :key="`body-users-[${u}|${user.id}]`" slot="tableBody">
                            <td><span class="text_sm">{{ user.racf }}</span></td>
                            <td><span class="text_sm">{{ user.mapa }}</span></td>
                            <td><span class="text_sm">{{ user.tipo | typeFilter }}</span></td>
                            <td><toggle-buttom-shared-component :size="true" class="mt-1" v-model="user.active"/></td>
                            <td >
                                <button class="btn btn-sm btn-primary btn_extra_sm">
                                    Editar
                                </button>
                                <button class="btn btn-sm btn-danger btn_extra_sm ml-1">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table> 
            </div>
            <div class="d-flex justify-content-center">
                <b-pagination
                    v-if="totalRows>perPage"
                    class="pagination pagination-sm"
                    v-model="currentPage"
                    :total-rows="totalRows"
                    :per-page="perPage"
                    aria-controls="warp-table-adjust"
                    align="fill"
                ></b-pagination>
            </div>
        </div>
    </div>
</template>
<script>
import { Users }                    from '@/response/users'
import { PaginationMixin }          from '@/mixins/paginationMixin'
import ToggleButtomSharedComponent  from '@/components/shared/toggle-buttom-shared'
export default {
   name: 'users-list-component',
   mixins:[PaginationMixin],
   components: {
       ToggleButtomSharedComponent
   },
   computed: {
       filterByType() {
           
           if(this.type === 0) {
               return this.users
           }

           return this.users.filter(x => {
                if(x.tipo === this.type) {
                    return x
                }
           })
       }
   },
   mounted() {
       this.users = Users
   },
   watch: {
   },
   data:() => ({
       users: [],
       type: 0,
       headers: [
            {
                title: "RACF",
                keyOrder: "racf",
                auxParameter: "",
            },
            {
                title: "Mapa",
                keyOrder: "mapa",
                auxParameter: "",
            },
            {
                title: "Tipo",
                keyOrder: "tipo",
                auxParameter: "",
            },
       ],
       filter: "",
       activeOnly: true,
       txtSearch: [],
       currentPage: 1,
       totalRows: 0,
       toggleOrder: false,
       keyOrder: {
           value: ''
       }, 
       perPage: 8,
       timerSearch: () => {},
       isLoadingSave: false
   }),
   methods: {
   },
   filters: {
       typeFilter(val) {
           if(val == 1) {
               return "Área de Risco"
           }

            return "Área de Negócios"
       }
   }
}
</script>
<style scoped>
    .table {
        border: #ccc solid 1px;
    }
</style>