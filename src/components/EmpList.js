import React, { Component } from 'react'
import EmpItem from './EmpItem'
import PropTypes from 'prop-types'

class EmpList extends Component {
  render() {
    return this.props.empList.map(empItem => (
      <EmpItem key={empItem.id} empItem={empItem} delEmp={this.props.delEmp} />
    ))
  }
}

//PropTypes
EmpList.propTypes = {
  empList: PropTypes.array.isRequired
}

export default EmpList
