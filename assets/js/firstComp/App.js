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

export default class App extends React.Component {
  componentDidMount() {
  }
  render(){
    // const { match, location, history } = this.props
    return (
      <Router>
        <div className="layout">
          <div className="sidemenu">
            <NavLink exact to="/" activeClassName="active">
              <i className="fas fa-fire"></i>
              <span className="text">
                CodingPhase
              </span>
            </NavLink>
            <NavLink  to="/courses" activeClassName="active">
              <i className="fa fa-book" aria-hidden="true"></i>
              <span className="text">
                COURSES
              </span>
            </NavLink>
            <NavLink exact to="/timeline" activeClassName="active">
              <i className="far fa-address-card"></i>
              <span className="text">
                Timeline
              </span>
            </NavLink>
            <NavLink exact  to="/dash" activeClassName="active" >
              <i className="fas fa-home"></i>
              <span className="text">
                Dashboard
              </span>
            </NavLink>
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
            <NavLink exact to="/settings" activeClassName="active">
              <i className="fas fa-sliders-h"></i>
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
      </Router>
    )
  }
}
