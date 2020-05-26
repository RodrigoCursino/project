<template>
    <div>
        <modal-shared-component 
            :reference="formName" 
            @closeModal="clearForm()"
            title="Cadastro de Usuários">
            <div slot="modal-body">
                <!-- linha um -->
                    <div class="row">
                        <!-- Racf -->
                        <div class="form-group col-6">
                        <div class="row no-gutters">
                                <label class="col-12 text-left text_sm">RACF *</label>
                                <input class="form-control form-control-sm" 
                                       :class="{'is-invalid': $v.userModel.racf.$error}"
                                       v-model.trim="$v.userModel.racf.$model"
                                       type="text"
                                />
                                <small v-if="$v.userModel.racf.$error" 
                                       class="help-block form-text text-danger">
                                  Este campo é obrigatório.
                                </small>
                        </div>
                        </div>
                        <!-- Racf -->
                        <!-- Mapa -->
                        <div class="form-group col-6">
                            <div class="row no-gutters">
                                <label class="col-12 text-left text_sm">Mapa *</label>
                                <input class="form-control form-control-sm" 
                                       :class="{'is-invalid': $v.userModel.mapa.$error}"
                                       v-model.trim="$v.userModel.mapa.$model"
                                       type="text"
                                />
                                <small v-if="$v.userModel.mapa.$error" 
                                       class="help-block form-text text-danger">
                                  Este campo é obrigatório.
                                </small>
                        </div>
                        </div>
                        <!-- Mapa -->
                    </div>
                <!-- linha um -->
                <!-- linha dois  -->
                <div class="row">
                <!-- Tipo -->
                    <div class="row no-gutters col-6">
                        <label class="col-12 text-left text_sm">Tipo *</label>
                        <select class="form-control form-control-sm" 
                               v-model.trim="$v.userModel.tipo.$model"
                               :class="{'is-invalid': $v.userModel.tipo.$error}"
                               type="text"
                        >
                            <option :value="null"> Selecione um Tipo </option>
                            <option v-for="(type, i) in userTypes"  
                                    :key="i" 
                                    :value="type.value"> 
                                {{ type.text }}
                            </option>
                        </select>
                        <small v-if="$v.userModel.tipo.$error" 
                               class="help-block form-text text-danger">
                               Este campo é obrigatório.
                        </small>
                   </div>
                <!-- Tipo -->
                <!-- Ativo -->
                <div class="row no-gutters col-6">
                     <label class="col-12 text-left text_sm">Ativo *</label>
                     <div class="col-12 d-flex justify-content-start">
                        <toggle-buttom-shared-component v-model="userModel.ativo"/>
                     </div>
                </div>
                <!-- Ativo -->
                </div>
            </div>
            <div slot="modal-footer">
                <button class="btn btn-success btn_extra_sm" @click="save()">Cadastrar</button>
            </div>
        </modal-shared-component>
    </div>
</template>
<script>
import ModalSharedComponent            from '@/components/shared/modal-shared'
import ToggleButtomSharedComponent     from '@/components/shared/toggle-buttom-shared'
import { required }                    from 'vuelidate/lib/validators'
export default {
   name: 'users-form-component',
   components: {
       ModalSharedComponent,
       ToggleButtomSharedComponent
   },
   watch: {
   },
   validations: {
     userModel: {
       racf: {
         required
       },
       tipo: {
         required
       },
       mapa: {
         required
       }
     }
   },
   data:() => ({
       userModel: {},
       formName: 'user-register',
       userTypes: [
           {value: 1, text: 'Área de Risco'}, 
           {value: 2, text: 'Área de Negócios'}
       ]
   }),
   methods: {
       // define um usuário para ser editado.   
       buildForm(user) {
          this.userModel = {
             id   : user.id    ? user.id    : '', 
             racf : user.racf  ? user.racf  : '', 
             tipo : user.tipo  ? user.tipo  : null, 
             ativo: user.ativo ? user.ativo : true, 
             mapa : user.mapa  ? user.mapa  : '', 
          }

          this.$bvModal.show(this.formName)
       },
       
       save() {
           this.$v.$touch()
           if (!this.$v.userModel.$invalid) {
               this.clearForm()
           }
           
       },

       clearForm() {
           this.$v.$reset()
           this.userModel = {}
       }
   }
}
</script>
<style scoped>

</style>