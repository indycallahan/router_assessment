import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            formData: {
                firstName: "",
                lastName: "",
                email: ""
            }
        };
    }
    handleChange = (event) => {
        const formData = {...this.state.formData};
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submitted: true
        })
    }
    resetForm = (event) => {
        this.setState({
            submitted: false,
            formData: {
                firstName: "",
                lastName: "",
                email: ""
            }
        })
    }
    render() {
        //show the thank you message if the form has been submitted
        if (this.state.submitted) {
            return (
                <div>
                    <p>Thank you, {this.state.formData.firstName}, for submitting the form</p>
                    <br />
                    <button onClick={this.resetForm}>Reset Form</button>
                </div>
            )
        }
        return (
            <div className="Contact">
                {/* <form> */}
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="firstName">first name</label>
                        <input 
                        type="text"
                        name="firstName" 
                        value={this.state.formData.firstName}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">last name</label>
                        <input 
                        type="text" 
                        name="lastName" 
                        value={this.state.formData.lastName}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>email</label>
                        <input
                        type="email" 
                        name="email" 
                        value={this.state.formData.email}
                        onChange={this.handleChange}
                        />
                    </div>
                    <button>Submit Form</button> <br />
                    {this.state.formData.firstName}
                    <br />
                    {this.state.formData.lastName}
                </form>
            </div>
        );
    }
}
export default Contact;