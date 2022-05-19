<template>
  <section>
    <section>
      <el-button type="primary" @click="action('add')">新增</el-button>
    </section>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="用户名" width="180">
      </el-table-column>
      <el-table-column prop="phone" label="手机号" width="180">
      </el-table-column>
      <el-table-column prop="sex" label="性别" width="180"> </el-table-column>
      <el-table-column prop="password" label="密码" width="180">
      </el-table-column>
      <el-table-column prop="birthday" label="生日" width="180">
      </el-table-column>
      <el-table-column prop="updateTime" label="更新时间"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <section>
            <el-button type="primary" @click="action('edit', scope.row)"
              >编辑</el-button
            >
            <el-button type="danger" @click="action('del', scope.row)"
              >删除</el-button
            >
          </section>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="30%">
      <section>
        <section>
          <section class="u-item">
            <span> 用户名:</span>
            <el-input
              v-model="formData.name"
              placeholder="请输入内容"
            ></el-input>
          </section>
          <section class="u-item">
            <span> 手机号:</span>
            <el-input
              v-model="formData.phone"
              placeholder="请输入内容"
              maxlength="11"
            ></el-input>
          </section>
          <section class="u-item">
            <span> 性别:</span>
            <el-select v-model="formData.sex" placeholder="请选择性别">
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
            </el-select>
          </section>
          <section class="u-item">
            <span> 密码:</span>
            <el-input
              v-model="formData.password"
              placeholder="请输入内容"
            ></el-input>
          </section>
          <section class="u-item">
            <span> 生日:</span>
            <el-date-picker
              v-model="formData.birthday"
              type="date"
              placeholder="选择日期"
            >
            </el-date-picker>
          </section>
        </section>
      </section>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="todo">确 定</el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          name: "测试姓名1",
          phone: "13535353535",
          sex: "男",
          password: "123456",
          birthday: "2011-11-12",
          updateTime: "2022-05-19 21:30:03",
        },
      ],
      dialogVisible: false,
      dialogTitle: "新增",
      formData: {
        name: "",
        phone: "",
        sex: "",
        password: "",
        birthday: "",
      },
      id: 1,
      type: "add",
    };
  },
  methods: {
    action(type, item) {
      console.log(item);
      if (type == "add") {
        this.type = "add";
        this.dialogTitle = "新增";
        this.dialogVisible = true;
      } else if (type == "edit") {
        this.type = "edit";
        this.dialogTitle = "编辑";
        this.dialogVisible = true;
        this.formData = item;
      } else {
        let targetIndex;
        for (let index = 0; index < this.tableData.length; index++) {
          const element = this.tableData[index];
          if (element.id === item.id) {
            targetIndex = index;
            break;
          }
        }
        let arr = [...this.tableData];
        this.tableData = arr.splice(1, targetIndex);
      }
    },
    todo() {
      // 校验 todo
      if (this.type == "add") {
        this.id++;
        this.tableData.push({
          id: this.id,
          name: this.formData.name,
          phone: this.formData.phone,
          sex: this.formData.sex,
          password: this.formData.password,
          birthday: moment(this.formData.birthday).format("YYYY-MM-DD"),
          updateTime: moment().format("YYYY-HH-DD HH:mm:ss"),
        });
      } else {
        for (let index = 0; index < this.tableData.length; index++) {
          const element = this.tableData[index];
          if (element.id === this.formData.id) {
            this.tableData[index].name = this.formData.name;
            this.tableData[index].phone = this.formData.phone;
            this.tableData[index].sex = this.formData.sex;
            this.tableData[index].password = this.formData.password;
            this.tableData[index].birthday = moment(
              this.formData.birthday
            ).format("YYYY-MM-DD");
            this.tableData[index].updateTime = moment().format(
              "YYYY-HH-DD HH:mm:ss"
            );
            break;
          }
        }
      }

      this.dialogVisible = false;
    },
  },
};
</script>

<style>
.u-item {
  display: flex;
  margin: 10px 0;
}
</style>