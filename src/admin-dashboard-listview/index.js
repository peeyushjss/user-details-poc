import React from 'react';
import { Table } from "react-bootstrap";
import axios from "axios";

class AdminDashboardList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userDetails: []
        }
    }

    getUserDetails = () => {
        axios.get('https://reqres.in/api/users?page=1').then(res => {
            if (res.status === 200) {
                this.setState({
                    userDetails: res.data.data
                });
            }
        }).catch(error => console.log("Error: ", error));
    }

    componentDidMount() {
        this.getUserDetails();
    }

    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr style={{ "textAlign": "center" }}>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Mobile</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.userDetails.map(
                        (userDetail, index) => {
                            return <tr key={index}>
                                <td>{userDetail.id}</td>
                                <td>{userDetail.first_name} {userDetail.last_name}</td>
                                <td>{userDetail.phone ? userDetail.phone : "NA"}</td>
                                <td>{userDetail.mobile ? userDetail.mobile : "NA"}</td>
                                <td>{userDetail.email}</td>
                            </tr>
                        }
                    )}
                </tbody>
            </Table>
        )
    }

}

export default AdminDashboardList;