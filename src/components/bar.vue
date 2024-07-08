<template>
  <div class="other">
    <div class="orni"></div>
    <section class="container">
      <video src="@/assets/mylogo.mp4" autoplay muted loop></video>
      <div class="links">
        <router-link v-for="(item, index) in mylinks" :key="index" :to="{name: item.myname}">
          <div class="myim">
            <img :src="item.myimg" :alt="item.appear">
          </div>
          <div class="myimg">
            <img :src="item.myimgim" :alt="item.appear">
          </div>
          <p>{{ item.appear }}</p>
        </router-link>
      </div>
    </section>
    <router-view/>
  </div>
  
</template>
<script>
export default{
  data(){
    return{
      myrouter: "bank",
      mylinks: [
        {myimg: require("@/assets/home.png"),myimgim: require("@/assets/homec.png"), myname: "home", appear: "Dashboard"},
        {myimg: require("@/assets/mail.png"),myimgim: require("@/assets/mailc.png"), myname: "mail", appear: "Email"},
        {myimg: require("@/assets/person.png"),myimgim: require("@/assets/personc.png"), myname: "contacts", appear: "Contacts"},
        {myimg: require("@/assets/money.png"),myimgim: require("@/assets/moneyc.png"), myname: "crypto", appear: "Crypto"},
        {myimg: require("@/assets/wallet.png"),myimgim: require("@/assets/walletc.png"), myname: "bank", appear: "Banking"},
        {myimg: require("@/assets/document.png"),myimgim: require("@/assets/documentc.png"), myname: "invoice", appear: "Invoicing"},
        {myimg: require("@/assets/kanban.png"),myimgim: require("@/assets/kanbanc.png"), myname: "kanban", appear: "Kanban"},
        {myimg: require("@/assets/folder.png"),myimgim: require("@/assets/folderc.png"), myname: "file", appear: "File menager"},
        {myimg: require("@/assets/calendar.png"),myimgim: require("@/assets/calendarc.png"), myname: "calendar", appear: "Calendar"},
        {myimg: require("@/assets/pen.png"),myimgim: require("@/assets/penc.png"), myname: "todo", appear: "Todo list"},
      ]
    }
  }
}
</script>
<style scoped>
.links>a.router-link-exact-active .myim>img{
  display: inline-block;
}
.links>a.router-link-exact-active .myimg>img{
  display: none;
}
.links>a.router-link-exact-active{
  background-color: rgb(242, 243, 242);
  color: #a049f3;
}
.other{
  width: 98vw;
  display: flex;
  gap: 2rem;
}
.myimg>img{
  display: inline-block;
}
.myim>img{
  display: none;
}
.links a{
  display: flex;
  width: 88%;
  align-items: center;
  text-decoration: none;
  font-weight: 100;
  color: black;
  border-radius: 10px;
  margin: 10px auto;
}
.links p{
  margin: 13px 0;
  font-size: 0.9rem;
  height: min-content;
}
.links img{
  width: 1.2rem;
  margin: 0 12px 0 8px;
}
.container, .orni{
  width: 180px;
  height: 100vh;
  flex-shrink: 0;
}
.container{
  position: fixed;
}
.container> video{
  width: 100%;
  margin-top: 1rem;
}
</style>