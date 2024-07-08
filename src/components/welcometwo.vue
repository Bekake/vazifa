<template>
    <div class="bir">
      <div>
        <h1>Dashboard</h1>
        <p>Welcome to modern dashboard</p>
      </div>
      <div class="port">
        <input type="text" placeholder="Search here...">
        <img src="@/assets/pic/search.png" alt="Search">
        <img src="@/assets/message.png" alt="message">
        <img src="@/assets/bell.png" alt="bell">
        <img src="@/assets/download.png" alt="bell">
      </div>
    </div>
</template>
<style scoped>
.bir{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.port>input{
    padding: 0.7rem;
    width: 270px;
    border: none;
    border-radius: 12px;
}
.port>img:nth-child(2){
    position: absolute;
    left: 226px;
}
.port>img:last-child{
  width: 2rem;
}
.port{
    position: relative;
    display: flex;
    align-items: center;
}
.bir img{
  width: 1.2rem;
  margin-left: 14px;
}
</style>