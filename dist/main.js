/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("fetch('https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/filemap.xml').then(response => response.text()).then(response => {\n  const parser = new DOMParser();\n  const xml = parser.parseFromString(response, 'text/xml');\n  const results = [].slice.call(xml.getElementsByTagName('Key')).filter(key => key.textContent.includes('.json'));\n  const files = results.map(file => file.textContent.split('/')[1]);\n}).catch(response => {\n  console.log(response);\n});\ndocument.addEventListener('DOMContentLoaded', function () {\n  // Select an element from the DOM\n  fetch('https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/filemap.xml').then(response => response.text()).then(response => {\n    const parser = new DOMParser();\n    const xml = parser.parseFromString(response, 'text/xml');\n    const results = [].slice.call(xml.getElementsByTagName('Key')).filter(key => key.textContent.includes('.json'));\n    const files = results.map(file => file.textContent.split('/')[1]);\n  }).catch(response => {\n    console.log(response);\n  });\n\n  // const header = document.querySelector('header');\n\n  // // Modify the element\n  // header.innerHTML = '<h1>Hello, World!</h1>';\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsInRleHQiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJ4bWwiLCJwYXJzZUZyb21TdHJpbmciLCJyZXN1bHRzIiwic2xpY2UiLCJjYWxsIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJmaWx0ZXIiLCJrZXkiLCJ0ZXh0Q29udGVudCIsImluY2x1ZGVzIiwiZmlsZXMiLCJtYXAiLCJmaWxlIiwic3BsaXQiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3NuZWFrZXJ0cmFjay8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImZldGNoKCdodHRwczovL2hvdXNlLXN0b2NrLXdhdGNoZXItZGF0YS5zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9kYXRhL2ZpbGVtYXAueG1sJylcclxuLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS50ZXh0KCkpXHJcbi50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKVxyXG4gIGNvbnN0IHhtbCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcocmVzcG9uc2UsICd0ZXh0L3htbCcpXHJcbiAgY29uc3QgcmVzdWx0cyA9IFtdLnNsaWNlLmNhbGwoIHhtbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnS2V5JykgKS5maWx0ZXIoKGtleSkgPT4ga2V5LnRleHRDb250ZW50LmluY2x1ZGVzKCcuanNvbicpKVxyXG4gIGNvbnN0IGZpbGVzID0gcmVzdWx0cy5tYXAoZmlsZSA9PiBmaWxlLnRleHRDb250ZW50LnNwbGl0KCcvJylbMV0pXHJcbn0pXHJcbi5jYXRjaCgocmVzcG9uc2UpID0+IHtcclxuICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxufSlcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIC8vIFNlbGVjdCBhbiBlbGVtZW50IGZyb20gdGhlIERPTVxyXG4gICAgZmV0Y2goJ2h0dHBzOi8vaG91c2Utc3RvY2std2F0Y2hlci1kYXRhLnMzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL2RhdGEvZmlsZW1hcC54bWwnKVxyXG4udGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSlcclxuLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpXHJcbiAgY29uc3QgeG1sID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhyZXNwb25zZSwgJ3RleHQveG1sJylcclxuICBjb25zdCByZXN1bHRzID0gW10uc2xpY2UuY2FsbCggeG1sLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdLZXknKSApLmZpbHRlcigoa2V5KSA9PiBrZXkudGV4dENvbnRlbnQuaW5jbHVkZXMoJy5qc29uJykpXHJcbiAgY29uc3QgZmlsZXMgPSByZXN1bHRzLm1hcChmaWxlID0+IGZpbGUudGV4dENvbnRlbnQuc3BsaXQoJy8nKVsxXSlcclxufSlcclxuLmNhdGNoKChyZXNwb25zZSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG59KVxyXG4gICAgXHJcbiAgICAvLyBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcclxuICBcclxuICAgIC8vIC8vIE1vZGlmeSB0aGUgZWxlbWVudFxyXG4gICAgLy8gaGVhZGVyLmlubmVySFRNTCA9ICc8aDE+SGVsbG8sIFdvcmxkITwvaDE+JztcclxuICB9KTsiXSwibWFwcGluZ3MiOiJBQUFBQSxLQUFLLENBQUMsOEVBQThFLENBQUMsQ0FDcEZDLElBQUksQ0FBRUMsUUFBUSxJQUFLQSxRQUFRLENBQUNDLElBQUksRUFBRSxDQUFDLENBQ25DRixJQUFJLENBQUVDLFFBQVEsSUFBSztFQUNsQixNQUFNRSxNQUFNLEdBQUcsSUFBSUMsU0FBUyxFQUFFO0VBQzlCLE1BQU1DLEdBQUcsR0FBR0YsTUFBTSxDQUFDRyxlQUFlLENBQUNMLFFBQVEsRUFBRSxVQUFVLENBQUM7RUFDeEQsTUFBTU0sT0FBTyxHQUFHLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJLENBQUVKLEdBQUcsQ0FBQ0ssb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUUsQ0FBQ0MsTUFBTSxDQUFFQyxHQUFHLElBQUtBLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7RUFDbkgsTUFBTUMsS0FBSyxHQUFHUixPQUFPLENBQUNTLEdBQUcsQ0FBQ0MsSUFBSSxJQUFJQSxJQUFJLENBQUNKLFdBQVcsQ0FBQ0ssS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25FLENBQUMsQ0FBQyxDQUNEQyxLQUFLLENBQUVsQixRQUFRLElBQUs7RUFDbkJtQixPQUFPLENBQUNDLEdBQUcsQ0FBQ3BCLFFBQVEsQ0FBQztBQUN2QixDQUFDLENBQUM7QUFFRnFCLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBVztFQUNyRDtFQUNBeEIsS0FBSyxDQUFDLDhFQUE4RSxDQUFDLENBQ3hGQyxJQUFJLENBQUVDLFFBQVEsSUFBS0EsUUFBUSxDQUFDQyxJQUFJLEVBQUUsQ0FBQyxDQUNuQ0YsSUFBSSxDQUFFQyxRQUFRLElBQUs7SUFDbEIsTUFBTUUsTUFBTSxHQUFHLElBQUlDLFNBQVMsRUFBRTtJQUM5QixNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csZUFBZSxDQUFDTCxRQUFRLEVBQUUsVUFBVSxDQUFDO0lBQ3hELE1BQU1NLE9BQU8sR0FBRyxFQUFFLENBQUNDLEtBQUssQ0FBQ0MsSUFBSSxDQUFFSixHQUFHLENBQUNLLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFFLENBQUNDLE1BQU0sQ0FBRUMsR0FBRyxJQUFLQSxHQUFHLENBQUNDLFdBQVcsQ0FBQ0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25ILE1BQU1DLEtBQUssR0FBR1IsT0FBTyxDQUFDUyxHQUFHLENBQUNDLElBQUksSUFBSUEsSUFBSSxDQUFDSixXQUFXLENBQUNLLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNuRSxDQUFDLENBQUMsQ0FDREMsS0FBSyxDQUFFbEIsUUFBUSxJQUFLO0lBQ25CbUIsT0FBTyxDQUFDQyxHQUFHLENBQUNwQixRQUFRLENBQUM7RUFDdkIsQ0FBQyxDQUFDOztFQUVFOztFQUVBO0VBQ0E7QUFDRixDQUFDLENBQUMifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbmVha2VydHJhY2svLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;