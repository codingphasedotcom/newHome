import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import coursesData from '../../data/courses.js'

export default class SingleCourse extends React.Component {

  render(){
    const { match, location, history } = this.props
    let current = coursesData.filter(item => item.slug === match.params.course)[0]
    console.log(current)
    return (
      <div className="content-area singleCourse">
        <div className="course-bg" style={{
          "backgroundImage": `linear-gradient(to bottom, #04040e 0%,rgba(0,0,0,.3) 50%,rgba(0,0,0,.3) 50%,#04040e 100%),linear-gradient(to right, #04040e 0%,rgba(0,0,0,0) 50%,rgba(0,0,0,0) 50%,#04040e 100%),url("${current.imgs.top}")`
        }}>
          <div className="quick-info">
            <h1>{current.title}</h1>
            <p>PBR&B salvia flannel yr, slow-carb bicycle rights sartorial hexagon. Semiotics normcore affogato, 8-bit vinyl vegan leggings. Copper mug portland 3 wolf moon schlitz. Trust fund tilde squid bespoke keytar whatever banh mi thundercats ethical.</p>
            <div className="time">17:02h</div>
            <div className="review">
              <div className="fire-circle"><i className="fas fa-fire"></i></div>
              <div className="number">8.7</div>
              <div className="small-number"><span>/</span>10</div>
            </div>
          </div>
        </div>
        <div id={'extras'}>
          <div className="info">

            <h3>Description</h3>
            <p>One of the most important projects for a developer is to build a real estate app because of so many different skills that are needed to create it. So for developers this is a must have for your portfolio. We go from learning how react works to building each component to filtering the listings.</p>

            <h3>Who is the target audience?</h3>
            <ul>
              <li>Any developer that is looking to learn react by building real apps</li>
            </ul>
            <h3>What Will I Learn?</h3>
            <ul>
              <li>Learn React</li>
              <li>Working with forms</li>
              <li>Filtering Data</li>
              <li>Breaking down layouts with components</li>
            </ul>
            <h3>Requirements</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
          </div>
          <div className="gallery">
          <h3>Media</h3>
            <a className="trailer" href="https://fast.wistia.net/embed/iframe/zot1y4vdwi?wvideo=zot1y4vdwi" style={{
              "backgroundImage": `linear-gradient(135deg,rgba(255, 11, 116,0) 0,rgba(255, 11, 116,0) 100%),url("https://embedwistia-a.akamaihd.net/deliveries/7a905075e2f829a3211015dbf45f4e1bff313335.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=54bbffe0")`,
              "backgroundRepeat": "no-repeat",
              "backgroundPosition": "center center",
              "backgroundSize": "cover"
            }}>
            <div className="hoverbox">
            </div>


            </a>
            <div className="img"> </div>
            <div className="img"> </div>
          </div>
          <div className="price">
          <h3>Price</h3>
          <div className="big-price">$40</div>
          <div className="line"></div>
          <div className="subscribe-btn">subscribe for unlimited courses $20/monthly</div>

          </div>
        </div>

      </div>
    )
  }
}
