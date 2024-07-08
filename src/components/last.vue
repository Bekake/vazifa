<template>
<div class="lcont">
    <div class="lbir">
        <input type="text" name="search" id="search" placeholder="Search here...">
        <img src="@/assets/pic/search.png" alt="Search">
    </div>
    <div class="mybal">
        <div>
            <p>Your Balance</p>
            <img src="@/assets/pic/dots.png" alt="Dot">
        </div>
        <h1>$ 9,425</h1>
        <div>
            <p><span>1452</span> <span>****</span> <span>****</span> <span>****</span></p>
            <p>10/24</p>
        </div>
        <div class="forn">
            <div>
                <p>Name</p>
                <p>Example Name</p>
            </div>
            <img src="@/assets/people/new.png" alt="">
        </div>
    </div>
    <div class="transfer">
        <h3>Recent Transfer</h3>
        <p>See your last spending expenses</p>
        <div>
            <div>
                <img src="@/assets/people/on.jpg" alt="Person">
            </div>
            <div>
                <img src="@/assets/people/ikki.jpg" alt="Person">
            </div>
            <div>
                <img src="@/assets/people/yuch.jpg" alt="Person">
            </div>
            <div>
                <img src="@/assets/people/onyetti.jpg" alt="Person">
            </div>
            <div>
                <img src="@/assets/pic/mysend.png" alt="Send">
            </div>
            
        </div>
    </div>
    <div class="category">
        <h3>Spending Catigories</h3>
        <p>See your spending catigories</p>
        <div>
            <div v-for="(item, index) in yana" :key="index" class="per" :style="give(item.mycol, item.col, item.percent)">
                <div>
                    <img :src="item.myimg" :alt="item.text">
                </div>
                <div class="mymain">
                    <p>{{ item.text }}</p>
                    <div class="range">
                        <div></div>
                        <div></div>
                    </div>
                    <p>{{ item.used }}<span>{{ item.anot }}</span></p>
                </div>
            </div>
            
        </div>
    </div>

</div>
</template>
<script>
export default {
    data(){
        return{
            yana: [
                {myimg: require("@/assets/pic/install.png"), text: "Installment", percent: 66, used: "$420.6 used /", anot: "from $1000", mycol: "rgba(212, 184, 237, 0.616)", col: "#a049f3"},
                {myimg: require("@/assets/pic/restaurant.png"), text: "Restaurant", percent: 30, used: "$104.63 used /", anot: "from $500", mycol: "rgb(167, 233, 182)", col: "#1fcb1f"},
                {myimg: require("@/assets/pic/transport.png"), text: "Transport", percent: 75, used: "$530.6 used /", anot: "from $1200", mycol: "rgba(255, 237, 134, 0.634)", col: "#f6b02d"},
                {myimg: require("@/assets/pic/holiday.png"), text: "Holiday", percent: 44, used: "$340.6 used /", anot: "from $800", mycol: "rgba(155, 255, 255, 0.688)", col: "#00bfff"},
            ]
        }
    },
    methods: {
        give(baccol, col, myper){
            return{
                '--baccol': baccol,
                '--col': col,
                '--percent': myper + '%',
            }
        }
    }
}
</script>
<style scoped>
.category>div{
    margin-top: 10px;
}
.transfer>p, .category>p{
    font-size: 0.8rem;
    font-weight: 550;
    margin-top: 2px;
    opacity: 0.8;
}
.transfer, .category{
    margin-top: 1.5rem;
}
.transfer img{
    width: 3.3rem;
    border-radius: 1.2rem;
}
.transfer>div>div:last-child>img{
    width: 2.3rem;
    margin: 0.5rem;
    border-radius: 0;
    transform: translateX(-2px);
}
.transfer>div>div{
    padding: 4px;
    border-radius: 1.2rem;
    display: grid;
    place-content: center;
    background: radial-gradient(circle at 30% 107%, rgb(253, 244, 151) 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    cursor: pointer;
}
.transfer>div{
    display: flex;
    gap: 1rem;
    margin-top: 10px;
}
.mymain>p:last-child{
    margin-top: 1rem;
}
.category>div{
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
}
.range{
    position: relative;
}
.range>div{
    position: absolute;
    height: 7px;
    border-radius: 7px;
    width: 90%;
    left: 0;
    top: 4px;
    background-color: gainsboro;
}
.range>div:last-child{
    background-color: var(--col);
    width: var(--percent);
}
.per>div:last-child{
    width: 100%;
}
.per>div:first-child{
    padding: 0.3rem;
    border-radius: 8px;
    background-color: var(--baccol);
    /* background-color: rgba(212, 184, 237, 0.616);
    color: #a049f3;
    background-color: rgb(167, 233, 182);
    color: #1fcb1f;
    background-color: rgba(255, 237, 134, 0.634);
    color: #f6b02d;
    background-color: rgba(155, 255, 255, 0.688);
    color: #00bfff; */
    height: max-content;
}
.per img{
    width: 1.6rem;
    transform: translateY(1.5px)
}
.per{
    width: 100%;
    display: flex;
    gap: 1rem;

}
.forn>div>p:first-child{
    font-size: 0.8rem;
    margin-bottom: 5px
}
h1{
    margin: 0.2rem 0 1.2rem;
}
.forn img{
    width: 4rem;
    transform: translateY(4px);
}
.mybal>div{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.mybal{
    background-color: rgb(44, 139, 255);
    padding: 1rem;
    margin-top: 1.5rem;
    border-radius: 12px;
    color: white;
}
.lbir{
    position: relative;
}
.lbir>input{
    width: 330px;
    background-color: gainsboro;
    padding: 0.7rem;
    border: none;
    border-radius: 12px;
    position: relative;
}
.lbir>img{
    position: absolute;
    left: 290px;
    top: 5px;
    width: 1.8rem;
}
.lcont{
    padding: 1rem 0.5rem 0.5rem 1rem;
}
</style>