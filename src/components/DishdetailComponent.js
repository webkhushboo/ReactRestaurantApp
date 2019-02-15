import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { Link } from "react-router-dom";
import Comments from "../components/CommentsComponent";
import { Loading } from "../components/LoadingComponent";

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
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    )
  }
  else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    )
  }
  else
    return (
      <div className="container">
        <div className="col-12">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>
              <Link to={`/menu/${props.dish.id}`}>{props.dish.name}</Link>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="row">
          <div className="col-6">
            <h1> {props.dish.name}</h1>
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-6">
            <h1> Comments</h1>
            <Comments comments={props.comments} addComment={props.addComment} dishId={props.dish.id} />
          </div>
        </div>
      </div>
    );
};

export default DishDetail;
