<template>
  <div>
    <header-section>

    </header-section>
    <!--<v-content>-->
      <!--<router-link></router-link>-->
    <!--</v-content>-->
  </div>
</template>

<script>
  import headerSection from './headerSection/headerSection.vue'
  import content from './content/content.vue'
  export default {
      components:{
          headerSection,
          'v-content':content
      },
      data () {
        return {

        }
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
