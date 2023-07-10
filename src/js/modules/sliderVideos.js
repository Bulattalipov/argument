import Swiper, {} from "swiper/swiper-bundle";
  
export default function() {
    if (window.matchMedia('(max-width: 1200px)').matches) {
        const sliderVideos = document.querySelectorAll('.swiper');
        
        sliderVideos.forEach(slider => {

            if (!slider) return;

            const swiper = new Swiper(slider, {
                slidesPerView: 1.2,
                spaceBetween: 24,
                breakpoints: {
                    768: {
                        slidesPerView: 1.2,
                        spaceBetween: 34,
                    },
                },
            })
        })
    }
}
  