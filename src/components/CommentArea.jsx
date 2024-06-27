import { Component } from "react";

const { ListGroup } = require("react-bootstrap");

class CommentArea extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        {this.state.selected && (
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        )}
      </>
    );
  }
}
export default CommentArea;
