<template>
    <div class="scontainer">
        <div class="sbir">
            <input type="text" placeholder="Search here..">
            <img src="@/assets/pic/search.png" alt="Search">
        </div>
        <div class="sikki">
            <div>
                <p>Server Status</p>
                <p>You can see which part hac more demand</p>
            </div>
            <div >
                <div class="server" v-for="(item, index) in servers" :key="index" :style="givestyle(item.hegs[0],item.hegs[1],item.hegs[2],item.hegs[3],item.col)">
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <p>{{ item.title }}</p>
                </div>
                <div class="time">
                    <p>10 AM</p>
                    <p>8 AM</p>
                    <p>6 AM</p>
                    <p>4 AM</p>
                    <p>2 AM</p>
                </div>
            </div>
        </div>
        <div class="such">
            <div>
                <p>Recent Problems</p>
                <p>You need to fix problems in red color</p>
            </div>
            <div>
                <div class="company" v-for="(item, index) in companies" :key="index" :style="give(item.col)">
                    <div>
                        <img :src="item.myimg" :alt="item.cname">
                    </div>
                    <div>
                        <p>{{ item.cname }}</p>
                        <a :href="item.link">{{ item.link }}</a>
                    </div>
                    <p>{{ item.level }}</p>
                </div>
            </div>
        </div>
        <div class="stort">
            <p>Latest activities</p>
            <p>You have other works to do</p>
        </div>
    </div>
    
</template>
<script>
export default{
    data(){
        return{
            servers: [
                {hegs: ["40px", "60px", "80px", "100px"], col: "rgb(255, 99, 132)", title: "Sun"},
                {hegs: ["100px", "130px", "150px", "170px"], col: "rgb(42, 72, 245)", title: "Mon"},
                {hegs: ["90px", "120px", "130px", "150px"], col: "rgb(22, 184, 22)", title: "Tue"},
                {hegs: ["70px", "100px", "120px", "140px"], col: "rgb(255, 205, 86)", title: "Wed"},
                {hegs: ["90px", "120px", "150px", "180px"], col: "rgb(42, 72, 245)", title: "Thu"},
                {hegs: ["30px", "40px", "60px", "90px"], col: "rgb(255, 99, 132)", title: "Fri"},
                {hegs: ["100px", "120px", "130px", "160px"], col: "rgb(22, 184, 22)", title: "Sat"},
            ],
            companies: [
                {myimg: require("@/assets/pic/google.png"), cname: "Google", link: "http://www.google.com", level: "Downward", col: "rgb(255, 63, 63)"},
                {myimg: require("@/assets/pic/facebook.png"), cname: "Facebook", link: "http://www.facebook.com", level: "Stable", col: "rgb(38, 204, 38)"},
                {myimg: require("@/assets/pic/youtube.png"), cname: "Youtube", link: "http://www.youtube.com", level: "Warning", col: "rgb(255, 215, 0)"},
            ]
        }
    }, 
    methods:{
        givestyle(hb, hi, hu, ht, col){
            return{
                '--hb': hb,
                '--hi': hi,
                '--hu': hu,
                '--ht': ht,
                '--col': col,
            }
        },
        give(mycol){
            return{
                '--mycol': mycol,
            }
        }
    }
}
</script>
<style scoped>

.stort{
    margin-top: 1rem;
}
.such{
    width: 94%;
    margin-top: 1rem;
}
.sikki{
    margin-top: 1rem;
}
.company>p{
    padding: 12px;
    font-weight: 650;
    background-color: var(--mycol);
    border-radius: 12px;
    color: white;
}
.company>div>p{
    font-weight: 600
}
.company>div:nth-child(2){
    display: flex;
    flex-direction: column;
    gap: 9px;
}
.company a{
    text-decoration: none;
    color: black;
    opacity: 0.6;
}
.company>div:first-child{
    padding: 1rem;
    background-color: white;
    border-radius: 12px;
}
.company{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
}
.company img{
    width: 2.5rem;
}
.time{
    display: flex;
    height: 200px;
    flex-direction: column;
    justify-content: space-between;
    transform: translateY(-12px);
    align-self: center;
}
.time p{
    text-align: right;
    font-size: 0.8rem;
    opacity: 0.5;
}
.server p{
    margin-top: 1.2rem;
    text-align: center;
    opacity: 0.5;
    font-size: 0.8rem;
}
.server>div>div{
    width: 20px;
    height: 100px;
    position: absolute;
    bottom: 0;
    background-color: var(--col);
    border-radius: 9px;
}
.server>div>div:nth-child(1){
    opacity: 1;
    height: var(--hb);
}
.server>div>div:nth-child(2){
    opacity: 0.7;
    height: var(--hi)
}
.server>div>div:nth-child(3){
    opacity: 0.4;
    height: var(--hu)
}
.server>div>div:nth-child(4){
    opacity: 0.2;
    height: var(--ht)
}
.server>div{
    position: relative;
    height: 220px;
}
.sikki>div:nth-child(2){
    display: flex;
    width: 94%;
    justify-content: space-between;
}
.sikki>div:first-child>p:first-child, .such>div:first-child>p:first-child, .stort>p:first-child{
    font-size: 1.5rem;
    font-weight: 600;
}
.sikki>div:first-child>p:last-child, .such>div:first-child>p:last-child, .stort>p:last-child{
    font-size: 1rem;
    opacity: 0.6;
    margin-top: 0.7rem;
}
.sbir>input{
    width: 300px;
    padding: 0.8rem;
    background-color: gainsboro;
    font-size: 0.9rem;
    font-weight: 600;
    border: none;
    border-radius: 12px;
}
.sbir>img{
    transform: translate(-120%, 11px);
}
.sbir{
    width: max-content;
    margin-top: 1rem
}
.scontainer{
    display: flex;
    flex-direction: column;
    gap: 1rem
}
</style>