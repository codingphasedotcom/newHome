webpackJsonp([0],{

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(19);

var _Home = __webpack_require__(123);

var _Home2 = _interopRequireDefault(_Home);

var _Timeline = __webpack_require__(124);

var _Timeline2 = _interopRequireDefault(_Timeline);

var _Courses = __webpack_require__(116);

var _Courses2 = _interopRequireDefault(_Courses);

var _SingleCourse = __webpack_require__(117);

var _SingleCourse2 = _interopRequireDefault(_SingleCourse);

var _Gear = __webpack_require__(121);

var _Gear2 = _interopRequireDefault(_Gear);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      mobileMenu: false
    };
    _this.clickedMobile = _this.clickedMobile.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'clickedMobile',
    value: function clickedMobile() {
      var _this2 = this;

      this.setState({
        mobileMenu: !this.state.mobileMenu
      }, function () {
        console.log(_this2.state.mobileMenu);
        console.log(_this2.state);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      // const { match, location, history } = this.props
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'mobile-btn', onClick: this.clickedMobile },
            _react2.default.createElement('i', { className: 'fas fa-bars' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'mobile-menu ' + (this.state.mobileMenu ? 'active' : '') },
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { exact: true, to: '/', activeClassName: 'active', onClick: this.clickedMobile },
              _react2.default.createElement('i', { className: 'fas fa-fire' }),
              _react2.default.createElement(
                'span',
                { className: 'text' },
                'CodingPhase'
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { to: '/courses', activeClassName: 'active', onClick: this.clickedMobile },
              _react2.default.createElement('i', { className: 'fa fa-book', 'aria-hidden': 'true' }),
              _react2.default.createElement(
                'span',
                { className: 'text' },
                'COURSES'
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { exact: true, to: '/timeline', activeClassName: 'active', onClick: this.clickedMobile },
              _react2.default.createElement('i', { className: 'far fa-address-card' }),
              _react2.default.createElement(
                'span',
                { className: 'text' },
                'Timeline'
              )
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://codingphase.teachable.com/courses/enrolled' },
              _react2.default.createElement('i', { className: 'fas fa-home' }),
              _react2.default.createElement(
                'span',
                { className: 'text' },
                'Members Area'
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
              { exact: true, to: '/settings', activeClassName: 'active', onClick: this.clickedMobile },
              _react2.default.createElement('i', { className: 'fas fa-sliders-h' }),
              _react2.default.createElement(
                'span',
                { className: 'text' },
                'Settings'
              )
            )
          ),
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
                'a',
                { href: 'https://codingphase.teachable.com/courses/enrolled' },
                _react2.default.createElement('i', { className: 'fas fa-home' }),
                _react2.default.createElement(
                  'span',
                  { className: 'text' },
                  'Members Area'
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
                'a',
                { href: 'https://teespring.com/stores/codingphase' },
                _react2.default.createElement('i', { className: 'fas fa-shopping-cart' }),
                _react2.default.createElement(
                  'span',
                  { className: 'text' },
                  'Merchandise'
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
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(19);

var _reactGa = __webpack_require__(36);

var _reactGa2 = _interopRequireDefault(_reactGa);

var _index = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_reactGa2.default.initialize('UA-37043736-10');

var Courses = function (_React$Component) {
  _inherits(Courses, _React$Component);

  function Courses(props) {
    _classCallCheck(this, Courses);

    var _this = _possibleConstructorReturn(this, (Courses.__proto__ || Object.getPrototypeOf(Courses)).call(this, props));

    _this.clickedSelect = function (name) {
      console.log('clicked');
      if (name == 'category') {
        _this.setState({
          selectCategory: true,
          selectType: false
        });
      } else if (name == 'type') {
        _this.setState({
          selectCategory: false,
          selectType: true
        });
      }
    };

    _this.filteringCategory = function (name) {
      var newData;
      if (_this.state.currentType !== 'all') {
        if (name !== 'All') {
          newData = _index.coursesData.filter(function (item) {
            return item.type == _this.state.currentType;
          });
          newData = newData.filter(function (item) {
            return item.category.includes(name);
          });
        } else {
          newData = _index.coursesData;
        }
      } else {
        if (name !== 'All') {
          newData = _index.coursesData.filter(function (item) {
            return item.category.includes(name);
          });
        } else {
          newData = _index.coursesData;
        }
      }

      _this.setState({
        currentCategory: name,
        filteredData: newData,
        selectCategory: false
      }, function () {
        console.log('FILTERED DATA:');
        console.log(_this.state);
      });
    };

    _this.filteringType = function (name) {
      var newData;
      if (_this.state.currentCategory !== 'All') {
        newData = _index.coursesData.filter(function (item) {
          return item.category.includes(_this.state.currentCategory);
        });
        if (name !== 'all') {
          newData = newData.filter(function (item) {
            return item.type == name;
          });
        }
      } else {
        if (name !== 'all') {
          newData = _index.coursesData.filter(function (item) {
            return item.type == name;
          });
        } else {
          newData = _index.coursesData;
        }
      }

      _this.setState({
        currentType: name,
        filteredData: newData,
        selectType: false
      }, function () {
        console.log('FILTERED DATA:');
        console.log(_this.state);
      });
    };

    _this.loopCourses = function () {
      return _this.state.filteredData.map(function (course) {
        return _react2.default.createElement(
          'div',
          { className: 'col', key: course.slug },
          _react2.default.createElement(
            'div',
            { className: 'thumb', style: {
                "backgroundImage": 'url("' + course.imgs.thumbnail + '")'
              } },
            _react2.default.createElement(
              'a',
              { href: '/courses/' + course.slug },
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
    };

    _this.state = {
      filteredData: _index.coursesData,
      selectCategory: false,
      currentCategory: 'all',
      selectType: false,
      currentType: 'all'
    };
    return _this;
  }

  _createClass(Courses, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _reactGa2.default.pageview(window.location.pathname + window.location.search);
      document.title = "CodingPhase.com | All Courses";
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

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
                    { className: 'selected', onClick: function onClick() {
                        return _this2.clickedSelect('category');
                      } },
                    this.state.currentCategory
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'dropdown ' + (this.state.selectCategory ? 'active' : '') },
                    _react2.default.createElement(
                      'ul',
                      null,
                      _index.categoriesData.map(function (item) {
                        return _react2.default.createElement(
                          'li',
                          { onClick: function onClick() {
                              return _this2.filteringCategory(item);
                            } },
                          item
                        );
                      })
                    )
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

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(19);

var _index = __webpack_require__(38);

var _reactGa = __webpack_require__(36);

var _reactGa2 = _interopRequireDefault(_reactGa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_reactGa2.default.initialize('UA-37043736-10');

var SingleCourse = function (_React$Component) {
	_inherits(SingleCourse, _React$Component);

	function SingleCourse() {
		_classCallCheck(this, SingleCourse);

		return _possibleConstructorReturn(this, (SingleCourse.__proto__ || Object.getPrototypeOf(SingleCourse)).apply(this, arguments));
	}

	_createClass(SingleCourse, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_reactGa2.default.pageview(window.location.pathname + window.location.search);
			var _props = this.props,
			    match = _props.match,
			    location = _props.location,
			    history = _props.history;

			document.title = 'CodingPhase.com | ' + match.params.course;
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    match = _props2.match,
			    location = _props2.location,
			    history = _props2.history;

			var current = _index.coursesData.filter(function (item) {
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

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var timelineData = ['All', 'Ruby', 'HTML', 'CSS', 'Javascript', 'PHP', 'PYTHON', 'SASS'];
timelineData = timelineData.sort();
exports.default = timelineData;

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var coursesData = [{
	title: 'Learn Node JS - Javascript Fullstack',
	price: 30,
	hours: 10,
	type: 'premium',
	category: ['Javascript'],
	slug: 'learn-node-js',
	url: 'https://codingphase.teachable.com/p/node-adonis-js-javascript-fullstack-course',
	description: {
		short: 'Learn Node JS the right way with a structure that will help you not only understand node but also learn how web development works.',
		long: '',
		target: ['Any developer who is looking to learn Node.', 'Great for developers that love Javascript', 'Any level of developer'],
		learn: ['Learn to build full applications with Node', 'Understand the basics of MySQL', 'Learn By Building Projects', 'Production Ready Applications'],
		requirements: ['HTML', 'CSS', 'Very basic JavaScript', 'ES6']
	},
	imgs: {
		top: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:1440/https://www.filepicker.io/api/file/4dhwfogkTKifToz3LNvt',
		thumbnail: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:1440/https://www.filepicker.io/api/file/4dhwfogkTKifToz3LNvt',
		extra: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc'
	}
}, {
	title: 'Learn Python',
	price: 0,
	hours: 10,
	type: 'premium',
	category: ['Python'],
	slug: 'learn-python',
	url: 'https://codingphase.teachable.com/p/learn-python-for-high-paying-job',
	description: {
		short: '',
		long: '',
		target: ['Any developer who is looking to learn Python.', 'Any level of developer'],
		learn: ['Python Syntax', 'Object Oriented Python', 'Learn By Building Projects', 'Production Ready Applications'],
		requirements: ['none']
	},
	imgs: {
		top: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:1440/https://www.filepicker.io/api/file/LTmPBa3wSjimveGcsI1P',
		thumbnail: 'https://www.filepicker.io/api/file/jDUkOMFVQdCZOw7YdPpm',
		extra: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc'
	}
}, {
	title: 'Learn React by Building a Craigslist Clone',
	price: 30,
	hours: 10,
	type: 'premium',
	category: ['Javascript'],
	slug: 'learn-react-by-building-a-craigslist-clone',
	url: 'https://codingphase.teachable.com/p/learn-react-by-building-a-craigslist-clone',
	description: {
		short: '',
		long: '',
		target: ['Any developer who is looking to learn React.', 'Any level of developer'],
		learn: ['React Router', 'Passing props to components', 'Single Page Apps', 'Production Ready Applications'],
		requirements: ['HTML', 'CSS', 'Very basic JavaScript', 'React']
	},
	imgs: {
		top: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:1440/https://www.filepicker.io/api/file/aXJiG9uTXm0MdSpswLfg',
		thumbnail: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:1440/https://www.filepicker.io/api/file/aXJiG9uTXm0MdSpswLfg',
		extra: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc'
	}
}, {
	title: 'Gulp - Web Developer Starter Kit',
	price: 10,
	hours: 4,
	type: 'premium',
	category: ['Javascript'],
	slug: 'gulp-web-developer-starter-kit',
	url: 'https://codingphase.teachable.com/p/gulp-web-developer-starter-kit',
	description: {
		short: '',
		long: '',
		target: ['Any developer who is looking to learn gulp and webpack.', 'Junior Developers'],
		learn: ['Learn to setup gulp', 'Compile sass to css', 'work with task runner', 'Use webpack as a module bundler'],
		requirements: ['HTML', 'CSS', 'Very basic JavaScript']
	},
	imgs: {
		top: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/nEeS9uvsROWb1mKHQAXg',
		thumbnail: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/nEeS9uvsROWb1mKHQAXg',
		extra: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc'
	}
}, {
	title: 'JQUERY – A Beginners best friend',
	price: 25,
	hours: 4,
	type: 'premium',
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
	title: 'PHP 7 and Laravel Master course',
	price: 40,
	hours: 20,
	type: 'premium',
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
	price: 30,
	hours: 20,
	type: 'premium',
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
	type: 'premium',
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
}, {
	title: 'PUG JS – Template Engine',
	price: 20,
	hours: 2,
	type: 'premium',
	category: ['HTML', 'CSS'],
	slug: 'pug-js–template-engine',
	url: 'https://codingphase.teachable.com/p/pug-js-template-engine',
	description: {
		short: '',
		long: 'This course teaches you how to write HTML with the PUG template engine and make your work flow faster. PUG used to be known as JADE but due to legal reasons it was renamed to PUG.',
		target: ['All levels of developers from beginner to experts', 'Anyone who is bored with HTML and want to make it fun again!'],
		learn: ['Learn how to write loops', 'render template on node js', 'export it to HTML'],
		requirements: ['Basic understanding / knowledge of a computer', 'Some experience with HTML', 'basic JavaScript']
	},
	imgs: {
		top: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:1440/https://www.filepicker.io/api/file/sr5ACgqQc6KzC1MNKK7L',
		thumbnail: 'https://www.filepicker.io/api/file/JIlwezxNS3OU0h4oqKc8',
		extra: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc'
	}
}, {
	title: 'HTML & CSS: Dashboard',
	price: 0,
	hours: 3,
	type: 'free',
	category: ['HTML', 'CSS'],
	slug: 'html-and-css-dashboard',
	url: 'https://codingphase.teachable.com/p/html-css-dashboard',
	description: {
		short: 'This course is great for beginners and experienced developers who are wanting to enhance their portfolio. Take this course and build a dashboard with HTML and CSS.',
		long: 'Have you taken a Web Development course but now you don’t what projects to build? Look no more this is one of those projects that will test your skills as a developer. Learn HTML and some advance features in CSS with SASS.',
		target: ['Anyone that wants to practice what they learn'],
		learn: ['HTML', 'CSS', 'SASS'],
		requirements: ['Basic understanding / knowledge of a computer', 'Some experience with HTML']
	},
	imgs: {
		top: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:1440/https://www.filepicker.io/api/file/Iv1OP7vQvWYNAY2bn2vA',
		thumbnail: 'https://www.filepicker.io/api/file/kNEkTTsQmSwSo7f1AqZh',
		extra: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc'
	}
}, {
	title: 'React – Quick and Easy',
	price: 30,
	hours: 8,
	type: 'premium',
	category: ['Javascript'],
	slug: 'react-quick-and-easy',
	url: 'https://codingphase.teachable.com/p/react-quick-and-easy',
	description: {
		short: 'Learn the number one framework which will guarantee you get that dream job. React is a skill that will put you more in demand in the modern web development industry. Learn React by building one big application which is improved throughout the course. (Real Estate)',
		long: 'One of the most important projects for a developer is to build a real estate app because of the many different skills that are needed to create it. For developers this is a must have app for your portfolio.',
		target: ['This project is for everyone from junior to senior developer.', 'If you need to learn react js quick this is the course for you'],
		learn: ['We go from learning how react works to building each component to filtering the listings.', 'Working with forms', 'click events', 'local state'],
		requirements: ['Basic understanding / knowledge of a computer', 'Basic HTML', 'Basic CSS', 'Basic Javascript']
	},
	imgs: {
		top: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:1440/https://www.filepicker.io/api/file/1Ypdq3ZCSpqFS7UgE4Lj',
		thumbnail: 'https://www.filepicker.io/api/file/RX9eR6VTrKKkdIak3Xmr',
		extra: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc'
	}
}, {
	title: 'Ruby on Rails',
	price: 30,
	hours: 6.5,
	type: 'premium',
	category: ['Ruby'],
	slug: 'ruby-on-rails',
	url: 'https://codingphase.teachable.com/p/ruby-on-rails',
	description: {
		short: 'Go from a beginner to an advanced developer in Ruby on Rails. One of the most important projects for a developer is to build a real blog app because of the many different skills needed to create it.',
		long: 'Since its introduction, Ruby on Rails has rapidly become one of the most powerful and popular web tools for building sites. Ruby on Rails developers have some of the highest salaries in the development world and there is a high demand. Once you have learnt all the necessary skills we will build a blog app which is a must have for your portfolio piece.',
		target: ['Junior & Senior Developers who are eager and willing to learn new skills.', 'Signup now if you want to write better looking code!'],
		learn: ['Rails basics', 'build a blog', 'Controllers', 'Rendering Views', 'Models'],
		requirements: ['Basic understanding / knowledge of a computer', 'Basics of HTML', 'Basics of CSS']
	},
	imgs: {
		top: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:1440/https://www.filepicker.io/api/file/xFNouFlVRBWcZzBugvSP',
		thumbnail: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:1440/https://www.filepicker.io/api/file/xFNouFlVRBWcZzBugvSP',
		extra: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc'
	}
}, {
	title: 'Animations for Developers',
	price: 40,
	hours: 2.5,
	type: 'premium',
	category: ['CSS', 'Javascript'],
	slug: 'animations-for-developers',
	url: 'https://codingphase.teachable.com/p/animation-for-developers',
	description: {
		short: 'This course will get you ready to start working for major digital agencies that have large corporate clients.',
		long: 'Ever seen a website and wondered wow how did they make something like this? There’s so many animations and they look so smooth and I didn’t know you can do that on the web. Well it’s time to learn how to do those types of sites.',
		target: ['Web Developers who want to make their website look more professional with animations and transitions.'],
		learn: ['Learn Animations for your website!', 'CSS Transitions such as buttons & dropdown menus', 'CSS Animations such as keyframes + more', 'Signup now if you want better looking animations!'],
		requirements: ['Basic understanding / knowledge of a computer', 'Basics of HTML', 'Basics of CSS']
	},
	imgs: {
		top: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:1440/https://www.filepicker.io/api/file/KRLmovesSLKayl3PIw84',
		thumbnail: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:1440/https://www.filepicker.io/api/file/KRLmovesSLKayl3PIw84',
		extra: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc'
	}
}, {
	title: 'Learn Ruby',
	price: 30,
	hours: 5,
	type: 'premium',
	category: ['Ruby'],
	slug: 'learn-ruby',
	url: 'https://codingphase.teachable.com/p/learn-ruby-backend-developer-master-course',
	description: {
		short: 'The beauty of learning ruby programming language is that it is a great way to get all the necessary skills to learning to code. These skills you learn can be applied to any other programming language as you will have learnt the fundamentals of programming.',
		long: 'Since its introduction, Ruby has rapidly become one of the most powerful and popular web tools for building sites. Ruby is one of the highest paying programming languages. Ruby has become every developer’s favourite language because of how easy it is to learn. Ruby developers make an average of $90,000 dollars per year.',
		target: ['Brand new developers who are eager and willing to learn new skills.', 'Developers who want a refresh on Ruby', 'Signup now if you want to write better looking code!'],
		learn: ['Basic fundamentals of Rudy', 'Object Oriented Programming', 'Installing Ruby and Rails on your computer'],
		requirements: ['Basic understanding / knowledge of a computer']
	},
	imgs: {
		top: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:1440/https://www.filepicker.io/api/file/ur4bFGquS4GrSsPrNa9l',
		thumbnail: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:1440/https://www.filepicker.io/api/file/ur4bFGquS4GrSsPrNa9l',
		extra: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc'
	}
}, {
	title: 'Build a Portfolio',
	price: 30,
	hours: 7.5,
	type: 'premium',
	category: ['HTML', 'CSS', 'SASS', 'Javascript'],
	slug: 'build-a-portfolio',
	url: 'https://codingphase.teachable.com/p/sideproject-build-a-static-site-portfolio',
	description: {
		short: 'We will teach you how to build your own personal portfolio and deploy it onto the web!',
		long: '',
		target: ['Developers who want to build their own portfolio.Developers who want to build their own portfolio.', 'Signup now if you want to create your own portfolio and learn how to deploy it onto the web!'],
		learn: ['You will learn how to create your own Resume in HTML & CSS', 'You build out your own Homepage, Portfolio page & contact page'],
		requirements: ['Basic understanding / knowledge of a computer', 'HTML', 'SASS', 'CSS GRIDS and Flexbox']
	},
	imgs: {
		top: 'https://www.filepicker.io/api/file/JnUnZHCoQka0cLJxkyWk',
		thumbnail: 'https://www.filepicker.io/api/file/JnUnZHCoQka0cLJxkyWk',
		extra: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc'
	}
}, {
	title: 'Advance CSS with Flexbox and CSS Grid',
	price: 25,
	hours: 2,
	type: 'premium',
	category: ['HTML', 'CSS', 'SASS'],
	slug: 'advance-CSS-with-flexbox-and-css-grid',
	url: 'https://codingphase.teachable.com/p/learn-advance-css-with-flexbox-and-css-grid-course',
	description: {
		short: 'Have you been coding CSS for a sometime and are familiar with it? Well take your CSS skills a step further with this advanced course.',
		long: 'CSS can be a nightmare when trying to master it, and maintaining large projects. Having a good grasp on the fundamentals and advance CSS is an absolute must for serious front-end developers.',
		target: ['Any advanced CSS developer looking to further your skills', 'Signup now if you want to write better looking code!'],
		learn: ['You will learn about complex CSS', 'advanced responsive design techniques', 'flexbox and grids'],
		requirements: ['Basic understanding / knowledge of a computer', 'HTML', 'SASS', 'CSS']
	},
	imgs: {
		top: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:1440/https://www.filepicker.io/api/file/NhiYPJFHRTJrENtaaW7T',
		thumbnail: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/Lo0qcAkTcKYlkdSS3YRu',
		extra: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc'
	}
}, {
	title: 'Learn Parcel JS',
	price: 10,
	hours: 1,
	type: 'premium',
	category: ['HTML', 'CSS', 'SASS', 'Javascript'],
	slug: 'learn-parcel-js',
	url: 'https://codingphase.teachable.com/p/learn-parceljs-web-application-bundler-master-course',
	description: {
		short: 'This course gives you a unique experience and focuses only on front-end web development. Firstly, you will install all necessary packages to get started with Parcel. You will then learn about CSS and SASS styling then you will build two applications in React & VueJS.',
		long: '',
		target: ['Developers who want to learn about CSS & SASS Styling.', 'Developers who are eager and willing to learn new skills.', 'Signup now if you want to write better looking code!'],
		learn: ['CSS', 'SASS', 'React JS', 'VUE JS'],
		requirements: ['Basic understanding / knowledge of a computer', 'HTML', 'Javascript', 'CSS']
	},
	imgs: {
		top: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:1440/https://www.filepicker.io/api/file/NhiYPJFHRTJrENtaaW7T',
		thumbnail: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/KWuCwUPCSJa4ta4Djt4k',
		extra: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc'
	}
}, {
	title: 'Build a Restaurant Web App',
	price: 25,
	hours: 11,
	type: 'premium',
	category: ['HTML', 'CSS', 'SASS', 'Javascript'],
	slug: 'build-a-restaurant-web-app',
	url: 'https://codingphase.teachable.com/p/build-a-restaurant-web-app',
	description: {
		short: 'We will teach you how to build your own personal restaurant web app! First you will start off by installing all the necessary tools & setting up your project. You will then build the restaurant layout, with HTML & CSS. The restaurant webpages will then be dynamic & you will create a slider for the app reviews.',
		long: 'Put everything you know as a web developer to build this awesome site. Do you want to have that standout piece in your portfolio? Then enrol in this course now & get started.',
		target: ['Developers who want to build their own restaurant app.', 'Signup now if you want to write better looking code!'],
		learn: ['You will learn how to create your own restaurant app in HTML, CSS, JavaScript & frontend frameworks', 'How to make your restaurant pages dynamic.'],
		requirements: ['Basic understanding / knowledge of a computer', 'Basic HTML & CSS', 'Basic JavaScript knowledge']
	},
	imgs: {
		top: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:1440/https://www.filepicker.io/api/file/Z8Gy23sSwGBBA7ivCaGK',
		thumbnail: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/Uca0XZZzQTWI9Xtpxc6n',
		extra: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc'
	}
}, {
	title: 'Hyperapp JS',
	price: 0,
	hours: 2,
	type: 'free',
	category: ['Javascript'],
	slug: 'hyperapp-js',
	url: 'https://codingphase.teachable.com/p/hyperapp-js-course',
	description: {
		short: 'Will teach you how to build your own personal restaurant web app! First you will start off by installing all the necessary tools & setting up your project. You will then build the restaurant layout, with HTML & CSS.',
		long: 'Put everything you know as a web developer to build this awesome site. Do you want to have that standout piece in your portfolio? Then enrol in this course now & get started.',
		target: ['Developers who want to build their own restaurant app.', 'Signup now if you want to write better looking code!'],
		learn: ['How to render to the page', 'Passing down props', 'local state and global state', 'Styling the restaurant app'],
		requirements: ['Basic understanding / knowledge of a computer', 'Basic HTML & CSS', 'Basic JavaScript knowledge']
	},
	imgs: {
		top: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/6Ran3aSBQgGhroAzqMmb',
		thumbnail: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/6Ran3aSBQgGhroAzqMmb',
		extra: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc'
	}
}, {
	title: 'SASS like a Pro',
	price: 15,
	hours: 2,
	type: 'premium',
	category: ['Javascript'],
	slug: 'sass-like-a-pro',
	url: 'https://codingphase.teachable.com/p/sass-like-a-pro',
	description: {
		short: 'Have you been coding CSS for a sometime and are familiar with it? Well take your CSS skills a step further with this advanced SASS course. Enrol in this course now if you desire to style your websites or clients projects at record lightning speed.',
		long: 'CSS can be a nightmare when trying to master it, and maintaining large projects. Having a good grasp on the fundamentals and SASS is an absolute must for serious front-end developers. With SASS you will be able to build any websites that scale to any size.',
		target: ['Any advanced CSS developer looking to further your skills in SASS', 'Signup now if you want to write better looking code!'],
		learn: ['You will learn about how SASS can improve your workflow and productivity when it comes to styling websites.', 'How to style websites for clients from scratch.'],
		requirements: ['This isn’t a beginner course – You should be confident in CSS before taking the course']
	},
	imgs: {
		top: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:1440/https://www.filepicker.io/api/file/qY6uupWSSdaAdrDEdMS4',
		thumbnail: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/1YohZyMRgSpjHBktepOY',
		extra: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc'
	}
}, {
	title: 'Terminal for Developers',
	price: 20,
	hours: 2,
	type: 'premium',
	category: ['Javascript'],
	slug: 'terminal-for-developers',
	url: 'https://codingphase.teachable.com/p/terminal-for-developers',
	description: {
		short: 'In this course we will teach you how to use the terminal command with BASH (Bourne Again Shell). This is one of the most popular terminal shell that a lot of professional programmer’s use.',
		long: 'This course is developed to take you from beginner to advance with your terminal skills. You will understand how to navigate through the terminal by creating, renaming and deleting files.',
		target: ['Beginners who want to master the terminal', 'Programmers who want to follow along to upgrade your skill by learning new tricks and tips', 'Signup now if you want to master the terminal!'],
		learn: ['Why the terminal exists', 'What is the terminal', 'Mastering the terminal command'],
		requirements: ['Basic understanding / knowledge of a computer']
	},
	imgs: {
		top: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/lxmPrJ9CRoCk6dqmqMDL',
		thumbnail: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/lxmPrJ9CRoCk6dqmqMDL',
		extra: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc'
	}
}, {
	title: 'Future-Proof JavaScript',
	price: 25,
	hours: 10,
	type: 'premium',
	category: ['Javascript'],
	slug: 'future-proof-javascript',
	url: 'https://codingphase.teachable.com/p/future-proof-javascript',
	description: {
		short: 'JavaScript is one of the most popular web languages which continues to evolve every year. With this course you will learn all the basic syntax of JavaScript and when to use them with real life examples. At the end of the course we put all these practices in use while creating a Pokémon battle game.',
		long: 'We start with the fundamentals of JavaScript and work our way up to advanced programming without relying on any libraries or frameworks at all. Whether you are a beginner or an establish programmer there is something for everyone.',
		target: ['Any developer who is looking to learn the basics JavaScript', 'Beginner Developers', 'Signup now if you want to write better looking code!'],
		learn: ['Fundamentals of basic programming', 'DOM Manipulation', 'Notification'],
		requirements: ['Basic understanding / knowledge of a computer']
	},
	imgs: {
		top: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:1440/https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc',
		thumbnail: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:1440/https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc',
		extra: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc'
	}
}, {
	title: 'Object Oriented Programming with Javascript',
	price: 15,
	hours: 1,
	type: 'premium',
	category: ['Javascript'],
	slug: 'object-oriented-programming-with-javascript',
	url: 'https://codingphase.teachable.com/p/object-oriented-programming-with-javascript-course',
	description: {
		short: 'JavaScript is one of the most popular web languages which continues to evolve every year. With this course you will learn all the basic syntax of JavaScript and when to use them with real life examples.',
		long: 'We start with the fundamentals of JavaScript and work our way up to advanced programming without relying on any libraries or frameworks at all. Whether you are a beginner or an establish programmer there is something for everyone.',
		target: ['Any developer who is looking to learn the basics JavaScript', 'Beginner Developers', 'Signup now if you want to write better looking code!'],
		learn: ['Fundamentals of basic programming', 'prototypical inheritance', 'function constructors', 'prototype'],
		requirements: ['Basic understanding / knowledge of a computer']
	},
	imgs: {
		top: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/ChkWGZGITLWXM8SrTy8F',
		thumbnail: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/ChkWGZGITLWXM8SrTy8F',
		extra: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc'
	}
}, {
	title: 'Atom Text Editor 101',
	price: 0,
	hours: 1,
	type: 'free',
	category: ['Javascript', 'HTML', 'CSS'],
	slug: 'atom-text-editor-101',
	url: 'https://codingphase.teachable.com/p/visual-studio-code-101',
	description: {
		short: '',
		long: 'Learn how to use a text editor to write code for any programming language.',
		target: ['Anyone who wants to learn to code needs to learn to use a code editor.'],
		learn: ['Write code in your computer'],
		requirements: ['Basic understanding / knowledge of a computer']
	},
	imgs: {
		top: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/vPlRExWiR6eQAGSqA6RS',
		thumbnail: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/vPlRExWiR6eQAGSqA6RS',
		extra: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc'
	}
}, {
	title: 'Life After Learning To Code',
	price: 50,
	hours: 2,
	type: 'premium',
	category: ['Javascript', 'HTML', 'CSS'],
	slug: 'life-after-learning-to-code',
	url: 'https://codingphase.teachable.com/p/life-after-learning-to-code',
	description: {
		short: '',
		long: "So you spent hours-weeks-months to learn to code... Great now it's your time to learn how to get a job or make money on the side.",
		target: ['Anyone who wants to learn how to make money after learning to code'],
		learn: ['Learn the sites that will help you get jobs'],
		requirements: ['Basic understanding / knowledge of a computer']
	},
	imgs: {
		top: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/KUH9GZUR5yU0o9Svs7TK',
		thumbnail: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/KUH9GZUR5yU0o9Svs7TK',
		extra: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc'
	}
}, {
	title: 'How to make money independently?',
	price: 30,
	hours: 6,
	type: 'premium',
	category: ['Javascript', 'HTML', 'CSS'],
	slug: 'how-to-make-money-independently',
	url: 'https://codingphase.teachable.com/p/how-to-make-money-independently',
	description: {
		short: '',
		long: "Make money independently as a developer with the skills you already know.",
		target: ['Anyone who wants to learn how to make money after learning to code'],
		learn: ['Learn the sites that will help you get jobs'],
		requirements: ['Basic understanding / knowledge of a computer']
	},
	imgs: {
		top: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/Ha2MxbYsRmikojG1L23V',
		thumbnail: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/Ha2MxbYsRmikojG1L23V',
		extra: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc'
	}
}, {
	title: 'Build a Responsive Web App?',
	price: 15,
	hours: 6,
	type: 'premium',
	category: ['Javascript', 'HTML', 'CSS'],
	slug: 'build-a-responsive-web-app',
	url: 'https://codingphase.teachable.com/p/how-to-make-money-independently',
	description: {
		short: 'Learn to make your websites work with any device.',
		long: "",
		target: ['Anyone who wants to learn how to make money after learning to code'],
		learn: ['Learn the sites that will help you get jobs'],
		requirements: ['Basic understanding / knowledge of a computer']
	},
	imgs: {
		top: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/fooaw7iZRfiKKnq5FbXb',
		thumbnail: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/fooaw7iZRfiKKnq5FbXb',
		extra: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc'
	}
}];

// {
//   title: 'Future Proof Javascript',
//   category: ['Javascript'],
//   slug: 'future-proof-javascript',
//   imgs: {
//     top: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc',
//     thumbnail: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc',
//     extra: 'https://www.filepicker.io/api/file/FLqG3OQsSayfGXQWIllc'
//   }
// }
exports.default = coursesData;

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var timelineData = {
  frontend: [{
    title: "Atom Text Editor 101",
    hours: 1,
    status: false
  }, {
    title: "Learn HTML and CSS by building a cool social network",
    hours: 8,
    status: false
  }, {
    title: "Build a responsive app",
    hours: 6,
    status: false
  }, {
    title: "Advance CSS",
    hours: 2,
    status: false
  }, {
    title: "SASS Like a pro",
    hours: 2,
    status: false
  }, {
    title: "HTML & CSS: Dashboard",
    hours: 2,
    status: false
  }, {
    title: "Future Proof Javascript",
    hours: 10,
    status: false
  }, {
    title: "Gulp - Web Developer Starter Kit",
    hours: 2,
    status: false
  }, {
    title: "SideProject: Build a static site portfolio",
    hours: 7,
    status: false
  }, {
    title: "Pug Template Engine",
    hours: 2,
    status: false
  }, {
    title: "JQuery",
    hours: 4,
    status: false
  }, {
    title: "Object Oriented Programming with Javascript",
    hours: 2,
    status: false
  }, {
    title: "Learn ESNEXT – ES6, ES7, ES8",
    hours: 2,
    status: false
  }, {
    title: "Build A Restaurant Web App",
    hours: 11,
    status: false
  }, {
    title: "React JS Quick and Easy",
    hours: 8,
    status: false
  }, {
    title: "Learn React by Building a Craigslist Clone",
    hours: 15,
    status: false
  }],
  backend: [{
    title: "Atom Text Editor 101",
    hours: 1,
    status: false
  }, {
    title: "PHP 7 and Laravel Master Course",
    hours: 20,
    status: false
  }, {
    title: "Ruby",
    hours: 7,
    status: false
  }, {
    title: "Ruby on Rails",
    hours: 7,
    status: false
  }],
  fullstack: [{
    title: "Atom Text Editor 101",
    hours: 1,
    status: false
  }, {
    title: "Learn HTML and CSS by building a cool social network",
    hours: 8,
    status: false
  }, {
    title: "Build a responsive app",
    hours: 6,
    status: false
  }, {
    title: "Advance CSS",
    hours: 2,
    status: false
  }, {
    title: "SASS Like a pro",
    hours: 2,
    status: false
  }, {
    title: "HTML & CSS: Dashboard",
    hours: 2,
    status: false
  }, {
    title: "Future Proof Javascript",
    hours: 10,
    status: false
  }, {
    title: "Gulp - Web Developer Starter Kit",
    hours: 2,
    status: false
  }, {
    title: "SideProject: Build a static site portfolio",
    hours: 7,
    status: false
  }, {
    title: "Pug Template Engine",
    hours: 2,
    status: false
  }, {
    title: "JQuery",
    hours: 4,
    status: false
  }, {
    title: "Object Oriented Programming with Javascript",
    hours: 2,
    status: false
  }, {
    title: "Learn ESNEXT – ES6, ES7, ES8",
    hours: 2,
    status: false
  }, {
    title: "Build A Restaurant Web App",
    hours: 11,
    status: false
  }, {
    title: "React JS Quick and Easy",
    hours: 8,
    status: false
  }, {
    title: "Learn React by Building a Craigslist Clone",
    hours: 15,
    status: false
  }, {
    title: "PHP 7 and Laravel Master Course",
    hours: 20,
    status: false
  }, {
    title: "Ruby",
    hours: 7,
    status: false
  }, {
    title: "Ruby on Rails",
    hours: 7,
    status: false
  }, {
    title: "Learn Node JS - Javascript Fullstack",
    hours: 20,
    status: false
  }]
};
exports.default = timelineData;

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(19);

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

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(37);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(114);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootDiv = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), rootDiv);

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(19);

var _reactGa = __webpack_require__(36);

var _reactGa2 = _interopRequireDefault(_reactGa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_reactGa2.default.initialize('UA-37043736-10');

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _reactGa2.default.pageview(window.location.pathname + window.location.search);
      document.title = "CodingPhase.com | Welcome";
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
        { className: 'content-area home' },
        _react2.default.createElement(
          'a',
          { href: 'https://www.youtube.com/watch?v=bYLM_vB9Lpw', target: 'new', className: 'content item-a' },
          _react2.default.createElement(
            'div',
            { className: 'video-background' },
            _react2.default.createElement(
              'div',
              { className: 'video-foreground' },
              _react2.default.createElement('iframe', { id: 'homevideo', src: 'https://www.youtube.com/embed/bYLM_vB9Lpw?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=W0LHTWG-UmQ', frameborder: '0', allowfullscreen: true })
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
            'Why you should quit your job to become a developer?'
          ),
          _react2.default.createElement(
            'h3',
            null,
            'WATCH ',
            _react2.default.createElement('i', { className: 'fab fa-youtube' })
          )
        ),
        _react2.default.createElement(
          'a',
          { href: '/courses/react-quick-and-easy', className: 'content item-b' },
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
          'a',
          { href: '/courses/life-after-learning-to-code', className: 'content item-c' },
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
          'a',
          { href: '/courses/gulp-web-developer-starter-kit', className: 'content item-e' },
          _react2.default.createElement(
            'h4',
            null,
            'Javascript'
          ),
          _react2.default.createElement(
            'h3',
            null,
            'Gulp - WEB DEV STARTER KIT'
          )
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

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(19);

var _index = __webpack_require__(38);

var _immutabilityHelper = __webpack_require__(145);

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

var _reactGa = __webpack_require__(36);

var _reactGa2 = _interopRequireDefault(_reactGa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_reactGa2.default.initialize('UA-37043736-10');

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
				console.log(_this.props.match.params.path);
				var path = void 0;
				switch (_this.props.match.params.path) {
					case 'frontend':
						path = _this.state.timelineData.frontend;
						break;
					case 'backend':
						path = _this.state.timelineData.backend;
						break;
					case 'fullstack':
						path = _this.state.timelineData.fullstack;
						break;
					case 'mobile':
						path = _this.state.timelineData.mobile;
						break;
					case 'game':
						path = _this.state.timelineData.game;
						break;
					case 'software':
						path = _this.state.timelineData.software;
						break;
					case 'machine':
						path = _this.state.timelineData.machine;
						break;
					default:
						path = _this.state.timelineData.frontend;
				}
				console.log(path);
				var courseLoop = function courseLoop() {
					return path.map(function (course, i) {
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
								{
									onClick: _this.checkCompleted.bind(null, i),
									className: 'check ' + (course.status == true ? 'completed' : 'incomplete') },
								'' + (course.status == true ? 'completed' : 'incomplete')
							)
						);
					});
				};
				return _react2.default.createElement(
					'div',
					{ id: 'FrontEnd' },
					_react2.default.createElement(
						'div',
						{ className: 'splitter' },
						_react2.default.createElement(
							'div',
							null,
							courseLoop()
						),
						_this.totalHoursLeft(),
						_react2.default.createElement(
							'div',
							{ className: 'ads' },
							_react2.default.createElement('ins', { className: 'adsbygoogle',
								style: { "display": "block" },
								'data-ad-client': 'ca-pub-1876888588409540',
								'data-ad-slot': '6100356041',
								'data-ad-format': 'auto' })
						)
					)
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
					_react2.default.createElement('input', {
						type: 'text',
						className: 'hours',
						onChange: _this.chooseHours,
						value: _this.state.hours
					}),
					_react2.default.createElement(
						'div',
						{ className: 'next-btn', onClick: _this.clickedNext },
						'Next'
					)
				);
			}
		};

		_this.totalHoursLeft = function () {
			var incoCourses = _this.state.timelineData[_this.state.path].filter(function (item) {
				return item.status == false;
			});
			var totalHoursArr = [];
			incoCourses.forEach(function (item) {
				totalHoursArr.push(item.hours);
			});
			console.log(totalHoursArr);
			var totalHoursLeft = totalHoursArr.reduce(function (a, b) {
				return a + b;
			}, 0);
			var hoursPerDay = _this.props.match.params.hours / 5;
			var daysLeft = totalHoursLeft / hoursPerDay;
			return _react2.default.createElement(
				'div',
				{ className: 'totalDays' },
				_react2.default.createElement(
					'h4',
					null,
					'At your pace per week it will take you'
				),
				_react2.default.createElement(
					'h1',
					null,
					daysLeft.toFixed(2)
				),
				_react2.default.createElement(
					'h4',
					null,
					'days'
				),
				_react2.default.createElement(
					'h4',
					null,
					'hours per week: ',
					_this.props.match.params.hours
				),
				_react2.default.createElement(
					'h4',
					null,
					'hours per day: ',
					hoursPerDay
				),
				_react2.default.createElement(
					'h4',
					null,
					'Average user studies: 5 days per week'
				),
				_react2.default.createElement(
					'h4',
					null,
					'Total hours left to study: ',
					totalHoursLeft
				)
			);
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
		key: 'componentDidMount',
		value: function componentDidMount() {
			_reactGa2.default.pageview(window.location.pathname + window.location.search);
			document.title = "CodingPhase.com | Timeline";
			(adsbygoogle = window.adsbygoogle || []).push({});
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

			if (e.target.value.replace(/\s/g, '') == '') {
				this.setState({
					hours: 1
				}, function () {
					return console.log(_this3.state);
				});
			}
			{
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
					{
						className: 'course-bg',
						style: {
							backgroundImage: 'linear-gradient(to bottom, #04040e 0%,rgba(0,0,0,.3) 50%,rgba(0,0,0,.3) 50%,#04040e 100%),linear-gradient(to right, #04040e 0%,rgba(0,0,0,0) 50%,rgba(0,0,0,0) 50%,#04040e 100%),url("https://cdn.news.cr/wp-content/uploads/2016/02/web_development.jpg")'
						} },
					_react2.default.createElement(
						'div',
						{ className: 'quick-info' },
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								'h1',
								null,
								this.state.path != 'nopath' ? this.props.match.params.path : 'Timeline'
							),
							this.PathComp(),
							this.HoursComp(),
							this.CoursesComp()
						)
					)
				)
			);
		}
	}]);

	return Timeline;
}(_react2.default.Component);

exports.default = Timeline;

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categoriesData = exports.timelineData = exports.coursesData = undefined;

var _coursesData = __webpack_require__(119);

var _coursesData2 = _interopRequireDefault(_coursesData);

var _timelineData = __webpack_require__(120);

var _timelineData2 = _interopRequireDefault(_timelineData);

var _categoriesData = __webpack_require__(118);

var _categoriesData2 = _interopRequireDefault(_categoriesData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.coursesData = _coursesData2.default;
exports.timelineData = _timelineData2.default;
exports.categoriesData = _categoriesData2.default;

/***/ })

},[122]);