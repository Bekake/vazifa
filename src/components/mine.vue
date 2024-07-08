<template>
<div class="mine">
    <div>
        <p>Summary</p>
        <img src="@/assets/pic/dotup.png" alt="">
    </div>
    <canvas id="mychart"></canvas>
</div>
</template>
<script>
import { Chart, registerables } from 'chart.js';
export default {
    data() {
        return {
            
        }
    },
    mounted() {
        this.givemine();
    },
    methods: {
        givemine(){
            Chart.register(...registerables);
            const canvas = document.getElementById('mychart');
            const ctx = canvas.getContext('2d');
            if(ctx){
                new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ['Ethereum', 'Litecoin', 'Ripple', 'Bitcoin'],
                        datasets: [
                            {
                                backgroundColor: ['#20c997', '#007bff', '#343a40', '#ffc107'],
                                data: [30, 34, 6, 30]
                            }
                        ]
                    },
                    options: {
                        plugins: {
                            legend: {
                                position: 'right',
                                labels: {
                                usePointStyle: true,
                                padding: 20
                                }
                            },
                            tooltip: {
                                enabled: true
                            }
                        },
                        
                    }
                })

            }
        }
    },
}
</script>
<style scoped>
.mine>div{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.mine{
    margin-top: 1rem;
}
canvas{
    margin-top: -30px;
}
</style>