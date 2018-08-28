import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

import { addPost } from "../actions";
import "./login.css";

const loadData = (props) => {
  console.log(props)
  const {post} = props;
  props.addPost(regUser)
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


  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { title, desc, content, cotagory, img } = this.state;
    if (username && password) {
      const post = {
        title,
        desc,
        content,
        cotagory,
        img,
      }
      console.log("user", post)
      loadData({post, ...this.props} );
      
    }
  }

  render() {
    const { addingPost, postAdded } = this.props.postById;
    const { title, desc, content, cotagory, img } = this.state;
      if (postAdded) {
        return <Redirect to='/post/:id'></Redirect>
      }

    return (
      <div>
        <div class="login-wrapper">
          <span class="title">Register</span>
          <form name="form" onSubmit={this.handleSubmit}>
            <fieldset>
              <div class="inputrow">
                <i class="fa icon-user fa-fw" />
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
                <i class="fa icon-user fa-fw" />
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
                <i class="fa icon-user fa-fw" />
                <select name="cotagory" id="cotagory" onChange={this.handleChange}  >
                    <option value="social">social</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="lifeStyle">Life Style</option>
                    <option value="occupation">Occupation</option>
                </select>
              </div>
              <div class="inputrow">
                <i class="fa icon-mail4 fa-fw" />
                <input
                  type="file"
                  name="img"
                  id="img"
                  accept="image/png, image/jpeg"
                  onChange={this.handleChange}
                  value={img}
                  required
                />
              </div>
              <div class="inputrow">
                <i class="fa icon-key fa-fw" />
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
                  Register
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
