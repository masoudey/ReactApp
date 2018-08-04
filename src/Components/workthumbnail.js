import React from "react";
import { Link } from "react-router-dom";

const workThumb = (props) => {
    const work = props.work;
    return (
        
            <li class="shown" >
                <div class=" grid-post">
                    <figure class="effect-layla layla">
                        <img src={`/${work.img}`} alt="img03" />
                        <figcaption class="layla">
                            <h2>{work.title}</h2>
                            <p class="desc">{work.desc}</p>
                            <p>
                                <Link state={work} to={`/blog/${work.id}`}><i class="icon-link"></i></Link>
                            </p>
                        </figcaption>           
                    </figure>
                </div>
            </li>
      
    )
}

export default workThumb;