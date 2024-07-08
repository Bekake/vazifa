<template>
    <div class="econatiner">
        <div class="bir">
            <div>New message</div>
            <div class="emails" v-for="(item, index) in myemail" :key="index">
                <img :src="item.take" :alt="item.title">
                <p>{{item.title}}</p>
            </div>
            <div class="dots">
                <p>Labels</p>
                <img src="@/assets/pic/dot.png" alt="Dots">
            </div>
            <div class="emails" v-for="(item, index) in others" :key="index">
                <img :src="item.take" :alt="item.title">
                <p>{{ item.title }}</p>
            </div>
            <div class="add">
                <img src="@/assets/pic/plus.png" alt="Plus">
                <p>Add label</p>
            </div>
        </div>
        <div class="ikki">
            <div class="umumiy">
                <div class="forinput">
                    <input type="text" placeholder="Search here...">
                    <img src="@/assets/pic/search.png" alt="Search" >
                </div>
                <div class="mydot">
                    <img src="@/assets/pic/box.png" alt="Box">
                    <img src="@/assets/pic/menu.png" alt="menu">
                    <img src="@/assets/pic/pin.png" alt="pin">
                    <img src="@/assets/pic/dotup.png" alt="dotup">
                </div>
            </div>
            <div class="people">
                <div v-for="(item, index) in people" :key="index" class="person" :class="['person', { 'yana' : myclass[index]}]">
                    <div>
                        <img :src="item.getimg" alt="person">
                    </div>
                    <div>
                        <div>
                            <p>{{ item.myname }}</p>
                            <img v-if="myclass[index]" src="@/assets/pic/favorite.png" alt="Favorite" @click="fav(index)">
                            <img v-else src="@/assets/pic/favoritec.png" alt="Favorite" @click="fav(index)">
                        </div>
                        
                        <p>{{ item.mytext }}</p>
                    </div>
                    <p>{{ item.mytime }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            myemail: [
                {take: require("@/assets/pic/inbox.png"), title: "Inbox"},
                {take: require("@/assets/pic/send.png"), title: "Sent Epics"},
                {take: require("@/assets/pic/favorite.png"), title: "Favourite"},
                {take: require("@/assets/pic/write.png"), title: "Draft"},
                {take: require("@/assets/pic/delete.png"), title: "Deleted"},
                {take: require("@/assets/pic/down.png"), title: "More"},
            ], 
            others: [
                {take: require("@/assets/pic/purple.png"), title: "Work in Progress"},
                {take: require("@/assets/pic/green.png"), title: "Read Later"},
                {take: require("@/assets/pic/gold.png"), title: "Importants"},
                {take: require("@/assets/pic/blue.png"), title: "Offers"},
            ],
            people:[
                { getimg: require("@/assets/people/besh.jpg"), myname: "Robert Johanson", mytime: "2h ago", mytext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, laboriosam totam debitis dolore autem architecto consectetur deleniti corrupti recusandae quae, facere vel mollitia dignissimos?"},
                { getimg: require("@/assets/people/ikki.jpg"), myname: "Louis Pattinson", mytime: "3h ago", mytext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam neque hic soluta aut voluptatem, minus rerum saepe atque? Obcaecati fugiat magni cumque dolor culpa asperiores itaque."},
                { getimg: require("@/assets/people/uch.jpg"), myname: "Tamara Scevenko", mytime: "1h ago", mytext: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dignissimos, iusto provident placeat repudiandae debitis natus odit veritatis totam optio eum aliquid non, quam maiores?"},
                { getimg: require("@/assets/people/tort.jpg"), myname: "Kevin Jacovic", mytime: "2h ago", mytext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem laborum nulla architecto neque aliquid aut enim cumque, ratione veritatis quidem quisquam sunt perspiciatis incidunt, dicta magnam?"},
            ],
            myclass: [false, true, false, false],
        }
    }, 
    methods:{
        fav(myindex){
            this.myclass[myindex] =! this.myclass[myindex]
        },
    }
}
</script>
<style scoped>
.yana{
    box-shadow: 0  0 7px rgb(198, 193, 193);
    animation: animate 1s ease forwards;
    border-radius: 12px;
}
@keyframes animate{
    0%{
        background-color: transparent;
    }
    100%{
        background-color: white;
    }
}
.person>div>div{
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-bottom: 0.7rem
}

.person>div>div>img{
    width:1.2rem;
}
.person>div:first-child>img{
    width: 2.4rem;
    border-radius: 12px;
}
.person>p{
    min-width: 50px;
    white-space: nowrap;
    font-size: 0.9rem
}
.person{
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 1rem;
    gap: 1rem;
    margin-top: 12px;
}
.mydot{
    display: flex;
    align-items: center
}
.mydot>img:first-child{
    width: 1.3rem;
}
.mydot>img{
    margin-left: 1rem;
    width: 1.8rem;
}
.umumiy{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.forinput>input{
    width: 300px;
    padding: 0.8rem;
    background-color: gainsboro;
    font-size: 0.9rem;
    font-weight: 600;
    border: none;
    border-radius: 12px;
}
.forinput>img{
    transform: translate(-120%, 11px);
}
.forinput{
    width: max-content;
}
.add>img{
    width: 1.5rem;
}
.add{
    padding: 0.5rem;
    display: flex;
    gap: 0.6rem;
    align-items: center;
}
.add>p{
    font-size: 0.9rem;
    opacity: 0.6;
}
.bir>div:nth-child(1){
    background-color: #a049f3;
    color: white;
    border-radius: 12px;
    text-align: center;
    padding:0.7rem 0 ;
}
.ikki{
    width: 100%;
}
.bir{
    display: flex;
    width: 220px;
    min-height: 90vh;
    flex-direction: column;
    gap: 0.5rem;
    background-color: white;
    border-radius: 12px;
    padding: 0.5rem;
}
.dots p{
    opacity: 0.6;
    font-size: 0.9rem;
}
.dots{
    display: flex;
    padding: 0.5rem;
    justify-content: space-between;
    align-items: center;
}
.emails{
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.5rem;
    border-radius: 12px;
}
.emails img{
    width: 1.4rem;
}
.econatiner{
    width: 100%;
    display: flex;
    gap: 1rem;
}
</style>