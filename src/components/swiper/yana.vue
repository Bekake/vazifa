<template>
    <div class="ycontainer">
        <div class="ybir">
            <p>All Transaction</p>
            <div>
                <div class="mybut">
                    <button v-for="(item, index) in myall" :key="index" :style="givestyle(item.mycol)" class="button">
                        <p>{{ item.mytext }}</p>
                    </button>
                </div>
                <div>
                    <img src="@/assets/lcall.png" alt="Calendar">
                    <img src="@/assets/search.png" alt="Search">
                    <img src="@/assets/menu.png" alt="Menu">
                </div>
                
            </div>
        </div>
        <hr>
        <div class="mine">
            <div v-for="(item, index) in boshqa" :key="index" class="ylast" :style="givecol(item.baccol, item.mycol)">
                <div class="korsat">
                    <div>
                        <img :src="item.upor" alt="Right">
                    </div>
                    <div>
                        <p>{{ item.from }}</p>
                        <p>{{ item.mytime }}</p>
                    </div>
                </div> 
                <div class="info">
                    <div>
                        <img :src="item.per" alt="Person">
                        <div>
                            <p>{{ item.myname }}</p>
                            <p>{{ item.nick }}</p>
                        </div>
                    </div>
                    <p>{{ item.money }}</p>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default{
    data(){
        return{
            myall: [
                {mycol: "#2eab39", mytext: "History"},
                {mycol: "#f6b02d", mytext: "Upcoming"},
                {mycol: "#0d3cc9", mytext: "Recent"},
            ],
            boshqa: [
                {upor: require("@/assets/pic/rright.png"),mycol: "rgb(237, 45, 45)", baccol: "rgba(255, 99, 132, 0.2)", from: "Paypal Transfer", mytime: "July 6th, 2024 at 9:34 AM", per: require("@/assets/people/bir.jpg"), myname: "Thomas Edison", nick: "@thomasedison", money: "-$98.34"},
                {upor: require("@/assets/pic/rright.png"),mycol: "rgb(237, 45, 45)", baccol: "rgba(255, 99, 132, 0.2)", from: "Upgrade Storage Plan", mytime: "July 6th, 2024 at 11:56 AM", per: require("@/assets/pic/dropbox.png"), myname: "Dropbox", nick: "@dropbox", money: "-$200"},
                {upor: require("@/assets/pic/gright.png"),mycol: "rgb(22, 178, 22)", baccol: "rgb(167, 233, 182)", from: "Bank Transfer", mytime: "July 5th, 2024 at 12:23 AM", per: require("@/assets/people/ontort.jpg"), myname: "Loius Khun", nick: "@loiuskhun", money: "+$500"},
                {upor: require("@/assets/pic/rright.png"),mycol: "rgb(237, 45, 45)", baccol: "rgba(255, 99, 132, 0.2)", from: "Youtube Monthly Transfer", mytime: "July 5th, 2024 at 03:34 AM", per: require("@/assets/pic/youtube.png"), myname: "Youtube", nick: "@youtube", money: "-$250"},
                {upor: require("@/assets/pic/gright.png"),mycol: "rgb(22, 178, 22)", baccol: "rgb(167, 233, 182)",  from: "Bank Transfer", mytime: "July 4th, 2024 at 06:12 AM", per: require("@/assets/people/uch.jpg"), myname: "Isabella Srait", nick: "@isabella", money: "+$300"},
            ]
        }
    },
    methods:{
        givestyle(col){
            return{
                '--mycol': col,
            }
        },
        givecol(colbir, colikki){
            return{
                '--mycolbir': colbir,
                '--mycolikki': colikki,
            }
        }
    }
}
</script>
<style scoped>
hr{
    margin-top: 1rem;
}
.mine{
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 1rem;
}
.korsat>div:last-child{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.korsat>div:first-child{
    padding: 0.5rem;
    background-color: var(--mycolbir);
    border-radius: 10px;
}
.korsat>div>p:last-child{
    font-size: 0.8rem;
    opacity: 0.7;
    margin-top: 3px;
}
.info>div>div>p:last-child{
    font-size: 0.8rem;
    opacity: 0.7;
}
.info>div{
    display: flex;
    gap: 1em;
    align-items: center
}
.info>p{
    font-size: 1.2rem;
    color: var(--mycolikki);
}
.info{
    flex: 1 1 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.korsat{
    display: flex;
    gap: 1rem;
    flex: 1 1 300px;
}
.info img{
    width: 3rem;
    border-radius: 12px;
}
.ylast{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.button {
  all: unset;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.14em 0.8em;
  height: max-content;
  border-top: var(--mycol) solid 0.15em;;
  border-bottom: var(--mycol) solid 0.15em;;
  font-weight: 600;
  font-size: 1.2em;
  border-radius: 0.1em;
  color: var(--mycol);
  cursor: pointer;
  overflow: hidden;
  transition: border 300ms, color 300ms;
  user-select: none;
}
.button p {
  z-index: 1;
}
.button:hover {
  color: white;
}
.button:active {
  border-color: teal;
}
.button::after, .button::before {
  content: "";
  position: absolute;
  width: 9em;
  aspect-ratio: 1;
  background: var(--mycol);
  opacity: 50%;
  border-radius: 50%;
  transition: transform 500ms, background 300ms;
}
.button::before {
  left: 0;
  transform: translateX(-8.5em);
}
.button::after {
  right: 0;
  transform: translateX(8.5em);
}
.button:hover:before {
  transform: translateX(-1em);
}
.button:hover:after {
  transform: translateX(1em);
}
.button:active:before,
.button:active:after {
  background: teal;
}
.mybut{
    display: flex;
    gap: 0.5rem;
    align-items: center;
}
.ybir>p{
    font-size: 1.3rem;
    font-weight: 600;
}
.ycontainer{
    margin-top: 1.5rem;
    padding: 1rem;
}
.ybir img{
    width: 1.6rem;
    margin-left:10px;
}
.ybir>div{
    display: flex;
    gap: 1.2rem;
    align-items: center;
}
.ybir{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>