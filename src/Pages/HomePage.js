import React, { Component } from "react";
import Swiper from "react-id-swiper";
import '../swiper.css';
import './home.css';

class HomePage extends Component {

    
    
    render() {
        const params = {
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            },
            spaceBetween: 10,
            loop: true,
            // autoplay: {
            //     delay: 3000,
            //     disableOnInteraction: false
            // },
            // effect: 'coverflow',
          }

        return (
            <div>
                <section class="slider-block">
                    <div class="slider">
                        <Swiper {...params}>
                        <div class="Slide1"></div>
                        <div class="Slide2"></div>
                        <div class="Slide3"></div>
                        <div class="Slide4"></div>
                        <div class="Slide5"></div>
                        </Swiper>
                    </div>
                </section>
            </div>
        )
    }
}

export default HomePage;