import React, { Component } from "react";
import faker from "faker";
import MessageDisplay from "../../components/MessageDisplay";

class Hub extends Component {
    state = {

    };

    render() {
        return (
            <div className="row bg-dark">
                <div className="col-md-3">
                    <img className="ml-3 mt-4 img-thumbnail" src={faker.image.avatar()} alt="avatar" /><br />
                    <h3 className="text-white ml-3">{faker.name.firstName()}</h3>
                    <h5 className="text-white ml-3">Messages ==></h5>
                </div>
                <div className="col-md-9">
                    <MessageDisplay />
                </div>
            </div>
            
        )
    }
}

export default Hub;