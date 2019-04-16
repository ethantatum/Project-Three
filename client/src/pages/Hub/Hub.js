import React, { Component } from "react";
import faker from "faker";
import Logo from "../../components/Logo";
import MessageInput from "../../components/MessageInput";
import MessageDisplay from "../../components/MessageDisplay";
import BehaviorFrequency from "../../components/BahaviorFrequency";

class Hub extends Component {
    state = {

    };

    render() {
        return (
            //Message Component Display

            // <div className="row bg-dark">
            //     <div className="col-md-3">
            //         <img className="ml-3 mt-4 img-thumbnail" src={faker.image.avatar()} alt="avatar" /><br />
            //         <h3 className="text-white ml-3">{faker.name.firstName()}</h3>
            //         <h5 className="text-white ml-3">Messages ==></h5>
            //     </div>
            //     <div className="col-md-9">
            //         <MessageInput />
            //         <MessageDisplay />
            //     </div>
            // </div>

            //Behavior Frequency Display
                <div className="row bg-dark">
                <div className="col-md-3">
                    <Logo />
                    <img className="ml-3 mt-4 img-thumbnail" src={faker.image.avatar()} alt="avatar" /><br />
                    <h3 className="text-white ml-3">{faker.name.firstName()}</h3>
                </div>
                <div className="col-md-9">
                    <BehaviorFrequency />
                </div>
            </div>
        )
    }
}

export default Hub;