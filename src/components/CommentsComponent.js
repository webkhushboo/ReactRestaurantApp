import React, { Component } from "react";

class Comments extends Component {
  constructor(props) {
    super(props);
    console.log("Comment component constructor is invoked");
  }

  componentDidMount() {
    console.log("Comment component componentDidMount is invoked");
  }

  render() {
    if (this.props.comments) {
      const comment = this.props.comments.comments.map(comment => {
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
      });

      console.log("Comments component render is invoked");
      return (
        <div className="row">
          <h3>Comments</h3>
          <div className="col-12">{comment}</div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default Comments;
