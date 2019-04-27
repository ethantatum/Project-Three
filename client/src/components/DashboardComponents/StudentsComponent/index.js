import React, {Component} from 'react';
import {connect} from "react-redux";
import CardComponent from "../CardComponent";
import BehaviorFrequency from "./BehaviorFrequency";


class ClassesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
    
        };    
    }


    render(){
        return (
            <div>
                <CardComponent headerText = "Students">
                    <BehaviorFrequency />
                </CardComponent>   
            </div>
        );
    }
}


//adds redux state to this component's props
function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}

//connects this component to redux
export default connect(mapStateToProps)(ClassesComponent);