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
  $.get("", function (data, status) {
    for (var i = 0; i < data.length; i++) {
      var name = data[i].name;
      var chef = data[i].chef;
      var rating = data[i].rating;
      var likes = data[i].likes;
      var price = data[i].price;
      var criteria = data[i].criteria;
      var img = data[i].img;
      $('.cards').append('<div class="card" data-toggle="modal" data-target="#' + i + '"><div class="image"><img src="' + img + '"></div></div>');
      $('.inner-content').append('<div class="modal fade" id="#' + i + '" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header">' + '<button type="button" class="close" data-dismiss="modal">&times;</button><h4>' + name + '</h4></div><div class="modal-body"><div class="row"><div class="col-sm-8"><span><img class="big-image" src="' + img + '"></span></div><div class="col-sm-4"><p><img class="avatar" src=""><b>' + chef + '</b></p><span><i class="empty heart icon"></i><i class="comment outline icon"></i></span>' + '<p><button class="btn btn-info">Pick Up</button><button class="btn btn-success">Delivery</button></p></div></div>' + '</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' + '</div></div></div></div>');
    }
  });
});

/***/ })
/******/ ]);