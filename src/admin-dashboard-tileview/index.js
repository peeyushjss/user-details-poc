import React from 'react';
import axios from "axios";
import MyCard from '../card-view/index';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class AdminDashboardTile extends React.Component {

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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-3">
                        <MyCard />
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <MyCard />
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <MyCard />
                    </div>
                </div>
                < br />
                <div className="row">
                    <div className="col-sm-12 col-md-3">
                        <MyCard />
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <MyCard />
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <MyCard />
                    </div>
                </div>
            </div>
        );
    }

}

export default AdminDashboardTile;