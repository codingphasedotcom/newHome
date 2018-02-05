import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {coursesData} from '../data/index.js'

export default class Courses extends React.Component {
  constructor(props){
    super(props)
    this.loopCourses = this.loopCourses.bind(this)
  }

  loopCourses(){
    let fakedata = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'a','b', 'c', 'd', 'e', 'f', 'g', 'h']

    return coursesData.map((course)=>{
      return (<div className="col" key={course.slug}>
        <div className="thumb" style={{
          "backgroundImage": `url("${course.imgs.thumbnail}")`
        }}>
        <Link exact to={`/courses/${course.slug}`} activeClassName="active">
          <div className='vig'></div>
        </Link>

          <h3>WATCH <i className="fab fa-youtube"></i></h3>
        </div>
        <div className="title">
          {course.title}
        </div>

      </div>)
    })
  }


  render(){
    return (
      <div className="content-area courses">
      <div className="course-bg" style={{
        "backgroundImage": `linear-gradient(to bottom, #04040e 0%,rgba(0,0,0,.3) 50%,rgba(0,0,0,.3) 50%,#04040e 100%),linear-gradient(to right, #04040e 0%,rgba(0,0,0,0) 50%,rgba(0,0,0,0) 50%,#04040e 100%),url("https://cdn.news.cr/wp-content/uploads/2016/02/web_development.jpg")`
      }}>
        <div className="quick-info">
          <h1>Courses</h1>


          <div className="filter-area">
            <div className="filter">
              <label>Category</label>
              <div className="select">
                <div className="selected">
                  Javascript
                </div>
                {/*<div className="dropdown">
                  <ul>
                    <li>Javascript</li>
                    <li>Javascript</li>
                    <li>PHP</li>
                    <li>RUBY</li>
                  </ul>
                </div>
                */}
              </div>
            </div>
            <div className="filter">
              <label>Type</label>
              <div className="select">
                <div className="selected">
                  Premium
                </div>
                {/* <div className="dropdown">
                  <ul>
                    <li>Premium</li>
                    <li>Free</li>
                  </ul>
                </div>
                */}
              </div>

            </div>
          </div>

        </div>
      </div>
        <div className="courses-grid">
          {this.loopCourses()}
        </div>

      </div>
    )
  }
}
