<template>
<div class="coins">
    <div class="mycoin" v-for="(item, index) in mydata" :key="index">
        <givechart :give="item.give"/>
    </div>
</div>
</template>
<script>
import givechart from "@/components/swiper/givechart.vue"
export default{
    components: { givechart},
    data(){
        return{
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
                        chartdata: [40, 20, 80, 10, 90, 50],  
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
    }
}
</script>
<style scoped>
.coins{
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 1rem;
}
.mycoin{
    flex: 1 1 160px;
}
</style>