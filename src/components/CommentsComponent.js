import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Col,
  Row
} from "reactstrap";

import { Control, LocalForm, Errors } from "react-redux-form";

const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmitComments = this.handleSubmitComments.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmitComments(values) {
    console.log("Current state is :" + JSON.stringify(values));
    this.props.addComment(this.props.dishId, values.rating, values.name, values.comments);
  }

  render() {
    if (this.props.comments.length > 0) {
      const comments = this.props.comments.map(comment => {
        return (
          <div className="col-12" key={comment.id}>
            <RenderComments comment={comment} />
          </div>
        );
      });
      return (
        <div className="row">
          {comments}
          <Button className="ml-3" outline onClick={this.toggleModal}>
            <span className="fa fa-pencil fa-lg" /> Submit Comment
          </Button>
          <div className="col-12">
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal}>
                Submit Comment
              </ModalHeader>
              <ModalBody>
                <LocalForm onSubmit={values => this.handleSubmitComments(values)}>
                  <Row className="form-group">
                    <Label htmlFor="rating" md={12}>
                      Rating
                    </Label>
                    <Col md={12}>
                      <Control.text
                        model=".rating"
                        id="rating"
                        name="rating"
                        className="form-control"
                        placeholder="Rating"
                        type="number"
                        validators={{
                          required
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".rating"
                        show="touched"
                        messages={{
                          required: "Required "
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label md={12} htmlFor="name">
                      Last Name
                    </Label>
                    <Col md={12}>
                      <Control.text
                        model=".name"
                        id="name"
                        name="name"
                        placeholder="Last Name"
                        className="form-control"
                        validators={{
                          required,
                          minLength: minLength(3),
                          maxLength: maxLength(15)
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".name"
                        show="touched"
                        messages={{
                          required: "Required ",
                          minLength: "Must be greater than 2 characaters",
                          maxLength: "Must be 15 characters or less"
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label htmlFor="comments" md={12}>
                      Comments
                    </Label>
                    <Col md={12}>
                      <Control.textarea
                        model=".comments"
                        id="comments"
                        name="comments"
                        placeholder="Enter comments"
                        className="form-control"
                        rows="5"
                        validators={{
                          required
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".comments"
                        show="touched"
                        messages={{
                          required: "Required "
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Col md={{ size: 10, offset: 2 }}>
                      <Button type="submit" color="primary">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </LocalForm>
              </ModalBody>
            </Modal>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

function RenderComments({ comment }) {
  return (
    <div key={comment.id} className="col-12">
      <li>
        <p>{comment.comment}</p>
        <p>
          -- {comment.author} ,{" "}
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit"
          }).format(new Date(Date.parse(comment.date)))}
        </p>
      </li>
    </div>
  );
}

export default Comment;
