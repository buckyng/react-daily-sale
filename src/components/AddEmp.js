import React, { Component } from 'react'

export class AddEmp extends Component {
  state = {
    title: ''
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.addEmp(this.state.title)
    this.setState({ title: '' })
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type='text'
          name='title'
          placeholder='Add New'
          style={{ flex: '10', padding: '10px' }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input type='submit' value='Add' className='btn' />
      </form>
    )
  }
}

export default AddEmp
