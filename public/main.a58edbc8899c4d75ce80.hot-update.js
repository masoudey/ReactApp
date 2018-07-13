webpackHotUpdate("main",{

/***/ "./src/containers/SinglePost.js":
/*!**************************************!*\
  !*** ./src/containers/SinglePost.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SinglePost = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _postActions = __webpack_require__(/*! ../actions/postActions */ "./src/actions/postActions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SinglePost = function (_Component) {
    _inherits(SinglePost, _Component);

    function SinglePost(props) {
        _classCallCheck(this, SinglePost);

        return _possibleConstructorReturn(this, (SinglePost.__proto__ || Object.getPrototypeOf(SinglePost)).call(this, props));
    }

    _createClass(SinglePost, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var postid = this.props.match.params.postid;

            console.log("dfdgdfgd", postid);
            var dispatch = this.props.dispatch;

            dispatch((0, _postActions.fetchSinglePost)(postid));
        }
    }, {
        key: "render",
        value: function render() {
            var post = this.props.posts;
            return _react2.default.createElement(
                "div",
                { id: "post1", className: "post1 intro-effect-fadeout scrollanim" },
                _react2.default.createElement(
                    "header",
                    { className: "header" },
                    _react2.default.createElement(
                        "div",
                        { className: "bg-img" },
                        _react2.default.createElement("img", { src: "/" + post.img, alt: "Background Image" })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        _react2.default.createElement(
                            "h1",
                            null,
                            post.title,
                            "hh"
                        ),
                        _react2.default.createElement(
                            "p",
                            { className: "subline" },
                            post.desc,
                            " ."
                        ),
                        _react2.default.createElement(
                            "p",
                            null,
                            "by ",
                            _react2.default.createElement(
                                "strong",
                                null,
                                "1"
                            ),
                            " \u2014 Posted on ",
                            _react2.default.createElement(
                                "strong",
                                null,
                                post.date
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "button",
                        { className: "trigger" },
                        _react2.default.createElement("span", null)
                    )
                ),
                _react2.default.createElement(
                    "article",
                    { className: "content" },
                    _react2.default.createElement(
                        "div",
                        { className: "container" },
                        _react2.default.createElement(
                            "div",
                            { className: "row" },
                            _react2.default.createElement(
                                "p",
                                null,
                                post.content
                            )
                        )
                    )
                )
            );
        }
    }]);

    return SinglePost;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    var posts = state.posts.posts;

    return {
        posts: posts
    };
};
var connectedSinglePost = (0, _reactRedux.connect)(mapStateToProps)(SinglePost);

exports.SinglePost = connectedSinglePost;

/***/ })

})
//# sourceMappingURL=main.a58edbc8899c4d75ce80.hot-update.js.map