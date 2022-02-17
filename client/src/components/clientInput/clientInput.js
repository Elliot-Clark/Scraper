import React, {Component} from 'react';
import './clientInput.css';
import Checkbox from './checkbox.js'
import axios from 'axios';


class ClientInput extends Component {
    constructor() {
        super()
        this.state = {
        }
      }

      initSearch = () => {
        if (!document.getElementById("jobSearchInput").value) {
            return
        }
        this.props.toggleReplaceJobs();

        let jobSearchInput = document.getElementById("jobSearchInput").value
        let USstate = document.getElementById("stateInput").value
        let city = document.getElementById("cityInput").value

        if (document.getElementById("adobe").checked) {
            axios.post('/adobe', {}, {
                params: { jobTitleSearch: jobSearchInput, city: city, USstate: USstate,}
            }).then(response => {
                this.props.handleCallBack(response.data);
            });
        }

        if (document.getElementById("amazon").checked) {
            axios.post('/amazon', {}, {
                params: { jobTitleSearch: jobSearchInput, city: city, USstate: USstate,}
            }).then(response => {
                this.props.handleCallBack(response.data);
            });
        }
        
        if (document.getElementById("paypal").checked) {
            axios.post('/paypal', {}, {
                params: { jobTitleSearch: jobSearchInput, city: city, USstate: USstate,}
            }).then(response => {
                this.props.handleCallBack(response.data);
            });
        }  

        if (document.getElementById("apple").checked) {
            axios.post('/apple', {}, {
                params: { jobTitleSearch: jobSearchInput, city: city, USstate: USstate,}
            }).then(response => {
                this.props.handleCallBack(response.data);
            });
        } 

        if (document.getElementById("uber").checked) {
            axios.post('/uber', {}, {
                params: { jobTitleSearch: jobSearchInput, city: city, USstate: USstate,}
            }).then(response => {
                this.props.handleCallBack(response.data);
            });
        } 

        if (document.getElementById("crateandbarrel").checked) {
            axios.post('/crateandbarrel', {}, {
                params: { jobTitleSearch: jobSearchInput, city: city, USstate: USstate,}
            }).then(response => {
                this.props.handleCallBack(response.data);
            });
        }
        
        if (document.getElementById("ebay").checked) {
            axios.post('/ebay', {}, {
                params: { jobTitleSearch: jobSearchInput, city: city, USstate: USstate,}
            }).then(response => {
                this.props.handleCallBack(response.data);
            });
        } 

        if (document.getElementById("microsoft").checked) {
            axios.post('/microsoft', {}, {
                params: { jobTitleSearch: jobSearchInput, city: city, USstate: USstate,}
            }).then(response => {
                this.props.handleCallBack(response.data);
            });
        } 

        if (document.getElementById("facebook").checked) {
            axios.post('/facebook', {}, {
                params: { jobTitleSearch: jobSearchInput, city: city, USstate: USstate,}
            }).then(response => {
                this.props.handleCallBack(response.data);
            });
        } 

        if (document.getElementById("sap").checked) {
            axios.post('/sap', {}, {
                params: { jobTitleSearch: jobSearchInput, city: city, USstate: USstate,}
            }).then(response => {
                this.props.handleCallBack(response.data);
            });
        } 
        
        if (document.getElementById("intuit").checked) {
            axios.post('/intuit', {}, {
                params: { jobTitleSearch: jobSearchInput, city: city, USstate: USstate,}
            }).then(response => {
                this.props.handleCallBack(response.data);
            });
        } 

        if (document.getElementById("shopify").checked) {
            axios.post('/shopify', {}, {
                params: { jobTitleSearch: jobSearchInput, city: city, USstate: USstate,}
            }).then(response => {
                this.props.handleCallBack(response.data);
            });
        } 
    }

    render() {
        return (
            <div id="inputArea">
                <h2>Careers Job Search:</h2>
                <div id="jobSearchInputContainer">
                    <label htmlFor="jobSearchInput">Job Search Input (required)</label>
                    <input type="text" id="jobSearchInput" name="jobSearchInput" placeholder='Enter Job Here' defaultValue={"Front End"}></input>
                </div>
                <div> 
                    <select name="stateInput" id="stateInput" data-label="Select multiple">
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="Arizona">Arizona</option>
                        <option value="Arkansas">Arkansas</option>
                        <option value="California">California</option>
                        <option value="Connecticut">Connecticut</option>
                        <option value="Delaware">Delaware</option>
                        <option value="District Of Columbia">District Of Columbia</option>
                        <option value="Florida">Florida</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Idaho">Idaho</option>
                        <option value="Illinois">Illinois</option>
                        <option value="Indiana">Indiana</option>
                        <option value="Iowa">Iowa</option>
                        <option value="Kansas">Kansas</option>
                        <option value="Kentucky">Kentucky</option>
                        <option value="Louisiana">Louisiana</option>
                        <option value="Maine">Maine</option>
                        <option value="Maryland">Maryland</option>
                        <option value="Massachusetts">Massachusetts</option>
                        <option value="Michigan">Michigan</option>
                        <option value="Minnesota">Minnesota</option>
                        <option value="Mississippi">Mississippi</option>
                        <option value="Missouri">Missouri</option>
                        <option value="Montana">Montana</option>
                        <option value="Nebraska">Nebraska</option>
                        <option value="Nevada">Nevada</option>
                        <option value="New Hampshire">New Hampshire</option>
                        <option value="New Jersey">New Jersey</option>
                        <option value="New Mexico">New Mexico</option>
                        <option value="New York">New York</option>
                        <option value="North Carolina">North Carolina</option>
                        <option value="North Dakota">North Dakota</option>
                        <option value="Ohio">Ohio</option>
                        <option value="Oklahoma">Oklahoma</option>
                        <option value="Oregon">Oregon</option>
                        <option value="Pennsylvania">Pennsylvania</option>
                        <option value="Rhode Island">Rhode Island</option>
                        <option value="South Carolina">South Carolina</option>
                        <option value="South Dakota">South Dakota</option>
                        <option value="Tennessee">Tennessee</option>
                        <option value="Texas">Texas</option>
                        <option value="Utah">Utah</option>
                        <option value="Vermont">Vermont</option>
                        <option value="Virginia">Virginia</option>
                        <option value="Washington">Washington</option>
                        <option value="West Virginia">West Virginia</option>
                        <option value="Wisconsin">Wisconsin</option>
                        <option value="Wyoming">Wyoming</option>
                    </select>
                    <input type="text" id="cityInput" name="cityInput" placeholder='City' defaultValue={'Phoenix'}></input>
                </div>
                <div>
                    < Checkbox />
                    <input type="button" id="submit" value="Submit" onClick={this.initSearch}></input>
                </div> 
            </div>
        );
    }
    
}

    

export default ClientInput;
