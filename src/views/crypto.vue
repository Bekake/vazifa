<template>
    <div class="home">
        <div class="first">
            <welcome class="ozgar" />
            <div class="coins">
                <div class="mycoin" v-for="(item, index) in mydata" :key="index">
                    <givechart :give="item.give"/>
                </div>
            </div>
            <div class="myfin">
                <p>Core Assets</p>
                <div  class="one">
                    <div class="two">
                        <div>
                            <img src="@/assets/pic/bitcoin.png" alt="Bitcoin">
                            <span>Bitcoin</span>
                        </div>
                        <div>
                            <img src="@/assets/pic/ethereum.png" alt="Ethereum">
                            <span>Ethereum</span>
                        </div>
                        <div>
                            <img src="@/assets/pic/litecoin.png" alt="Litecoin">
                            <span>Litecoin</span>
                        </div>
                    </div>
                    <div class="thre">
                        <p>Market overview</p>
                        <img src="@/assets/pic/dotup.png" alt="">
                    </div>
                </div>
                <div class="four">
                    <div class="five">
                        <div>
                            <p>Bitcoin</p>
                            <p>BTC/USD</p>
                        </div>
                        <div>
                            <p>Mark Price</p>
                            <p>148.42  <span>-3.28%</span></p>
                        </div>
                        <div>
                            <p>Funding rate</p>
                            <p>-0,025%/hr</p>
                        </div>
                        <div>
                            <p>Volume</p>
                            <p>104K</p>
                        </div>
                    </div>
                    <div class="six">
                        <button>Buy</button>
                        <button>Sell</button>
                    </div>
                </div>
                <div class="another">
                    <finance/>
                </div>
            </div>
        </div>
        <div class="second">
            <div class="abir">
                <input type="text" placeholder="Search here..">
                <img src="@/assets/pic/search.png" alt="Search">
            </div>
            <div class="ikki">
                <p>All Crypto News</p>
                <p>Read more about crypto information who helps you manage, organize and control your assets safety.</p>
                <a href="#">
                    <span>Learn More</span>
                    <div class="ma"><img src="@/assets/pic/wright.png" alt="Right"></div>
                </a>
            </div>
            <mine/>
            <div class="uch">
                <p>Recent Trading</p>
                <p>See your last actions profits </p>
                <div v-for="(item, index) in last" :key="index" :style="givemy(item.ccol, item.rcol)" class="my">
                    <div>
                        <div class="forimg">
                            <img :src="item.myimg" alt="arrow">
                        </div>
                        <div class="mytim" >
                            <p>{{ item.btext }}</p>
                            <p>{{ item.itext }}</p>
                        </div>
                        <p>{{ item.utext }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import mycoin from "@/components/swiper/coin.vue"
import bit from "@/components/swiper/bit.vue"
import welcome from "@/components/welcome.vue"
import mine from "@/components/mine.vue"
import givechart from "@/components/swiper/givechart.vue"
import finance from "@/components/swiper/finance.vue"
export default{
    components: {mycoin, bit, welcome, givechart, finance, mine},
    data(){
        return{
            myshow: false,
            last: [
                {myimg: require("@/assets/pic/rright.png"), rcol: "rgb(255, 99, 132)", ccol: "rgba(255, 99, 132, 0.2)", btext: "Sell Bitcoin", itext: "4min ago", utext: "-$100"},
                {myimg: require("@/assets/pic/gright.png"), rcol: "rgb(23, 161, 23)", ccol: "rgb(167, 233, 182)", btext: "Buy Litecoin", itext: "32min ago", utext: "+$250"},
                {myimg: require("@/assets/pic/gright.png"), rcol: "rgb(23, 161, 23)", ccol: "rgb(167, 233, 182)", btext: "Buy Etheterum", itext: "47min ago", utext: "+$200"},
                {myimg: require("@/assets/pic/rright.png"), rcol: "rgb(255, 99, 132)", ccol: "rgba(255, 99, 132, 0.2)", btext: "Sell Bitcoin", itext: "3h ago", utext: "-$330"},
            ],
            mydata: [
                {
                    give: {
                        rname: 'Bitcoin',
                        qname: 'BTC',
                        price: '$ 33.568,60',
                        percent: '+11,3%',
                        chartdata: [40, 20, 80, 10, 90, 50],
                        baccol: 'rgba(222, 247, 241, 1)',
                        borcol: 'rgb(23, 161, 23)',
                        myimg: require("@/assets/pic/bitcoin.png")
                    }
                },
                {
                    give: {
                        rname: 'Ethereum',
                        qname: 'ETH',
                        price: '$ 1.004,82',
                        percent: '-2,5%',
                        chartdata: [20, 40, 16, 50, 30, 40],
                        baccol: 'rgba(255, 99, 132, 0.2)',
                        borcol: 'rgba(255, 99, 132, 1)',
                        myimg: require("@/assets/pic/ethereum.png")
                    }
                },
                {
                    give: {
                        rname: 'Litecoin',
                        qname: 'LTC',
                        price: '$ 29.007,04',
                        percent: '+8,1%',
                        chartdata: [10, 40, 15, 50, 23, 40],  
                        baccol: 'rgba(222, 247, 241, 1)',
                        borcol: 'rgb(23, 161, 23)',
                        myimg: require("@/assets/pic/litecoin.png")
                    }
                },
            ]

        }
    },
    mounted(){
    },
    methods:{
        givemy(ccol, rcol){
            return{
                '--ccol': ccol,
                '--rcol': rcol,
            }
        }
    },
}
</script>
<style scoped>
.uch>p:nth-child(2){
    font-size: 0.8rem;
    opacity: 0.7;
}
.uch{
    transform: translateY(-1.5rem);
}

.mytim{
    margin-left: -70px;
}
.forimg{
    background-color: var(--ccol);
    padding: 0.2rem;
    border-radius: 12px;
}
.mytim>p:last-child{
    margin-top: 4px;
    font-size: 0.7rem;
}
.my>div>p{
    color: var(--rcol);
}
.my>div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem;
    margin-top: 10px;
}
.ikki, .ikki>p {
    background-color: transparent;
    z-index: 2;
}
.ikki::before{
    content: "";
    position: absolute;
    background-image: linear-gradient(90deg, hsl(271, 88%, 62%), hsl(276, 88%, 62%), hsl(280, 88%, 62%), hsl(285, 88%, 62%), hsl(280, 88%, 62%), hsl(271, 88%, 62%));
    background-size: 600%;
    z-index: 1;
    top: 0;
    color: hsl(271, 88%, 62%);
    left: 0;
    width: 100%;
    height: 100%;
    animation: animate 20s linear infinite;
    border-radius: 12px;

}
@keyframes animate{
    0%{
        background-position: 0 0;
    }
    50%{
        background-position: 400% 0;
    }
    100%{
        background-position: 0 0;
    }
}
a{
    background-color: #4c4653;
    color: white;
    display: flex;
    align-items: center;
    padding: 10px 50px 10px 20px;
    width: max-content;
    text-decoration: none;
    height: max-content;
    border-radius: 12px;
    gap: 1rem;
    position: relative;
    font-size: 0.8rem;
    z-index: 2;
    letter-spacing: 0.8px;
}
a:hover span{
    opacity: 0;
}
.ma>img{
    width: 1.4rem;
}
.ma{
    z-index: 2;
    width: 30%;
    height: 100%;
    position: absolute;
    background-color: #4c4653;
    right: 0;
    display: grid;
    place-content: center;
    border-radius: 12px;
    transition: all 0.2s;
}
a:hover .ma{
    width: 100%;
}
.ikki{
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 0.6rem;
    border-radius: 12px;
    margin-top: 1rem;
}
.ikki>p:nth-child(2){
    line-height: 1.4rem;
    color: white;
    font-size: 0.8rem;
    letter-spacing: 0.8px;
    font-weight: 100;
}
.ikki>p:first-child{
    font-size: 1.5rem;
    font-weight: 600;
    color: white;

}
.ozgar{
    width: 100.6%;
}
.five>div{
    position: relative;
}
.five>div::before{
    content: "";
    position: absolute;
    right: -1.5rem;
    top: 0;
    width: 1.5px ;
    height: 50px;
    background-color: black;
}
.five>div:last-child::before{
    background-color: white;
}
.another{
    transform: translateX(-10px);
    margin-top: 10px
}
.myfin{
    width: 101%;
    padding: 0.9rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;
}
.six>button:first-child, .six>button:last-child{
    padding: 0.6rem 1rem;
    background-color: rgb(16, 193, 16);
    border: none;
    border-radius: 8px;
    color: white;
    margin-left: 1rem;
}
.six>button:last-child{
    background-color: red;
}
.five span{
    font-size: 0.7rem;
    color: red;
}
.five>div>p:first-child{
    font-size: 0.8rem;
    
}
.five>div>p:last-child{
    font-weight: 500;
    margin-top: 0.4rem;
}
.five{
    display: flex;
    gap: 3rem;
}
.four{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.thre>p, .thre>img{
    padding: 0.3rem;
    border-radius: 8px;
}
.thre>p{
    align-self: stretch;
    display: grid;
    place-content: center;
}
.thre{
    display: flex;
    gap: 1rem;
    align-items: center;
}
.two span{
    transform: translateY(1px);
}
.two img{
    width: 1.7rem;
}
.two>div{
    display: flex;
    align-items: center;
    gap: 0.3rem;
}
.two{
    display: flex;
    gap: 2rem;
    
}
.one{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.home{
    gap: 2rem;
}
.first{
    min-width: 700px;
    max-width: 1000px;
}
.second{
    min-width: 200px;
    max-width: 350px;
    padding: 0 1rem;
}
.coins{
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1rem
}
.mycoin{
    flex: 1 1 200px;
}
.abir>input{
    width: 300px;
    padding: 0.8rem;
    background-color: gainsboro;
    font-size: 0.9rem;
    font-weight: 600;
    border: none;
    border-radius: 12px;
}
.abir img{
    position: absolute;
    left: 257px;
    top: 6px;
}
.abir{
    width: 100%;
    margin-top: 1rem;
    position: relative;
}
</style>