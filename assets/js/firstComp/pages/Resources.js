import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Home extends React.Component {
  render(){
    return (
      <div>
      <section className="jumbo">
        <div className="container">
          <h6>The community has spoken</h6>
          <h1>CodingPhase is every developer's favorite community</h1>
          <h2>More than 10,000+ students world wide</h2>
        </div>
      </section>
      <section className="latest-video">
        <div className="container">
          <div className="heading">Courses</div>
          <div className="row">
            <div className="col-sm-4">
              <div className="languages javascript">Javascript</div>
              <div className="languages crystal">CRYSTAL</div>
            </div>
            <div className="col-sm-4">
              <div className="languages html">HTML &amp; CSS</div>
              <div className="languages nodejs">Node JS</div>
            </div>
            <div className="col-sm-4">
              <div className="languages php">PHP</div>
              <div className="languages ruby">RUBY</div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-md-offset-1">
              <div className="circle" style={{background: 'url("https://s3.amazonaws.com/uifaces/faces/twitter/jm_denis/128.jpg")', backgroundSize: 'cover'}} />
            </div>
            <div className="col-md-2">
              <div className="circle" style={{background: 'url("https://s3.amazonaws.com/uifaces/faces/twitter/jm_denis/128.jpg")', backgroundSize: 'cover'}} />
            </div>
            <div className="col-md-2">
              <div className="circle" style={{background: 'url("https://s3.amazonaws.com/uifaces/faces/twitter/jm_denis/128.jpg")', backgroundSize: 'cover'}} />
            </div>
            <div className="col-md-2">
              <div className="circle" style={{background: 'url("https://s3.amazonaws.com/uifaces/faces/twitter/jm_denis/128.jpg")', backgroundSize: 'cover'}} />
            </div>
            <div className="col-md-2">
              <div className="circle" style={{background: 'url("https://s3.amazonaws.com/uifaces/faces/twitter/jm_denis/128.jpg")', backgroundSize: 'cover'}} />
            </div>
          </div>
          <div className="bubble">swag</div>
        </div>
      </section>
      <section className="plans">
        <div className="container">
          <div className="col-sm-4">
            <div className="plan">
              <div className="title">Monthly</div>
              <div className="features">Over 20+ Courses</div>
              <div className="features">Frontend and Backend</div>
              <div className="features">New Videos Added Every Day</div>
              <div className="features">
                <div className="price">$20</div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="plan">
              <div className="title">Yearly</div>
              <div className="features">Over 20+ Courses</div>
              <div className="features">Frontend and Backend</div>
              <div className="features">New Videos Added Every Day</div>
              <div className="features">
                <div className="price">$150</div>
                <div className="savings">save $90 dollars</div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="plan">
              <div className="title">Lifetime</div>
              <div className="features">Over 20+ Courses</div>
              <div className="features">Frontend and Backend</div>
              <div className="features">New Videos Added Every Day</div>
              <div className="features">Priority Support</div>
              <div className="features">
                <div className="price">$300</div>
                <div className="savings">Unlimited Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <pre>id="chat"</pre>
        <form>
          <input id="msg" placeholder="message..." />
          <input type="submit" defaultValue="Send" />
        </form>
      </div>
      </div>
    )
  }
}
