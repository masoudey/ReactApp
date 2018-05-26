import React, { Component } from "react";

class Footer extends Component {
    
    render() {
        return (
            <footer class="ftr" id="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-4 from-twitter">
                            <h3>From The Blog</h3>
                            <div class="show-tweet"></div>
                        </div>
                        <div class="col-sm-6 col-md-4 testimonials">
                            <h3>Testimonials</h3>
                            <p> ghjghjghjgj. </p>
                            <div class="test-author">
                                <img src="" alt="" />
                                <p><span>Masoud</span> Inc.</p>
                            </div>
                        </div>
                        
                        <div class="col-sm-6 col-md-4 contact-us">
                            <h3>Contact Us</h3>
                            <form action="" method="post">
                                <input type="text" name="name" class="name" placeholder="Name" />
                                <input type="text" name="email" class="email" placeholder="Email" />
                                <textarea name="message" placeholder="Message"></textarea>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div> 
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="social-links">
                                <a class="facebook"  href="#"><article><span class="icon-facebook"></span></article></a>
                                <a class="twitter"  href="#"><article><span class="icon-twitter"></span></article></a>
                                <a class="tumblr"  href="#"><article><span class="icon-tumblr"></span></article></a>
                                <a class="pinterest"  href="#"><article><span class="icon-pinterest"></span></article></a>
                                <a class="dribbble"  href="#"><article><span class="icon-dribbble"></span></article></a>
                                <a class="googleplus"  href="#"><article><span class="icon-googleplus"></span></article></a>
                                <a class="skype"  href="#"><article><span class="icon-skype"></span></article></a>
                                <a class="youtube"  href="#"><article><span class="icon-youtube"></span></article></a>
                                <a class="git"  href="#"><article><span class="icon-github"></span></article></a>
                                <a class="linkedin"  href="#"><article><span class="icon-linkedin"></span></article></a>
                                <a class="email"  href="#"><article><span class="icon-mail2"></span></article></a>
                            </div>
                        </div>
                    </div> 
                    <div class="row">
                        <div class="col-sm-12 copyright">
                            <p>Copyright &copy; 2018 -   by <a href="#" target="_blank">Masoud Eyvatvandy</a></p>
                        </div>
                    </div> 
                </div> 
                <div class="bi" id="tag"></div>
            </footer>
        )
    }
}

export default Footer;