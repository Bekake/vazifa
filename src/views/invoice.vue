<template>
<transition name="fade">
    <div v-if="myshow" class="myinvoice">
        <wel></wel>
        <div class="balance">
            <div class="alohida">
                <div>
                    <div style="background-color: #a049f3;">
                        <div class="katta">
                            <p>982</p>
                            <p>Invoice sent</p>
                        </div>
                        <div>
                            <img src="@/assets/pic/dcheck.png" alt="Double Check">
                        </div>
                    </div>
                    <div style="background-color: rgb(255, 99, 132);">
                        <div class="katta">
                            <p>45</p>
                            <p>Pending Invoice</p>
                        </div>
                        <div>
                            <img src="@/assets/pic/ques.png" alt="Question">
                        </div>
                    </div>
                    <div style="background-color: #002BFF;">
                        <div class="katta">
                            <p>13</p>
                            <p>In Progress Invoice</p>
                        </div>
                        <div>
                            <img src="@/assets/pic/time.png" alt="Question">
                        </div>
                    </div>
                </div>
                <div>
                    <div style="background-color: rgb(23, 161, 23);">
                        <div class="katta">
                            <p>73</p>
                            <p>Paid Invoice</p>
                        </div>
                        <div>
                            <img src="@/assets/pic/check.png" alt="Double Check">
                        </div>
                    </div>
                    <div style="background-color: #ffc107;">
                        <div class="katta">
                            <p>168</p>
                            <p>Unpaid Invoice</p>
                        </div>
                        <div>
                            <img src="@/assets/pic/myspam.png" alt="Question">
                        </div>
                    </div>
                    <div style="background-color: #FF7300;">
                        <div class="katta">
                            <p>3</p>
                            <p>Planned Invoice</p>
                        </div>
                        <div>
                            <img src="@/assets/pic/plan.png" alt="plan">
                        </div>
                    </div>
                </div>
            </div>
            <div class="umumiy">
                <div class="ibir">
                    <p>Balance: <span>$245.708,65</span></p>
                    <img src="@/assets/people/new.png" alt="Visa">
                </div>
                <div class="ik">
                    <p>Card Number</p>
                    <p><span>1962</span> <span>XXXX</span> <span>XXXX</span> <span>XXXX</span></p>
                </div>
                <div class="iuch">
                    <div>
                        <p>Card Holder</p>
                        <p>Example Name</p>
                    </div>
                    <p>10/27</p>
                </div>
            </div>
        </div>
        <div class="invoice">
            <div class="list">
                <div class="buttons">
                    <div>
                        <p>Invoice List</p>   
                        <p>See your last invoices</p>
                    </div>
                    <div class="inner">
                        <div>
                            <span>Recent</span>
                            <img src="@/assets/pic/down.png" alt="Down">
                        </div>
                        <img src="@/assets/pic/menu.png" alt="Dot">
                        <img src="@/assets/kanbanc.png" alt="Dot">
                    </div>
                </div> 
                <table>
                    <tr>
                        <th>Invoice Number</th>
                        <th>Recipient</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    <tr v-for="(item, index) in mine"  :key="index" :style="give(item.mycol)">
                        <td>{{ item.num }}</td>
                        <td class="myim">
                            <img :src="item.im" alt="Person">
                            <span>{{ item.mname }}</span>
                        </td>
                        <td>{{ item.time }}</td>
                        <td>$543.23</td>
                        <td class="mys">
                            <img :src="item.check" alt="Status">
                            <span>{{ item.stat }}</span>
                        </td>
                        <td class="action">
                            <img src="@/assets/pic/link.png" alt="Link">
                            <img src="@/assets/pic/printer.png" alt="Printer">
                            <img src="@/assets/pic/ldot.png" alt="Dots">
                        </td>
                    </tr>
                </table>
            </div>
            <div class="send">
                <div>
                    <h2>Send Invoice</h2>
                    <p>Send your invoice to people</p>
                </div>
                <div class="people">
                    <p>Choose Recipient</p>
                    <div class="mim">
                        <div>
                            <img src="@/assets/people/onbir.jpg" alt="Person">
                        </div>
                        <div>
                            <img src="@/assets/people/besh.jpg" alt="Person">
                        </div>
                        <div>
                            <img src="@/assets/people/on.jpg" alt="Person">
                        </div>
                        <div>
                            <img src="@/assets/people/onuch.jpg" alt="Person">
                        </div>
                    </div>
                    <p>Choose service</p>
                    <select name="service" id="service">
                        <option value="Maintenance Service">Maintenance Service</option>
                        <option value="Local Service">Local Service</option>
                    </select>
                    <p>Label</p>
                    <input type="text" placeholder="$ Enter amount">
                    <button>Send invoice</button>
                </div>
            </div>
            
        </div>
    </div>
</transition>
    
</template>
<script>
import wel from '@/components/welcometwo.vue'
export default {
    components: {wel},
    data() {
        return {
            myshow: false,
            mine: [
                {num: "INV-001231255", im: require("@/assets/people/besh.jpg"), mname: "Samuel", time: "Thu 08/07/2024", check: require("@/assets/pic/gcheck.png"), stat: "Paid", mycol: "rgb(167, 233, 182)" },
                {num: "INV-001231256", im: require("@/assets/people/tort.jpg"), mname: "William", time: "Thu 06/07/2024", check: require("@/assets/pic/gdot.png"), stat: "Pending", mycol: "rgba(255, 237, 134, 0.634)" },
                {num: "INV-001231257", im: require("@/assets/people/onyetti.jpg"), mname: "Dejon", time: "Thu 03/07/2024", check: require("@/assets/pic/redx.png"), stat: "Unpaid", mycol: "rgba(255, 99, 132, 0.27)" },
                {num: "INV-001231258", im: require("@/assets/people/anot.jpg"), mname: "Bella", time: "Thu 02/07/2024", check: require("@/assets/pic/gdot.png"), stat: "Pending", mycol: "rgba(255, 237, 134, 0.634)" },
                {num: "INV-001231259", im: require("@/assets/people/onikki.jpg"), mname: "Jack", time: "Thu 02/07/2024", check: require("@/assets/pic/gcheck.png"), stat: "Paid", mycol: "rgb(167, 233, 182)" },
            ]
        }
    },
    methods: {
        give(col){
            return{
                '--col': col
            }
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
        setTimeout(() => {
            vm.myshow = true; 
        }, 0); 
        });
    },
    beforeRouteLeave(to, from, next) {
        this.myshow = false;
        setTimeout(() => next(), 800); 
    },
}
</script>
<style scoped>
.ik>p:last-child, .iuch>div>p:last-child{
    font-size: 0.9rem;
    margin-top: 5px;
    opacity: 0.8;
}
.ibir span{
    font-size: 1.4rem;
}
.ik{
    transform: translateY(-12px);
}
.iuch{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
tr>th:last-child, tr>td:last-child{
    width: 120px;
}
select, input{
    padding: 1rem 0.6rem;
    border-radius: 12px;
    border: none;
    background-color: rgb(233, 229, 229);
    letter-spacing: 1px;
}
.people button{
    padding: 0.7rem;
    border-radius: 12px;
    border: none;
    letter-spacing: 1px;
}
.people>p{
    font-size: 0.8rem;
    opacity: 0.8;
}
.mim>div{
    padding: 4px;
    background: radial-gradient(circle at 30% 107%, rgb(253, 244, 151) 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    cursor: pointer;
    border-radius: 1rem;
    display: grid;
    place-content: center;
}
.people{
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 12px;
}
.mim{
    display: flex;
    justify-content: space-between;
}
.send>div:first-child>p{
    margin-top: 4px;
    font-size: 0.8rem;
    opacity: 0.7;
}
.people img{
    width: 3rem;
    border-radius: 1rem;
}
.action>img{
    margin-right: 1rem;
}
.mys{
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: var(--col);
    padding: 0.4rem;
    border-radius: 12px;
}
td>img{
    width: 1.5rem;
    border-radius: 10px;
}
.myim{
    display: flex;
    align-items: center;
    gap: 6px;
}
.myim>img{
    width: 2rem;
}
th{
    text-align: left;
}
table{
    width: 100%;
    border-spacing: 1rem;
    margin-top: 12px
}
.buttons>div>p:last-child{
    font-size: 0.8rem;
    margin-top: 4px;
    opacity: 0.7;
}
.inner>div{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-right: 12px;
    background-color: gainsboro;
    padding: 6px 12px;
    border-radius: 5px;
}
.inner>div>img{
    width: 1.2rem;
}
.inner{
    display: flex;
    gap: 1rem;
}
.buttons{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.list{
    flex: 3 3 600px;
}
.send{
    flex: 1 1 200px;
}
.invoice{
    display: flex;
    gap: 1.5rem;
    margin-top: 0.5rem;
}
.ibir>img{
    width: 5rem;
}
.ibir{
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
}
.katta{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: white;
}
.katta>p:first-child{
    font-size: 1.4rem;
    font-weight: 600;
}
.myinvoice{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.alohida>div>div{
    flex: 1 1 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-radius: 12px;

}
.alohida>div{
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    flex: 1 1 100px;
}
.alohida{
    flex: 2 2 auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}
.umumiy{
    flex: 3 3 auto;
    position: relative;
    z-index: 3;
    color: white;
    font-size: 1.1rem;
}
.umumiy>div{
    z-index: 3;
    width: 94%;
    margin: 12px auto;
}
.ik{
    margin-top: -20px;
}
.umumiy::before{
    content: "";
    position: absolute;
    top: 0;
    z-index: -1;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg,
    #002BFF, #002BFF, #00FFD5, #48FF00, #FFFB00,
    #FF7300, #FF00C8, #f8123c, #FF00C8, #FF7300,
    #FFFB00, #48FF00, #00FFD5, #002BFF, #002BFF
    );
    filter: blur(5px);
    background-size: 1600%;
    animation: glowing 360s linear infinite;
    border-radius: 12px;
}
@keyframes glowing {
    0% {background-position: 0 0;}
    50% {background-position: 800% 0;}
    100% {background-position: 0 0;}
}
.balance{
    display: flex;
    gap: 1.5rem;

}
</style>