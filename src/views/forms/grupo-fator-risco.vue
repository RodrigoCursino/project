<template>
    <div>
        <modal-shared-component 
            :reference="formName" 
            @closeModal="clearForm()"
            title="Cadastro de Usuários">
            <div slot="modal-body">
                <!-- linha um -->
                <div class="row">
                    <!-- fatorRisco -->
                    <div class="form-group col-6">
                        <div class="row no-gutters">
                                <label class="col-12 text-left text_sm">Fator Risco *</label>
                                <input class="form-control form-control-sm" 
                                    :class="{'is-invalid': $v.dataModel.fatorRisco.$error}"
                                    v-model.trim="$v.dataModel.fatorRisco.$model"
                                    type="text"
                                />
                                <small v-if="$v.dataModel.fatorRisco.$error" 
                                    class="help-block form-text text-danger">
                                Este campo é obrigatório.
                                </small>
                        </div>
                    </div>
                    <!-- fatorRisco -->
                    <!-- grupoFatorRisco -->
                    <div class="form-group col-6">
                        <div class="row no-gutters">
                            <label class="col-12 text-left text_sm">Grupo Fator Risco *</label>
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
                    <!-- grupoFatorRisco -->
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
   name: 'grupo-fator-risco',
   components: {
       ModalSharedComponent
   },
   watch: {
   },
   validations: {
     dataModel: {
       fatorRisco: {
         required
       },
       grupoFatorRisco: {
         required
       }
     }
   },
   data:() => ({
       dataModel: {},
       formName: 'fator-risco',
   }),
   methods: {
       // define um dado para ser editado.   
       buildForm(data) {
          this.dataModel = {
             id              : data.id               ? data.id               : 0, 
             fatorRisco      : data.fatorRisco       ? data.fatorRisco       : '', 
             grupoFatorRisco : data.grupoFatorRisco  ? data.grupoFatorRisco  : '' 
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