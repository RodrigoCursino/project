<template>
    <div>
        <modal-shared-component 
            :reference="formName" 
            @closeModal="clearForm()"
            title="Cadastro de Usuários">
            <div slot="modal-body">
                <!-- linha um -->
                <div class="row">
                    <!-- Processamento HL -->
                    <div class="form-group col-6">
                        <div class="row no-gutters">
                                <label class="col-12 text-left text_sm">Processamento HL *</label>
                                <input class="form-control form-control-sm" 
                                    :class="{'is-invalid': $v.dataModel.processamentoHL.$error}"
                                    v-model.trim="$v.dataModel.processamentoHL.$model"
                                    type="text"
                                />
                                <small v-if="$v.dataModel.processamentoHL.$error" 
                                    class="help-block form-text text-danger">
                                Este campo é obrigatório.
                                </small>
                        </div>
                    </div>
                    <!-- Processamento HL -->
                    <!-- Gestor -->
                    <div class="form-group col-6">
                        <div class="row no-gutters">
                            <label class="col-12 text-left text_sm">Gestor *</label>
                            <input class="form-control form-control-sm" 
                                    :class="{'is-invalid': $v.dataModel.gestor.$error}"
                                    v-model.trim="$v.dataModel.gestor.$model"
                                    type="text"
                            />
                            <small v-if="$v.dataModel.gestor.$error" 
                                    class="help-block form-text text-danger">
                                Este campo é obrigatório.
                            </small>
                        </div>
                    </div>
                    <!-- Gestor -->
                </div>
                <!-- linha um -->

                <!-- linha dois -->
                <div class="row">
                    <!-- Grupo Gestor -->
                    <div class="form-group col-6">
                        <div class="row no-gutters">
                                <label class="col-12 text-left text_sm">Grupo Gestor *</label>
                                <input class="form-control form-control-sm" 
                                    :class="{'is-invalid': $v.dataModel.grupoGestor.$error}"
                                    v-model.trim="$v.dataModel.grupoGestor.$model"
                                    type="text"
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
   name: 'grupo-gestor',
   components: {
       ModalSharedComponent
   },
   watch: {
   },
   validations: {
     dataModel: {
       processamentoHL: {
         required
       },
       gestor: {
         required
       },
       grupoGestor: {
         required
       }
     }
   },
   data:() => ({
       dataModel: {},
       formName: 'grupo-gestor',
   }),
   methods: {
       // define um dado para ser editado.   
       buildForm(data) {
          this.dataModel = {
             id              : data.id               ? data.id               : 0, 
             processamentoHL : data.processamentoHL  ? data.processamentoHL  : '', 
             gestor          : data.gestor           ? data.gestor           : '',
             grupoGestor     : data.grupoGestor      ? data.grupoGestor      : '',
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