webpackJsonp([0],{

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(22);

var _Home = __webpack_require__(126);

var _Home2 = _interopRequireDefault(_Home);

var _Timeline = __webpack_require__(127);

var _Timeline2 = _interopRequireDefault(_Timeline);

var _Courses = __webpack_require__(121);

var _Courses2 = _interopRequireDefault(_Courses);

var _SingleCourse = __webpack_require__(122);

var _SingleCourse2 = _interopRequireDefault(_SingleCourse);

var _Gear = __webpack_require__(124);

var _Gear2 = _interopRequireDefault(_Gear);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      // const { match, location, history } = this.props
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          { className: 'layout' },
          _react2.default.createElement(
            'div',
            { className: 'sidemenu' },
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { exact: true, to: '/', activeClassName: 'active' },
              _react2.default.createElement('i', { className: 'fas fa-fire' }),
              _react2.default.createElement(
                'span',
                { className: 'text' },
                'CodingPhase'
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { to: '/courses', activeClassName: 'active' },
              _react2.default.createElement('i', { className: 'fa fa-book', 'aria-hidden': 'true' }),
              _react2.default.createElement(
                'span',
                { className: 'text' },
                'COURSES'
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { exact: true, to: '/timeline', activeClassName: 'active' },
              _react2.default.createElement('i', { className: 'far fa-address-card' }),
              _react2.default.createElement(
                'span',
                { className: 'text' },
                'Timeline'
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { exact: true, to: '/dash', activeClassName: 'active' },
              _react2.default.createElement('i', { className: 'fas fa-home' }),
              _react2.default.createElement(
                'span',
                { className: 'text' },
                'Dashboard'
              )
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://discordapp.com/invite/weTKutq', target: 'new' },
              _react2.default.createElement('i', { className: 'far fa-comments' }),
              _react2.default.createElement(
                'span',
                { className: 'text' },
                'CHAT'
              )
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://youtube.com/CodingPhase', target: 'new' },
              _react2.default.createElement('i', { className: 'fas fa-tv' }),
              _react2.default.createElement(
                'span',
                { className: 'text' },
                'CHANNEL'
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { exact: true, to: '/settings', activeClassName: 'active' },
              _react2.default.createElement('i', { className: 'fas fa-sliders-h' }),
              _react2.default.createElement(
                'span',
                { className: 'text' },
                'Settings'
              )
            )
          ),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/courses', component: _Courses2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/courses/:course', component: _SingleCourse2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/timeline', component: _Timeline2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/timeline/:path', component: _Timeline2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/timeline/:path/:hours', component: _Timeline2.default })
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(22);

var _index = __webpack_require__(69);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Courses = function (_React$Component) {
  _inherits(Courses, _React$Component);

  function Courses(props) {
    _classCallCheck(this, Courses);

    var _this = _possibleConstructorReturn(this, (Courses.__proto__ || Object.getPrototypeOf(Courses)).call(this, props));

    _this.loopCourses = _this.loopCourses.bind(_this);
    return _this;
  }

  _createClass(Courses, [{
    key: 'loopCourses',
    value: function loopCourses() {
      var fakedata = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

      return _index.coursesData.map(function (course) {
        return _react2.default.createElement(
          'div',
          { className: 'col', key: course.slug },
          _react2.default.createElement(
            'div',
            { className: 'thumb', style: {
                "backgroundImage": 'url("' + course.imgs.thumbnail + '")'
              } },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { exact: true, to: '/courses/' + course.slug, activeClassName: 'active' },
              _react2.default.createElement('div', { className: 'vig' })
            ),
            _react2.default.createElement(
              'h3',
              null,
              'WATCH ',
              _react2.default.createElement('i', { className: 'fab fa-youtube' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'title' },
            course.title
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'content-area courses' },
        _react2.default.createElement(
          'div',
          { className: 'course-bg', style: {
              "backgroundImage": 'linear-gradient(to bottom, #04040e 0%,rgba(0,0,0,.3) 50%,rgba(0,0,0,.3) 50%,#04040e 100%),linear-gradient(to right, #04040e 0%,rgba(0,0,0,0) 50%,rgba(0,0,0,0) 50%,#04040e 100%),url("https://cdn.news.cr/wp-content/uploads/2016/02/web_development.jpg")'
            } },
          _react2.default.createElement(
            'div',
            { className: 'quick-info' },
            _react2.default.createElement(
              'h1',
              null,
              'Courses'
            ),
            _react2.default.createElement(
              'div',
              { className: 'filter-area' },
              _react2.default.createElement(
                'div',
                { className: 'filter' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Category'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'select' },
                  _react2.default.createElement(
                    'div',
                    { className: 'selected' },
                    'Javascript'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'filter' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Type'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'select' },
                  _react2.default.createElement(
                    'div',
                    { className: 'selected' },
                    'Premium'
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'courses-grid' },
          this.loopCourses()
        )
      );
    }
  }]);

  return Courses;
}(_react2.default.Component);

exports.default = Courses;

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(22);

var _courses = __webpack_require__(68);

var _courses2 = _interopRequireDefault(_courses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SingleCourse = function (_React$Component) {
	_inherits(SingleCourse, _React$Component);

	function SingleCourse() {
		_classCallCheck(this, SingleCourse);

		return _possibleConstructorReturn(this, (SingleCourse.__proto__ || Object.getPrototypeOf(SingleCourse)).apply(this, arguments));
	}

	_createClass(SingleCourse, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    match = _props.match,
			    location = _props.location,
			    history = _props.history;

			var current = _courses2.default.filter(function (item) {
				return item.slug === match.params.course;
			})[0];
			console.log(current);
			return _react2.default.createElement(
				'div',
				{ className: 'content-area singleCourse' },
				_react2.default.createElement(
					'div',
					{
						className: 'course-bg',
						style: {
							backgroundImage: 'linear-gradient(to bottom, #04040e 0%,rgba(0,0,0,.3) 50%,rgba(0,0,0,.3) 50%,#04040e 100%),linear-gradient(to right, #04040e 0%,rgba(0,0,0,0) 50%,rgba(0,0,0,0) 50%,#04040e 100%),url("' + current.imgs.top + '")'
						} },
					_react2.default.createElement(
						'div',
						{ className: 'quick-info' },
						_react2.default.createElement(
							'h1',
							null,
							current.title
						),
						_react2.default.createElement(
							'p',
							null,
							current.description.short
						),
						_react2.default.createElement(
							'div',
							{ className: 'time' },
							'17:02h'
						),
						_react2.default.createElement(
							'div',
							{ className: 'review' },
							_react2.default.createElement(
								'div',
								{ className: 'fire-circle' },
								_react2.default.createElement('i', { className: 'fas fa-fire' })
							),
							_react2.default.createElement(
								'div',
								{ className: 'number' },
								'8.7'
							),
							_react2.default.createElement(
								'div',
								{ className: 'small-number' },
								_react2.default.createElement(
									'span',
									null,
									'/'
								),
								'10'
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ id: 'extras' },
					_react2.default.createElement(
						'div',
						{ className: 'info' },
						_react2.default.createElement(
							'h3',
							null,
							'Description'
						),
						_react2.default.createElement(
							'p',
							null,
							current.description.long
						),
						_react2.default.createElement(
							'h3',
							null,
							'Who is the target audience?'
						),
						_react2.default.createElement(
							'ul',
							null,
							current.description.target.map(function (item, i) {
								return _react2.default.createElement(
									'li',
									{ key: i },
									item
								);
							})
						),
						_react2.default.createElement(
							'h3',
							null,
							'What Will I Learn?'
						),
						_react2.default.createElement(
							'ul',
							null,
							current.description.learn.map(function (item, i) {
								return _react2.default.createElement(
									'li',
									{ key: i },
									item
								);
							})
						),
						_react2.default.createElement(
							'h3',
							null,
							'Requirements'
						),
						_react2.default.createElement(
							'ul',
							null,
							current.description.requirements.map(function (item, i) {
								return _react2.default.createElement(
									'li',
									{ key: i },
									item
								);
							})
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'gallery' },
						_react2.default.createElement(
							'h3',
							null,
							'Media'
						),
						_react2.default.createElement(
							'a',
							{
								className: 'trailer',
								href: 'https://fast.wistia.net/embed/iframe/zot1y4vdwi?wvideo=zot1y4vdwi',
								style: {
									backgroundImage: 'linear-gradient(135deg,rgba(255, 11, 116,0) 0,rgba(255, 11, 116,0) 100%),url("https://embedwistia-a.akamaihd.net/deliveries/7a905075e2f829a3211015dbf45f4e1bff313335.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=54bbffe0")',
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'center center',
									backgroundSize: 'cover'
								} },
							_react2.default.createElement('div', { className: 'hoverbox' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'img' },
							' '
						),
						_react2.default.createElement(
							'div',
							{ className: 'img' },
							' '
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'price' },
						_react2.default.createElement(
							'h3',
							null,
							'Price'
						),
						_react2.default.createElement(
							'div',
							{ className: 'big-price' },
							'$',
							current.price
						),
						_react2.default.createElement('div', { className: 'line' }),
						_react2.default.createElement(
							'a',
							{ href: current.url, className: 'buy-btn' },
							'Buy'
						),
						_react2.default.createElement(
							'a',
							{ href: 'https://codingphase.teachable.com/p/all-courses-subscription', className: 'subscribe-btn' },
							'subscribe for unlimited courses $20/monthly'
						)
					)
				)
			);
		}
	}]);

	return SingleCourse;
}(_react2.default.Component);

exports.default = SingleCourse;

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var timelineData = {
  frontend: [{
    title: "Atom Text Editor 101",
    status: true
  }, {
    title: "Learn HTML and CSS by building a cool social network",
    status: true
  }, {
    title: "Build a responsive app",
    status: true
  }, {
    title: "Advance CSS",
    status: true
  }, {
    title: "SASS Like a pro",
    status: true
  }, {
    title: "Pug Template Engine",
    status: true
  }, {
    title: "Future Proof Javascript",
    status: false
  }, {
    title: "JQuery",
    status: true
  }, {
    title: "Build A Restaurant Web App",
    status: true
  }, {
    title: "React JS Quick and Easy",
    status: true
  }]
};
exports.default = timelineData;

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gear = function (_React$Component) {
  _inherits(Gear, _React$Component);

  function Gear() {
    _classCallCheck(this, Gear);

    return _possibleConstructorReturn(this, (Gear.__proto__ || Object.getPrototypeOf(Gear)).apply(this, arguments));
  }

  _createClass(Gear, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'GEAR'
      );
    }
  }]);

  return Gear;
}(_react2.default.Component);

exports.default = Gear;

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(40);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(119);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootDiv = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), rootDiv);

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      return _react2.default.createElement(
        'div',
        { className: 'content-area home' },
        _react2.default.createElement(
          'div',
          { className: 'content item-a' },
          _react2.default.createElement(
            'div',
            { className: 'video-background' },
            _react2.default.createElement(
              'div',
              { className: 'video-foreground' },
              _react2.default.createElement('iframe', { id: 'homevideo', src: 'https://www.youtube.com/embed/45MSF6VmGcc?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=W0LHTWG-UmQ', frameborder: '0', allowfullscreen: true })
            )
          ),
          _react2.default.createElement(
            'h4',
            null,
            'New Episode'
          ),
          _react2.default.createElement(
            'h1',
            null,
            'How To Dream Big But Stay Grounded'
          ),
          _react2.default.createElement(
            'h3',
            null,
            'WATCH ',
            _react2.default.createElement('i', { className: 'fab fa-youtube' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'content item-b' },
          _react2.default.createElement(
            'h4',
            null,
            'Javascript'
          ),
          _react2.default.createElement(
            'h3',
            null,
            'React Quick and Easy'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'content item-c' },
          _react2.default.createElement(
            'h4',
            null,
            'Career'
          ),
          _react2.default.createElement(
            'h3',
            null,
            'Life After Learning To Code'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'content item-d news' },
          _react2.default.createElement(
            'h4',
            null,
            'News'
          ),
          _react2.default.createElement(
            'h3',
            null,
            'Life After Learning To Code'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'content item-e' },
          'a'
        ),
        _react2.default.createElement(
          'div',
          { className: 'content item-f news' },
          _react2.default.createElement(
            'h4',
            null,
            'News'
          ),
          _react2.default.createElement(
            'h3',
            null,
            'Life After Learning To Code'
          ),
          _react2.default.createElement(
            'p',
            null,
            ' safasfwef werfw ewrwe we'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'content item-g' },
          _react2.default.createElement(
            'h2',
            null,
            'The Jannia Scholarship'
          ),
          _react2.default.createElement(
            'div',
            { className: 'apply-btn' },
            'Apply'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'content item-h' },
          'a'
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(22);

var _index = __webpack_require__(69);

var _immutabilityHelper = __webpack_require__(150);

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Timeline = function (_React$Component) {
  _inherits(Timeline, _React$Component);

  function Timeline(props) {
    _classCallCheck(this, Timeline);

    var _this = _possibleConstructorReturn(this, (Timeline.__proto__ || Object.getPrototypeOf(Timeline)).call(this, props));

    _this.clickedNext = function () {
      var path = _this.props.match.params.path;

      _this.props.history.push('/timeline/' + path + '/' + _this.state.hours);
    };

    _this.CoursesComp = function () {
      if (_this.props.match.params.path !== undefined && _this.props.match.params.hours !== undefined) {
        console.log(_index.timelineData);
        var courseLoop = function courseLoop() {
          return _this.state.timelineData.frontend.map(function (course, i) {
            return _react2.default.createElement(
              'div',
              { className: 'item', key: course.title },
              _react2.default.createElement(
                'div',
                { className: 'course' },
                course.title
              ),
              _react2.default.createElement(
                'div',
                { onClick: _this.checkCompleted.bind(null, i), className: 'check ' + (course.status == true ? "completed" : "incomplete") },
                '' + (course.status == true ? "completed" : "incomplete")
              )
            );
          });
        };
        return _react2.default.createElement(
          'div',
          { id: 'FrontEnd' },
          _react2.default.createElement(
            'h4',
            null,
            'Courses'
          ),
          courseLoop()
        );
      }
    };

    _this.PathComp = function () {
      console.log('hours = ');
      console.log(_this.props.match.params.hours);
      if (_this.props.match.params.hours == undefined && _this.props.match.params.path == undefined) {
        return _react2.default.createElement(
          'div',
          { className: 'choose-path' },
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              { onClick: _this.choosePath.bind(null, 'frontend') },
              'FrontEnd Development'
            ),
            _react2.default.createElement(
              'li',
              { onClick: _this.choosePath.bind(null, 'backend') },
              'BackEnd Development'
            ),
            _react2.default.createElement(
              'li',
              { onClick: _this.choosePath.bind(null, 'fullstack') },
              'Fullstack Development'
            ),
            _react2.default.createElement(
              'li',
              { onClick: _this.choosePath.bind(null, 'game') },
              'Game Development'
            ),
            _react2.default.createElement(
              'li',
              { onClick: _this.choosePath.bind(null, 'mobile') },
              'Mobile Development'
            ),
            _react2.default.createElement(
              'li',
              { onClick: _this.choosePath.bind(null, 'software') },
              'Software Development'
            ),
            _react2.default.createElement(
              'li',
              { onClick: _this.choosePath.bind(null, 'machine') },
              'Machine Learning'
            )
          )
        );
      }
    };

    _this.HoursComp = function () {
      if (_this.props.match.params.path !== undefined && _this.props.match.params.hours == undefined) {
        return _react2.default.createElement(
          'div',
          { id: 'hoursPerWeek' },
          _react2.default.createElement(
            'h3',
            null,
            'How many hours per week can you devote?'
          ),
          _react2.default.createElement('input', { type: 'text', className: 'hours', onChange: _this.chooseHours, value: _this.state.hours }),
          _react2.default.createElement(
            'div',
            { className: 'next-btn', onClick: _this.clickedNext },
            'Next'
          )
        );
      }
    };

    _this.state = {
      path: 'nopath',
      hours: '',
      timelineData: _index.timelineData
    };
    _this.clickedBtn = _this.clickedBtn.bind(_this);
    _this.choosePath = _this.choosePath.bind(_this);
    _this.chooseHours = _this.chooseHours.bind(_this);
    _this.checkCompleted = _this.checkCompleted.bind(_this);
    return _this;
  }

  _createClass(Timeline, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.match.params.path) {
        this.setState({
          path: this.props.match.params.path
        });
        if (this.props.match.params.hours) {
          this.setState({
            path: this.props.match.params.path,
            hours: this.props.match.params.hours
          });
        }
      }
    }
  }, {
    key: 'clickedBtn',
    value: function clickedBtn() {
      this.props.history.push('/some/path');
    }
  }, {
    key: 'choosePath',
    value: function choosePath(path) {
      var _this2 = this;

      this.setState({
        path: path
      }, function () {
        _this2.props.history.push('/timeline/' + path);
        console.log(_this2.state);
      });
      console.log('clicked on ' + path);
    }
  }, {
    key: 'chooseHours',
    value: function chooseHours(e) {
      var _this3 = this;

      if (e.target.value.replace(/\s/g, "") == "") {
        this.setState({
          hours: 1
        }, function () {
          return console.log(_this3.state);
        });
      }{
        this.setState({
          hours: e.target.value
        }, function () {
          return console.log(_this3.state);
        });
      }
    }
  }, {
    key: 'checkCompleted',
    value: function checkCompleted(course) {
      var _this4 = this;

      var currentPath = this.state.timelineData[this.state.path];
      var currentStatus = currentPath[course].status;
      console.log('currentStatus:');
      console.log(currentStatus);
      var newArray = (0, _immutabilityHelper2.default)(this.state.timelineData[this.state.path], _defineProperty({}, course, {
        $merge: { status: !currentStatus }
      }));
      console.log();
      this.setState({
        timelineData: _defineProperty({}, this.state.path, newArray)
      }, function () {
        return console.log(_this4.state);
      });
      console.log('clicked on ' + course);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      return _react2.default.createElement(
        'div',
        { className: 'content-area timeline' },
        _react2.default.createElement(
          'div',
          { className: 'course-bg', style: {
              "backgroundImage": 'linear-gradient(to bottom, #04040e 0%,rgba(0,0,0,.3) 50%,rgba(0,0,0,.3) 50%,#04040e 100%),linear-gradient(to right, #04040e 0%,rgba(0,0,0,0) 50%,rgba(0,0,0,0) 50%,#04040e 100%),url("https://cdn.news.cr/wp-content/uploads/2016/02/web_development.jpg")'
            } },
          _react2.default.createElement(
            'div',
            { className: 'quick-info' },
            _react2.default.createElement(
              'h1',
              null,
              this.state.path != 'nopath' ? this.props.match.params.path : "Timeline"
            ),
            this.PathComp(),
            this.HoursComp(),
            this.CoursesComp()
          )
        )
      );
    }
  }]);

  return Timeline;
}(_react2.default.Component);

exports.default = Timeline;

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var coursesData = [{
	title: 'JQUERY – A Beginners best friend',
	price: 25,
	hours: 4,
	category: ['Javascript'],
	slug: 'jquery-a-beginners-best-friend',
	url: 'https://codingphase.teachable.com/p/jquery-a-beginners-best-friend/',
	description: {
		short: 'With simple syntax and open coding standards, developers can shorten the time it takes to deploy an application or site. We go from learning how jQuery works to building robust jQuery UI components that developers can plug into their websites.',
		long: 'Developers find jQuery intuitive and easy to learn – this library is built on shorter, simpler code, after all. Developers don’t have to be experts in programming or Web Design to create great styles for their sites. Any developer who has spent hours coding and testing CSS files will surely appreciate the simple implementation that jQuery brings to the table.',
		target: ['Any developer who is looking to learn jQuery by building real apps.', 'Junior Developers & Senior Developers', 'Designers', 'Content Editors'],
		learn: ['JQuery Events', 'DOM Manipulation', 'Learning AJAX', 'Signup now if you want to write better looking code!'],
		requirements: ['HTML', 'CSS', 'Very basic JavaScript']
	},
	imgs: {
		top: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:1440/https://www.filepicker.io/api/file/7hYPQ7CaRtmAAYnDhS5U',
		thumbnail: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/EIjWpAGpQOGJXmBGzJvt',
		extra: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc'
	}
}, {
	title: 'Future Proof Javascript',
	category: ['Javascript'],
	slug: 'future-proof-javascript',
	imgs: {
		top: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc',
		thumbnail: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc',
		extra: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc'
	}
}, {
	title: 'PHP 7 and Laravel Master course',
	price: 40,
	hours: 20,
	category: ['PHP', 'Laravel'],
	slug: 'php-7-and-laravel',
	url: 'https://codingphase.teachable.com/p/learn-php-7-and-laravel-master-course',
	description: {
		short: 'Learn the skills to help you on your journey as a web developer with all of today’s best practices. This course is made for those that wish to get a job as soon as possible.',
		long: 'Go from beginner to pro in just a few hours learning PHP 7 the latest and greatest features from one of the most popular web programming language. You will learn everything from the basics to more advanced PHP programming using real world examples to show you how to use this to create your own dynamic personal projects.',
		target: ['Any developer who is looking to learn PHP & Laravel by building real applications.', 'Junior Developers & Senior Developers'],
		learn: ['Fundamentals of the PHP syntaxFundamentals of the PHP syntax', 'Object Orientated Programming with PHP', 'Learn CRUD with MySQL, PHP & Laravel', 'Signup now if you want to write better looking code!'],
		requirements: ['Basic understanding / knowledge of how to use a computer', 'Basic HTML & CSS']
	},
	imgs: {
		top: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/E8ULhysScmJnU2cmhNaA',
		thumbnail: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/E8ULhysScmJnU2cmhNaA',
		extra: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc'
	}
}, {
	title: 'Learn ESNEXT – ES6, ES7, ES8',
	price: 40,
	hours: 20,
	category: ['Javascript'],
	slug: 'learn-esnext–es6-es7-8',
	url: 'https://codingphase.teachable.com/p/esnext-es6-es7-es8',
	description: {
		short: 'JavaScript is one of the most popular web languages which continues to evolve every year. With this course you will always be up-to-date with every ES version released.',
		long: 'Go from learning the basics of ES6, ES7 & ES8 which is the current official released version of JavaScript. I will break down ES6 in way which is easy to understand and give you real life examples which can be applied in real world applications.',
		target: ['Any developer who is is looking to learn the basics of ES6, ES7 & ES8', 'Junior Developers & Senior Developers'],
		learn: ['ESNext Syntax', 'How to transpile your code', 'How to use modern Javascript', 'Get the foundation you need to use frameworks like React'],
		requirements: ['Basic understanding / knowledge of how to use a computer', 'Basic JavaScript']
	},
	imgs: {
		top: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:1440/https://www.filepicker.io/api/file/f20K53T7RBe4T0U61yGK',
		thumbnail: 'https://www.filepicker.io/api/file/RxSk03j0QBGtZ5s6C2pq',
		extra: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc'
	}
}, {
	title: 'Learn HTML and CSS by Building a Cool Social Network',
	price: 25,
	hours: 8,
	category: ['HTML', 'CSS'],
	slug: 'learn-html-and-css',
	url: 'https://codingphase.teachable.com/p/learn-html-and-css-by-building-a-cool-social-network',
	description: {
		short: 'This is the number one course to learn HTML and CSS. I will show you the skills that you need to be ready to start applying for a position as a front-end developer.',
		long: 'HTML and CSS are the two most important front-end languages for a new developer to learn. If you’ve always wanted to build websites, but didn’t know where to start this course will help you learn your first two languages quickly and easily by building a Facebook clone.',
		target: ['Anyone who wants to get hired as a front-end developer.', 'Junior Developers & Senior Developers'],
		learn: ['HTML', 'CSS', 'Convert PSD or any design to HTML and CSS'],
		requirements: ['Basic understanding / knowledge of a computer', 'A Text Editor like Visual Studio Code, Atom, Brackets, Subline or Notepad++']
	},
	imgs: {
		top: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:1440/https://www.filepicker.io/api/file/n380clO5RsGLweLYyID1',
		thumbnail: 'https://www.filepicker.io/api/file/IO7EpSNXQSKA5yHO0pgj',
		extra: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc'
	}
}];
exports.default = coursesData;

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timelineData = exports.coursesData = undefined;

var _courses = __webpack_require__(68);

var _courses2 = _interopRequireDefault(_courses);

var _timeline = __webpack_require__(123);

var _timeline2 = _interopRequireDefault(_timeline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.coursesData = _courses2.default;
exports.timelineData = _timeline2.default;

/***/ })

},[125]);