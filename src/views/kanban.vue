<template>
    <transition name="fade">
        <div v-if="myshow" class="kkon">
            <h1 >Bu Page Tayyorlanmadi</h1>
        </div>
        
    </transition>
</template>

<script>
import finance from "@/components/swiper/finance.vue"
export default {
    components: {finance},
    data() {
        return {
            myshow: false,
        };
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
<style>
.kkon{
    width: 100%;
    height: 100vh;
    display: grid;
    place-content: center;
}
</style>