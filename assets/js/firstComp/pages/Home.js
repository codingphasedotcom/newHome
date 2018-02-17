import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ReactGA from 'react-ga';
ReactGA.initialize('UA-37043736-10');

export default class Home extends React.Component {
  componentDidMount(){
    ReactGA.pageview(window.location.pathname + window.location.search);
    document.title = "CodingPhase.com | Welcome";
  }
  render(){
    const { match, location, history } = this.props
    return (
      <div className="content-area home">

        <a href="https://www.youtube.com/watch?v=bYLM_vB9Lpw" target="new" className="content item-a">
          <div className="video-background">
            <div className="video-foreground">
              <iframe id="homevideo" src="https://www.youtube.com/embed/bYLM_vB9Lpw?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=W0LHTWG-UmQ" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>

            <h4>New Episode</h4>
            <h1>Why you should quit your job to become a developer?</h1>
            <h3>WATCH <i className="fab fa-youtube"></i></h3>

        </a>

        <a href="/courses/react-quick-and-easy" className="content item-b">
          <h4>Javascript</h4>
          <h3>React Quick and Easy</h3>
        </a>
        <a href="/courses/life-after-learning-to-code" className="content item-c">
        <h4>Career</h4>
        <h3>Life After Learning To Code</h3>
        </a>
        <div className="content item-d news">
          <h4>News</h4>
          <h3>Life After Learning To Code</h3>
        </div>
        <a href="/courses/gulp-web-developer-starter-kit" className="content item-e">
          <h4>Javascript</h4>
          <h3>Gulp - WEB DEV STARTER KIT</h3>
        </a>
        <div className="content item-f news">
        <h4>News</h4>
        <h3>Life After Learning To Code</h3>
        <p> safasfwef werfw ewrwe we</p>
        </div>
        <div className="content item-g">
          <h2>The Jannia Scholarship</h2>
          <div className="apply-btn">Apply</div>
        </div>
        <div className="content item-h">
          a
        </div>
      </div>
    )
  }
}
