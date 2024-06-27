import { Component } from "react";
import { Button, Card, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Col key={this.props.asin} sm="12" md="6" lg="4" xxl="3" className="my-3">
        <Card className="my-3 shadow" onClick={() => this.setState({ selected: !this.state.selected })}>
          <Card.Img variant="top" style={{ aspectRatio: 3 / 4 }} src={this.props.img} />
          <Card.Body>
            <Card.Title className="text-truncate">{this.props.title}</Card.Title>
            <Card.Text>{this.props.price} €</Card.Text>
            <Button variant={this.state.selected ? "secondary" : "primary"}>Compra ora</Button>
          </Card.Body>
        </Card>
        <CommentArea />
      </Col>
    );
  }
}

export default SingleBook;
