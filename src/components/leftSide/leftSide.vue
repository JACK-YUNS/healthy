<template>
  <div class="leftSide">
    <p class="leftSide-logo">
      OSM门店系统
    </p>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark" unique-opened router>
      <el-submenu index="1">
        <template slot="title" id="id"><i class="el-icon-message white" ></i><span class="white">客户管理</span></template>
        <el-menu-item index="customer" ><span class="white leftSide-menu">客户列表</span></el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu white"></i><span class="white">预约管理</span></template>
        <el-menu-item index="booking"><span class="white leftSide-menu">店面预约</span></el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting white"></i><span class="white">订单管理</span></template>
        <el-menu-item index="order"><span class="white leftSide-menu">订单列表</span></el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-setting white"></i><span class="white">服务管理</span></template>
        <el-menu-item index="service"><span class="white leftSide-menu">服务列表</span></el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'leftSide',
    data () {
      return {
      }
    },
    //获取点击的index
    methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .leftSide{
    height:100%;
    background: #324157;


  }
  .leftSide-logo{
    font-size: 30px;
    color: #fff;
    background: #324157;
    border-bottom: 1px solid #e5e5e5;
    padding: 20px 10px;
    text-align: center;
  }
  .white{
    color: #fff;
    text-align: center;
    display: inline-block;
    padding: 0px 10px;
  }
  .leftSide-menu{
    margin-left: 26px;
  }




</style>
<style>

</style>

