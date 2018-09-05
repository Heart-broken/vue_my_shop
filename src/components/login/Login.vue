<template>
  <div class="login-container">
    <!-- 头像区域 -->
    <div class="avatar">
      <img src="../../assets/logo.png" alt="">
    </div>

  </div>
</template>

<script>
import mix from './Login-mixins.js'
export default {
  mixins: [ mix ]
}
</script>

<style lang="less" scoped>
.login-container{
  width: 450px;
  height: 304px;

}
</style>
