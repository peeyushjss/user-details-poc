import React from "react";
import './index.css';

class UserDetails extends React.Component {

    render() {
        return (
            <div className="user-details">
                <h2>USER DETAILS</h2>
                <form>
                    <div className="form-group">
                        <label for="exampleInputPassword1">First Name</label>
                        <input type="text" className="form-control" value="Peeyush" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Last Name</label>
                        <input type="text" className="form-control" value="Kumar" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" className="form-control" value="peeyushjss@gmail.com" />
                        <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Phone</label>
                        <input type="text" className="form-control" value="9599812027" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Mobile</label>
                        <input type="text" className="form-control" value="9818356796" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                {/* <form>
                    First Name: <input type="text" name="firstname" value="Peeyush" /> <br />
                    Last Name: <input type="text" name="lastname" value="Kumar" /><br />
                    Email: <input type="text" name="email" value="peeyush1891@gmail.com" /><br />
                    Phone: <input type="text" name="phone" value="9599812027" /><br />
                    Mobile: <input type="text" name="mobile" value="9818356796" /><br />
                    <button type="submit">Submit</button>
                </form> */}
            </div>
        )
    }

}

export default UserDetails;