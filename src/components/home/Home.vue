<template>
  <el-container class="home-container">
    <el-header>
      <div class="left">
        <img src="../../assets/heima.png" alt="">
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click='logout'>退出</el-button>
    </el-header>

    <el-container>
      <el-aside :width="collapse ? '65px' : '200px'">
        <!-- 切换菜单的折叠和展开 -->
        <div class="toggleBar" @click="collapse=!collapse">|||</div>
        <el-menu background-color="#333744" text-color="#fff" active-text-color="#409EFF" unique-opened :collapse="collapse" :collapse-transition="false" router :default-active="activePath">
          <!-- 一级菜单 -->
          <el-submenu :index="item.id+''" v-for="(item, i) in menus" :key="item.id" :style="collapse ? 'width: 65px;' : 'width: 200px;'">
            <template slot="title">
              <i :class="['iconfont', iconlist[i]]"></i>
              <span>{{item.authName}}</span>
            </template>
            <!-- 在一级菜单中嵌套二级菜单 -->
            <el-menu-item :index="'/' + subItem.path" v-for="subItem in item.children" :key="subItem.id" @click="saveActivePath('/' + subItem.path)">
              <i class="el-icon-menu"></i>
              <!-- 二级菜单展示的文本 -->
              <span slot="title">{{subItem.authName}}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>

  </el-container>
</template>

<script>
import mix from './Home-mixins.js'
export default{
  mixins: [mix]
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  // 头部区域
  .el-header {
    user-select: none;
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 0;
    .left {
      color: white;
      font-size: 22px;
      display: flex;
      align-items: center;
      img {
        margin-right: 10px;
        height: 50px;
      }
    }
  }
  // 左侧侧边栏区域
  .el-aside {
    background-color: #333744;
    user-select: none;
  }
  // 右侧主体区域
  .el-main {
    background-color: #eaedf1;
  }
  .toggleBar {
    line-height: 25px;
    color: white;
    background-color: #4a5064;
    text-align: center;
    font-size: 12px;
    letter-spacing: 0.1em;
    cursor: pointer;
  }
}
</style>
