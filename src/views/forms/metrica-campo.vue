<template>
    <div>
        <modal-shared-component 
            :reference="formName" 
            @closeModal="clearForm()"
            title="Cadastro de Usuários">
            <div slot="modal-body">
                <!-- linha um -->
                <div class="row">
                    <!-- Mética Cálculo -->
                    <div class="form-group col-6">
                        <div class="row no-gutters">
                                <label class="col-12 text-left text_sm">Mética Cálculo *</label>
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
                    <!-- Métrica Campo -->
                    <div class="form-group col-6">
                        <div class="row no-gutters">
                                <label class="col-12 text-left text_sm">Métrica Campo *</label>
                                <input class="form-control form-control-sm" 
                                    :class="{'is-invalid': $v.dataModel.metricaCampo.$error}"
                                    v-model.trim="$v.dataModel.metricaCampo.$model"
                                    type="text"
                                />
                                <small v-if="$v.dataModel.metricaCampo.$error" 
                                    class="help-block form-text text-danger">
                                Este campo é obrigatório.
                                </small>
                        </div>
                    </div>
                    <!-- Métrica Campo -->
                </div>
                <!-- linha um -->
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
   name: 'metrica-campo',
   components: {
       ModalSharedComponent
   },
   watch: {
   },
   validations: {
     dataModel: {
       metricaCalculo: {
        required  
       },
       metricaCampo: {
         required
       }
     }
   },
   data:() => ({
       dataModel: {},
       formName: 'metrica-campo',
   }),
   methods: {
       // define um dado para ser editado.   
       buildForm(data) {
          this.dataModel = {
             id              : data.id              ? data.id              : 0, 
             metricaCalculo  : data.metricaCalculo  ? data.metricaCalculo  : '', 
             metricaCampo    : data.metricaCampo    ? data.metricaCampo    : '' 
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