import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSinglePost } from "../actions/postActions";


class SinglePost extends Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        
        // const po = this.props.location.state;
        // console.log("dfdgkdfgd",postid,po);
        // const { dispatch } = this.props;
        // dispatch(fetchSinglePost(postid));
    }
    
    render() {
        const { postid } = this.props.match.params;
        const posts = this.props.posts;
        const post = posts.filter(po => po.id == postid)[0];
        console.log("single post",post);
        return (
            <div id="post1" class="post1 intro-effect-fadeout scrollanim">
                <header class="header">
                    <div class="bg-img">
                        <img src={`/${post.img[0]}`} alt="Background Image" />
                    </div>
                    <div class="title">
                        <h1>{post.title[0]} </h1>
                        <p class="subline">{post.desc[0]} .</p>
                        <p>by <strong>1</strong> — Posted on <strong>{post.date[0]}</strong></p>
                        </div>
                        <button class="trigger"><span></span></button>
                </header>
                <article class="content">
                    <div class="container">
                        <div class="row">
                            <p>{post.content[0]}</p>
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