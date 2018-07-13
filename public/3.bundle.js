(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/css-loader/index.js!./src/containers/home.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader!./src/containers/home.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home {\n    background-color: rgb(33, 139, 172);\n}\n.slider-block{\n    position: relative;\n    height: 650px;\n   max-width: 1020px;\n}\n.swiper-container {\n    margin:0 auto;\n    position:relative;\n    overflow:hidden;\n    -webkit-backface-visibility:hidden;\n    -moz-backface-visibility:hidden;\n    -ms-backface-visibility:hidden;\n    -o-backface-visibility:hidden;\n    backface-visibility:hidden;\n    /* Fix of Webkit flickering */\n    z-index:1;\n}\n.swiper-wrapper {\n    position:relative;\n    width:100%;\n    height: 100%;\n    -webkit-transition-property:-webkit-transform, left, top;\n    -webkit-transition-duration:0s;\n    -webkit-transform:translate3d(0px,0,0);\n    -webkit-transition-timing-function:ease;\n\n    -moz-transition-property:-moz-transform, left, top;\n    -moz-transition-duration:0s;\n    -moz-transform:translate3d(0px,0,0);\n    -moz-transition-timing-function:ease;\n\n    -o-transition-property:-o-transform, left, top;\n    -o-transition-duration:0s;\n    -o-transform:translate3d(0px,0,0);\n    -o-transition-timing-function:ease;\n    -o-transform:translate(0px,0px);\n\n    -ms-transition-property:-ms-transform, left, top;\n    -ms-transition-duration:0s;\n    -ms-transform:translate3d(0px,0,0);\n    -ms-transition-timing-function:ease;\n\n    transition-property:transform, left, top;\n    transition-duration:0s;\n    transform:translate3d(0px,0,0);\n    transition-timing-function:ease;\n}\n.swiper-free-mode > .swiper-wrapper {\n    -webkit-transition-timing-function: ease-out;\n    -moz-transition-timing-function: ease-out;\n    -ms-transition-timing-function: ease-out;\n    -o-transition-timing-function: ease-out;\n    transition-timing-function: ease-out;\n    margin: 0 auto;\n}\n.slide {\n    float: left;\n}\n\n\n\n.slider {\n    position: fixed;\n    background: #545454;\n    margin: 0 auto;\n    width: 100%;\n    height: 100%;\n\n}\n.about .slider{position: relative !important;}\n.slider-container {\n    width: 100%;\n    height: 400px;\n    background: #545454;\n    -webkit-perspective: 1200px;\n    -moz-perspective: 1200px;\n    -ms-perspective: 1200px;\n    perspective: 1200px;\n}\n.slider-wrapper, .slide {\n    -webkit-transform-style: preserve-3d;\n    -moz-transform-style: preserve-3d;\n    -ms-transform-style: preserve-3d;\n    transform-style: preserve-3d;\n}\n\n.swiper-slide {\n    position: relative;\n    height: 650px;\n    width: 800px ;\n    margin-top: auto;\n    margin-bottom: auto;\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n@media(max-width: 768px){\n    .swiper-slide {\n        width: 100%;\n        height: 100%;\n    }\n}\n\n.slide .slidertitle {\n    display: none;\n    position: absolute;\n    line-height: 30px;\n    font-weight: 100;\n    right: 15%;\n    bottom: 20px;\n    /*top:-300px;*/\n    left: 15%;\n    z-index: 10;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    color: #fff;\n    text-align: left;\n    text-shadow: 0 1px 2px rgba(0,0,0,0.6);\n    /*-webkit-transition: all 0.9s ease-in-out;*/\n    /*-moz-transition: all 0.9s ease-in-out;*/\n    /*-o-transition: all 0.9s ease-in-out;*/\n    /*transition: all 0.9s ease-in-out;*/\n\n}\n.active-slide > .slidertitle{\n    display: block;\n}\n@media(min-width: 768px){\n    .slide .slidertitle {\n        right: 20%;\n        left: 16%;\n        padding-bottom: 70px;\n    }\n}\n.slide .slidertitle h1 {\n    font-family: 'customfont';\n    /*font-size: 25px;*/\n    /*line-height: 70px;*/\n\n}\n.slide .slidertitle p {\n    font-size: 15px;\n\n}\n\n.Slide1{background-image: url(" + escape(__webpack_require__(/*! ../imgs/1.jpg */ "./src/imgs/1.jpg")) + ")}\n.Slide2{background-image: url(" + escape(__webpack_require__(/*! ../imgs/2.jpg */ "./src/imgs/2.jpg")) + ")}\n.Slide3{background-image: url(" + escape(__webpack_require__(/*! ../imgs/3.jpg */ "./src/imgs/3.jpg")) + ")}\n.Slide4{background-image: url(" + escape(__webpack_require__(/*! ../imgs/4.jpg */ "./src/imgs/4.jpg")) + ")}\n.Slide5{background-image: url(" + escape(__webpack_require__(/*! ../imgs/5.jpg */ "./src/imgs/5.jpg")) + ")}\n\n\n@media(min-width: 768px){\n    .slider > .slider-container{\n        height: 650px;\n    }\n}\n.slider .prev {\n    background-image: none;\n    position: absolute;\n    left: 20px;\n    top: 70%;\n    margin-top: -15px;\n    width: 70px;\n    height: 70px;\n    z-index: 10;\n    margin-left: 10px;\n}\n.slider .next {\n    background-image: none;\n    position: absolute;\n    right: 20px;\n    top: 70%;\n    margin-top: -15px;\n    width: 70px;\n    height: 70px;\n    z-index: 10;\n    margin-right: 10px;\n}\n\n/*--------------------*/\n/* Circle slide */\n/*--------------------*/\n\n.slider a.next a,.slider a.prev a {\n    margin: 0 20px;\n}\n\n.slider .icon-wrap {\n    position: relative;\n    z-index: 100;\n    display: block;\n    padding: 30px;\n}\n\n.slider svg.icon {\n    fill: #fff;\n    -webkit-transition: fill 0.3s;\n    transition: fill 0.3s;\n}\n\n.slider a.prev div,.slider a.next div {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    overflow: hidden;\n    background-color: #566473;\n    border-radius: 50%;\n    -webkit-transform: scale(0.7);\n    transform: scale(0.7);\n    opacity: 0;\n    -webkit-transition: -webkit-transform 0.3s, opacity 0.3s, background-color 0.1s 0s;\n    transition: transform 0.3s, opacity 0.3s, background-color 0.1s 0s;\n}\n\n\n\n.slider a.prev img {\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%);\n    display: block;\n    border-radius: 50%;\n    -webkit-transition: -webkit-transform 0.3s;\n    transition: transform 0.3s;\n}\n\n.slider a.next img {\n    -webkit-transform: translateX(100%);\n    transform: translateX(100%);\n    display: block;\n    border-radius: 50%;\n    -webkit-transition: -webkit-transform 0.3s;\n    transition: transform 0.3s;\n}\n\n.slider a.next:hover div,.slider a.prev:hover div {\n    opacity: 1;\n    background-color: transparent; /* Trick to hide the visible border of image */\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-transition: -webkit-transform 0.3s, opacity 0.3s, background-color 0.1s 0.2s;\n    transition: transform 0.3s, opacity 0.3s, background-color 0.1s 0.2s;\n}\n\n.slider a.prev:hover img,.slider a.next:hover img {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n}\n\n/*------end circle slide----*/\n@keyframes flipp-flash {\n    0% {\n        left: 0;\n        top: 0;\n        width: 1em;\n        height: 1em;\n        border-width: 0.05em;\n        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n        opacity: 1;\n    }\n    100% {\n        left: -1.5em;\n        top: -1.5em;\n        width: 4em;\n        height: 4em;\n        border-width: 0.25em;\n        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n        opacity: 0;\n    }\n}@-moz-keyframes flipp-flash {\n     0% {\n         left: 0;\n         top: 0;\n         width: 1em;\n         height: 1em;\n         border-width: 0.05em;\n         filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n         opacity: 1;\n     }\n     100% {\n         left: -1.5em;\n         top: -1.5em;\n         width: 4em;\n         height: 4em;\n         border-width: 0.25em;\n         filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n         opacity: 0;\n     }\n }@-webkit-keyframes flipp-flash {\n      0% {\n          left: 0;\n          top: 0;\n          width: 1em;\n          height: 1em;\n          border-width: 0.05em;\n          filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n          opacity: 1;\n      }\n      100% {\n          left: -1.5em;\n          top: -1.5em;\n          width: 4em;\n          height: 4em;\n          border-width: 0.25em;\n          filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n          opacity: 0;\n      }\n  }\n@keyframes flipp-flash-in {\n    0% {\n        background-color: #fffff9;\n    }\n    50% {\n        background-color: #ffcf57;\n        transform: scale(1.5);\n        -webkit-transform: scale(1.5);\n        -moz-transform: scale(1.5);\n        -ms-transform: scale(1.5);\n        -o-transform: scale(1.5);\n    }\n    100% {\n        background-color: #f0ab00;\n    }\n}@-moz-keyframes flipp-flash-in {\n     0% {\n         background-color: #fffff9;\n     }\n     50% {\n         background-color: #ffcf57;\n         transform: scale(1.5);\n         -webkit-transform: scale(1.5);\n         -moz-transform: scale(1.5);\n         -ms-transform: scale(1.5);\n         -o-transform: scale(1.5);\n     }\n     100% {\n         background-color: #f0ab00;\n     }\n }@-webkit-keyframes flipp-flash-in {\n      0% {\n          background-color: #fffff9;\n      }\n      50% {\n          background-color: #ffcf57;\n          transform: scale(1.5);\n          -webkit-transform: scale(1.5);\n          -moz-transform: scale(1.5);\n          -ms-transform: scale(1.5);\n          -o-transform: scale(1.5);\n      }\n      100% {\n          background-color: #f0ab00;\n      }\n  }\n@keyframes flipp-pulse {\n    0% {\n        transform: scale(0.9);\n    }\n    40% {\n        transform: scale(1.25);\n    }\n    60% {\n        transform: scale(1.25);\n    }\n    100% {\n        transform: scale(0.9);\n    }\n}\n@-webkit-keyframes -webkit-flipp-pulse {\n     0% {\n         -webkit-transform: scale(0.9);\n     }\n     40% {\n         -webkit-transform: scale(1.25);\n     }\n     60% {\n         -webkit-transform: scale(1.25);\n     }\n     100% {\n         -webkit-transform: scale(0.9);\n     }\n }\n @-moz-keyframes -moz-flipp-pulse {\n      0% {\n          -moz-transform: scale(0.9);\n      }\n      40% {\n          -moz-transform: scale(1.25);\n      }\n      60% {\n          -moz-transform: scale(1.25);\n      }\n      100% {\n          -moz-transform: scale(0.9);\n      }\n  }\n.swiper-pagination {\n    position: absolute;\n    left: 0;\n    text-align: center;\n    bottom:10px;\n    width: 100%;\n    z-index: 10;\n}\n.swiper-pagination .swiper-pagination-bullet {\n    display: inline-block;\n    width: 15px;\n    height: 15px;\n    margin: 2px;\n    text-indent: -999px;\n    cursor: pointer;\n    border: none;\n    border-radius: 100%;\n    background-color: #fffff9;\n    z-index: 2;\n}\n\n.swiper-pagination .swiper-pagination-bullet-active {\n    width: 16px;\n    height: 16px;\n    margin: 2px;\n    background-color: #f0ab00;\n    z-index: 1;\n    animation-name: flipp-flash-in, flipp-pulse;\n    animation-duration: 500ms, 3s;\n    animation-iteration-count: 1, infinite;\n    animation-timing-function: ease-out, ease-in-out;\n    -webkit-animation-name: flipp-flash-in, -webkit-flipp-pulse;\n    -webkit-animation-duration: 500ms, 3s;\n    -webkit-animation-iteration-count: 1, infinite;\n    -webkit-animation-timing-function: ease-out, ease-in-out;\n    -moz-animation-name: flipp-flash-in, -moz-flipp-pulse;\n    -moz-animation-duration: 500ms, 3s;\n    -moz-animation-iteration-count: 1, infinite;\n    -moz-animation-timing-function: ease-out, ease-in-out;\n    -ms-animation-name: flipp-flash-in, -ms-flipp-pulse;\n    -ms-animation-duration: 500ms, 3s;\n    -ms-animation-iteration-count: 1, infinite;\n    -ms-animation-timing-function: ease-out, ease-in-out;\n    -o-animation-name: flipp-flash-in, -o-flipp-pulse;\n    -o-animation-duration: 500ms, 3s;\n    -o-animation-iteration-count: 1, infinite;\n    -o-animation-timing-function: ease-out, ease-in-out;\n}\n.swiper-pagination .swiper-pagination-bullet-active:before, .swiper-pagination .swiper-pagination-bullet-active:after {\n    content: '';\n    width: 100%;\n    height: 100%;\n    color: #f0ab00;\n    border: 1px solid;\n    display: block;\n    position: absolute;\n    border-radius: 50%;\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0;\n    animation-name: flipp-flash;\n    animation-duration: 500ms;\n    animation-iteration-count: 1;\n    animation-timing-function: ease-out;\n    animation-delay: 250ms;\n    -webkit-animation-name: flipp-flash;\n    -webkit-animation-duration: 500ms;\n    -webkit-animation-iteration-count: 1;\n    -webkit-animation-timing-function: ease-out;\n    -webkit-animation-delay: 250ms;\n    -moz-animation-name: flipp-flash;\n    -moz-animation-duration: 500ms;\n    -moz-animation-iteration-count: 1;\n    -moz-animation-timing-function: ease-out;\n    -moz-animation-delay: 250ms;\n    -ms-animation-name: flipp-flash;\n    -ms-animation-duration: 500ms;\n    -ms-animation-iteration-count: 1;\n    -ms-animation-timing-function: ease-out;\n    -ms-animation-delay: 250ms;\n    -o-animation-name: flipp-flash;\n    -o-animation-duration: 500ms;\n    -o-animation-iteration-count: 1;\n    -o-animation-timing-function: ease-out;\n    -o-animation-delay: 250ms;\n}\n.swiper-pagination .swiper-pagination-bullet-active:after {\n    animation-duration: 750ms;\n    animation-delay: 500ms;\n    -webkit-animation-duration: 750ms;\n    -webkit-animation-delay: 500ms;\n    -moz-animation-duration: 750ms;\n    -moz-animation-delay: 500ms;\n    -ms-animation-duration: 750ms;\n    -ms-animation-delay: 500ms;\n    -o-animation-duration: 750ms;\n    -o-animation-delay: 500ms;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/swiper.css":
/*!**************************************************!*\
  !*** ./node_modules/css-loader!./src/swiper.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Swiper 4.1.6\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * http://www.idangero.us/swiper/\n *\n * Copyright 2014-2018 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: February 11, 2018\n */\n .swiper-container {\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n}\n.swiper-container-no-flexbox .swiper-slide {\n  float: left;\n}\n.swiper-container-vertical > .swiper-wrapper {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  -o-transition-property: transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n}\n.swiper-container-android .swiper-slide,\n.swiper-wrapper {\n  -webkit-transform: translate3d(0px, 0, 0);\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-container-multirow > .swiper-wrapper {\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n.swiper-container-free-mode > .swiper-wrapper {\n  -webkit-transition-timing-function: ease-out;\n  -o-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n  margin: 0 auto;\n}\n.swiper-slide {\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  -o-transition-property: transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n}\n.swiper-invisible-blank-slide {\n  visibility: hidden;\n}\n/* Auto Height */\n.swiper-container-autoheight,\n.swiper-container-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-container-autoheight .swiper-wrapper {\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  -webkit-transition-property: height, -webkit-transform;\n  transition-property: height, -webkit-transform;\n  -o-transition-property: transform, height;\n  transition-property: transform, height;\n  transition-property: transform, height, -webkit-transform;\n}\n/* 3D Effects */\n.swiper-container-3d {\n  -webkit-perspective: 1200px;\n  perspective: 1200px;\n}\n.swiper-container-3d .swiper-wrapper,\n.swiper-container-3d .swiper-slide,\n.swiper-container-3d .swiper-slide-shadow-left,\n.swiper-container-3d .swiper-slide-shadow-right,\n.swiper-container-3d .swiper-slide-shadow-top,\n.swiper-container-3d .swiper-slide-shadow-bottom,\n.swiper-container-3d .swiper-cube-shadow {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n}\n.swiper-container-3d .swiper-slide-shadow-left,\n.swiper-container-3d .swiper-slide-shadow-right,\n.swiper-container-3d .swiper-slide-shadow-top,\n.swiper-container-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-container-3d .swiper-slide-shadow-left {\n  background-image: -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));\n  background-image: -webkit-linear-gradient(right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: -o-linear-gradient(right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d .swiper-slide-shadow-right {\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d .swiper-slide-shadow-top {\n  background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));\n  background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: -o-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d .swiper-slide-shadow-bottom {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));\n  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: -o-linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n/* IE10 Windows Phone 8 Fixes */\n.swiper-container-wp8-horizontal,\n.swiper-container-wp8-horizontal > .swiper-wrapper {\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n}\n.swiper-container-wp8-vertical,\n.swiper-container-wp8-vertical > .swiper-wrapper {\n  -ms-touch-action: pan-x;\n  touch-action: pan-x;\n}\n.swiper-button-prev,\n.swiper-button-next {\n  position: absolute;\n  top: 50%;\n  width: 27px;\n  height: 44px;\n  margin-top: -22px;\n  z-index: 10;\n  cursor: pointer;\n  background-size: 27px 44px;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.swiper-button-prev.swiper-button-disabled,\n.swiper-button-next.swiper-button-disabled {\n  opacity: 0.35;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-button-prev,\n.swiper-container-rtl .swiper-button-next {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");\n  left: 10px;\n  right: auto;\n}\n.swiper-button-next,\n.swiper-container-rtl .swiper-button-prev {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");\n  right: 10px;\n  left: auto;\n}\n.swiper-button-prev.swiper-button-white,\n.swiper-container-rtl .swiper-button-next.swiper-button-white {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\");\n}\n.swiper-button-next.swiper-button-white,\n.swiper-container-rtl .swiper-button-prev.swiper-button-white {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\");\n}\n.swiper-button-prev.swiper-button-black,\n.swiper-container-rtl .swiper-button-next.swiper-button-black {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\");\n}\n.swiper-button-next.swiper-button-black,\n.swiper-container-rtl .swiper-button-prev.swiper-button-black {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\");\n}\n.swiper-button-lock {\n  display: none;\n}\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  -webkit-transition: 300ms opacity;\n  -o-transition: 300ms opacity;\n  transition: 300ms opacity;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0;\n}\n/* Common Styles */\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-container-horizontal > .swiper-pagination-bullets {\n  bottom: 10px;\n  left: 0;\n  width: 100%;\n}\n/* Bullets */\n.swiper-pagination-bullets-dynamic {\n  overflow: hidden;\n  font-size: 0;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  -webkit-transform: scale(0.33);\n  -ms-transform: scale(0.33);\n  transform: scale(0.33);\n  position: relative;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n  -webkit-transform: scale(0.66);\n  -ms-transform: scale(0.66);\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {\n  -webkit-transform: scale(0.33);\n  -ms-transform: scale(0.33);\n  transform: scale(0.33);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n  -webkit-transform: scale(0.66);\n  -ms-transform: scale(0.66);\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n  -webkit-transform: scale(0.33);\n  -ms-transform: scale(0.33);\n  transform: scale(0.33);\n}\n.swiper-pagination-bullet {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 100%;\n  background: #000;\n  opacity: 0.2;\n}\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.swiper-pagination-clickable .swiper-pagination-bullet {\n  cursor: pointer;\n}\n.swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #007aff;\n}\n.swiper-container-vertical > .swiper-pagination-bullets {\n  right: 10px;\n  top: 50%;\n  -webkit-transform: translate3d(0px, -50%, 0);\n  transform: translate3d(0px, -50%, 0);\n}\n.swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 6px 0;\n  display: block;\n}\n.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n  width: 8px;\n}\n.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  display: inline-block;\n  -webkit-transition: 200ms top, 200ms -webkit-transform;\n  transition: 200ms top, 200ms -webkit-transform;\n  -o-transition: 200ms transform, 200ms top;\n  transition: 200ms transform, 200ms top;\n  transition: 200ms transform, 200ms top, 200ms -webkit-transform;\n}\n.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 4px;\n}\n.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  -webkit-transition: 200ms left, 200ms -webkit-transform;\n  transition: 200ms left, 200ms -webkit-transform;\n  -o-transition: 200ms transform, 200ms left;\n  transition: 200ms transform, 200ms left;\n  transition: 200ms transform, 200ms left, 200ms -webkit-transform;\n}\n.swiper-container-horizontal.swiper-container-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  -webkit-transition: 200ms right, 200ms -webkit-transform;\n  transition: 200ms right, 200ms -webkit-transform;\n  -o-transition: 200ms transform, 200ms right;\n  transition: 200ms transform, 200ms right;\n  transition: 200ms transform, 200ms right, 200ms -webkit-transform;\n}\n/* Progress */\n.swiper-pagination-progressbar {\n  background: rgba(0, 0, 0, 0.25);\n  position: absolute;\n}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: #007aff;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-transform: scale(0);\n  -ms-transform: scale(0);\n  transform: scale(0);\n  -webkit-transform-origin: left top;\n  -ms-transform-origin: left top;\n  transform-origin: left top;\n}\n.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  -webkit-transform-origin: right top;\n  -ms-transform-origin: right top;\n  transform-origin: right top;\n}\n.swiper-container-horizontal > .swiper-pagination-progressbar {\n  width: 100%;\n  height: 4px;\n  left: 0;\n  top: 0;\n}\n.swiper-container-vertical > .swiper-pagination-progressbar {\n  width: 4px;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.swiper-pagination-white .swiper-pagination-bullet-active {\n  background: #ffffff;\n}\n.swiper-pagination-progressbar.swiper-pagination-white {\n  background: rgba(255, 255, 255, 0.25);\n}\n.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill {\n  background: #ffffff;\n}\n.swiper-pagination-black .swiper-pagination-bullet-active {\n  background: #000000;\n}\n.swiper-pagination-progressbar.swiper-pagination-black {\n  background: rgba(0, 0, 0, 0.25);\n}\n.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill {\n  background: #000000;\n}\n.swiper-pagination-lock {\n  display: none;\n}\n/* Scrollbar */\n.swiper-scrollbar {\n  border-radius: 10px;\n  position: relative;\n  -ms-touch-action: none;\n  background: rgba(0, 0, 0, 0.1);\n}\n.swiper-container-horizontal > .swiper-scrollbar {\n  position: absolute;\n  left: 1%;\n  bottom: 3px;\n  z-index: 50;\n  height: 5px;\n  width: 98%;\n}\n.swiper-container-vertical > .swiper-scrollbar {\n  position: absolute;\n  right: 3px;\n  top: 1%;\n  z-index: 50;\n  width: 5px;\n  height: 98%;\n}\n.swiper-scrollbar-drag {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  left: 0;\n  top: 0;\n}\n.swiper-scrollbar-cursor-drag {\n  cursor: move;\n}\n.swiper-scrollbar-lock {\n  display: none;\n}\n.swiper-zoom-container {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  text-align: center;\n}\n.swiper-zoom-container > img,\n.swiper-zoom-container > svg,\n.swiper-zoom-container > canvas {\n  max-width: 100%;\n  max-height: 100%;\n  -o-object-fit: contain;\n  object-fit: contain;\n}\n.swiper-slide-zoomed {\n  cursor: move;\n}\n/* Preloader */\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  -webkit-transform-origin: 50%;\n  -ms-transform-origin: 50%;\n  transform-origin: 50%;\n  -webkit-animation: swiper-preloader-spin 1s steps(12, end) infinite;\n  animation: swiper-preloader-spin 1s steps(12, end) infinite;\n}\n.swiper-lazy-preloader:after {\n  display: block;\n  content: '';\n  width: 100%;\n  height: 100%;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n  background-position: 50%;\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n.swiper-lazy-preloader-white:after {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n}\n@-webkit-keyframes swiper-preloader-spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes swiper-preloader-spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n/* a11y */\n.swiper-container .swiper-notification {\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  opacity: 0;\n  z-index: -1000;\n}\n.swiper-container-fade.swiper-container-free-mode .swiper-slide {\n  -webkit-transition-timing-function: ease-out;\n  -o-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.swiper-container-fade .swiper-slide {\n  pointer-events: none;\n  -webkit-transition-property: opacity;\n  -o-transition-property: opacity;\n  transition-property: opacity;\n}\n.swiper-container-fade .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-container-fade .swiper-slide-active,\n.swiper-container-fade .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-container-cube {\n  overflow: visible;\n}\n.swiper-container-cube .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1;\n  visibility: hidden;\n  -webkit-transform-origin: 0 0;\n  -ms-transform-origin: 0 0;\n  transform-origin: 0 0;\n  width: 100%;\n  height: 100%;\n}\n.swiper-container-cube .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-container-cube.swiper-container-rtl .swiper-slide {\n  -webkit-transform-origin: 100% 0;\n  -ms-transform-origin: 100% 0;\n  transform-origin: 100% 0;\n}\n.swiper-container-cube .swiper-slide-active,\n.swiper-container-cube .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-container-cube .swiper-slide-active,\n.swiper-container-cube .swiper-slide-next,\n.swiper-container-cube .swiper-slide-prev,\n.swiper-container-cube .swiper-slide-next + .swiper-slide {\n  pointer-events: auto;\n  visibility: visible;\n}\n.swiper-container-cube .swiper-slide-shadow-top,\n.swiper-container-cube .swiper-slide-shadow-bottom,\n.swiper-container-cube .swiper-slide-shadow-left,\n.swiper-container-cube .swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.swiper-container-cube .swiper-cube-shadow {\n  position: absolute;\n  left: 0;\n  bottom: 0px;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0.6;\n  -webkit-filter: blur(50px);\n  filter: blur(50px);\n  z-index: 0;\n}\n.swiper-container-flip {\n  overflow: visible;\n}\n.swiper-container-flip .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1;\n}\n.swiper-container-flip .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-container-flip .swiper-slide-active,\n.swiper-container-flip .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-container-flip .swiper-slide-shadow-top,\n.swiper-container-flip .swiper-slide-shadow-bottom,\n.swiper-container-flip .swiper-slide-shadow-left,\n.swiper-container-flip .swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.swiper-container-coverflow .swiper-wrapper {\n  /* Windows 8 IE 10 fix */\n  -ms-perspective: 1200px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/containers/HomePage.js":
/*!************************************!*\
  !*** ./src/containers/HomePage.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactIdSwiper = __webpack_require__(/*! react-id-swiper */ "./node_modules/react-id-swiper/lib/index.js");

var _reactIdSwiper2 = _interopRequireDefault(_reactIdSwiper);

__webpack_require__(/*! ../swiper.css */ "./src/swiper.css");

__webpack_require__(/*! ./home.css */ "./src/containers/home.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_Component) {
    _inherits(HomePage, _Component);

    function HomePage() {
        _classCallCheck(this, HomePage);

        return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
    }

    _createClass(HomePage, [{
        key: "render",
        value: function render() {
            var params = {
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
                loop: true
                // autoplay: {
                //     delay: 3000,
                //     disableOnInteraction: false
                // },
                // effect: 'coverflow',
            };

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "section",
                    { className: "slider-block" },
                    _react2.default.createElement(
                        "div",
                        { className: "slider" },
                        _react2.default.createElement(
                            _reactIdSwiper2.default,
                            params,
                            _react2.default.createElement("div", { className: "Slide1" }),
                            _react2.default.createElement("div", { className: "Slide2" }),
                            _react2.default.createElement("div", { className: "Slide3" }),
                            _react2.default.createElement("div", { className: "Slide4" }),
                            _react2.default.createElement("div", { className: "Slide5" })
                        )
                    )
                )
            );
        }
    }]);

    return HomePage;
}(_react.Component);

exports.default = HomePage;

/***/ }),

/***/ "./src/containers/home.css":
/*!*********************************!*\
  !*** ./src/containers/home.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./home.css */ "./node_modules/css-loader/index.js!./src/containers/home.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/imgs/1.jpg":
/*!************************!*\
  !*** ./src/imgs/1.jpg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a683fd6000fde83b657768b1f29e1e39.jpg";

/***/ }),

/***/ "./src/imgs/2.jpg":
/*!************************!*\
  !*** ./src/imgs/2.jpg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a214c4a037b11da383252bc963cca231.jpg";

/***/ }),

/***/ "./src/imgs/3.jpg":
/*!************************!*\
  !*** ./src/imgs/3.jpg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8e86c7affc2337de08ab9f208955969a.jpg";

/***/ }),

/***/ "./src/imgs/4.jpg":
/*!************************!*\
  !*** ./src/imgs/4.jpg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "be4402208ac374933c5af46233b3703c.jpg";

/***/ }),

/***/ "./src/imgs/5.jpg":
/*!************************!*\
  !*** ./src/imgs/5.jpg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6486cb2cce334d3d754fbeef5baf09fe.jpg";

/***/ }),

/***/ "./src/swiper.css":
/*!************************!*\
  !*** ./src/swiper.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!./swiper.css */ "./node_modules/css-loader/index.js!./src/swiper.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);
//# sourceMappingURL=3.bundle.js.map