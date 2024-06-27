import { Container, Form, InputGroup, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  state = {
    userBook: "",
  };

  render() {
    return (
      <Container>
        <InputGroup className="mb-3">
          <Form.Control type="text" placeholder="Cerca un libro" aria-describedby="basic-addon2" value={this.state.userBook} onChange={(e) => this.setState({ userBook: e.target.value })} />
        </InputGroup>

        {this.state.userBook ? (
          <Row>
            {this.props.books
              .filter((book) => book.title.toLowerCase().includes(this.state.userBook))
              .map((book) => (
                <SingleBook key={book.asin} img={book.img} title={book.title} price={book.price} />
              ))}
          </Row>
        ) : (
          <Row>
            {this.props.books.map((book) => (
              <SingleBook key={book.asin} img={book.img} title={book.title} price={book.price} />
            ))}
          </Row>
        )}
      </Container>
    );
  }
}
export default BookList;
