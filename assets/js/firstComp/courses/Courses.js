import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {coursesData, categoriesData} from '../data/index.js'

export default class Courses extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      filteredData : coursesData,
      selectCategory: false,
      currentCategory: 'all',
      selectType: false,
      currentType: 'all'
    }
  }
  componentDidMount(){
    document.title = "CodingPhase.com | All Courses";
  }
  componentWillMount(){

  }
  clickedSelect = (name) => {
    console.log('clicked')
    if(name == 'category'){
      this.setState({
        selectCategory: true,
        selectType: false
      })
    } else if(name == 'type') {
      this.setState({
        selectCategory: false,
        selectType: true
      })
    }
  }
  filteringCategory = (name) =>{
    var newData;
    if(this.state.currentType !== 'all'){
      if(name !== 'All'){
        newData = coursesData.filter((item) => item.type == this.state.currentType)
        newData = newData.filter((item) => item.category.includes(name))
      } else{
        newData = coursesData
      }
    } else{
      if(name !== 'All'){
        newData = coursesData.filter((item) => item.category.includes(name))
      } else{
        newData = coursesData
      }
    }


    this.setState({
      currentCategory: name,
      filteredData: newData,
      selectCategory: false
    },() => {
      console.log('FILTERED DATA:')
      console.log(this.state)
    })
  }
  filteringType = (name) =>{
    var newData;
    if(this.state.currentCategory !== 'All'){
      newData = coursesData.filter((item) => item.category.includes(this.state.currentCategory))
      if(name !== 'all') {
        newData = newData.filter((item) => item.type == name)
      }
    } else {
      if(name !== 'all') {
        newData = coursesData.filter((item) => item.type == name)
      } else {
        newData = coursesData
      }
    }


    this.setState({
      currentType: name,
      filteredData: newData,
      selectType: false
    },() => {
      console.log('FILTERED DATA:')
      console.log(this.state)
    })
  }

  loopCourses = () => {
    return this.state.filteredData.map((course)=>{
      return (<div className="col" key={course.slug}>
        <div className="thumb" style={{
          "backgroundImage": `url("${course.imgs.thumbnail}")`
        }}>
        <a href={`/courses/${course.slug}`} >
          <div className='vig'></div>
        </a>
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
                <div className="selected" onClick={() => this.clickedSelect('category')}>
                  {this.state.currentCategory}
                </div>
                <div className={`dropdown ${(this.state.selectCategory) ? 'active' : ''}`}>
                  <ul>
                  { categoriesData.map((item) => <li onClick={() => this.filteringCategory(item)}>{item}</li> )}

                  </ul>
                </div>

              </div>
            </div>
            <div className="filter">
              <label>Type</label>
              <div className="select">
                <div className="selected" onClick={() => this.clickedSelect('type')}>
                  {this.state.currentType}
                </div>
                <div className={`dropdown ${(this.state.selectType) ? 'active' : ''}`}>
                  <ul>
                    <li onClick={() => this.filteringType('all')}>All</li>
                    <li onClick={() => this.filteringType('premium')}>Premium</li>
                    <li onClick={() => this.filteringType('free')}>Free</li>
                  </ul>
                </div>
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
