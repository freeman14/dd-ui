!function(e,o){if("object"==typeof exports&&"object"==typeof module)module.exports=o();else if("function"==typeof define&&define.amd)define([],o);else{var t=o();for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(this,function(){return function(e){function o(n){if(t[n])return t[n].exports;var d=t[n]={exports:{},id:n,loaded:!1};return e[n].call(d.exports,d,d.exports,o),d.loaded=!0,d.exports}var t={};return o.m=e,o.c=t,o.p="",o(0)}([function(e,o,t){e.exports=t(20)},,,,,,,,,,,,,,,,,,,,function(e,o,t){"use strict";t(21),t(25)},function(e,o,t){var n=t(22);"string"==typeof n&&(n=[[e.id,n,""]]);t(24)(n,{});n.locals&&(e.exports=n.locals)},function(e,o,t){o=e.exports=t(23)(),o.push([e.id,"body{font-family:Open Sans,sans-serif;font-weight:400;font-size:14px;margin:0;padding:0;color:#475257}.container{margin:0 auto;max-width:995px}.center{text-align:center}.divider{border-top:1px solid #dedede}.silver{color:#c1c1c1}h1{font-size:34px}h1,h2{font-family:Open Sans,sans-serif;font-weight:300;margin:0;padding:0}h2{font-size:30px;color:#475257}h3{font-weight:400;font-size:24px}h3,h4{font-family:Open Sans,sans-serif;margin:0;padding:0;color:#475257}h4{font-weight:300;font-size:20px}h5{font-weight:400;font-size:18px}h5,h6{font-family:Open Sans,sans-serif;margin:0;padding:0;color:#475257}h6{font-weight:700;font-size:16px}.text{color:#475257}.text,.text__secondary{font-family:Open Sans,sans-serif;font-weight:400;font-size:14px;margin:0;padding:0}.text__secondary{color:#8a8a8a}.text__small{font-size:12px}@keyframes blink{0%,to{background:#dedede}25%{background:#c1c1c1}50%{background:#dedede}75%{background:#c1c1c1}}@keyframes border-blink{0%,to{border-color:#dedede}25%{border-color:#c1c1c1}50%{border-color:#dedede}75%{border-color:#c1c1c1}}[flex]{flex:1}[layout-column],[layout-row]{box-sizing:border-box;display:-webkit-box;display:flex}form{width:100%}.dd__checkbox{position:relative}.dd__checkbox .checkbox__body{background:#fff;border:1px solid #b4bcc2;border-radius:4px;width:20px;height:20px;display:inline-block;position:absolute;top:50%;left:0;right:auto;transform:translateY(-50%);box-sizing:border-box}.dd__checkbox.checked .checkbox__body{border:1px solid #529ccf;background:#529ccf;color:#fff}.dd__checkbox.checked .checkbox__body:before{box-sizing:border-box;-webkit-transform:rotate(45deg);transform:rotate(45deg);position:absolute;left:7px;top:2px;display:table;width:5px;height:12px;border-width:2px;border-style:solid;border-top:0;border-left:0;content:''}.dd__checkbox .checkbox__label{color:#8a8a8a;box-sizing:border-box;position:relative;display:inline-block;vertical-align:middle;white-space:normal;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;margin-left:30px;margin-right:0}.dd__checkbox.checked .checkbox__label{color:#475257}.lable{font-weight:600;font-size:15px;margin:0;color:#364347;margin-bottom:8px}.lable,.lable span{font-family:Open Sans,sans-serif;padding:0}.lable span{font-weight:300;font-size:14px;margin:0;color:#8a8a8a;margin-left:8px}.dd__input{display:flex;flex-direction:column;margin:0 0 20px;position:relative}.dd__input .icon{margin-left:10px}.dd__input .limit-indicator{position:absolute;right:15px;top:15px}.dd__input input{border:1px solid #dedede;border-radius:4px;width:100%;height:44px;outline:none;color:#364347;border:1px solid #ccc;overflow:hidden;padding:0 15px;font-weight:300;box-sizing:border-box}.dd__input input::-webkit-input-placeholder{color:#c1c1c1}.dd__input input :-moz-placeholder,.dd__input input ::-moz-placeholder{color:#c1c1c1}.dd__input input :-ms-input-placeholder{color:#c1c1c1}.dd__input input.ng-invalid{border-color:#c00}.dd__input .input__message{display:none;margin-top:6px;text-transform:uppercase;font-size:11px;color:#c00;font-weight:600}.dd__input .ng-invalid~.input__message{display:block}.dd__input.dd__limit input{padding:0 43px 0 15px}.dd__textarea{display:flex;position:relative;min-height:80px;margin:0 0 20px}.dd__textarea .text-limit-wrapper{display:flex}.dd__textarea textarea{border:1px solid #dedede;border-radius:4px;width:100%;outline:none;color:#364347;padding:15px;font-weight:300;box-sizing:border-box;resize:none}.dd__textarea textarea::-webkit-input-placeholder{color:#c1c1c1}.dd__textarea textarea :-moz-placeholder,.dd__textarea textarea ::-moz-placeholder{color:#c1c1c1}.dd__textarea textarea :-ms-input-placeholder{color:#c1c1c1}.btn{color:#fff;outline:none;height:44px;min-width:200px;vertical-align:middle;font-size:14px;cursor:pointer;padding:0;border-radius:4px;margin:0 5px}.btn--primary{color:#fff;background-color:#ff6400;border:1px solid #ff6400}.btn--primary:hover{border-color:#ec5d00;background-color:#ec5d00;color:#fff}.btn--primary:disabled{border:1px solid #ff6400;background-color:#ff6400;opacity:.3}.btn--default{color:#b4bcc2;background-color:#fff;border:1px solid #b4bcc2}.btn--default:hover{border-color:#b4bcc2;background-color:#f8f8f9;color:#b4bcc2}.btn--default:disabled{border:1px solid #b4bcc2;background-color:#fff;opacity:.3}.btn--hollow{color:#ff6400;background-color:#fff;border:1px solid #ff6400}.btn--hollow:hover{border-color:#ec5d00;background-color:#ec5d00;color:#fff}.btn--hollow:disabled{border:1px solid #ff6400;background-color:#fff;opacity:.3}.btn--sm{min-width:120px;font-size:13px}.btn--xs{min-width:33px;height:33px;font-size:13px}.btn__link{background:none;font-size:14px;border:none;outline:none;cursor:pointer;padding:0;margin:0 5px}.btn__link--primary{color:#529ccf}.btn__link--primary:hover{color:#529ccf;text-decoration:underline}.btn__link--primary:focus{color:#529ccf}.btn__link--primary:disabled{opacity:.3}.btn__icon{width:44px;height:44px;border-radius:4px;padding:0;outline:none;cursor:pointer;margin:0 5px;background:transparent;border:none}.btn__icon.btn__icon--small{width:33px;height:33px}.btn__icon--inner{border:none;background:#fff;font-size:8px;cursor:pointer;vertical-align:middle;color:#475257;padding:0;outline:none}.btn--slide{transition:max-width .2s;overflow:hidden}.btn--slide>span{transition:opacity .2s;display:block;white-space:nowrap}.btn--slide.btn--xs{max-width:33px}.btn--slide.btn--xs>span{padding:10px}.btn--slide.btn--xs i{margin-right:5px}.btn--slide:hover{max-width:100%}.btn--slide:hover>span{opacity:1}.dd__icon{line-height:1.15!important}.dd__icon-arrow-up{transform:rotate(90deg);display:inline-block}.dd__icon-arrow-right{transform:rotate(180deg);display:inline-block}.dd__icon-arrow-down{transform:rotate(270deg);display:inline-block}.modal-dialog{margin:200px auto!important}.modal-content{background:none;box-shadow:none;border:none;border-radius:none}.spin__box{position:absolute;margin:auto;left:0;top:0;bottom:0;right:0;border-radius:100%;width:15px;height:15px;box-shadow:15px 15px #e96300,-15px 15px #529ccf,-15px -15px #62b989,15px -15px #f3bc65;animation:spin ease infinite 3s}@keyframes spin{0%,to{box-shadow:15px 15px #529ccf,-15px 15px #62b989,-15px -15px #f3bc65,15px -15px #e96300}25%{box-shadow:-15px 15px #62b989,-15px -15px #f3bc65,15px -15px #e96300,15px 15px #529ccf}50%{box-shadow:-15px -15px #f3bc65,15px -15px #e96300,15px 15px #529ccf,-15px 15px #62b989}75%{box-shadow:15px -15px #e96300,15px 15px #529ccf,-15px 15px #62b989,-15px -15px #f3bc65}}.dd__tabs{display:flex;flex-grow:0;align-content:flex-start;justify-content:space-around;list-style:none;margin:0;padding:0}.dd__tabs .dd__tab-item{text-align:center;flex-grow:1;flex-shrink:1;flex-basis:100%;display:block}.dd__tabs .dd__tab-item a{display:block;width:100%;height:100%;background:#f8f8f9;color:#8a8a8a;padding:16px 0;box-sizing:border-box;text-decoration:none;border-right:1px solid #dedede;border-bottom:1px solid #dedede;border-top:1px solid #dedede}.dd__tabs .dd__tab-item.active a{color:#364347;background:#fff;border-bottom:0}.dd__tab-content{padding:20px}.dd__tab-content .dd__content-item{display:none}.dd__tab-content .dd__content-item.active,dd-card{display:flex}.dotted .dd__card{border:2px dotted #dedede}.dd__card{transition:all .2s;width:100%;border:1px solid #dedede;border-radius:4px;margin:10px}.dd__card .divider{transition:all .2s;opacity:0}.dd__card .dd__card-header{margin:20px}.dd__card .dd__card-title{margin:0 20px 15px}.dd__card .dd__card-text{font-family:Open Sans,sans-serif;font-weight:400;font-size:14px;margin:0;padding:0;color:#8a8a8a;line-height:1.5;margin:0 20px 15px}.dd__card .dd__card-footer{transition:all .2s;display:flex;margin:20px}.dd__card .dd__card-footer .btn{margin:0 3px}.dd__card .dd__card-footer .btn:first-child{margin-left:0}.dd__card .dd__card-footer .btn:last-child{margin-right:0}.hover__action>.dd__card:hover{transform:translateY(-2px);box-shadow:0 1px 10px rgba(0,0,0,.25)}.hover__action>.dd__card:hover .divider{transform:translateY(-20px);opacity:1}.hover__action>.dd__card:hover .dd__card-footer{transform:translateY(-10px);border-color:#dedede}dd-card-loading{display:flex;width:33%}.dd__card-loading{width:100%;padding:20px;border:1px solid #dedede;border-radius:4px;margin:10px;animation:border-blink 5s ease 0s infinite;transition:all .5s ease-in-out}.dd__card-loading .loading__header{height:50px;display:flex;align-items:center;margin-bottom:24px}.dd__card-loading .loading__header .loading__header-images{display:flex}.dd__card-loading .loading__header .loading__header-images div{width:38px;height:38px;border:2px solid #fff;border-radius:50%;position:relative;box-sizing:border-box;animation:blink 5s ease 0s infinite;transition:all .5s ease-in-out}.dd__card-loading .loading__header .loading__header-images div:first-child{z-index:30}.dd__card-loading .loading__header .loading__header-images div:nth-child(2){z-index:20;margin-left:-19px}.dd__card-loading .loading__header .loading__header-images div:nth-child(3){z-index:10;margin-left:-19px}.dd__card-loading .loading__header .loading__header-title{width:110px;height:10px;border-radius:10px;margin-left:20px;animation:blink 5s ease 0s infinite;transition:all .5s ease-in-out}.dd__card-loading .loading__body{height:78px}.dd__card-loading .loading__body div{height:10px;border-radius:10px;margin-bottom:10px;animation:blink 5s ease 0s infinite;transition:all .5s ease-in-out}.dd__card-loading .loading__body div:first-child{width:90%}.dd__card-loading .loading__body div:nth-child(2){width:100%}.dd__card-loading .loading__body div:nth-child(3){width:60%}.dd__card-loading .loading__footer{display:flex;margin-top:100px;margin-top:43px}.dd__card-loading .loading__footer div{width:33px;height:33px;border:2px solid;background:#fff;margin-right:10px;border-radius:4px;box-sizing:border-box;animation:border-blink 5s ease 0s infinite;transition:all .5s ease-in-out}.dd__img__placeholder{position:relative;width:60px;height:60px;background:#f0f1f2}.dd__img__placeholder.dd__img__placeholder--phone{background:#71bf44}.dd__img__placeholder:after,.dd__img__placeholder:before{position:absolute;content:'';width:90px;top:-3px;border-bottom:1px solid #fff}.dd__img__placeholder:before{left:-2px;transform-origin:0 0;transform:rotate(45deg)}.dd__img__placeholder:after{right:-2px;transform-origin:100% 0;transform:rotate(-45deg)}.dd__content{display:block;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}.dd__content[flex]{display:flex;flex-wrap:wrap}.dd__content[column]{flex-direction:column}",""])},function(e,o){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],o=0;o<this.length;o++){var t=this[o];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(o,t){"string"==typeof o&&(o=[[null,o,""]]);for(var n={},d=0;d<this.length;d++){var i=this[d][0];"number"==typeof i&&(n[i]=!0)}for(d=0;d<o.length;d++){var r=o[d];"number"==typeof r[0]&&n[r[0]]||(t&&!r[2]?r[2]=t:t&&(r[2]="("+r[2]+") and ("+t+")"),e.push(r))}},e}},function(e,o,t){function n(e,o){for(var t=0;t<e.length;t++){var n=e[t],d=x[n.id];if(d){d.refs++;for(var i=0;i<d.parts.length;i++)d.parts[i](n.parts[i]);for(;i<n.parts.length;i++)d.parts.push(c(n.parts[i],o))}else{for(var r=[],i=0;i<n.parts.length;i++)r.push(c(n.parts[i],o));x[n.id]={id:n.id,refs:1,parts:r}}}}function d(e){for(var o=[],t={},n=0;n<e.length;n++){var d=e[n],i=d[0],r=d[1],a=d[2],l=d[3],c={css:r,media:a,sourceMap:l};t[i]?t[i].parts.push(c):o.push(t[i]={id:i,parts:[c]})}return o}function i(e,o){var t=h(),n=m[m.length-1];if("top"===e.insertAt)n?n.nextSibling?t.insertBefore(o,n.nextSibling):t.appendChild(o):t.insertBefore(o,t.firstChild),m.push(o);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(o)}}function r(e){e.parentNode.removeChild(e);var o=m.indexOf(e);o>=0&&m.splice(o,1)}function a(e){var o=document.createElement("style");return o.type="text/css",i(e,o),o}function l(e){var o=document.createElement("link");return o.rel="stylesheet",i(e,o),o}function c(e,o){var t,n,d;if(o.singleton){var i=u++;t=g||(g=a(o)),n=p.bind(null,t,i,!1),d=p.bind(null,t,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=l(o),n=f.bind(null,t),d=function(){r(t),t.href&&URL.revokeObjectURL(t.href)}):(t=a(o),n=s.bind(null,t),d=function(){r(t)});return n(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;n(e=o)}else d()}}function p(e,o,t,n){var d=t?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(o,d);else{var i=document.createTextNode(d),r=e.childNodes;r[o]&&e.removeChild(r[o]),r.length?e.insertBefore(i,r[o]):e.appendChild(i)}}function s(e,o){var t=o.css,n=o.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}function f(e,o){var t=o.css,n=o.sourceMap;n&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var d=new Blob([t],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(d),i&&URL.revokeObjectURL(i)}var x={},_=function(e){var o;return function(){return"undefined"==typeof o&&(o=e.apply(this,arguments)),o}},b=_(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=_(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,u=0,m=[];e.exports=function(e,o){o=o||{},"undefined"==typeof o.singleton&&(o.singleton=b()),"undefined"==typeof o.insertAt&&(o.insertAt="bottom");var t=d(e);return n(t,o),function(e){for(var i=[],r=0;r<t.length;r++){var a=t[r],l=x[a.id];l.refs--,i.push(l)}if(e){var c=d(e);n(c,o)}for(var r=0;r<i.length;r++){var l=i[r];if(0===l.refs){for(var p=0;p<l.parts.length;p++)l.parts[p]();delete x[l.id]}}}};var y=function(){var e=[];return function(o,t){return e[o]=t,e.filter(Boolean).join("\n")}}()},function(e,o,t){var n=t(26);"string"==typeof n&&(n=[[e.id,n,""]]);t(24)(n,{});n.locals&&(e.exports=n.locals)},function(e,o){e.exports='@font-face {\n\tfont-family: "dd-icon-font";\n\tsrc: url("./fonts/dd-icon-font.eot?#iefix") format("embedded-opentype"),\nurl("./fonts/dd-icon-font.woff") format("woff"),\nurl("./fonts/dd-icon-font.ttf") format("truetype"),\nurl("./fonts/dd-icon-font.svg#dd-icon-font") format("svg");\n}\n\n.dd__icon {\n\tline-height: 1;\n}\n\n.dd__icon:before {\n\tfont-family: dd-icon-font !important;\n\tfont-style: normal;\n\tfont-weight: normal !important;\n\tvertical-align: top;\n}\n\n.dd__icon-arrow:before {\n\tcontent: "\\f101";\n}\n.dd__icon-create-round:before {\n\tcontent: "\\f102";\n}\n.dd__icon-forward:before {\n\tcontent: "\\f103";\n}\n.dd__icon-remove:before {\n\tcontent: "\\f104";\n}\n.dd__icon-search:before {\n\tcontent: "\\f105";\n}\n.dd__icon-trash:before {\n\tcontent: "\\f106";\n}\n'}])});
//# sourceMappingURL=dd-styles.js.map