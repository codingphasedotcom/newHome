import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {timelineData} from '../data/index.js'
import update from 'immutability-helper';

export default class Timeline extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      path: 'nopath',
      hours: '',
      timelineData
    }
    this.clickedBtn = this.clickedBtn.bind(this)
    this.choosePath = this.choosePath.bind(this)
    this.chooseHours = this.chooseHours.bind(this)
    this.checkCompleted = this.checkCompleted.bind(this)
  }
  componentWillMount() {
    if(this.props.match.params.path) {
      this.setState({
        path: this.props.match.params.path
      })
      if(this.props.match.params.hours) {
        this.setState({
          path: this.props.match.params.path,
          hours: this.props.match.params.hours
        })

      }
    }
  }
  clickedBtn(){
    this.props.history.push('/some/path')
  }


  choosePath(path){
    this.setState({
      path
    }, () => {
      this.props.history.push(`/timeline/${path}`)
      console.log(this.state)})
    console.log(`clicked on ${path}`)
  }
  chooseHours(e){
    if(e.target.value.replace(/\s/g,"") == "") {
      this.setState({
        hours: 1
      }, () => console.log(this.state))
    } {
      this.setState({
        hours: e.target.value
      }, () => console.log(this.state))
    }

  }
  checkCompleted(course){
    let currentPath = this.state.timelineData[this.state.path]
    let currentStatus = currentPath[course].status
    console.log(`currentStatus:`)
    console.log(currentStatus)
    let newArray = update(this.state.timelineData[this.state.path],{
          [course]: {
            $merge: { status: !currentStatus}
          }
      }
    );
    console.log()
    this.setState({
      timelineData: {
        [this.state.path]: newArray
      }
    }, () => console.log(this.state))
    console.log(`clicked on ${course}`)
  }
  clickedNext = () => {
    let {path} = this.props.match.params
    this.props.history.push(`/timeline/${path}/${this.state.hours}`)
  }
  CoursesComp = () => {
    if(this.props.match.params.path !== undefined && this.props.match.params.hours !== undefined) {
      console.log(timelineData)
      const courseLoop = () =>{
        return this.state.timelineData.frontend.map((course, i) =>{
          return(
            <div className="item" key={course.title}>
              <div className="course">
              {course.title}</div>
              <div  onClick={this.checkCompleted.bind(null, i)} className={`check ${(course.status == true) ? "completed" : "incomplete"}`}>
              {`${(course.status == true) ? "completed" : "incomplete"}`}</div>
            </div>
          )
        })
    }
    return(
      <div id="FrontEnd">
        <h4>Courses</h4>
        {courseLoop()}
      </div>
    )
  }
}
  PathComp = () => {
    console.log( `hours = `)
    console.log( this.props.match.params.hours)
    if(this.props.match.params.hours == undefined && this.props.match.params.path == undefined ){
      return(
        <div className="choose-path">
          <ul>
            <li onClick={this.choosePath.bind(null, 'frontend')}>
              FrontEnd Development
            </li>
            <li onClick={this.choosePath.bind(null, 'backend')}>
              BackEnd Development
            </li>
            <li onClick={this.choosePath.bind(null, 'fullstack')}>Fullstack Development</li>
            <li onClick={this.choosePath.bind(null, 'game')}>
              Game Development
            </li>
            <li onClick={this.choosePath.bind(null, 'mobile')}>
              Mobile Development
            </li>
            <li onClick={this.choosePath.bind(null, 'software')}>
              Software Development
            </li>
            <li onClick={this.choosePath.bind(null, 'machine')}>
              Machine Learning
            </li>
          </ul>
        </div>
      )
    }

  }
  HoursComp = () => {
    if(this.props.match.params.path !== undefined && this.props.match.params.hours == undefined){
    return(<div id="hoursPerWeek">
      <h3>
        How many hours per week can you devote?
      </h3>
      <input type="text" className="hours" onChange={this.chooseHours} value={this.state.hours}/>
      <div className="next-btn" onClick={this.clickedNext}>
        Next
      </div>
    </div>)
  }
  }

  render(){
    const { match, location, history } = this.props
    return (
      <div className="content-area timeline">
      <div className="course-bg" style={{
        "backgroundImage": `linear-gradient(to bottom, #04040e 0%,rgba(0,0,0,.3) 50%,rgba(0,0,0,.3) 50%,#04040e 100%),linear-gradient(to right, #04040e 0%,rgba(0,0,0,0) 50%,rgba(0,0,0,0) 50%,#04040e 100%),url("https://cdn.news.cr/wp-content/uploads/2016/02/web_development.jpg")`
      }}>
        <div className="quick-info">
          <h1>{(this.state.path != 'nopath') ? this.props.match.params.path : "Timeline"}</h1>

          {this.PathComp()}
          {this.HoursComp()}
          {this.CoursesComp()}
        </div>
      </div>
      </div>
    )
  }
}
