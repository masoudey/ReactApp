import React from "react";
import { Link } from "react-router-dom";

const PostThumb = (props) => {
    const post = props.post;
    return (
        
            <li class="shown" >
                <div class=" grid-post">
                    <figure class="effect-phoebe phoebe">
                        <img src={`/${post.img}`} alt="img03" />
                        <figcaption class="phoebe">
                            <h2>{post.title}</h2>
                            <p class="desc">{post.desc}</p>
                            <p>
                                <a href="#"><i class="icon-user"></i></a>
                                <a href="#"><i class="icon-heart"></i></a>
                                <Link state={post} to={`/blog/${post.id}`}><i class="icon-link"></i></Link>
                            </p>
                        </figcaption>           
                    </figure>
                </div>
            </li>
      
    )
}

export default PostThumb;