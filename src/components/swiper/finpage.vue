<template>
    <div class="fcon">
        <div class="fcont">
            <p>Income</p>
            <div>
                <div>
                    <p>+4.6%</p>
                    <h6>Bigger than last week</h6>
                </div>
                <p>$1,572.67</p>
            </div>
            <div class="forcan">
                <canvas id="myfirst"></canvas>
            </div>
        </div>
        <div class="fcont">
            <p>Expense</p>
            <div>
                <div>
                    <p>+2.5%</p>
                    <h6>Bigger than last week</h6>
                </div>
                <p>$802.16</p>
            </div>
            <div class="forcan">
                <canvas id="mysecond"></canvas>
            </div>
            
        </div>
    </div>
    
</template>
<script>
import { Chart, registerables } from 'chart.js';
export default{
    data(){
        return{

        }
    },
    mounted(){
        this.give(),
        this.take()
    },
    methods: {
        take(){
            Chart.register(...registerables);
            const canvas = document.getElementById('mysecond');
            const ctx = canvas.getContext('2d');
            if(ctx){
                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                        datasets: [
                            {
                                label:  'Hours',
                                data: [6, 8, 10, 12, 9, 7, 13],
                                borderRadius: 20,
                                borderWidth: 1,
                                barPercentage: 0.5,
                                categoryPercentage: 0.5,
                                backgroundColor: function(context){
                                    const mychart = context.chart
                                    const {ctx, chartArea} = mychart;
                                    if (!chartArea) {
                                        return null;
                                    }
                                    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                                    gradient.addColorStop(0, '#ffe100');
                                    gradient.addColorStop(1, '#ff5900');
                                    return gradient;
                                }
                            }
                        ],
                        
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: true,
                                grid: {
                                    display: false
                                }
                            },
                            x: {
                                grid: {
                                    display: false
                                }
                            }
                        },
                        plugins: {
                            legend: {
                                display: false
                            },
                            tooltip: {
                                enabled: true
                            }
                        }
                    }
                })
            }
        },
        give(){
            Chart.register(...registerables);
            const canvas = document.getElementById('myfirst');
            const ctx = canvas.getContext('2d');
            if(ctx){
                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                        datasets: [
                            {
                                label:  'Hours',
                                data: [12, 10, 11, 8, 11, 9, 13],
                                borderRadius: 20,
                                borderWidth: 1,
                                barPercentage: 0.5,
                                categoryPercentage: 0.5,
                                backgroundColor: function(context){
                                    const mychart = context.chart
                                    const {ctx, chartArea} = mychart;
                                    if (!chartArea) {
                                        return null;
                                    }
                                    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                                    gradient.addColorStop(0, '#00bfff');
                                    gradient.addColorStop(1, '#002BFF');
                                    return gradient;
                                }
                            }
                        ],
                        
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: true,
                                grid: {
                                    display: false
                                }
                            },
                            x: {
                                grid: {
                                    display: false
                                }
                            }
                        },
                        plugins: {
                            legend: {
                                display: false
                            },
                            tooltip: {
                                enabled: true
                            }
                        }
                    }
                })
            }
        }
    }
}
</script>
<style scoped>
.fcont>div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
}
h6{
    opacity: 0.7;
    margin-top: 2px
}
.fcont>div>p{
    font-size: 1.3rem;
    font-weight: 500
}
.fcont>p{
    font-size: 1.7rem;
    font-weight: 600;
}
.fcon{
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    margin-top: 0.8rem;
}
.forcan{
    height: 200px;
}
.fcont{
    padding: 1rem;
    flex: 1 1 200px;
}
</style>