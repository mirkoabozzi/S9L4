import { ListGroup } from "react-bootstrap";

const SingleComment = (props) => (
  <ListGroup.Item>
    <span>{props.author}</span> {props.comment}
  </ListGroup.Item>
);

export default SingleComment;
