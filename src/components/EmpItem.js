import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class EmpItem extends Component {
  render() {
    const { id, title } = this.props.empInput
    return (
      <div style={itemStyle}>
        <p style={{ padding: '10px' }}>
          {title}
          <button onClick={this.props.delEmp.bind(this, id)} style={btnStyle}>
            X
          </button>
        </p>
      </div>
    )
  }
}

//PropTypes
EmpItem.propTypes = {
  empInput: PropTypes.object.isRequired
}

const itemStyle = {
  backgroundColor: '#f4f4f4',
  padding: '20px'
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default EmpItem
