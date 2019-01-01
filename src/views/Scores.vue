<template>
  <div>
    <el-form
      ref="form"
      :model="form"
      label-width="50px"
    >
      <el-row :gutter="30">
        <el-col :span="4">
          <el-form-item label="年级">
            <el-select
              v-model="form.grade"
              filterable
              placeholder="请选择"
              size="medium"
            >
              <el-option
                v-for="item in options.grade"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="学院">
            <el-select
              v-model="form.faculty"
              filterable
              placeholder="请选择"
              size="medium"
            >
              <el-option
                v-for="item in options.faculty"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="专业">
            <el-select
              v-model="form.major"
              filterable
              placeholder="请选择"
              size="medium"
            >
              <el-option
                v-for="item in options.major"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label-width="10px">
            <el-button
              size="medium"
              icon="el-icon-search"
              round
            >检索</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-table
      :data="tableData"
      :row-class-name="tableRowClassName"
      style="width: 100%"
    >
      <el-table-column
        prop="grade"
        label="年级"
        width="100"
      >
      </el-table-column>
      <el-table-column
        prop="faculty"
        label="学院"
        width="200"
      >
      </el-table-column>
      <el-table-column
        prop="major"
        label="专业"
        width="200"
      >
      </el-table-column>
      <el-table-column
        prop="stuID"
        label="学号"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="100"
      >
      </el-table-column>
      <el-table-column
        prop="score"
        label="听力"
      >
      </el-table-column>
      <el-table-column
        prop="score"
        label="阅读"
      >
      </el-table-column>
      <el-table-column
        prop="score"
        label="写作"
      >
      </el-table-column>
      <el-table-column
        prop="score"
        label="总分"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'scores',
  data () {
    return {
      options: {
        grade: [{
          label: '',
          value: '',
        }, {
          label: '2015',
          value: '2015',
        }, {
          label: '2016',
          value: '2016',
        }, {
          label: '2017',
          value: '2017',
        }, {
          label: '2018',
          value: '2018',
        }, {
          label: '2019',
          value: '2019',
        }],
        faculty: [{
          label: '',
          value: '',
        }, {
          label: '林学院',
          value: 'Forestry',
        }, {
          label: '生命科学与技术学院',
          value: 'LST',
        }, {
          label: '材料科学与工程学院',
          value: 'MSE',
        }, {
          label: '机电工程学院',
          value: 'MEE',
        }, {
          label: '物流与交通学院',
          value: 'LT',
        }, {
          label: '风景园林学院',
          value: 'LA',
        }, {
          label: '家具与艺术设计学院',
          value: 'FAD',
        }, {
          label: '计算机与信息工程学院',
          value: 'CIE',
        }],
        major: [{
          label: '',
          value: '',
        }, {
          label: '计算机科学与技术',
          value: '测试',
        }]
      },
      form: {
        grade: '',
        faculty: '',
        major: '',
      },
      tableData: [{
        grade: '2015',
        faculty: '计算机与信息工程学院',
        major: '计算机科学与技术',
        stuID: '20153758',
        name: '胡靖',
        score: 425
      }, {
        grade: '2015',
        faculty: '计算机与信息工程学院',
        major: '计算机科学与技术',
        stuID: '20153759',
        name: '胡靖',
        score: 424
      }, {
        grade: '2016',
        faculty: '计算机与信息工程学院',
        major: '计算机科学与技术',
        stuID: '20153760',
        name: '胡靖',
        score: 525
      }, {
        grade: '2016',
        faculty: '计算机与信息工程学院',
        major: '计算机科学与技术',
        stuID: '20153761',
        name: '胡靖',
        score: 425
      }]
    }
  },
  methods: {
    tableRowClassName ({ row }) {
      if (row.score < 425) {
        return 'warning-row';
      }
      return '';
    }
  },
}
</script>

<style>
.el-table .warning-row {
  background: oldlace;
}
</style>
