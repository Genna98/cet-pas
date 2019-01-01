<template>
  <div id="app">
    <el-container>
      <el-header>
        <h1 class="h1">四六级成绩分析系统</h1>
        <el-menu
          :default-active="activeIndex"
          class="nav"
          mode="horizontal"
          @select="handleSelect"
          :router="true"
        >
          <el-menu-item
            index=""
            v-if="activeIndex=='scores'"
            class="nav_search"
            disabled
          >
            <el-input
              size="medium"
              v-model="input"
              placeholder="输入姓名或学号搜索"
            ></el-input>
          </el-menu-item>
          <el-menu-item index="scores">所有成绩</el-menu-item>
          <el-menu-item index="analysis">统计分析</el-menu-item>
          <el-menu-item
            index=""
            class="disabled"
            disabled
          >
            <div class="v_line"></div>
          </el-menu-item>
          <el-menu-item index="about">关于</el-menu-item>
        </el-menu>
      </el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      activeIndex: 'scores',
      input: '',
    }
  },
  computed: {
  },
  methods: {
    handleSelect (key) {
      this.activeIndex = key
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}
.el-container {
  width: 1140px;
  margin: auto;
}
.el-header {
  /* background-color: #b3c0d1; */
  color: #333;
  line-height: 60px;
}
.h1 {
  margin-top: 0px;
  margin-bottom: 0px;
  float: left;
}
.nav {
  float: right;
  border-bottom: none !important;
}
.disabled {
  cursor: default !important;
}
.v_line {
  position: absolute;
  top: calc(50% - 8px);
  width: 1px;
  height: 20px;
  background: #2c3e50;
}
.nav_search {
  opacity: 1 !important;
  cursor: default !important;
}
</style>