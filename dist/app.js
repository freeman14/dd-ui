(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["angular", "moment"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("angular"), require("moment")) : factory(root["angular"], root["moment"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../typings/index.d.ts" /> 
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(2), __webpack_require__(13), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, angular, index_1) {
	    "use strict";
	    var mainModule = angular.module('sb', [
	        'helper',
	        index_1.default
	    ]);
	    var preview = document.createElement('preview-helper');
	    document.body.appendChild(preview);
	    angular.element(preview)
	        .ready(function () {
	        angular.bootstrap(preview, [mainModule.name], { strictDi: false });
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7OztJQVMvQyxJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtRQUN0QyxRQUFRO1FBQ1IsZUFBSTtLQUNMLENBQUMsQ0FBQztJQUVILElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN2RCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVuQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztTQUNyQixLQUFLLENBQUM7UUFDTCxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUMsQ0FBQyxDQUFDIn0=

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, angular, dateRangePicker_module_1) {
	    "use strict";
	    var module = angular.module('dd-ui', [
	        dateRangePicker_module_1.default,
	    ]);
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = module.name;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUdBLElBQU0sTUFBTSxHQUFlLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQ2pELGdDQUFnQjtLQUNqQixDQUFDLENBQUM7SUFFSDtzQkFBZSxNQUFNLENBQUMsSUFBSSxDQUFDIn0=

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(4), __webpack_require__(5), __webpack_require__(8), __webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, angular, moment, dateRangePicker_component_1) {
	    "use strict";
	    var module = angular.module('ep.dateRangePicker', ['obDateRangePicker']);
	    module.component('epDateRangePicker', dateRangePicker_component_1.DateRangePickerComponent);
	    module.constant('moment', moment); // todo: remove dirty hack
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = module.name;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZVJhbmdlUGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGVSYW5nZVBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFRQSxJQUFNLE1BQU0sR0FBZSxPQUFPLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLE1BQU0sQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEVBQUUsb0RBQXdCLENBQUMsQ0FBQztJQUNoRSxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLDBCQUEwQjtJQUU3RDtzQkFBZSxNQUFNLENBQUMsSUFBSSxDQUFDIn0=

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, dateRangePicker_controller_1) {
	    "use strict";
	    exports.DateRangePickerComponent = {
	        controller: dateRangePicker_controller_1.DateRangePickerController,
	        controllerAs: 'vm',
	        template: __webpack_require__(7),
	        transclude: true,
	        bindings: {
	            title: '@titleText',
	            onDateRangeChange: '&'
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZVJhbmdlUGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGVSYW5nZVBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFFYSxnQ0FBd0IsR0FBeUI7UUFDNUQsVUFBVSxFQUFFLHNEQUF5QjtRQUNyQyxZQUFZLEVBQUUsSUFBSTtRQUNsQixRQUFRLEVBQUUsT0FBTyxDQUFDLGdDQUFnQyxDQUFDO1FBQ25ELFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFFBQVEsRUFBRTtZQUNSLEtBQUssRUFBRSxZQUFZO1lBQ25CLGlCQUFpQixFQUFFLEdBQUc7U0FDdkI7S0FDRixDQUFDIn0=

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, moment) {
	    "use strict";
	    var DATE_FORMAT = 'MM/DD/YYYY';
	    var DATE_INPUTS = {
	        FIRST: 'first',
	        SECOND: 'second',
	    };
	    var DateRangePickerController = (function () {
	        // @ngInject
	        DateRangePickerController.$inject = ["$scope"];
	        function DateRangePickerController($scope) {
	            this.$scope = $scope;
	        }
	        DateRangePickerController.prototype.$onInit = function () {
	            this.dateInputs = DATE_INPUTS;
	            this.opened = false;
	            this.startDate = moment().format(DATE_FORMAT);
	            this.endDate = moment().format(DATE_FORMAT);
	            this.maxDate = moment();
	            this.turn = DATE_INPUTS.FIRST;
	            this.dateRangeApi = {};
	            this.linked = true;
	            this.removeDayHighlighting();
	            this.popover = document.querySelector('.date-range-picker-popover');
	            this.popover.addEventListener('click', this.stopEventPropagation, false);
	            this.input = document.querySelector('.date-range-picker-date-btn-group');
	            this.input.addEventListener('click', this.stopEventPropagation, false);
	            document.body.addEventListener('click', this.closeCalendarOnWindowClick.bind(this), false);
	        };
	        DateRangePickerController.prototype.$onDestroy = function () {
	            document.body.removeEventListener('click', this.closeCalendarOnWindowClick.bind(this), false);
	            this.popover.removeEventListener('click', this.stopEventPropagation, false);
	            this.input.removeEventListener('click', this.stopEventPropagation, false);
	        };
	        DateRangePickerController.prototype.openCalendar = function () {
	            this.opened = true;
	        };
	        DateRangePickerController.prototype.closeCalendar = function () {
	            this.removeDayHighlighting();
	            this.opened = false;
	        };
	        DateRangePickerController.prototype.firstDaySelected = function (days) {
	            this.onDateClick(DATE_INPUTS.SECOND);
	            this.startDate = days.start.clone().format(DATE_FORMAT);
	            this.endDate = days.end.clone().format(DATE_FORMAT);
	            this.onDateRangeChange({ start: days.start.clone(), end: days.end.clone() });
	        };
	        DateRangePickerController.prototype.secondDaySelected = function (days) {
	            this.startDate = days.start.clone().format(DATE_FORMAT);
	            this.endDate = days.end.clone().format(DATE_FORMAT);
	            this.onDateRangeChange({ start: days.start.clone(), end: days.end.clone() });
	            this.closeCalendar();
	        };
	        DateRangePickerController.prototype.removeDayHighlighting = function () {
	            this.selectedDate = null;
	        };
	        DateRangePickerController.prototype.onDateClick = function (day) {
	            this.openCalendar();
	            this.turn = day;
	            this.selectedDate = day;
	        };
	        DateRangePickerController.prototype.closeCalendarOnWindowClick = function () {
	            this.closeCalendar();
	            this.$scope.$digest();
	        };
	        DateRangePickerController.prototype.stopEventPropagation = function (event) {
	            event.stopPropagation();
	        };
	        return DateRangePickerController;
	    }());
	    exports.DateRangePickerController = DateRangePickerController;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZVJhbmdlUGlja2VyLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRlUmFuZ2VQaWNrZXIuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUdBLElBQU0sV0FBVyxHQUFXLFlBQVksQ0FBQztJQUN6QyxJQUFNLFdBQVcsR0FBUTtRQUNyQixLQUFLLEVBQUUsT0FBTztRQUNkLE1BQU0sRUFBRSxRQUFRO0tBQ25CLENBQUM7SUFFRjtRQXFCSSxZQUFZO1FBQ1osbUNBQW9CLE1BQWlCO1lBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFBRyxDQUFDO1FBRXpDLDJDQUFPLEdBQVA7WUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQztZQUU5QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUU1QyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUVuQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUU3QixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUNwRSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFFekUsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7WUFDekUsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRXZFLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0YsQ0FBQztRQUVELDhDQUFVLEdBQVY7WUFDSSxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzlGLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDOUUsQ0FBQztRQUVNLGdEQUFZLEdBQW5CO1lBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQztRQUVNLGlEQUFhLEdBQXBCO1lBQ0ksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQztRQUVNLG9EQUFnQixHQUF2QixVQUF3QixJQUFvQztZQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pGLENBQUM7UUFFTSxxREFBaUIsR0FBeEIsVUFBeUIsSUFBb0M7WUFDekQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQztRQUVPLHlEQUFxQixHQUE3QjtZQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzdCLENBQUM7UUFFTywrQ0FBVyxHQUFuQixVQUFvQixHQUFXO1lBQzNCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUNoQixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUM1QixDQUFDO1FBRU8sOERBQTBCLEdBQWxDO1lBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUIsQ0FBQztRQUVPLHdEQUFvQixHQUE1QixVQUE2QixLQUFZO1lBQ3JDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QixDQUFDO1FBQ0wsZ0NBQUM7SUFBRCxDQUFDLEFBOUZELElBOEZDO0lBOUZZLGlDQUF5Qiw0QkE4RnJDLENBQUEifQ==

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<div class=\"date-range-picker\">\n    <div class=\"date-range-picker-title\" ng-bind=\"vm.title\"></div>\n\n    <div class=\"date-range-picker-date-btn-group\"\n         ng-class=\"{'date-range-picker-active-left': vm.selectedDate === vm.dateInputs.FIRST,\n                    'date-range-picker-active-right': vm.selectedDate === vm.dateInputs.SECOND}\">\n        <span class=\"date-range-picker-date date-range-picker-date-left\" ng-bind=\"vm.startDate\" ng-click=\"vm.onDateClick(vm.dateInputs.FIRST)\"></span>\n        <span>&rarr;</span>\n        <span class=\"date-range-picker-date date-range-picker-date-right\" ng-bind=\"vm.endDate\" ng-click=\"vm.onDateClick(vm.dateInputs.SECOND)\"></span>\n    </div>\n    <div  ng-class=\"{'date-range-picker-popover-closed': !vm.opened}\" class=\"date-range-picker-popover\">\n        <div class=\"date-range-picker-popover-arrow\">\n        </div>\n        <ob-daterangepicker\n                min-day=\"vm.minDate\"\n                max-day=\"vm.maxDate\"\n                linked-calendars=\"vm.linked\"\n                first-day-change=\"vm.firstDaySelected(days)\"\n                second-day-change=\"vm.secondDaySelected(days)\"\n                range=\"vm.range\"\n                static=\"vm.eventDurationRange\"\n                api=\"vm.dateRangeApi\"\n                turn=\"vm.turn\">\n        </ob-daterangepicker>\n        <div class=\"date-range-picker-popover-footer\">\n            <ng-transclude></ng-transclude>\n        </div>\n    </div>\n</div>"

/***/ },
/* 8 */
/***/ function(module, exports) {

	/******/!function(e){function t(n){if(a[n])return a[n].exports;var i=a[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}// webpackBootstrap
	/******/
	var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){a(1),e.exports=a(6)},function(e,t,a){"use strict";var n=a(2),i=a(3),r=a(4),s=a(5);angular.module("obDateRangePicker",[]).directive("dateRangePicker",n.DateRangePicker).directive("obDaterangepicker",r.ObDateRangePicker).directive("calendar",i.Calendar).directive("obDaypicker",s.ObDayPicker)},function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(){"ngInject";var e={restrict:"E",scope:{weekStart:"&",range:"=?","static":"=?",minDay:"&",maxDay:"&",api:"&",monthFormat:"&",inputFormat:"&",weekDaysName:"&",linkedCalendars:"&",interceptors:"&",turn:"&"},templateUrl:"app/directives/date-range-picker/date-range-picker.html",controller:s,controllerAs:"picker",bindToController:!0};return e}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};t.DateRangePicker=n;var s=function(){
	e.$inject = ["t", "n"];function e(t,n){"ngInject";a(this,e),this.Moment=t,this.Scope=n,this.range=this.range||{},this["static"]=this["static"]||{},this.setConfigurations(),this.startCalendarApi={},this.endCalendarApi={},this.setInterceptors(),this.setListeners(),this.setApi(),this.watchRangeChange(),this.interceptors=this.interceptors()||{},this.minRangeDay=void 0,this.maxRangeDay=void 0,this.hovered=void 0}return e.$inject=["moment","$scope"],i(e,[{key:"setApi",value:function(){var e=this,t=this.api()||{};r(t,{setCalendarPosition:function(t,a){e.startCalendar=t,e.linkedCalendars()||t.isSame(a,"M")?(e.endCalendar=e.startCalendar.clone(),e.startCalendar=e.startCalendar.subtract(1,"M")):e.endCalendar=a},render:function(){e.startCalendarApi.render(),e.endCalendarApi.render()}})}},{key:"setListeners",value:function(){var e=this;this.Scope.$watchGroup([function(){return e.range.start},function(){return e.range.end}],function(t){t[0]&&t[1]&&e.setConfigurations()})}},{key:"setConfigurations",value:function(){var e=void 0,t=void 0;this.isMomentRange(this.range)?(e=this.range.start,t=this.range.end):(e=this.Moment(this.range.start,this.getFormat()),t=this.Moment(this.range.end,this.getFormat())),t=t.diff(e)>=0?t:e.clone(),this.rangeStart=e,this.rangeEnd=t,this.daysSelected=2,this.updateRange()}},{key:"updateRange",value:function(){this.isMomentRange(this.range)?(this.range.start=this.rangeStart,this.range.end=this.rangeEnd):(this.range.start=this.rangeStart?this.rangeStart.format(this.getFormat()):null,this.range.end=this.rangeEnd?this.rangeEnd.format(this.getFormat()):null)}},{key:"setInterceptors",value:function(){var e=this;this.startCalendarInterceptors={moveToPrevClicked:function(){e.moveCalenders(-1,"start")},moveToNextClicked:function(){e.moveCalenders(1,"start")},daySelected:function(t){e.dayInStartSelected(t),e.daySelected(t),2==e.daysSelected?(e.interceptors.secondDaySelected&&e.interceptors.secondDaySelected({start:e.rangeStart,end:e.rangeEnd}),e.minRangeDay=void 0,e.maxRangeDay=void 0):(e.interceptors.firstDaySelected&&e.interceptors.firstDaySelected({start:e.rangeStart,end:e.rangeEnd}),angular.isDefined(t.mo)?(e.minRangeDay=t.mo.clone(),e.maxRangeDay=t.mo.clone().add(29,"days")):(e.minRangeDay=t.clone(),e.maxRangeDay=t.clone().add(29,"days")))},inputSelected:function(t){e.inputInStartSelected(t)},dayHovered:function(t,a){e.onHover(t,a)}},this.endCalendarInterceptors={moveToPrevClicked:function(){e.moveCalenders(-1,"end")},moveToNextClicked:function(){e.moveCalenders(1,"end")},daySelected:function(t){e.dayInEndSelected(t),e.daySelected(t),2==e.daysSelected?(e.interceptors.secondDaySelected&&e.interceptors.secondDaySelected({start:e.rangeStart,end:e.rangeEnd}),e.minRangeDay=void 0,e.maxRangeDay=void 0):e.interceptors.firstDaySelected&&e.interceptors.firstDaySelected({start:e.rangeStart,end:e.rangeEnd})},inputSelected:function(t){e.inputInEndSelected(t)},dayHovered:function(t,a){e.onHover(t,a)}}}},{key:"inputInStartSelected",value:function(e){switch(this.daysSelected){case 0:case 1:this.rangeStart=e,this.daysSelected=1;break;case 2:e.diff(this.rangeStart,"days")<0?this.rangeStart=e:e.isBetween(this.rangeStart,this.rangeEnd)?this.rangeStart=e:e.diff(this.rangeEnd,"days")>=0&&(this.rangeStart=e,this.rangeEnd=e),this.daysSelected=2,this.updateRange()}}},{key:"inputInEndSelected",value:function(e){switch(this.daysSelected){case 0:this.rangeStart=e,this.daysSelected=1;break;case 1:case 2:e.diff(this.rangeStart,"days")<=0?(this.rangeStart=e,this.rangeEnd=e):e.isSame(this.startCalendar,"months")||e.isSame(this.endCalendar,"months")?this.rangeEnd=e:e.isSame(this.endCalendar,"months")||(this.rangeEnd=e),this.daysSelected=2,this.updateRange()}}},{key:"dayInStartSelected",value:function(e){var t=this.startCalendar.clone().add(1,"M");e.isSame(t,"month")&&this.dayInEndSelected(e)}},{key:"dayInEndSelected",value:function(e){var t=this.endCalendar.clone().subtract(1,"M");e.isSame(t,"month")&&this.dayInStartSelected(e)}},{key:"daySelected",value:function(e){var t=this.turn();"first"===t?(e.diff(this.rangeEnd,"days")<-29&&(this.rangeEnd=e.clone()),this.rangeStart=e,this.daysSelected=1):"second"===t&&(e.diff(this.rangeStart,"days")<0?(this.rangeEnd=e.clone(),this.rangeStart=e,this.daysSelected=1):(this.rangeEnd=e,this.daysSelected=2)),this.updateRange()}},{key:"onHover",value:function(e,t){t?angular.isDefined(e.mo)?this.dayHovered=e.mo.clone():this.dayHovered=e.clone():this.dayHovered=void 0}},{key:"moveCalenders",value:function(e,t){this.areCalendarsLinked()?(this.startCalendar=this.startCalendar.clone().add(e,"M"),this.endCalendar=this.endCalendar.clone().add(e,"M")):"start"===t?this.startCalendar=this.startCalendar.clone().add(e,"M"):this.endCalendar=this.endCalendar.clone().add(e,"M")}},{key:"isMomentRange",value:function(e){var t=!1;return e&&e.start&&e.end&&(t=this.Moment.isMoment(this.range.start)&&this.Moment.isMoment(this.range.end)),t}},{key:"watchRangeChange",value:function(){var e=this;this.Scope.$watchGroup([function(){return e.rangeStart},function(){return e.rangeEnd}],function(t){var a=t[0],n=t[1];return"undefined"!=typeof e.maxDay()&&"undefined"!=typeof a&&a.format("MM-YYYY")===e.maxDay().format("MM-YYYY")?(e.startCalendar=a.clone().subtract(1,"M"),void(e.endCalendar=a)):void(e.startCalendar||e.endCalendar?(e.startCalendar=a,e.endCalendar=a.clone().add(1,"M")):a.date()<15&&n.date()<21&&a.isSame(n,"M")?(e.startCalendar=a.clone().subtract(1,"M"),e.endCalendar=a):(e.startCalendar=a,e.endCalendar=a.clone().add(1,"M")))})}},{key:"areCalendarsLinked",value:function(){return angular.isDefined(this.linkedCalendars())?this.linkedCalendars():!0}}]),e}()},function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(){"ngInject";var e={restrict:"E",scope:{minDay:"&",minRangeDay:"&",maxRangeDay:"&",maxDay:"&",weekStart:"&",getMonth:"&month",getInterceptors:"&interceptors",rangeStart:"&",rangeEnd:"&",selectedDay:"&",minMonth:"&",maxMonth:"&",weekDaysName:"&",monthFormat:"&",inputFormat:"&",showInput:"&",hovered:"&",type:"&",api:"=?","static":"=?",turn:"&"},templateUrl:"app/directives/calendar/calendar.html",controller:s,controllerAs:"month",bindToController:!0};return e}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};t.Calendar=n;var s=function(){
	e.$inject = ["t", "n", "i"];function e(t,n,i){"ngInject";a(this,e),this.Moment=t,this.Scope=n,this.Attrs=i,this.api&&this.setApi(),this.firstRender()}return e.$inject=["moment","$scope","$attrs"],i(e,[{key:"setApi",value:function(){r(this.api,{render:this.render.bind(this)})}},{key:"firstRender",value:function(){this.defaultWeekDaysNames=this.weekDaysName()||["Su","Mo","Tu","We","Th","Fr","Sa"],this.firstDayOfWeek=this.weekStart()||"su",this.daysOfWeek=this.buildWeek(this.firstDayOfWeek),this.calendar=this.buildCalendar(this.getMonth()),this.interceptors=this.getInterceptors()||{},this.setListeners(),this.daysName=this.setWeekDaysNames(this.daysOfWeek)}},{key:"render",value:function(){this.daysOfWeek=this.buildWeek(this.firstDayOfWeek)}},{key:"setValue",value:function(){this.selectedDay()&&(this.value=this.selectedDay().format(this.getInputFormat()))}},{key:"setWeekDaysNames",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?this.defaultWeekDaysNames:arguments[1],a=[],n={su:0,mo:1,tu:2,we:3,th:4,fr:5,sa:6};return e.forEach(function(e,i){var r=n[e];a[i]=t[r]}),a}},{key:"setListeners",value:function(){var e=this;this.Scope.$watch(function(){return e.getMonth()},function(t){e.calendar=e.buildCalendar(t)}),this.Scope.$watch(function(){return e.hovered()},function(t){e.updateDaysProperties(e.calendar.monthWeeks,t)}),this.Scope.$watchGroup([function(){return e.rangeStart()},function(){return e.rangeEnd()},function(){return e.turn()}],function(){e.setValue(),e.updateDaysProperties(e.calendar.monthWeeks),e.showRightArrow()})}},{key:"updateDaysProperties",value:function(e){var t=this,a=this.minDay(),n=this.maxDay(),i=this.selectedDay(),r=this.rangeStart(),s=this.rangeEnd(),o=this.turn(),d=this.isHoverInRange(),c=this.maxRangeDay(),l=!1;this["static"]&&this["static"].end&&(l=this["static"].end.diff(this["static"].start,"day")>29),"second"===o&&"undefined"==typeof c&&(c=r.clone().add(29,"days")),e.forEach(function(e){e.forEach(function(e){e.selected=e.mo.isSame(i||null,"day"),e.inRange=t.isInRange(e.mo),e.future=e.mo.isAfter(n,"day"),e.rangeStart=e.mo.isSame(r||null,"day"),e.rangeEnd=e.mo.isSame(s||null,"day"),e.staticRangeStart=e.mo.isSame(t["static"].start||null,"day"),e.staticRangeEnd=e.mo.isSame(t["static"].end||null,"day"),l?(e.staticRangeEnd||e.staticRangeStart)&&(e.inStaticRange=t.isInStaticRange(e.mo)):e.inStaticRange=t.isInStaticRange(e.mo),e.opacity=!1,"second"===o&&"undefined"!=typeof t.hovered()?(e.inRange=t.isInSecondHoverRange(e.mo,c),d===!0&&(e.rangeEnd=!1),t.hovered()<r&&r<=e.mo&&e.mo<=s&&(e.inRange=!0)):"first"===o&&"undefined"!=typeof t.hovered()&&(d===!0?(e.inRange=t.isInFirstHoverRange(e),e.rangeStart=!1,e.selected=!1):(e.rangeStart=!1,e.rangeEnd=!1,e.selected=!1,e.opacity=!0)),a&&(e.disabled=e.mo.isBefore(a,"day")),n&&!e.disabled?e.disabled=e.mo.isAfter(n,"day"):e.disabled=!1,"second"===o&&(e.disabled=e.mo.isAfter(c,"day"))})})}},{key:"buildWeek",value:function(e){var t=["su","mo","tu","we","th","fr","sa"],a=t.indexOf(e.toLowerCase()),n=t.slice(0,a),i=t.slice(a,t.length),r=i.concat(n);return r}},{key:"buildCalendar",value:function(){for(var e=arguments.length<=0||void 0===arguments[0]?this.Moment():arguments[0],t=[[],[],[],[],[],[]],a=this.getMonthDateRange(e.year(),e.month()+1),n=a.start,i=this.daysOfWeek.indexOf(n.format("dd").toLowerCase()),r=n.clone().subtract(i,"d"),s=0;6>s;s++)for(var o=0;7>o;o++)t[s][o]={mo:r,currentDay:r.isSame(this.Moment(),"day"),currentMonth:r.isSame(e,"month")},r=r.clone().add(1,"d");return this.updateDaysProperties(t),{currentCalendar:e,selectedDate:e,firstDayOfMonth:a.start.format("D"),lastDayOfMonth:a.end.format("D"),monthWeeks:t}}},{key:"moveCalenderByMonth",value:function(e){var t=this.calendar.currentCalendar;this.month=t.clone().add(e,"M"),this.calendar=this.buildCalendar(this.month.clone())}},{key:"moveToNext",value:function(){this.interceptors.moveToNextClicked?this.interceptors.moveToNextClicked.call(this.interceptors.context):this.moveCalenderByMonth(1)}},{key:"moveToPrev",value:function(){this.hideRight=!0,this.interceptors.moveToPrevClicked?this.interceptors.moveToPrevClicked.call(this.interceptors.context):this.moveCalenderByMonth(-1)}},{key:"getMonthDateRange",value:function(e,t){var a=this.Moment([e,t-1]),n=this.Moment(a).endOf("month");return{start:a,end:n}}},{key:"isInRange",value:function(e){var t=!1,a=this.rangeStart()||null,n=this.rangeEnd()||null;return t=e.isBetween(a,n)||e.isSame(a,"day")||t||e.isSame(n,"day")}},{key:"isInHoverRange",value:function(e){var t=!1,a=this.rangeStart()||null,n=this.hovered()||null;return t=e.isBetween(a,n)||e.isSame(n,"day")}},{key:"isHoverInRange",value:function(){var e=this.hovered()||null,t=this.rangeEnd().clone().subtract(29,"days")||null,a=this.rangeEnd()||null;return null!==e?e.isBetween(t,a.endOf("day"))||e.isSame(t,"day")||e.isSame(a,"day"):void 0}},{key:"isInFirstHoverRange",value:function(e){var t="undefined"!=typeof e.mo?e.mo:e,a=!1,n=this.rangeEnd()||null,i=this.hovered()||null;return a=t.isBetween(i,n.endOf("day"))||t.isSame(i,"day")||t.isSame(n,"day")}},{key:"isInSecondHoverRange",value:function(e,t){var a="undefined"!=typeof e.mo?e.mo:e,n=!1,i=this.hovered()||null,r=this.rangeStart()||null;return(a.isBetween(r,t.endOf("day"))||a.format("MM-DD-YYYY")==r.format("MM-DD-YYYY"))&&(n=a.isBetween(r,i)||a.isSame(r,"day")||a.isSame(i,"day"),i.diff(r,"days")<0&&(n=!1)),n}},{key:"isOutOfFirstHoverRange",value:function(){var e=!1,t=this.rangeEnd()||null,a=this.hovered()||null;return e=a.diff(t,"days")<-29}},{key:"isInStaticRange",value:function(e){var t=!1,a=this["static"].start||null,n=this["static"].end||null;return t=e.isBetween(a,n)||e.isSame(a,"day")||t||e.isSame(n,"day")}},{key:"daySelected",value:function(e){this.dayHovered(e,!1),e.disabled||e.future||this.interceptors.daySelected&&this.interceptors.daySelected.call(this.interceptors.context,e.mo)}},{key:"dayHovered",value:function(e,t){e.disabled||e.future||this.interceptors.dayHovered&&this.interceptors.dayHovered.call(this.interceptors.context,e.mo,t)}},{key:"dateInputEntered",value:function(e,t){13==e.keyCode&&(this.dateInputSelected(e,t),e.preventDefault())}},{key:"dateInputSelected",value:function(e,t){var a=this.Moment(t,this.getInputFormat(),!0);if(a.isValid()){var n=this.minDay(),i=this.maxDay();a=n&&a.isBefore(n,"day")?n:a,a=i&&a.isAfter(i,"day")?i:a,this.selectedDay()&&this.selectedDay().isSame(a,"day")||(this.interceptors.inputSelected?this.interceptors.inputSelected(a):this.daySelected({mo:a}))}}},{key:"getFormattedMonth",value:function(e){return this.Moment(e).format(this.getMonthFormat())}},{key:"getMonthFormat",value:function(){return this.monthFormat()||"MMMM YYYY"}},{key:"getInputFormat",value:function(){return this.inputFormat()||"MMM DD, YYYY"}},{key:"showLeftArrow",value:function(){return this.minMonth()?!this.minMonth().isSame(this.getMonth().clone().subtract(1,"M"),"M"):!0}},{key:"showRightArrow",value:function(){return this.getMonth()&&this.maxDay()&&this.getMonth().format("MM-YYYY")===this.maxDay().format("MM-YYYY")?(this.hideRightArrow=!1,!1):"second"===this.turn()&&this.selectedDay().diff(this.getMonth(),"days")>15&&"second"===this.type()?(this.hideRightArrow=!0,!0):angular.isObject(this.getMonth())&&("second"===this.turn()||this.getMonth()>this.maxDay()||this.getMonth()>this.maxRangeDay()||this.getMonth()>this.maxMonth())?(this.hideRightArrow=!1,!1):(this.hideRightArrow=this.maxMonth()?!this.maxMonth().isSame(this.getMonth().clone().add(1,"M"),"M"):!0,this.hideRightArrow)}},{key:"_showInput",value:function(){return angular.isDefined(this.showInput())?this.showInput():!0}}]),e}()},function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(){"ngInject";var e={restrict:"E",scope:{weekStart:"&",range:"=?","static":"=?",weekDaysName:"&",format:"&",ranges:"&",minDay:"&",maxDay:"&",monthFormat:"&",inputFormat:"&",onApply:"&",linkedCalendars:"&",autoApply:"&",firstDayChange:"&",secondDayChange:"&",disabled:"&",calendarsAlwaysOn:"&",turn:"&",api:"=?"},controller:o,templateUrl:"app/directives/ob-date-range-picker/ob-date-range-picker.html",controllerAs:"obDateRangePicker",bindToController:!0};return e}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){var a=[],n=!0,i=!1,r=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(d){i=!0,r=d}finally{try{!n&&o["return"]&&o["return"]()}finally{if(i)throw r}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};t.ObDateRangePicker=n;var o=function(){
	e.$inject = ["t", "n", "i", "r"];function e(t,n,i,r){"ngInject";var o=this;a(this,e),this.Element=n,this.Document=t,this.Scope=i,this.Moment=r,this.range=this.range||{},this["static"]=this["static"]||{},this.pickerApi={},this.isCustomVisible=this.calendarsAlwaysOn(),this.setOpenCloseLogic(),this.setWatchers(),this.value="Select a Range",this.api&&s(this.api,{setDateRange:this.setDateRange.bind(this),render:function(){o.render(),o.pickerApi.render()}}),this.preRanges=this.ranges()||[],this.preRanges.length?this.preRanges.push({name:"Custom",isCustom:!0}):this.isCustomVisible=!0,this.render(),this.setListeners()}return e.$inject=["$document","$element","$scope","moment"],r(e,[{key:"render",value:function(){if(this._range={start:this.Moment(),end:this.Moment()},this.setPredefinedStatus(),this.range.start&&this.range.end&&!this.Moment.isMoment(this.range.start)&&!this.Moment.isMoment(this.range.end)&&this.format())this._range={start:this.Moment(this.range.start,this.getFormat()),end:this.Moment(this.range.end,this.getFormat())};else if(this.Moment.isMoment(this.range.start)&&this.Moment.isMoment(this.range.end))this._range={start:this.range.start,end:this.range.end};else if(this.preRanges.length>1){var e=this.preRanges[0];this._range.start=e.start,this._range.end=e.end}this._range.start.isAfter(this._range.end)?this._range.start=this._range.end.clone():this._range.end.isBefore(this._range.start)&&(this._range.end=this._range.start.clone()),this.applyMinMaxDaysToRange(),this.setRange(),this.markPredefined(this._range.start,this._range.end),this.setPickerInterceptors()}},{key:"applyMinMaxDaysToRange",value:function(){if(this.minDay()){var e=this._getMinDay();this._range.start=this._range.start.isBefore(e,"d")?e:this._range.start,this._range.end=this._range.end.isBefore(e,"d")?e:this._range.end}if(this.maxDay()){var t=this._getMaxDay();this._range.start=this._range.start.isAfter(t)?t:this._range.start,this._range.end=this._range.end.isAfter(t)?t:this._range.end}}},{key:"setPickerInterceptors",value:function(){var e=this;this.pickerInterceptors={firstDaySelected:function(t){e.firstDayChange({days:t})},secondDaySelected:function(t){e.secondDayChange({days:t})},rangeSelectedByClick:function(){e.applyChanges()}}}},{key:"setPredefinedStatus",value:function(){var e=this;this.preRanges.forEach(function(t){if(!t.isCustom){if(t.disabled=!1,e.minDay()){var a=e._getMinDay();t.disabled=t.start.isBefore(a,"d")}if(!t.disabled&&e.maxDay()){var n=e._getMaxDay();t.disabled=t.end.isAfter(n,"d")}}})}},{key:"setWatchers",value:function(){var e=this;this.Scope.$watchGroup([function(){return e._range.start},function(){return e._range.end}],function(t){var a=i(t,2),n=a[0],r=a[1];e.selfChange||n&&r&&(e.preRanges.length&&(e.preRanges[e.preRanges.length-1].start=n,e.preRanges[e.preRanges.length-1].end=r,e.markPredefined(n,r)),e.value=e.getRangeValue()),e.selfChange=!1})}},{key:"setOpenCloseLogic",value:function(){this.isPickerVisible=!1,this.pickerPopup=angular.element(this.Element[0].querySelector(".picker")),this.elemClickFlag=!1}},{key:"setListeners",value:function(){var e=this,t={documentClick:function(){e.elemClickFlag?e.elemClickFlag=!1:(e.isPickerVisible&&e.discardChanges(),e.Scope.$apply())},documentEsc:function(t){27==t.keyCode&&e.isPickerVisible&&(e.discardChanges(),e.hidePicker(),e.Scope.$apply())},pickerClick:function(){e.elemClickFlag=!0,e.Scope.$apply()}};this.pickerPopup.on("click",t.pickerClick.bind(this)),this.Document.on("click",t.documentClick.bind(this)),this.Document.on("keydown",t.documentEsc.bind(this)),this.Scope.$on("$destroy",function(){e.pickerPopup.off("click",t.pickerClick),e.Document.off("click",t.documentClick),e.Document.off("keydown",t.documentClick)})}},{key:"togglePicker",value:function(){var e=angular.isDefined(this.disabled())?this.disabled():!1;e||this.isPickerVisible?this.isPickerVisible=!1:(this.isPickerVisible=!0,this.elemClickFlag=!0)}},{key:"setRange",value:function(){var e=arguments.length<=0||void 0===arguments[0]?this._range:arguments[0];this.format()?(this.range.start=e.start.format(this.getFormat()),this.range.end=e.end.format(this.getFormat())):(this.range.start=e.start,this.range.end=e.end)}},{key:"predefinedRangeSelected",value:function(e,t){e.disabled||(e.isCustom?this.isCustomVisible=!0:(this.selfChange=!0,this.selectedRengeIndex=t,this.value=e.name,this._range.start=e.start,this._range.end=e.end,this.isCustomVisible=this.calendarsAlwaysOn()||!1,this.applyChanges()))}},{key:"getFormat",value:function(){return this.format()||"MM-DD-YYYY"}},{key:"discardChanges",value:function(){var e=this.getFormat(),t=this.Moment(this.range.start,e),a=this.Moment(this.range.end,e);this._range.start=t,this._range.end=a,this.value=this.getRangeValue(),this.pickerApi.setCalendarPosition(t,a),this.hidePicker()}},{key:"markPredefined",value:function(e,t){this.selectedRengeIndex=this.preRanges.findIndex(function(a){return e.isSame(a.start,"day")&&t.isSame(a.end,"day")})}},{key:"getRangeValue",value:function(){var e=this,t=void 0,a=this.getInputFormat();if(this.preRanges.length){var n=this.preRanges.findIndex(function(t){return e._range.start.isSame(t.start,"day")&&e._range.end.isSame(t.end,"day")});-1!==n&&(t=this.preRanges[n].isCustom?this.preRanges[n].start.format(a)+" - "+this.preRanges[n].end.format(a):this.preRanges[n].name)}else t=this._range.start.format(a)+" - "+this._range.end.format(a);return t}},{key:"applyChanges",value:function(){var e=arguments.length<=0||void 0===arguments[0]?!0:arguments[0];this.setRange(),e&&this.onApply&&this.onApply({start:this._range.start,end:this._range.end})}},{key:"getInputFormat",value:function(){return this.inputFormat()||"MMM DD, YYYY"}},{key:"setDateRange",value:function(e){this._range.start=e.start,this._range.end=e.end,this.applyChanges(!1)}},{key:"_getMinDay",value:function(){return this.minDay()?this.Moment(this.minDay(),this.getFormat()):void 0}},{key:"_getMaxDay",value:function(){return this.maxDay()?this.Moment(this.maxDay(),this.getFormat()):void 0}}]),e}()},function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(){"ngInject";var e={restrict:"E",scope:{weekStart:"&",selectedDay:"=?",weekDaysName:"&",format:"&",minDay:"&",maxDay:"&",monthFormat:"&",inputFormat:"&",onApply:"&",disabled:"&",formName:"@name",isValidDateEnabled:"&validDay",autoApply:"&",api:"=?"},controller:s,templateUrl:"app/directives/ob-day-picker/ob-day-picker.html",controllerAs:"dayPicker",bindToController:!0};return e}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};t.ObDayPicker=n;var s=function(){
	e.$inject = ["t", "n", "i", "s", "o"];function e(t,n,i,s,o){"ngInject";var d=this;a(this,e),this.Element=n,this.Document=t,this.Scope=i,this.$timeout=s,this.Moment=o,this.formName=this.formName||"dayPickerInput",this.setOpenCloseLogic(),this._selectedDay=this.getSelectedDay(),this.value=this.Moment(this._selectedDay).format(this.getFormat()),this.setCalendarInterceptors(),this.calendarApi={},this.api&&r(this.api,{render:function(){d.render()}}),this.setListeners(),this.dayValidity=this.checkIfDayIsValid(this._selectedDay),this.$timeout(function(){d.applyValidity(d.dayValidity)})}return e.$inject=["$document","$element","$scope","$timeout","moment"],i(e,[{key:"render",value:function(){this.dayValidity=this.checkIfDayIsValid(this._selectedDay),this.applyValidity(this.dayValidity),this.calendarApi.render&&this.calendarApi.render()}},{key:"setOpenCloseLogic",value:function(){this.isPickerVisible=!1,this.pickerPopup=angular.element(this.Element[0].querySelector(".picker")),this.elemClickFlag=!1}},{key:"setCalendarInterceptors",value:function(){this.calendarInterceptors={daySelected:this.daySelected.bind(this)}}},{key:"setListeners",value:function(){var e=this,t={documentClick:function(){e.elemClickFlag?e.elemClickFlag=!1:(e.onBlur(),e.Scope.$digest())},pickerClick:function(){e.elemClickFlag=!0,e.Scope.$digest()}};this.pickerPopup.on("click",t.pickerClick.bind(this)),this.Document.on("click",t.documentClick.bind(this)),this.Scope.$on("$destroy",function(){e.pickerPopup.off("click",t.pickerClick),e.Document.off("click",t.documentClick)}),this.Scope.$watchGroup([function(){return e.Moment(e.minDay(),e.getFormat()).format()},function(){return e.Moment(e.maxDay(),e.getFormat()).format()}],function(t,a){(t&&t[0]||a&&a[0])&&e.render()})}},{key:"showPicker",value:function(){var e=angular.isDefined(this.disabled())?this.disabled():!1;e||this.isPickerVisible||(this.isPickerVisible=!0),this.elemClickFlag=!0}},{key:"hidePicker",value:function(){this.isPickerVisible=!1}},{key:"daySelected",value:function(e){var t=this,a=arguments.length<=1||void 0===arguments[1]?100:arguments[1];this.applyValidity(this.checkIfDayIsValid(e)),e.isSame(this._selectedDay,"day")?this.hidePicker():(this.calendarApi.render(),this.value=this.Moment(e).format(this.getFormat()),this._selectedDay=e,this.$timeout(function(){t.hidePicker(),t.updateSelectedDate(e)},a))}},{key:"dateInputEntered",value:function(e,t){var a=this.checkIfDayIsValid(t);switch(e.keyCode){case 9:case 13:var n=this.getInputValue();a?this.daySelected(n,0):(this.hidePicker(),13===e.keyCode&&e.preventDefault());break;case 40:this.isPickerVisible=!0;break;case 27:this.isPickerVisible=!1,this.value=this._selectedDay.format(this.getFormat())}}},{key:"getInputValue",value:function(){return this.Moment(this.value,this.getFormat(),!0)}},{key:"onBlur",value:function(){var e=this.getInputValue(),t=this.checkIfDayIsValid(e);t?this.daySelected(e):this.hidePicker()}},{key:"updateValidity",value:function(){var e=this.getInputValue(),t=this.checkIfDayIsValid(e);this.applyValidity(t),t&&this.autoApply()&&!e.isSame(this._selectedDay,"day")&&(this._selectedDay=e,this.updateSelectedDate(e))}},{key:"checkIfDayIsValid",value:function(e){var t=this.Moment(e,this.getFormat(),!0),a=this._getMinDay(),n=this._getMaxDay(),i=t.isValid();return i&&a&&(i=t.isAfter(a,"day")||t.isSame(a,"day")),i&&n&&(i=t.isBefore(n,"day")||t.isSame(n,"day")),i}},{key:"applyValidity",value:function(e){this.Scope[this.formName]&&(this.disabled&&this.disabled()?(this.Scope[this.formName].$setValidity("validDay",!0),this.dayValidity=!0):this.isValidDateEnabled()&&this.Scope[this.formName]&&(this.Scope[this.formName].$setValidity("validDay",e),this.dayValidity=e))}},{key:"updateSelectedDate",value:function(){var e=arguments.length<=0||void 0===arguments[0]?this._selectedDay:arguments[0];this.format()?this.selectedDay=e.format(this.getFormat()):this.selectedDay=e,this.onApply({day:this.selectedDay})}},{key:"getSelectedDay",value:function(){return this.Moment(this.selectedDay||this.Moment(),this.getFormat())}},{key:"getFormat",value:function(){return this.format()||"MMM DD, YYYY"}},{key:"_getMinDay",value:function(){return this.minDay()?this.Moment(this.minDay(),this.getFormat()):void 0}},{key:"_getMaxDay",value:function(){return this.maxDay()?this.Moment(this.maxDay(),this.getFormat()):void 0}}]),e}()},function(e,t){"use strict";Array.prototype.findIndex||(Array.prototype.findIndex=function(e){if(null===this)throw new TypeError("Array.prototype.findIndex called on null or undefined");if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var t,a=Object(this),n=a.length>>>0,i=arguments[1],r=0;n>r;r++)if(t=a[r],e.call(i,t,r,a))return r;return-1})}]),angular.module("obDateRangePicker").run(["$templateCache",function(e){e.put("app/directives/calendar/calendar.html",'<div class="input-container" ng-if="month._showInput()"></div><div class="header"><span class="arrow-btn left" ng-if="month.showLeftArrow()" ng-click="month.moveToPrev()">◀</span> <span class="date">{{month.getFormattedMonth(month.calendar.currentCalendar)}}</span> <span class="arrow-btn right" ng-if="month.showRightArrow()" ng-click="month.moveToNext(1)">▶</span></div><div class="board"><div class="days-of-week"><span class="day-name" ng-repeat="day in month.daysName track by $index">{{day}}</span></div><table class="weeks"><tbody><tr class="week" ng-repeat="week in month.calendar.monthWeeks track by $index"><td class="day" ng-repeat="day in week track by $index" ng-class="{ \'future\': day.future, \'selected\': day.selected, \'current\': day.currentDay, \'other-month\': !day.currentMonth, \'in-range\': day.inRange, \'in-hover-range\': day.inHoverRange, \'range-start\': day.rangeStart, \'range-end\': day.rangeEnd, \'disabled\': day.disabled, \'opacity\': day.opacity, \'in-static-range\': day.inStaticRange, \'static-range-start\': day.staticRangeStart, \'static-range-end\': day.staticRangeEnd, }" ng-click="month.daySelected(day)" ng-mouseover="month.dayHovered(day, true)" ng-mouseleave="month.dayHovered(day, false)">{{day.mo.format(\'D\')}}</td></tr><tbody></tbody></tbody></table></div>'),e.put("app/directives/date-range-picker/date-range-picker.html",'<calendar class="calendar" api="picker.startCalendarApi" min-day="picker.minDay()" max-day="picker.maxDay()" min-range-day="picker.minRangeDay" max-range-day="picker.maxRangeDay" week-start="picker.weekStart()" month="picker.startCalendar" interceptors="picker.startCalendarInterceptors" range-start="picker.rangeStart" range-end="picker.rangeEnd" hovered="picker.dayHovered" selected-day="picker.rangeStart" max-month="picker.endCalendar" week-days-name="picker.weekDaysName()" month-format="picker.monthFormat()" input-format="picker.inputFormat()" label="Start Date" static="picker.static" turn="picker.turn()"></calendar><calendar class="calendar" api="picker.endCalendarApi" min-day="picker.minDay()" max-day="picker.maxDay()" min-range-day="picker.minRangeDay" max-range-day="picker.maxRangeDay" week-start="picker.weekStart()" month="picker.endCalendar" interceptors="picker.endCalendarInterceptors" range-start="picker.rangeStart" range-end="picker.rangeEnd" hovered="picker.dayHovered" selected-day="picker.rangeEnd" min-month="picker.startCalendar" week-days-name="picker.weekDaysName()" month-format="picker.monthFormat()" input-format="picker.inputFormat()" label="End Date" static="picker.static" type="\'second\'" turn="picker.turn()"></calendar>'),e.put("app/directives/ob-date-range-picker/ob-date-range-picker.html",'<div class="date-range"><date-range-picker api="obDateRangePicker.pickerApi" interceptors="obDateRangePicker.pickerInterceptors" linked-calendars="obDateRangePicker.linkedCalendars()" week-start="obDateRangePicker.weekStart()" range="obDateRangePicker._range" static="obDateRangePicker.static" week-days-name="obDateRangePicker.weekDaysName()" min-day="obDateRangePicker._getMinDay()" max-day="obDateRangePicker._getMaxDay()" month-format="obDateRangePicker.monthFormat()" input-format="obDateRangePicker.inputFormat()" turn="obDateRangePicker.turn()"></date-range-picker></div>'),
	e.put("app/directives/ob-day-picker/ob-day-picker.html",'<div ng-form="{{::dayPicker.formName}}" class="picker-dropdown-container" ng-class="{\'open\': dayPicker.isPickerVisible, \'disabled\': dayPicker.disabled(), \'invalid\': !dayPicker.dayValidity}"><input class="picker-input" ng-model="dayPicker.value" ng-change="dayPicker.updateValidity()" ng-keydown="dayPicker.dateInputEntered($event, dayPicker.value)" ng-click="dayPicker.showPicker()" ng-disabled="dayPicker.disabled()"><div class="picker" ng-show="dayPicker.isPickerVisible"><calendar class="calendar" api="dayPicker.calendarApi" min-day="dayPicker._getMinDay()" max-day="dayPicker._getMaxDay()" week-start="dayPicker.weekStart()" month="dayPicker._selectedDay" interceptors="dayPicker.calendarInterceptors" selected-day="dayPicker._selectedDay" min-month="dayPicker.startCalendar" week-days-name="dayPicker.weekDaysName()" month-format="dayPicker.monthFormat()" show-input="false"></calendar></div></div>')}]);
	//# sourceMappingURL=../maps/scripts/ob-daterangepicker.js.map


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./dateRangePicker.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./dateRangePicker.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".date-range-picker {\n  font-family: \"Open Sans\";\n  position: static;\n  height: inherit;\n  float: left;\n  vertical-align: top;\n}\n.date-range-picker .date-range-picker-title {\n  -webkit-text-stroke: 0.2px #000;\n  font-size: 12px;\n  margin-bottom: 5px;\n}\n.date-range-picker .date-range-picker-date-btn-group {\n  width: 235px;\n  height: 30px;\n  line-height: 30px;\n  font-size: 14px;\n  text-align: center;\n  background: #FFFFFF url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAMAAABVlYYBAAABXFBMVEUAAAD///+AgIBVVVVAQEArKytAIEA5OTkzMzMrKysnJyckJCQzIiIoKCgsISEmJiYoICgmJiYnISEmICYlHyUoIiIlICUmISElICAkICQkHyQjIyMlISEkICAkICQmIiIlISEkICAjICMmHyMlIiIkISElHyIkISElHyIkIiIkISEkISEjISElICMkHyIkISEjISElICAkICIkHyIjISEkICIkHyIjISElISElICAkICAkICIkICIlISEkICAkICIjHyElISEkICIjICIkICAkHyEkISEjICAkHyEkICAkHyEjICAkICEkICEkICEkICEjHyEjICAkICAjHyEkICAkICEkICEkICAkICAkICAjICEjHyEkHyAkHyAjICEjICEkHyAkHyAjICAjICEkHyAjICAjICEkICEjHyAjICAjICEkICEkHyAjHyAjICAkICEkHyEjHyAjHyAjHyAZdiFQAAAAc3RSTlMAAQIDBAYICQoMDQ4PExcbICInKCktMDY3ODk6Pj9AREVHSElLTVJWWltcXV5gYmRlZ2lqbHFydHV2d3h5fH6AgoSIiY6UlZeanaSnqKmwsbS2t7u/wMHGzs/S09TV2drc3t/h5efp6u7v8PH09ff4+/z9mVh62AAAAP9JREFUeAFdyXk3AlEcxvGfQpjKriyTRVlCKMYiorJQdhKZkcouyzzv/xwz9557dPv+85zzechu58FNvGi5k23T1HLrPYZCa1Yr3nOEVc064sCwDtWAXeQCM5eoOCkLjOfRX2K6eILJHOClYyAVTHeZTDODex0ftmaB3/2NEnhHqwVwPUtKpatMe0gux7SbrJxKA7W4yKE46PpfdZyGzJ/AFW5q1YShAfNPeK3VTDHp1+96d4sHQj0L4UY11tcWmXP5YgNCt4CRT9xGgelHVIRuA2NfKCwBs2U8C23f1JonEgFPfF0ZTQSFkhxXf53mLT3E94vUG0w3+YxqXe8p+gOnF2JUDlQVsQAAAABJRU5ErkJggg==') no-repeat 5px 5px;\n  background-size: 8% 63%;\n  padding-left: 17px;\n  border: 1px solid #E2DDDD;\n  border-radius: 5px;\n}\n.date-range-picker .date-range-picker-date-btn-group.date-range-picker-active-left .date-range-picker-date-left {\n  background-color: #e6f0ff;\n  color: #00617F;\n}\n.date-range-picker .date-range-picker-date-btn-group.date-range-picker-active-left ~ .date-range-picker-popover .date-range-picker-popover-arrow {\n  top: -15px;\n  left: 55px;\n}\n.date-range-picker .date-range-picker-date-btn-group.date-range-picker-active-right .date-range-picker-date-right {\n  background-color: #e6f0ff;\n  color: #00617F;\n}\n.date-range-picker .date-range-picker-date-btn-group.date-range-picker-active-right ~ .date-range-picker-popover .date-range-picker-popover-arrow {\n  top: -15px;\n  left: 166px;\n}\n.date-range-picker .date-range-picker-date-btn-group .date-range-picker-date {\n  padding: 1px 7px;\n  cursor: pointer;\n}\n.date-range-picker .date-range-picker-date-btn-group:focus {\n  border: 1px solid #dedede;\n}\n@media (max-width: 599px) {\n  .date-range-picker .date-range-picker-date-btn-group {\n    width: 175px;\n    font-size: 12px;\n    background: none;\n    padding: 0;\n  }\n}\n.date-range-picker .date-range-picker-popover {\n  background-color: #FFFFFF;\n  top: 60px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  font-size: 12px;\n  padding: 25px;\n  position: absolute;\n  width: auto;\n  z-index: 999;\n  background-clip: padding-box;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  transition: opacity linear 0.3s;\n}\n@media (max-width: 599px) {\n  .date-range-picker .date-range-picker-popover {\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    position: fixed;\n    border: none;\n    border-radius: 0;\n    padding: 10px 25px;\n    box-shadow: none;\n    overflow: scroll;\n  }\n  .date-range-picker .date-range-picker-popover ob-daterangepicker {\n    display: initial;\n    padding: 0;\n    width: auto;\n    height: auto;\n  }\n}\n.date-range-picker .date-range-picker-popover.date-range-picker-popover-closed {\n  visibility: hidden;\n  opacity: 0;\n  transition-delay: 0.3s;\n  z-index: 0;\n  left: -200%;\n}\n.date-range-picker .date-range-picker-popover .date-range-picker-popover-arrow {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border: 14px solid transparent;\n  border-top-width: 0;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n}\n.date-range-picker .date-range-picker-popover .date-range-picker-popover-arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  top: 1px;\n  margin-left: -15px;\n  content: \" \";\n  border: 15px solid transparent;\n  border-top-width: 0;\n  border-bottom-color: #FFFFFF;\n}\n.date-range-picker .date-range-picker-popover .date-range-picker-popover-footer {\n  font-size: 12px;\n}\nob-daterangepicker {\n  display: block;\n  overflow: visible;\n  width: 540px;\n  height: 320px;\n}\ndate-range-picker {\n  display: flex;\n  justify-content: space-between;\n}\n@media (max-width: 599px) {\n  date-range-picker {\n    flex-direction: column;\n    width: 252px;\n    margin: 0 auto;\n  }\n}\ncalendar {\n  font-family: \"Open Sans\";\n  color: #565154;\n}\ncalendar .input-container {\n  position: relative;\n}\ncalendar .input-container label {\n  position: relative;\n  top: 4px;\n  display: inline-block;\n  color: #565154;\n  font-size: 14px;\n}\ncalendar .input-container input {\n  position: absolute;\n  right: 0;\n  padding-left: 5px;\n  box-sizing: border-box;\n  width: 185px;\n  height: 25px;\n  font-size: 14px;\n  outline: none;\n  border: 1px solid #93908C;\n  border-radius: 2px;\n}\ncalendar .header {\n  position: relative;\n  top: 20px;\n  height: 50px;\n  font-size: 18px;\n}\n@media (max-width: 599px) {\n  calendar .header {\n    height: 35px;\n  }\n}\ncalendar .header .date {\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  white-space: nowrap;\n  font-size: 18px;\n}\ncalendar .header .arrow-btn {\n  position: absolute;\n  top: 4px;\n  width: 38px;\n  height: 26px;\n  cursor: pointer;\n  font-size: 0;\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAABYCAYAAACUC/VYAAAFkElEQVRoBe1ab2gcRRSft3dJVdJalSiCf0ClftFCNdxdG7URLtm7WNtUSBX8B4L6qZGCVgTFCIKiYGgtiH8+tNKCGtCotbebu2JrvSZ7qIXWL4oK0YLYojGtWM3d7fPN1T32bnfvZmd3ky9ZuMy/N+/3m/fmzc7OBBCRLeajLCY4x14iwPgcsP+icMnw8HBdrR2L54H/sT8AYC8GzifS2fsZw5cA2UpQcGRqUtttVxq3F8LM06iVmdkzYwzNEa6XDxNNeIWS3fSrP5EQSGazV/48e2acUHvrSLUMdjeWI4iCxEB2PZbxGHm2CbwZ+nw51DBM9WefAtOcpFl9hTucszYUF5DJu3Ae95imeY8TonVNYAK9qrqqXMZPaIrd2BrKvTWQC5IDmS3lKjPI5FLgnJKUBfpGR9m5I8ZrWDW3uY9LvNY3gdtV9fJzX06/T+tnnziMt6QvAglVXfdvBd4jf1/trdJfi/AcSKazW6HCPg8TnFNta4GBgQeXzZmn3kE0H/A3NjHplgR6M5lVc+XT47SOrxZT51/K0wWpdGZTpcymaLJFBs7puhJIpDNbTcQJAr/U/5j89XAQSPZvuJ5UjPlTIy/tIEAv7ZtoZYvJq/TX00EA4ubXpGLenxp5aQeBaU07CaA8SjuzBSHhIMDHYhRy7yoAAwzgN/mxifV0JcC7TuW1w9ABa8gSRTFVclKeBLg6I5f79ZpLVtzBQNklp759L+FtOd9ek/AbtDYsb6/WW8IoaA37/pYWsKspFXL7MB7vpXnxg70+aF6YAAcq6ftPXNR1wRoGbCIosNXfFwHe6dDExF+lgr6Z7PgcWaNqKZJNfROwgIyD+ov0GZcha5y26mRSaQIczMjnCvHO2C1kiZIMOO8TiABXcPTAgZOXdcBaxuAtXvb7CIehiGLatj1EL7NdtIHxDFXpMBQhwJdw2uTRNyH8JCLPZQK7oBnI0PUTsfjyHpqcnza3uZVDJ8BBpvTxWQrVjRSqo1Sshyq9V2Z4u/2JhIAFQKH6ghJT7iKXHAcGM0xRnrDarNQxCa2GhUojtYDIIJYILFlgyQKOr+OUOriJVXEHvVDmQGHbjbymi4STqEzz0bDTBaZJ4HgtHUSsRhM/o6/k50WVy8g5VsJkOkODb3roxRKLrXiYr/FNLb6L7S3gphLZ3dXK2a+SqnqzW3OQOqcLPLXhdazCirVNh6eM/wYfBGhW0E6Hzor2JNLqm9ls1ldfL2pySpA99nsZp9YNDl7lpVi0Xo4A146YqMxXv0n2Z9OiYG5y8gRqJFg3zWqNQvVpN+UidcEI1EhgjA60XqZ58VHf0FCXCKhdJjgBSxuyob/P/nMsoW7wFarhEagRwRugUimevymzmLVOQybAQ5XOD9DcSy7ZwW/OWsNH8F1QB0Q2QjdnX/AbtHqdS6YtQ5c+wlX85ozfoK3tz6z36hQpgRoo3aBRlEx6LeHREyAWZIlOWsLfTmUyjpVzQQj8b/5OrCi3Nrti4Qjw4xxQvl08AoxtM/L7f2wm4NgTNgsELdNH6R/0VfzIdEH72E1XpAQI/Hi8gw0XNe17N3BeF9kcoFHvvTjWnWgFzgmEbgE6lJhHgCfpLOh1DtDuCZkA/IJxvK+ka0fbAVvtobmADi0PLYtjT0nXhcE5iVAIAFPGLrwtdecRXT9ljUw0DeYCYH+CAo8bk7kP2MGcKGaDnDwBgO86YrixqHuHWAOSR0HSBfAhXef0FHXdM7498BzVvixAsT1PN2rPTudzrzo0SVaIE6AbNFTgXvL3YUks125CLqCRF/kNWilkcM7IhQA0XkAA28lvzvgNmusQAlY6XKAouJ3+52sn8hADfMbI6/ukbyNEyPEDA/vP6mP/FzyrLozUjsXzjhOSMED86HCZA366B5ddIvAfsYDZvb1LwzEAAAAASUVORK5CYII=') no-repeat;\n  background-size: 18px;\n}\n@media (max-width: 599px) {\n  calendar .header .arrow-btn {\n    top: -2px;\n  }\n}\ncalendar .header .arrow-btn.left {\n  left: 10px;\n  background-position: 0px 0px;\n}\ncalendar .header .arrow-btn.right {\n  right: -9px;\n  background-position: 0px -24px;\n}\n@media (max-width: 599px) {\n  calendar .header .arrow-btn.right {\n    right: -18px;\n  }\n}\ncalendar .board {\n  position: relative;\n  top: 21px;\n  white-space: nowrap;\n}\ncalendar .board .cell {\n  position: relative;\n  height: 36px;\n  width: 36px;\n  font-size: 14px;\n  text-align: center;\n}\ncalendar .board .days-of-week .day-name {\n  font-size: 12px;\n  text-align: center;\n  color: #979797;\n  width: 37px;\n  display: inline-block;\n  margin-bottom: 5px;\n  text-transform: capitalize;\n}\ncalendar .board .weeks {\n  border-collapse: collapse;\n}\ncalendar .board .day {\n  position: relative;\n  height: 36px;\n  width: 36px;\n  text-align: center;\n  font-size: 14px;\n  line-height: 36px;\n  z-index: 15;\n}\n@media (max-width: 599px) {\n  calendar .board .day {\n    height: 30px;\n    width: 36px;\n    text-align: center;\n    font-size: 14px;\n    position: relative;\n    line-height: 35px;\n    z-index: 15;\n  }\n}\ncalendar .board .day:hover {\n  cursor: pointer;\n}\ncalendar .board .day:hover:not(.in-range):not(.disabled):not(.future) {\n  cursor: pointer;\n  color: #FFFFFF;\n  background: #009DCD;\n  border: 1px #009DCD;\n}\ncalendar .board .day.other-month {\n  visibility: hidden;\n}\ncalendar .board .day.in-range:not(.other-month):not(.disabled):not(.future),\ncalendar .board .day .range-end {\n  background: #009DCD;\n  border: 1px #009DCD;\n  color: #FFFFFF;\n}\ncalendar .board .day.in-range:not(.other-month):not(.disabled):not(.future):hover,\ncalendar .board .day .range-end:hover {\n  background: #009DCD;\n}\ncalendar .board .day.in-hover-range:not(.other-month):not(.disabled):not(.future) {\n  background: #66c6e3;\n  border: 1px #66c6e3;\n  color: #FFFFFF;\n}\ncalendar .board .day.range-start:not(.other-month):not(.disabled):not(.future) {\n  background: #009DCD;\n}\ncalendar .board .day.range-end:not(.other-month):not(.disabled):not(.future) {\n  background: #009DCD;\n}\ncalendar .board .day.disabled {\n  color: #E2DFDE;\n  cursor: default;\n}\ncalendar .board .day.future {\n  color: #E2DFDE;\n  cursor: default;\n}\ncalendar .board .day.in-static-range::after {\n  position: absolute;\n  content: '';\n  width: 36px;\n  height: 28px;\n  top: 4px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(199, 233, 244, 0.5);\n  margin-right: 1px;\n  z-index: -1;\n}\ncalendar .board .day.static-range-start::after {\n  width: 35px;\n  left: 2px;\n  border-top-left-radius: 50px;\n  border-bottom-left-radius: 50px;\n  overflow: hidden;\n}\ncalendar .board .day.static-range-end::after {\n  width: 34px;\n  right: 6px;\n  border-top-right-radius: 50px;\n  border-bottom-right-radius: 50px;\n  overflow: hidden;\n}\ncalendar .board .opacity.in-range:not(.in-static-range):not(.other-month) {\n  cursor: pointer;\n  color: #FFFFFF;\n  background: #009DCD;\n  border-color: #009DCD;\n}\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 13 */
/***/ function(module, exports) {

	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjbGFyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlY2xhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiJ9

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15);

/***/ },
/* 15 */
/***/ function(module, exports) {

	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ({

	/***/ 0:
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(306);


	/***/ },

	/***/ 306:
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});

		__webpack_require__(307);

		var _helper = __webpack_require__(309);

		var _helper2 = _interopRequireDefault(_helper);

		var _helper3 = __webpack_require__(330);

		var _helper4 = _interopRequireDefault(_helper3);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var _module = angular.module('helper', ['ngSanitize']);

		_module.directive('compile', _helper4.default);

		_module.component('previewHelper', {
		    controller: _helper2.default,
		    template: '<div compile="vm.template"></div>',
		    controllerAs: 'vm'
		});

		exports.default = _module.name;

	/***/ },

	/***/ 307:
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(308);
		module.exports = 'ngSanitize';


	/***/ },

	/***/ 308:
	/***/ function(module, exports) {

		/**
		 * @license AngularJS v1.5.8
		 * (c) 2010-2016 Google, Inc. http://angularjs.org
		 * License: MIT
		 */
		(function(window, angular) {'use strict';

		/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
		 *     Any commits to this file should be reviewed with security in mind.  *
		 *   Changes to this file can potentially create security vulnerabilities. *
		 *          An approval from 2 Core members with history of modifying      *
		 *                         this file is required.                          *
		 *                                                                         *
		 *  Does the change somehow allow for arbitrary javascript to be executed? *
		 *    Or allows for someone to change the prototype of built-in objects?   *
		 *     Or gives undesired access to variables likes document or window?    *
		 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

		var $sanitizeMinErr = angular.$$minErr('$sanitize');
		var bind;
		var extend;
		var forEach;
		var isDefined;
		var lowercase;
		var noop;
		var htmlParser;
		var htmlSanitizeWriter;

		/**
		 * @ngdoc module
		 * @name ngSanitize
		 * @description
		 *
		 * # ngSanitize
		 *
		 * The `ngSanitize` module provides functionality to sanitize HTML.
		 *
		 *
		 * <div doc-module-components="ngSanitize"></div>
		 *
		 * See {@link ngSanitize.$sanitize `$sanitize`} for usage.
		 */

		/**
		 * @ngdoc service
		 * @name $sanitize
		 * @kind function
		 *
		 * @description
		 *   Sanitizes an html string by stripping all potentially dangerous tokens.
		 *
		 *   The input is sanitized by parsing the HTML into tokens. All safe tokens (from a whitelist) are
		 *   then serialized back to properly escaped html string. This means that no unsafe input can make
		 *   it into the returned string.
		 *
		 *   The whitelist for URL sanitization of attribute values is configured using the functions
		 *   `aHrefSanitizationWhitelist` and `imgSrcSanitizationWhitelist` of {@link ng.$compileProvider
		 *   `$compileProvider`}.
		 *
		 *   The input may also contain SVG markup if this is enabled via {@link $sanitizeProvider}.
		 *
		 * @param {string} html HTML input.
		 * @returns {string} Sanitized HTML.
		 *
		 * @example
		   <example module="sanitizeExample" deps="angular-sanitize.js">
		   <file name="index.html">
		     <script>
		         angular.module('sanitizeExample', ['ngSanitize'])
		           .controller('ExampleController', ['$scope', '$sce', function($scope, $sce) {
		             $scope.snippet =
		               '<p style="color:blue">an html\n' +
		               '<em onmouseover="this.textContent=\'PWN3D!\'">click here</em>\n' +
		               'snippet</p>';
		             $scope.deliberatelyTrustDangerousSnippet = function() {
		               return $sce.trustAsHtml($scope.snippet);
		             };
		           }]);
		     </script>
		     <div ng-controller="ExampleController">
		        Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
		       <table>
		         <tr>
		           <td>Directive</td>
		           <td>How</td>
		           <td>Source</td>
		           <td>Rendered</td>
		         </tr>
		         <tr id="bind-html-with-sanitize">
		           <td>ng-bind-html</td>
		           <td>Automatically uses $sanitize</td>
		           <td><pre>&lt;div ng-bind-html="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
		           <td><div ng-bind-html="snippet"></div></td>
		         </tr>
		         <tr id="bind-html-with-trust">
		           <td>ng-bind-html</td>
		           <td>Bypass $sanitize by explicitly trusting the dangerous value</td>
		           <td>
		           <pre>&lt;div ng-bind-html="deliberatelyTrustDangerousSnippet()"&gt;
		&lt;/div&gt;</pre>
		           </td>
		           <td><div ng-bind-html="deliberatelyTrustDangerousSnippet()"></div></td>
		         </tr>
		         <tr id="bind-default">
		           <td>ng-bind</td>
		           <td>Automatically escapes</td>
		           <td><pre>&lt;div ng-bind="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
		           <td><div ng-bind="snippet"></div></td>
		         </tr>
		       </table>
		       </div>
		   </file>
		   <file name="protractor.js" type="protractor">
		     it('should sanitize the html snippet by default', function() {
		       expect(element(by.css('#bind-html-with-sanitize div')).getInnerHtml()).
		         toBe('<p>an html\n<em>click here</em>\nsnippet</p>');
		     });

		     it('should inline raw snippet if bound to a trusted value', function() {
		       expect(element(by.css('#bind-html-with-trust div')).getInnerHtml()).
		         toBe("<p style=\"color:blue\">an html\n" +
		              "<em onmouseover=\"this.textContent='PWN3D!'\">click here</em>\n" +
		              "snippet</p>");
		     });

		     it('should escape snippet without any filter', function() {
		       expect(element(by.css('#bind-default div')).getInnerHtml()).
		         toBe("&lt;p style=\"color:blue\"&gt;an html\n" +
		              "&lt;em onmouseover=\"this.textContent='PWN3D!'\"&gt;click here&lt;/em&gt;\n" +
		              "snippet&lt;/p&gt;");
		     });

		     it('should update', function() {
		       element(by.model('snippet')).clear();
		       element(by.model('snippet')).sendKeys('new <b onclick="alert(1)">text</b>');
		       expect(element(by.css('#bind-html-with-sanitize div')).getInnerHtml()).
		         toBe('new <b>text</b>');
		       expect(element(by.css('#bind-html-with-trust div')).getInnerHtml()).toBe(
		         'new <b onclick="alert(1)">text</b>');
		       expect(element(by.css('#bind-default div')).getInnerHtml()).toBe(
		         "new &lt;b onclick=\"alert(1)\"&gt;text&lt;/b&gt;");
		     });
		   </file>
		   </example>
		 */


		/**
		 * @ngdoc provider
		 * @name $sanitizeProvider
		 *
		 * @description
		 * Creates and configures {@link $sanitize} instance.
		 */
		function $SanitizeProvider() {
		  var svgEnabled = false;

		  this.$get = ['$$sanitizeUri', function($$sanitizeUri) {
		    if (svgEnabled) {
		      extend(validElements, svgElements);
		    }
		    return function(html) {
		      var buf = [];
		      htmlParser(html, htmlSanitizeWriter(buf, function(uri, isImage) {
		        return !/^unsafe:/.test($$sanitizeUri(uri, isImage));
		      }));
		      return buf.join('');
		    };
		  }];


		  /**
		   * @ngdoc method
		   * @name $sanitizeProvider#enableSvg
		   * @kind function
		   *
		   * @description
		   * Enables a subset of svg to be supported by the sanitizer.
		   *
		   * <div class="alert alert-warning">
		   *   <p>By enabling this setting without taking other precautions, you might expose your
		   *   application to click-hijacking attacks. In these attacks, sanitized svg elements could be positioned
		   *   outside of the containing element and be rendered over other elements on the page (e.g. a login
		   *   link). Such behavior can then result in phishing incidents.</p>
		   *
		   *   <p>To protect against these, explicitly setup `overflow: hidden` css rule for all potential svg
		   *   tags within the sanitized content:</p>
		   *
		   *   <br>
		   *
		   *   <pre><code>
		   *   .rootOfTheIncludedContent svg {
		   *     overflow: hidden !important;
		   *   }
		   *   </code></pre>
		   * </div>
		   *
		   * @param {boolean=} flag Enable or disable SVG support in the sanitizer.
		   * @returns {boolean|ng.$sanitizeProvider} Returns the currently configured value if called
		   *    without an argument or self for chaining otherwise.
		   */
		  this.enableSvg = function(enableSvg) {
		    if (isDefined(enableSvg)) {
		      svgEnabled = enableSvg;
		      return this;
		    } else {
		      return svgEnabled;
		    }
		  };

		  //////////////////////////////////////////////////////////////////////////////////////////////////
		  // Private stuff
		  //////////////////////////////////////////////////////////////////////////////////////////////////

		  bind = angular.bind;
		  extend = angular.extend;
		  forEach = angular.forEach;
		  isDefined = angular.isDefined;
		  lowercase = angular.lowercase;
		  noop = angular.noop;

		  htmlParser = htmlParserImpl;
		  htmlSanitizeWriter = htmlSanitizeWriterImpl;

		  // Regular Expressions for parsing tags and attributes
		  var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
		    // Match everything outside of normal chars and " (quote character)
		    NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;


		  // Good source of info about elements and attributes
		  // http://dev.w3.org/html5/spec/Overview.html#semantics
		  // http://simon.html5.org/html-elements

		  // Safe Void Elements - HTML5
		  // http://dev.w3.org/html5/spec/Overview.html#void-elements
		  var voidElements = toMap("area,br,col,hr,img,wbr");

		  // Elements that you can, intentionally, leave open (and which close themselves)
		  // http://dev.w3.org/html5/spec/Overview.html#optional-tags
		  var optionalEndTagBlockElements = toMap("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
		      optionalEndTagInlineElements = toMap("rp,rt"),
		      optionalEndTagElements = extend({},
		                                              optionalEndTagInlineElements,
		                                              optionalEndTagBlockElements);

		  // Safe Block Elements - HTML5
		  var blockElements = extend({}, optionalEndTagBlockElements, toMap("address,article," +
		          "aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5," +
		          "h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul"));

		  // Inline Elements - HTML5
		  var inlineElements = extend({}, optionalEndTagInlineElements, toMap("a,abbr,acronym,b," +
		          "bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s," +
		          "samp,small,span,strike,strong,sub,sup,time,tt,u,var"));

		  // SVG Elements
		  // https://wiki.whatwg.org/wiki/Sanitization_rules#svg_Elements
		  // Note: the elements animate,animateColor,animateMotion,animateTransform,set are intentionally omitted.
		  // They can potentially allow for arbitrary javascript to be executed. See #11290
		  var svgElements = toMap("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph," +
		          "hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline," +
		          "radialGradient,rect,stop,svg,switch,text,title,tspan");

		  // Blocked Elements (will be stripped)
		  var blockedElements = toMap("script,style");

		  var validElements = extend({},
		                                     voidElements,
		                                     blockElements,
		                                     inlineElements,
		                                     optionalEndTagElements);

		  //Attributes that have href and hence need to be sanitized
		  var uriAttrs = toMap("background,cite,href,longdesc,src,xlink:href");

		  var htmlAttrs = toMap('abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,' +
		      'color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,' +
		      'ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,' +
		      'scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,' +
		      'valign,value,vspace,width');

		  // SVG attributes (without "id" and "name" attributes)
		  // https://wiki.whatwg.org/wiki/Sanitization_rules#svg_Attributes
		  var svgAttrs = toMap('accent-height,accumulate,additive,alphabetic,arabic-form,ascent,' +
		      'baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,' +
		      'cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,' +
		      'font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,' +
		      'height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,' +
		      'marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,' +
		      'max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,' +
		      'path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,' +
		      'requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,' +
		      'stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,' +
		      'stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,' +
		      'stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,' +
		      'underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,' +
		      'width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,' +
		      'xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan', true);

		  var validAttrs = extend({},
		                                  uriAttrs,
		                                  svgAttrs,
		                                  htmlAttrs);

		  function toMap(str, lowercaseKeys) {
		    var obj = {}, items = str.split(','), i;
		    for (i = 0; i < items.length; i++) {
		      obj[lowercaseKeys ? lowercase(items[i]) : items[i]] = true;
		    }
		    return obj;
		  }

		  var inertBodyElement;
		  (function(window) {
		    var doc;
		    if (window.document && window.document.implementation) {
		      doc = window.document.implementation.createHTMLDocument("inert");
		    } else {
		      throw $sanitizeMinErr('noinert', "Can't create an inert html document");
		    }
		    var docElement = doc.documentElement || doc.getDocumentElement();
		    var bodyElements = docElement.getElementsByTagName('body');

		    // usually there should be only one body element in the document, but IE doesn't have any, so we need to create one
		    if (bodyElements.length === 1) {
		      inertBodyElement = bodyElements[0];
		    } else {
		      var html = doc.createElement('html');
		      inertBodyElement = doc.createElement('body');
		      html.appendChild(inertBodyElement);
		      doc.appendChild(html);
		    }
		  })(window);

		  /**
		   * @example
		   * htmlParser(htmlString, {
		   *     start: function(tag, attrs) {},
		   *     end: function(tag) {},
		   *     chars: function(text) {},
		   *     comment: function(text) {}
		   * });
		   *
		   * @param {string} html string
		   * @param {object} handler
		   */
		  function htmlParserImpl(html, handler) {
		    if (html === null || html === undefined) {
		      html = '';
		    } else if (typeof html !== 'string') {
		      html = '' + html;
		    }
		    inertBodyElement.innerHTML = html;

		    //mXSS protection
		    var mXSSAttempts = 5;
		    do {
		      if (mXSSAttempts === 0) {
		        throw $sanitizeMinErr('uinput', "Failed to sanitize html because the input is unstable");
		      }
		      mXSSAttempts--;

		      // strip custom-namespaced attributes on IE<=11
		      if (window.document.documentMode) {
		        stripCustomNsAttrs(inertBodyElement);
		      }
		      html = inertBodyElement.innerHTML; //trigger mXSS
		      inertBodyElement.innerHTML = html;
		    } while (html !== inertBodyElement.innerHTML);

		    var node = inertBodyElement.firstChild;
		    while (node) {
		      switch (node.nodeType) {
		        case 1: // ELEMENT_NODE
		          handler.start(node.nodeName.toLowerCase(), attrToMap(node.attributes));
		          break;
		        case 3: // TEXT NODE
		          handler.chars(node.textContent);
		          break;
		      }

		      var nextNode;
		      if (!(nextNode = node.firstChild)) {
		      if (node.nodeType == 1) {
		          handler.end(node.nodeName.toLowerCase());
		        }
		        nextNode = node.nextSibling;
		        if (!nextNode) {
		          while (nextNode == null) {
		            node = node.parentNode;
		            if (node === inertBodyElement) break;
		            nextNode = node.nextSibling;
		          if (node.nodeType == 1) {
		              handler.end(node.nodeName.toLowerCase());
		            }
		          }
		        }
		      }
		      node = nextNode;
		    }

		    while (node = inertBodyElement.firstChild) {
		      inertBodyElement.removeChild(node);
		    }
		  }

		  function attrToMap(attrs) {
		    var map = {};
		    for (var i = 0, ii = attrs.length; i < ii; i++) {
		      var attr = attrs[i];
		      map[attr.name] = attr.value;
		    }
		    return map;
		  }


		  /**
		   * Escapes all potentially dangerous characters, so that the
		   * resulting string can be safely inserted into attribute or
		   * element text.
		   * @param value
		   * @returns {string} escaped text
		   */
		  function encodeEntities(value) {
		    return value.
		      replace(/&/g, '&amp;').
		      replace(SURROGATE_PAIR_REGEXP, function(value) {
		        var hi = value.charCodeAt(0);
		        var low = value.charCodeAt(1);
		        return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
		      }).
		      replace(NON_ALPHANUMERIC_REGEXP, function(value) {
		        return '&#' + value.charCodeAt(0) + ';';
		      }).
		      replace(/</g, '&lt;').
		      replace(/>/g, '&gt;');
		  }

		  /**
		   * create an HTML/XML writer which writes to buffer
		   * @param {Array} buf use buf.join('') to get out sanitized html string
		   * @returns {object} in the form of {
		   *     start: function(tag, attrs) {},
		   *     end: function(tag) {},
		   *     chars: function(text) {},
		   *     comment: function(text) {}
		   * }
		   */
		  function htmlSanitizeWriterImpl(buf, uriValidator) {
		    var ignoreCurrentElement = false;
		    var out = bind(buf, buf.push);
		    return {
		      start: function(tag, attrs) {
		        tag = lowercase(tag);
		        if (!ignoreCurrentElement && blockedElements[tag]) {
		          ignoreCurrentElement = tag;
		        }
		        if (!ignoreCurrentElement && validElements[tag] === true) {
		          out('<');
		          out(tag);
		          forEach(attrs, function(value, key) {
		            var lkey = lowercase(key);
		            var isImage = (tag === 'img' && lkey === 'src') || (lkey === 'background');
		            if (validAttrs[lkey] === true &&
		              (uriAttrs[lkey] !== true || uriValidator(value, isImage))) {
		              out(' ');
		              out(key);
		              out('="');
		              out(encodeEntities(value));
		              out('"');
		            }
		          });
		          out('>');
		        }
		      },
		      end: function(tag) {
		        tag = lowercase(tag);
		        if (!ignoreCurrentElement && validElements[tag] === true && voidElements[tag] !== true) {
		          out('</');
		          out(tag);
		          out('>');
		        }
		        if (tag == ignoreCurrentElement) {
		          ignoreCurrentElement = false;
		        }
		      },
		      chars: function(chars) {
		        if (!ignoreCurrentElement) {
		          out(encodeEntities(chars));
		        }
		      }
		    };
		  }


		  /**
		   * When IE9-11 comes across an unknown namespaced attribute e.g. 'xlink:foo' it adds 'xmlns:ns1' attribute to declare
		   * ns1 namespace and prefixes the attribute with 'ns1' (e.g. 'ns1:xlink:foo'). This is undesirable since we don't want
		   * to allow any of these custom attributes. This method strips them all.
		   *
		   * @param node Root element to process
		   */
		  function stripCustomNsAttrs(node) {
		    if (node.nodeType === window.Node.ELEMENT_NODE) {
		      var attrs = node.attributes;
		      for (var i = 0, l = attrs.length; i < l; i++) {
		        var attrNode = attrs[i];
		        var attrName = attrNode.name.toLowerCase();
		        if (attrName === 'xmlns:ns1' || attrName.lastIndexOf('ns1:', 0) === 0) {
		          node.removeAttributeNode(attrNode);
		          i--;
		          l--;
		        }
		      }
		    }

		    var nextNode = node.firstChild;
		    if (nextNode) {
		      stripCustomNsAttrs(nextNode);
		    }

		    nextNode = node.nextSibling;
		    if (nextNode) {
		      stripCustomNsAttrs(nextNode);
		    }
		  }
		}

		function sanitizeText(chars) {
		  var buf = [];
		  var writer = htmlSanitizeWriter(buf, noop);
		  writer.chars(chars);
		  return buf.join('');
		}


		// define ngSanitize module and register $sanitize service
		angular.module('ngSanitize', []).provider('$sanitize', $SanitizeProvider);

		/**
		 * @ngdoc filter
		 * @name linky
		 * @kind function
		 *
		 * @description
		 * Finds links in text input and turns them into html links. Supports `http/https/ftp/mailto` and
		 * plain email address links.
		 *
		 * Requires the {@link ngSanitize `ngSanitize`} module to be installed.
		 *
		 * @param {string} text Input text.
		 * @param {string} target Window (`_blank|_self|_parent|_top`) or named frame to open links in.
		 * @param {object|function(url)} [attributes] Add custom attributes to the link element.
		 *
		 *    Can be one of:
		 *
		 *    - `object`: A map of attributes
		 *    - `function`: Takes the url as a parameter and returns a map of attributes
		 *
		 *    If the map of attributes contains a value for `target`, it overrides the value of
		 *    the target parameter.
		 *
		 *
		 * @returns {string} Html-linkified and {@link $sanitize sanitized} text.
		 *
		 * @usage
		   <span ng-bind-html="linky_expression | linky"></span>
		 *
		 * @example
		   <example module="linkyExample" deps="angular-sanitize.js">
		     <file name="index.html">
		       <div ng-controller="ExampleController">
		       Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
		       <table>
		         <tr>
		           <th>Filter</th>
		           <th>Source</th>
		           <th>Rendered</th>
		         </tr>
		         <tr id="linky-filter">
		           <td>linky filter</td>
		           <td>
		             <pre>&lt;div ng-bind-html="snippet | linky"&gt;<br>&lt;/div&gt;</pre>
		           </td>
		           <td>
		             <div ng-bind-html="snippet | linky"></div>
		           </td>
		         </tr>
		         <tr id="linky-target">
		          <td>linky target</td>
		          <td>
		            <pre>&lt;div ng-bind-html="snippetWithSingleURL | linky:'_blank'"&gt;<br>&lt;/div&gt;</pre>
		          </td>
		          <td>
		            <div ng-bind-html="snippetWithSingleURL | linky:'_blank'"></div>
		          </td>
		         </tr>
		         <tr id="linky-custom-attributes">
		          <td>linky custom attributes</td>
		          <td>
		            <pre>&lt;div ng-bind-html="snippetWithSingleURL | linky:'_self':{rel: 'nofollow'}"&gt;<br>&lt;/div&gt;</pre>
		          </td>
		          <td>
		            <div ng-bind-html="snippetWithSingleURL | linky:'_self':{rel: 'nofollow'}"></div>
		          </td>
		         </tr>
		         <tr id="escaped-html">
		           <td>no filter</td>
		           <td><pre>&lt;div ng-bind="snippet"&gt;<br>&lt;/div&gt;</pre></td>
		           <td><div ng-bind="snippet"></div></td>
		         </tr>
		       </table>
		     </file>
		     <file name="script.js">
		       angular.module('linkyExample', ['ngSanitize'])
		         .controller('ExampleController', ['$scope', function($scope) {
		           $scope.snippet =
		             'Pretty text with some links:\n'+
		             'http://angularjs.org/,\n'+
		             'mailto:us@somewhere.org,\n'+
		             'another@somewhere.org,\n'+
		             'and one more: ftp://127.0.0.1/.';
		           $scope.snippetWithSingleURL = 'http://angularjs.org/';
		         }]);
		     </file>
		     <file name="protractor.js" type="protractor">
		       it('should linkify the snippet with urls', function() {
		         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
		             toBe('Pretty text with some links: http://angularjs.org/, us@somewhere.org, ' +
		                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
		         expect(element.all(by.css('#linky-filter a')).count()).toEqual(4);
		       });

		       it('should not linkify snippet without the linky filter', function() {
		         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText()).
		             toBe('Pretty text with some links: http://angularjs.org/, mailto:us@somewhere.org, ' +
		                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
		         expect(element.all(by.css('#escaped-html a')).count()).toEqual(0);
		       });

		       it('should update', function() {
		         element(by.model('snippet')).clear();
		         element(by.model('snippet')).sendKeys('new http://link.');
		         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
		             toBe('new http://link.');
		         expect(element.all(by.css('#linky-filter a')).count()).toEqual(1);
		         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText())
		             .toBe('new http://link.');
		       });

		       it('should work with the target property', function() {
		        expect(element(by.id('linky-target')).
		            element(by.binding("snippetWithSingleURL | linky:'_blank'")).getText()).
		            toBe('http://angularjs.org/');
		        expect(element(by.css('#linky-target a')).getAttribute('target')).toEqual('_blank');
		       });

		       it('should optionally add custom attributes', function() {
		        expect(element(by.id('linky-custom-attributes')).
		            element(by.binding("snippetWithSingleURL | linky:'_self':{rel: 'nofollow'}")).getText()).
		            toBe('http://angularjs.org/');
		        expect(element(by.css('#linky-custom-attributes a')).getAttribute('rel')).toEqual('nofollow');
		       });
		     </file>
		   </example>
		 */
		angular.module('ngSanitize').filter('linky', ['$sanitize', function($sanitize) {
		  var LINKY_URL_REGEXP =
		        /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
		      MAILTO_REGEXP = /^mailto:/i;

		  var linkyMinErr = angular.$$minErr('linky');
		  var isDefined = angular.isDefined;
		  var isFunction = angular.isFunction;
		  var isObject = angular.isObject;
		  var isString = angular.isString;

		  return function(text, target, attributes) {
		    if (text == null || text === '') return text;
		    if (!isString(text)) throw linkyMinErr('notstring', 'Expected string but received: {0}', text);

		    var attributesFn =
		      isFunction(attributes) ? attributes :
		      isObject(attributes) ? function getAttributesObject() {return attributes;} :
		      function getEmptyAttributesObject() {return {};};

		    var match;
		    var raw = text;
		    var html = [];
		    var url;
		    var i;
		    while ((match = raw.match(LINKY_URL_REGEXP))) {
		      // We can not end in these as they are sometimes found at the end of the sentence
		      url = match[0];
		      // if we did not match ftp/http/www/mailto then assume mailto
		      if (!match[2] && !match[4]) {
		        url = (match[3] ? 'http://' : 'mailto:') + url;
		      }
		      i = match.index;
		      addText(raw.substr(0, i));
		      addLink(url, match[0].replace(MAILTO_REGEXP, ''));
		      raw = raw.substring(i + match[0].length);
		    }
		    addText(raw);
		    return $sanitize(html.join(''));

		    function addText(text) {
		      if (!text) {
		        return;
		      }
		      html.push(sanitizeText(text));
		    }

		    function addLink(url, text) {
		      var key, linkAttributes = attributesFn(url);
		      html.push('<a ');

		      for (key in linkAttributes) {
		        html.push(key + '="' + linkAttributes[key] + '" ');
		      }

		      if (isDefined(target) && !('target' in linkAttributes)) {
		        html.push('target="',
		                  target,
		                  '" ');
		      }
		      html.push('href="',
		                url.replace(/"/g, '&quot;'),
		                '">');
		      addText(text);
		      html.push('</a>');
		    }
		  };
		}]);


		})(window, window.angular);


	/***/ },

	/***/ 309:
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});

		var _classCallCheck2 = __webpack_require__(310);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _createClass2 = __webpack_require__(311);

		var _createClass3 = _interopRequireDefault(_createClass2);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var HelperController = function () {
		    function HelperController($scope) {
		        (0, _classCallCheck3.default)(this, HelperController);

		        this.$scope = $scope;
		        this.events = {
		            'component': this.loadComponent,
		            'model': this.loadModel
		        };
		    }

		    (0, _createClass3.default)(HelperController, [{
		        key: '$onInit',
		        value: function $onInit() {
		            var _this = this;

		            this.postMessageListener = window.addEventListener('message', function (event) {
		                event.data && _this.events[event.data.type].call(_this, event.data.data);
		            }, false);
		        }
		    }, {
		        key: '$onDestroy',
		        value: function $onDestroy() {
		            this.postMessageListener();
		        }
		    }, {
		        key: 'loadModel',
		        value: function loadModel(model) {
		            if (model) {
		                for (var k in model) {
		                    this[k] = model[k];
		                }
		            }
		            this.$scope.$apply();
		        }
		    }, {
		        key: 'loadComponent',
		        value: function loadComponent(component) {
		            this.template = component.template;
		            if (component.model) {
		                for (var k in component.model) {
		                    this[k] = component.model[k];
		                }
		            }
		            this.$scope.$apply();
		        }
		    }]);
		    return HelperController;
		}();

		exports.default = HelperController;

	/***/ },

	/***/ 310:
	/***/ function(module, exports) {

		"use strict";

		exports.__esModule = true;

		exports.default = function (instance, Constructor) {
		  if (!(instance instanceof Constructor)) {
		    throw new TypeError("Cannot call a class as a function");
		  }
		};

	/***/ },

	/***/ 311:
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		exports.__esModule = true;

		var _defineProperty = __webpack_require__(312);

		var _defineProperty2 = _interopRequireDefault(_defineProperty);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = function () {
		  function defineProperties(target, props) {
		    for (var i = 0; i < props.length; i++) {
		      var descriptor = props[i];
		      descriptor.enumerable = descriptor.enumerable || false;
		      descriptor.configurable = true;
		      if ("value" in descriptor) descriptor.writable = true;
		      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
		    }
		  }

		  return function (Constructor, protoProps, staticProps) {
		    if (protoProps) defineProperties(Constructor.prototype, protoProps);
		    if (staticProps) defineProperties(Constructor, staticProps);
		    return Constructor;
		  };
		}();

	/***/ },

	/***/ 312:
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(313), __esModule: true };

	/***/ },

	/***/ 313:
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(314);
		var $Object = __webpack_require__(317).Object;
		module.exports = function defineProperty(it, key, desc){
		  return $Object.defineProperty(it, key, desc);
		};

	/***/ },

	/***/ 314:
	/***/ function(module, exports, __webpack_require__) {

		var $export = __webpack_require__(315);
		// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
		$export($export.S + $export.F * !__webpack_require__(325), 'Object', {defineProperty: __webpack_require__(321).f});

	/***/ },

	/***/ 315:
	/***/ function(module, exports, __webpack_require__) {

		var global    = __webpack_require__(316)
		  , core      = __webpack_require__(317)
		  , ctx       = __webpack_require__(318)
		  , hide      = __webpack_require__(320)
		  , PROTOTYPE = 'prototype';

		var $export = function(type, name, source){
		  var IS_FORCED = type & $export.F
		    , IS_GLOBAL = type & $export.G
		    , IS_STATIC = type & $export.S
		    , IS_PROTO  = type & $export.P
		    , IS_BIND   = type & $export.B
		    , IS_WRAP   = type & $export.W
		    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
		    , expProto  = exports[PROTOTYPE]
		    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
		    , key, own, out;
		  if(IS_GLOBAL)source = name;
		  for(key in source){
		    // contains in native
		    own = !IS_FORCED && target && target[key] !== undefined;
		    if(own && key in exports)continue;
		    // export native or passed
		    out = own ? target[key] : source[key];
		    // prevent global pollution for namespaces
		    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
		    // bind timers to global for call from export context
		    : IS_BIND && own ? ctx(out, global)
		    // wrap global constructors for prevent change them in library
		    : IS_WRAP && target[key] == out ? (function(C){
		      var F = function(a, b, c){
		        if(this instanceof C){
		          switch(arguments.length){
		            case 0: return new C;
		            case 1: return new C(a);
		            case 2: return new C(a, b);
		          } return new C(a, b, c);
		        } return C.apply(this, arguments);
		      };
		      F[PROTOTYPE] = C[PROTOTYPE];
		      return F;
		    // make static versions for prototype methods
		    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
		    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
		    if(IS_PROTO){
		      (exports.virtual || (exports.virtual = {}))[key] = out;
		      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
		      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
		    }
		  }
		};
		// type bitmap
		$export.F = 1;   // forced
		$export.G = 2;   // global
		$export.S = 4;   // static
		$export.P = 8;   // proto
		$export.B = 16;  // bind
		$export.W = 32;  // wrap
		$export.U = 64;  // safe
		$export.R = 128; // real proto method for `library` 
		module.exports = $export;

	/***/ },

	/***/ 316:
	/***/ function(module, exports) {

		// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
		var global = module.exports = typeof window != 'undefined' && window.Math == Math
		  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
		if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

	/***/ },

	/***/ 317:
	/***/ function(module, exports) {

		var core = module.exports = {version: '2.4.0'};
		if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

	/***/ },

	/***/ 318:
	/***/ function(module, exports, __webpack_require__) {

		// optional / simple context binding
		var aFunction = __webpack_require__(319);
		module.exports = function(fn, that, length){
		  aFunction(fn);
		  if(that === undefined)return fn;
		  switch(length){
		    case 1: return function(a){
		      return fn.call(that, a);
		    };
		    case 2: return function(a, b){
		      return fn.call(that, a, b);
		    };
		    case 3: return function(a, b, c){
		      return fn.call(that, a, b, c);
		    };
		  }
		  return function(/* ...args */){
		    return fn.apply(that, arguments);
		  };
		};

	/***/ },

	/***/ 319:
	/***/ function(module, exports) {

		module.exports = function(it){
		  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
		  return it;
		};

	/***/ },

	/***/ 320:
	/***/ function(module, exports, __webpack_require__) {

		var dP         = __webpack_require__(321)
		  , createDesc = __webpack_require__(329);
		module.exports = __webpack_require__(325) ? function(object, key, value){
		  return dP.f(object, key, createDesc(1, value));
		} : function(object, key, value){
		  object[key] = value;
		  return object;
		};

	/***/ },

	/***/ 321:
	/***/ function(module, exports, __webpack_require__) {

		var anObject       = __webpack_require__(322)
		  , IE8_DOM_DEFINE = __webpack_require__(324)
		  , toPrimitive    = __webpack_require__(328)
		  , dP             = Object.defineProperty;

		exports.f = __webpack_require__(325) ? Object.defineProperty : function defineProperty(O, P, Attributes){
		  anObject(O);
		  P = toPrimitive(P, true);
		  anObject(Attributes);
		  if(IE8_DOM_DEFINE)try {
		    return dP(O, P, Attributes);
		  } catch(e){ /* empty */ }
		  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
		  if('value' in Attributes)O[P] = Attributes.value;
		  return O;
		};

	/***/ },

	/***/ 322:
	/***/ function(module, exports, __webpack_require__) {

		var isObject = __webpack_require__(323);
		module.exports = function(it){
		  if(!isObject(it))throw TypeError(it + ' is not an object!');
		  return it;
		};

	/***/ },

	/***/ 323:
	/***/ function(module, exports) {

		module.exports = function(it){
		  return typeof it === 'object' ? it !== null : typeof it === 'function';
		};

	/***/ },

	/***/ 324:
	/***/ function(module, exports, __webpack_require__) {

		module.exports = !__webpack_require__(325) && !__webpack_require__(326)(function(){
		  return Object.defineProperty(__webpack_require__(327)('div'), 'a', {get: function(){ return 7; }}).a != 7;
		});

	/***/ },

	/***/ 325:
	/***/ function(module, exports, __webpack_require__) {

		// Thank's IE8 for his funny defineProperty
		module.exports = !__webpack_require__(326)(function(){
		  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
		});

	/***/ },

	/***/ 326:
	/***/ function(module, exports) {

		module.exports = function(exec){
		  try {
		    return !!exec();
		  } catch(e){
		    return true;
		  }
		};

	/***/ },

	/***/ 327:
	/***/ function(module, exports, __webpack_require__) {

		var isObject = __webpack_require__(323)
		  , document = __webpack_require__(316).document
		  // in old IE typeof document.createElement is 'object'
		  , is = isObject(document) && isObject(document.createElement);
		module.exports = function(it){
		  return is ? document.createElement(it) : {};
		};

	/***/ },

	/***/ 328:
	/***/ function(module, exports, __webpack_require__) {

		// 7.1.1 ToPrimitive(input [, PreferredType])
		var isObject = __webpack_require__(323);
		// instead of the ES6 spec version, we didn't implement @@toPrimitive case
		// and the second argument - flag - preferred type is a string
		module.exports = function(it, S){
		  if(!isObject(it))return it;
		  var fn, val;
		  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
		  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
		  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
		  throw TypeError("Can't convert object to primitive value");
		};

	/***/ },

	/***/ 329:
	/***/ function(module, exports) {

		module.exports = function(bitmap, value){
		  return {
		    enumerable  : !(bitmap & 1),
		    configurable: !(bitmap & 2),
		    writable    : !(bitmap & 4),
		    value       : value
		  };
		};

	/***/ },

	/***/ 330:
	/***/ function(module, exports) {

		"use strict";

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});

		exports.default = function ($compile) {
		    return function (scope, element, attrs) {
		        scope.$watch(function (scope) {
		            return scope.$eval(attrs.compile);
		        }, function (value) {
		            element.html(value);
		            $compile(element.contents())(scope);
		        });
		    };
		};

	/***/ }

	/******/ });

/***/ }
/******/ ])
});
;
//# sourceMappingURL=app.js.map