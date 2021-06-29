// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
var html = document.querySelector('#html');
var style = document.querySelector('#style');
var str = "\n<style>\n*{\n    padding:0;\n    margin:0;\n    box-sizing: border-box;\n}\nbody,html{\n    width:100%;\n    height: 100%;\n    background-color: #fee2d2;\n}\n\n.wrapper .dog{\n    width:180px;\n    height:186px;\n    position: relative;\n}\n@keyframes head{\n    0%{\n        transform: rotate(0deg)\n    }\n    30%{\n        transform: rotate(0deg)\n    }\n    40%{\n        transform: rotate(-20deg)\n    }\n    80%{\n        transform: rotate(-20deg);\n    }\n    90%{\n        transform: rotate(0deg)\n    }\n    100%{\n        transform: rotate(0deg)\n    }\n}\n\n.dog .dog-head{\n    /* border: 1px solid red; */\n    width:100px;\n    height:90px;\n    position: absolute;\n    top: 30px;\n    z-index:5;\n    left: calc(50% - 50px);\n    background-color: #efc092;\n    border-radius:50%;\n    animation: head 6s linear infinite;\n} \n.dog-head::before,\n.dog-head::after{\n    content:'';\n    width:79px;\n    height:50px;\n    position:absolute;\n    top:44px;\n    z-index:5;\n    background-color: red;\n    border-radius: 50%;\n}\n.dog-head::before{\n    left: -7px;\n    transform: rotate(50deg);\n}\n.dog-head::after{\n    right: -7px;\n    transform: rotate(-46deg);\n}\n.dog-ears{\n    width: 80px;\n    height: 50px;\n    position: absolute;\n    z-index:0;\n    top: -2px;\n    border-radius: 150px 0 150px 0;\n    background-color: #efc092;\n}\n.dog-ears::after{\n    content: '';\n    width: 50px;\n    height: 30px;\n    position: absolute;\n    z-index:0;\n    top: 8px;\n    left: 20px;\n    border-radius: 150px 0 150px 0;\n    transform: rotate(-176deg);\n    background-color: #fee2d2;\n}\n .ears-left{\n    left: -22px;\n    transform: rotate(-105deg);\n}\n.ears-right{\n    left: 44px;\n    transform: rotate( -22deg);\n}\n\n\n.dog-mouth{\n    width:60px;\n    height:35px;\n    background-color: #fee2d2;\n    position:absolute;\n    bottom:-15px;\n    left: 20px;\n    z-index:10;\n    border-radius:50%;\n}\n.dog-mouth::after{\n    content:'';\n    width:10px;\n    height: 40px;\n    background-color:#fee2d2;\n    position:absolute;\n    bottom:30px;\n    left: 24px;\n    z-index:10;\n    border-radius: 20px;\n}\n.dog-mouth .dog-nose{\n    width:16px;\n    height:10px;\n    position: absolute;\n    top:8px;\n    left:calc(50% - 8px);\n    background-color: #000;\n    border-radius: 50%;\n}\n@keyframes tongue{\n    0%{\n        height:10px;\n    }\n    30%{\n        height: 10px;\n    }\n    40%{\n        height:20px;\n    }\n    60%{\n        height:10px;\n    }\n    80%{\n        height: 20px;\n    }\n    90%{\n        height: 10px;\n    }\n    100%{\n        height: 10px;\n    }\n}\n.dog-mouth .dog-tongue{\n    width:20px;\n    height: 10px;\n    position:absolute;\n    top:24px;\n    left: calc(50% - 10px);\n    background-color:#f4a4ad;\n    border-radius: 0 0 10px 10px;\n    animation: tongue 4s linear infinite;\n}\n.dog-eyes{\n    /* border: 1px solid red; */\n    width: 10px;\n    height: 16px;\n    background-color: #000;\n    position: absolute;\n    top: 52px;\n    left: 28px;\n    border-radius: 50%;\n    z-index: 10;\n    box-shadow: 33px 0 0 #000;\n}\n.dog-eyes::after{\n    content:'';\n    width: 92px;\n    height: 50px;\n    position: absolute;\n    top: -50px;\n    left: -24px;\n    background-color: #efc092;\n    border-radius: 50%;\n\n}\n.dog-eyes::before{\n    content:'';\n    width: 4px;\n    height: 6px;\n    border-radius: 50%;\n    position: absolute;\n    top:2px;\n    left:2px;\n    background-color: #fffeff;\n    box-shadow: 34px 0 0 #fffeff;\n}\n\n.dog-body{\n    width:  54px;\n    height: 60px;\n    position: absolute;\n    top:120px;\n    left: calc(50% - 35px);\n    background-color: #ef8d4e;\n    border-radius: 49px 0 0 20px;\n}\n.dog-body::before{\n    content:'';\n    width: 50px;\n    height: 60px;\n    position: absolute;\n    top: 3px ;\n    left: calc(50% - 17px);\n    background-color: #efbf8e;\n    border-radius: 100px 100px 0 0;\n}\n.dog-body::after{\n    content:'';\n    width: 15px;\n    height: 30px;\n    position: absolute;\n    top: 32px;\n    left: 28px;\n    background-color: #d58b4e;\n    border-radius: 100px 100px 0 0;\n}\n.dog-foot{\n    width: 20px;\n    height: 13px;\n    position: absolute;\n    z-index:5;\n    bottom: -3px;\n    left: 8px;\n    background-color: #fce2d3;\n    border-radius: 10px 10px 0 0;\n    box-shadow: 34px 0  0 #fce2d3;\n}\n@keyframes tail {\n    0%{\n        transform: rotate(-47deg)\n    }\n    100%{\n        transform: rotate(-57deg)\n    }\n}\n.dog-tail{\n    width: 10px;\n    height: 50px;\n    position: absolute;\n    top: 120px;\n    left:calc(50% - 45px);\n    transform:rotate(-47deg);\n    background-color: #ecc093;\n    border-radius: 10px 0 0px / 50px 0 0 0px;\n    animation: tail .08s infinite alternate;\n}\n@keyframes balls {\n    0%{\n        transform: rotate(0);\n        transform: translateX(0)\n    }\n    40%{\n        transform: rotate(30px);\n        transform: translateX(30px)\n    }\n    50%{\n        transform: rotate(60px);\n        transform: translateX(40px)\n    }\n\n    70%{\n        transform: rotate(60px);\n        transform: translate(30px);\n    }\n    80%{\n        transform: rotate(10px);\n        transform: translate(10px);\n    }\n    100%{\n        transform: rotate(0);\n        transform: translate(0)\n    }\n}\n.ball{\n    width: 30px;\n    height: 30px;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    border-radius: 50%;\n    background-color: red;\n    animation: balls 650ms linear infinite; \n    border: 1px solid #000;\n}\n</style>\n";
var time = 300;
var n = 1;
var id;
var player = {
  events: {
    '#btnSpend': 'purge',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  init: function init() {
    //   html.innerText = str.substr(0,n)
    //   style.innerHTML = str.substr(0,n)  
    player.play();
    player.demoPlay();
  },
  run: function run() {
    n += 1;

    if (n > str.length) {
      window.clearInterval(id);
      return;
    }

    html.innerText = str.substr(0, n);
    style.innerHTML = str.substr(0, n);
    html.scrollTop = html.scrollHeight;
  },
  demoPlay: function demoPlay() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  play: function play() {
    console.log(1);
    id = setInterval(player.run, time);
  },
  purge: function purge() {
    window.clearInterval(id);
  },
  slow: function slow() {
    player.purge();
    time = 300;
    player.play();
  },
  normal: function normal() {
    player.purge();
    time = 100;
    player.play();
  },
  fast: function fast() {
    player.purge();
    time = 0;
    player.play();
  }
};
player.init();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.8c90e999.js.map