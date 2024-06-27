import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = (props) => {
  return (
    <ListGroup>
      {props.comments.map((commento, index) => {
        // console.log("commento", commento.comment);
        return <SingleComment key={index} comment={commento.comment} />;
      })}
    </ListGroup>
  );
};

export default CommentList;
