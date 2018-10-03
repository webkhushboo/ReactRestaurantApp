import React, { Component } from 'react';
import { Card, CardImg, CardBody,CardTitle, CardText } from 'reactstrap';

class DishDetail extends Component {

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
        }
        else {
          return (
            <div></div>
          );
        }
      }
    
    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                     {this.renderDish(this.props.selectedDish)}
                </div>
            </div>
        );
    }
}

export default DishDetail