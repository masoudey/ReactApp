import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllPosts } from "../actions/postActions";
import PostThumb from "../Components/postthumbnail";
import "./blog.css"
class BlogPage extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        const user = this.props.user;
        dispatch(fetchAllPosts());
    }
    
    render() {
        const posts = this.props.posts;
        console.log(posts);
        return (
            <div id="blog" class="blog intro-effect-jam3 scrollanim">
            <section id="header-block" class="header ">
                <div class=" wedget-post">
                    <div class="bg-img">
                        <img src="./src/imgs/blog.jpg" alt="Background Image" />
                    </div>
                    <div class="title">
                        <h1>Posts</h1>
                    </div>
                    <button class="trigger"><span class="icon-arrow-down4"></span></button>
                </div> 
            </section>
            <section id="posts-block" class="posts content  blog-thumb">
                <div class="container">
                    <div class="row">
                        <input type="text" name=""  />
                        {posts.map(post => <PostThumb post={post} />)}
                    </div>
                </div>
            </section>
        </div>
        )
    }
}
const mapStateToProps = state => {
    const {user} = state.user;
    const {posts} = state.posts;
    return {
        posts,
        user
    };
}
const connectedBlog = connect(mapStateToProps)(BlogPage);
export  {connectedBlog as  BlogPage};