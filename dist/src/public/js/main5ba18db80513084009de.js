!function(e){var n={};function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)o.d(t,i,function(n){return e[n]}.bind(null,i));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=1)}([function(e,n,o){},function(e,n,o){"use strict";o.r(n);o(0);function t(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var i=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.componente}var n,o,i;return n=e,(o=[{key:"componteVacia",value:function(){return this.crearComponente(),this.getComponente()}},{key:"componenteUpdate",value:function(){}},{key:"crearComponente",value:function(){var e=document.createElement("div");this.componente=e}},{key:"getComponente",value:function(){return this.componente}}])&&t(n.prototype,o),i&&t(n,i),e}();function r(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var c=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.componente}var n,o,t;return n=e,(o=[{key:"componteVacia",value:function(){return this.crearComponente(),this.getComponente()}},{key:"componenteUpdate",value:function(){}},{key:"crearComponente",value:function(){var e=document.createElement("div");e.innerHTML="Vacia Producto",this.componente=e}},{key:"getComponente",value:function(){return this.componente}}])&&r(n.prototype,o),t&&r(n,t),e}();function a(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var u=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.componente}var n,o,t;return n=e,(o=[{key:"componteVacia",value:function(){return this.crearComponente(),this.getComponente()}},{key:"componenteUpdate",value:function(){}},{key:"crearComponente",value:function(){var e=document.createElement("div");e.innerHTML="Vacia Ventas",this.componente=e}},{key:"getComponente",value:function(){return this.componente}}])&&a(n.prototype,o),t&&a(n,t),e}();function p(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var l=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.componente}var n,o,t;return n=e,(o=[{key:"componteVacia",value:function(){return this.crearComponente(),this.getComponente()}},{key:"componenteUpdate",value:function(){}},{key:"crearComponente",value:function(){var e=document.createElement("div");e.innerHTML="Vacio Inventario",this.componente=e}},{key:"getComponente",value:function(){return this.componente}}])&&p(n.prototype,o),t&&p(n,t),e}();function s(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var f=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.componente}var n,o,t;return n=e,(o=[{key:"componteVacia",value:function(){return this.crearComponente(),this.getComponente()}},{key:"componenteUpdate",value:function(){}},{key:"crearComponente",value:function(){var e=document.createElement("div");e.innerHTML="Vacio Inicio",this.componente=e}},{key:"getComponente",value:function(){return this.componente}}])&&s(n.prototype,o),t&&s(n,t),e}();function m(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.personalDesing=new i,this.productosDesing=new c,this.ventasDesing=new u,this.inventarioDesing=new l,this.inicioDesing=new f,this.opcionsControl={1:{name:"Inicio",componente:{},componenteContenido:{}},2:{name:"Personal",componente:{},componenteContenido:{}},3:{name:"Productos",componente:{},componenteContenido:{}},4:{name:"Ventas",componente:{},componenteContenido:{}},5:{name:"Inventario",componente:{},componenteContenido:{}}},this.pintar(),this.llenarComponentes(),this.events()}var n,o,t;return n=e,(o=[{key:"pintar",value:function(){var e=this,n=document.querySelector(".butons-menu");Object.keys(this.opcionsControl).map((function(o){var t=document.createElement("li"),i=document.createElement("a");i.setAttribute("href","#"),i.innerHTML=e.opcionsControl[o].name,e.opcionsControl[o].componente=i,t.appendChild(i),n.appendChild(t)}))}},{key:"events",value:function(){var e=this,n=document.querySelector(".contenido-info");Object.keys(this.opcionsControl).map((function(o){e.opcionsControl[o].componente.addEventListener("click",(function(t){t.preventDefault(),n.innerHTML="",n.appendChild(e.opcionsControl[o].componenteContenido)}))})),n.appendChild(this.opcionsControl[1].componenteContenido)}},{key:"llenarComponentes",value:function(){this.opcionsControl[1].componenteContenido=this.personalDesing.componteVacia(),this.opcionsControl[2].componenteContenido=this.personalDesing.componteVacia(),this.opcionsControl[3].componenteContenido=this.productosDesing.componteVacia(),this.opcionsControl[4].componenteContenido=this.ventasDesing.componteVacia(),this.opcionsControl[5].componenteContenido=this.inventarioDesing.componteVacia()}}])&&m(n.prototype,o),t&&m(n,t),e}())}]);