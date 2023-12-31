import React from "react";
import { Fade } from "react-awesome-reveal";


const SkillCard = (props) => {
    return (
        <div className="col-lg-4">
            <Fade>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{props.category}</h6>
                    <p className="card-text">
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={props.rating} aria-valuemin="0" aria-valuemax="5">
                            <div className="progress-bar" style={{ width: `${props.rating / 10 * 100}%` }} >{props.rating}</div>
                        </div>
                    </p>
                </div>
            </Fade>
        </div>
    )
}

export default SkillCard;
