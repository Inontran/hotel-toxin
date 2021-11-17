(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["guide~products"],{

/***/ "./components/card-product/card-product.js":
/*!*************************************************!*\
  !*** ./components/card-product/card-product.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! owl.carousel */ "../node_modules/owl.carousel/dist/owl.carousel.js");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_rate_btn_rate_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/rate-btn/rate-btn */ "./components/rate-btn/rate-btn.js");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/button/button */ "./components/button/button.js");
/* harmony import */ var _card_product_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card-product.scss */ "./components/card-product/card-product.scss");
/* harmony import */ var _card_product_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_card_product_scss__WEBPACK_IMPORTED_MODULE_4__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var CardProduct = /*#__PURE__*/function () {
  function CardProduct($card) {
    _classCallCheck(this, CardProduct);

    _defineProperty(this, "_$card", void 0);

    this._$card = $card;

    this._init();
  }

  _createClass(CardProduct, [{
    key: "_init",
    value: function _init() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-card-product__carousel', this._$card).each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).owlCarousel({
          nav: true,
          dots: true,
          items: 1,
          loop: true
        });
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-rate-btn', this._$card).each(function () {
        new _components_rate_btn_rate_btn__WEBPACK_IMPORTED_MODULE_2__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
      });
    }
  }]);

  return CardProduct;
}();

/* harmony default export */ __webpack_exports__["default"] = (CardProduct);

/***/ }),

/***/ "./components/card-product/card-product.scss":
/*!***************************************************!*\
  !*** ./components/card-product/card-product.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/checkbox/checkbox.js":
/*!*****************************************!*\
  !*** ./components/checkbox/checkbox.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkbox_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox.scss */ "./components/checkbox/checkbox.scss");
/* harmony import */ var _checkbox_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_checkbox_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/checkbox/checkbox.scss":
/*!*******************************************!*\
  !*** ./components/checkbox/checkbox.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/expander/expander.js":
/*!*****************************************!*\
  !*** ./components/expander/expander.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _expander_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expander.scss */ "./components/expander/expander.scss");
/* harmony import */ var _expander_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_expander_scss__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Expander = /*#__PURE__*/function () {
  function Expander($expander) {
    _classCallCheck(this, Expander);

    _defineProperty(this, "_$expander", void 0);

    _defineProperty(this, "_$btn", void 0);

    this._$expander = $expander;

    this._init();
  }

  _createClass(Expander, [{
    key: "_init",
    value: function _init() {
      this._$btn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-expander__btn', this._$expander);
      this._handleBtnClick = this._handleBtnClick.bind(this);

      this._$btn.on('click', this._handleBtnClick);
    }
  }, {
    key: "_handleBtnClick",
    value: function _handleBtnClick(event) {
      event.preventDefault();
      var $expander = this._$expander;

      var expanderGroup = this._$expander.attr('data-group');

      if (expanderGroup) {
        var selector = '.js-expander';
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("".concat(selector, "[data-group=\"").concat(expanderGroup, "\"]")).each(function () {
          var $currentExpander = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);

          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector).index($currentExpander) === jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector).index($expander)) {
            $expander.toggleClass('expander_activated');
          } else {
            $currentExpander.removeClass('expander_activated');
          }
        });
      } else {
        $expander.toggleClass('expander_activated');
      }
    }
  }]);

  return Expander;
}();

/* harmony default export */ __webpack_exports__["default"] = (Expander);

/***/ }),

/***/ "./components/expander/expander.scss":
/*!*******************************************!*\
  !*** ./components/expander/expander.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/pagination/jquery.paging.js":
/*!************************************************!*\
  !*** ./components/pagination/jquery.paging.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/**
 * @license jQuery paging plugin v1.3.1 23/06/2014
 * http://www.xarg.org/2011/09/jquery-pagination-revised/
 *
 * Copyright (c) 2011, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/
(function ($, window, undefined) {
  $["fn"]["paging"] = function (number, opts) {
    var self = this,
        Paging = {
      "setOptions": function setOptions(opts) {
        var parseFormat = function parseFormat(format) {
          var gndx = 0,
              group = 0,
              num = 1,
              res = {
            fstack: [],
            // format stack
            asterisk: 0,
            // asterisk?
            inactive: 0,
            // fill empty pages with inactives up to w?
            blockwide: 5,
            // width of number block
            current: 3,
            // position of current element in number block
            rights: 0,
            // num of rights
            lefts: 0 // num of lefts

          },
              tok,
              pattern = /[*<>pq\[\]().-]|[nc]+!?/g;
          var known = {
            "[": "first",
            "]": "last",
            "<": "prev",
            ">": "next",
            "q": "left",
            "p": "right",
            "-": "fill",
            ".": "leap"
          },
              count = {};

          while (tok = pattern["exec"](format)) {
            tok = "" + tok;

            if (undefined === known[tok]) {
              if ("(" === tok) {
                group = ++gndx;
              } else if (")" === tok) {
                group = 0;
              } else if (num) {
                if ("*" === tok) {
                  res.asterisk = 1;
                  res.inactive = 0;
                } else {
                  // number block is the only thing left here
                  res.asterisk = 0;
                  res.inactive = "!" === tok.charAt(tok.length - 1);
                  res.blockwide = tok["length"] - res.inactive;

                  if (!(res.current = 1 + tok.indexOf("c"))) {
                    res.current = 1 + res.blockwide >> 1;
                  }
                }

                res.fstack.push({
                  ftype: "block",
                  // type
                  fgroup: 0,
                  // group
                  fpos: 0 // pos

                });
                num = 0;
              }
            } else {
              res.fstack.push({
                ftype: known[tok],
                // type
                fgroup: group,
                // group
                fpos: undefined === count[tok] ? count[tok] = 1 : ++count[tok] // pos

              });
              if ("q" === tok) ++res.lefts;else if ("p" === tok) ++res.rights;
            }
          }

          return res;
        };

        Paging.opts = $.extend(Paging.opts || {
          "lapping": 0,
          // number of elements overlap
          "perpage": 10,
          // number of elements per page
          "page": 1,
          // current page
          "stepwidth": 1,
          // stepwidth for prev/next -> if = 0 then blockwise steps
          "refresh": {
            "interval": 10,
            "url": null
          },
          // refresh callback information
          "format": "",
          // visual format string
          "lock": false,
          // set to true, if you want to disable the pagination for a while. 
          "circular": false,
          // set to true if you want the next/prev buttons go circular
          "onClick": null,
          // Alternative click handler to bypass onSelect mechanism
          "onFormat": function onFormat(type) {// callback for every format element

            /** EXAMPLE **
                 switch (type) {
                     case 'block':
                         if (!this.active)
                            return '<span class="disabled">' + this.value + '</span>';
                        else if (this.value != this.page)
                            return '<em><a href="#' + this.value + '">' + this.value + '</a></em>';
                        return '<span class="current">' + this.value + '</span>';
                     case 'right':
                    case 'left':
                         if (!this.active) {
                            return "";
                        }
                        return '<a href="#' + this.value + '">' + this.value + '</a>';
                     case 'next':
                         if (this.active) {
                            return '<a href="#' + this.value + '" class="next">Next &raquo;</a>';
                        }
                        return '<span class="disabled">Next &raquo;</span>';
                     case 'prev':
                         if (this.active) {
                            return '<a href="#' + this.value + '" class="prev">&laquo; Previous</a>';
                        }
                        return '<span class="disabled">&laquo; Previous</span>';
                     case 'first':
                         if (this.active) {
                            return '<a href="#' + this.value + '" class="first">|&lt;</a>';
                        }
                        return '<span class="disabled">|&lt;</span>';
                     case 'last':
                         if (this.active) {
                            return '<a href="#' + this.value + '" class="prev">&gt;|</a>';
                        }
                        return '<span class="disabled">&gt;|</span>';
                     case 'fill':
                        if (this.active) {
                            return "...";
                        }
                }
                return ""; // return nothing for missing branches
                 **/
          },
          "onSelect": function onSelect(page) {
            // callback for page selection

            /** EXAMPLE SLICE **
             var data = this.slice;
             content.slice(prev[0], prev[1]).css('display', 'none');
            content.slice(data[0], data[1]).css('display', 'block');
             prev = data;
             **/

            /** EXAMPLE AJAX **
             $.ajax({
                "url": '/data.php?start=' + this.slice[0] + '&end=' + this.slice[1] + '&page=' + page,
                "success": function(data) {
                    // content replace
                }
            });
             **/
            // Return code indicates if the link of the clicked format element should be followed (otherwise only the click-event is used)
            return true;
          },
          "onRefresh": function onRefresh(json) {// callback for new data of refresh api

            /** EXAMPLE **
            if (json.number) {
                Paging.setNumber(json.number);
            }
             if (json.options) {
                Paging.setOptions(json.options);
            }
             Paging.setPage(); // Call with empty params to reload the paginator
            **/
          }
        }, opts || {});
        Paging.opts["lapping"] |= 0;
        Paging.opts["perpage"] |= 0;
        if (Paging.opts["page"] !== null) Paging.opts["page"] |= 0; // If the number of elements per page is less then 1, set it to default

        if (Paging.opts["perpage"] < 1) {
          Paging.opts["perpage"] = 10;
        }

        if (Paging.interval) window.clearInterval(Paging.interval);

        if (Paging.opts["refresh"]["url"]) {
          Paging.interval = window.setInterval(function () {
            $["ajax"]({
              "url": Paging.opts["refresh"]["url"],
              "success": function success(data) {
                if (typeof data === "string") {
                  try {
                    data = $["parseJSON"](data);
                  } catch (o) {
                    return;
                  }
                }

                Paging.opts["onRefresh"](data);
              }
            });
          }, 1000 * Paging.opts["refresh"]["interval"]);
        }

        Paging.format = parseFormat(Paging.opts["format"]);
        return Paging;
      },
      "setNumber": function setNumber(number) {
        Paging.number = undefined === number || number < 0 ? -1 : number;
        return Paging;
      },
      "setPage": function setPage(page) {
        if (Paging.opts["lock"]) {
          Paging.opts["onSelect"](0, self);
          return Paging;
        }

        if (undefined === page) {
          page = Paging.opts["page"];

          if (null === page) {
            return Paging;
          }
        } else if (Paging.opts["page"] == page) {
          // Necessary to be ==, not ===
          return Paging;
        }

        Paging.opts["page"] = page |= 0;
        var number = Paging.number;
        var opts = Paging.opts;
        var rStart, rStop;
        var pages, buffer;
        var groups = 1,
            format = Paging.format;
        var data, tmp, node, lapping;
        var count = format.fstack["length"],
            i = count; // If the lapping is greater than perpage, reduce it to perpage - 1 to avoid endless loops

        if (opts["perpage"] <= opts["lapping"]) {
          opts["lapping"] = opts["perpage"] - 1;
        }

        lapping = number <= opts["lapping"] ? 0 : opts["lapping"] | 0; // If the number is negative, the value doesn"t matter, we loop endlessly with a constant width

        if (number < 0) {
          number = -1;
          pages = -1;
          rStart = Math.max(1, page - format.current + 1 - lapping);
          rStop = rStart + format.blockwide;
        } else {
          /* Calculate the number of pages
           * http://www.xarg.org/2016/10/derivation-of-pagination-calculation/
           *
           */
          pages = 1 + Math.ceil((number - opts["perpage"]) / (opts["perpage"] - lapping)); // If current page is negative, start at the end and
          // Set the current page into a valid range, includes 0, which is set to 1

          page = Math.max(1, Math.min(page < 0 ? 1 + pages + page : page, pages)); // Do we need to print all numbers?

          if (format.asterisk) {
            rStart = 1;
            rStop = 1 + pages; // Disable :first and :last for asterisk mode as we see all buttons

            format.current = page;
            format.blockwide = pages;
          } else {
            // If no, start at the best position and stop at max width or at num of pages
            rStart = Math.max(1, Math.min(page - format.current, pages - format.blockwide) + 1);
            rStop = format.inactive ? rStart + format.blockwide : Math.min(rStart + format.blockwide, 1 + pages);
          }
        }

        while (i--) {
          tmp = 0; // default everything is visible

          node = format.fstack[i];

          switch (node.ftype) {
            case "left":
              tmp = node.fpos < rStart;
              break;

            case "right":
              tmp = rStop <= pages - format.rights + node.fpos;
              break;

            case "first":
              tmp = format.current < page;
              break;

            case "last":
              tmp = format.blockwide < format.current + pages - page;
              break;

            case "prev":
              tmp = 1 < page;
              break;

            case "next":
              tmp = page < pages;
              break;
          }

          groups |= tmp << node.fgroup; // group visible?
        }

        data = {
          "number": number,
          // number of elements
          "lapping": lapping,
          // overlapping
          "pages": pages,
          // number of pages
          "perpage": opts["perpage"],
          // number of elements per page
          "page": page,
          // current page
          "slice": [// two element array with bounds of the current page selection
          (tmp = page * (opts["perpage"] - lapping) + lapping) - opts["perpage"], // Lower bound
          Math.min(tmp, number) // Upper bound
          ]
        };
        buffer = "";

        function buffer_append(opts, data, type) {
          type = "" + opts["onFormat"].call(data, type);

          if (data["value"]) {
            buffer += type.replace(/<a/i, '<a data-page="' + data["value"] + '"');
          } else {
            buffer += type;
          }
        }

        while (++i < count) {
          node = format.fstack[i];
          tmp = groups >> node.fgroup & 1;

          switch (node.ftype) {
            case "block":
              for (; rStart < rStop; ++rStart) {
                data["value"] = rStart;
                data["pos"] = 1 + format.blockwide - rStop + rStart;
                data["active"] = rStart <= pages || number < 0; // true if infinity series and rStart <= pages

                data["first"] = 1 === rStart; // check if it is the first page

                data["last"] = rStart === pages && 0 < number; // false if infinity series or rStart != pages

                buffer_append(opts, data, node.ftype);
              }

              continue;

            case "left":
              data["value"] = node.fpos;
              data["active"] = node.fpos < rStart; // Don't take group-visibility into account!

              break;

            case "right":
              data["value"] = pages - format.rights + node.fpos;
              data["active"] = rStop <= data["value"]; // Don't take group-visibility into account!

              break;

            case "prev":
            case "next":
              var p_ = 0;

              if (opts["stepwidth"] === 0) {
                if (node.ftype === "next") {
                  if (page <= format.current) {
                    p_ = format.current + format.blockwide;
                  } else {
                    p_ = page + format.blockwide;
                  }
                } else {
                  p_ = page - format.blockwide;
                }
              } else {
                p_ = node.ftype === "next" ? page + opts["stepwidth"] : page - opts["stepwidth"];
              }

              if (opts["circular"]) {
                data["active"] = 1;
                data["value"] = 1 + (pages + p_ - 1) % pages;
              } else if (node.ftype === "next" && number < 0) {
                // if type=next and infinity navigation
                data["active"] = 1;
                data["value"] = p_;
              } else {
                data["value"] = Math.max(1, Math.min(p_, pages));
                data["active"] = tmp && 1 < page && page < pages;
              }

              break;

            case "first":
              data["value"] = 1;
              data["active"] = tmp && 1 < page;
              break;

            case "last":
              if (number < 0) {
                data["active"] = 1;
                data["value"] = 1 + page;
              } else {
                data["value"] = pages;
                data["active"] = tmp && page < pages;
              }

              break;

            case "leap":
            case "fill":
              data["pos"] = node.fpos;
              data["active"] = tmp; // tmp is true by default and changes only for group behaviour

              buffer_append(opts, data, node.ftype);
              continue;
          }

          data["pos"] = node.fpos;
          data["last"] =
          /* void */
          data["first"] = undefined;
          buffer_append(opts, data, node.ftype);
        }

        if (self.length) {
          $("a", self["html"](buffer)).click(opts['onClick'] || function (ev) {
            ev["preventDefault"]();
            var obj = this;

            do {
              if ('a' === obj["nodeName"].toLowerCase()) {
                break;
              }
            } while (obj = obj["parentNode"]);

            Paging["setPage"]($(obj).data("page"));

            if (Paging.locate) {
              window.location = obj["href"];
            }
          });
          Paging.locate = opts["onSelect"].call({
            "number": number,
            "lapping": lapping,
            "pages": pages,
            "slice": data["slice"]
          }, page, self);
        }

        return Paging;
      }
    };
    return Paging["setNumber"](number)["setOptions"](opts)["setPage"]();
  };
})(jQuery, this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/pagination/pagination.js":
/*!*********************************************!*\
  !*** ./components/pagination/pagination.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jquery_paging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jquery.paging */ "./components/pagination/jquery.paging.js");
/* harmony import */ var _jquery_paging__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jquery_paging__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pagination_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination.scss */ "./components/pagination/pagination.scss");
/* harmony import */ var _pagination_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pagination_scss__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Pagination = /*#__PURE__*/function () {
  function Pagination($pagination) {
    _classCallCheck(this, Pagination);

    _defineProperty(this, "_$pagination", void 0);

    _defineProperty(this, "_$paginationWrapper", void 0);

    _defineProperty(this, "_$textAmount", void 0);

    this._$pagination = $pagination;

    this._init();
  }

  _createClass(Pagination, [{
    key: "_init",
    value: function _init() {
      this._findDOMElements();

      var currentPage = this._$pagination.attr('data-page');

      var perpage = this._$pagination.attr('data-perpage');

      var countElements = this._$pagination.attr('data-elements');

      var countElementsOutput = '';

      if (countElements >= 100) {
        countElementsOutput = '100+';
      } else {
        countElementsOutput = countElements;
      }

      var that = this;

      this._$paginationWrapper.paging(countElements, {
        format: '< [ (q-) ncn (-p) ] >',
        perpage: perpage,
        lapping: 0,
        page: currentPage,
        onSelect: function onSelect() {
          var startCountElements = 0;

          var _this$slice = _slicedToArray(this.slice, 2),
              startEl = _this$slice[0],
              endEl = _this$slice[1];

          if (startEl) {
            startCountElements = startEl;
          } else {
            startCountElements = 1;
          }

          that._$textAmount.text("".concat(startCountElements, " - ").concat(endEl, " \u0438\u0437 ").concat(countElementsOutput, " "));
        },
        onFormat: function onFormat(type) {
          switch (type) {
            case 'block':
              if (!this.active) {
                return "<span class=\"pagination__number\">".concat(this.value, "</span>");
              }

              if (this.value !== this.page) {
                return "<a href=\"#\" class=\"pagination__number\">".concat(this.value, "</a>");
              }

              return "<span class=\"pagination__number pagination__number_current\">".concat(this.value, "</span>");

            case 'next':
              if (this.active || this.page === 1) {
                return '<a href="#" class="pagination__forward-btn">></a>';
              }

              return '';

            case 'prev':
              if (this.active || this.page === this.pages) {
                return '<a href="#" class="pagination__back-btn"><</a>';
              }

              return '';

            case 'first':
              if (this.active) {
                return '';
              }

              return '';

            case 'last':
              if (this.active) {
                return '';
              }

              return '';

            case 'leap':
              if (this.active) {
                return '';
              }

              return '';

            case 'fill':
              if (this.active) {
                return '<span class="pagination__number">...</span>';
              }

              return '';

            case 'right':
              if (this.active) {
                return "<a href=\"#\" class=\"pagination__number\">".concat(this.value, "</a>");
              }

              return '';

            case 'left':
              if (this.active) {
                return "<a href=\"#\" class=\"pagination__number\">".concat(this.value, "</a>");
              }

              return '';

            default:
              return this;
          }
        }
      });
    }
  }, {
    key: "_findDOMElements",
    value: function _findDOMElements() {
      this._$textAmount = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-pagination__output', this._$pagination);
      this._$paginationWrapper = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-pagination__wrapper', this._$pagination);
    }
  }]);

  return Pagination;
}();

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./components/pagination/pagination.scss":
/*!***********************************************!*\
  !*** ./components/pagination/pagination.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/rate-btn/rate-btn.js":
/*!*****************************************!*\
  !*** ./components/rate-btn/rate-btn.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rate_btn_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rate-btn.scss */ "./components/rate-btn/rate-btn.scss");
/* harmony import */ var _rate_btn_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rate_btn_scss__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var RateBtn = /*#__PURE__*/function () {
  function RateBtn($rateBtn) {
    _classCallCheck(this, RateBtn);

    _defineProperty(this, "_$rateBtn", void 0);

    _defineProperty(this, "_$input", void 0);

    _defineProperty(this, "_$stars", void 0);

    this._$rateBtn = $rateBtn;

    this._init();
  }

  _createClass(RateBtn, [{
    key: "_init",
    value: function _init() {
      this._findDOMElements();

      this._bindEventListeners();

      this._addEventListeners();
    }
  }, {
    key: "_findDOMElements",
    value: function _findDOMElements() {
      this._$input = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-rate-btn__input', this._$rateBtn);
      this._$stars = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-rate-btn__star-item', this._$rateBtn);
    }
  }, {
    key: "_bindEventListeners",
    value: function _bindEventListeners() {
      this._handlerRateBtnClick = this._handlerRateBtnClick.bind(this);
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      this._$stars.on('click', this._handlerRateBtnClick);
    }
  }, {
    key: "_handlerRateBtnClick",
    value: function _handlerRateBtnClick(event) {
      event.preventDefault();
      var $btn = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
      var starRate = $btn.attr('data-number-star');

      var currentRate = this._$input.val();

      if (starRate === '1' && currentRate === '1') {
        this._$input.val(0);
      } else {
        this._$input.val(starRate);
      }
    }
  }]);

  return RateBtn;
}();

/* harmony default export */ __webpack_exports__["default"] = (RateBtn);

/***/ }),

/***/ "./components/rate-btn/rate-btn.scss":
/*!*******************************************!*\
  !*** ./components/rate-btn/rate-btn.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/slider-range/slider-range.js":
/*!*************************************************!*\
  !*** ./components/slider-range/slider-range.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webpack_jquery_ui_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack-jquery-ui/slider */ "../node_modules/webpack-jquery-ui/slider.js");
/* harmony import */ var webpack_jquery_ui_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_jquery_ui_slider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery_ui_touch_punch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery-ui-touch-punch */ "../node_modules/jquery-ui-touch-punch/jquery.ui.touch-punch.js");
/* harmony import */ var jquery_ui_touch_punch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_touch_punch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shared/constants */ "./shared/constants.js");
/* harmony import */ var _components_heading_heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/heading/heading */ "./components/heading/heading.js");
/* harmony import */ var _slider_range_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slider-range.scss */ "./components/slider-range/slider-range.scss");
/* harmony import */ var _slider_range_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_slider_range_scss__WEBPACK_IMPORTED_MODULE_5__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var SliderRange = /*#__PURE__*/function () {
  function SliderRange($sliderRange) {
    _classCallCheck(this, SliderRange);

    _defineProperty(this, "_$sliderRange", void 0);

    _defineProperty(this, "_$sliderWrapper", void 0);

    _defineProperty(this, "_$formattedOutput", void 0);

    _defineProperty(this, "_$inputMinVal", void 0);

    _defineProperty(this, "_$inputMaxVal", void 0);

    this._$sliderRange = $sliderRange;

    this._init();
  }

  _createClass(SliderRange, [{
    key: "_init",
    value: function _init() {
      var _this = this;

      this._findDOMElements();

      var valMin = parseInt(this._$sliderWrapper.attr('data-min'), 10);
      var valMax = parseInt(this._$sliderWrapper.attr('data-max'), 10);
      var val1 = parseInt(this._$sliderWrapper.attr('data-val1'), 10);
      var val2 = parseInt(this._$sliderWrapper.attr('data-val2'), 10);

      this._$sliderWrapper.slider({
        range: true,
        min: valMin,
        max: valMax,
        values: [val1, val2],
        change: function change(event, ui) {
          _this._writeValuesToInputs(ui.values);
        },
        slide: function slide(event, ui) {
          _this._getFormatValues(ui.values);
        }
      });

      this._getFormatValues(this._$sliderWrapper.slider('values'));
    }
  }, {
    key: "_findDOMElements",
    value: function _findDOMElements() {
      this._$sliderWrapper = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-slider-range__slider', this._$sliderRange);
      this._$formattedOutput = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-slider-range__formatted-output', this._$sliderRange);
      this._$inputMinVal = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-slider-range__input-min-val', this._$sliderRange);
      this._$inputMaxVal = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-slider-range__input-max-val', this._$sliderRange);
    }
  }, {
    key: "_getFormatValues",
    value: function _getFormatValues(values) {
      if (!values.length) {
        return;
      }

      var resultInputVal = '';
      resultInputVal += values[0] + _shared_constants__WEBPACK_IMPORTED_MODULE_3__["RUBLE_SIGN"];
      resultInputVal += ' - ';
      resultInputVal += values[1] + _shared_constants__WEBPACK_IMPORTED_MODULE_3__["RUBLE_SIGN"];

      this._$formattedOutput.text(resultInputVal);
    }
  }, {
    key: "_writeValuesToInputs",
    value: function _writeValuesToInputs(values) {
      if (this._$inputMinVal.length && values[0]) {
        this._$inputMinVal.val(values[0]);
      }

      if (this._$inputMaxVal.length && values[1]) {
        this._$inputMaxVal.val(values[1]);
      }
    }
  }]);

  return SliderRange;
}();

/* harmony default export */ __webpack_exports__["default"] = (SliderRange);

/***/ }),

/***/ "./components/slider-range/slider-range.scss":
/*!***************************************************!*\
  !*** ./components/slider-range/slider-range.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./shared/constants.js":
/*!*****************************!*\
  !*** ./shared/constants.js ***!
  \*****************************/
/*! exports provided: RUBLE_SIGN, COLORS, GRADIENTS, BREAKPOINTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RUBLE_SIGN", function() { return RUBLE_SIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRADIENTS", function() { return GRADIENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINTS", function() { return BREAKPOINTS; });
var RUBLE_SIGN = '₽';
var COLORS = {
  dark: '#1f2041',
  dark75: 'rgba(#1f2041, .75)',
  dark50: 'rgba(#1f2041, .50)',
  dark30: 'rgba(#1f2041, .30)',
  dark25: 'rgba(#1f2041, .25)',
  dark10: 'rgba(#1f2041, .1)',
  dark5: 'rgba(#1f2041, .05)',
  white: '#fff',
  purple: '#bc9cff',
  green: '#6fcf97',
  black: '#000'
};
var GRADIENTS = {
  purple: "linear-gradient(180deg, ".concat(COLORS.purple, " 0%, #8BA4F9 100%)"),
  green: "linear-gradient(180deg, ".concat(COLORS.green, " 0%, #66D2EA 100%)"),
  yellow: 'linear-gradient(180deg, #FFE39C 0%, #FFBA9C 100%)',
  gray: 'linear-gradient(180deg, #919191 0%, #3D4975 100%)'
};
var BREAKPOINTS = {
  xxs: 320,
  xs: 575,
  sm: 767,
  md: 991,
  lg: 1199,
  xl: 1440
};


/***/ })

}]);
//# sourceMappingURL=guide~products.js.map