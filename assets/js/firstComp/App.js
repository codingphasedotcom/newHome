import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import Home from './pages/Home.js'
import Timeline from './pages/Timeline.js'
import Courses from './courses/Courses.js'
import SingleCourse from './courses/items/SingleCourse.js'
import Gear from './gear/Gear.js'
import ReactGA from 'react-ga';
ReactGA.initialize('UA-37043736-10');


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      mobileMenu: false
    }
    this.clickedMobile = this.clickedMobile.bind(this)
  }
  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  clickedMobile(){
    this.setState({
      mobileMenu: !this.state.mobileMenu
    },() =>{
      console.log(this.state.mobileMenu)
      console.log(this.state)
    })

  }
  render(){
    // const { match, location, history } = this.props
    return (
      <Router>
        <div>
        <div className="mobile-btn" onClick={this.clickedMobile}>
          <i className="fas fa-bars"></i>
        </div>
        <div className={`mobile-menu ${(this.state.mobileMenu) ? 'active': ''}`}>
          <NavLink exact to="/" activeClassName="active" onClick={this.clickedMobile}>
            <i className="fa fa-fire"></i>
            <span className="text">
              CodingPhase
            </span>
          </NavLink>
          <NavLink  to="/courses" activeClassName="active" onClick={this.clickedMobile}>
            <i className="fa fa-book" aria-hidden="true"></i>
            <span className="text">
              COURSES
            </span>
          </NavLink>
          <NavLink exact to="/timeline" activeClassName="active" onClick={this.clickedMobile}>
            <i className="far fa-address-card"></i>
            <span className="text">
              Timeline
            </span>
          </NavLink>
          <a href="https://codingphase.teachable.com/courses/enrolled" >
            <i className="fas fa-home"></i>
            <span className="text">
              Members Area
            </span>
          </a>
          <a href="https://discordapp.com/invite/weTKutq" target="new">
            <i className="far fa-comments"></i>
            <span className="text">
              CHAT
            </span>
          </a>


          <a href="https://youtube.com/CodingPhase" target="new">
            <i className="fas fa-tv"></i>
            <span className="text">
              CHANNEL
            </span>
          </a>
          <NavLink exact to="/settings" activeClassName="active" onClick={this.clickedMobile}>
            <i className="fas fa-sliders-h"></i>
            <span className="text">
              Settings
            </span>
          </NavLink>
        </div>

        <div className="layout">

          <div className="sidemenu">
            <NavLink exact to="/" activeClassName="active">
              <i className="fa-code"></i>
              <span className="text">
                CodingPhase
              </span>
            </NavLink>
            <NavLink  to="/courses" activeClassName="active">
              <i className="fa-language" aria-hidden="true"></i>
              <span className="text">
                Courses
              </span>
            </NavLink>
            <NavLink exact to="/timeline" activeClassName="active">
              <i className="fa-timeline"></i>
              <span className="text">
                Timeline
              </span>
            </NavLink>
            <a href="https://codingphase.teachable.com/courses/enrolled">
              <i className="fa-team"></i>
              <span className="text">
                Members Area
              </span>
            </a>
            <a href="https://discordapp.com/invite/weTKutq" target="new">
              <i className="fa-chat"></i>
              <span className="text">
                Chat
              </span>
            </a>


            <a href="https://youtube.com/CodingPhase" target="new">
              <i className="fa-youtube"></i>
              <span className="text">
                Channel
              </span>
            </a>
            <NavLink exact to="/settings" activeClassName="active">
              <i className="fa-settings"></i>
              <span className="text">
                Settings
              </span>
            </NavLink>
          </div>

          <Route exact path="/" component={Home}/>
          <Route exact path="/courses" component={Courses}/>
          <Route exact path="/courses/:course" component={SingleCourse}/>
          <Route exact path="/timeline" component={Timeline} />
          <Route exact path="/timeline/:path" component={Timeline} />
          <Route exact path="/timeline/:path/:hours" component={Timeline} />
        </div>
        </div>
      </Router>
    )
  }
}
