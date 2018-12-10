<template>
  <div class="container">
    <el-menu
      default-active="/index"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="isRouter"
      >
      <!--管理员权限-->
      <template v-if="isAdmin">
        <el-menu-item v-for="(item, index) in routers" :index="item.path" :key="index">
          <i class="el-icon-menu"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </template>
      <!--角色权限-->
      <template v-else>
        <el-menu-item v-for="(item, index) in routers_role" :index="item.path" :key="index">
          <i class="el-icon-menu"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </template>
      
    </el-menu>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isRouter: true,
      routers: [ // 管理员权限
        {
          name:'首页',
          path:'/index'
        },
        {
          name:'商品',
          path:'/goods'
        },
        {
          name:'订单',
          path:'/orders'
        },
        {
          name:'会员',
          path:'/member'
        }
      ],
      routers_role:[// 角色权限
        {
          name:'首页',
          path:'/index'
        },
        {
          name:'会员',
          path:'/member'
        }
      ]
    }
  },
  computed: {
    isAdmin(){
      return this.$store.getters.permission == 1 ? true : false // 1 为管理员权限，2 为角色权限
    }
  },
  created(){
    // console.log(this.isAdmin)
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container{
  .el-menu{
    width: 100%;
  }
}
</style>
