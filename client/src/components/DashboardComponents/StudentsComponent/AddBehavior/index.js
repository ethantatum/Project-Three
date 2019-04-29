import React from "react";
import "./style.css";


class AddBehavior extends React.Component {

    render() {
        return (
            <React.Fragment>
                <p>
                    <button className="btn btn-light addNew" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <i className="fas fa-plus"></i><p id="addBtnp">Add New Behavior </p>
                    </button>
               </p> 
                <div className="collapse" id="collapseExample">
                    <form className="form-inline">

                        <div className="form-row">
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
                        <button type="button" className="btn btn-dark" id="AddBehavBtn">Create Behavior</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default AddBehavior;