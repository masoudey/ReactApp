import React, { Component } from "react";
import "./works.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loadPosts } from "../actions";
import List from "../Components/List";
import WorkThumb from "../Components/workthumbnail";

const loadData = props => {
    props.loadPosts()
}

class WorksPage extends Component {
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

    renderPost(work) {
        return <WorkThumb work={work} key={work.id}></WorkThumb>
    }

    render() {
        const works = Object.values(this.props.posts);
        const scrolling = this.state.scrollanim ? 'modify' : '';

        return (
            <div id="works" class={`blog intro-effect-sliced  ${scrolling}`}>
            <section id="header-block" class="header ">
                    <div class="bg-img">
                        <img src="/works.jpg" alt="Background Image" />
                    </div>
                    <div class="title">
                        <h1>Works</h1>
                    </div>
                    <p class="subline">Inspiration for Article Intro Effects</p>
                    <div class="bg-img">
                        <img src="/works.jpg" alt="Background Image" />
                    </div>
            </section>
            <section id="posts-block" class="works content  blog-thumb">
                <div class="container">
                    <div class="row">
                        <ul id="grid" class="grid effect-5" >
                        {/* {posts && posts.map(post => <PostThumb key={post.id} post={post} />)} */}
                        <List renderItem={this.renderPost}
                            items={works}
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
const connectedBlog = withRouter(connect(mapStateToProps, {loadPosts})(WorksPage));
export default connectedBlog;