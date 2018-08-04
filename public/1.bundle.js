(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/css-loader/index.js!./src/containers/works.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader!./src/containers/works.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".works {\r\n    background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.work-page {\r\n    /* margin-top: 100px */\r\n}\r\n\r\n.work-block {\r\n    color: chocolate;\r\n    text-align: center;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./src/Components/workthumbnail.js":
/*!*****************************************!*\
  !*** ./src/Components/workthumbnail.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var workThumb = function workThumb(props) {
    var work = props.work;
    return _react2.default.createElement(
        "li",
        { className: "shown" },
        _react2.default.createElement(
            "div",
            { className: " grid-post" },
            _react2.default.createElement(
                "figure",
                { className: "effect-layla layla" },
                _react2.default.createElement("img", { src: "/" + work.img, alt: "img03" }),
                _react2.default.createElement(
                    "figcaption",
                    { className: "layla" },
                    _react2.default.createElement(
                        "h2",
                        null,
                        work.title
                    ),
                    _react2.default.createElement(
                        "p",
                        { className: "desc" },
                        work.desc
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { state: work, to: "/blog/" + work.id },
                            _react2.default.createElement("i", { className: "icon-link" })
                        )
                    )
                )
            )
        )
    );
};

exports.default = workThumb;

/***/ }),

/***/ "./src/containers/WorksPage.js":
/*!*************************************!*\
  !*** ./src/containers/WorksPage.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./works.css */ "./src/containers/works.css");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _actions = __webpack_require__(/*! ../actions */ "./src/actions/index.js");

var _List = __webpack_require__(/*! ../Components/List */ "./src/Components/List.js");

var _List2 = _interopRequireDefault(_List);

var _workthumbnail = __webpack_require__(/*! ../Components/workthumbnail */ "./src/Components/workthumbnail.js");

var _workthumbnail2 = _interopRequireDefault(_workthumbnail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var loadData = function loadData(props) {
    props.loadPosts();
};

var WorksPage = function (_Component) {
    _inherits(WorksPage, _Component);

    function WorksPage(props) {
        _classCallCheck(this, WorksPage);

        var _this = _possibleConstructorReturn(this, (WorksPage.__proto__ || Object.getPrototypeOf(WorksPage)).call(this, props));

        _this.state = {
            scrollanim: false
        };
        return _this;
    }

    _createClass(WorksPage, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            if (!(typeof window === 'undefined')) {
                window.addEventListener('scroll', this.handleScroll.bind(this));
            }
            console.log(this.state.scrollanim);
            console.log('did mount');
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {

            loadData(this.props);
            if (!(typeof window === "undefined")) {
                window.removeEventListener('scroll', this.handleScroll.bind(this));
            }
            console.log("will mount");
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps() {
            console.log("will recevie props");
        }
    }, {
        key: "handleScroll",
        value: function handleScroll(event) {
            if (window.scrollY > 1 && this.state.scrollanim === false) {
                this.setState({ scrollanim: true });
            } else if (window.scrollY <= 1 && this.state.scrollanim === true) {
                this.setState({ scrollanim: false });
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            console.log('will unmount');
        }
    }, {
        key: "renderPost",
        value: function renderPost(work) {
            return _react2.default.createElement(_workthumbnail2.default, { work: work, key: work.id });
        }
    }, {
        key: "render",
        value: function render() {
            var works = Object.values(this.props.posts);
            var scrolling = this.state.scrollanim ? 'modify' : '';

            return _react2.default.createElement(
                "div",
                { id: "works", className: "blog intro-effect-sliced  " + scrolling },
                _react2.default.createElement(
                    "section",
                    { id: "header-block", className: "header " },
                    _react2.default.createElement(
                        "div",
                        { className: "bg-img" },
                        _react2.default.createElement("img", { src: "/works.jpg", alt: "Background Image" })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        _react2.default.createElement(
                            "h1",
                            null,
                            "Works"
                        )
                    ),
                    _react2.default.createElement(
                        "p",
                        { className: "subline" },
                        "Inspiration for Article Intro Effects"
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "bg-img" },
                        _react2.default.createElement("img", { src: "/works.jpg", alt: "Background Image" })
                    )
                ),
                _react2.default.createElement(
                    "section",
                    { id: "posts-block", className: "works content  blog-thumb" },
                    _react2.default.createElement(
                        "div",
                        { className: "container" },
                        _react2.default.createElement(
                            "div",
                            { className: "row" },
                            _react2.default.createElement(
                                "ul",
                                { id: "grid", className: "grid effect-5" },
                                _react2.default.createElement(_List2.default, { renderItem: this.renderPost,
                                    items: works,
                                    loadingText: 'Loading Posts'
                                })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return WorksPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    var _state$entities = state.entities,
        users = _state$entities.users,
        posts = _state$entities.posts;

    return {
        posts: posts,
        users: users
    };
};
var connectedBlog = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, { loadPosts: _actions.loadPosts })(WorksPage));
exports.default = connectedBlog;

/***/ }),

/***/ "./src/containers/works.css":
/*!**********************************!*\
  !*** ./src/containers/works.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./works.css */ "./node_modules/css-loader/index.js!./src/containers/works.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);
//# sourceMappingURL=1.bundle.js.map