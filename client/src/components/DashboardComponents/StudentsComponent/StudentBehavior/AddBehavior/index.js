import React from "react";
import "./style.css";


class AddBehavior extends React.Component {

    render() {
        return (
            <React.Fragment>
                <p>
                    <button className="btn btn-light text-center addNew" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <i className="fas fa-plus float-left"></i><p id="addBtnp">Add Behavior </p>
                    </button>
               </p> 
                <div className=" mx-auto collapse" id="collapseExample">
                  
                    <form className="form-inline">
                        <div className="form-row">
                            <div className="col-sm-3 my-1">
                                <label className="sr-only" >Behavior</label>
                                <input id="behaviorName" value={this.props.behaviorState} onChange={this.props.handleChange} type="text" className="form-control" placeholder="Add New Behavior"></input>
                            </div>
                        </div>
                        <div className="col-auto my-1">
                            <select className="custom-select mr-sm-2" id="type" value={this.props.typeState} onChange={this.props.handleChange}>
                                <option defaultValue>Behavior Type</option>
                                <option value="positive">Positive</option>
                                <option value="negative">Negative</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-dark" id="AddBehavBtn" disabled={!(this.props.behaviorState && this.props.typeState)} onClick={this.props.handleSubmit}>Create Behavior</button>
                    </form>
                 
                </div>
            </React.Fragment>
        );
    }
}

export default AddBehavior;