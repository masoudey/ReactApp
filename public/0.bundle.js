(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

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
                            _react2.default.createElement(
                                "div",
                                { className: "Slide1" },
                                _react2.default.createElement(
                                    "h1",
                                    null,
                                    "Web Design"
                                )
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "Slide2" },
                                _react2.default.createElement(
                                    "h1",
                                    null,
                                    "SEO"
                                )
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "Slide3" },
                                _react2.default.createElement(
                                    "h1",
                                    null,
                                    "Responsive Design"
                                )
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "Slide4" },
                                _react2.default.createElement(
                                    "h1",
                                    null,
                                    "Responsive Design"
                                )
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "Slide5" },
                                _react2.default.createElement(
                                    "h1",
                                    null,
                                    "Responsive Design"
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    "section",
                    { className: "intro-block", id: "intro-block" },
                    _react2.default.createElement(
                        "div",
                        { className: "container" },
                        _react2.default.createElement(
                            "div",
                            { className: "row" },
                            _react2.default.createElement(
                                "div",
                                { className: "col-4" },
                                _react2.default.createElement("img", { className: "img-responsive tpad", src: "images/logo.png" })
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "col-8" },
                                _react2.default.createElement(
                                    "h1",
                                    null,
                                    "Porfolio ",
                                    _react2.default.createElement(
                                        "span",
                                        { className: "text-default" },
                                        "\xBB Everything you want"
                                    )
                                ),
                                _react2.default.createElement(
                                    "p",
                                    { className: "lead" },
                                    "Masoud Design is a unique Web designed to help people all over the world to Have their own website, And connect to the world"
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    "svg",
                    { id: "bigTriangleShadow", xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "100%", height: "100", viewBox: "0 0 100 100", preserveAspectRatio: "none" },
                    _react2.default.createElement("path", { id: "trianglePath1", d: "M0 0 L50 100 L100 0 Z" })
                ),
                _react2.default.createElement(
                    "section",
                    { className: "services-block", id: "services-block" },
                    _react2.default.createElement(
                        "div",
                        { className: "section-overlay" },
                        _react2.default.createElement(
                            "div",
                            { className: "container" },
                            _react2.default.createElement(
                                "div",
                                { className: "row" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "section-title" },
                                    _react2.default.createElement(
                                        "h2",
                                        null,
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "Services"
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "row" },
                                    _react2.default.createElement(
                                        "div",
                                        { className: " col-sm-6 col-md-3" },
                                        _react2.default.createElement(
                                            "div",
                                            { className: "service serviceBlock web" },
                                            _react2.default.createElement(
                                                "div",
                                                { className: "view" },
                                                _react2.default.createElement(
                                                    "div",
                                                    { className: "service-icon" },
                                                    _react2.default.createElement("span", { className: "icon-laptop" })
                                                ),
                                                _react2.default.createElement(
                                                    "h2",
                                                    null,
                                                    "Responsive Web Design"
                                                ),
                                                _react2.default.createElement(
                                                    "p",
                                                    { className: "lead" },
                                                    "We offer each and every client one-on-one customer service directly with the web designer that designed their project. With our highly skilled team of website designers and website developers we can create exactly what you need."
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        { className: " col-sm-6 col-md-3" },
                                        _react2.default.createElement(
                                            "div",
                                            { className: "service serviceBlock mark" },
                                            _react2.default.createElement(
                                                "div",
                                                { className: "view" },
                                                _react2.default.createElement(
                                                    "div",
                                                    { className: "service-icon" },
                                                    _react2.default.createElement("span", { className: "icon-mouse" })
                                                ),
                                                _react2.default.createElement(
                                                    "h3",
                                                    null,
                                                    "Pay-per-Click"
                                                ),
                                                _react2.default.createElement(
                                                    "p",
                                                    { className: "lead" },
                                                    "Our PPC services are focused on search, display and mobile network advertising as offered by Google, Bing and others. Our pay-per-click management services also integrate powerful paid search tools to maximize efficiency and ROI."
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        { className: " col-sm-6 col-md-3" },
                                        _react2.default.createElement(
                                            "div",
                                            { className: "service serviceBlock des" },
                                            _react2.default.createElement(
                                                "div",
                                                { className: "view" },
                                                _react2.default.createElement(
                                                    "div",
                                                    { className: "service-icon" },
                                                    _react2.default.createElement("span", { className: "icon-stats" })
                                                ),
                                                _react2.default.createElement(
                                                    "h3",
                                                    null,
                                                    "SEO "
                                                ),
                                                _react2.default.createElement(
                                                    "p",
                                                    { className: "lead" },
                                                    "Search engine optimization or SEO refers to the art and science of tuning your site so that search engines such as Google bring up your site when a potential visitor enters information into their search engine relevant to your site and Its Content."
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        { className: " col-sm-6 col-md-3" },
                                        _react2.default.createElement(
                                            "div",
                                            { className: "service serviceBlock ecom" },
                                            _react2.default.createElement(
                                                "div",
                                                { className: "view" },
                                                _react2.default.createElement(
                                                    "div",
                                                    { className: "service-icon" },
                                                    _react2.default.createElement("span", { className: "icon-cart" })
                                                ),
                                                _react2.default.createElement(
                                                    "h3",
                                                    null,
                                                    "Ecommerce"
                                                ),
                                                _react2.default.createElement(
                                                    "p",
                                                    { className: "lead" },
                                                    "Effective online shopping experiences, focussed on conversion"
                                                )
                                            )
                                        )
                                    )
                                )
                            )
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

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/swiper.css":
/*!************************!*\
  !*** ./src/swiper.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=0.bundle.js.map