import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

class DishDetail extends Component {
  componentDidMount() {
    console.log("DishDetails component componentDidMount is invoked");
  }

  componentDidUpdate() {
    console.log("DishDetails component componentDidUpdate is invoked");
  }
  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div />;
    }
  }

  render() {
    console.log("DishDetails component render is invoked");
    return (
      <div className="row">
        <div className="col-12">{this.renderDish(this.props.selectedDish)}</div>
      </div>
    );
  }
}

export default DishDetail;
