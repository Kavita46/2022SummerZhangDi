<!-- 我的页面 -->
<template>
  <div>
    <!-- <span>显示page信息</span>
    <br />
    {{ pageData }} -->
    <!-- 1-表格模块 -->

    <!--   @change="searchBooks"  不加入此函数,数据变化太敏感, -->
    <el-input v-model="searchKey" style="width: 500px"></el-input>
    <el-button @click="searchBooks">搜索</el-button>

    <el-table :data="dataList" style="width: 100%">
      <template>
        <!--空白模板 <el-table-column prop="" label="" width=""> </el-table-column> -->

        <el-table-column
          prop="title"
          label="书名"
          width="100"
        ></el-table-column>
        <el-table-column prop="pic1" label="封面">
          <!-- 图片的显示 -->
          <template slot-scope="scope">
            <img
              :src="scope.row.pic1"
              referrerPolicy="no-referrer"
              min-width="200"
              height="120"
            />
          </template>
        </el-table-column>

        <el-table-column
          prop="describle"
          label="简介"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="author"
          label="作者"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="press"
          label="出版社"
          width="50"
        ></el-table-column>

        <el-table-column prop="publishdate" label="出版日期" width="50">
        </el-table-column>

        <el-table-column prop="rating" label="评分" width=""> </el-table-column>
        <el-table-column prop="commentnum" label="评价数" width="">
        </el-table-column>
        <el-table-column prop="unitprice" label="价格" width="">
        </el-table-column>

        <el-table-column label="标签">
          <template #default="{ row }">
            <span v-for="i in row.tags" :key="i._id">
              {{ i.tag }}
            </span>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <!-- XXX 如果要获得点击按钮的那一栏的值,一定要加template -->
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >修改信息</el-button
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

        <!-- 修改信息弹窗 -->
        <el-dialog title="修改书籍信息" :visible.sync="dialogVisible">
          <el-form :model="form">
            <el-form-item label="书名" :label-width="formLabelWidth">
              <el-input v-model="form.title" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="作者" :label-width="formLabelWidth">
              <el-input v-model="form.author" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="出版社" :label-width="formLabelWidth">
              <el-input v-model="form.press" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="单价" :label-width="formLabelWidth">
              <el-input v-model="form.unitprice" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="cancelEdit">取 消</el-button>
            <el-button type="primary" @click="submitEdit">确 定</el-button>
          </div>
        </el-dialog>
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
export default {
  components: {},
  data() {
    return {
      searchKey: "",
      currentPage: 1,
      dataList: [],
      pageData: {
        pageSize: 5,
        pageIndex: 1,
      },
      dialogVisible: false,
      form: {},
      formLabelWidth: "120px",
      // menus:['学号', '姓名', '年龄','性别','班级','住址', '爱好', '操作']
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 从vuex状态机里取得数据和方法

    // 1-获得全部书籍
    async getBooks() {
      try {
        let res = await this.api.books.getBooks();
        this.dataList = res.result;
      } catch (e) {
        this.$message.error("获取书籍列表失败");
      }
    },

    // 2-分页带搜索查询

    async getBooksByPages(data) {
      try {
        // catch 说明await 这一条 报错
        console.log("传入data是");
        console.log(data);
        let res = await this.api.books.getBooksByPages(data);

        // console.log('res是')
        console.log(res);
        // res is undefined
        if (res) {
          this.dataList = res.result;
        } else {
          this.$message.error("获取书籍分页res失败");
        }
      } catch (e) {
        this.$message.error("获取书籍分页失败");
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

    // 2-点击修改事件
    handleEdit(index, row) {
      this.dialogVisible = true;
      this.form = row;
    },
    handleScores(index, row) {
      console.log(index, row);
      // this.$router.push("/teacher/stuScore?sid=" + row.sid);
    },

    cancelEdit() {
      this.dialogVisible = false;
      this.$message("取消修改");
    },
    submitEdit() {
      try {
        // let res = this.editCourse(this.form);
        if (res) {
          this.$message.success("修改成功");
          this.dialogVisible = false;
        }
      } catch (e) {
        this.$message.error("修改失败");
      }
    },



    // 页面大小改变事件
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageData.pageSize = val;
      this.currentPage = 1;
      this.getBooksByPages({
        pageIndex: 1,
        pageSize: this.pageData.pageSize,
        k: this.searchKey,
      });
    },

    // 页面改变事件
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pageData.pageIndex = val;

      // this.CHANGE_PAGEDATA(this.pageData);
      this.getBooksByPages({
        pageIndex: this.pageData.pageIndex,
        pageSize: this.pageData.pageSize,
        k: this.searchKey,
      });
    },

    // 6-搜索方法

    searchBooks() {
      this.pageData.pageIndex = 1;
      console.log("搜索关键词" + this.searchKey);
      this.currentPage = 1;
      this.getBooksByPages({
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
    // this.getBooks();
    this.getBooksByPages({ pageIndex: 1, pageSize: 5, k: "" });
    // this.getByPages({ pageIndex: 1, pageSize: 5, k: "" });
  },
};
</script>

<style scoped></style>

