<template>
  <div class="header_view_content">
    <div class="container">
      <div class="d-flex justify-content-start align-items-center">
        <div class="title_content">
            <span class="header_title">{{ title | titleUpperCase }}</span>
        </div>
        <div class="tools_content">
            <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'header-shared-component',
  props: {
      title: {
          required:true, 
          type: String
      }
  },
  data: () => ({
    
  }),
  filters: {
      titleUpperCase: function (val) {
          if(val)
            return val.toUpperCase();
      }
  }
}
</script>

<style scoped>
  .header_view_content {
    background: rgb(33, 104, 138);
    padding: 0.5em 0em;
    min-height: 47px;
    margin-bottom: 1em;
  }
  .header_title {
      color: white;
      font-weight: 400;
  }
  .title_content {
      width: 15%;
  }
  .tools_content {
      width: 85%;
  }
</style>
