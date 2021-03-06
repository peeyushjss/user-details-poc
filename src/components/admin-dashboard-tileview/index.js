import React from 'react';
import axios from "axios";
import MyCard from '../card-view/index';
import ListIcon from '@material-ui/icons/List';
import { Dropdown } from 'react-bootstrap';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

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

    componentDidMount = () => {
        this.getUserDetails();
    }

    /* Method to perform searching */
    filterSearch = (e) => {
        console.log(e.target.value);
        let searchedValue = this.state.userDetails.filter((element) => {
            return (element.first_name.indexOf(e.target.value) !== -1);
        });
        this.setState({
            userDetails: searchedValue
        });
    }

    /* Method to perform sorting by name */
    sortByName = () => {
        let sortedName = this.state.userDetails.sort((a, b) => {
            return a.first_name.localeCompare(b.first_name);
        });
        this.setState({
            userDetails: sortedName
        });
    }

    /* Method to perform sorting by Email */
    sortByEmail = () => {
        let sortedEmail = this.state.userDetails.sort((a, b) => {
            return a.email.localeCompare(b.email);
        });
        this.setState({
            userDetails: sortedEmail
        });
    }

    render() {
        return (
            // <div>
            //     {this.state.userDetails.map((userDetail, index) => {
            <div className="container-fluid" style={{ marginTop: '3em' }}>
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <div className="row">
                            <div className="col-sm-6 col-md-4">
                                <h5>Search: </h5>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <input onChange={this.filterSearch} type="text" style={{ width: '15em' }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4"> </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="row">
                            <div className="col-sm-12 col-md-4">
                                <h5>VIEW MODE: </h5>
                            </div>
                            <div className="col-sm-12 col-md-1">
                                <ListIcon style={{ cursor: 'pointer' }} />
                            </div>
                            <div className="col-sm-12 col-md-1">
                                <ViewModuleIcon style={{ cursor: 'pointer' }} />
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Sort By Option
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="" onClick={this.sortByName}>Name</Dropdown.Item>
                                        <Dropdown.Item href="" onClick={this.sortByEmail}>Email</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
                < br />
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <MyCard />
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <MyCard />
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <MyCard />
                    </div>
                </div>
                < br />
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <MyCard />
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <MyCard />
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <MyCard />
                    </div>
                </div>
            </div>
            //     })}
            // </div>

        );
    }

}

export default AdminDashboardTile;