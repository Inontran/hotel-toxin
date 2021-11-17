(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["guide~index~product~products"],{

/***/ "../node_modules/moment/locale sync recursive [/\\\\](es-us(\\.js)?|ru(\\.js)?)$":
/*!*************************************************************************!*\
  !*** ../node_modules/moment/locale sync [/\\](es-us(\.js)?|ru(\.js)?)$ ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./es-us": "../node_modules/moment/locale/es-us.js",
	"./es-us.js": "../node_modules/moment/locale/es-us.js",
	"./ru": "../node_modules/moment/locale/ru.js",
	"./ru.js": "../node_modules/moment/locale/ru.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../node_modules/moment/locale sync recursive [/\\\\](es-us(\\.js)?|ru(\\.js)?)$";

/***/ }),

/***/ "./components/air-datepicker/air-datepicker.js":
/*!*****************************************************!*\
  !*** ./components/air-datepicker/air-datepicker.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! air-datepicker */ "../node_modules/air-datepicker/src/js/air-datepicker.js");
/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(air_datepicker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/button/button */ "./components/button/button.js");
/* harmony import */ var _air_datepicker_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./air-datepicker.scss */ "./components/air-datepicker/air-datepicker.scss");
/* harmony import */ var _air_datepicker_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_air_datepicker_scss__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var AirDatepicker = /*#__PURE__*/function (_EventTarget) {
  _inherits(AirDatepicker, _EventTarget);

  var _super = _createSuper(AirDatepicker);

  function AirDatepicker($airDatepicker) {
    var _this;

    _classCallCheck(this, AirDatepicker);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "_$airDatepicker", void 0);

    _defineProperty(_assertThisInitialized(_this), "_datepicker", void 0);

    _defineProperty(_assertThisInitialized(_this), "_$submitBtnWrapper", void 0);

    _defineProperty(_assertThisInitialized(_this), "_$submitBtn", void 0);

    _defineProperty(_assertThisInitialized(_this), "_$resetBtnWrapper", void 0);

    _defineProperty(_assertThisInitialized(_this), "_$resetBtn", void 0);

    _defineProperty(_assertThisInitialized(_this), "_dates", void 0);

    _defineProperty(_assertThisInitialized(_this), "_formattedDates", void 0);

    _defineProperty(_assertThisInitialized(_this), "_formattedDateStart", void 0);

    _defineProperty(_assertThisInitialized(_this), "_formattedDateEnd", void 0);

    _this._$airDatepicker = $airDatepicker;

    _this._init();

    return _this;
  }

  _createClass(AirDatepicker, [{
    key: "getDates",
    value: function getDates() {
      return this._dates;
    }
  }, {
    key: "getFormattedDates",
    value: function getFormattedDates() {
      return this._formattedDates;
    }
  }, {
    key: "getFormattedDateStart",
    value: function getFormattedDateStart() {
      return this._formattedDateStart;
    }
  }, {
    key: "getFormattedDateEnd",
    value: function getFormattedDateEnd() {
      return this._formattedDateEnd;
    }
  }, {
    key: "_init",
    value: function _init() {
      moment__WEBPACK_IMPORTED_MODULE_2___default.a.lang('ru');
      this._eventChange = new CustomEvent('change-air-datepicker');

      this._findDOMElements();

      this._initDatepicker();

      this._bindEventListeners();

      this._addEventListeners();
    }
  }, {
    key: "_findDOMElements",
    value: function _findDOMElements() {
      this._$submitBtnWrapper = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-air-datepicker__btn_type_submit', this._$airDatepicker);
      this._$submitBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-air-datepicker__btn_type_submit .js-button', this._$airDatepicker);
      this._$resetBtnWrapper = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-air-datepicker__btn_type_reset', this._$airDatepicker);
      this._$resetBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-air-datepicker__btn_type_reset .js-button', this._$airDatepicker);
    }
  }, {
    key: "_initDatepicker",
    value: function _initDatepicker() {
      var minDateOption;

      var attrMinDate = this._$airDatepicker.data('min-date');

      if (attrMinDate === 'today') {
        minDateOption = new Date();
      } else if (attrMinDate) {
        try {
          minDateOption = new Date(attrMinDate);
        } catch (error) {
          console.debug(error);
        }
      }

      var $datepicker = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-air-datepicker__wrapper', this._$airDatepicker);
      $datepicker.datepicker({
        range: true,
        inline: true,
        navTitles: {
          days: 'MM yyyy'
        },
        minDate: minDateOption
      });
      this._datepicker = $datepicker.data('datepicker');

      if (!this._datepicker.selectedDates.length) {
        this._$resetBtnWrapper.addClass('air-datepicker__btn_hidden');
      }
    }
  }, {
    key: "_bindEventListeners",
    value: function _bindEventListeners() {
      this._handlerClickSubmitBtn = this._handlerClickSubmitBtn.bind(this);
      this._handlerClickResetBtn = this._handlerClickResetBtn.bind(this);
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      this._$submitBtn.on('click', this._handlerClickSubmitBtn);

      this._$resetBtn.on('click', this._handlerClickResetBtn);
    }
  }, {
    key: "_handlerClickResetBtn",
    value: function _handlerClickResetBtn(event) {
      event.preventDefault();

      this._datepicker.clear();

      this._dates = [];
      this._formattedDates = '';
      this._formattedDateStart = '';
      this._formattedDateEnd = '';

      this._$resetBtnWrapper.addClass('air-datepicker__btn_hidden');

      this.dispatchEvent(this._eventChange);
    }
  }, {
    key: "_handlerClickSubmitBtn",
    value: function _handlerClickSubmitBtn(event) {
      event.preventDefault();
      this._dates = this._datepicker.selectedDates;
      this._formattedDates = "".concat(moment__WEBPACK_IMPORTED_MODULE_2___default()(this._dates[0]).format('D MMM'), " - ").concat(moment__WEBPACK_IMPORTED_MODULE_2___default()(this._dates[1]).format('D MMM'));
      this._formattedDateStart = moment__WEBPACK_IMPORTED_MODULE_2___default()(this._dates[0]).format('DD.MM.YYYY');
      this._formattedDateEnd = moment__WEBPACK_IMPORTED_MODULE_2___default()(this._dates[1]).format('DD.MM.YYYY');

      if (this._dates.length) {
        this._$resetBtnWrapper.removeClass('air-datepicker__btn_hidden');
      } else {
        this._$resetBtnWrapper.addClass('air-datepicker__btn_hidden');
      }

      this.dispatchEvent(this._eventChange);
    }
  }], [{
    key: "formatDate",
    value: function formatDate(strDate) {
      if (!strDate.length) {
        return '';
      }

      var strFormattedDate = '';

      try {
        strFormattedDate = strDate.split('.', 3).reverse().join('-');
      } catch (error) {
        console.debug(error);
      }

      return strFormattedDate;
    }
  }]);

  return AirDatepicker;
}( /*#__PURE__*/_wrapNativeSuper(EventTarget));

/* harmony default export */ __webpack_exports__["default"] = (AirDatepicker);

/***/ }),

/***/ "./components/air-datepicker/air-datepicker.scss":
/*!*******************************************************!*\
  !*** ./components/air-datepicker/air-datepicker.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/input-number/input-number.js":
/*!*************************************************!*\
  !*** ./components/input-number/input-number.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _input_number_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-number.scss */ "./components/input-number/input-number.scss");
/* harmony import */ var _input_number_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_input_number_scss__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var InputNumber = /*#__PURE__*/function () {
  function InputNumber($inputNumber) {
    _classCallCheck(this, InputNumber);

    _defineProperty(this, "_$inputNumber", void 0);

    _defineProperty(this, "_$input", void 0);

    _defineProperty(this, "_$btnDecreasing", void 0);

    _defineProperty(this, "_$btnIncreasing", void 0);

    this._$inputNumber = $inputNumber;

    this._init();
  }

  _createClass(InputNumber, [{
    key: "getInput",
    value: function getInput() {
      return this._$input;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return parseInt(this._$input.val(), 10);
    }
  }, {
    key: "setValue",
    value: function setValue(newValue) {
      if (newValue !== this._$input.val()) {
        this._$input.val(newValue).trigger('change');
      }
    }
  }, {
    key: "_init",
    value: function _init() {
      this._findDOMElements();

      this._bindEventListeners();

      this._addEventListerners();

      this._disableBtns();
    }
  }, {
    key: "_findDOMElements",
    value: function _findDOMElements() {
      this._$input = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-number__input', this._$inputNumber);
      this._$btnDecreasing = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-number__btn_decreasing', this._$inputNumber);
      this._$btnIncreasing = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-number__btn_increasing', this._$inputNumber);
    }
  }, {
    key: "_bindEventListeners",
    value: function _bindEventListeners() {
      this._handleInputChange = this._handleInputChange.bind(this);
      this._handleBtnIncreasingClick = this._handleBtnIncreasingClick.bind(this);
      this._handleBtnDecreasingClick = this._handleBtnDecreasingClick.bind(this);
    }
  }, {
    key: "_addEventListerners",
    value: function _addEventListerners() {
      this._$input.on('change', this._handleInputChange);

      this._$btnIncreasing.on('click', this._handleBtnIncreasingClick);

      this._$btnDecreasing.on('click', this._handleBtnDecreasingClick);
    }
  }, {
    key: "_disableBtns",
    value: function _disableBtns() {
      var minVal = null;

      try {
        minVal = parseInt(this._$input.attr('min'), 10);
      } catch (error) {}

      var currentValue = parseInt(this._$input.val());

      if (minVal !== null && currentValue <= minVal) {
        this._$btnDecreasing.attr('disabled', '');
      } else {
        this._$btnDecreasing.removeAttr('disabled');
      }

      var maxVal = null;

      try {
        maxVal = parseInt(this._$input.attr('max'), 10);
      } catch (error) {}

      if (maxVal !== null && currentValue >= maxVal) {
        this._$btnIncreasing.attr('disabled', '');
      } else {
        this._$btnIncreasing.removeAttr('disabled');
      }
    }
  }, {
    key: "_handleInputChange",
    value: function _handleInputChange() {
      this._disableBtns();
    }
  }, {
    key: "_handleBtnIncreasingClick",
    value: function _handleBtnIncreasingClick() {
      var currentValue = this._$input.val();

      this._$input[0].stepUp();

      if (this._$input.val() !== currentValue) {
        this._inputValue = parseInt(this._$input.val());

        this._$input[0].dispatchEvent(new Event('change', {
          bubbles: true
        }));
      }
    }
  }, {
    key: "_handleBtnDecreasingClick",
    value: function _handleBtnDecreasingClick() {
      var currentValue = this._$input.val();

      this._$input[0].stepDown();

      if (this._$input.val() !== currentValue) {
        this._inputValue = parseInt(this._$input.val());

        this._$input[0].dispatchEvent(new Event('change', {
          bubbles: true
        }));
      }
    }
  }]);

  return InputNumber;
}();

/* harmony default export */ __webpack_exports__["default"] = (InputNumber);

/***/ }),

/***/ "./components/input-number/input-number.scss":
/*!***************************************************!*\
  !*** ./components/input-number/input-number.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/list-counters/list-counters.js":
/*!***************************************************!*\
  !*** ./components/list-counters/list-counters.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_input_number_input_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/input-number/input-number */ "./components/input-number/input-number.js");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/button/button */ "./components/button/button.js");
/* harmony import */ var _list_counters_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-counters.scss */ "./components/list-counters/list-counters.scss");
/* harmony import */ var _list_counters_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_list_counters_scss__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var ListCounters = /*#__PURE__*/function (_EventTarget) {
  _inherits(ListCounters, _EventTarget);

  var _super = _createSuper(ListCounters);

  function ListCounters($listCounters) {
    var _this;

    _classCallCheck(this, ListCounters);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "_$listCounters", void 0);

    _defineProperty(_assertThisInitialized(_this), "_$resetBtn", void 0);

    _defineProperty(_assertThisInitialized(_this), "_$resetBtnWrapper", void 0);

    _defineProperty(_assertThisInitialized(_this), "_$submitBtn", void 0);

    _defineProperty(_assertThisInitialized(_this), "_inputNumbers", []);

    _defineProperty(_assertThisInitialized(_this), "_collectionGroupIds", void 0);

    _defineProperty(_assertThisInitialized(_this), "_formattedOutput", void 0);

    _defineProperty(_assertThisInitialized(_this), "_eventChange", void 0);

    _this._$listCounters = $listCounters;

    _this._init();

    return _this;
  }

  _createClass(ListCounters, [{
    key: "getFormattedOutput",
    value: function getFormattedOutput() {
      return this._formattedOutput;
    }
  }, {
    key: "_init",
    value: function _init() {
      this._findDOMElements();

      this._eventChange = new CustomEvent('change-list-counters');

      this._initInputNumbers();

      this._addEventListerners();

      this._calcItemsListCounters();
    }
  }, {
    key: "_initInputNumbers",
    value: function _initInputNumbers() {
      var that = this;
      this._collectionGroupIds = new Set();

      this._$listCounters.find('.js-list-counters__counter').each(function () {
        var $counterItem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
        var groupItemId = $counterItem.data('group-item-id') !== undefined ? $counterItem.data('group-item-id') : false;
        var $inputNumber = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-number', $counterItem);

        if ($inputNumber !== null && $inputNumber !== void 0 && $inputNumber.length) {
          var arrayInputNumber = [];
          arrayInputNumber.push(groupItemId);
          arrayInputNumber.push($counterItem);
          arrayInputNumber.push(new _components_input_number_input_number__WEBPACK_IMPORTED_MODULE_1__["default"]($inputNumber));

          that._inputNumbers.push(arrayInputNumber);

          if (groupItemId !== false) that._collectionGroupIds.add(groupItemId);
        }
      });
    }
  }, {
    key: "_findDOMElements",
    value: function _findDOMElements() {
      this._$resetBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-list-counters__btn_type_reset .js-button', this._$listCounters);
      this._$resetBtnWrapper = this._$resetBtn.closest('.js-list-counters__btn_type_reset');
      this._$submitBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-list-counters__btn_type_submit .js-button', this._$listCounters);
    }
  }, {
    key: "_addEventListerners",
    value: function _addEventListerners() {
      var _this$_$resetBtn,
          _this2 = this,
          _this$_$submitBtn;

      if ((_this$_$resetBtn = this._$resetBtn) !== null && _this$_$resetBtn !== void 0 && _this$_$resetBtn.length) {
        this._$resetBtn.on('click', function () {
          _this2._inputNumbers.forEach(function (inputNumber) {
            inputNumber[2].setValue(0);
          });

          _this2._calcItemsListCounters();
        });
      }

      if ((_this$_$submitBtn = this._$submitBtn) !== null && _this$_$submitBtn !== void 0 && _this$_$submitBtn.length) {
        this._$submitBtn.on('click', function () {
          _this2._calcItemsListCounters();
        });
      }

      if (this._$listCounters.hasClass('list-counters_simple')) {
        this._inputNumbers.forEach(function (inputNumber) {
          inputNumber[2].getInput().on('change', function () {
            _this2._calcItemsListCounters();
          });
        });
      }
    }
  }, {
    key: "_calcItemsListCounters",
    value: function _calcItemsListCounters() {
      var _this3 = this;

      this._formattedOutput = '';
      var countNotZeroItems = 0;
      var summAllCounters = 0; // проходим по всем счетчикам, объединенные в группы.

      this._collectionGroupIds.forEach(function (groupId) {
        var groupCounterSumm = 0;

        _this3._inputNumbers.forEach(function (counter) {
          if (counter[0] === groupId) {
            var valCounter = parseInt(counter[2].getValue(), 10);
            groupCounterSumm += valCounter;
          }
        });

        if (groupCounterSumm) {
          if (countNotZeroItems !== 0) {
            _this3._formattedOutput += ', ';
          }

          _this3._formattedOutput += ListCounters.getTextFromCounter(_this3._inputNumbers[groupId][1], groupCounterSumm);
          countNotZeroItems += 1;
          summAllCounters += groupCounterSumm;
        }
      }); // проходим по всем счетчикам, которые не входят ни в одну группу.


      this._inputNumbers.forEach(function (counter) {
        if (counter[0] === false) {
          var valCounter = parseInt(counter[2].getValue(), 10);

          if (valCounter) {
            if (countNotZeroItems !== 0) {
              _this3._formattedOutput += ', ';
            }

            _this3._formattedOutput += ListCounters.getTextFromCounter(counter[1], valCounter);
            countNotZeroItems += 1;
          }
        }
      });

      if (summAllCounters === 0) {
        if (this._$listCounters.attr('data-default-text')) {
          this._formattedOutput = this._$listCounters.attr('data-default-text');
        } else {
          this._formattedOutput = '';
        }

        this._$resetBtnWrapper.addClass('list-counters__btn_hidden');
      } else {
        this._$resetBtnWrapper.removeClass('list-counters__btn_hidden');
      }

      this.dispatchEvent(this._eventChange);
    }
  }], [{
    key: "getTextFromCounter",
    value: function getTextFromCounter($counterItem, valCounter) {
      var resultText = '';

      if (valCounter) {
        var counterLabelText = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-list-counters__counter-label', $counterItem).text();
        var arrayNamesCounter = [$counterItem.attr('data-text-one-items') ? $counterItem.attr('data-text-one-items') : counterLabelText, $counterItem.attr('data-text-two-items') ? $counterItem.attr('data-text-two-items') : counterLabelText, $counterItem.attr('data-text-many-items') ? $counterItem.attr('data-text-many-items') : counterLabelText];
        resultText += valCounter;
        resultText += ' ';
        resultText += ListCounters.declineWord(valCounter, arrayNamesCounter);
      }

      return resultText;
    }
  }, {
    key: "declineWord",
    value: function declineWord(number, titles) {
      var numberOfEnding = [2, 0, 1, 1, 1, 2];
      var isLastEnding = number % 100 > 4 && number % 100 < 20;
      var correctEnding = number % 10 < 5 ? number % 10 : 5;
      return titles[isLastEnding ? 2 : numberOfEnding[correctEnding]];
    }
  }]);

  return ListCounters;
}( /*#__PURE__*/_wrapNativeSuper(EventTarget));

/* harmony default export */ __webpack_exports__["default"] = (ListCounters);

/***/ }),

/***/ "./components/list-counters/list-counters.scss":
/*!*****************************************************!*\
  !*** ./components/list-counters/list-counters.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=guide~index~product~products.js.map