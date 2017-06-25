/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(document).ready(function () {
  $.get("/food/get?criteria=chicken", function (data, status) {
    for (var i = 0; i < data.d.length; i++) {
      var name = data.d[i].name;
      var chef = data.d[i].chef;
      var rating = data.d[i].rating;
      var likes = data.d[i].likes;
      var price = data.d[i].price;
      var criteria = data.d[i].criteria;
      var img = data.d[i].img;
      $('.cards').append('<div class="card" data-toggle="modal" data-target="#' + i + '"><div class="image"><img src="' + img + '"></div></div>');
      $('.inner-content').append('<div class="modal fade" id="' + i + '" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header">' + '<button type="button" class="close" data-dismiss="modal">&times;</button><h4>' + name + '</h4></div><div class="modal-body"><div class="row"><div class="col-sm-8"><span><img class="big-image" src="' + img + '"></span></div><div class="col-sm-4" style="margin-left:-12px"><p><img class="avatar" src="https://api.adorable.io/avatars/24/' + 'useravatar' + i + '.png"><b style="margin-left:5px">' + chef + '</b></p><hr/><div class="ui tag large labels" style="display: inline-block"><a class="ui green label">' + likes + '</a></div>' + '<button class="ui active button small red" style="width: 70px"><i class="user heart icon"></i>' + price + '</button>' + '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor<p>' + '<p><div class="ui buttons"><button class="ui button black big">Delivery</button><div class="or" style="margin-top:3px"></div>' + '<button class="ui white button big">Pick Up</button></div></p></div></div>' + '</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' + '</div></div></div></div>');
    }
  });
});

/***/ })
/******/ ]);