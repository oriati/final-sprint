<template lang="html">

  <section class="toolbar container below-nav">
    <h1>toolbar Component</h1>
    <!--<el-menu default-active="2" class="el-menu-vertical" @open="handleOpen" @close="handleClose" theme="dark">
      <el-submenu index="1">
        <template slot="title">Navigator One</template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">Navigator Two</el-menu-item>
      <el-menu-item index="3">Navigator Three</el-menu-item>
    </el-menu>-->
  </section>
</template>

<script lang="js">
  // import authService from '../../services/auth.service';

  export default  {
    name: 'toolbar',
    props: [],
    // beforeRouteEnter ( to, from, next ) {
    //   authService.protectRoute(next);
    // },    
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .toolbar {

  }

  .el-menu-vertical {}
</style>
