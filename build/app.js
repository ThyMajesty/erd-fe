webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(73);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(74);
	
	var _app = __webpack_require__(85);
	
	document.body.addEventListener('DOMContentLoaded', function () {
	    angular.bootstrap(document.getElementById(_app.AppModule), [_app.AppModule], {
	        strictDi: true
	    });
	});

/***/ },
/* 74 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	exports.AppModule = undefined;
	
	var _app = __webpack_require__(86);
	
	var _app2 = __webpack_require__(92);
	
	var _app3 = __webpack_require__(93);
	
	var _common = __webpack_require__(94);
	
	var _auth = __webpack_require__(190);
	
	var _index = __webpack_require__(210);
	
	var AppModule = exports.AppModule = angular.module('erd', ['ui.router', 'ui.bootstrap', 'ui.bootstrap.tpls', 'ui.select', 'ngStorage', 'angular-loading-bar', 'ngAnimate', 'angular-media-preview', 'ngFileUpload',
	//'ui.router.components',
	//'angular-sanitize',
	
	_common.CommonModule, _auth.AuthModule, _index.IndexModule]).config(_app2.AppConfig).constant('API', _app3.API).component('app', _app.AppComponent).name;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AppComponent = undefined;
	
	var _app = __webpack_require__(87);
	
	var _appTemplate = __webpack_require__(89);
	
	var _appTemplate2 = _interopRequireDefault(_appTemplate);
	
	var _appStyles = __webpack_require__(90);
	
	var _appStyles2 = _interopRequireDefault(_appStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var AppComponent = exports.AppComponent = {
	    template: _appTemplate2.default,
	    controller: _app.AppController
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AppController = undefined;
	
	var _classCallCheck2 = __webpack_require__(88);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var AppController = exports.AppController = function AppController() {
	    (0, _classCallCheck3.default)(this, AppController);
	};

/***/ },
/* 88 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = "<ui-view/>\r\n"

/***/ },
/* 90 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 91 */,
/* 92 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AppConfig = AppConfig;
	function AppConfig($stateProvider, $urlRouterProvider, $httpProvider, cfpLoadingBarProvider, $sceProvider, $locationProvider) {
	
	    $locationProvider.html5Mode({
	        enabled: true,
	        requireBase: false
	    });
	
	    console.log($locationProvider);
	
	    $sceProvider.enabled(false);
	
	    $urlRouterProvider.otherwise('/');
	
	    $stateProvider.state('app', {
	        abstract: true,
	        template: '<ui-view/>'
	    }).state('app.auth', {
	        url: '/auth',
	        component: 'auth'
	    }).state('app.social', {
	        params: { token: null },
	        url: '/social?token',
	        template: '<div></div>',
	        controller: function controller($stateParams, $state, TokenApi) {
	            TokenApi.tokenVerify({ token: $stateParams.token }).then(function (response) {
	                $state.go('app.index.dashboard');
	            });
	        }
	    }).state('app.index', {
	        abstract: true,
	        component: 'index',
	        resolve: {
	            userData: function userData(UserApi) {
	                return UserApi.getUser();
	            }
	        }
	    }).state('app.index.dashboard', {
	        url: '/',
	        component: 'dashboard'
	    }).state('app.index.edit', {
	        params: { base: null },
	        url: '/edit/:baseId',
	        component: 'editBase'
	    }).state('app.index.create', {
	        reload: false,
	        params: { base: null, baseId: null },
	        url: '/create',
	        component: 'editBase'
	    }).state('app.index.memorise', {
	        params: { base: null },
	        url: '/memorize/:baseId',
	        component: 'memorise'
	    }).state('app.index.user', {
	        url: '/user/',
	        component: 'userPage'
	    });
	
	    cfpLoadingBarProvider.includeSpinner = true;
	    cfpLoadingBarProvider.includeBar = true;
	
	    $httpProvider.interceptors.push(function ($q, $location, $localStorage, $state) {
	        var statuses = {
	            auth: [401, 403]
	        };
	        return {
	            'request': function request(config) {
	                config.headers = config.headers || {};
	                var token = $localStorage.token;
	                if (token) {
	                    config.headers.Authorization = 'jwt ' + token;
	                } else {
	                    $state.go('app.auth');
	                }
	                return config;
	            },
	
	            'requestError': function requestError(rejection) {
	                return $q.reject(rejection);
	            },
	
	            'response': function response(_response) {
	                console.log(_response);
	                if (statuses.auth.indexOf(_response.status) > -1) {
	                    $state.go('app.auth');
	                    return $q.reject(_response);
	                }
	                return _response;
	            },
	
	            'responseError': function responseError(response) {
	                if (statuses.auth.indexOf(response.status) > -1) {
	                    $state.go('app.auth');
	                    return $q.reject(response);
	                }
	                return response || $q.when(response);
	            }
	        };
	    });
	}

/***/ },
/* 93 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var domain = "../v1/";
	
	var baseUri = document.body.baseURI;
	console.log(baseUri, domain);
	console.log(location.host);
	console.log(location.hostname);
	
	var API = {
	    AUTH: domain + "api/token-auth/",
	    tokenRefresh: domain + "api/token-refresh/",
	    tokenVerify: domain + "api/token-verify/",
	    SIGNUP: domain + "reg/",
	    GOOGLE_OAUTH: domain + "login/google-oauth2/",
	    USER: domain + "api/me/",
	    knowlagedb: domain + "api/knowlagedb/",
	    testdb: domain + "api/knowlagedb/",
	    instance: domain + "api/instance/",
	    pack: domain + "api/pack/",
	    person: domain + "api/person/",
	    connection: domain + "api/connection/",
	    generateEntity: domain + "api/askfor/",
	    fileUpload: domain + "upload/",
	    filesUpload: domain + "uploads/",
	    fileGet: domain + "media/"
	};
	
	exports.API = API;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	exports.CommonModule = undefined;
	
	var _api = __webpack_require__(95);
	
	var _modals = __webpack_require__(123);
	
	var _formGroupValidation = __webpack_require__(138);
	
	var _mindMapEditor = __webpack_require__(140);
	
	var _mediaFileView = __webpack_require__(175);
	
	var _questionnaire = __webpack_require__(182);
	
	var _filters = __webpack_require__(188);
	
	var CommonModule = exports.CommonModule = angular.module('erd.common', [_api.ApiModule, _formGroupValidation.FormGroupValidationModule, _mindMapEditor.MindMapEditorModule, _modals.ModalsModule, _mediaFileView.MediaFileViewModule, _questionnaire.QuestionnaireModule, _filters.FiltersModule]).name; //common.module.js

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ApiModule = undefined;
	
	var _authApi = __webpack_require__(96);
	
	var _userApi = __webpack_require__(116);
	
	var _baseApi = __webpack_require__(117);
	
	var _instanceApi = __webpack_require__(120);
	
	var _connectionApi = __webpack_require__(121);
	
	var _tokenApi = __webpack_require__(122);
	
	var ApiModule = exports.ApiModule = angular.module('erd.common.api', []).service('AuthApi', _authApi.AuthApi).service('UserApi', _userApi.UserApi).service('BaseApi', _baseApi.BaseApi).service('ConnectionApi', _connectionApi.ConnectionApi).service('InstanceApi', _instanceApi.InstanceApi).service('TokenApi', _tokenApi.TokenApi).name;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AuthApi = undefined;
	
	var _classCallCheck2 = __webpack_require__(88);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(97);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//auth-api.service.js
	var AuthApi = exports.AuthApi = function () {
	    function AuthApi($http, API, $localStorage, $state, $q) {
	        (0, _classCallCheck3.default)(this, AuthApi);
	
	        this.$http = $http;
	        this.API = API;
	        this.$storage = $localStorage;
	        this.$state = $state;
	        this.$q = $q;
	    }
	
	    (0, _createClass3.default)(AuthApi, [{
	        key: 'login',
	        value: function login(input) {
	            var _this = this;
	
	            var username = input.username,
	                password = input.password;
	
	            return this.$http.post(this.API.AUTH, { username: username, password: password }).then(function (response) {
	                if (response.status == 400) {
	                    return _this.$q.reject(response);
	                }
	                _this.$storage.token = response.data.token;
	
	                if (input.rememberMe) {
	                    _this.$storage.username = username;
	                    _this.$storage.password = password;
	                }
	                _this.$state.go('app.index.dashboard');
	                return response;
	            });
	        }
	    }, {
	        key: 'signup',
	        value: function signup(input) {
	            var _this2 = this;
	
	            var username = input.username,
	                email = input.email,
	                password = input.password,
	                confirmPassword = input.confirmPassword;
	
	            return this.$http.post(this.API.SIGNUP, { username: username, email: email, password: password, confirmPassword: confirmPassword }).then(function (response) {
	                if (response.data.msg && response.data.msg.match(/.*UNIQUE constraint failed.*/g)) {
	                    return _this2.$q.reject(response);
	                }
	                _this2.$storage.token = response.data.token;
	                _this2.$state.go('app.index.dashboard');
	                return response;
	            });
	        }
	    }, {
	        key: 'getSocialUrls',
	        value: function getSocialUrls() {
	            return this.$http.get(this.API.SIGNUP).then(function (response) {
	                return response;
	            });
	        }
	    }]);
	    return AuthApi;
	}();

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(98);
	
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
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(99), __esModule: true };

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(100);
	var $Object = __webpack_require__(103).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(101);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(111), 'Object', {defineProperty: __webpack_require__(107).f});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(102)
	  , core      = __webpack_require__(103)
	  , ctx       = __webpack_require__(104)
	  , hide      = __webpack_require__(106)
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
/* 102 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 103 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(105);
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
/* 105 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(107)
	  , createDesc = __webpack_require__(115);
	module.exports = __webpack_require__(111) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(108)
	  , IE8_DOM_DEFINE = __webpack_require__(110)
	  , toPrimitive    = __webpack_require__(114)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(111) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(109);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(111) && !__webpack_require__(112)(function(){
	  return Object.defineProperty(__webpack_require__(113)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(112)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(109)
	  , document = __webpack_require__(102).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(109);
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
/* 115 */
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
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.UserApi = undefined;
	
	var _classCallCheck2 = __webpack_require__(88);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(97);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//user-api.service.js
	var UserApi = exports.UserApi = function () {
	    function UserApi($http, API, $localStorage, $state) {
	        (0, _classCallCheck3.default)(this, UserApi);
	
	        this.$http = $http;
	        this.API = API;
	        this.$storage = $localStorage;
	        this.$state = $state;
	    }
	
	    (0, _createClass3.default)(UserApi, [{
	        key: "getUser",
	        value: function getUser(userId) {
	            var _this = this;
	
	            return this.$http.get(this.API.USER).then(function (response) {
	                //console.log(response);
	                _this.$storage.user = response.data;
	                return response.data;
	            });
	        }
	    }, {
	        key: "setUser",
	        value: function setUser(data) {
	            return this.$http.post(this.API.USER, data).then(function (response) {
	                //console.log(response);
	                return response.data;
	            });
	        }
	    }]);
	    return UserApi;
	}();

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.BaseApi = undefined;
	
	var _stringify = __webpack_require__(118);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _classCallCheck2 = __webpack_require__(88);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(97);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//base-api.service.js
	var BaseApi = exports.BaseApi = function () {
	    function BaseApi($http, API) {
	        (0, _classCallCheck3.default)(this, BaseApi);
	
	        this.$http = $http;
	        this.API = API;
	    }
	
	    (0, _createClass3.default)(BaseApi, [{
	        key: 'getBasesList',
	        value: function getBasesList() {
	            return this.$http.get(this.API.knowlagedb).then(function (response) {
	
	                return response;
	            });
	        }
	    }, {
	        key: 'deleteBase',
	        value: function deleteBase(pk) {
	            return this.$http.delete(this.API.knowlagedb + pk + '/').then(function (response) {
	                return response;
	            });
	        }
	    }, {
	        key: 'createBase',
	        value: function createBase(newBase) {
	            return this.$http.post(this.API.knowlagedb, newBase).then(function (response) {
	                return response.data;
	            });
	        }
	    }, {
	        key: 'editBase',
	        value: function editBase(pk, editedBase) {
	            return this.$http.put(this.API.testdb + pk + '/', (0, _stringify2.default)(editedBase, function (key, value) {
	                if (['x', 'y', 'parent', 'x0', 'y0', 'depth'].indexOf(key) > -1) {
	                    return undefined;
	                }
	                return value;
	            })).then(function (response) {
	                return response.data;
	            });
	        }
	    }, {
	        key: 'getBase',
	        value: function getBase(pk) {
	            return this.$http.get(this.API.testdb + pk + '/' + '?mindmap=' + pk);
	        }
	    }]);
	    return BaseApi;
	}();

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(119), __esModule: true };

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(103)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.InstanceApi = undefined;
	
	var _stringify = __webpack_require__(118);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _classCallCheck2 = __webpack_require__(88);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(97);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//instance-api.service.js
	var InstanceApi = exports.InstanceApi = function () {
	    function InstanceApi($http, API) {
	        (0, _classCallCheck3.default)(this, InstanceApi);
	
	        this.$http = $http;
	        this.API = API;
	    }
	
	    (0, _createClass3.default)(InstanceApi, [{
	        key: 'addInstance',
	        value: function addInstance(basePk, entity) {
	            return this.$http.post(this.API.instance /*+ '?mindmap=' + basePk*/, entity).then(function (response) {
	                console.log(response.data);
	                return response.data;
	            });
	        }
	    }, {
	        key: 'editInstance',
	        value: function editInstance(basePk, entity) {
	            return this.$http.put(this.API.instance + entity.id + '/' + '?mindmap=' + basePk, (0, _stringify2.default)(entity, function (key, value) {
	                if (['x', 'y', 'parent', 'x0', 'y0', 'depth'].indexOf(key) > -1) {
	                    return undefined;
	                }
	                return value;
	            })).then(function (response) {
	                console.log(response.data);
	                return response.data;
	            });
	        }
	    }, {
	        key: 'deleteInstance',
	        value: function deleteInstance(basePk, entity) {
	            console.log(basePk, entity);
	            return this.$http.delete(this.API.instance + entity.id + '/' + '?mindmap=' + basePk).then(function (response) {
	                console.log(response.data);
	                return response.data;
	            });
	        }
	    }]);
	    return InstanceApi;
	}();

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ConnectionApi = undefined;
	
	var _classCallCheck2 = __webpack_require__(88);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(97);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//connection-api.service.js
	var ConnectionApi = exports.ConnectionApi = function () {
	    function ConnectionApi($http, API) {
	        (0, _classCallCheck3.default)(this, ConnectionApi);
	
	        this.$http = $http;
	        this.API = API;
	    }
	
	    (0, _createClass3.default)(ConnectionApi, [{
	        key: 'getConnections',
	        value: function getConnections() {
	            var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	
	            console.log(this.API);
	            return this.$http.get(this.API.generateEntity + query + '/').then(function (response) {
	                return response.data.result;
	            });
	        }
	    }, {
	        key: 'getEntityByConnection',
	        value: function getEntityByConnection() {
	            var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	
	            return this.$http.get(this.API.generateEntity + query + '/').then(function (response) {
	                return response.data;
	                //return response;
	            });
	        }
	    }]);
	    return ConnectionApi;
	}();

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TokenApi = undefined;
	
	var _classCallCheck2 = __webpack_require__(88);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(97);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//token-api.service.js
	var TokenApi = exports.TokenApi = function () {
	    function TokenApi($http, API, $localStorage, $state, $q) {
	        (0, _classCallCheck3.default)(this, TokenApi);
	
	        this.$http = $http;
	        this.API = API;
	        this.$storage = $localStorage;
	        this.$state = $state;
	        this.$q = $q;
	    }
	
	    (0, _createClass3.default)(TokenApi, [{
	        key: 'tokenRefresh',
	        value: function tokenRefresh() {
	            var _this = this;
	
	            var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { token: this.$storage.token };
	
	            return this.$http.post(this.API.tokenRefresh, input).then(function (response) {
	                if (response.status !== 200) {
	                    _this.$state.go('app.auth.login');
	                    return _this.$q.reject(response);
	                }
	                _this.$storage.token = response.data.token;
	                return response;
	            });
	        }
	    }, {
	        key: 'tokenVerify',
	        value: function tokenVerify() {
	            var _this2 = this;
	
	            var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { token: this.$storage.token };
	
	            return this.$http.post(this.API.tokenVerify, input).then(function (response) {
	                if (response.status !== 200) {
	                    _this2.$state.go('app.auth.login');
	                    return _this2.$q.reject(response);
	                }
	                _this2.$storage.token = response.data.token;
	                return response;
	            });
	        }
	    }]);
	    return TokenApi;
	}();

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	exports.ModalsModule = undefined;
	
	var _addEditEntity = __webpack_require__(124);
	
	var _addEditBase = __webpack_require__(132);
	
	var ModalsModule = exports.ModalsModule = angular.module('erd.common.modals', [_addEditEntity.AddEditEntityModule, _addEditBase.AddEditBaseModule]).name;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AddEditEntityModule = undefined;
	
	var _addEditEntity = __webpack_require__(125);
	
	__webpack_require__(130);
	
	var AddEditEntityModule = exports.AddEditEntityModule = angular.module('erd.common.modals.add-edit-entity', []).factory('addEditEntityModal', _addEditEntity.AddEditEntityFactory).name;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AddEditEntityFactory = AddEditEntityFactory;
	
	var _addEditEntity = __webpack_require__(126);
	
	var _addEditEntityAddTemplate = __webpack_require__(127);
	
	var _addEditEntityAddTemplate2 = _interopRequireDefault(_addEditEntityAddTemplate);
	
	var _addEditEntityRemoveTemplate = __webpack_require__(128);
	
	var _addEditEntityRemoveTemplate2 = _interopRequireDefault(_addEditEntityRemoveTemplate);
	
	var _addEditEntityEditTemplate = __webpack_require__(129);
	
	var _addEditEntityEditTemplate2 = _interopRequireDefault(_addEditEntityEditTemplate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var tpls = {
	    add: _addEditEntityAddTemplate2.default,
	    remove: _addEditEntityRemoveTemplate2.default,
	    edit: _addEditEntityEditTemplate2.default
	};
	
	function AddEditEntityFactory($uibModal) {
	    return function (_config) {
	        return {
	            open: function open(_entity) {
	                var modalInstance = $uibModal.open({
	                    animation: true,
	                    template: tpls[_config.type],
	                    controller: _addEditEntity.AddEditEntityController,
	                    controllerAs: '$ctrl',
	                    resolve: {
	                        entity: function entity() {
	                            return _entity;
	                        },
	                        config: function config() {
	                            return _config;
	                        }
	                    }
	                });
	                return modalInstance.result /*.then((resolved) => {
	                                            return resolved;
	                                            }, (rejected) => {
	                                            return rejected;
	                                            })*/;
	            }
	        };
	    };
	}

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AddEditEntityController = undefined;
	
	var _classCallCheck2 = __webpack_require__(88);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(97);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var AddEditEntityController = exports.AddEditEntityController = function () {
	    function AddEditEntityController(config, entity, $uibModalInstance, ConnectionApi, InstanceApi) {
	        (0, _classCallCheck3.default)(this, AddEditEntityController);
	
	        this.$uibModalInstance = $uibModalInstance;
	        this.ConnectionApi = ConnectionApi;
	        this.InstanceApi = InstanceApi;
	        this.config = config;
	        this.entity = entity || {};
	        this.input = ['edit', 'remove'].indexOf(this.config.type) > -1 ? angular.copy(this.entity) : { value: {} };
	        this.fetchData();
	
	        this.inputType = {
	            auto: true,
	            manual: false
	        };
	    }
	
	    (0, _createClass3.default)(AddEditEntityController, [{
	        key: 'fetchData',
	        value: function fetchData() {
	            var _this = this;
	
	            this.ConnectionApi.getConnections(this.entity.value.name).then(function (response) {
	                _this.connections = response;
	            });
	        }
	    }, {
	        key: 'selectedConnection',
	        value: function selectedConnection($item) {
	            var _this2 = this;
	
	            if (!this.entity.value.name) {
	                return;
	            }
	            this.ConnectionApi.getEntityByConnection($item.name + '/' + this.entity.value.name).then(function (response) {
	                if (!response.result) {
	                    _this2.subConnections = [];
	                    _this2.inputType = {
	                        auto: false,
	                        manual: true
	                    };
	                    return;
	                }
	                _this2.subConnections = response.result;
	            });
	        }
	    }, {
	        key: 'selectedSubConnection',
	        value: function selectedSubConnection($item) {
	            if (!$item.name) {
	                return;
	            }
	            this.input.value.name = $item.name;
	            this.input.value.description = $item.description;
	        }
	    }, {
	        key: 'add',
	        value: function add() {
	            var _this3 = this;
	
	            this.entityForm.$setSubmitted();
	            if (this.entityForm.$invalid) {
	                return;
	            }
	            if (this.config.basePk) {
	                if (this.config.type === 'add') {
	                    this.input.parent_id = this.entity.id;
	                    this.InstanceApi.addInstance(this.config.basePk, this.input).then(function (response) {
	                        _this3.input.id = response.id;
	                        _this3.$uibModalInstance.close(_this3.input);
	                    });
	                }
	                if (this.config.type === 'edit') {
	                    this.InstanceApi.editInstance(this.config.basePk, this.input).then(function (response) {
	                        console.log(response, _this3.input);
	                        _this3.$uibModalInstance.close(_this3.input);
	                    });
	                }
	                if (this.config.type === 'remove') {
	                    this.InstanceApi.addInstance(this.config.basePk, this.input).then(function (response) {
	                        _this3.$uibModalInstance.close(_this3.input);
	                    });
	                }
	            }
	        }
	    }, {
	        key: 'confirm',
	        value: function confirm() {
	            var _this4 = this;
	
	            this.InstanceApi.deleteInstance(this.config.basePk, this.input).then(function (response) {
	                _this4.$uibModalInstance.close(_this4.input);
	            });
	        }
	    }, {
	        key: 'cancel',
	        value: function cancel() {
	            this.$uibModalInstance.dismiss('cancel');
	        }
	    }, {
	        key: 'refreshResults',
	        value: function refreshResults($select) {
	            var search = $select.search,
	                list = angular.copy($select.items),
	                FLAG = -1;
	            list = list.filter(function (item) {
	                return item.id !== FLAG;
	            });
	
	            if (!search) {
	                $select.items = list;
	            } else {
	                var userInputItem = {
	                    description: search
	                };
	                $select.items = [userInputItem].concat(list);
	                $select.selected = userInputItem;
	            }
	        }
	    }, {
	        key: 'clearSelection',
	        value: function clearSelection($event, $select) {
	            $event.stopPropagation();
	            $select.selected = undefined;
	            $select.search = undefined;
	            $select.activate();
	        }
	    }, {
	        key: 'filesChanged',
	        value: function filesChanged(files, b64) {
	            console.log('filesChanged', this.input.value, files, b64);
	            this.input.value.files = files || b64;
	        }
	    }]);
	    return AddEditEntityController;
	}();

/***/ },
/* 127 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal-content add-edit-entity\">\r\n    <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" ng-click=\"$ctrl.cancel()\" aria-hidden=\"true\">×</button>\r\n        <h4 class=\"modal-title\">Add new</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <form name=\"$ctrl.entityForm\" class=\"form-horizontal\">\r\n            <fieldset>\r\n                <div class=\"form-group\">\r\n                    <label for=\"connection\" class=\"col-lg-2 control-label\">Connection</label>\r\n                    <div class=\"col-lg-10\">\r\n                        <ui-select name=\"connection\" id=\"connection\" ng-model=\"$ctrl.input.connection\" theme=\"bootstrap\" ng-disabled=\"!$ctrl.connections\" on-select=\"$ctrl.selectedConnection($item, $model)\" reset-search-input=\"false\">\r\n                            <ui-select-match placeholder=\"Select or add connection\">\r\n                                <v ng-bind-html=\"$select.selected.name || $select.search\"></v>\r\n                                <i class=\"ui-remove btn btn-xs btn-link pull-right glyphicon glyphicon-remove\" ng-click=\"$ctrl.clearSelection($event, $select)\"></i>\r\n                            </ui-select-match>\r\n                            <ui-select-choices repeat=\"item in $ctrl.connections | filter: $select.search\" refresh=\"$ctrl.refreshResults($select)\" refresh-delay=\"0\">\r\n                                <div ng-bind-html=\"item.name | highlight: $select.search\"></div>\r\n                            </ui-select-choices>\r\n                        </ui-select>\r\n                    </div>\r\n                </div>\r\n                <span class=\"animate-show\" ng-show=\"$ctrl.input.connection && $ctrl.subConnections\">\r\n                    <fieldset  ng-if=\"$ctrl.subConnections.length > 0\">\r\n                        <legend >Select Autogenerated Info \r\n                            <i class=\"glyphicon pull-right\" \r\n                                ng-class=\"{'glyphicon-chevron-up': $ctrl.inputType.auto, 'glyphicon-chevron-down': !$ctrl.inputType.auto}\"\r\n                                ng-click=\"$ctrl.inputType.auto = !$ctrl.inputType.auto\"></i>\r\n                        </legend >\r\n                            <span class=\"autogenerated animate-show\" ng-show=\"$ctrl.inputType.auto\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"subconnection\" class=\"col-lg-2 control-label\">Entity&nbsp;Name</label>\r\n                                    <div class=\"col-lg-10\">\r\n                                        <ui-select name=\"subconnection\" id=\"subconnection\" ng-model=\"$ctrl.input.subconnection\" theme=\"bootstrap\" on-select=\"$ctrl.selectedSubConnection($item, $model)\" reset-search-input=\"false\">\r\n                                            <ui-select-match placeholder=\"Select Entity\">\r\n                                                <v ng-bind-html=\"$select.selected.name || $select.search\"></v>\r\n                                                <i class=\"ui-remove btn btn-xs btn-link pull-right glyphicon glyphicon-remove\" ng-click=\"$ctrl.clearSelection($event, $select)\"></i>\r\n                                            </ui-select-match>\r\n                                            <ui-select-choices repeat=\"item in $ctrl.subConnections | filter: $select.search\" refresh=\"$ctrl.refreshResults($select)\" refresh-delay=\"0\">\r\n                                                <div ng-bind-html=\"item.name | highlight: $select.search\"></div>\r\n                                            </ui-select-choices>\r\n                                        </ui-select>\r\n                                    </div>\r\n                                </div>\r\n                            </span>\r\n                    </fieldset>\r\n                    <fieldset >\r\n                        <legend >Manual input\r\n                            <i class=\"glyphicon pull-right\" \r\n                                ng-class=\"{'glyphicon-chevron-down': $ctrl.inputType.manual, 'glyphicon-chevron-up': !$ctrl.inputType.manual}\"\r\n                                ng-click=\"$ctrl.inputType.manual = !$ctrl.inputType.manual\"></i>\r\n                        </legend>\r\n                            <span class=\"manual animate-show\" ng-show=\"$ctrl.inputType.manual\">\r\n                                <div class=\"form-group\" form-group-validation>\r\n                                    <label for=\"name\" class=\"col-lg-2 control-label\">Name</label>\r\n                                    <div class=\"col-lg-10\">\r\n                                        <input type=\"text\" name=\"name\" placeholder=\"Name\" class=\"form-control\" id=\"name\" ng-model=\"$ctrl.input.value.name\" ng-disabled=\"$ctrl.input.subconnection\" ng-required=\"!$ctrl.input.subconnection\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\" form-group-validation>\r\n                                    <label for=\"description\" class=\"col-lg-2 control-label\">Description</label>\r\n                                    <div class=\"col-lg-10\">\r\n                                        <input type=\"text\" name=\"description\" placeholder=\"Description\" class=\"form-control\" id=\"description\" ng-model=\"$ctrl.input.value.description\" ng-disabled=\"$ctrl.input.subconnection\" ng-required=\"!$ctrl.input.subconnection\">\r\n                                    </div>\r\n                                </div>\r\n                            </span>\r\n                    </fieldset>\r\n                </span>\r\n            </fieldset>\r\n            <fieldset>\r\n                <legend >Attachments\r\n                    <i class=\"glyphicon pull-right\" \r\n                        ng-class=\"{'glyphicon-chevron-down': $ctrl.inputType.attachments, 'glyphicon-chevron-up': !$ctrl.inputType.attachments}\"\r\n                        ng-click=\"$ctrl.inputType.attachments = !$ctrl.inputType.attachments\"></i>\r\n                </legend>\r\n                <div class=\"animate-show\" ng-show=\"$ctrl.inputType.attachments\">\r\n                    <media-file-view \r\n                        on-change=\"$ctrl.filesChanged(files, b64)\" \r\n                        files=\"$ctrl.input.value.files\">\r\n                    </media-file-view>\r\n                </div>\r\n            </fieldset>\r\n        </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" ng-click=\"$ctrl.cancel()\">Cancel</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" ng-click=\"$ctrl.add()\">Add</button>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal-content add-edit-entity\">\r\n    <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" ng-click=\"$ctrl.cancel()\" aria-hidden=\"true\">×</button>\r\n        <h4 class=\"modal-title\">Remove</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        Do you realy want to delete {{$ctrl.entity.value.name}}?\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" ng-click=\"$ctrl.cancel()\">Cancel</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" ng-click=\"$ctrl.confirm()\">Confirm</button>\r\n    </div>\r\n</div>"

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal-content add-edit-entity\">\r\n    <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" ng-click=\"$ctrl.cancel()\" aria-hidden=\"true\">×</button>\r\n        <h4 class=\"modal-title\">Edit</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <form name=\"$ctrl.entityForm\" class=\"form-horizontal\">\r\n            <fieldset>\r\n                <div class=\"form-group\" form-group-validation>\r\n                    <label for=\"name\" class=\"col-lg-2 control-label\">Name</label>\r\n                    <div class=\"col-lg-10\">\r\n                        <input type=\"text\" name=\"name\" placeholder=\"Name\" class=\"form-control\" id=\"name\" ng-model=\"$ctrl.input.value.name\" ng-required=\"true\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\" form-group-validation>\r\n                    <label for=\"description\" class=\"col-lg-2 control-label\">Description</label>\r\n                    <div class=\"col-lg-10\">\r\n                        <input type=\"text\" name=\"description\" placeholder=\"Description\" class=\"form-control\" id=\"description\" ng-model=\"$ctrl.input.value.description\" ng-required=\"true\">\r\n                    </div>\r\n                </div>\r\n            </fieldset>\r\n            <fieldset>\r\n                <legend >Attachments\r\n                    <i class=\"glyphicon pull-right\" \r\n                        ng-class=\"{'glyphicon-chevron-down': $ctrl.inputType.attachments, 'glyphicon-chevron-up': !$ctrl.inputType.attachments}\"\r\n                        ng-click=\"$ctrl.inputType.attachments = !$ctrl.inputType.attachments\"></i>\r\n                </legend>\r\n                <div class=\"animate-show\" ng-show=\"$ctrl.inputType.attachments\">\r\n                    <media-file-view on-change=\"$ctrl.filesChanged(files, b64)\" files=\"$ctrl.input.value.files\"></media-file-view>\r\n                </div>\r\n            </fieldset>\r\n        </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" ng-click=\"$ctrl.cancel()\">Cancel</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" ng-click=\"$ctrl.add()\">Save</button>\r\n    </div>\r\n</div>"

/***/ },
/* 130 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 131 */,
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AddEditBaseModule = undefined;
	
	var _addEditBase = __webpack_require__(133);
	
	__webpack_require__(136);
	
	var AddEditBaseModule = exports.AddEditBaseModule = angular.module('erd.common.modals.add-edit-base', []).factory('addEditBaseModal', _addEditBase.AddEditBaseFactory).name;

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AddEditBaseFactory = AddEditBaseFactory;
	
	var _addEditBase = __webpack_require__(134);
	
	var _addEditBaseTemplate = __webpack_require__(135);
	
	var _addEditBaseTemplate2 = _interopRequireDefault(_addEditBaseTemplate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function AddEditBaseFactory($uibModal) {
	    return function (_config) {
	        return {
	            open: function open(_base) {
	                var modalInstance = $uibModal.open({
	                    animation: true,
	                    template: _addEditBaseTemplate2.default,
	                    controller: _addEditBase.AddEditBaseController,
	                    controllerAs: '$ctrl',
	                    resolve: {
	                        base: function base() {
	                            return _base;
	                        },
	                        config: function config() {
	                            return _config;
	                        }
	                    }
	                });
	                return modalInstance.result;
	            }
	        };
	    };
	}

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AddEditBaseController = undefined;
	
	var _classCallCheck2 = __webpack_require__(88);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(97);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var AddEditBaseController = exports.AddEditBaseController = function () {
	    function AddEditBaseController(config, base, $uibModalInstance, BaseApi) {
	        (0, _classCallCheck3.default)(this, AddEditBaseController);
	
	        this.$uibModalInstance = $uibModalInstance;
	        this.config = config;
	        this.base = base || {};
	        this.BaseApi = BaseApi;
	    }
	
	    (0, _createClass3.default)(AddEditBaseController, [{
	        key: 'add',
	        value: function add() {
	            var _this = this;
	
	            this.baseForm.$setSubmitted();
	            if (this.baseForm.$invalid) {
	                return;
	            }
	            if (!this.base.tree) {
	                this.base.tree = {
	                    value: angular.copy(this.base.value)
	                };
	            }
	            this.BaseApi.createBase(this.base).then(function (response) {
	                _this.$uibModalInstance.close(response);
	            });
	        }
	    }, {
	        key: 'confirm',
	        value: function confirm() {
	            this.$uibModalInstance.close('confirm');
	        }
	    }, {
	        key: 'cancel',
	        value: function cancel() {
	            this.$uibModalInstance.dismiss('cancel');
	        }
	    }]);
	    return AddEditBaseController;
	}();

/***/ },
/* 135 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal-content add-edit-base\">\r\n    <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" ng-click=\"$ctrl.cancel()\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\r\n        <h4 class=\"modal-title\">{{$ctrl.config.type !== 'delete' ? 'Add New Base' : 'Delete ' + $ctrl.base.value.name}}</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <form ng-if=\"$ctrl.config.type !== 'delete'\" name=\"$ctrl.baseForm\" class=\"form-horizontal\">\r\n            <fieldset>\r\n                <div class=\"form-group\" form-group-validation>\r\n                    <label for=\"name\" class=\"col-lg-2 control-label\">Name</label>\r\n                    <div class=\"col-lg-10\">\r\n                        <input type=\"text\" name=\"name\" placeholder=\"Name\" class=\"form-control\" id=\"name\" ng-model=\"$ctrl.base.value.name\" ng-required=\"true\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\" form-group-validation>\r\n                    <label for=\"description\" class=\"col-lg-2 control-label\">Description</label>\r\n                    <div class=\"col-lg-10\">\r\n                        <input type=\"text\" name=\"description\" placeholder=\"Description\" class=\"form-control\" id=\"description\" ng-model=\"$ctrl.base.value.description\" ng-required=\"true\">\r\n                    </div>\r\n                </div>\r\n            </fieldset>\r\n        </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" ng-click=\"$ctrl.cancel()\">Cancel</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" ng-click=\"$ctrl.config.type !== 'delete' ? $ctrl.add() : $ctrl.confirm()\">{{$ctrl.config.type !== 'delete' ? 'Add' : 'Delete'}}</button>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 136 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 137 */,
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.FormGroupValidationModule = undefined;
	
	var _formGroupValidation = __webpack_require__(139);
	
	var FormGroupValidationModule = exports.FormGroupValidationModule = angular.module('erd.common.form-group-validation', []).directive('formGroupValidation', _formGroupValidation.FormGroupValidationDirective).name; //form-group-validation.module.js

/***/ },
/* 139 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.FormGroupValidationDirective = FormGroupValidationDirective;
	//form-group-validation.directive.js
	function FormGroupValidationDirective() {
	    return {
	        restrict: 'A',
	        require: '^form',
	        link: link
	    };
	
	    function link(scope, element, attrs, formCtrl) {
	
	        var subject = (element.find('input')[0] || element.find('textarea')[0] || element.find('.ui-select-container')[0]).name;
	        var removeWatch = scope.$watch(function () {
	            return [formCtrl.$submitted, formCtrl[subject].$dirty, formCtrl[subject].$touched, formCtrl[subject].$invalid];
	        }, validate, true);
	
	        function validate() {
	            element.toggleClass('has-error', (formCtrl.$submitted || formCtrl[subject].$dirty || formCtrl[subject].$touched) && formCtrl[subject].$invalid);
	        }
	
	        scope.$on('$destroy', function () {
	            removeWatch();
	        });
	    }
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MindMapEditorModule = undefined;
	
	var _mindMapEditor = __webpack_require__(141);
	
	var MindMapEditorModule = exports.MindMapEditorModule = angular.module('erd.common.mind-map-editor', []).directive('mindMapEditor', _mindMapEditor.MindMapEditorDirective).name; //mind-map-editor.module.js

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MindMapEditorDirective = MindMapEditorDirective;
	
	var _mindMapEditorTemplate = __webpack_require__(142);
	
	var _mindMapEditorTemplate2 = _interopRequireDefault(_mindMapEditorTemplate);
	
	var _mindMapEditorStyles = __webpack_require__(143);
	
	var _mindMapEditorStyles2 = _interopRequireDefault(_mindMapEditorStyles);
	
	var _mindMapEditorTree = __webpack_require__(145);
	
	var _mindMapEditorTreemap = __webpack_require__(174);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function MindMapEditorDirective(addEditEntityModal, BaseApi) {
	    return {
	        restrict: 'E',
	        scope: {
	            base: '=',
	            type: '='
	        },
	        template: _mindMapEditorTemplate2.default,
	        link: link
	    };
	
	    function link(scope, element, attrs, ctrl) {
	
	        var mindMapElement = angular.element(element[0].getElementsByClassName("mindMap"))[0];
	        var dataApi = {
	            add: addEditEntityModal({ type: 'add', basePk: scope.base.id }).open,
	            edit: addEditEntityModal({ type: 'edit', basePk: scope.base.id }).open,
	            remove: addEditEntityModal({ type: 'remove', basePk: scope.base.id }).open
	        };
	        var mindMapEditor = {};
	        if (!scope.base.tree) {
	            scope.base.tree = {
	                name: scope.base.name,
	                description: scope.base.description
	            };
	        }
	        function changedTreeData(treeData) {
	            scope.base.tree = treeData;
	        }
	
	        if (scope.type == 'tree') {
	            mindMapEditor = new _mindMapEditorTree.MindMapEditorTreeLogic(mindMapElement); //mindMapElement, treeData, settings
	            scope.treeData = mindMapEditor.setTreeData(scope.base.tree);
	            mindMapEditor.onChange(changedTreeData);
	            mindMapEditor.setDataApi(dataApi);
	        }
	        if (scope.type == 'treemap') {
	            mindMapEditor = new _mindMapEditorTreemap.MindMapEditorTreeMapLogic(mindMapElement, angular.copy(scope.base.tree)); //mindMapElement, treeData, settings
	        }
	
	        //console.log(scope.base.tree)
	
	
	        scope.export = function (format, scale) {
	            format = format || 'png';
	            scale = scale || 20;
	            mindMapEditor.export(format, scale);
	        };
	
	        /*scope.export = function(){
	            var svg = document.querySelector( "svg" );
	            var svgData = new XMLSerializer().serializeToString( svg );
	              var canvas = document.createElement( "canvas" );
	            var ctx = canvas.getContext( "2d" );
	              var img = document.createElement( "img" );
	            img.setAttribute( "src", "data:image/svg+xml;base64," + btoa( svgData ) );
	              img.onload = function() {
	                ctx.drawImage( img, 0, 0 );
	                
	                // Now is done
	                console.log( canvas.toDataURL( "image/png" ) );
	            };
	        }*/
	    }
	};

/***/ },
/* 142 */
/***/ function(module, exports) {

	module.exports = "<div ng-if class=\"menu\">\r\n    <div class=\"btn btn-default\" ng-click=\"new()\">New</div>\r\n    <div class=\"btn btn-default loadFile\">\r\n        <span>Load File</span>\r\n        <input id=\"uploadFile\" name=\"uploadFile\" type=\"file\" change-file=\"load\">\r\n    </div>\r\n    <div class=\"downloadWrap\">\r\n        <input class=\"fileName\" type=\"text\" ng-model=\"fileName\">\r\n        <div class=\"btn btn-default\" ng-click=\"save()\">Save</div>\r\n        <div id=\"downloadLinkWrap\"></div>\r\n    </div>\r\n</div>\r\n<div class=\"btn-group pull-right\">\r\n    <div class=\"btn-group\" ng-class=\"dropDown\">\r\n        <a class=\"btn btn-default dropdown-toggle\" ng-click=\"dropDown = dropDown ? '' : 'open'\">\r\n                Export As\r\n                <span class=\"caret\"></span>\r\n              </a>\r\n        <ul class=\"dropdown-menu\">\r\n            <li><a class=\"btm btn-default \" ng-click=\"export('png')\">PNG</a></li>\r\n            <li><a class=\"btm btn-default \" ng-click=\"export('jpg')\">JPG</a></li>\r\n            <li><a class=\"btm btn-default \" ng-click=\"export('pdf')\">PDF</a></li>\r\n            <li><a class=\"btm btn-default\" ng-click=\"export('svg')\">SVG</a></li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<div class=\"mindMap\"></div>\r\n"

/***/ },
/* 143 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 144 */,
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3, saveAs, saveSvgAsPng, jsPDF) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MindMapEditorTreeLogic = undefined;
	
	var _assign = __webpack_require__(152);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _classCallCheck2 = __webpack_require__(88);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(97);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//import d3 from './mind-map-editor.d3-layout';
	var style = "\n        .svg-container {\n            display: inline-block;\n            position: relative;\n            width: 100%;\n            padding-bottom: 70vh; /* aspect ratio */\n            vertical-align: top;\n            overflow: hidden;\n        }\n        .svg-content-responsive {\n            display: inline-block;\n            position: absolute;\n        }\n    rect {\n        fill: none;\n        pointer-events: all;\n    }\n    line {\n        stroke: #000;\n        stroke-width: 1.5px;\n    }\n    .node circle {\n        fill: #fff;\n        stroke: steelblue;\n        stroke-width: 1.5px;\n    }\n    .node {\n        position: relative;\n        display: inline-block;\n        font: 10px sans-serif;\n    }\n    .link {\n        fill: none;\n        stroke: #ccc;\n        stroke-width: 1.5px;\n    }\n    .function-btn {\n        opacity: 0;\n        -webkit-transition: all 0.5s ease;\n        -moz-transition: all 0.5s ease;\n        transition: all 0.5s ease;\n    }\n    .function-btn.add {\n        fill: #57D37E;\n    }\n    .function-btn.remove {\n        fill: #E97979;\n    }\n    .function-btn.edit {\n        fill: #79AFE9;\n    }\n    g:hover > .function-btn {\n        opacity: 1;\n    }\n    .function-bg {\n        cursor: pointer;\n    }\n            ";
	
	var MindMapEditorTreeLogic = exports.MindMapEditorTreeLogic = function () {
	    function MindMapEditorTreeLogic(mindMapElement, treeData, settings) {
	        var _this = this;
	
	        (0, _classCallCheck3.default)(this, MindMapEditorTreeLogic);
	
	        this.mindMapElement = mindMapElement;
	        this.width = mindMapElement.clientWidth - 120, this.height = mindMapElement.clientHeight - 60;
	
	        this.treeData = treeData || {};
	        this.tree = d3.layout.tree().size([this.height, this.width]);
	
	        this.diagonal = d3.svg.diagonal().projection(function (d) {
	            return [d.y, d.x];
	        });
	
	        this.zoom = d3.behavior.zoom().scaleExtent([1, 10]).on("zoom", function () {
	            _this.main.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")");
	        });
	
	        this.editorContainer = d3.select(this.mindMapElement);
	        this.editorSvg = this.editorContainer.append("div").classed("svg-container", true).append("svg:svg").attr("width", "100% ").attr("height", "100% ")
	        //.attr("viewBox", "0 0 " + this.width + ' ' + this.height)
	        .classed("svg-content-responsive", true).call(this.zoom);
	        /*.attr("width", this.width + 120)
	        .attr("height", this.height + 60);*/
	
	        this.editorSvg.append('style').html(style);
	
	        this.main = this.editorSvg.append("svg:g").attr("width", "100% ").attr("height", "100% ").classed('main', true);
	        //.attr("transform", "translate(" + 80 + "," + 20 + ")");
	
	
	        this.nodesData = this.main.append("svg:g").attr("width", "100% ").attr("height", "100% ").attr("transform", "translate(" + 80 + "," + 20 + ")");
	
	        this.settings = settings || {
	            duration: 500
	        };
	
	        window.addEventListener("resize", function () {
	            _this.width = _this.editorSvg.style("width").split('px')[0] - 120, _this.height = _this.editorSvg.style("height").split('px')[0] - 60;
	            _this.tree = d3.layout.tree().size([_this.height, _this.width]);
	            _this.update(_this.tree);
	        });
	
	        this.onChangeCallback = function () {};
	    }
	
	    (0, _createClass3.default)(MindMapEditorTreeLogic, [{
	        key: "export",
	        value: function _export(format, scale) {
	            var _this2 = this;
	
	            var resize = function resize(n) {
	                var cp = d3.select(_this2.editorSvg.node().cloneNode(true)),
	                    width = _this2.width,
	                    height = _this2.height,
	                    m = cp.select('g.main').attr('scale', '(' + n + ')');
	                cp.attr("width", width).attr("height", height).style("width", width + 'px').style("height", height + 'px');
	                return { cp: cp, width: width, height: height };
	            };
	            var save = function save(dataBlob, filesize) {
	                saveAs.saveAs(dataBlob, _this2.treeData.name + '.' + format); // FileSaver.js function
	            };
	
	            if (format == 'svg') {
	                try {
	                    var isFileSaverSupported = !!new Blob();
	                } catch (e) {
	                    alert("blob not supported");
	                }
	
	                var html = this.editorSvg.attr("title", this.treeData.name).attr("version", 1.0).attr("xmlns", "http://www.w3.org/2000/svg").node().parentNode.innerHTML;
	
	                var blob = new Blob([html], { type: "image/svg+xml" });
	                saveAs.saveAs(blob, this.treeData.name + '.' + format);
	            } else if (format == 'pdf') {
	                svg_to_pdf(resize(scale).cp.node(), function (pdf) {
	                    download_pdf(_this2.treeData.name + +'.pdf', pdf.output('dataurlstring'));
	                });
	            } else {
	                var svgString = getSVGString(resize(scale).cp.node(), this.width, this.height, 8);
	                svgString2Image(svgString, 2 * this.width, 2 * this.height, format, save); // passes Blob and filesize String to the callback
	            }
	
	            function getSVGString(svgNode) {
	                svgNode.setAttribute('xlink', 'http://www.w3.org/1999/xlink');
	                var cssStyleText = getCSSStyles(svgNode);
	
	                appendCSS(cssStyleText, svgNode);
	
	                var serializer = new XMLSerializer();
	                var svgString = serializer.serializeToString(svgNode);
	                svgString = svgString.replace(/(\w+)?:?xlink=/g, 'xmlns:xlink='); // Fix root xlink without namespace
	                svgString = svgString.replace(/NS\d+:href/g, 'xlink:href'); // Safari NS namespace fix
	
	                return svgString;
	
	                function getCSSStyles(parentElement) {
	                    var selectorTextArr = [];
	
	                    // Add Parent element Id and Classes to the list
	                    selectorTextArr.push('#' + parentElement.id);
	                    for (var c = 0; c < parentElement.classList.length; c++) {
	                        if (!contains('.' + parentElement.classList[c], selectorTextArr)) selectorTextArr.push('.' + parentElement.classList[c]);
	                    } // Add Children element Ids and Classes to the list
	                    var nodes = parentElement.getElementsByTagName("*");
	                    for (var i = 0; i < nodes.length; i++) {
	                        var id = nodes[i].id;
	                        if (!contains('#' + id, selectorTextArr)) selectorTextArr.push('#' + id);
	
	                        var classes = nodes[i].classList;
	                        for (var c = 0; c < classes.length; c++) {
	                            if (!contains('.' + classes[c], selectorTextArr)) selectorTextArr.push('.' + classes[c]);
	                        }
	                    }
	
	                    // Extract CSS Rules
	                    var extractedCSSText = "";
	                    for (var i = 0; i < document.styleSheets.length; i++) {
	                        var s = document.styleSheets[i];
	
	                        try {
	                            if (!s.cssRules) continue;
	                        } catch (e) {
	                            if (e.name !== 'SecurityError') throw e; // for Firefox
	                            continue;
	                        }
	
	                        var cssRules = s.cssRules;
	                        for (var r = 0; r < cssRules.length; r++) {
	                            if (contains(cssRules[r].selectorText, selectorTextArr)) extractedCSSText += cssRules[r].cssText;
	                        }
	                    }
	                    return extractedCSSText;
	
	                    function contains(str, arr) {
	                        return arr.indexOf(str) === -1 ? false : true;
	                    }
	                }
	
	                function appendCSS(cssText, element) {
	                    var styleElement = document.createElement("style");
	                    styleElement.setAttribute("type", "text/css");
	                    styleElement.innerHTML = cssText;
	                    var refNode = element.hasChildNodes() ? element.children[0] : null;
	                    element.insertBefore(styleElement, refNode);
	                }
	            }
	
	            function svgString2Image(svgString, width, height, format, callback) {
	                var format = format ? format : 'png';
	                var imgsrc = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgString))); // Convert SVG string to dataurl
	
	                var canvas = document.createElement("canvas");
	                var context = canvas.getContext("2d");
	
	                canvas.width = width;
	                canvas.height = height;
	                //document.body.append(canvas);
	
	                var image = new Image();
	                image.onload = function () {
	                    context.clearRect(0, 0, width, height);
	                    context.drawImage(image, 0, 0, width, height);
	
	                    canvas.toBlob(function (blob) {
	                        var filesize = Math.round(blob.length / 1024) + ' KB';
	                        if (callback) callback(blob, filesize);
	                    });
	                };
	
	                image.src = imgsrc;
	            }
	
	            function svg_to_pdf(svg, callback) {
	                saveSvgAsPng.svgAsDataUri(svg, {}, function (svg_uri) {
	                    var image = document.createElement('img');
	
	                    image.src = svg_uri;
	                    image.onload = function () {
	                        var canvas = document.createElement('canvas');
	                        var context = canvas.getContext('2d');
	                        var doc = new jsPDF('portrait', 'pt');
	                        var dataUrl;
	
	                        canvas.width = image.height + image.width;
	                        canvas.height = image.height + image.width;
	                        if (image.height < image.width) {
	                            context.rotate(90 * Math.PI / 180);
	                        }
	
	                        //context.translate(canvas.width/2,canvas.height/2);
	                        //context.rotate((90)*Math.PI/180);
	                        //context.drawImage(image,-image.width/2,-image.width/2);
	                        context.drawImage(image, 0, 0, image.width, image.height);
	                        dataUrl = canvas.toDataURL('image/png');
	                        doc.addImage(dataUrl, 'PNG', 0, 0, image.width, image.height);
	
	                        callback(doc);
	                    };
	                });
	            }
	
	            function download_pdf(name, dataUriString) {
	                var link = document.createElement('a');
	                link.addEventListener('click', function (ev) {
	                    link.href = dataUriString;
	                    link.download = name;
	                    document.body.removeChild(link);
	                }, false);
	                document.body.appendChild(link);
	                link.click();
	            }
	        }
	    }, {
	        key: "onChange",
	        value: function onChange(cb) {
	            this.onChangeCallback = cb;
	        }
	    }, {
	        key: "setDataApi",
	        value: function setDataApi(dataApi) {
	            this.dataApi = dataApi;
	        }
	    }, {
	        key: "setTreeData",
	        value: function setTreeData(treeData) {
	            this.treeData = treeData || this.treeData;
	            this.treeData.x0 = this.height / 2;
	            this.treeData.y0 = 0;
	            this.update(this.treeData, true);
	            return this.treeData;
	        }
	    }, {
	        key: "getTreeData",
	        value: function getTreeData() {
	            return this.treeData;
	        }
	    }, {
	        key: "toggleChildren",
	        value: function toggleChildren(d) {
	            if (d.children) {
	                d._children = d.children;
	                d.children = null;
	            } else {
	                d.children = d._children;
	                d._children = null;
	            }
	        }
	    }, {
	        key: "toggleChildrenAll",
	        value: function (_toggleChildrenAll) {
	            function toggleChildrenAll(_x) {
	                return _toggleChildrenAll.apply(this, arguments);
	            }
	
	            toggleChildrenAll.toString = function () {
	                return _toggleChildrenAll.toString();
	            };
	
	            return toggleChildrenAll;
	        }(function (d) {
	            if (d.children) {
	                d.children.forEach(toggleChildrenAll);
	                this.toggleChildren(d);
	            }
	        })
	    }, {
	        key: "update",
	        value: function update(source, flag) {
	            var _this3 = this;
	
	            if (!(source != null)) {
	                return;
	            }
	
	            // Compute the new tree layout.
	            var nodes = this.tree.nodes(this.treeData).reverse();
	
	            // Normalize for fixed-depth.             
	            var deepest = 0,
	                generationGutter = this.width;
	
	            nodes.forEach(function (d) {
	                if (deepest < d.depth) {
	                    deepest = d.depth;
	                }
	            });
	            generationGutter = Math.floor(this.width / (deepest + 1));
	            nodes.forEach(function (d) {
	                d.y = d.depth * generationGutter;
	            });
	
	            // Update the nodes…
	            var node = this.nodesData.selectAll("g.node").data(nodes, function (d) {
	                return d.id || (d.id = new Date().getTime());
	            });
	
	            // Enter any new nodes at the parent's previous position.
	            var nodeEnter = node.enter().append("svg:g").attr("class", "node").attr("transform", function (d) {
	                return "translate(" + source.y0 + "," + source.x0 + ")";
	            });
	
	            //inject content to node
	            this.InjectNodeContent(nodeEnter);
	
	            // Transition nodes to their new position.
	            var nodeUpdate = node.transition().duration(this.settings.duration).attr("transform", function (d) {
	                return "translate(" + d.y + "," + d.x + ")";
	            });
	
	            nodeUpdate.select("circle").attr("r", function (d) {
	                return 9.5 - d.depth;
	            }).style("fill", function (d) {
	                return d._children ? "lightsteelblue" : "#fff";
	            });
	
	            nodeUpdate.select("text").text(function (d) {
	                return d.value.name;
	            }).style("fill-opacity", 1);
	
	            // Transition exiting nodes to the parent's new position.
	            var nodeExit = node.exit().transition().duration(this.settings.duration).attr("transform", function (d) {
	                return "translate(" + source.y + "," + source.x + ")";
	            }).remove();
	
	            nodeExit.select("circle").attr("r", 1e-6);
	
	            nodeExit.select("text").style("fill-opacity", 1e-6);
	
	            // Update the links…
	            var link = this.nodesData.selectAll("path.link").data(this.tree.links(nodes), function (d) {
	                return d.target.id;
	            });
	
	            // Enter any new links at the parent's previous position.
	
	
	            link.enter().insert("svg:path", "g").attr('stroke-width', 10).attr("class", "link").attr('id', function (d) {
	                return d.source.id + '-' + d.target.id;
	            }).attr("d", function (d) {
	                var o = { x: source.x0, y: source.y0 };
	                return _this3.diagonal({ source: o, target: o });
	            }).transition().duration(this.settings.duration).attr("d", this.diagonal);
	
	            // Transition links to their new position.
	            link.transition().duration(this.settings.duration).attr("d", this.diagonal);
	
	            link.enter().insert("svg:text", "g").attr("text-anchor", "middle").style('font-size', '14px').append("textPath").attr('startOffset', '50%').text(function (d) {
	                return d.target.connection.name + (d.target.subConnection && d.target.subConnection.name || '');
	            }).attr("href", function (d) {
	                return "#" + d.source.id + '-' + d.target.id;
	            }).text(function (d) {
	                return d.target.connection.name;
	            });
	
	            // Transition exiting nodes to the parent's new position.
	            link.exit().transition().duration(this.settings.duration).attr("d", function (d) {
	                var o = { x: source.x, y: source.y };
	                return _this3.diagonal({ source: o, target: o });
	            }).remove();
	
	            // Stash the old positions for transition.
	            nodes.forEach(function (d) {
	                d.x0 = d.x;
	                d.y0 = d.y;
	            });
	
	            if (!flag) {
	                this.onChangeCallback(this.treeData);
	            }
	        }
	    }, {
	        key: "InjectNodeContent",
	        value: function InjectNodeContent(nodeEnter) {
	            nodeEnter.append("svg:circle").attr("r", 1e-6).style("fill", function (d) {
	                return d._children ? "lightsteelblue" : "#fff";
	            }).classed("toggleCircle", true).on("click", function (d) {
	                toggle(d);
	                update(d);
	            });
	
	            nodeEnter.append("svg:text").attr("x", function (d) {
	                return d.children || d._children ? -10 : 10;
	            }).style('font-size', '14px').attr("dy", ".35em").attr("text-anchor", function (d) {
	                return d.children || d._children ? "end" : "start";
	            }).text(function (d) {
	                return d.value.name;
	            }).style("fill-opacity", 1e-6);
	
	            // Add btn icon
	            nodeEnter.append("svg:path").attr("d", "M12 24c-6.627 0-12-5.372-12-12s5.373-12 12-12c6.628 0 12 5.372 12 12s-5.372 12-12 12zM12 3c-4.97 0-9 4.030-9 9s4.030 9 9 9c4.971 0 9-4.030 9-9s-4.029-9-9-9zM13.5 18h-3v-4.5h-4.5v-3h4.5v-4.5h3v4.5h4.5v3h-4.5v4.5z").attr("transform", function (d) {
	                var offset = d.children || d._children ? -70 : 0;
	                return "translate(" + offset + "," + 10 + ")";
	            }).classed("function-btn add", true);
	
	            nodeEnter.append("svg:rect").classed("function-bg add", true).attr("width", "24px").attr("height", "24px").attr("transform", function (d) {
	                var offset = d.children || d._children ? -70 : 0;
	                return "translate(" + offset + "," + 10 + ")";
	            }).on("click", this.addNewNode.bind(this));
	
	            // Remove btn icon
	            nodeEnter.append("svg:path").attr("d", "M3.514 20.485c-4.686-4.686-4.686-12.284 0-16.97 4.688-4.686 12.284-4.686 16.972 0 4.686 4.686 4.686 12.284 0 16.97-4.688 4.687-12.284 4.687-16.972 0zM18.365 5.636c-3.516-3.515-9.214-3.515-12.728 0-3.516 3.515-3.516 9.213 0 12.728 3.514 3.515 9.213 3.515 12.728 0 3.514-3.515 3.514-9.213 0-12.728zM8.818 17.303l-2.121-2.122 3.182-3.182-3.182-3.182 2.121-2.122 3.182 3.182 3.182-3.182 2.121 2.122-3.182 3.182 3.182 3.182-2.121 2.122-3.182-3.182-3.182 3.182z").attr("transform", function (d) {
	                var offset = d.children || d._children ? -40 : 30;
	                return "translate(" + offset + "," + 10 + ")";
	            }).classed("function-btn remove", true);
	
	            nodeEnter.append("svg:rect").classed("function-bg remove", true).attr("width", "24px").attr("height", "24px").attr("transform", function (d) {
	                var offset = d.children || d._children ? -40 : 30;
	                return "translate(" + offset + "," + 10 + ")";
	            }).on("click", this.removeNode.bind(this));
	
	            // Edit btn
	            nodeEnter.append("svg:path").attr("d", "M20.307 1.998c-0.839-0.462-3.15-1.601-4.658-1.913-1.566-0.325-3.897 5.79-4.638 5.817-1.202 0.043-0.146-4.175 0.996-5.902-1.782 1.19-4.948 2.788-5.689 4.625-1.432 3.551 2.654 9.942 0.474 10.309-0.68 0.114-2.562-4.407-3.051-5.787-1.381 2.64-0.341 5.111 0.801 8.198v0.192c-0.044 0.167-0.082 0.327-0.121 0.489h0.121v4.48c0 0.825 0.668 1.493 1.493 1.493 0.825 0 1.493-0.668 1.493-1.493v-4.527c2.787-0.314 4.098 0.6 6.007-3.020-1.165 0.482-3.491-0.987-3.009-1.68 0.97-1.396 4.935 0.079 7.462-4.211-4 1.066-4.473-0.462-4.511-1.019-0.080-1.154 3.999-0.542 5.858-2.146 1.078-0.93 2.37-3.133 0.97-3.905z").attr("transform", function (d) {
	                var offset = d.children || d._children ? -10 : 60;
	                return "translate(" + offset + "," + 10 + ")";
	            }).classed("function-btn edit", true);
	
	            nodeEnter.append("svg:rect").classed("function-bg edit", true).attr("width", "24px").attr("height", "24px").attr("transform", function (d) {
	                var offset = d.children || d._children ? -10 : 60;
	                return "translate(" + offset + "," + 10 + ")";
	            }).on("click", this.editNode.bind(this));
	        }
	    }, {
	        key: "addNewNode",
	        value: function addNewNode(d) {
	            var _this4 = this;
	
	            var childList = void 0;
	            if (d.children) {
	                childList = d.children;
	            } else if (d._children) {
	                childList = d.children = d._children;
	                d._children = null;
	            } else {
	                childList = [];
	                d.children = childList;
	            }
	            if (this.dataApi && this.dataApi.add) {
	                this.dataApi.add(d).then(function (response) {
	                    childList.push((0, _assign2.default)({
	                        "depth": d.depth + 1,
	                        "parent": d
	                    }, response));
	                    _this4.update(d);
	                }, function () {
	                    _this4.update(d);
	                });
	            }
	        }
	    }, {
	        key: "removeNode",
	        value: function removeNode(d) {
	            var _this5 = this;
	
	            var thisId = d.id;
	            if (!d.parent) {
	                return;
	            }
	            if (this.dataApi && this.dataApi.remove) {
	                this.dataApi.remove(d).then(function (response) {
	                    if (!response) {
	                        return;
	                    }
	                    d.parent.children.forEach(function (c, index) {
	                        if (thisId === c.id) {
	                            d.parent.children.splice(index, 1);
	                            return;
	                        }
	                    });
	                    _this5.update(d.parent);
	                }, function () {
	                    _this5.update(d);
	                });
	            }
	        }
	    }, {
	        key: "editNode",
	        value: function editNode(d) {
	            var _this6 = this;
	
	            if (this.dataApi && this.dataApi.edit) {
	                this.dataApi.edit(d).then(function (response) {
	                    (0, _assign2.default)(d, response);
	                    if (!d.parent) {
	                        _this6.update(d);
	                    } else {
	                        _this6.update(d.parent);
	                    }
	                }, function () {
	                    _this6.update(d);
	                });
	            }
	        }
	    }]);
	    return MindMapEditorTreeLogic;
	}();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(146), __webpack_require__(147), __webpack_require__(150), __webpack_require__(151)))

/***/ },
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(153), __esModule: true };

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(154);
	module.exports = __webpack_require__(103).Object.assign;

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(101);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(155)});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(156)
	  , gOPS     = __webpack_require__(171)
	  , pIE      = __webpack_require__(172)
	  , toObject = __webpack_require__(173)
	  , IObject  = __webpack_require__(160)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(112)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(157)
	  , enumBugKeys = __webpack_require__(170);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(158)
	  , toIObject    = __webpack_require__(159)
	  , arrayIndexOf = __webpack_require__(163)(false)
	  , IE_PROTO     = __webpack_require__(167)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 158 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(160)
	  , defined = __webpack_require__(162);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(161);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 161 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 162 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(159)
	  , toLength  = __webpack_require__(164)
	  , toIndex   = __webpack_require__(166);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(165)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 165 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(165)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(168)('keys')
	  , uid    = __webpack_require__(169);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(102)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 169 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 170 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 171 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 172 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(162);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MindMapEditorTreeMapLogic = undefined;
	
	var _classCallCheck2 = __webpack_require__(88);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//import d3 from './mind-map-editor.d3-layout';
	
	var MindMapEditorTreeMapLogic = exports.MindMapEditorTreeMapLogic = function MindMapEditorTreeMapLogic(mindMapElement, treeData, settings) {
	    var _this = this;
	
	    (0, _classCallCheck3.default)(this, MindMapEditorTreeMapLogic);
	
	    console.log(mindMapElement, treeData, settings);
	    this.mindMapElement = mindMapElement;
	
	    this.width = mindMapElement.clientWidth;
	    this.height = mindMapElement.clientHeight;
	
	    var zoom = null;
	
	    var x = d3.scale.linear().range([0, this.width]),
	        y = d3.scale.linear().range([0, this.height]),
	        color = d3.scale.category20c(),
	        root,
	        node;
	
	    var treemap = d3.layout.treemap().round(false).size([this.width, this.height]).sticky(true).value(function (d) {
	        return d.value.value || 50;
	    });
	
	    var svg = d3.select(this.mindMapElement).append("div").attr("class", "chart").style("width", this.width + "px").style("height", this.height + "px").append("svg:svg").attr("width", this.width).attr("height", this.height).append("svg:g").attr("transform", "translate(.5,.5)");
	
	    node = root = treeData;
	
	    var nodes = treemap.nodes(root).filter(function (d) {
	        return !d.children;
	    });
	
	    var cell = svg.selectAll("g").data(nodes).enter().append("svg:g").attr("class", "cell").attr("transform", function (d) {
	        return "translate(" + d.x + "," + d.y + ")";
	    }).on("click", function (d) {
	        return zoom(node == d.parent ? root : d.parent);
	    });
	
	    cell.append("svg:rect").attr("width", function (d) {
	        return d.dx - 1;
	    }).attr("height", function (d) {
	        return d.dy - 1;
	    }).style("fill", function (d) {
	        return color(d.parent.name);
	    });
	
	    cell.append("svg:text").attr("x", function (d) {
	        return d.dx / 2;
	    }).attr("y", function (d) {
	        return d.dy / 2;
	    }).attr("dy", ".35em").attr("text-anchor", "middle").text(function (d) {
	        return d.name;
	    }).style("opacity", function (d) {
	        d.w = this.getComputedTextLength();
	        return d.dx > d.w ? 1 : 0;
	    });
	
	    d3.select(window).on("click", function () {
	        zoom(root);
	    });
	
	    d3.select("select").on("change", function () {
	        treemap.value(this.value == "size" ? size : count).nodes(root);
	        zoom(node);
	    });
	    //addTooltip();
	
	    function size(d) {
	        return d.size;
	    }
	
	    function count(d) {
	        return 1;
	    }
	
	    zoom = function zoom(d) {
	        var kx = _this.width / d.dx,
	            ky = _this.height / d.dy;
	        x.domain([d.x, d.x + d.dx]);
	        y.domain([d.y, d.y + d.dy]);
	
	        var t = svg.selectAll("g.cell").transition().duration(d3.event.altKey ? 7500 : 750).attr("transform", function (d) {
	            return "translate(" + x(d.x) + "," + y(d.y) + ")";
	        });
	
	        t.select("rect").attr("width", function (d) {
	            return kx * d.dx - 1;
	        }).attr("height", function (d) {
	            return ky * d.dy - 1;
	        });
	
	        t.select("text").attr("x", function (d) {
	            return kx * d.dx / 2;
	        }).attr("y", function (d) {
	            return ky * d.dy / 2;
	        }).style("opacity", function (d) {
	            return kx * d.dx > d.w ? 1 : 0;
	        });
	
	        node = d;
	        d3.event.stopPropagation();
	    };
	
	    /*function addTooltip() {
	        var tip = d3.tip()
	            .attr("class", "d3-tip")
	            .html(function(d) { console.log(d) })
	          cell = svg.selectAll(".cell")
	        cell.call(tip)
	        cell.on("mouseover", tip.show)
	        cell.on("mouseout", tip.hide)
	    }*/
	}
	
	/*onChange(cb) {
	    this.onChangeCallback = cb;
	}
	  setDataApi(dataApi) {
	    this.dataApi = dataApi;
	}
	  setTreeData(treeData) {
	        
	    return this.treeData;
	}
	  getTreeData() {
	    return this.treeData;
	}*/
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(146)))

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MediaFileViewModule = undefined;
	
	var _mediaFileView = __webpack_require__(176);
	
	var MediaFileViewModule = exports.MediaFileViewModule = angular.module('erd.media-file-view', []).component('mediaFileView', _mediaFileView.MediaFileViewComponent).name;

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MediaFileViewComponent = undefined;
	
	var _mediaFileView = __webpack_require__(177);
	
	var _mediaFileViewTemplate = __webpack_require__(179);
	
	var _mediaFileViewTemplate2 = _interopRequireDefault(_mediaFileViewTemplate);
	
	var _mediaFileViewStyles = __webpack_require__(180);
	
	var _mediaFileViewStyles2 = _interopRequireDefault(_mediaFileViewStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MediaFileViewComponent = exports.MediaFileViewComponent = {
	    template: _mediaFileViewTemplate2.default,
	    controller: _mediaFileView.MediaFileViewController,
	    bindings: {
	        files: '=',
	        onChange: '&'
	    }
	};

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MediaFileViewController = undefined;
	
	var _classCallCheck2 = __webpack_require__(88);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(97);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MediaFileViewController = exports.MediaFileViewController = function () {
	    function MediaFileViewController(API, Upload, $timeout, $scope) {
	        var _this = this;
	
	        (0, _classCallCheck3.default)(this, MediaFileViewController);
	
	        this.API = API;
	        this.Upload = Upload;
	        this.$timeout = $timeout;
	        this.fallbackImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAA00lEQVR4Ae2XwQqDQAxEveinFD9e2MUfq6Cep7GnrPAg1JVCu5OTvEwe9FLtWlpqR6OyVn2aXbNGdX6KB4OLrmbRyIKsGsksWKsINhbUShM0wVcEk43CnAVY722mMEfBhPWD9mGOAlvBepSDwK1gPc5LASp8fbCJ81KACl9PNkOYo8CfKOtHUpijwJ841y1xToJy5VxXnLPgvUL1OAeBW4F6kKPAnYB6jKPAnYA68PZ/8EOCJtjvfvmdqwjSvR8gTz1YcCiytgs/TvLnvaDi/J2gCV63ZgZdEb12DwAAAABJRU5ErkJggg==';
	        this.tmpl = '<img ng-src="{{card.src}}">';
	        this.mas = $('.grid').masonry({
	            itemSelector: '.grid-item',
	            columnWidth: '.grid-sizer',
	            percentPosition: true
	        });
	        this.filesToPreview = [];
	        if (this.files && this.files.length) {
	            this.filesToPreview = angular.copy(this.files).map(function (el) {
	                if (!el.src.startsWith('data')) {
	                    el.src = _this.API.fileGet + el.src;
	                }
	                el.file = {
	                    name: el.name
	                };
	                return el;
	            });
	        }
	        this.filesRaw = [];
	        this.filesToUploadAndPreview = [];
	
	        $scope.$watch(function () {
	            return _this.filesToUploadAndPreview;
	        }, function () {
	            console.log(_this.filesToUploadAndPreview);
	            _this.selectFiles(_this.filesToUploadAndPreview);
	        });
	    }
	
	    (0, _createClass3.default)(MediaFileViewController, [{
	        key: 'selectFiles',
	        value: function selectFiles(files, errFiles) {
	            var _this2 = this;
	
	            this.errFiles = errFiles;
	
	            if (!(files && files.length) || errFiles) {
	                this.errorMsg = 'No file chosen';
	                return;
	            }
	            //TODO: validation
	
	            this.filesRaw = this.filesRaw.concat(files);
	            this.filesToPreview = [];
	
	            this.onChange({
	                files: this.filesRaw,
	                b64: this.filesToPreview.map(function (el) {
	                    return {
	                        src: el.src,
	                        type: el.type,
	                        name: el.file.name,
	                        id: el.file.name
	                    };
	                })
	            });
	
	            this.uploadFiles();
	
	            angular.forEach(this.filesRaw, function (file) {
	                _this2.Upload.base64DataUrl(file).then(function (b64) {
	                    _this2.filesToPreview.push({
	                        type: b64.split('data:')[1].split('/')[0],
	                        src: b64,
	                        file: file,
	                        id: file.name
	                    });
	                    _this2.mas.masonry('layout');
	                    _this2.onChange({
	                        files: _this2.filesRaw,
	                        b64: _this2.filesToPreview.map(function (el) {
	                            return {
	                                src: el.src,
	                                type: el.type,
	                                name: el.file.name,
	                                id: el.file.name
	                            };
	                        })
	                    });
	                });
	            });
	        }
	    }, {
	        key: 'uploadFiles',
	        value: function uploadFiles() {
	            var _this3 = this;
	
	            if (!(this.filesRaw && this.filesRaw.length > 0)) {
	                return;
	            }
	            this.Upload.upload({
	                url: this.API.filesUpload,
	                data: {
	                    files: this.filesRaw
	                }
	            }).then(function (response) {
	                _this3.$timeout(function () {
	                    _this3.uploadedFiles = [];
	                    angular.forEach(response.data.result, function (el) {
	                        _this3.uploadedFiles.push({
	                            src: el.hash,
	                            type: el.mimetype.split('/')[0],
	                            name: el.hash
	                        });
	                    });
	                    _this3.onChange({
	                        files: _this3.uploadedFiles,
	                        b64: _this3.filesToPreview.map(function (el) {
	                            return {
	                                src: el.src,
	                                type: el.type,
	                                name: el.file.name,
	                                id: el.file.name
	                            };
	                        })
	                    });
	                });
	            }, function (response) {
	                if (response.status > 0) {
	                    _this3.errorMsg = response.status + ': ' + response.data;
	                }
	            }, function (evt) {
	                _this3.uploadProgress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
	            });
	        }
	    }, {
	        key: 'clearPreview',
	        value: function clearPreview() {
	            this.filesRaw = [];
	            this.filesToPreview = [];
	            this.onChange({
	                files: this.filesRaw,
	                b64: this.filesToPreview.map(function (el) {
	                    return {
	                        src: el.src,
	                        type: el.type,
	                        name: el.file.name,
	                        id: el.file.name
	                    };
	                })
	            });
	        }
	    }, {
	        key: 'deleteFile',
	        value: function deleteFile(file, index) {
	            if (index > -1) {
	                this.filesToPreview.splice(index, 1);
	            }
	
	            var fInd = this.filesRaw.findIndex(function (el) {
	                return el.name + el.lastModified === file.file.name + file.file.lastModified;
	            });
	
	            if (fInd > -1) {
	                this.filesRaw.splice(fInd, 1);
	            }
	            this.onChange({
	                files: this.filesRaw,
	                b64: this.filesToPreview.map(function (el) {
	                    return {
	                        src: el.src,
	                        type: el.type,
	                        name: el.file.name,
	                        id: el.file.name
	                    };
	                })
	            });
	        }
	    }, {
	        key: 'downloadFile',
	        value: function downloadFile(file, index) {
	            console.log(file, index, this);
	        }
	    }]);
	    return MediaFileViewController;
	}();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(178)))

/***/ },
/* 178 */,
/* 179 */
/***/ function(module, exports) {

	module.exports = "<div id=\"mediaHere\" class=\"media-container\">\r\n    <!-- <div class=\"media-actions\">\r\n        <div class=\"actions\">\r\n             <i class=\"glyphicon glyphicon-th-list btn btn-default\" \r\n                ngf-select=\"$ctrl.selectFiles($files)\"  \r\n                accept=\"image/*,video/*,audio/*\"\r\n                multiple></i> \r\n\r\n            <i class=\"glyphicon glyphicon-upload btn btn-default\" \r\n                ng-click=\"$ctrl.uploadFiles()\"></i>\r\n\r\n            <i class=\"glyphicon glyphicon-trash btn btn-default\" \r\n                ng-click=\"$ctrl.clearPreview()\"></i>\r\n        </div>\r\n    </div> -->\r\n    <!-- <a class=\"media-control\">\r\n        <div class=\"btn btn-default add-file \" ngf-drop ngf-select=\"$ctrl.selectFiles($files)\" accept=\"image/*,video/*,audio/*\" multiple>\r\n            <span class=\"glyphicon glyphicon-paperclip img-responsive\"> </span>\r\n        </div>\r\n    </a>\r\n    <a class=\"media-control\" ng-repeat=\"pFile in $ctrl.filesToPreview\">\r\n        <figure>\r\n            <audio class=\"media-preview img-responsive\" ng-if=\"pFile.type === 'audio'\" ng-src=\"{{pFile.src}}\" controls=\"true\"></audio>\r\n            <video class=\"media-preview img-responsive\" ng-if=\"pFile.type === 'video'\" ng-src=\"{{pFile.src}}\" controls=\"true\"></video>\r\n            <img class=\"media-preview img-responsive\" ng-if=\"pFile.type === 'image'\" ng-src=\"{{pFile.src}}\"></img>\r\n        </figure>\r\n        <i class=\"delete-file glyphicon glyphicon-remove btn btn-default\" ng-click=\"$ctrl.deleteFile(pFile, $index)\"></i>\r\n    </a> -->\r\n    <div class=\"row\">\r\n        <div class=\"item\">\r\n            <div class=\"well\">\r\n                <div class=\"btn btn-default add-file \" ngf-drop ngf-drag-over-class=\"'dragover'\" ngf-select=\"$ctrl.selectFiles($files. $errorFiles)\" ng-model=\"$ctrl.filesToUploadAndPreview\"  accept=\"image/*,video/*,audio/*\" multiple ngf-multiple=\"true\">\r\n                    <span class=\"glyphicon glyphicon-paperclip img-responsive\"> </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"item\" ng-repeat=\"pFile in $ctrl.filesToPreview\">\r\n            <div class=\"well\"> \r\n                <audio class=\"media-preview img-responsive\" ng-if=\"pFile.type === 'audio'\" ng-src=\"{{pFile.src}}\" controls=\"true\"></audio>\r\n                <video class=\"media-preview img-responsive\" ng-if=\"pFile.type === 'video'\" ng-src=\"{{pFile.src}}\" controls=\"true\"></video>\r\n                <img class=\"media-preview img-responsive\" ng-if=\"pFile.type === 'image'\" ng-src=\"{{pFile.src}}\"></img>\r\n                <p>{{pFile.name | shortenFilename}}</p>\r\n                <i class=\"delete-file glyphicon glyphicon-remove btn btn-link\" ng-click=\"$ctrl.deleteFile(pFile, $index)\"></i>\r\n                <i class=\"download-file glyphicon glyphicon-download-alt btn btn-default\" ng-click=\"$ctrl.downloadFile(pFile, $index)\"></i>\r\n                <i class=\"zoom-file zoom-in glyphicon glyphicon-zoom-in btn btn-default\" ng-click=\"$ctrl.zoomFile(pFile, $index)\"></i>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- <div class=\"grid\">\r\n        <div class=\"grid-sizer\"></div>\r\n        <div class=\"grid-item\">\r\n            <div class=\"btn btn-default add-file \" ngf-drop ngf-select=\"$ctrl.selectFiles($files)\" accept=\"image/*,video/*,audio/*\" multiple>\r\n                <span class=\"glyphicon glyphicon-paperclip img-responsive\"> </span>\r\n            </div>\r\n        </div>\r\n        <div class=\"grid-item\" ng-repeat=\"pFile in $ctrl.filesToPreview\">\r\n            <audio class=\"media-preview img-responsive\" ng-if=\"pFile.type === 'audio'\" ng-src=\"{{pFile.src}}\" controls=\"true\"></audio>\r\n            <video class=\"media-preview img-responsive\" ng-if=\"pFile.type === 'video'\" ng-src=\"{{pFile.src}}\" controls=\"true\"></video>\r\n            <img class=\"media-preview img-responsive\" ng-if=\"pFile.type === 'image'\" ng-src=\"{{pFile.src}}\"></img>\r\n        </div>\r\n        \r\n    </div> -->\r\n\r\n</div>\r\n<!-- <button class=\"btn btn-default\" ngf-select=\"$ctrl.selectFiles($files)\" multiple accept=\"image/*,video/*,audio/*\">Select Files</button>\r\n<button class=\"btn btn-default\" ng-click=\"$ctrl.clearPreview()\">X</button>\r\n<button class=\"btn btn-default\" ng-click=\"$ctrl.uploadFiles()\">Upload Files</button> -->\r\n"

/***/ },
/* 180 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 181 */,
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.QuestionnaireModule = undefined;
	
	var _questionnaire = __webpack_require__(183);
	
	var QuestionnaireModule = exports.QuestionnaireModule = angular.module('erd.common.questionnaire', []).component('questionnaire', _questionnaire.QuestionnaireComponent).name;

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.QuestionnaireComponent = undefined;
	
	var _questionnaire = __webpack_require__(184);
	
	var _questionnaireTemplate = __webpack_require__(185);
	
	var _questionnaireTemplate2 = _interopRequireDefault(_questionnaireTemplate);
	
	var _questionnaireStyles = __webpack_require__(186);
	
	var _questionnaireStyles2 = _interopRequireDefault(_questionnaireStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var QuestionnaireComponent = exports.QuestionnaireComponent = {
	    template: _questionnaireTemplate2.default,
	    controller: _questionnaire.QuestionnaireController,
	    bindings: {
	        questions: '=',
	        onChange: '&'
	    }
	};

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.QuestionnaireController = undefined;
	
	var _classCallCheck2 = __webpack_require__(88);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var QuestionnaireController = exports.QuestionnaireController = function QuestionnaireController(API, Upload, $timeout) {
	    (0, _classCallCheck3.default)(this, QuestionnaireController);
	
	    this.API = API;
	};

/***/ },
/* 185 */
/***/ function(module, exports) {

	module.exports = "<div class=\"questionnaire\">\r\n    <form>\r\n        <fieldset>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-lg-2 control-label\">Radios</label>\r\n                <div class=\"col-lg-10\">\r\n                    <div class=\"radio\">\r\n                        <label>\r\n                            <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\" checked=\"\"> Option one is this\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"radio\">\r\n                        <label>\r\n                            <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"option2\"> Option two can be something else\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </fieldset>\r\n        <button class=\"btn btn-warning\">Back</button>\r\n        <button class=\"btn btn-success\">Next</button>\r\n    </form>\r\n</div>\r\n"

/***/ },
/* 186 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 187 */,
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.FiltersModule = undefined;
	
	var _shortenFilename = __webpack_require__(189);
	
	var FiltersModule = exports.FiltersModule = angular.module('erd.common.filters', []).filter('shortenFilename', _shortenFilename.ShortenFilenameFilter).name;

/***/ },
/* 189 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ShortenFilenameFilter = ShortenFilenameFilter;
	function ShortenFilenameFilter() {
	    return function (fileName, leaveNumber) {
	        if (!fileName) {
	            return '';
	        }
	        var parsed = fileName.split("."),
	            ext = parsed.pop();
	
	        return parsed.join('.').substr(0, 20) + '...' + ext;
	    };
	}

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	exports.AuthModule = undefined;
	
	var _auth = __webpack_require__(191);
	
	var _auth2 = __webpack_require__(196);
	
	var _auth3 = __webpack_require__(197);
	
	var _login = __webpack_require__(198);
	
	var _signin = __webpack_require__(204);
	
	var AuthModule = exports.AuthModule = angular.module('erd.auth', [_login.LoginModule, _signin.SignInModule]).config(_auth2.AuthConfig).component('auth', _auth.AuthComponent).constant('MESSAGES', _auth3.MESSAGES).name;

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AuthComponent = undefined;
	
	var _auth = __webpack_require__(192);
	
	var _authTemplate = __webpack_require__(193);
	
	var _authTemplate2 = _interopRequireDefault(_authTemplate);
	
	var _authStyles = __webpack_require__(194);
	
	var _authStyles2 = _interopRequireDefault(_authStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var AuthComponent = exports.AuthComponent = {
	    template: _authTemplate2.default,
	    controller: _auth.AuthController
	};

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AuthController = undefined;
	
	var _classCallCheck2 = __webpack_require__(88);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var AuthController = exports.AuthController = function AuthController(AuthApi, API) {
	    var _this = this;
	
	    (0, _classCallCheck3.default)(this, AuthController);
	
	    this.AuthApi = AuthApi;
	    this.AuthApi.getSocialUrls().then(function (response) {
	        _this.backends = response.data.backends;
	    });
	};

/***/ },
/* 193 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\r\n    <div class=\"auth row\">\r\n        <div class=\"col-lg-6 col-xs-6 col-sm-6 col-md-6\">\r\n            <div class=\"well\">\r\n                <legend ng-if>Please Log In, or <a href=\"#\">Sign Up</a></legend>\r\n                <ul class=\"nav nav-tabs\">\r\n                    <li \r\n                        role=\"button\"\r\n                        ui-sref=\"app.auth.login\" \r\n                        ui-sref-active=\"active\"><a>Log In</a></li>\r\n                    <li \r\n                        role=\"button\"\r\n                        ui-sref=\"app.auth.signin\" \r\n                        ui-sref-active=\"active\"><a>Sing In</a></li>\r\n                </ul>\r\n                \r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-4 col-xs-4 col-sm-4 col-md-4\" ng-repeat=\"be in $ctrl.backends\">\r\n                        <a ng-href=\"{{be.link}}\" class=\"btn btn-lg btn-info btn-block\" ng-class=\"be.backend\">{{be.backend}}</a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"login-or\">\r\n                    <hr class=\"hr-or\">\r\n                    <span class=\"span-or\">or</span>\r\n                </div>\r\n                <div ui-view></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 194 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 195 */,
/* 196 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AuthConfig = AuthConfig;
	function AuthConfig($stateProvider, $urlRouterProvider) {
	
	    $urlRouterProvider.when('/auth', '/auth/login');
	
	    $stateProvider.state('app.auth.login', {
	        url: '/login',
	        template: '<login></login>'
	    }).state('app.auth.signin', {
	        url: '/signin',
	        template: '<signin></signin>'
	    });
	}

/***/ },
/* 197 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var MESSAGES = exports.MESSAGES = {
	    error: {
	        general: 'Specified login or password is not correct',
	        username: 'Specified login is not valid',
	        password: 'Specified password is not valid',
	        'confirm-password': 'Typed passwords do not match',
	        email: 'Specified email is not valid'
	    }
	};

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.LoginModule = undefined;
	
	var _login = __webpack_require__(199);
	
	var LoginModule = exports.LoginModule = angular.module('erd.auth.login', []).component('login', _login.LoginComponent).name;

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.LoginComponent = undefined;
	
	var _login = __webpack_require__(200);
	
	var _loginTemplate = __webpack_require__(201);
	
	var _loginTemplate2 = _interopRequireDefault(_loginTemplate);
	
	var _loginStyles = __webpack_require__(202);
	
	var _loginStyles2 = _interopRequireDefault(_loginStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var LoginComponent = exports.LoginComponent = {
	    template: _loginTemplate2.default,
	    controller: _login.LoginController
	};

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.LoginController = undefined;
	
	var _classCallCheck2 = __webpack_require__(88);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(97);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var LoginController = exports.LoginController = function () {
	    function LoginController(AuthApi, $localStorage) {
	        (0, _classCallCheck3.default)(this, LoginController);
	
	        this.AuthApi = AuthApi;
	        this.$storage = $localStorage;
	        this.errorMessage = '';
	        this.input = {
	            username: this.$storage.username,
	            password: this.$storage.password,
	            rememberMe: true
	        };
	    }
	
	    (0, _createClass3.default)(LoginController, [{
	        key: 'submit',
	        value: function submit() {
	            var _this = this;
	
	            this.loginForm.$setSubmitted();
	            this.errorMessage = '';
	            if (!this.input.username || !this.input.password) {
	                return;
	            }
	
	            this.AuthApi.login(this.input).then(function (response) {
	                //console.log(response);
	            }, function (error) {
	                //console.log(error)
	                _this.errorMessage = 'Specified login or password is not correct';
	            });
	        }
	    }]);
	    return LoginController;
	}();

/***/ },
/* 201 */
/***/ function(module, exports) {

	module.exports = "<form id=\"$ctrl.loginForm\" name=\"$ctrl.loginForm\" role=\"form\" novalidate>\r\n    <div class=\"form-group\" form-group-validation>\r\n        <label for=\"username\" class=\"control-label\">Username</label>\r\n        <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            name=\"username\"\r\n            id=\"username\"\r\n            placeholder=\"Username or Email\"\r\n            ng-model=\"$ctrl.input.username\"\r\n            ng-required=\"true\">\r\n    </div>\r\n    <div class=\"form-group\" form-group-validation>\r\n        <a class=\"forgot-password pull-right\" href=\"\">Forgot password?</a>\r\n        <label for=\"password\" class=\"control-label\">Password</label>\r\n        <input\r\n            type=\"password\"\r\n            class=\"form-control\"\r\n            name=\"password\"\r\n            id=\"password\"\r\n            placeholder=\"Password\"\r\n            ng-model=\"$ctrl.input.password\"\r\n            ng-required=\"true\">\r\n    </div>\r\n    <p class=\"text-danger\" ng-if=\"$ctrl.errorMessage\" ng-bind=\"$ctrl.errorMessage\"></p>\r\n    <div class=\"checkbox pull-right\">\r\n        <label for=\"remember-me\">\r\n            <input id=\"remember-me\" name=\"remember-me\" type=\"checkbox\" ng-model=\"$ctrl.input.rememberMe\">Remember Me\r\n        </label>\r\n    </div>\r\n    <button\r\n        ng-click=\"$ctrl.submit()\" \r\n        type=\"submit\" \r\n        class=\"btn btn btn-primary\">\r\n        Log In\r\n    </button>\r\n</form>"

/***/ },
/* 202 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 203 */,
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SignInModule = undefined;
	
	var _signin = __webpack_require__(205);
	
	var SignInModule = exports.SignInModule = angular.module('erd.auth.signin', []).component('signin', _signin.SignInComponent).name;

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SignInComponent = undefined;
	
	var _signin = __webpack_require__(206);
	
	var _signinTemplate = __webpack_require__(207);
	
	var _signinTemplate2 = _interopRequireDefault(_signinTemplate);
	
	var _signinStyles = __webpack_require__(208);
	
	var _signinStyles2 = _interopRequireDefault(_signinStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SignInComponent = exports.SignInComponent = {
	    template: _signinTemplate2.default,
	    controller: _signin.SignInController
	};

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SignInController = undefined;
	
	var _classCallCheck2 = __webpack_require__(88);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(97);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SignInController = exports.SignInController = function () {
	    function SignInController(AuthApi, MESSAGES) {
	        (0, _classCallCheck3.default)(this, SignInController);
	
	        this.AuthApi = AuthApi;
	        this.userData = {};
	        this.errorMap = MESSAGES.error;
	        this.errorMessage = '';
	    }
	
	    (0, _createClass3.default)(SignInController, [{
	        key: 'submit',
	        value: function submit() {
	            var _this = this;
	
	            this.errorMessage = '';
	            var fields = ['username', 'password', 'email', 'confirm-password'];
	            this.singInForm.$setSubmitted();
	
	            fields.forEach(function (el) {
	                if (_this.singInForm[el].$invalid) {
	                    _this.errorMessage = _this.errorMap[el] || _this.errorMap.general;
	                    return;
	                }
	            });
	
	            if (this.singInForm.$invalid) {
	                return;
	            }
	            this.AuthApi.signup(this.userData).then(function (response) {
	                console.log(_this.userData);
	                //console.log(response);
	            });
	        }
	    }]);
	    return SignInController;
	}();

/***/ },
/* 207 */
/***/ function(module, exports) {

	module.exports = "<form name=\"$ctrl.singInForm\" id=\"$ctrl.singInForm\" role=\"form\" novalidate>\r\n    <div class=\"form-group\" form-group-validation>\r\n        <label for=\"username\" class=\"control-label\">Username</label>\r\n        <input \r\n            type=\"text\" \r\n            name=\"username\" \r\n            id=\"username\" \r\n            tabindex=\"1\"\r\n            class=\"form-control\" \r\n            placeholder=\"Username\" \r\n            ng-model=\"$ctrl.userData.username\"\r\n            ng-required=\"true\"\r\n            value=\"\">\r\n    </div>\r\n    <div class=\"form-group\" form-group-validation>\r\n        <label for=\"email\" class=\"control-label\">Email</label>\r\n        <input \r\n            type=\"email\" \r\n            name=\"email\" \r\n            id=\"email\" \r\n            tabindex=\"1\" \r\n            class=\"form-control\" \r\n            placeholder=\"Email Address\"\r\n            ng-model=\"$ctrl.userData.email\"\r\n            ng-required=\"true\"\r\n            value=\"\">\r\n    </div>\r\n    <div class=\"form-group\" form-group-validation>\r\n        <label for=\"password\" class=\"control-label\">Password</label>\r\n        <input \r\n            type=\"password\" \r\n            name=\"password\" \r\n            id=\"password\" \r\n            tabindex=\"2\" \r\n            class=\"form-control\" \r\n            placeholder=\"Password\"\r\n            ng-model=\"$ctrl.userData.password\"\r\n            ng-required=\"true\"\r\n            value=\"\">\r\n    </div>\r\n    <div class=\"form-group\" form-group-validation>\r\n        <label for=\"confirm-password\" class=\"control-label\">Confirm Password</label>\r\n        <input\r\n            type=\"password\"\r\n            name=\"confirm-password\"\r\n            id=\"confirm-password\"\r\n            tabindex=\"2\"\r\n            class=\"form-control\"\r\n            placeholder=\"Confirm Password\"\r\n            ng-model=\"$ctrl.userData.confirmPassword\"\r\n            ng-required=\"true\"\r\n            value=\"\">\r\n    </div>\r\n    <p class=\"text-danger\" ng-if=\"$ctrl.errorMessage\" ng-bind=\"$ctrl.errorMessage\"></p>\r\n    <button \r\n        ng-click=\"$ctrl.submit()\"\r\n        type=\"submit\" \r\n        class=\"btn btn btn-primary\">\r\n        Sign In\r\n    </button>\r\n</form>\r\n\r\n"

/***/ },
/* 208 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 209 */,
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	exports.IndexModule = undefined;
	
	var _editBase = __webpack_require__(211);
	
	var _header = __webpack_require__(217);
	
	var _dashboard = __webpack_require__(223);
	
	var _userPage = __webpack_require__(229);
	
	var _index = __webpack_require__(239);
	
	var _memorise = __webpack_require__(244);
	
	var IndexModule = exports.IndexModule = angular.module('erd.index', [_editBase.EditBaseModule, _header.HeaderModule, _dashboard.DashboardModule, _userPage.UserPageModule, _memorise.MemoriseModule]).component('index', _index.IndexComponent).name;

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.EditBaseModule = undefined;
	
	var _editBase = __webpack_require__(212);
	
	var EditBaseModule = exports.EditBaseModule = angular.module('erd.index.dashboard.edit-base', []).component('editBase', _editBase.EditBaseComponent).name;

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.EditBaseComponent = undefined;
	
	var _editBase = __webpack_require__(213);
	
	var _editBaseTemplate = __webpack_require__(214);
	
	var _editBaseTemplate2 = _interopRequireDefault(_editBaseTemplate);
	
	var _editBaseStyles = __webpack_require__(215);
	
	var _editBaseStyles2 = _interopRequireDefault(_editBaseStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var EditBaseComponent = exports.EditBaseComponent = {
	    template: _editBaseTemplate2.default,
	    controller: _editBase.EditBaseController
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.EditBaseController = undefined;
	
	var _classCallCheck2 = __webpack_require__(88);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(97);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var EditBaseController = exports.EditBaseController = function () {
	    function EditBaseController(BaseApi, $timeout, $stateParams, addEditBaseModal) {
	        (0, _classCallCheck3.default)(this, EditBaseController);
	
	        dataInit = dataInit.bind(this);
	        this.BaseApi = BaseApi;
	        if (!$stateParams.base && !$stateParams.baseId) {
	            addEditBaseModal().open().then(dataInit);
	        } else {
	            dataInit($stateParams.base, $stateParams.baseId);
	        }
	
	        function dataInit(base, baseId) {
	            var _this = this;
	
	            if (base) {
	                this.base = angular.copy(base);
	                if (!this.base.tree) {
	                    this.base.tree = {
	                        name: this.base.value.name,
	                        description: this.base.value.description
	                    };
	                }
	                return;
	            }
	
	            if (baseId) {
	                this.BaseApi.getBase(baseId).then(function (response) {
	                    _this.base = response.data || _this.base;
	                });
	            }
	        }
	    }
	
	    (0, _createClass3.default)(EditBaseController, [{
	        key: "filesChanged",
	        value: function filesChanged(files) {
	            if (files && files.length > 0) {
	                this.base.value.files = files;
	            }
	        }
	    }, {
	        key: "saveChanges",
	        value: function saveChanges() {
	            this.editBaseForm.$setSubmitted();
	            if (this.editBaseForm.$invalid) {
	                return;
	            }
	            if (this.base.id) {
	                console.log(this.base.id);
	                this.BaseApi.editBase(this.base.id, this.base);
	                return;
	            }
	            this.BaseApi.createBase(this.base);
	        }
	    }]);
	    return EditBaseController;
	}();

/***/ },
/* 214 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-12 col-xs-12 col-sm-12 col-md-12\" ng-if=\"$ctrl.base\">\r\n        <div class=\"page-header\">\r\n            <h3 ng-if id=\"navbar\">Edit {{$ctrl.base.value.name}}</h3>\r\n            <ul class=\"nav nav-tabs\" ng-init=\"activeTab='MindMapTree'\">\r\n                <li class=\"{{activeTab == 'MindMapTree' ? 'active' : ''}}\"><a href=\"\" ng-click=\"activeTab = 'MindMapTree'\">Mind Map Tree</a></li>\r\n                <li class=\"{{activeTab == 'MindMapTreeMap' ? 'active' : ''}}\"><a href=\"\" ng-click=\"activeTab = 'MindMapTreeMap'\">Mind Map Tree Map</a></li>\r\n                <li class=\"{{activeTab == 'GeneralInfo' ? 'active' : ''}}\"><a href=\"\" ng-click=\"activeTab = 'GeneralInfo'\">General Info</a></li>\r\n            </ul>\r\n            \r\n        </div>\r\n        <div ng-if=\"activeTab == 'MindMapTree'\" class=\"col-lg-12 col-xs-12 col-sm-12 col-md-12\">\r\n            <mind-map-editor type=\"'tree'\" base=\"$ctrl.base\"></mind-map-editor>\r\n        </div>\r\n        <div ng-if=\"activeTab == 'MindMapTreeMap'\" class=\"col-lg-12 col-xs-12 col-sm-12 col-md-12\">\r\n            <mind-map-editor type=\"'treemap'\" base=\"$ctrl.base\"></mind-map-editor>\r\n        </div>\r\n        <div ng-if=\"activeTab == 'GeneralInfo'\" class=\"container col-lg-12 col-xs-12 col-sm-12 col-md-12\">\r\n            <form name=\"$ctrl.editBaseForm\" class=\"form-horizontal\" novalidate>\r\n                <fieldset>\r\n                    <div class=\"form-group\" form-group-validation>\r\n                        <label for=\"name\" class=\"col-lg-2 col-xs-2 col-sm-2 col-md-2 control-label\">Name</label>\r\n                        <div class=\"col-lg-10 col-xs-10 col-sm-10 col-md-10\">\r\n                            <input \r\n                                type=\"text\" \r\n                                name=\"name\"\r\n                                placeholder=\"Name\"\r\n                                class=\"form-control\"\r\n                                id=\"name\"\r\n                                ng-model=\"$ctrl.base.value.name\"\r\n                                ng-required=\"true\"\r\n                                >\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\" form-group-validation>\r\n                        <label for=\"description\" class=\"col-lg-2 col-xs-2 col-sm-2 col-md-2 control-label\">Description</label>\r\n                        <div class=\"col-lg-10 col-xs-10 col-sm-10 col-md-10\">\r\n                            <textarea \r\n                                name=\"description\" \r\n                                placeholder=\"Description\"\r\n                                class=\"form-control\" \r\n                                id=\"description\" \r\n                                ng-model=\"$ctrl.base.value.description\" \r\n                                ng-required=\"true\"\r\n                            ></textarea> \r\n                        </div>\r\n                    </div>\r\n                    <fieldset>\r\n                <legend >Attachments\r\n                    <i class=\"glyphicon pull-right\" \r\n                        ng-class=\"{'glyphicon-chevron-down': $ctrl.inputType.attachments, 'glyphicon-chevron-up': !$ctrl.inputType.attachments}\"\r\n                        ng-click=\"$ctrl.inputType.attachments = !$ctrl.inputType.attachments\"></i>\r\n                </legend>\r\n                <div class=\"animate-show col-lg-10 col-xs-10 col-sm-10 col-md-10 col-lg-offset-2 col-sm-offset-2 col-md-offset-2 col-xs-offset-2\" ng-show=\"$ctrl.inputType.attachments\">\r\n                    <div id=\"mediaHere\" class=\"custom-preview media-container\"></div>\r\n                    <media-file-view on-change=\"$ctrl.filesChanged(files)\" files=\"$ctrl.base.value.files\" ng-model=\"model\" preview-class=\"img-thumbnail\" preview-container=\"mediaHere\" multiple=\"\"></media-file-view>\r\n                </div>\r\n            </fieldset>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-lg-10 col-xs-10 col-sm-10 col-md-10 col-lg-offset-2 col-sm-offset-2 col-md-offset-2 col-xs-offset-2\">\r\n                            <button type=\"submit\" class=\"btn btn-primary\" ng-click=\"$ctrl.saveChanges()\">Save Changes</button>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 215 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 216 */,
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.HeaderModule = undefined;
	
	var _header = __webpack_require__(218);
	
	var HeaderModule = exports.HeaderModule = angular.module('erd.index.header', []).component('header', _header.HeaderComponent).name;

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.HeaderComponent = undefined;
	
	var _header = __webpack_require__(219);
	
	var _headerTemplate = __webpack_require__(220);
	
	var _headerTemplate2 = _interopRequireDefault(_headerTemplate);
	
	var _headerStyles = __webpack_require__(221);
	
	var _headerStyles2 = _interopRequireDefault(_headerStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var HeaderComponent = exports.HeaderComponent = {
	    template: _headerTemplate2.default,
	    controller: _header.HeaderController
	};

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.HeaderController = undefined;
	
	var _classCallCheck2 = __webpack_require__(88);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var HeaderController = exports.HeaderController = function HeaderController($localStorage) {
	    (0, _classCallCheck3.default)(this, HeaderController);
	
	    this.$storage = $localStorage;
	};

/***/ },
/* 220 */
/***/ function(module, exports) {

	module.exports = "<div class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n            <a ui-sref=\"app.index.dashboard\" class=\"navbar-brand\">ERD</a>\r\n        </div>\r\n        <div class=\"navbar-collapse collapse\" id=\"navbar-main\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li class=\"user-menu\">\r\n                    <a ui-sref=\"app.index.user($ctrl.$storage.user)\">\r\n                        <span class=\"user-name col-xs-12 col-md-12 col-lg-12 col-sm-12\">\r\n                            <div class=\"col-xs-4 col-md-4 col-lg-4 col-sm-4\">\r\n                                <img ng-if=\"$ctrl.$storage.user.value.image\" ng-src=\"{{$ctrl.$storage.user.value.image}}\" class=\"avatar\" alt=\"Cinque Terre\">\r\n                            </div>\r\n                            <span class=\"first col-xs-8 col-md-8 col-lg-8 col-sm-8\" ng-bind=\"$ctrl.$storage.user.value.name\"></span>\r\n                        </span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 221 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 222 */,
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DashboardModule = undefined;
	
	var _dashboard = __webpack_require__(224);
	
	var DashboardModule = exports.DashboardModule = angular.module('erd.index.dashboard', []).component('dashboard', _dashboard.DashboardComponent).name;

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DashboardComponent = undefined;
	
	var _dashboard = __webpack_require__(225);
	
	var _dashboardTemplate = __webpack_require__(226);
	
	var _dashboardTemplate2 = _interopRequireDefault(_dashboardTemplate);
	
	var _dashboardStyles = __webpack_require__(227);
	
	var _dashboardStyles2 = _interopRequireDefault(_dashboardStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DashboardComponent = exports.DashboardComponent = {
	    template: _dashboardTemplate2.default,
	    controller: _dashboard.DashboardController
	};

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DashboardController = undefined;
	
	var _classCallCheck2 = __webpack_require__(88);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(97);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DashboardController = exports.DashboardController = function () {
	    function DashboardController(BaseApi, addEditBaseModal, $state, $timeout) {
	        var _this = this;
	
	        (0, _classCallCheck3.default)(this, DashboardController);
	
	
	        this.BaseApi = BaseApi;
	        this.data = {};
	        this.$timeout = $timeout;
	
	        this.newBase = null;
	        this.addEditBaseModal = addEditBaseModal;
	        this.$state = $state;
	
	        this.BaseApi.getBasesList().then(function (response) {
	            _this.data = {
	                bases: response.data
	            };
	        });
	    }
	
	    (0, _createClass3.default)(DashboardController, [{
	        key: 'addBase',
	        value: function addBase() {
	            var _this2 = this;
	
	            this.addEditBaseModal({ type: 'add' }).open().then(function (response) {
	                _this2.$state.transitionTo('app.index.create', { base: response, baseId: null });
	            });
	        }
	    }, {
	        key: 'deleteBase',
	        value: function deleteBase(base) {
	            var _this3 = this;
	
	            this.addEditBaseModal({ type: 'delete' }).open(base).then(function (response) {
	                if (response === 'confirm') {
	                    _this3.BaseApi.deleteBase(base.pk).then(function () {
	                        _this3.BaseApi.getBasesList().then(function (response) {
	                            _this3.data = {
	                                bases: response.data
	                            };
	                        });
	                    }, function () {});
	                }
	            });
	        }
	    }]);
	    return DashboardController;
	}();

/***/ },
/* 226 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row dashboard\">\r\n    <div class=\"col-lg-12 col-xs-12 col-sm-12 col-md-12\">\r\n        <div class=\"page-header\">\r\n            <h1 id=\"navbar\">Dashboard</h1>\r\n        </div>\r\n        <div class=\"col-lg-12 col-xs-12 col-sm-12 col-md-12\">\r\n            <div class=\"list-group bases\">\r\n                <a class=\"base list-group-item\" ng-click=\"expand[base.pk] = !expand[base.pk]\" ng-repeat=\"base in $ctrl.data.bases\">\r\n                    <h4 class=\"base-head list-group-item-heading\">{{base.value.name}}\r\n                        <div class=\"base-head-controls\">\r\n                            <div class=\"btn-group\" ng-class=\"dropDown\">\r\n                                <button class=\"btn btn-link dropdown-toggle\" ng-click=\"$event.stopPropagation(); dropDown = dropDown ? '' : 'open';\">\r\n                                    Edit\r\n                                    <span class=\"caret\"></span>\r\n                                </button>\r\n                                <ul class=\"dropdown-menu\">\r\n                                    <li><button class=\"btn btn-default\" ng-click=\"$event.stopPropagation();\" ui-sref=\"app.index.edit({ baseId: base.pk})\">Edit</button></li>\r\n                                    <li><button class=\"btn btn-default\" ng-click=\"$event.stopPropagation(); $ctrl.memorize(base);\">Memorise</button></li>\r\n                                    <li><button class=\"btn btn-default\" ng-click=\"$event.stopPropagation(); $ctrl.deleteBase(base);\">Delete</button></li>\r\n                                </ul>\r\n                            </div>\r\n                            <!-- <button  type=\"button\" class=\"btn btn-default\" ng-click=\"$event.stopPropagation()\" ui-sref=\"app.index.edit({ baseId: base.pk})\">\r\n                                <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span>\r\n                            </button>\r\n                            <button  type=\"button\" class=\"btn btn-default\" ng-click=\"$event.stopPropagation()\" ui-sref=\"app.index.memorise({ baseId: base.pk})\">\r\n                                <span class=\"glyphicon glyphicon-pushpin\" aria-hidden=\"true\"></span>\r\n                            </button>\r\n                            <button  type=\"button\" class=\"btn btn-default\" ng-click=\"expand[base.pk] = !expand[base.pk]; $ctrl.deleteBase(base);\">\r\n                                <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>\r\n                            </button> -->\r\n                        </div>\r\n                    </h4>\r\n                    <div class=\"animate-show base-body\" ng-show=\"expand[base.pk]\">\r\n                        <p class=\"description list-group-item-text\">{{base.value.description}}</p>\r\n                    </div>\r\n                </a>\r\n                <a href=\"\" class=\"base list-group-item\" ng-click=\"$ctrl.addBase()\">\r\n                    <h4 class=\"base-head list-group-item-heading\">Add New Base\r\n                        <span class=\"base-head-controls glyphicon glyphicon-plus\"></span>\r\n                    </h4>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 227 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 228 */,
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.UserPageModule = undefined;
	
	var _userPage = __webpack_require__(230);
	
	var UserPageModule = exports.UserPageModule = angular.module('erd.index.user-page', []).component('userPage', _userPage.UserPageComponent).name;

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.UserPageComponent = undefined;
	
	var _userPage = __webpack_require__(231);
	
	var _userPageTemplate = __webpack_require__(236);
	
	var _userPageTemplate2 = _interopRequireDefault(_userPageTemplate);
	
	var _userPageStyles = __webpack_require__(237);
	
	var _userPageStyles2 = _interopRequireDefault(_userPageStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var UserPageComponent = exports.UserPageComponent = {
	    template: _userPageTemplate2.default,
	    controller: _userPage.UserPageController
	};

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.UserPageController = undefined;
	
	var _keys = __webpack_require__(232);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _classCallCheck2 = __webpack_require__(88);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(97);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var UserPageController = exports.UserPageController = function () {
	    function UserPageController(UserApi, $timeout, API, Upload, $scope) {
	        var _this = this;
	
	        (0, _classCallCheck3.default)(this, UserPageController);
	
	        this.UserApi = UserApi;
	        UserApi.getUser().then(function (response) {
	            //console.log(response);
	            _this.input = response;
	        });
	        this.API = API;
	        this.Upload = Upload;
	        this.$timeout = $timeout;
	
	        $scope.$watch(function () {
	            return _this.picFile;
	        }, function () {
	            _this.upload(_this.picFile);
	        });
	    }
	
	    (0, _createClass3.default)(UserPageController, [{
	        key: 'saveChanges',
	        value: function saveChanges() {
	            this.userForm.$setSubmitted();
	            if (this.userForm.$invalid) {
	                return;
	            }
	            this.UserApi.setUser(this.input);
	        }
	    }, {
	        key: 'upload',
	        value: function upload($file, $invalidFiles) {
	            var _this2 = this;
	
	            if (!$file || $invalidFiles) {
	                return;
	            }
	            this.Upload.upload({
	                url: this.API.filesUpload,
	                data: {
	                    files: [$file]
	                }
	            }).then(function (response) {
	                _this2.$timeout(function () {
	                    if ((0, _keys2.default)(response.data.result).length > 0) {
	                        _this2.input.value.image = _this2.API.fileGet + response.data.result['files[0]'].hash;
	                    }
	                });
	            }, function (response) {
	                if (response.status > 0) _this2.errorMsg = response.status + ': ' + response.data;
	            }, function (evt) {
	                _this2.progress = parseInt(100.0 * evt.loaded / evt.total);
	            });
	        }
	    }]);
	    return UserPageController;
	}();

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(233), __esModule: true };

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(234);
	module.exports = __webpack_require__(103).Object.keys;

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(173)
	  , $keys    = __webpack_require__(156);
	
	__webpack_require__(235)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(101)
	  , core    = __webpack_require__(103)
	  , fails   = __webpack_require__(112);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 236 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-12 col-xs-12 col-sm-12 col-md-12\">\r\n        <div class=\"page-header\">\r\n            <h1 id=\"navbar\">User Page</h1>\r\n        </div>\r\n        <div class=\"col-lg-8 col-xs-8 col-sm-8 col-md-8\">\r\n            <form name=\"$ctrl.userForm\" class=\"form-horizontal\">\r\n                <fieldset>\r\n                    <div class=\"form-group avatar\">\r\n                        <label for=\"avatar\" class=\"col-lg-2 col-xs-2 col-sm-2 col-md-2 control-label\">Avatar</label>\r\n                        <!-- <button \r\n                            ngf-select=\"$ctrl.upload($file, $invalidFiles)\"\r\n                            ng-model=\"$ctrl.picFile\" \r\n                            accept=\"image/*\">\r\n                            Select Picture</button> -->\r\n                        <div \r\n                            name=\"avatar\"\r\n                            class=\"avatar col-lg-10 col-xs-10 col-sm-10 col-md-10\" \r\n                            ngf-drop\r\n                            ngf-drag-over-class=\"'dragover'\"\r\n                            ngf-select=\"$ctrl.upload($file, $invalidFiles)\"\r\n                            ng-model=\"$ctrl.picFile\" \r\n                            accept=\"image/*\">\r\n                            <img ng-src=\"{{$ctrl.input.value.image}}\" />\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n                <fieldset>\r\n                    <div class=\"form-group\" form-group-validation>\r\n                        <label for=\"givenName\" class=\"col-lg-2 col-xs-2 col-sm-2 col-md-2 control-label\">User Name</label>\r\n                        <div class=\"col-lg-10 col-xs-10 col-sm-10 col-md-10\">\r\n                            <input \r\n                                type=\"text\" \r\n                                name=\"givenName\"\r\n                                placeholder=\"Name\"\r\n                                class=\"form-control\"\r\n                                id=\"givenName\"\r\n                                ng-model=\"$ctrl.input.value.name\"\r\n                                ng-required=\"true\"\r\n                                >\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\" form-group-validation>\r\n                        <label for=\"description\" class=\"col-lg-2 control-label\">About Me</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <input \r\n                                type=\"text\" \r\n                                name=\"description\" \r\n                                placeholder=\"About Me\"\r\n                                class=\"form-control\" \r\n                                id=\"description\" \r\n                                ng-model=\"$ctrl.input.value.description\" \r\n                                ng-required=\"true\"\r\n                                >\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-lg-10 col-xs-10 col-sm-10 col-md-10 col-lg-offset-2 col-sm-offset-2 col-md-offset-2 col-xs-offset-2\">\r\n                            <button type=\"submit\" class=\"btn btn-primary\" ng-click=\"$ctrl.saveChanges()\">Save Changes</button>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 237 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 238 */,
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.IndexComponent = undefined;
	
	var _index = __webpack_require__(240);
	
	var _indexTemplate = __webpack_require__(241);
	
	var _indexTemplate2 = _interopRequireDefault(_indexTemplate);
	
	var _indexStyles = __webpack_require__(242);
	
	var _indexStyles2 = _interopRequireDefault(_indexStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var IndexComponent = exports.IndexComponent = {
	    template: _indexTemplate2.default,
	    controller: _index.IndexController
	};

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.IndexController = undefined;
	
	var _classCallCheck2 = __webpack_require__(88);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var IndexController = exports.IndexController = function IndexController() {
	    (0, _classCallCheck3.default)(this, IndexController);
	};

/***/ },
/* 241 */
/***/ function(module, exports) {

	module.exports = "<header></header>\r\n<div \r\n    class=\"container\" ui-view></div>\r\n\r\n\r\n"

/***/ },
/* 242 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 243 */,
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MemoriseModule = undefined;
	
	var _memorise = __webpack_require__(245);
	
	var MemoriseModule = exports.MemoriseModule = angular.module('erd.index.memorise', []).component('memorise', _memorise.MemoriseComponent).name;

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MemoriseComponent = undefined;
	
	var _memorise = __webpack_require__(246);
	
	var _memoriseTemplate = __webpack_require__(247);
	
	var _memoriseTemplate2 = _interopRequireDefault(_memoriseTemplate);
	
	var _memoriseStyles = __webpack_require__(248);
	
	var _memoriseStyles2 = _interopRequireDefault(_memoriseStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MemoriseComponent = exports.MemoriseComponent = {
	    template: _memoriseTemplate2.default,
	    controller: _memorise.MemoriseController
	};

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MemoriseController = undefined;
	
	var _classCallCheck2 = __webpack_require__(88);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(97);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MemoriseController = exports.MemoriseController = function () {
	    function MemoriseController(BaseApi, $timeout, $stateParams) {
	        var _this = this;
	
	        (0, _classCallCheck3.default)(this, MemoriseController);
	
	        this.BaseApi = BaseApi;
	        this.baseId = $stateParams.baseId;
	        this.questionnaire = {};
	        if (this.baseId) {
	            this.BaseApi.getBase(this.baseId).then(function (response) {
	                _this.base = response.data || _this.base;
	            });
	        }
	    }
	
	    (0, _createClass3.default)(MemoriseController, [{
	        key: "getQuestionnaire",
	        value: function getQuestionnaire() {}
	    }]);
	    return MemoriseController;
	}();

/***/ },
/* 247 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-12 col-xs-12 col-sm-12 col-md-12\" ng-if=\"$ctrl.base\">\r\n        <div class=\"page-header\">\r\n            <h3 id=\"navbar\">Memorise {{$ctrl.base.value.name}}</h3>\r\n        </div>\r\n        <questionnaire></questionnaire>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 248 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);
//# sourceMappingURL=app.js.map