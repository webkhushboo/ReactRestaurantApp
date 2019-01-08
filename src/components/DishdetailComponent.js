import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

function RenderDish({ dish }) {
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

const DishDetail = props => {
  return (
    <div className="row">
      <div className="col-12">
        <RenderDish dish={props.selectedDish} />
      </div>
    </div>
  );
};

export default DishDetail;
