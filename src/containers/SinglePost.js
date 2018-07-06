import React, { Component } from "react";

class SinglePost extends Component {

    
    
    render() {
        
        return (
            <div id="post1" class="post1 intro-effect-fadeout scrollanim">
                <header class="header">
                    <div class="bg-img">
                        <img src="/imgs/{{post.img[0]}}" alt="Background Image" />
                    </div>
                    <div class="title">
                        <h1>{post.title[0]}</h1>
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

export default SinglePost;