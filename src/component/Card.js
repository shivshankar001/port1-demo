import React from "react";

function Card(props) {
    return (
        <div className="card">
            <img src={props.link} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">
                    <span className="know-more-sec">Know More</span>
                </a>
            </div>
        </div>
    );
}

export default Card;