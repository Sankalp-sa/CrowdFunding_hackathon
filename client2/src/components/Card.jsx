import React from 'react'
import { Link } from 'react-router-dom'

export default function Card( { owner, title, image, target, deadline, description } ) {
return (
    <div className="card">
        <img src={image} alt className="card-img-top" />
        <div className="card-body">
            <h3 className="card-title d-flex justify-content-center my-2">{title}</h3>
            <p className="card-text">{description}</p>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="d-flex flex-column align-items-center">
                            <p class="card-text"><b>Owner: </b> {owner}</p>
                            <p class="card-text"><b>Target: </b> {target}</p>
                            <p class="card-text"><b>Deadline: </b> {deadline}</p>
                            <Link to="" className="btn btn-outline-success btn-sm">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}
