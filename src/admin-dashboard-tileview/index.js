import React from 'react';
import MyCard from '../card-view/index';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class AdminDashboardTile extends React.Component {

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