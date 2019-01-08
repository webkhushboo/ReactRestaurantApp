import React from "react";

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

const Comments = props => {
  if (props.dish) {
    const comments = props.dish.comments.map(comment => {
      return (
        <div className="row">
          <div className="col-12">
            <RenderComments comment={comment} />
          </div>
        </div>
      );
    });
    return <div className="row">{comments}</div>;
  } else {
    return <div />;
  }
};

export default Comments;
