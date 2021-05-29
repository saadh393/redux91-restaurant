import React from 'react';
import "./About.css"
import iglu from "../../images/Left.png"

const About = () => {
    return (
        <div className="about">
            <div className="left">
                <img src={iglu} alt="llllll00" />


            </div>
            <div className="right">

                <h3 className="wellcome">WELLCOME</h3>
                <h1 className="redux mt-5">About Redux91 Restaurant</h1>
                <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum umquam blanditiis </p>
            </div>
            <div className=" align-middle rectangle-2">
                <p className=" text-center mt-4 align-text-middle">GET DIRECTION</p>
            </div>
        </div>
    );
};

export default About;