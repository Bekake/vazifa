<template>
    <div class="coin">
        <div>
            <img :src="give.myimg" alt="Bitcoin">
            <div>
                <p>{{ give.rname }}</p>
                <p>{{ give.qname }}</p>
            </div>
        </div>
        <div :style="givecol(give.borcol)">
            <p>{{ give.price }}</p>
            <p>{{ give.percent }}</p>
        </div>
        <div class="graph">
            <canvas ref="mycoin" id="mycoin"></canvas>
        </div>  
    </div>
</template>
<script>
import { Chart, registerables } from 'chart.js';
export default {
    props: {
        give:{
            type: Object,
            required: true
        }
    },
    data(){
        return{

        }
    },
    mounted(){
        this.givegraph()
    },
    methods:{
        givegraph(){
            Chart.register(...registerables);
            const canvas = this.$refs.mycoin;
            const ctx = canvas.getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jul 01', 'Jul 02', 'Jul 03', 'Jul 04', 'Jul 05', 'Jul 06'],
                    datasets: [
                        {
                            backgroundColor: this.give.baccol,
                            borderColor: this.give.borcol,
                            data: this.give.chartdata,
                            fill: true,
                            tension: 0.5,
                            borderWidth: 3,
                            pointRadius: 0
                        }
                    ]
                },
                options:{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            display : false,
                            beginAtZero: true
                        },
                        x: {
                            display: false,
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        legend:{
                            display: false
                        }
                    }
                },
            })
        },
        givecol(mycol){
            console.log(mycol)
            return {
                '--mycol': mycol
            }
        }
    }
}
</script>
<style scoped>
.graph{
    margin-top: 12px;
}
#mycoin{
    width: 100%;
    aspect-ratio: 2/1
}
.coin>div:nth-child(2){
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
}
.coin>div:first-child{
    display: flex;
    gap: 0.5rem;
}
.coin>div>div>p:last-child{
    font-size: 0.6rem;
    margin-top: 2px;
}
.coin>div>p:last-child{
    color: var(--mycol);
}
.coin{
    padding: 0.8rem;
}
</style>