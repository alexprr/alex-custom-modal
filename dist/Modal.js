"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modal = _ref => {
  let {
    onClose,
    link
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal",
    onClick: onClose
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__title"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "fa-solid fa-user-plus modal__content-icon"
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "modal__text"
  }, "New Employee Created !")), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__description"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Click on the button to check employees list."))), /*#__PURE__*/_react.default.createElement("a", {
    href: link,
    className: "button modal__button"
  }, "Go to list"), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__close"
  }, /*#__PURE__*/_react.default.createElement("i", {
    onClick: onClose,
    class: "fa-solid fa-xmark modal__close-icon"
  }))));
};
var _default = Modal;
exports.default = _default;