import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSinglePost } from "../actions/postActions";


class SinglePost extends Component {
    constructor(props) {
        super(props)
    }
    
    componentWillMount() {
        const { postid } = this.props.match.params;
        const po = this.props.location.state;
        console.log("dfdgkdfgd",postid,po);
        const { dispatch } = this.props;
        dispatch(fetchSinglePost(postid));
    }
    
    render() {
        const { postid } = this.props.match.params;
        const post = this.props.posts;
        console.log("single post",post);
        return (
            <div id="post1" class="post1 intro-effect-fadeout scrollanim">
                <header class="header">
                    <div class="bg-img">
                        <img src={`/${post.img}`} alt="Background Image" />
                    </div>
                    <div class="title">
                        <h1>{post.title} </h1>
                        <p class="subline">{post.desc} .</p>
                        <p>by <strong>1</strong> — Posted on <strong>{post.date}</strong></p>
                        </div>
                        <button class="trigger"><span></span></button>
                </header>
                <article class="content">
                    <div class="container">
                        <div class="row">
                            <p>{post.content}</p>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    const { posts } = state.posts;
    return {
        posts,
    }
}
const connectedSinglePost = connect(mapStateToProps)(SinglePost);

export  {connectedSinglePost as SinglePost};