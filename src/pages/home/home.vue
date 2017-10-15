<template>
  <div class="home">
    <div class="left">
      <left-side class="leftSide">
      </left-side>
    </div>
    <div class="mainContent">
      <main-content></main-content>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import leftSide from '../../components/leftSide/leftSide.vue'
import mainContent from '../../components/mainContent/mainContent.vue'
  export default {
    name: 'home',
    components:{
        leftSide,
         mainContent,
    },
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .leftSide{
    width:15%;
    height:100%;
    position: absolute;
    bottom:0;
    background: #324157;
  }
  .mainContent{
    float: left;
    width:85%;
    position: absolute;
    right:0;
  }
  .home{width:100%;height:100%; position: relative;}


</style>

