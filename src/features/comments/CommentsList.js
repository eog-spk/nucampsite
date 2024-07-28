import { Col } from "reactstrap";
import Comment from "./Comment";
import { selectCommentsByCampsiteId } from "./CommentsSlice";

const CommentsList = ({ campsiteId }) => {
  const comments = selectCommentsByCampsiteId(campsiteId);

  if (comments && comments.length > 0) {
    return (
      <Col md="5" className="m-4">
        <h4>Comments</h4>
        {comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </Col>
    );
  } else {
    return (
      <Col md="5" className="m-4">
        No comments
      </Col>
    );
  }
};

export default CommentsList;
