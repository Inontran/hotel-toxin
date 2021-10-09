(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["guide~products"],{

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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! air-datepicker */ "../node_modules/air-datepicker/src/js/air-datepicker.js");
/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(air_datepicker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);




__webpack_require__(/*! ./air-datepicker.scss */ "./components/air-datepicker/air-datepicker.scss");

__webpack_require__(/*! @/components/button/button */ "./components/button/button.js");

moment__WEBPACK_IMPORTED_MODULE_2___default.a.lang('ru');
jquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  function formatDate(strDate) {
    if (!strDate.length) {
      return '';
    }

    let strFormattedDate = '';

    try {
      strFormattedDate = strDate.split('.', 3).reverse().join('-');
    } catch (error) {
      console.debug(error);
    }

    return strFormattedDate;
  }

  const $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
  $body.find('.js-air-datepicker.air-datepicker_inline').each(function () {
    const $airDatepicker = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    const attrMinDate = $airDatepicker.data('min-date');
    let minDateOption;

    if (attrMinDate === 'today') {
      minDateOption = new Date();
    } else if (attrMinDate) {
      try {
        minDateOption = new Date(attrMinDate);
      } catch (error) {
        console.debug(error);
      }
    }

    const $datepicker = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-air-datepicker__wrapper', $airDatepicker);
    $datepicker.datepicker({
      range: true,
      inline: true,
      navTitles: {
        days: 'MM yyyy'
      },
      minDate: minDateOption
    });
    let $parentDropdown = $airDatepicker.closest('.js-dropdown');
    const targetDropdowns = $airDatepicker.attr('data-target-dropdown');

    if (targetDropdowns) {
      $parentDropdown = jquery__WEBPACK_IMPORTED_MODULE_0___default()(targetDropdowns);
    }

    if ($parentDropdown.length) {
      const datesFromInputs = [];
      const $inputDateStart = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-text_date_start .js-input-text__field', $parentDropdown);

      if ($inputDateStart.length) {
        let valueInputDate = $inputDateStart.val();
        valueInputDate = formatDate(valueInputDate);
        if (valueInputDate) datesFromInputs.push(new Date(valueInputDate));
      }

      const $inputDateEnd = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-text_date_end .js-input-text__field', $parentDropdown);

      if ($inputDateEnd.length) {
        let valueInputDate = $inputDateEnd.val();
        valueInputDate = formatDate(valueInputDate);
        if (valueInputDate) datesFromInputs.push(new Date(valueInputDate));
      }

      if (datesFromInputs.length) {
        $datepicker.data('datepicker').selectDate(datesFromInputs);
      }
    }

    if (!$datepicker.data('datepicker').selectedDates.length) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-air-datepicker__clear-button', $airDatepicker).addClass('air-datepicker_hidden');
    }
  });

  function handlerClickClearBtn(event) {
    event.preventDefault();
    const $btn = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
    const $airDatepicker = $btn.closest('.js-air-datepicker');
    $airDatepicker.find('.js-air-datepicker__wrapper').data('datepicker').clear();
    let $parentDropdown = $airDatepicker.closest('.js-dropdown');
    const targetDropdowns = $airDatepicker.attr('data-target-dropdown');

    if (targetDropdowns) {
      $parentDropdown = jquery__WEBPACK_IMPORTED_MODULE_0___default()(targetDropdowns);
    }

    if ($parentDropdown.length) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-text_date_start .js-input-text__field', $parentDropdown).val('');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-text_date_end .js-input-text__field', $parentDropdown).val('');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-text_date_range .js-input-text__field', $parentDropdown).val('');
    }

    $btn.closest('.js-air-datepicker__clear-button').addClass('air-datepicker_hidden');
  }

  $body.on('click', '.js-air-datepicker .js-air-datepicker__clear-button .js-button', handlerClickClearBtn);

  function handlerClickSubmitBtn(event) {
    event.preventDefault();
    const $btn = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
    let $parentDropdown = $btn.closest('.js-dropdown');
    const $airDatepicker = $btn.closest('.js-air-datepicker');
    const dates = $airDatepicker.find('.js-air-datepicker__wrapper').data('datepicker').selectedDates;
    const targetDropdowns = $airDatepicker.attr('data-target-dropdown');

    if (targetDropdowns) {
      $parentDropdown = jquery__WEBPACK_IMPORTED_MODULE_0___default()(targetDropdowns);
    }

    if ($parentDropdown.length) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-text_date_range .js-input-text__field', $parentDropdown).val(`${moment__WEBPACK_IMPORTED_MODULE_2___default()(dates[0]).format('D MMM')} - ${moment__WEBPACK_IMPORTED_MODULE_2___default()(dates[1]).format('D MMM')}`);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-text_date_start .js-input-text__field', $parentDropdown).val(moment__WEBPACK_IMPORTED_MODULE_2___default()(dates[0]).format('DD.MM.YYYY'));
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-text_date_end .js-input-text__field', $parentDropdown).val(moment__WEBPACK_IMPORTED_MODULE_2___default()(dates[1]).format('DD.MM.YYYY'));
      $parentDropdown.removeClass('dropdown_aсtivated');
    }

    const $clearBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-air-datepicker__clear-button', $airDatepicker);

    if (dates.length) {
      $clearBtn.removeClass('air-datepicker_hidden');
    } else {
      $clearBtn.addClass('air-datepicker_hidden');
    }
  }

  $body.on('click', '.js-air-datepicker .js-air-datepicker__submit-button .js-button', handlerClickSubmitBtn);
});

/***/ }),

/***/ "./components/air-datepicker/air-datepicker.scss":
/*!*******************************************************!*\
  !*** ./components/air-datepicker/air-datepicker.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/card-product/card-product.js":
/*!*************************************************!*\
  !*** ./components/card-product/card-product.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! owl.carousel */ "../node_modules/owl.carousel/dist/owl.carousel.js");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_1__);



__webpack_require__(/*! ./card-product.scss */ "./components/card-product/card-product.scss");

__webpack_require__(/*! @/components/button/button */ "./components/button/button.js");

__webpack_require__(/*! @/components/rate-btn/rate-btn */ "./components/rate-btn/rate-btn.js");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-card-product__carousel', 'body').each(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).owlCarousel({
      nav: true,
      dots: true,
      items: 1,
      loop: true
    });
  });
});

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./checkbox.scss */ "./components/checkbox/checkbox.scss");

/***/ }),

/***/ "./components/checkbox/checkbox.scss":
/*!*******************************************!*\
  !*** ./components/checkbox/checkbox.scss ***!
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
      "setOptions": function (opts) {
        var parseFormat = function (format) {
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
          "onFormat": function (type) {// callback for every format element

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
          "onSelect": function (page) {
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
          "onRefresh": function (json) {// callback for new data of refresh api

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
              "success": function (data) {
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
      "setNumber": function (number) {
        Paging.number = undefined === number || number < 0 ? -1 : number;
        return Paging;
      },
      "setPage": function (page) {
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


__webpack_require__(/*! ./jquery.paging */ "./components/pagination/jquery.paging.js");

__webpack_require__(/*! ./pagination.scss */ "./components/pagination/pagination.scss");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').find('.js-pagination .js-pagination__wrapper').each(function () {
    const $pagination = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    const currentPage = $pagination.attr('data-page');
    const perpage = $pagination.attr('data-perpage');
    const countElements = $pagination.attr('data-elements');
    const $paginationOutput = $pagination.closest('.js-pagination').find('.js-pagination__output');
    let countElementsOutput = '';

    if (countElements >= 100) {
      countElementsOutput = '100+';
    } else {
      countElementsOutput = countElements;
    }

    $pagination.paging(countElements, {
      format: '< [ (q-) ncn (-p) ] >',
      perpage,
      lapping: 0,
      page: currentPage,

      onSelect() {
        let startCountElements = 0;
        const [startEl, endEl] = this.slice;

        if (startEl) {
          startCountElements = startEl;
        } else {
          startCountElements = 1;
        }

        $paginationOutput.text(`${startCountElements} - ${endEl} из ${countElementsOutput} `);
      },

      onFormat(type) {
        switch (type) {
          case 'block':
            if (!this.active) {
              return `<span class="pagination__number">${this.value}</span>`;
            }

            if (this.value !== this.page) {
              return `<a href="#" class="pagination__number">${this.value}</a>`;
            }

            return `<span class="pagination__number pagination__number_current">${this.value}</span>`;

          case 'next':
            if (this.active || this.page === 1) {
              return '<a href="#" class="pagination__next">></a>';
            }

            return '';

          case 'prev':
            if (this.active || this.page === this.pages) {
              return '<a href="#" class="pagination__prev"><</a>';
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
              return `<a href="#" class="pagination__number">${this.value}</a>`;
            }

            return '';

          case 'left':
            if (this.active) {
              return `<a href="#" class="pagination__number">${this.value}</a>`;
            }

            return '';

          default:
            return this;
        }
      }

    });
  });
});

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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


__webpack_require__(/*! ./rate-btn.scss */ "./components/rate-btn/rate-btn.scss");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  function handlerClickRateBtn(event) {
    event.preventDefault();
    const $btn = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
    const $rateBtn = $btn.closest('.js-rate-btn');
    const $inputRate = $rateBtn.find('.js-rate-btn__input');
    const starRate = $btn.attr('data-number-star');
    const currentRate = $inputRate.val();

    if (starRate === '1' && currentRate === '1') {
      $inputRate.val(0);
    } else {
      $inputRate.val(starRate);
    }
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '.js-rate-btn .js-rate-btn__star-item', handlerClickRateBtn);
});

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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webpack_jquery_ui_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack-jquery-ui/slider */ "../node_modules/webpack-jquery-ui/slider.js");
/* harmony import */ var webpack_jquery_ui_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_jquery_ui_slider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery_ui_touch_punch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery-ui-touch-punch */ "../node_modules/jquery-ui-touch-punch/jquery.ui.touch-punch.js");
/* harmony import */ var jquery_ui_touch_punch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_touch_punch__WEBPACK_IMPORTED_MODULE_2__);




__webpack_require__(/*! @/components/heading/heading */ "./components/heading/heading.js");

__webpack_require__(/*! ./slider-range.scss */ "./components/slider-range/slider-range.scss");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(() => {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').find('.js-slider-range').each(function () {
    const $currentSlider = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    const $sliderWrapper = $currentSlider.find('.js-slider-range__slider');
    const $currentInput = $currentSlider.find('.js-slider-range__input-result');
    const $inputMinVal = $currentSlider.find('.js-slider-range__min-val');
    const $inputMaxVal = $currentSlider.find('.js-slider-range__max-val');
    const valMin = parseInt($sliderWrapper.attr('data-min'), 10);
    const valMax = parseInt($sliderWrapper.attr('data-max'), 10);
    const val1 = parseInt($sliderWrapper.attr('data-val1'), 10);
    const val2 = parseInt($sliderWrapper.attr('data-val2'), 10);

    function getFormatValues(values) {
      if (!values.length) {
        return;
      }

      let resultInputVal = '';
      resultInputVal += values[0] + jquery__WEBPACK_IMPORTED_MODULE_0___default.a.RUBLE;
      resultInputVal += ' - ';
      resultInputVal += values[1] + jquery__WEBPACK_IMPORTED_MODULE_0___default.a.RUBLE;
      $currentInput.val(resultInputVal);
    }

    function writeValuesToInputs(values) {
      if ($inputMinVal.length && values[0]) {
        $inputMinVal.val(values[0]);
      }

      if ($inputMaxVal.length && values[1]) {
        $inputMaxVal.val(values[1]);
      }
    }

    $sliderWrapper.slider({
      range: true,
      min: valMin,
      max: valMax,
      values: [val1, val2],
      change: (event, ui) => {
        writeValuesToInputs(ui.values);
      },
      slide: (event, ui) => {
        getFormatValues(ui.values);
      }
    });
    getFormatValues($sliderWrapper.slider('values'));
  });
});

/***/ }),

/***/ "./components/slider-range/slider-range.scss":
/*!***************************************************!*\
  !*** ./components/slider-range/slider-range.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=guide~products.js.map