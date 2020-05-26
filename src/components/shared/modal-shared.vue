<template>
<b-modal :id="reference" 
         :title="title"
         :size="size"
         no-close-on-backdrop
         >
  <div class="d-block text-center">
    <slot name="modal-body"></slot>
  </div>
  <template v-slot:modal-footer>
    <slot name="modal-footer"></slot>
  </template>
</b-modal>
</template>

<script>
    export default {
       name: 'modal-shared-component',
        props: {
            size: {required: false, default: 'md'},
            title: {required: false},
            reference: {required: false},
        },
        computed: {
            
        },
        mounted() {
            var _self = this
            this.$root.$on('bv::modal::hide', (bvEvent, modalId) => {
              _self.$emit('closeModal', {bvEvent, modalId})
            })
        }
    }
</script>