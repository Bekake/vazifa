<template>
<transition name="fade">
  <div v-if="myshow" class="home">
    <div class="first">
      <welcome/>
      <div class="ikki">
        <div v-for="(item, index) in pro" :key="index" :style="give(item.rang[0], item.rang[1])">
          <div>
            <p>{{ item.fname }}</p>
            <p>{{ item.num }}</p>
            <p>Jan-July, 2024</p>
          </div>
          <div>
            <img :src="item.mimg" :alt="item.fname">
          </div>
        </div>
      </div>
      <mychart/>
      <graph/>
      <p>Messages(Scroll right)</p>
      <myswiper/>
    </div>
    <div class="second">
      <forright/>
    </div>
  </div>
</transition>  
</template>
<script>
import mychart from "@/components/mychart.vue"
import graph from "@/components/graph.vue"
import myswiper from "@/components/swiper/swiper.vue"
import forright from "@/components/forright.vue"
import welcome from "@/components/welcome.vue"
export default {
  components:{mychart, graph, myswiper, forright, welcome},
  data(){
    return{
      pro: [
        {fname: "Product  sold", num: "4565", mimg: require("@/assets/pic/cart.png"), rang: ['rgb(85, 111, 255)', 'rgb(0, 234, 255)']},
        {fname: "Net  Profit", num: "$8542", mimg: require("@/assets/pic/money.png"), rang: ['rgb(255, 74, 83)', 'rgb(251, 90, 125)']},
        {fname: "New  customers", num: "3256", mimg: require("@/assets/pic/group.png"), rang: ['rgba(214,231,45,1)', 'rgb(121, 243, 14)']},
        {fname: "Customer  satisfaction", num: "99%", mimg: require("@/assets/pic/heart.png"), rang: ['rgba(45,221,231,1)', 'rgba(0,255,136,1)']},
      ],
      myshow: false,
    }
  },
  methods:{
    give(bir, ikki){
      return{
        '--mybir': bir,
        '--myikki': ikki,
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      setTimeout(() => {
        vm.myshow = true; 
      }, 0); 
    });
  },
  beforeRouteLeave(to, from, next) {
    this.myshow = false;
    setTimeout(() => next(), 800); 
  },
}
</script>
<style>
.first>p{
  margin-top: 1rem;
  margin-bottom: -4px
}
.home{
  width: 100%;
  min-height: 100vh;
  padding-bottom: 50px;
  display: flex;
  gap: 1rem;
}
.first{
  min-width: 600px;
  max-width: 900px;
  flex: 2 2 auto;
  /* max-width: 900px;
  min-width: 600px; */
  
}
.second{
  min-width: 300px;
  max-width: 450px;
  flex: 1 1 auto;
  /* max-width: 450px;
  min-width: 300px; */
  
}
</style>
<style scoped>

.ikki img{
  width: 3rem;
}
.ikki>div>div:nth-child(2){
  display: flex;
  align-items: center;
}
.ikki{
  width: 98%;
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
  margin-top: 1rem
}
.ikki p{
  margin: 10px 0;
  white-space: nowrap;
}
.ikki>div{
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.6rem;
  gap: 0.6rem;
  background: linear-gradient(45deg, var(--mybir) 0%, var(--myikki) 100%);
  flex: 1 1 auto;
  border-radius: 12px;
}


</style>