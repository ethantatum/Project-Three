import React from "react";
import "./style.css";


class AddBehavior extends React.Component {

    render() {
        return (
            <React.Fragment>
                <p>
                    <button className="btn btn-dark" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <i className="fas fa-plus"></i><h3>Add New Behavior </h3>
                    </button>
                </p> 
                <div className="collapse" id="collapseExample">
                    <form className="form-inline">

                        <div className="form-row align-items-center">
                            <div className="col-sm-3 my-1">
                                <label className="sr-only" >Behavior</label>
                                <input type="text" className="form-control" id="inlineFormInputName" placeholder="Add New Behavior"></input>
                            </div>
                        </div>
                        <div className="col-auto my-1">
                            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                <option defaultValue>Behavior Type</option>
                                <option value="positive">Positive</option>
                                <option value="negative">Negative</option>
                            </select>
                        </div>
                        <button type="button" className="btn btn-outline-light" id="AddBehavBtn">Create Behavior</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default AddBehavior;