(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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
exports.push([module.i, "html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=\"checkbox\"],input[type=\"radio\"]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}input[type=\"search\"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}\r\nbody {\r\n    font-family: Helvetica, Arial sans-serif;\r\n    \r\n    -webkit-background-size: cover;\r\n    -moz-background-size: cover;\r\n    -o-background-size: cover;\r\n    background-size: cover;\r\n}\r\n.login {\r\nbackground: #1f3346 url(" + escape(__webpack_require__(/*! ../imgs/loginbackground.jpg */ "./src/imgs/loginbackground.jpg")) + ") no-repeat fixed;\r\n}\r\nfieldset {\r\n    border: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.container {\r\n   /*display: table;\r\n   width: 100%;\r\n   height: 100%;\r\n   position: absolute;\r\n   overflow: hidden;*/\r\n   margin-top: 70px;\r\n  \r\n}\r\n\r\n.sub-container {\r\n    display: table-cell;\r\n    vertical-align: middle; \r\n}\r\n\r\n.login-wrapper {\r\n    background: rgba(0, 92, 123, 0.68);\r\n    width: 290px;\r\n    margin:130px auto;\r\n    padding: 30px 20px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.logo{\r\n    width:175px;\r\n    height:83px;\r\n    margin:0 auto;\r\n    background: url(/images/logo.svg) no-repeat;\r\n\r\n}\r\n.login-wrapper .title{\r\n    color: #E56A6A;\r\n    position: absolute;\r\n    margin: -26px 86px;\r\n    font-family: fantasy;\r\n    font-size: 2em;\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    padding: 0;\r\n}\r\n.error{\r\n    position: relative;\r\n    color: #843534;\r\n    margin: 0 auto;\r\n    width: 22%;\r\n}\r\nform {\r\n    margin-top:30px;\r\n}\r\n\r\ninput[type=\"text\"], input[type=\"password\"] {\r\n    display: block;\r\n    width: 240px;\r\n    border:0;\r\n    padding:0.8em 0 0.8em 2em;\r\n    outline: none;\r\n    background: rgba(255, 255, 255, 0.6);\r\n    border-radius: 50px;\r\n    transition: all 1s ease-out;\r\n}\r\n\r\ninput[type=\"text\"]:focus, input[type=\"password\"]:focus {\r\n    background: rgba(255, 255, 255, 0.9);\r\n}\r\ninput[type=\"checkbox\"] {\r\n    opacity: 0.01;\r\n    position: absolute;\r\n}\r\ninput[type=\"checkbox\"] + label {\r\n    position: relative;\r\n    padding-left: 36px;\r\n    font-size: 0.9em;\r\n    font-weight: normal;\r\n    line-height: 16px;\r\n    opacity: 0.7;\r\n    text-transform: uppercase;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    user-select: none;\r\n}\r\ninput[type=\"checkbox\"] + label:before,\r\ninput[type=\"checkbox\"] + label:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: block;\r\n    height: 16px;\r\n    -webkit-border-radius: 30px;\r\n    -moz-border-radius: 30px;\r\n    border-radius: 30px;\r\n}\r\ninput[type=\"checkbox\"] + label:before {\r\n    left: 0;\r\n    top: -2px;\r\n    width: 30px;\r\n    background: rgba(0,0,0,0.3);\r\n    -webkit-box-shadow: inset 1px 1px 1px 1px rgba(0,0,0,0.3);\r\n    -moz-box-shadow: inset 1px 1px 1px 1px rgba(0,0,0,0.3);\r\n    box-shadow: inset 1px 1px 1px 1px rgba(0,0,0,0.3);\r\n}\r\ninput[type=\"checkbox\"] + label:after {\r\n    opacity: 0.3;\r\n    background: #fff;\r\n    top: 0px;\r\n    left: 2px;\r\n    height: 12px;\r\n    width: 12px;\r\n    -webkit-transition: all 200ms 0 ease;\r\n    -moz-transition: all 200ms 0 ease;\r\n    transition: all 200ms 0 ease;\r\n}\r\ninput[type=\"checkbox\"]:checked + label {\r\n    opacity: 1;\r\n}\r\ninput[type=\"checkbox\"]:checked + label:after {\r\n    opacity: 1;\r\n    left: 16px;\r\n}\r\n#user {\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.3);;\r\n}\r\n.inputrow{\r\n    position: relative;\r\n    border-radius: 10px;\r\n    margin-top: 5px;\r\n}\r\ninput:focus {\r\n    background: rgba(255, 255, 255, 0.8);\r\n}\r\n.label-placeholder {\r\n    position: absolute;\r\n    margin-top: 13px;\r\n    margin-left: 32px;\r\n    color:rgba(0, 92, 123, 0.68);\r\n}\r\n.fa{\r\n    position: absolute;\r\n    line-height: 2.6;\r\n    color: #005f8d;\r\n    margin-left: 8px;\r\n}\r\n.remember {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    margin-left: 18px;\r\n    font-size: 0.7em;\r\n    color:white;\r\n}\r\n.button-center{\r\n    margin-top: 10px;\r\n\r\n}\r\n.btn-log {\r\n    display: block;\r\n    position: relative;\r\n    z-index: 1;\r\n    margin: 0 auto;\r\n    overflow: hidden;\r\n    padding: 5px 20px;\r\n    color: #fff;\r\n    border: 1px solid #fff;\r\n    border: 1px solid rgba(255, 255, 255, 0.8);\r\n    border-radius: 6px;\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n    -webkit-transition: all 0.4s ease-out;\r\n    -moz-transition: all 0.4s ease-out;\r\n    -ms-transition: all 0.4s ease-out;\r\n    -o-transition: all 0.4s ease-out;\r\n    transition: all 0.4s ease-out;\r\n}\r\n.btn-log:hover {\r\n    color: #3a4459;\r\n    border-radius: 2px;\r\n    background-color: transparent;\r\n}\r\n.btn-log:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    z-index: -1;\r\n    height: 0%;\r\n    width: 100%;\r\n    top: 50%;\r\n    left: 50%;\r\n    background-color: #fff;\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n    -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);\r\n    -moz-transform: translateX(-50%) translateY(-50%) rotate(45deg);\r\n    -ms-transform: translateX(-50%) translateY(-50%) rotate(45deg);\r\n    -o-transform: translateX(-50%) translateY(-50%) rotate(45deg);\r\n    transform: translateX(-50%) translateY(-50%) rotate(45deg);\r\n    -webkit-transition: all 0.4s ease-out;\r\n    -moz-transition: all 0.4s ease-out;\r\n    -ms-transition: all 0.4s ease-out;\r\n    -o-transition: all 0.4s ease-out;\r\n    transition: all 0.4s ease-out;\r\n}\r\n.btn-log:hover:after{\r\n    height: 1000%;\r\n}\r\n/*button {*/\r\n    /*display: block;*/\r\n    /*background: white;*/\r\n    /*margin:0 auto;*/\r\n    /*text-transform: uppercase;*/\r\n    /*font-weight: bold;*/\r\n    /*font-size: 0.8em;*/\r\n    /*padding:0.8em 2em;*/\r\n    /*border-radius: 5px;*/\r\n    /*border:0;*/\r\n/*}*/\r\n/*button:hover {*/\r\n    /*background: #00a3d9;*/\r\n    /*color:white;*/\r\n/*}*/\r\n\r\n\r\n\r\n\r\n.ir {\r\n    background-color: transparent;\r\n    border: 0;\r\n    overflow: hidden;\r\n    /* IE 6/7 fallback */\r\n    *text-indent: -9999px;\r\n}\r\n\r\n.ir:before {\r\n    content: \"\";\r\n    display: block;\r\n    width: 0;\r\n    height: 100%;\r\n}\r\n\r\n\r\n.hidden {\r\n    display: none !important;\r\n    visibility: hidden;\r\n}\r\n::-webkit-input-placeholder {\r\n    color:rgba(0, 92, 123, 0.68);\r\n}\r\n\r\n:-moz-placeholder { /* Firefox 18- */\r\n    color:rgba(0, 92, 123, 0.68);\r\n}\r\n\r\n::-moz-placeholder {  /* Firefox 19+ */\r\n    color:rgba(0, 92, 123, 0.68);\r\n}\r\n\r\n:-ms-input-placeholder {\r\n    color:rgba(0, 92, 123, 0.68);\r\n}", ""]);

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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _actions = __webpack_require__(/*! ../actions */ "./src/actions/index.js");

__webpack_require__(/*! ./login.css */ "./src/containers/login.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { login, logout } from "../actions/userActions";


var loadData = function loadData(props) {
  console.log(props);
  var username = props.username,
      password = props.password;

  props.loginUser(username, password);
};

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

      if (username && password) {
        loadData(_extends({ username: username, password: password }, this.props));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props$logedinUser = this.props.logedinUser,
          fetching = _props$logedinUser.fetching,
          fetched = _props$logedinUser.fetched;
      var _state2 = this.state,
          username = _state2.username,
          password = _state2.password,
          submitted = _state2.submitted;

      if (fetched) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: "/" });
      }

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
                fetching && _react2.default.createElement("img", { src: "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" })
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
  var users = state.entities.users,
      logedinUser = state.reducers.logedinUser;


  return {
    users: users,
    logedinUser: logedinUser
  };
};

var connectedLoginPage = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, { loginUser: _actions.loginUser })(Login));
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
//# sourceMappingURL=2.bundle.js.map