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
                    <!-- Grupo de Fator de Risco -->
                    <div class="form-group col-6">
                        <div class="row no-gutters">
                                <label class="col-12 text-left text_sm">Grupo de Fator de Risco *</label>
                                <input class="form-control form-control-sm" 
                                    :class="{'is-invalid': $v.dataModel.grupoFatorRisco.$error}"
                                    v-model.trim="$v.dataModel.grupoFatorRisco.$model"
                                    type="text"
                                />
                                <small v-if="$v.dataModel.grupoFatorRisco.$error" 
                                    class="help-block form-text text-danger">
                                Este campo é obrigatório.
                                </small>
                        </div>
                    </div>
                    <!-- Grupo de Fator de Risco -->
                </div>
                <!-- linha um -->

                <!-- linha dois -->
                <div class="row">
                    <!-- Tipo Fator Risco -->
                    <div class="form-group col-6">
                        <div class="row no-gutters">
                                <label class="col-12 text-left text_sm">Tipo Fator Risco *</label>
                                <input class="form-control form-control-sm" 
                                    :class="{'is-invalid': $v.dataModel.tipoFatorRisco.$error}"
                                    v-model.trim="$v.dataModel.tipoFatorRisco.$model"
                                    type="text"
                                />
                                <small v-if="$v.dataModel.tipoFatorRisco.$error" 
                                    class="help-block form-text text-danger">
                                Este campo é obrigatório.
                                </small>
                        </div>
                    </div>
                    <!-- Tipo Fator Risco -->
                </div>
                <!-- linha dois -->
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
   name: 'tipo-fator-de-risco',
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
       grupoFatorRisco: {
         required
       },
       tipoFatorRisco: {
         required
       },
     }
   },
   data:() => ({
       dataModel: {},
       formName: 'tipo-fator-de-risco',
   }),
   methods: {
       // define um dado para ser editado.   
       buildForm(data) {
          this.dataModel = {
             id              : data.id              ? data.id              : 0, 
             mapa            : data.mapa            ? data.mapa            : '', 
             grupoFatorRisco : data.grupoFatorRisco ? data.grupoFatorRisco : '',
             tipoFatorRisco  : data.tipoFatorRisco  ? data.tipoFatorRisco  : '',
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