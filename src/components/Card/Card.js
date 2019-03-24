import React from "react";

const Card = (props) => {
    console.log(props)
    return (
        <div className="card col-sm-12 col-md-6 col-lg-4">
            <div className="card-body">
                <div className="card-title"><h1>{props.data}</h1></div>
                <div className="card-text">
                    <h1>Hello</h1>
                    <p>{props.data}</p>                   
                </div>
                <button className="btn btn-primary">{props.type}</button>
            </div>
        </div>
    );
}

export default Card;