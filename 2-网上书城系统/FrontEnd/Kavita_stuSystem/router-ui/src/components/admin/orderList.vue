<!-- 我的页面 -->

<template>
  <div>
    <!-- <span>显示page信息</span>
    <br />
    {{ pageData }} -->
    <!-- 1-表格模块 -->
    <el-input
      v-model="searchKey"
      @change="searchStudents"
      style="width: 500px"
    ></el-input>
    <el-button @click="searchStudents">搜索</el-button>

    <el-table :data="dataList" style="width: 100%">
      <template>
        <!--空白模板 <el-table-column prop="" label="" width=""> </el-table-column> -->

        <el-table-column
          prop="orderid"
          label="订单ID"
          width="100"
        ></el-table-column>

        <el-table-column
          prop="userid"
          label="用户ID"
          width="100"
        ></el-table-column>
    

          <el-table-column label="订单状态" width="50" prop = "status">
            <template slot-scope="scope">
              <!-- <span style="color: red" v-if="scope.row.flag == 0">未审核</span> -->
              <span v-if="scope.row.status == '0'">已下单</span>
              <span v-if="scope.row.status == '1'">已支付</span>
              <span v-if="scope.row.status == '2'">已发货</span>
              <span v-if="scope.row.status == '3'">已收货</span>
              <span v-if="scope.row.status == 4">已评价</span>
            </template>
          </el-table-column>

        <el-table-column prop="subtotal" label="总金额" width="50">
        </el-table-column>

        <el-table-column prop="orderdate" label="下单日期" width="">
        </el-table-column>
        <el-table-column prop="modifydate" label="修改日期" width="">
        </el-table-column>

        <el-table-column label="操作">
          <!-- XXX 如果要获得点击按钮的那一栏的值,一定要加template -->
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >查看详情</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleScores(scope.$index, scope.row)"
              >下架书籍</el-button
            >
            <!-- <el-button
              v-privilege="'删除'"
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            > -->
          </template>
        </el-table-column>
      </template>
    </el-table>

    <!-- 2-分页模块 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-sizes="[5, 6, 7, 8, 9]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageData.count"
    >
    </el-pagination>
  </div>
</template>

<script>
// import {createNameSpacedHelpers} from 'vuex'

import { createNamespacedHelpers, mapMutations } from "vuex"; // 引入vuex的创建命名空间的方法
const { mapState, mapActions } = createNamespacedHelpers("student");

export default {
  components: {},
  data() {
    return {
      searchKey: "",
      currentPage: 1,
      dataList: [],
      // menus:['学号', '姓名', '年龄','性别','班级','住址', '爱好', '操作']
    };
  },
  computed: {
    ...mapState({
      studentList: (state) => state.studentList,
      pageData: (state) => state.pageData,
    }),
  },
  watch: {},
  methods: {
    // 从vuex状态机里取得数据和方法
    ...mapActions(["getStudents", "getByPages"]),
    ...mapMutations(["CHANGE_PAGEDATA"]),

    async getOrders() {
      try {
        let res = await this.api.orders.getOrders();
        console.log(res);
        this.dataList = res.result;
      } catch (e) {
        this.$message.error("获取用户列表失败");
      }
    },
    // 1-删除事件
    async handleDelete(index, row) {
      console.log(index, row);
      try {
        // BUG 假如不用await 接收, 第一次点击之后 不会及时刷新,也就是需要删除两个(第二个进入的时候上一个才执行)
        let res = await this.api.students.deleteStudent(row._id);
        if (res) {
          this.getStudents();
          this.$message({
            message: "删除成功",
            type: "success",
          });
        }
      } catch (e) {
        this.$message({
          message: "删除失败",
          type: "error",
        });
      }
    },

    // 2-修改事件
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push("/teacher/stuUpdate?sid=" + row.sid);
    },
    handleScores(index, row) {
      console.log(index, row);
      this.$router.push("/teacher/stuScore?sid=" + row.sid);
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageData.pageSize = val;
      this.currentPage = 1;
      this.CHANGE_PAGEDATA(this.pageData);
      this.getByPages({
        pageIndex: 1,
        pageSize: this.pageData.pageSize,
        k: this.searchKey,
      });
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pageData.pageIndex = val;
      this.CHANGE_PAGEDATA(this.pageData);
      this.getByPages({
        pageIndex: this.pageData.pageIndex,
        pageSize: this.pageData.pageSize,
        k: this.searchKey,
      });
    },

    // 6-搜索方法

    searchStudents() {
      this.pageData.pageIndex = 1;
      console.log("搜索关键词" + this.searchKey);
      this.currentPage = 1;
      this.getByPages({
        pageIndex: this.pageData.pageIndex,
        pageSize: this.pageData.pageSize,
        k: this.searchKey,
      });
    },
  },

  async created() {
    // this.getStudents();
    // 需要传进来一个含有 pageIndex, pageSize, k 的对象
    // let pageIndex = 1;
    // let pageSize = 5;
    // let Pdata = ;
    this.getOrders();
    // this.getByPages({ pageIndex: 1, pageSize: 5, k: "" });
  },
};
</script>

<style scoped></style>

