import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import EmpList from './components/EmpList'
import AddEmp from './components/AddEmp'
import About from './components/pages/About'
import uuid from 'uuid'

import './App.css'
class App extends Component {
  state = {
    empList: [
      {
        title: 'Kathy',
        id: uuid.v4(),
        input: ''
      },
      {
        title: 'Triz',
        id: uuid.v4(),
        input: ''
      },
      {
        title: 'Eva',
        id: uuid.v4(),
        input: ''
      }
    ]
  }
  //delete Todo
  delEmp = id => {
    this.setState({
      empList: [...this.state.empList.filter(empItem => empItem.id !== id)]
    })
  }
  //add Todo
  addEmp = title => {
    const newEmp = {
      id: uuid.v4(),
      title
    }
    this.setState({ empList: [...this.state.empList, newEmp] })
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <div className='container'>
            <Header />
            <Route
              exact
              path='/'
              render={props => (
                <React.Fragment>
                  <AddEmp addEmp={this.addEmp} />
                  <EmpList empList={this.state.empList} delEmp={this.delEmp} />
                </React.Fragment>
              )}
            />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
