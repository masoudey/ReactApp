import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { fetchAllPosts } from "../actions/postActions";
import { loadPosts } from "../actions";
import PostThumb from "../Components/postthumbnail";
import "./blog.css"
import List from "../Components/List";

const loadData = props => {
    props.loadPosts()
}

class BlogPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollanim:false,
        }
    }

    componentDidMount() {
        if ( !(typeof window === 'undefined')) {
            window.addEventListener('scroll', this.handleScroll.bind(this))
        }
        console.log(this.state.scrollanim);
        console.log('did mount')
    }

    componentWillMount() {

        loadData(this.props)
        if ( !(typeof window === "undefined")) {
            window.removeEventListener('scroll', this.handleScroll.bind(this))
        }
        console.log("will mount");
    }
    componentWillReceiveProps() {
        console.log("will recevie props")
    }

    handleScroll (event) {
        if (window.scrollY > 1 && this.state.scrollanim === false) {
            this.setState({scrollanim: true})
            
        } else if (window.scrollY <= 1 && this.state.scrollanim === true) {
            this.setState({scrollanim: false})
        }
    }

    componentWillUnmount() {
        console.log('will unmount');
    }

    renderPost(post) {
        return <PostThumb post={post} key={post.id}></PostThumb>
    }

    render() {
        const posts = Object.values(this.props.posts);
        const scrolling = this.state.scrollanim ? 'modify' : '';
        console.log(posts);
        return (
            <div id="blog" class={`blog intro-effect-jam3  ${scrolling}`}>
            <section id="header-block" class="header ">
                <div class=" wedget-post">
                    <div class="bg-img">
                        <img src="/blog.jpg" alt="Background Image" />
                    </div>
                    <div class="title">
                        <h1>Posts</h1>
                    </div>
                    
                </div> 
            </section>
            <section id="posts-block" class="posts content  blog-thumb">
                <div class="container">
                    <div class="row">
                        <input type="text" name=""  />
                        <ul id="grid" class="grid effect-5" >
                        {/* {posts && posts.map(post => <PostThumb key={post.id} post={post} />)} */}
                        <List renderItem={this.renderPost}
                            items={posts}
                            loadingText={'Loading Posts'}
                            />
                        </ul>
                    </div>
                </div>
            </section>
        </div>
        )
    }
}
const mapStateToProps = state => {
    const {entities: { users, posts }} = state;
    return {
        posts,
        users
    };
}
const connectedBlog = withRouter(connect(mapStateToProps, {loadPosts})(BlogPage));
export  {connectedBlog as  BlogPage};