import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

import { addPost } from "../actions";
import "./login.css";

const loadData = (props) => {
  console.log(props)
  const {fd} = props;
  props.addPost(fd)
}

const initialState = {
    title: '',
    desc: '',
    content: '',
    cotagory: '',
    img: '',
    date: '',
    userId: '',
}

class AddPost extends Component {
  constructor(props) {
    super(props);

    // reset login status
    // this.props.dispatch(logout());

    this.state = { ...initialState};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  validateForm() {
    const { title, desc, content, cotagory, img } = this.state;
    const isInvalid = !title || !desc || !content || !cotagory || !img;
    return isInvalid;
  }

  fileSelectedHandler = (e) => {
      console.log(e.target.files[0]);
        this.setState({
            img: e.target.files[0]
        })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, desc, content, cotagory, img } = this.state;
    this.setState({ submitted: true });
    const d = new Date().toISOString();
    const fd = new FormData();
    fd.append('img', img, img.name);
    fd.append('title', title);
    fd.append('desc', desc);
    fd.append('content', content);
    fd.append('cotagory', cotagory);
    fd.append('date', d);
    fd.append('userId', this.props.user.id);
    
      console.log("post", fd.entries());
      loadData({fd, ...this.props} );
  
  }

  render() {
    const { addingPost, postAdded, data } = this.props.postById;
    const { title, desc, content, cotagory, img } = this.state;
    console.log("props in add post", this.props);
      if (postAdded) {
        return <Redirect to={`/blog/${data}`}></Redirect>
      }

    return (
      <div>
        <div class="addpost-wrapper">
          <span class="title">Add Post</span>
          <form name="form" onSubmit={this.handleSubmit}>
            <fieldset>
              <div class="inputrow">
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="title"
                  onChange={this.handleChange}
                  onBlur={this.validateForm.bind(this)}
                  value={title}
                  autoFocus
                  required
                />
              </div>
              <div class="inputrow">
                <input
                  type="text"
                  name="desc"
                  id="desc"
                  placeholder="desc"
                  onChange={this.handleChange}
                  value={desc}
                  required
                />
              </div>
              <div class="inputrow">
                <select name="cotagory" id="cotagory" onChange={this.handleChange} value={cotagory} >
                    <option value="social">Social</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="lifeStyle">Life Style</option>
                    <option value="occupation">Occupation</option>
                </select>
              </div>
              <div class="inputrow">
                <input
                  type="file"
                  name="img"
                  id="img"
                  accept="image/jpeg"
                  onChange={this.fileSelectedHandler}
                  
                  required
                />
              </div>
              <div class="inputrow">
                <textarea
                  name="content"
                  id="content"
                  onChange={this.handleChange}
                  value={content}
                  placeholder="content"
                  required
                />
              </div>
                         
              <div class="button-center">
                <button class="btn-log" type="submit" id="submit" disabled={this.validateForm()} >
                  Add Post
                </button>
                {addingPost && (
                  <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                )}
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { entities: {users}, reducers:{postById} } = state;
  
  
  return {
    users,
    postById,
  };
};

const connectedLoginPage = withRouter(connect(mapStateToProps, {addPost})(AddPost));
export default connectedLoginPage;
