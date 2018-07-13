(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/css-loader/index.js!./src/containers/login.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader!./src/containers/login.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=\"checkbox\"],input[type=\"radio\"]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}input[type=\"search\"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}\nbody {\n    font-family: Helvetica, Arial sans-serif;\n    \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n}\n.login {\nbackground: #1f3346 url(" + escape(__webpack_require__(/*! ../imgs/loginbackground.jpg */ "./src/imgs/loginbackground.jpg")) + ") no-repeat fixed;\n}\nfieldset {\n    border: 0;\n    margin: 0;\n    padding: 0;\n}\n\n.container {\n   /*display: table;\n   width: 100%;\n   height: 100%;\n   position: absolute;\n   overflow: hidden;*/\n   margin-top: 70px;\n  \n}\n\n.sub-container {\n    display: table-cell;\n    vertical-align: middle; \n}\n\n.login-wrapper {\n    background: rgba(0, 92, 123, 0.68);\n    width: 290px;\n    margin:130px auto;\n    padding: 30px 20px;\n    border-radius: 10px;\n}\n\n.logo{\n    width:175px;\n    height:83px;\n    margin:0 auto;\n    background: url(/images/logo.svg) no-repeat;\n\n}\n.title{\n    color: #E56A6A;\n    position: absolute;\n    margin: -26px 86px;\n    font-family: fantasy;\n    font-size: 2em;\n}\n.error{\n    position: relative;\n    color: #843534;\n    margin: 0 auto;\n    width: 22%;\n}\nform {\n    margin-top:30px;\n}\n\ninput[type=\"text\"], input[type=\"password\"] {\n    display: block;\n    width: 240px;\n    border:0;\n    padding:0.8em 0 0.8em 2em;\n    outline: none;\n    background: rgba(255, 255, 255, 0.6);\n    border-radius: 50px;\n    transition: all 1s ease-out;\n}\n\ninput[type=\"text\"]:focus, input[type=\"password\"]:focus {\n    background: rgba(255, 255, 255, 0.9);\n}\ninput[type=\"checkbox\"] {\n    opacity: 0.01;\n    position: absolute;\n}\ninput[type=\"checkbox\"] + label {\n    position: relative;\n    padding-left: 36px;\n    font-size: 0.9em;\n    font-weight: normal;\n    line-height: 16px;\n    opacity: 0.7;\n    text-transform: uppercase;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n}\ninput[type=\"checkbox\"] + label:before,\ninput[type=\"checkbox\"] + label:after {\n    content: \"\";\n    position: absolute;\n    display: block;\n    height: 16px;\n    -webkit-border-radius: 30px;\n    -moz-border-radius: 30px;\n    border-radius: 30px;\n}\ninput[type=\"checkbox\"] + label:before {\n    left: 0;\n    top: -2px;\n    width: 30px;\n    background: rgba(0,0,0,0.3);\n    -webkit-box-shadow: inset 1px 1px 1px 1px rgba(0,0,0,0.3);\n    -moz-box-shadow: inset 1px 1px 1px 1px rgba(0,0,0,0.3);\n    box-shadow: inset 1px 1px 1px 1px rgba(0,0,0,0.3);\n}\ninput[type=\"checkbox\"] + label:after {\n    opacity: 0.3;\n    background: #fff;\n    top: 0px;\n    left: 2px;\n    height: 12px;\n    width: 12px;\n    -webkit-transition: all 200ms 0 ease;\n    -moz-transition: all 200ms 0 ease;\n    transition: all 200ms 0 ease;\n}\ninput[type=\"checkbox\"]:checked + label {\n    opacity: 1;\n}\ninput[type=\"checkbox\"]:checked + label:after {\n    opacity: 1;\n    left: 16px;\n}\n#user {\n    border-bottom: 1px solid rgba(255, 255, 255, 0.3);;\n}\n.inputrow{\n    position: relative;\n    border-radius: 10px;\n    margin-top: 5px;\n}\ninput:focus {\n    background: rgba(255, 255, 255, 0.8);\n}\n.label-placeholder {\n    position: absolute;\n    margin-top: 13px;\n    margin-left: 32px;\n    color:rgba(0, 92, 123, 0.68);\n}\n.fa{\n    position: absolute;\n    line-height: 2.6;\n    color: #005f8d;\n    margin-left: 8px;\n}\n.remember {\n    margin-top: 20px;\n    margin-bottom: 20px;\n    margin-left: 18px;\n    font-size: 0.7em;\n    color:white;\n}\n.button-center{\n    margin-top: 10px;\n\n}\n.btn-log {\n    display: block;\n    position: relative;\n    z-index: 1;\n    margin: 0 auto;\n    overflow: hidden;\n    padding: 5px 20px;\n    color: #fff;\n    border: 1px solid #fff;\n    border: 1px solid rgba(255, 255, 255, 0.8);\n    border-radius: 6px;\n    background-color: rgba(255, 255, 255, 0.2);\n    -webkit-transition: all 0.4s ease-out;\n    -moz-transition: all 0.4s ease-out;\n    -ms-transition: all 0.4s ease-out;\n    -o-transition: all 0.4s ease-out;\n    transition: all 0.4s ease-out;\n}\n.btn-log:hover {\n    color: #3a4459;\n    border-radius: 2px;\n    background-color: transparent;\n}\n.btn-log:after {\n    content: \"\";\n    position: absolute;\n    z-index: -1;\n    height: 0%;\n    width: 100%;\n    top: 50%;\n    left: 50%;\n    background-color: #fff;\n    background-color: rgba(255, 255, 255, 0.8);\n    -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);\n    -moz-transform: translateX(-50%) translateY(-50%) rotate(45deg);\n    -ms-transform: translateX(-50%) translateY(-50%) rotate(45deg);\n    -o-transform: translateX(-50%) translateY(-50%) rotate(45deg);\n    transform: translateX(-50%) translateY(-50%) rotate(45deg);\n    -webkit-transition: all 0.4s ease-out;\n    -moz-transition: all 0.4s ease-out;\n    -ms-transition: all 0.4s ease-out;\n    -o-transition: all 0.4s ease-out;\n    transition: all 0.4s ease-out;\n}\n.btn-log:hover:after{\n    height: 1000%;\n}\n/*button {*/\n    /*display: block;*/\n    /*background: white;*/\n    /*margin:0 auto;*/\n    /*text-transform: uppercase;*/\n    /*font-weight: bold;*/\n    /*font-size: 0.8em;*/\n    /*padding:0.8em 2em;*/\n    /*border-radius: 5px;*/\n    /*border:0;*/\n/*}*/\n/*button:hover {*/\n    /*background: #00a3d9;*/\n    /*color:white;*/\n/*}*/\n\n\n\n\n.ir {\n    background-color: transparent;\n    border: 0;\n    overflow: hidden;\n    /* IE 6/7 fallback */\n    *text-indent: -9999px;\n}\n\n.ir:before {\n    content: \"\";\n    display: block;\n    width: 0;\n    height: 100%;\n}\n\n\n.hidden {\n    display: none !important;\n    visibility: hidden;\n}\n::-webkit-input-placeholder {\n    color:rgba(0, 92, 123, 0.68);\n}\n\n:-moz-placeholder { /* Firefox 18- */\n    color:rgba(0, 92, 123, 0.68);\n}\n\n::-moz-placeholder {  /* Firefox 19+ */\n    color:rgba(0, 92, 123, 0.68);\n}\n\n:-ms-input-placeholder {\n    color:rgba(0, 92, 123, 0.68);\n}", ""]);

// exports


/***/ }),

/***/ "./src/containers/Login.js":
/*!*********************************!*\
  !*** ./src/containers/Login.js ***!
  \*********************************/
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

var _userActions = __webpack_require__(/*! ../actions/userActions */ "./src/actions/userActions.js");

__webpack_require__(/*! ./login.css */ "./src/containers/login.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    _classCallCheck(this, Login);

    // reset login status
    // this.props.dispatch(logout());

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = {
      username: "",
      password: "",
      submitted: false
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Login, [{
    key: "handleChange",
    value: function handleChange(e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();

      this.setState({ submitted: true });
      var _state = this.state,
          username = _state.username,
          password = _state.password;
      var dispatch = this.props.dispatch;

      if (username && password) {
        dispatch((0, _userActions.login)(username, password));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var loggingIn = this.props.loggingIn;
      var _state2 = this.state,
          username = _state2.username,
          password = _state2.password,
          submitted = _state2.submitted;


      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "login-wrapper" },
          _react2.default.createElement("div", { className: "logo ir" }),
          _react2.default.createElement(
            "span",
            { className: "title" },
            "Login"
          ),
          _react2.default.createElement(
            "form",
            { name: "form", onSubmit: this.handleSubmit },
            _react2.default.createElement(
              "fieldset",
              null,
              _react2.default.createElement(
                "div",
                { className: "inputrow" },
                _react2.default.createElement("i", { className: "fa icon-user fa-fw" }),
                _react2.default.createElement("input", {
                  type: "text",
                  name: "username",
                  id: "user",
                  placeholder: "Username",
                  onChange: this.handleChange,
                  value: username,
                  autoFocus: true,
                  required: true
                })
              ),
              _react2.default.createElement(
                "div",
                { className: "inputrow" },
                _react2.default.createElement("i", { className: "fa icon-key fa-fw" }),
                _react2.default.createElement("input", {
                  type: "password",
                  name: "password",
                  id: "password",
                  "data-typetoggle": "#show",
                  onChange: this.handleChange,
                  value: password,
                  placeholder: "Password",
                  required: true
                })
              ),
              _react2.default.createElement(
                "div",
                { className: "remember" },
                _react2.default.createElement("input", {
                  type: "checkbox",
                  name: "remember_login",
                  value: "1",
                  id: "remember_login"
                }),
                _react2.default.createElement(
                  "label",
                  { htmlFor: "remember_login", className: "radio" },
                  "Remember me"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "button-center" },
                _react2.default.createElement(
                  "button",
                  { className: "btn-log", type: "submit", id: "submit" },
                  "Login"
                ),
                loggingIn && _react2.default.createElement("img", { src: "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" })
              )
            )
          )
        )
      );
    }
  }]);

  return Login;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  var _state$user = state.user,
      user = _state$user.user,
      loggingIn = _state$user.loggingIn;

  return {
    user: user,
    loggingIn: loggingIn
  };
};

var connectedLoginPage = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(Login));
exports.default = connectedLoginPage;

/***/ }),

/***/ "./src/containers/login.css":
/*!**********************************!*\
  !*** ./src/containers/login.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./login.css */ "./node_modules/css-loader/index.js!./src/containers/login.css");

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

/***/ "./src/imgs/loginbackground.jpg":
/*!**************************************!*\
  !*** ./src/imgs/loginbackground.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "aefccde6c3fbcfc090deb6b2361c4564.jpg";

/***/ })

}]);
//# sourceMappingURL=1.bundle.js.map