<template>
    <div class="mychart">
        <h2>Network Activities</h2>
        <div class="chart-container">
            <canvas id="myline"></canvas>
        </div> 
    </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';

export default {
    data() {
        return {
        };
    },
    mounted(){
        this.getline()
    },
    methods:{
        getline(){
            Chart.register(...registerables);
            const canvas = document.getElementById('myline');
            const ctx = canvas.getContext('2d');
            if(ctx){
                new Chart(ctx, {
                    type: 'line',
                    data:{
                        labels: ['Jul 01', 'Jul 02', 'Jul 03', 'Jul 04', 'Jul 05', 'Jul 06'],
                        datasets: [
                            {
                                backgroundColor: 'rgba(75, 192, 192, 0.4)',
                                borderColor: 'rgba(75, 192, 192, 1)',
                                data: [40, 20, 80, 10, 90, 50],
                                fill: true,
                                tension: 0.5,
                                borderWidth: 0,
                            },
                            {
                                backgroundColor: 'rgba(54, 162, 235, 0.4)',
                                borderColor: 'rgba(54, 162, 235, 1)',
                                data: [25, 70, 50, 90, 30, 80],
                                fill: true,
                                tension: 0.5,
                                borderWidth: 0,
                            },
                        ],
                    },
                    options:{
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: true,
                            },
                        },
                        plugins: {
                            legend:{
                                display: false
                            }
                        }
                    },
                })
            }
        }
        
    }
};
</script>

<style scoped>

.mychart {
    background-color: white;
    border-radius: 12px;
    margin-top: 1rem;
    width: 98%;
    padding: 1rem 0.2rem 1rem 1rem;


}
.chart-container {
position: relative;

aspect-ratio: 3/1;

}
</style>
