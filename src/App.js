import React from "react";
import './App.css';
import { connect } from 'react-redux';

import Container from "./components/Container";
import Card from "./components/Card";
import Button from "./components/Button";
import Modal from "./components/Modal";
import Input from "./components/Input";

import {
  addComment,
  changeContent,
  changeTitle,
  loadComments,
} from "./actions/action";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    }
  }

  handleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  onClickSubmit = (data) => {
    const payload = {
      id: Math.random().toString().slice(2,6),
      title: data[0],
      content: data[1],
    }
    this.setState({ id: this.state.id + 1, isOpen: false });
    return payload;
  }

  componentDidMount() {
    if (localStorage.getItem('state') !== null) {
      this.props.loadState(JSON.parse(localStorage.getItem('state')));
    }
  }

  render() {
    return (
      <Container>
        {this.state.isOpen &&
          <Modal
            onSubmit={() => this.props.addComment(this.onClickSubmit([this.props.title, this.props.content]))}
            onCancel={this.handleModal}
            header="Add Comment"
          >
            <form>
              <Input
                label="Title"
                onChange={this.props.onChangeTitle}
                placeholder="Good morning!"
              />
              <Input
                label="Content"
                onChange={this.props.onChangeContent}
                placeholder="Have a nice day."
              />
            </form>
          </Modal>
        }
        <h1>Comments</h1>
        <div className="wrap">
          <Button size="20%" onClick={this.handleModal}>
            Add a Comment!
          </Button>
        </div>
        {
          this.props.comments.length > 0 ?
            this.props.comments.map(item =>
              <Card
                key={item.id}
                title={item.title}
                content={item.content}
              />
            )
            :
            <h4>No comments yet :(</h4>
        }
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments.comments_list,
    content: state.comments.content,
    title: state.comments.title,
    is_comment_added: state.comments.is_comment_added,
  }
};

const mapDispatchToProps = dispatch => ({
  addComment: (payload) =>
    dispatch(addComment(payload)),
  onChangeContent: (content) =>
    dispatch(changeContent(content)),
  onChangeTitle: (title) =>
    dispatch(changeTitle(title)),
  loadState: (data) =>
    dispatch(loadComments(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
