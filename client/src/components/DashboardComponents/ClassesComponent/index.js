import React, { Component } from "react";
import API from "../../../utils/API";
import "./style.css";


class ClassesComponent extends Component {
    constructor() {
        super();
        this.state = {
            classes: [],
            className: "",
            ClassTime: "",
            
        };
    }

    componentDidMount = () => {
        this.loadClasses();
      }
    
    loadClasses = () => {
    API.getclasses()
        .then(res =>
        console.log(res)
        )
        .catch(err => console.log(err));
    };
    

    render() {
        return (
           <div>

           </div>
        )
    }
}
export default ClassesComponent;