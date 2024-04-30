<template>
    <div>
        <vueper-slides :slide-ratio="1 / 4" autoplay>
            <vueper-slide class="slide" v-for="(slide, i) in slides" :image="slide.image" :key="i" />
        </vueper-slides>
    </div>

</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import carrousel1 from '../../../assets/images/carrousel1.jpg'
import carrousel2 from '../../../assets/images/carrousel2.jpg'
export default {
    components: { VueperSlides, VueperSlide },
    name: 'CarouselManual',
    data() {
        return {
          // Faire un background radient aléatoire aux slides
          gradient: this.randomGradient(),
          slides: [
            {
              title: "carrousel1",
              content: "carrousel1-content",
              image: carrousel1
            },
            {
              title: "carrousel2",
              content: "carrousel2-content",
              image: carrousel2
            },
          ]
        }
    },
    methods: {
        // Faire un background radient aléatoire aux slides
        randomGradient() {
            const randomColor = () => Math.floor(Math.random() * 255)
            return `linear-gradient(45deg, rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 1) 0%, rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 1) 100%)`
        },
    }
}
</script>
<style scoped lang="scss">

.slide {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
