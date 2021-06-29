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
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var str = "\n<style>\n*{\n    padding:0;\n    margin:0;\n    box-sizing: border-box;\n}\nbody,html{\n    width:100%;\n    height: 100%;\n    background-color: #fee2d2;\n}\n\n.wrapper .dog{\n    width:180px;\n    height:186px;\n    position: relative;\n}\n@keyframes head{\n    0%{\n        transform: rotate(0deg)\n    }\n    30%{\n        transform: rotate(0deg)\n    }\n    40%{\n        transform: rotate(-20deg)\n    }\n    80%{\n        transform: rotate(-20deg);\n    }\n    90%{\n        transform: rotate(0deg)\n    }\n    100%{\n        transform: rotate(0deg)\n    }\n}\n\n.dog .dog-head{\n    /* border: 1px solid red; */\n    width:100px;\n    height:90px;\n    position: absolute;\n    top: 30px;\n    z-index:5;\n    left: calc(50% - 50px);\n    background-color: #efc092;\n    border-radius:50%;\n    animation: head 6s linear infinite;\n} \n.dog-head::before,\n.dog-head::after{\n    content:'';\n    width:79px;\n    height:50px;\n    position:absolute;\n    top:44px;\n    z-index:5;\n    background-color: red;\n    border-radius: 50%;\n}\n.dog-head::before{\n    left: -7px;\n    transform: rotate(50deg);\n}\n.dog-head::after{\n    right: -7px;\n    transform: rotate(-46deg);\n}\n.dog-ears{\n    width: 80px;\n    height: 50px;\n    position: absolute;\n    z-index:0;\n    top: -2px;\n    border-radius: 150px 0 150px 0;\n    background-color: #efc092;\n}\n.dog-ears::after{\n    content: '';\n    width: 50px;\n    height: 30px;\n    position: absolute;\n    z-index:0;\n    top: 8px;\n    left: 20px;\n    border-radius: 150px 0 150px 0;\n    transform: rotate(-176deg);\n    background-color: #fee2d2;\n}\n .ears-left{\n    left: -22px;\n    transform: rotate(-105deg);\n}\n.ears-right{\n    left: 44px;\n    transform: rotate( -22deg);\n}\n\n\n.dog-mouth{\n    width:60px;\n    height:35px;\n    background-color: #fee2d2;\n    position:absolute;\n    bottom:-15px;\n    left: 20px;\n    z-index:10;\n    border-radius:50%;\n}\n.dog-mouth::after{\n    content:'';\n    width:10px;\n    height: 40px;\n    background-color:#fee2d2;\n    position:absolute;\n    bottom:30px;\n    left: 24px;\n    z-index:10;\n    border-radius: 20px;\n}\n.dog-mouth .dog-nose{\n    width:16px;\n    height:10px;\n    position: absolute;\n    top:8px;\n    left:calc(50% - 8px);\n    background-color: #000;\n    border-radius: 50%;\n}\n@keyframes tongue{\n    0%{\n        height:10px;\n    }\n    30%{\n        height: 10px;\n    }\n    40%{\n        height:20px;\n    }\n    60%{\n        height:10px;\n    }\n    80%{\n        height: 20px;\n    }\n    90%{\n        height: 10px;\n    }\n    100%{\n        height: 10px;\n    }\n}\n.dog-mouth .dog-tongue{\n    width:20px;\n    height: 10px;\n    position:absolute;\n    top:24px;\n    left: calc(50% - 10px);\n    background-color:#f4a4ad;\n    border-radius: 0 0 10px 10px;\n    animation: tongue 4s linear infinite;\n}\n.dog-eyes{\n    /* border: 1px solid red; */\n    width: 10px;\n    height: 16px;\n    background-color: #000;\n    position: absolute;\n    top: 52px;\n    left: 28px;\n    border-radius: 50%;\n    z-index: 10;\n    box-shadow: 33px 0 0 #000;\n}\n.dog-eyes::after{\n    content:'';\n    width: 92px;\n    height: 50px;\n    position: absolute;\n    top: -50px;\n    left: -24px;\n    background-color: #efc092;\n    border-radius: 50%;\n\n}\n.dog-eyes::before{\n    content:'';\n    width: 4px;\n    height: 6px;\n    border-radius: 50%;\n    position: absolute;\n    top:2px;\n    left:2px;\n    background-color: #fffeff;\n    box-shadow: 34px 0 0 #fffeff;\n}\n\n.dog-body{\n    width:  54px;\n    height: 60px;\n    position: absolute;\n    top:120px;\n    left: calc(50% - 35px);\n    background-color: #ef8d4e;\n    border-radius: 49px 0 0 20px;\n}\n.dog-body::before{\n    content:'';\n    width: 50px;\n    height: 60px;\n    position: absolute;\n    top: 3px ;\n    left: calc(50% - 17px);\n    background-color: #efbf8e;\n    border-radius: 100px 100px 0 0;\n}\n.dog-body::after{\n    content:'';\n    width: 15px;\n    height: 30px;\n    position: absolute;\n    top: 32px;\n    left: 28px;\n    background-color: #d58b4e;\n    border-radius: 100px 100px 0 0;\n}\n.dog-foot{\n    width: 20px;\n    height: 13px;\n    position: absolute;\n    z-index:5;\n    bottom: -3px;\n    left: 8px;\n    background-color: #fce2d3;\n    border-radius: 10px 10px 0 0;\n    box-shadow: 34px 0  0 #fce2d3;\n}\n@keyframes tail {\n    0%{\n        transform: rotate(-47deg)\n    }\n    100%{\n        transform: rotate(-57deg)\n    }\n}\n.dog-tail{\n    width: 10px;\n    height: 50px;\n    position: absolute;\n    top: 120px;\n    left:calc(50% - 45px);\n    transform:rotate(-47deg);\n    background-color: #ecc093;\n    border-radius: 10px 0 0px / 50px 0 0 0px;\n    animation: tail .08s infinite alternate;\n}\n@keyframes balls {\n    0%{\n        transform: rotate(0);\n        transform: translateX(0)\n    }\n    40%{\n        transform: rotate(30px);\n        transform: translateX(30px)\n    }\n    50%{\n        transform: rotate(60px);\n        transform: translateX(40px)\n    }\n\n    70%{\n        transform: rotate(60px);\n        transform: translate(30px);\n    }\n    80%{\n        transform: rotate(10px);\n        transform: translate(10px);\n    }\n    100%{\n        transform: rotate(0);\n        transform: translate(0)\n    }\n}\n.ball{\n    width: 30px;\n    height: 30px;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    border-radius: 50%;\n    background-color: red;\n    animation: balls 650ms linear infinite; \n    border: 1px solid #000;\n}\n</style>\n";
var _default = str;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var html = document.querySelector('#html');
var style = document.querySelector('#style');
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

    if (n > _css.default.length) {
      window.clearInterval(id);
      return;
    }

    html.innerText = _css.default.substr(0, n);
    style.innerHTML = _css.default.substr(0, n);
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
},{"./css.js":"css.js"}],"../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59452" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map