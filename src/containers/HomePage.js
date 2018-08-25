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
                <section class="intro-block" id="intro-block">
    <div class="container">
        <div class="row">
            <div class="col-4">
                <img class="img-responsive tpad" src="images/logo.png" />
            </div>
            <div class="col-8">
                <h1>Porfolio <span class="text-default">&raquo; Everything you want</span></h1>
                <p class="lead">Masoud Design is a unique Web designed to help people all over the world to Have their own website, And connect to the world</p>
            </div>
        </div>
    </div>
</section>
<svg id="bigTriangleShadow" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path id="trianglePath1" d="M0 0 L50 100 L100 0 Z" />
</svg>

<section class="services-block" id="services-block">
    <div class="section-overlay">
    <div class="container">
        <div class="row">
            <div class="section-title">

                <h2><span>Services</span></h2>

            </div>
            <div class="row">
            <div class=" col-sm-6 col-md-3">
                <div class="service serviceBlock web">
                    <div class="view">
                        <div class="service-icon">
                            <span class="icon-laptop"></span>
                        </div>
                        <h2>Responsive Web Design</h2>
                        <p class="lead">We offer each and every client one-on-one customer service directly with the web designer that designed their project. With our highly skilled team of website designers and website developers we can create exactly what you need.</p>
                    </div>
                </div>
            </div>
            <div class=" col-sm-6 col-md-3">
                <div class="service serviceBlock mark">
                    <div class="view">
                    <div class="service-icon">
                        <span class="icon-mouse"></span>
                    </div>
                    <h3>Pay-per-Click</h3>
                    <p class="lead">Our PPC services are focused on search, display and mobile network advertising as offered by Google, Bing and others. Our pay-per-click management services also integrate powerful paid search tools to maximize efficiency and ROI.</p>
                        </div>
                </div>
            </div>
            <div class=" col-sm-6 col-md-3">
                <div class="service serviceBlock des">
                    <div class="view">
                    <div class="service-icon">
                        <span class="icon-stats"></span>
                    </div>
                    <h3>SEO </h3>
                    <p class="lead">Search engine optimization or SEO refers to the art and science of tuning your site so that search engines such as Google bring up your site when a potential visitor enters information into their search engine relevant to your site and Its Content.</p>
                        </div>
                </div>
            </div>
            <div class=" col-sm-6 col-md-3">
                <div class="service serviceBlock ecom">
                    <div class="view">
                    <div class="service-icon">
                        <span class="icon-cart"></span>
                    </div>
                    <h3>Ecommerce</h3>
                    <p class="lead">Effective online shopping experiences, focussed on conversion</p>
                        </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
</section>
            </div>
        )
    }
}

export default HomePage;