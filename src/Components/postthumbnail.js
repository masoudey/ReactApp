import React from "react";
import { Link } from "react-router-dom";

const PostThumb = (props) => {
    const post = props.post;
    return (
        <ul id="grid" class="grid effect-5" >
            <li class="shown" >
                <div class=" grid-post">
                    <figure class="effect-phoebe phoebe">
                        <img src={`./src/imgs/${post.img}`} alt="img03" />>
                        <figcaption class="phoebe">
                            <h2>{post.title}</h2>
                            <p class="desc">{post.desc}</p>
                            <p>
                                <a href="#"><i class="icon-user"></i></a>
                                <a href="#"><i class="icon-heart"></i></a>
                                <link to={`/blog/:${post.id}`}><i class="icon-link"></i></link>
                            </p>
                        </figcaption>           
                    </figure>
                </div>
            </li>
        </ul>
    )
}

export default PostThumb;