import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardBody, CardTitle, Button } from 'reactstrap'
export class EmpItem extends Component {
  render() {
    const { id, title } = this.props.empItem
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <Button color='danger' onClick={this.props.delEmp.bind(this, id)}>
              X
            </Button>
          </CardBody>
        </Card>
      </div>
    )
  }
}

//PropTypes
EmpItem.propTypes = {
  empItem: PropTypes.object.isRequired
}

export default EmpItem
