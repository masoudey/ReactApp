import React, { Component } from "react";

const style = {
    width: '100%',
    height: '157px',
    position: 'fixed',
    top: '0',
    'z-index': '10',
}

export const About = (props) => {
    return (
        <div>
            <img src='/about-uss.jpg' class='top-img' style={style} />
            <div class="jumbotron text-center " style={{marginTop: 9+'em'}}>
                <h1>This is us we can solve Everything</h1>
                <p>Resize this responsive page to see the effect!</p> 
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                    <h3>Column 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                    <div class="col-sm-4">
                    <h3>Column 2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                    <div class="col-sm-4">
                    <h3>Column 3</h3>        
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}