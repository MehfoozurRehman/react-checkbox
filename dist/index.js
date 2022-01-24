"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const CheckBox = _ref => {
  let {
    onChange,
    value,
    checkedColor,
    unCheckedColor,
    iconColor,
    label,
    labelColor,
    style
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "checkbox"
  }, /*#__PURE__*/_react.default.createElement("input", {
    class: "checkbox__input",
    type: "checkbox",
    value: value,
    onChange: onChange
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "checkbox__content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "checkbox__content__indicator",
    style: value ? _objectSpread({
      background: checkedColor,
      color: iconColor
    }, style) : _objectSpread({
      background: unCheckedColor
    }, style)
  }, value ? /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    class: "feather feather-check"
  }, /*#__PURE__*/_react.default.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })) : null), /*#__PURE__*/_react.default.createElement("div", {
    className: "checkbox__content__label",
    style: {
      color: labelColor
    }
  }, label)));
};

var _default = CheckBox;
exports.default = _default;