<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
export default{
  created(){
    this.$store.commit('getUserData',this);
    this.$store.commit('getHotSearch',this);
    this.$store.commit('getHistoryData',this);
  }
}
</script>

<style>
@media screen and (max-width: 768px){
  body{
  	font-size: 0.7rem;
  	font-family: PingFangSC-Regular,Helvetica,Arial,Microsoft Yahei,sans-serif;
    color: #333;
  }
}
@media screen and (min-width: 768px){
  body{
    font:12px/1.5 PingFangSC-Regular,Helvetica,Arial,Microsoft Yahei,sans-serif;
    min-width: 920px;
    color: #333;
  }
}
</style>
