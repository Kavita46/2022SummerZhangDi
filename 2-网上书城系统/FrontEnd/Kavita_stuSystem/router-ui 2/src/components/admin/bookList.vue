<!-- 我的页面 -->
<template>
  <div>
    <!-- <span>显示page信息</span>
    <br />
    {{ pageData }} -->
    <!-- 1-表格模块 -->

    <div style="width: 100%; display: flex">
      <div style="width: 70%">
        <el-input
          placeholder="输入要搜索的书名"
          v-model="searchKey"
          style="width: 400px"
        ></el-input>
        <el-button @click="searchBook">搜索</el-button>
      </div>
      <div style="width: 20%">
        <el-button type="primary" @click="clickAdd"> +新增书籍</el-button>
      </div>
    </div>

    <el-table :data="dataList" style="width: 100%">
      <template>
        <!--空白模板 <el-table-column prop="" label="" width=""> </el-table-column> -->

        <el-table-column prop="bookid" label="ID" width="100"></el-table-column>
        <el-table-column
          prop="title"
          label="书名"
          width="100"
        ></el-table-column>
        <el-table-column prop="pic1" label="封面" width="100">
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
          width="150 "
        ></el-table-column>
        <el-table-column
          prop="author"
          label="作者"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="press"
          label="出版社"
          width="100"
        ></el-table-column>

        <el-table-column prop="publishdate" label="出版日期" width="50">
        </el-table-column>

        <el-table-column prop="rating" label="评分" width="50">
        </el-table-column>
        <el-table-column prop="commentnum" label="评价数" width="80">
        </el-table-column>
        <el-table-column prop="unitprice" label="价格" width="80">
        </el-table-column>

        <el-table-column prop="tag" label="标签" width="100">
          <!-- <template #default="{ row }">
            <button v-for="i in row.tag" :key="i.bookid">
              {{i}}
            </button>
          </template> -->
        </el-table-column>

        <el-table-column label="操作" width="100">
          <!-- XXX 如果要获得点击按钮的那一栏的值,一定要加template -->
          <template slot-scope="scope">
            <el-button size="mini" @click="clickEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="clickDelete(scope.$index, scope.row)"
              >下架</el-button
            >
          </template>
        </el-table-column>
      </template>
    </el-table>

    <el-dialog title="修改书籍" :visible.sync="dialogEditVisible">
      <el-form :model="form" :rules="rules">
        <el-form-item label="书籍ID" :label-width="formLabelWidth">
          <el-input v-model="form.bookid" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="书籍名称" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="书籍简介" :label-width="formLabelWidth">
          <el-input
            type="textarea"
            autosize
            v-model="form.describle"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="出版社" :label-width="formLabelWidth">
          <el-input v-model="form.press" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="出版时间" :label-width="formLabelWidth">
          <el-input v-model="form.publishdate" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth">
          <el-input v-model="form.unitprice" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="作者" :label-width="formLabelWidth">
          <el-input v-model="form.author" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="标签" :label-width="formLabelWidth">
          <el-input v-model="form.tag" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogEditVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitEdit">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="新增书籍" :visible.sync="dialogAddVisible">
      <el-form :model="addform" :rules="rules">
        <el-form-item label="书籍ID" :label-width="formLabelWidth">
          <el-input v-model="addform.bookid" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="书籍名称" :label-width="formLabelWidth">
          <el-input v-model="addform.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="书籍简介" :label-width="formLabelWidth">
          <el-input
            type="textarea"
            autosize
            v-model="addform.describle"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="出版社" :label-width="formLabelWidth">
          <el-input v-model="addform.press" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="出版时间" :label-width="formLabelWidth">
          <el-input v-model="addform.publishdate" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth">
          <el-input v-model="addform.unitprice" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="作者" :label-width="formLabelWidth">
          <el-input v-model="addform.author" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="标签" :label-width="formLabelWidth">
          <el-input v-model="addform.tag" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAddVisible=false">取 消</el-button>
        <el-button type="primary" @click="submitAdd">确 定</el-button>
      </div>
    </el-dialog>

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
      dialogEditVisible: false,
      dialogAddVisible: false,
      form: {},
      addform: {},
      formLabelWidth: "120px",
      rules: {
        bookid: [{ required: true, message: '请输入书籍ID', trigger: 'blur' }],
        title: [{ required: true, message: '请输入书籍标题', trigger: 'blur' }]
      },


    };
  },
  computed: {},
  watch: {},
  methods: {
    // 2-分页带搜索查询

    async getBooksByPages(data) {
      try {
        // catch 说明await 这一条 报错
        console.log("传入data是");
        console.log(data);
        let res = await this.api.books.getBooksByPages(data);

        console.log('res是')
        console.log(res);
        // res is undefined
        if (res) {
          this.dataList = res;
          console.log('dataList是')
          console.log(this.dataList)
        } else {
          this.$message.error("获取书籍分页res失败");
        }
      } catch (e) {
        this.$message.error("获取书籍分页失败");
      }
    },

    // 1-删除事件
    async handleDelete(index, row) {
      console.log('当前row')
      console.log(index, row);
      try {
        // BUG 假如不用await 接收, 第一次点击之后 不会及时刷新,也就是需要删除两个(第二个进入的时候上一个才执行)
        let res = await this.api.books.deleteBook(row.bookid);
        console.log(res)
        if (res) {
          this.getBooksByPages({ pageIndex: 1, pageSize: this.pageData.pageSize })
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
    clickEdit(index, row) {
      this.dialogEditVisible = true;
      console.log('row是')
      console.log(row)
      // 因为这里做了JSOn处理,所以bid变成了数字
      this.form = JSON.parse(JSON.stringify(row));
      console.log('当前form')
      console.log(this.form)
    },
    // 取消修改

    // async submit() {
    //   console.log('当前form数据')

    //   console.log(this.form)
    //   // this.dialogFormVisible = false;
    //   if (this.dialogTitle == "addBook") {
    //     // console.log(this.form);
    //     console.log('新增功能')
    //     try {
    //       console.log('当前数据')
    //       console.log(this.form)
    //       this.form.bookid = Number.parseInt(this.form.bookid);
    //       console.log('修改后数据')
    //       console.log(this.form)
    //       let res = await this.api.books.addBook(this.form)
    //       console.log('res是')
    //       console.log(res)

    //     } catch (e) {
    //       this.$message.error('新增失败')
    //     }
    //   } else if (this.dialogTitle == 'editBook') {
    //     console.log('提交功能')
    //     console.log(this.form);

    //     try {
    //       let res = await this.api.books.editBook(this.form)
    //       // 这条没跑通
    //       console.log('res是')
    //       console.log(res)
    //       this.dialogVisible = false;

    //       // if (res) {
    //       //   console.log(res)
    //       //   this.$message.success("修改成功");
    //       //   this.dialogVisible = false;
    //       // }
    //     } catch (e) {
    //       this.$message.error("修改失败");
    //     }
    //   }
    // },


    async submitEdit() {
      try {
        console.log('点击了提交')
        console.log(this.form)
        let res = await this.api.books.editBook(this.form)
        // 这条没跑通
        console.log('res是')
        console.log(res)
        if (res) {
          console.log(res)
          this.$message.success("修改成功");
          this.dialogVisible = false;
        }
      } catch (e) {
        this.$message.error("修改失败");
      }
    },


    async submitAdd() {
      try {
        console.log('当前数据')
        console.log(this.addform)
        this.addform.bookid = Number.parseInt(this.addform.bookid);
        console.log('修改后数据')
        console.log(this.addform)
        let res = await this.api.books.addBook(this.addform)
        console.log('res是')
        console.log(res)

      } catch (e) {
        this.$message.error('新增失败')
      }
    },


    // 点击下架

    clickDelete(row, index) {
      this.$confirm('此操作将下架该书籍, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.handleDelete(row, index)
        // this.$message({
        //   type: 'success',
        //   message: '删除成功!'
        // });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },


    // 页面大小改变事件
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageData.pageSize = val;
      this.currentPage = 1;
      this.getBooksByPages({
        pageIndex: 1,
        pageSize: this.pageData.pageSize,
        // k: this.searchKey,
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
        // k: this.searchKey,
      });
    },

    // 6-搜索方法

    async searchBook() {
      this.pageData.pageIndex = 1;
      console.log("搜索关键词" + this.searchKey);
      this.currentPage = 1;

      try {
        let res = await this.api.books.searchBook({ title: this.searchKey });
        if (res) {
          this.dataList = res;

        } else {
          this.$message.error('搜索失败')
        }
      } catch (e) {
        this.$message.error('搜索失败')
      }
    },
    // 两种按钮
    clickAdd() {
      console.log('点击了新增')
      this.dialogAddVisible = true;
      console.log('当前form')
      console.log(this.addform)
    },


    cancelAdd() {
      console.log(this.dialogAddVisible)
      this.dialogAddVislble =false;
      this.$message.info('取消新增书籍')
      console.log(this.dialogAddVisible)
    },
       cancelEdit() {
      this.dialogEditVisible = false;
      this.$message.info("取消修改");
    },



  },

  async created() {
    // this.getStudents();
    // 需要传进来一个含有 pageIndex, pageSize, k 的对象
    // let pageIndex = 1;
    // let pageSize = 5;
    // let Pdata = ;
    // this.getBooks();
    this.getBooksByPages({ pageIndex: 1, pageSize: 5 });

    // this.getByPages({ pageIndex: 1, pageSize: 5, k: "" });
  },
};
</script>

<style scoped></style>

