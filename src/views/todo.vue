<template>
    <transition name="fade">
        <div class="kkon" v-if="myshow">
            <h1>Bu Page Tayyorlanmadi</h1>
        </div>
    </transition>
</template>
<script>
import mine from "@/components/mine.vue"
export default {
    components: {mine},
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

</style>