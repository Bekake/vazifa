<template>
    <div class="gcont">
        <div>
            <div>
                <p>Visitors</p>
                <p>View more</p>
            </div>
            <div class="green">
                <p>98.425K</p>
                <p><span>+0.4%</span> <span>Than last week</span></p>
            </div>
            <div class="forflex">
                <div class="formychart">
                    <canvas id="another"></canvas>
                </div>
                
                <!-- <div class="bir" v-for="(item, index) in boxes" :key="index">
                    <div :style="give(item.heg, item.col)"></div>
                    <p>{{ item.text }}</p>
                </div> -->
            </div>
        </div>
        <div class="forcircle">
            <p><span>Chart Summary</span><span @click="save">Download Report</span></p>
            <div class="boughnut">
                <canvas id="circle"></canvas>
            </div>
            <div class="qosh">
                <p>Fixed Services</p>
                <p>Running</p>
                <p>Down Servers</p>
            </div>
        </div>
    </div>
</template>
<script>
import { Chart, registerables } from 'chart.js';
export default{
    data(){
        return{
            boxes: [
                {heg: "100px", text: "Sun", col: "#bfb3c9"},
                {heg: "60px", text: "Mon", col: "#bfb3c9"},
                {heg: "150px", text: "Tue", col: "#bfb3c9"},
                {heg: "120px", text: "Thu", col: "#bfb3c9"},
                {heg: "200px", text: "Wed", col: "#a049f3"},
                {heg: "80px", text: "Sat", col: "#bfb3c9"},
                {heg: "130px", text: "Sun", col: "#bfb3c9"},
            ],
            chartinstance: null
        }
    },
    mounted(){
        this.getline();
        this.another()
    },
    methods:{
        give(height, col){
            return{
                '--giveheight': height,
                '--givecol': col
            }
        },
        getline(){
            Chart.register(...registerables);
            const canvas = document.getElementById('circle');
            const ctx = canvas.getContext('2d');
            if(ctx){
                this.chartinstance = new Chart(ctx, {
                    type: 'doughnut',
                    options:{
                        responsive: true,
                        maintainAspectRatio: true,
                        plugins:{
                            legend:{
                                display: false
                            }
                        }
                    },
                    data: {
                        labels: ["Fixed Servers", "Down Servers", "Running"],

                        datasets: [
                            {
                                data: [30, 30, 40],
                                backgroundColor: [
                                    'rgb(255, 99, 132)',
                                    'rgb(54, 162, 235)',
                                    'rgb(255, 205, 86)'
                                ],
                                hoverOffset: 4,
                            }
                        ]
                    }
                })
            }
        },
        save(){
            const link = document.createElement('a');
            link.href = this.chartinstance.toBase64Image();
            link.download = 'chart.png';
            link.click();
        },
        another(){
            Chart.register(...registerables);
            const canvas = document.getElementById('another');
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
.qosh>p::before{
    content: "";
    position: absolute;
    top: 10%;
    left: -20px;
    width: 15px;
    height: 80%;
    border-radius: 4px;
}
.qosh>p:nth-child(1)::before{
    background-color: rgb(255, 99, 132);
}
.qosh>p:nth-child(2)::before{
    background-color: rgb(54, 162, 235);
}
.qosh>p:nth-child(3)::before{
    background-color: rgb(255, 205, 86);
}
.qosh>p{
    position: relative
}
.qosh{
    width: 94%;
    margin: auto;
    display: flex;
    justify-content: space-between;

    transform: translateX(6px);
}
.formychart{
    width: 100%;
    height: 260px;
}
.forcircle>p>span:last-child{
    cursor: pointer;
    color: #a049f3;
    padding: 0.5rem;
    border-radius: 10px;
    transition: 0.2s;
    font-weight: 600
}
.forcircle>p>span:last-child:hover{
    background-color: #a049f3;
    color: #fff;
}
.boughnut{
    width: 60%;
}
.green>p:nth-child(1){
    color: rgb(30, 207, 30);
    font-size: 2rem;
    font-weight: 700;
}
.green>p:nth-child(2){
    display: flex;
    flex-direction: column;
    align-items: end;
}
.gcont>div:nth-child(1){
    display: flex;
    gap: 0.7rem;
    flex-direction: column;
    padding: 1rem;
}
.forcircle{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
}
.forcircle>p{
    width: 100%;
}
.gcont>div:nth-child(1)>div, .forcircle>p{
    display: flex;
    justify-content: space-between;
}
.gcont{
    width: 98%;
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}
.gcont>div{
    flex: 1 1 300px;
}
.bir p{
    text-align: center;
    margin-top: 1rem;
    opacity: 0.7
}
.forflex{
    display: flex;
    align-items: end;
    margin-top: 1rem;
}
.bir>div{
    width: 40px;
    height: var(--giveheight);
    background-color: var(--givecol);
    border-radius: 12px;
}
</style>