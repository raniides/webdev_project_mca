import React from 'react'
import axios from 'axios'

export class DisplayForm extends React.Component {
    constructor() {
        super()
        this.state = { records: [] }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        axios.get('http://localhost:5000/display')
             .then(res => this.setState({ records: res.data }))
             .catch(err => console.error('Error fetching records:', err));
    }

    render() {
        var trs = (this.state.records.length === 0) ? null :
            this    .state.records.map((e, index) =>
                <tr key={index}>
                    <td>{e.Roll_No}</td>
                    <td>{e.Firstname}</td>
                    <td>{e.MiddleInitial}</td>
                    <td>{e.Lastname}</td>
                    <td>{e.Address}</td>
                    <td>{e.Phone_Number}</td>
                    <td>{e.Email}</td>
                </tr>
            );

        return (
            <div>
                <table border="2" style={{ width: "100%", marginLeft: "auto", marginRight: 0}}>
                    <thead>
                        <tr>
                            <th>Roll_No</th>
                            <th>Firstname</th>
                            <th>MiddleInitial</th>
                            <th>Lastname</th>
                            <th>Address</th>
                            <th>Phone_Number</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trs}
                    </tbody>
                </table>
            </div>
        )
    }
}
