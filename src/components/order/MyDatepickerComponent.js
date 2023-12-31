// ~src/components/mydatepicker.component.js
import React, { Component } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CasesIncidentFormConfig } from "./FormsData";

class MyDatepickerComponent extends Component {

    state = {
        startDate: new Date()
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    render() {

        return (
            <div>
                <label>End Duration Date :</label>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />
                 
           </div>
        )
    };
}

export default MyDatepickerComponent;