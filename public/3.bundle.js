(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=3.bundle.js.map