<template>
<div class="bir">
    <div>
        <h1>Dashboard</h1>
        <p>Welcome to modern dashboard</p>
    </div>
    <div class="port">
        <img src="@/assets/message.png" alt="message">
        <img src="@/assets/bell.png" alt="bell">
        <img src="@/assets/download.png" alt="bell">
    </div>
</div>
</template>
<style scoped>
.port>img:last-child{
  width: 2rem;
}
.bir{
  margin-top: 12px;
  width: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bir img{
  width: 1.2rem;
  margin-left: 14px;
  cursor: pointer;
}
</style>