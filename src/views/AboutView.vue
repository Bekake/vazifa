<template>
<transition name="fade">
  <div v-if="myshow"class="home">
    <div class="first">
      <welcome/>
      <email/>
    </div>
    <div class="second">
      <div class="one">
        <div>
          <p>Preview</p>
          <p>Inbox</p>
        </div>
        <div>
          <img src="@/assets/pic/deletec.png" alt="Delete">
          <img src="@/assets/pic/shrink.png" alt="Shrink">
          <img src="@/assets/pic/close.png" alt="close">
        </div>
      </div>
      <div class="two">
        <div>
          <img src="@/assets/pic/gold.png" alt="Gold">
          <span>Important</span>
        </div>
        <div>
          <img src="@/assets/pic/spam.png" alt="Spam">
          <img src="@/assets/pic/favoritec.png" alt="Favorite">
        </div>
      </div>
      <p>Weekly Meeting Schedule with Stakeholders</p>
      <p>Tomorrow, June 29th, 2024, 9:30 PM</p>
      <div class="thre">
        <div>
          <img src="@/assets/pic/reply.png" alt="Reply">
          <span>You Replied</span>
        </div>
        <p >Thank you, maybe I only have 2 empty schedule for this week</p>
      </div>
      <hr>
      <div class="four">
        <div>
          <img src="@/assets/people/besh.jpg" alt="person">
          <span>Robert Johanson</span>
        </div>
        <div>
          <p>Hi David,</p>
          <p>Do you remember about last meeting with Stakeholders? Here you have more informationabout the next meeting schedule and source code of this admin dashboard, follow link for more information </p>
          <p>Best regards,</p>
          <p>Robert</p>
          <textarea name="feedback" id="feedback" placeholder="Write your message here"></textarea>
          <div class="real">
            <img src="@/assets/pic/sendc.png" alt="Send">
            <span>Send</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</transition>  
</template>
<script>
import welcome from "@/components/welcome.vue"
import email from "@/components/email.vue"
export default{
  components:{welcome, email},
  data(){
    return{
      myshow: false,
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
.real{
  padding: 0.4rem 1rem;
}
.four>div>div>img{
  width: 1.6rem;
}
.four>div>div{
  display: flex;
  width: max-content;
  padding: 0.5rem 1.4rem 0.5rem 1rem;
  background-color: #a049f3;
  color: white;
  align-items: center;
  gap: 0.5rem;
  border-radius: 12px;
  cursor: pointer;
}
.four>div:last-child>p:first-child{
  margin: 0.8rem 0;
}
.four>div:last-child>p:nth-child(3){
  margin: 1.1rem 0 0 0;
}
.four>div:last-child{
  line-height: 1.5rem;
}
.four{
  margin-top: 4px;
}
.four textarea{
  width: 100%;
  min-height: 120px;
  padding: 0.4rem;
  border-radius: 12px;
  margin-top: 1rem;
}
.four>div:first-child{
  display: flex;
  gap: 0.6rem;
  align-items: center;
}
.four>div>img{
  border-radius: 12px;
  width: 2.5rem;
}
.thre>p{
  line-height: 1.4rem;
  opacity: 0.6;
  margin-top: 6px;
}
.thre>div{
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.thre span{
  font-size: 0.9rem;
  opacity: 0.9;
}
.second>p:nth-child(3){
  font-size: 1.3rem;
  font-weight: 600;
}
.second>p:nth-child(4){
  font-size: 0.8rem;
  opacity: 0.6;
}
.two>div:last-child>img{
  width: 1.7rem;
  margin-left: 0.8rem;
}
.two span{
  font-size: 0.9rem;
  font-weight: 530;
  color: #FFA726;
}
.two>div:first-child{
  display: flex;
  gap: 0.5rem;
  align-items: center;
  background-color: #FFF3E4;
  padding: 0.3rem 2rem 0.3rem 0.5rem;
  border-radius: 12px;
}
.two>div:first-child>img{
  width: 1.5rem;
}
.one>div>p:last-child{
  font-size: 0.8rem;
  opacity: 0.6;
}
.one p{
  margin-top: 8px;
}
.one img{
  width: 1.2rem;
  margin-left: 1rem
}
.one img:last-child{
  width: 1.7rem;
  transform: translateY(3px);
}
.one, .two{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.second{
  background-color: white;
  padding: 1rem 1.2rem 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  min-width: 200px;
}
.first{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>