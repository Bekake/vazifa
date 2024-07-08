<template>
<transition name="fade">
  <div v-if="myshow" class="mycontact">
    <welcometwo/>
    <div class="myfav">
      <p>New contacts</p>
      <div>
        <div class="button">
          <img src="@/assets/pic/heart.png" alt="Heart">
          <span>Favorites(20)</span>
        </div>
        <button class="button">New Contacts</button>
        <img src="@/assets/pic/menu.png" alt="Menu">
        <img src="@/assets/kanban.png" alt="Kanban">
      </div>
    </div>
    <div class="con">
      <div v-for="(item, index) in all" :key="index" class="per">
        <div class="bir">
          <img :src="item.myimg" alt="Person">
          <div>
            <img src="@/assets/pic/hear.png" alt="Heart">
            <img src="@/assets/pic/dotup.png" alt="Dots">
          </div>
        </div>
        <p class="ikki">{{ item.myname }}</p>
        <p class="olti">{{ item.soha }}</p>
        <div class="uch">
          <img src="@/assets/pic/case.png" alt="Case">
          <p>High speed studios</p>
        </div>
        <div class="uch">
          <img src="@/assets/pic/cal.png" alt="cal">
          <p>+998 (87)766-55-44</p>
        </div>
        <div class="uch">
          <img src="@/assets/mailc.png" alt="mailc">
          <p>fake@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</transition>  
</template>
<script>
import welcometwo from "@/components/welcometwo.vue"
export default{
  components: {welcometwo},
  data(){
    return{
      myshow: false,
      all: [
        {myimg: require("@/assets/people/bir.jpg"), myname: "Ahmed Leffler", soha: "Frontend Vue"},
        {myimg: require("@/assets/people/ikki.jpg"), myname: "Ahmed Leffler", soha: "Frontend Vue"},
        {myimg: require("@/assets/people/uch.jpg"), myname: "Ahmed Leffler", soha: "Frontend Vue"},
        {myimg: require("@/assets/people/tort.jpg"), myname: "Ahmed Leffler", soha: "Frontend Vue"},
        {myimg: require("@/assets/people/besh.jpg"), myname: "Ahmed Leffler", soha: "Frontend Vue"},
        {myimg: require("@/assets/people/olti.jpg"), myname: "Ahmed Leffler", soha: "Frontend Vue"},
        {myimg: require("@/assets/people/yetti.jpg"), myname: "Ahmed Leffler", soha: "Frontend Vue"},
        {myimg: require("@/assets/people/toqqiz.jpg"), myname: "Ahmed Leffler", soha: "Frontend Vue"},
        {myimg: require("@/assets/people/on.jpg"), myname: "Ahmed Leffler", soha: "Frontend Vue"},
        {myimg: require("@/assets/people/onbir.jpg"), myname: "Ahmed Leffler", soha: "Frontend Vue"},
        {myimg: require("@/assets/people/onikki.jpg"), myname: "Ahmed Leffler", soha: "Frontend Vue"},
        {myimg: require("@/assets/people/onuch.jpg"), myname: "Ahmed Leffler", soha: "Frontend Vue"},
        {myimg: require("@/assets/people/ontort.jpg"), myname: "Ahmed Leffler", soha: "Frontend Vue"},
        {myimg: require("@/assets/people/onyetti.jpg"), myname: "Ahmed Leffler", soha: "Frontend Vue"},
        {myimg: require("@/assets/people/ybir.jpg"), myname: "Ahmed Leffler", soha: "Frontend Vue"},
        {myimg: require("@/assets/people/yikki.jpg"), myname: "Ahmed Leffler", soha: "Frontend Vue"},
        {myimg: require("@/assets/people/yuch.jpg"), myname: "Ahmed Leffler", soha: "Frontend Vue"},
        {myimg: require("@/assets/people/anot.jpg"), myname: "Ahmed Leffler", soha: "Frontend Vue"},
      ]
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
<style scoped>
.con{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.5rem;
}
.per{
  flex: 1 1 auto;
  background-color: white;
  padding: 0.7rem;
  border-radius: 12px;
}
.uch>p{
  font-size: 0.9rem;
}
.ikki{
  margin-top: 7px;
}
.uch{
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 12px;
}
.uch img{
  width: 1.2rem;
}
.olti{
  font-size: 0.8rem;
  opacity: 0.7;
  margin-top: 4px;
}
.bir>img{
  width: 1.6rem;
  border-radius: 6px;
}
.bir>div>img{
  width: 1.3rem;
  margin-left: 6px;
}
.per>div:first-child{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  
}
.myfav button{
  margin-right: 2rem;
}
.button {
  padding: 0.6rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-weight: 550;
  text-transform: uppercase;
  cursor: pointer;
  color: #a049f3;
  transition: all 1000ms;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  outline: 2px solid #a049f3;
  background-color: hsla(261, 88%, 62%, 0.3)
}
.button:hover {
  color: #ffffff;
  transform: scale(1.05);
  outline: 2px solid #9770ca;
  box-shadow: 4px 5px 17px -4px #268391;
}
.button::before {
  content: "";
  position: absolute;
  left: -50px;
  top: 0;
  width: 0;
  height: 100%;
  background-color: #a049f3;
  transform: skewX(45deg);
  z-index: -1;
  transition: width 1000ms;
}
.button:hover::before {
  width: 250%;
}
.myfav>div>div>img{
  width: 1.2rem
}
.myfav>div>div{
  display: flex;
  gap: 0.6rem;
}
.myfav>div>p{
  padding: 0.6rem 1.5rem;
  background-color: gainsboro;
  border-radius: 12px;
}
.myfav>div{
  display: flex;
  gap: 1rem;
  align-items: center;
}
.myfav{
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center
}
.myfav>p{
  cursor: pointer;
  color: white;
  padding: 0.6rem 1.5rem;
  background-color: #a049f3;
  border-radius: 12px;
}
.mycontact{
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  padding: 0.5rem 1.5rem 1rem 0;
}
</style>