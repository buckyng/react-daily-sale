import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import EmpInputs from './components/EmpInputs'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import uuid from 'uuid'

import './App.css'
class App extends Component {
  state = {
    empInputs: [
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
  delTodo = id => {
    this.setState({
      empInputs: [
        ...this.state.empInputs.filter(empInputItem => empInputItem.id !== id)
      ]
    })
  }
  //add Todo
  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title
    }
    this.setState({ empInputs: [...this.state.empInputs, newTodo] })
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
                  <AddTodo addTodo={this.addTodo} />
                  <EmpInputs
                    empInputs={this.state.empInputs}
                    delTodo={this.delTodo}
                  />
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
