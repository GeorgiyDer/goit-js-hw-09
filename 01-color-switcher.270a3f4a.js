!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");t.addEventListener("click",(function(d){a=setInterval((function(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.setAttribute("disabled",!0),e.removeAttribute("disabled")})),e.addEventListener("click",(function(r){clearInterval(a),e.setAttribute("disabled",!0),t.removeAttribute("disabled")})),e.setAttribute("disabled",!0);var a=null}();
//# sourceMappingURL=01-color-switcher.270a3f4a.js.map