<template>
  <div class="container">
    <LeftMenu  class="left_menu"/>
    <div class="right_content">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {

    }
  },
  components: {
    'LeftMenu': () => import('./LeftMenu'),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container{
  display: flex;
  height: 100%;
  .left_menu{
    flex: 200px 0 0;
    width: 200px;
  }
  .right_content{
    flex: 1;
    padding: 50px;
  }
}
</style>
