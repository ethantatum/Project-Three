import React from "react";
import "./style.css";


class AddBehavior extends React.Component {

    render() {
        return (
            <React.Fragment>
                <p>
                    <button class="btn btn-dark" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <i class="fas fa-plus"></i><h3>Add New Behavior </h3>
                    </button>
                </p>
                <div class="collapse" id="collapseExample">
                    <form className="form-inline">

                        <div class="form-row align-items-center">
                            <div class="col-sm-3 my-1">
                                <label class="sr-only" for="inlineFormInputName">Behavior</label>
                                <input type="text" class="form-control" id="inlineFormInputName" placeholder="Add New Behavior"></input>
                            </div>
                        </div>
                        <div class="col-auto my-1">
                            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                <option selected>Behavior Type</option>
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