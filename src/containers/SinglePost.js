import React, { Component } from "react";

class SinglePost extends Component {

    
    
    render() {
        
        return (
            <div id="post1" class="post1 intro-effect-fadeout scrollanim">
                <header class="header">
                    <div class="bg-img">
                        <img src={`./src/imgs/${post.img}`} alt="Background Image" />
                    </div>
                    <div class="title">
                        <h1>{post.title}</h1>
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

export default SinglePost;