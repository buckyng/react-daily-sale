import React, { Component } from 'react'
import EmpItem from './EmpItem'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'reactstrap'

class EmpList extends Component {
  render() {
    const empList = this.props.empList.map(empItem => {
      return (
        <Col sm='4' key={empItem.id}>
          <EmpItem
            key={empItem.id}
            empItem={empItem}
            delEmp={this.props.delEmp}
          />
        </Col>
      )
    })

    return (
      <Container>
        <Row>{empList}</Row>
      </Container>
    )
  }
}

//PropTypes
EmpList.propTypes = {
  empList: PropTypes.array.isRequired
}

export default EmpList
