import React from "react";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle, AiFillInstagram, AiFillFacebook } from "react-icons/ai";

function Midsec() {
    return (
        <div className="hi">
            <div className="midsec-container">
                <div className="right-part">
                    <h1 style={{ fontWeight: '900', color: '#baffb5', fontSize: '4vw' }}>Hi There,
                        <br />
                        i'm <span style={{ color: 'cyan' }}>shivshankar</span>
                    </h1>
                    <h3 style={{ color: 'black', fontSize: '3vw' }}>
                        I am a <span style={{ color: 'red' }}>web developer</span>
                    </h3>
                    <button type="button" className="about-sec">
                        <span className="about-me-sec">About Me
                            <span style={{ marginLeft: '10px' }}><BsArrowDownCircleFill /></span>
                        </span>

                    </button>
                    <div className="icons-sec">
                        <a href="https://www.linkedin.com/in/shivshankar-yadav-576b00236/"><AiFillLinkedin className="each-icons" /></a>
                        <a href="https://github.com/shivshankar001"><AiFillGithub className="each-icons" /></a>
                        <a href=""><AiFillTwitterCircle className="each-icons" /></a>
                        <a href="https://www.instagram.com/shivshankar_1207/"><AiFillInstagram className="each-icons" /></a>
                        <a href="https://www.facebook.com/profile.php?id=100075266603494"><AiFillFacebook className="each-icons" /></a>
                    </div>
                </div>
                <div className="left-part">
                    <img src="https://photosfile.com/wp-content/uploads/2022/07/Cartoon-DP-Boy-3.jpeg" className="img-logo" alt="..." />
                </div>
            </div>
        </div>
    );
}

export default Midsec;
