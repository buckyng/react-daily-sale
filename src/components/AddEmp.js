import React, { Component } from 'react'
import { Card, CardBody, CardTitle, Button } from 'reactstrap'

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
      <form style={{ display: 'flex' }}>
        <input
          type='text'
          name='title'
          placeholder='Add New'
          style={{ flex: '5', padding: '10px' }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <Button color='primary' size='sm' onClick={this.onSubmit}>
          Add
        </Button>
        {/* <input type='submit' value='Add' className='btn' /> */}
      </form>
    )
  }
}

export default AddEmp
