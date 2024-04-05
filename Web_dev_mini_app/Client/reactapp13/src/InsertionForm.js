import React from 'react'
import axios from 'axios'
import { DisplayForm } from './DisplayForm'

export class InsertForm extends React.Component {
    constructor() {
        super()
        this.state = {Roll_No: '', Firstname: '', MiddleInitial: '', Lastname: '', Address: '', Phone_Number: '', Email: '' }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        // Check if any required fields are empty
        if (!this.state.Roll_No || !this.state.Firstname ||!this.state.MiddleInitial || !this.state.Lastname || !this.state.Address || !this.state.Phone_Number || !this.state.Email ) {
            alert('Please fill in all required fields.');
            return;
        }
        
        var d = this.state;
        axios.post("http://localhost:5000/insert", d)
             .then(res => {
                 console.log('Record inserted successfully');
                 this.setState({Roll_No: '', Firstname: '', MiddleInitial: '', Lastname: '', Address: '', Phone_Number: '', Email: ''}); // Clear form after successful submission
                 // Fetch updated data after successful insertion
                 this.props.fetchData();
             })
             .catch(err => console.error('Error inserting record:', err));
    }

    

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <center >
                    <h1><u>Form Details</u></h1>
                    <label for="Roll_No"><b>Roll_No:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
                    <input type='text' name='Roll_No' value={this.state.Roll_No} onChange={this.handleChange} /><br></br><br></br>
                    <label for="Firstname"><b>Firstname:&nbsp;&nbsp;&nbsp;</b></label>
                    <input type='text' name='Firstname' value={this.state.Firstname} onChange={this.handleChange} /><br></br><br></br>
                    <label for="MiddleInitial"><b>MiddleInitial:&nbsp;&nbsp;&nbsp;</b></label>
                    <input type='text' name='MiddleInitial' value={this.state.MiddleInitial} onChange={this.handleChange} /><br></br><br></br>
                    <label for="Lastname"><b>Lastname:&nbsp;&nbsp;&nbsp;</b></label>
                    <input type='text' name='Lastname' value={this.state.Lastname} onChange={this.handleChange} /><br></br><br></br>
                    <label for="Address"><b>Address:&nbsp;&nbsp;&nbsp;</b></label>
                    <input type='text' name='Address' value={this.state.Address} onChange={this.handleChange} /><br></br><br></br>
                    <label for="Phone_Number"><b>Phone_Number:&nbsp;</b></label>
                    <input type='text' name='Phone_Number' value={this.state.Phone_Number} onChange={this.handleChange} /><br></br><br></br>
                    <label for="Email"><b>Email:&nbsp;&nbsp;</b></label>
                    <input type='text' name='Email' value={this.state.Email} onChange={this.handleChange} /><br></br><br></br><br></br>
                    <button type="submit">Submit</button><br></br>
                    </center>
                </form>
                <br></br>
                <br></br>
                <DisplayForm />
            </div>
        )
    }
}
