<template>
    <div>
        <modal-shared-component 
            :reference="formName" 
            @closeModal="clearForm()"
            title="Cadastro de Usuários">
            <div slot="modal-body">
                <!-- linha um -->
                <div class="row">
                    <!-- Mapa -->
                    <div class="form-group col-6">
                        <div class="row no-gutters">
                                <label class="col-12 text-left text_sm">Mapa *</label>
                                <input class="form-control form-control-sm" 
                                    :class="{'is-invalid': $v.dataModel.mapa.$error}"
                                    v-model.trim="$v.dataModel.mapa.$model"
                                    type="text"
                                />
                                <small v-if="$v.dataModel.mapa.$error" 
                                    class="help-block form-text text-danger">
                                Este campo é obrigatório.
                                </small>
                        </div>
                    </div>
                    <!-- Mapa -->
                    <!-- Métrica Cálculo -->
                    <div class="form-group col-6">
                        <div class="row no-gutters">
                                <label class="col-12 text-left text_sm">Métrica Cálculo *</label>
                                <input class="form-control form-control-sm" 
                                    :class="{'is-invalid': $v.dataModel.metricaCalculo.$error}"
                                    v-model.trim="$v.dataModel.metricaCalculo.$model"
                                    type="text"
                                />
                                <small v-if="$v.dataModel.metricaCalculo.$error" 
                                    class="help-block form-text text-danger">
                                Este campo é obrigatório.
                                </small>
                        </div>
                    </div>
                    <!-- Métrica Cálculo -->
                </div>
                <!-- linha um -->

                <!-- linha dois -->
                <div class="row">
                    <!-- Valor Limite -->
                    <div class="form-group col-6">
                        <div class="row no-gutters">
                                <label class="col-12 text-left text_sm">Valor Limite *</label>
                                <input class="form-control form-control-sm" 
                                    :class="{'is-invalid': $v.dataModel.vlLimite.$error}"
                                    v-model.trim="$v.dataModel.vlLimite.$model"
                                    type="number"
                                />
                                <small v-if="$v.dataModel.vlLimite.$error" 
                                    class="help-block form-text text-danger">
                                Este campo é obrigatório.
                                </small>
                        </div>
                    </div>
                    <!-- Valor Limite -->
                    <!-- Grupo Gestor -->
                    <div class="form-group col-6">
                        <div class="row no-gutters">
                                <label class="col-12 text-left text_sm">Grupo Gestor *</label>
                                <input class="form-control form-control-sm" 
                                    :class="{'is-invalid': $v.dataModel.grupoGestor.$error}"
                                    v-model.trim="$v.dataModel.grupoGestor.$model"
                                    type="number"
                                />
                                <small v-if="$v.dataModel.grupoGestor.$error" 
                                    class="help-block form-text text-danger">
                                Este campo é obrigatório.
                                </small>
                        </div>
                    </div>
                    <!-- Grupo Gestor -->
                </div>
                <!-- linha dois -->

                 <!-- linha três -->
                <div class="row">
                    <!-- Grupo de Fator de Risco -->
                    <div class="form-group col-6">
                        <div class="row no-gutters">
                                <label class="col-12 text-left text_sm">Grupo de Fator de Risco *</label>
                                <input class="form-control form-control-sm" 
                                    :class="{'is-invalid': $v.dataModel.grupoFatorRisco.$error}"
                                    v-model.trim="$v.dataModel.grupoFatorRisco.$model"
                                    type="number"
                                />
                                <small v-if="$v.dataModel.grupoFatorRisco.$error" 
                                    class="help-block form-text text-danger">
                                Este campo é obrigatório.
                                </small>
                        </div>
                    </div>
                    <!-- Grupo de Fator de Risco -->
                </div>
                <!-- linha três -->
            </div>
            <div slot="modal-footer">
                <button class="btn btn-success btn_extra_sm" @click="save()">Cadastrar</button>
            </div>
        </modal-shared-component>
    </div>
</template>
<script>
import ModalSharedComponent            from '@/components/shared/modal-shared'
import { required }                    from 'vuelidate/lib/validators'
export default {
   name: 'metrica',
   components: {
       ModalSharedComponent
   },
   watch: {
   },
   validations: {
     dataModel: {
       mapa: {
         required
       },
       metricaCalculo: {
         required  
       },
       vlLimite: {
         required  
       },
       grupoGestor: {
         required  
       },
       grupoFatorRisco: {
         required
       } 
     }
   },
   data:() => ({
       dataModel: {},
       formName: 'metrica',
   }),
   methods: {
       // define um dado para ser editado.   
       buildForm(data) {
          this.dataModel = {
             id              : data.id              ? data.id              : 0, 
             mapa            : data.mapa            ? data.mapa            : '', 
             metricaCalculo  : data.metricaCalculo  ? data.metricaCalculo  : '', 
             vlLimite        : data.vlLimite        ? data.vlLimite        : 0, 
             grupoGestor     : data.grupoGestor     ? data.grupoGestor     : '', 
             grupoFatorRisco : data.grupoFatorRisco ? data.grupoFatorRisco : '', 
          }

          this.$bvModal.show(this.formName)
       },
       
       save() {
           this.$v.$touch()
           if (!this.$v.dataModel.$invalid) {
               this.clearForm()
           }
           
       },

       clearForm() {
           this.$v.$reset()
           this.dataModel = {}
       }
   }
}
</script>
<style scoped>

</style>