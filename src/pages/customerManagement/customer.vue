<template>
  <div id="customer">
    <div class="customer">
        <el-row>
          <el-col :span="24" :offset="0"><div class="grid-content bg-purple">
            <div class="customerBox" >
              <el-input
                v-for="input in data"
                :placeholder="input.placeholder"
                class="customerSearch-input"
              >
              </el-input>
              <el-select v-model="value" placeholder="请选择" class="customerSearch-selection">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          </el-col>
        </el-row>
      <el-row>
        <el-col :span="9" :offset="15">
          <div class="grid-content bg-purple">
            <div class="customerSearch">
              <el-button type="primary" class="customerSearch-button">搜索</el-button>
              <el-button type="primary" class="customerSearch-button">重置</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="customerTable">
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
    name: 'customerSearch',

    data () {
      return {
        show: false,
        show1:false,
        data:
        //input数据
          [
          {
            placeholder:"请输入姓名"
          },
          {
            placeholder:"请输入年龄"
          },
          {
            placeholder:"请输入手机号"
          }
        ],
        //下拉框数据
        options: [{
          value: '选项1',
          label: '已签约'
        }, {
          value: '选项2',
          label: '未签约'
        }
        ],
        value: '',

        //table数据
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

    },
    methods:{
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      customerShow(show){
        this.show = !this.show
        this.show1 = false

      },
      customerShow1(show){
          this.show1=!this.show1
        this.show=false

      },
      customerPass(){
          this.show = false;
          this.show1 = false
      },
      customerSure(){
        this.show = false
        this.show1 = false
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .transition-box {
    margin-bottom: 10px;
    width: 400px;
    height: 200px;
    border-radius: 4px;
    background: #fff;
    border:1px solid black;
    color: #000;
    box-sizing: border-box;
    margin-right: 20px;
    position: absolute;
    top: 40px;
    left: 200px;
    z-index: 2;
  }
  .customer{
    height: 100%;
    width:97%;
    background: #fff;
    margin: 10px auto;
    padding: 10px;
    display:block;
  }
  .customerBox{
    padding: 12px 20px;
  }
  .customerSearch-input{
    width:150px;
    display: inline-block;
    margin-right: 20px;
  }
  .customerSearch-selection{
    width:150px;
  }
  .customerSearch{
    margin-top: 10px;
  }
  .customerSearch-button{
    width: 100px;
    margin-right: 10px;
  }
  .customerTable{
    padding: 10px;
    margin: 10px auto;

    background: #fff;
    width:97%;
  }
  .customerTable{
    position: relative;
    padding-bottom: 50px;

  }
  .transition-box-title{
    height:40px;
    background: #515151;
    color: #fff;
    line-height: 40px;
    padding-left: 20px;
  }
  .transition-box-info{
    padding: 20px 20px;
  }
  .transition-box-info p{
    margin-top: 10px;
  }
  .transition-box-info1 span{
    width: 100px;
    text-align: left;
    display: inline-block;
    font-size: 14px;
  }
  .transition-box-info1 input{
    width: 160px;
    height: 20px;
  }
  .transition-box-infoButton{
    background: #515151;
    border:1px solid #515151;
    font-size: 13px;
    padding: 7px 10px;

  }
  .transition-box-sureOrPass{
    width:95%;
    text-align: right;
    margin-top: 10px;
  }


</style>
