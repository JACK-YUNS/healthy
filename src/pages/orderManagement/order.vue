<template>
  <div class="order">
    <div class="orderTable">
      <div>
        <el-button @click="customerShow(show)">添加客户</el-button>
        <el-button @click="customerShow1(show1)">修改客户</el-button>
        <div style="display: flex; margin-top: 20px; ">
          <transition name="el-fade-in">
            <div v-show="show" class="transition-box">
              <p class="transition-box-title">修改客户</p>
              <div class="transition-box-info">
                <p class="transition-box-info1"><span>客户姓名</span><input type="text"></p>
                <p class="transition-box-info1"><span>客户手机号</span><input type="text"></p>
              </div>
              <div class="transition-box-sureOrPass">
                <el-button type="primary" class="transition-box-infoButton" @click="customerPass">取消</el-button>
                <el-button type="primary" class="transition-box-infoButton" @click="customerSure">保存</el-button>
              </div>
            </div>
          </transition>
          <transition name="el-fade-in">
            <div v-show="show1" class="transition-box">

              <p class="transition-box-title">修改客户</p>
              <div class="transition-box-info">
                <p class="transition-box-info1"><span>客户姓名</span><input type="text"></p>
                <p class="transition-box-info1"><span>客户手机号</span><input type="text"></p>
              </div>
              <div class="transition-box-sureOrPass">
                <el-button type="primary" class="transition-box-infoButton" @click="customerPass">取消</el-button>
                <el-button type="primary" class="transition-box-infoButton" @click="customerSure">保存</el-button>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div>
        <el-table
          ref="multipleTable"
          :data="tableData3"
          border
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="日期"
            width="120">
            <template scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            show-overflow-tooltip>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'order',
    data () {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.order{
  background: #ffffff;
  margin: 10px auto;
  width:97%;
  padding: 10px;
  ;

}
  .orderTable{
    padding-bottom: 50px;
  }
</style>
