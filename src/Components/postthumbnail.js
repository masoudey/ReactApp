import React from "react";
import { Link } from "react-router-dom";

const PostThumb = (props) => {
    const post = props.post;
    return (
        
            <li class="shown" >
                <div class=" grid-post">
                    <figure class="effect-phoebe phoebe">
                        <img src={`/${post.img[0]}`} alt="img03" />
                        <figcaption class="phoebe">
                            <h2>{post.title[0]}</h2>
                            <p class="desc">{post.desc[0]}</p>
                            <p>
                                <a href="#"><i class="icon-user"></i></a>
                                <a href="#"><i class="icon-heart"></i></a>
                                <Link to={`/blog/${post.id}`}><i class="icon-link"></i></Link>
                            </p>
                        </figcaption>           
                    </figure>
                </div>
            </li>
      
    )
}

export default PostThumb;