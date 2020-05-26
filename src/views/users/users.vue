<template>
    <div>
        <header-shared-component :title="'Usuários'">
         <div class="d-flex">
            <button class="btn btn-sm btn-info ml-auto" @click="userRegister({})">
                Adicionar
            </button>
         </div>
        </header-shared-component>
        <div class="container">
            <users-list-component/>
        </div>
        <users-form-component ref="userForm"/>
    </div>
</template>
<script>
import HeaderSharedComponent from '@/components/shared/header-shared'
import UsersFormComponent from '@/views/users/users-form'
import UsersListComponent from '@/views/users/users-list'
export default {
   name: 'users-view-component',
   components: {
       HeaderSharedComponent,
       UsersFormComponent,
       UsersListComponent,
   },
   methods: {
       userRegister(user) {
           this.$refs.userForm.buildForm(user)
       }
   }
}
</script>
<style scoped>

</style>