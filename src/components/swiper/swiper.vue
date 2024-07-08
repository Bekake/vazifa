<template>
<swiper :watchSlidesProgress="true" :slidesPerView="3" class="mySwiper">
    <swiper-slide v-for="(item, index) in dives" :key="index">
        <div class="chat">
            <div>
                <img :src="item.myimg" alt="Person">
                <div>
                    <p>{{ item.myname }}</p>
                    <p>{{ item.active }}</p>
                </div>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum ut ullam ratione quasi dolore possimus quod maiores, eum aut accusamus quibusdam rerum.</p>
        </div>
    </swiper-slide>
</swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
export default {
    components: {
    Swiper,
    SwiperSlide,
    },
    data() {
      return{
        dives: [
          {myimg: require("@/assets/people/bir.jpg"), myname: "Jons Sena", active: "2h ago"},
          {myimg: require("@/assets/people/ikki.jpg"), myname: "Kevin Hunt", active: "4h ago"},
          {myimg: require("@/assets/people/yetti.jpg"), myname: "Jang sef", active: "7h ago"},
          {myimg: require("@/assets/people/uch.jpg"), myname: "Isabella", active: "10h ago"},
          {myimg: require("@/assets/people/tort.jpg"), myname: "Jang sef", active: "7h ago"},
          {myimg: require("@/assets/people/besh.jpg"), myname: "Jang sef", active: "7h ago"},
          {myimg: require("@/assets/people/olti.jpg"), myname: "Jang sef", active: "7h ago"},
        ]
      }
    }
};
</script>
<style scoped>
.chat>div>div>p:nth-child(2){
  font-size: 0.8rem;
  text-align: left;
  opacity: 0.7;
}
.chat>p{
  line-height: 1.3rem;
}
.chat{
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.chat>div{
  display: flex;
  gap: 1.4rem;
}
.chat img{
  width: 2.5rem;
  border-radius: 12px;
}
.swiper {
  width: 100%;
  margin-top: 1rem
}
.swiper-slide {
  height: 200px;
  padding:0 1rem 0 0;
}

</style>