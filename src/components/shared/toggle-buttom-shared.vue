<template>
  <label :class="`switch${toggleSize}`">
    <input type="checkbox" v-model="internalValue"/>
    <span :class="`slider${toggleSize} round`"></span>
  </label>
</template>

<script>
    export default {
       name: 'toggle-buttom-shared-component',
       props: {
         value: {required: true},
         size: {default: false}
       },
       computed: {
         toggleSize(){
           if(this.size) {
             return '-sm'
           } 

           return ""
         }
       },
       created() {
          this.internalValue = this.value
       },
       watch: {
         value() {
           this.internalValue = this.value
         },
         internalValue(newValue) {
           this.$emit('input', newValue)
         }
       },
       data:() => ({
         internalValue: null
       })
    }
</script>
<style scoped>
/* size md*/
.switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 22px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #273342;
}

input:focus + .slider {
  box-shadow: 0 0 1px #273342;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
/* Rounded sliders */

/* size md*/


/* size sm */
.switch-sm {
  position: relative;
  display: inline-block;
  width: 35px;
  height: 18px;
}

.switch-sm input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider-sm {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider-sm:before {
  position: absolute;
  content: "";
  height: 11px;
  width: 11px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider-sm {
  background-color: #273342;
}

input:focus + .slider-sm {
  box-shadow: 0 0 1px #273342;
}

input:checked + .slider-sm:before {
  -webkit-transform: translateX(18px);
  -ms-transform: translateX(18px);
  transform: translateX(18px);
}

/* Rounded sliders */
.slider-sm.round {
  border-radius: 34px;
}

.slider-sm.round:before {
  border-radius: 50%;
}
/* Rounded sliders */

/* size sm */

</style>