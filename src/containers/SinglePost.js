import React, { Component } from "react";
import { connect } from "react-redux";
import { CircleLoader } from "react-spinners";
// import { fetchSinglePost } from "../actions/postActions";
import { loadPostById } from "../actions";
import './singlePost.css';

const loadData = (props) => {
    const id = props.postId;
    props.loadPostById(id);
}

class SinglePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scrollanim: false
        }
    }

    static fetchData = (props) => {
        const id = props.postid;
        return loadPostById(id);
    }

    componentWillMount() {
        // const { postid } = this.props.match.params;
        // const po = this.props.location.state;
        // console.log("dfdgkdfgd",postid,po);
        // const { dispatch } = this.props;
        // dispatch(fetchSinglePost(postid));
        loadData(this.props)
        if (!(typeof window === 'undefined')) {
            window.removeEventListener('scroll', this.handleScroll.bind(this))
        }
        console.log("single post will mount")
        // console.log("props", this.props)
    }

    componentDidMount() {
        if (!(typeof window === 'undefined')) {
            window.addEventListener('scroll', this.handleScroll.bind(this))
        }
    }

    handleScroll (event) {
        if (window.scrollY > 1 && this.state.scrollanim === false) {
            this.setState({scrollanim: true})
            
        } else if (window.scrollY <= 1 && this.state.scrollanim === true) {
            this.setState({scrollanim: false})
        }
    }

    render() {
        const { postid } = this.props.match.params;
        const scrolling = this.state.scrollanim ? 'modify' : '';
        const post = this.props.post;
        // const {fetching, fetched} = this.props.postResult;
        console.log("single post",post);
        if (post === undefined) {
            return <CircleLoader color={'#123abc'} loading={true}/>
        }
        return (
            <div id="post1" class={` intro-effect-fadeout ${scrolling}`}>
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
const mapStateToProps = (state, ownProps) => {
    const postId = ownProps.match.params.postid;
    console.log(postId)
    const { 
        entities: { posts, users, comments },
        reducers: { postById } 
    } = state;
    const post =  posts[postId]
    const postResult = postById[postId]
    // const commentsByPost =  comments.map(comment => comment.postId === postId)
    return {
        postId,
        post,
        postResult,
        // commentsByPost,
    }
}
const connectedSinglePost = connect(mapStateToProps, {loadPostById})(SinglePost);

export  {connectedSinglePost as SinglePost};