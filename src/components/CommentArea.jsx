import { Component } from "react";
import CommentList from "./CommentList";

const { ListGroup } = require("react-bootstrap");

class CommentArea extends Component {
  state = {
    selected: false,
    comments: [],
  };

  fetchComments = async () => {
    this.setState({ selected: true });
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZjk3OTdjMjM5YzAwMTUyZjRiM2IiLCJpYXQiOjE3MTk0ODcxNTcsImV4cCI6MTcyMDY5Njc1N30.cnWiTJ8Skk8km6KUyP5pIXFi42u-vAP3LJVqlx_JKd8",
        },
      });
      if (response.ok) {
        const comments = await response.json();
        this.setState({ comments: comments });
        // console.log(comments);
      } else {
        throw new Error("Errore nel recupero dei commenti");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return <CommentList comments={this.state.comments} />;
  }
}
export default CommentArea;
