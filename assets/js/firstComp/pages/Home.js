import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Home extends React.Component {
  componentDidMount(){
    document.title = "CodingPhase.com | Welcome";
  }
  render(){
    const { match, location, history } = this.props
    return (
      <div className="content-area home">

        <div className="content item-a">
          <div className="video-background">
            <div className="video-foreground">
              <iframe id="homevideo" src="https://www.youtube.com/embed/45MSF6VmGcc?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=W0LHTWG-UmQ" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
          <h4>New Episode</h4>
          <h1>How To Dream Big But Stay Grounded</h1>
          <h3>WATCH <i className="fab fa-youtube"></i></h3>


        </div>
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
        <div className="content item-e">
          a
        </div>
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
