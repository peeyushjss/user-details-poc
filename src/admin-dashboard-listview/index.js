import React from 'react';
import { Table } from "react-bootstrap";

class AdminDashboardList extends React.Component {

    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Mobile</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Peeyush Kumar</td>
                        <td>N/A</td>
                        <td>N/A</td>
                        <td>peeyush.kumar@infogain.com</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Divyansh Kumar</td>
                        <td>N/A</td>
                        <td>N/A</td>
                        <td>divyansh.kumar@infogain.com</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Anurag Kumar</td>
                        <td>N/A</td>
                        <td>N/A</td>
                        <td>anurag.kumar@infogain.com</td>
                    </tr>

                </tbody>
            </Table>
        );
    }

}

export default AdminDashboardList;