import React, { Component } from 'react'
import EmpInputItem from './EmpInputItem'
import PropTypes from 'prop-types'

class EmpInputs extends Component {
  render() {
    return this.props.empInputs.map(empInput => (
      <EmpInputItem
        key={empInput.id}
        empInput={empInput}
        delTodo={this.props.delTodo}
      />
    ))
  }
}

//PropTypes
EmpInputs.propTypes = {
  empInputs: PropTypes.array.isRequired
}

export default EmpInputs
