(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/Components/List.js":
/*!********************************!*\
  !*** ./src/Components/List.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactSpinners = __webpack_require__(/*! react-spinners */ "./node_modules/react-spinners/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_Component) {
    _inherits(List, _Component);

    function List() {
        _classCallCheck(this, List);

        return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
    }

    _createClass(List, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                fetching = _props.fetching,
                items = _props.items,
                renderItem = _props.renderItem,
                loadingText = _props.loadingText;


            var isEmpty = Object.keys(items).length === 0;
            console.log(items, isEmpty);
            if (isEmpty && fetching) {
                return _react2.default.createElement(_reactSpinners.GridLoader, { color: '#123abc', loading: fetching });
            }

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                items.map(renderItem)
            );
        }
    }]);

    return List;
}(_react.Component);

List.defaultProps = {
    fetching: true,
    loadingText: 'Loading.....'
};
exports.default = List;

/***/ }),

/***/ "./src/Components/postthumbnail.js":
/*!*****************************************!*\
  !*** ./src/Components/postthumbnail.js ***!
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

var PostThumb = function PostThumb(props) {
    var post = props.post;
    return _react2.default.createElement(
        "li",
        { className: "shown" },
        _react2.default.createElement(
            "div",
            { className: " grid-post" },
            _react2.default.createElement(
                "figure",
                { className: "effect-phoebe phoebe" },
                _react2.default.createElement("img", { src: "/" + post.img, alt: "img03" }),
                _react2.default.createElement(
                    "figcaption",
                    { className: "phoebe" },
                    _react2.default.createElement(
                        "h2",
                        null,
                        post.title
                    ),
                    _react2.default.createElement(
                        "p",
                        { className: "desc" },
                        post.desc
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        _react2.default.createElement(
                            "a",
                            { href: "#" },
                            _react2.default.createElement("i", { className: "icon-user" })
                        ),
                        _react2.default.createElement(
                            "a",
                            { href: "#" },
                            _react2.default.createElement("i", { className: "icon-heart" })
                        ),
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { state: post, to: "/blog/" + post.id },
                            _react2.default.createElement("i", { className: "icon-link" })
                        )
                    )
                )
            )
        )
    );
};

exports.default = PostThumb;

/***/ }),

/***/ "./src/containers/BlogPage.js":
/*!************************************!*\
  !*** ./src/containers/BlogPage.js ***!
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

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _actions = __webpack_require__(/*! ../actions */ "./src/actions/index.js");

var _postthumbnail = __webpack_require__(/*! ../Components/postthumbnail */ "./src/Components/postthumbnail.js");

var _postthumbnail2 = _interopRequireDefault(_postthumbnail);

__webpack_require__(/*! ./blog.css */ "./src/containers/blog.css");

var _List = __webpack_require__(/*! ../Components/List */ "./src/Components/List.js");

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { fetchAllPosts } from "../actions/postActions";


var loadData = function loadData(props) {
    props.loadPosts();
};

var BlogPage = function (_Component) {
    _inherits(BlogPage, _Component);

    function BlogPage(props) {
        _classCallCheck(this, BlogPage);

        var _this = _possibleConstructorReturn(this, (BlogPage.__proto__ || Object.getPrototypeOf(BlogPage)).call(this, props));

        _this.state = {
            scrollanim: false,
            posts: null
        };
        return _this;
    }

    _createClass(BlogPage, [{
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
            if (!(typeof window === "undefined")) {
                window.removeEventListener('scroll', this.handleScroll.bind(this));
            }
        }
    }, {
        key: "handleFilter",
        value: function handleFilter(event) {
            this.setState({ posts: Object.values(this.props.posts).filter(function (post) {
                    return post.title.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1;
                }) });
        }
    }, {
        key: "renderPost",
        value: function renderPost(post) {
            return _react2.default.createElement(_postthumbnail2.default, { post: post, key: post.id });
        }
    }, {
        key: "render",
        value: function render() {
            var posts = Object.values(this.props.posts);
            var scrolling = this.state.scrollanim ? 'modify' : '';
            console.log(this.state.posts);
            return _react2.default.createElement(
                "div",
                { id: "blog", className: "blog intro-effect-jam3  " + scrolling },
                _react2.default.createElement(
                    "section",
                    { id: "header-block", className: "header " },
                    _react2.default.createElement(
                        "div",
                        { className: " wedget-post" },
                        _react2.default.createElement(
                            "div",
                            { className: "bg-img" },
                            _react2.default.createElement("img", { src: "/blog.jpg", alt: "Background Image" })
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "title" },
                            _react2.default.createElement(
                                "h1",
                                null,
                                "Posts"
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    "section",
                    { id: "posts-block", className: "posts content  blog-thumb" },
                    _react2.default.createElement(
                        "div",
                        { className: "container" },
                        _react2.default.createElement(
                            "div",
                            { className: "row" },
                            _react2.default.createElement(
                                "div",
                                null,
                                _react2.default.createElement("input", { type: "text", onChange: this.handleFilter.bind(this), placeholder: "Search", name: "" })
                            ),
                            _react2.default.createElement(
                                "ul",
                                { id: "grid", className: "grid effect-5" },
                                _react2.default.createElement(_List2.default, { renderItem: this.renderPost,
                                    items: this.state.posts || posts,
                                    loadingText: 'Loading Posts'
                                })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return BlogPage;
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
var connectedBlog = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, { loadPosts: _actions.loadPosts })(BlogPage));
exports.default = connectedBlog;

/***/ }),

/***/ "./src/containers/blog.css":
/*!*********************************!*\
  !*** ./src/containers/blog.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=2.bundle.js.map