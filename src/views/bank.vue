<template>
<transition name="fade">  
    <div v-if="myshow" class="home">
        <div class="first">
            <welcome/>
            <finpage/>
            <yana/>
        </div>
        <div class="second">
            <last/>
        </div>
    </div>
</transition>
</template>
<script>
import finpage from "@/components/swiper/finpage.vue"
import yana from "@/components/swiper/yana.vue"
import welcome from "@/components/welcome.vue"
import last from "@/components/last.vue"
export default{
    components: {
        finpage, yana, welcome, last
    },
    data(){
        return{
            myshow: false,
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
.home{
    gap: 1.5rem;
}
</style>