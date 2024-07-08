<template>
  <bar/>
</template>
<script>
import bar from "@/components/bar.vue"
export default{
  components:{bar}
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.chat{
  border-radius: 12px;
}
button, a{
  cursor: pointer;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: rgb(240, 240, 240);
}
.container, .forcircle, .gcont>div:first-child, .chat,
.chart-containe, .coin, .myfin, .my>div, .fcont, .ycontainer, 
.category>div, .people, table{
  background-color: white;
  border-radius: 12px;
}
.fade-leave-active {
  animation: leaving 0.8s;
}
.fade-enter-active {
  animation: entering 0.8s;
}
@keyframes leaving {
  0% {
    opacity: 1;
    transform: scale(1) ;
  }
  100% {
    opacity: 0;
    transform: scale(0) ;
  }
}
@keyframes entering {
  0% {
    opacity: 0;
    transform: scale(0) ;
  }
  100% {
    opacity: 1;
    transform: scale(1) 
  }
}
</style>

