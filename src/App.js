import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/login-page/index";
import MyNavbar from "./components/navbar/index";
import AdminDashboardList from './components/admin-dashboard-listview/index';
import AdminDashboardTile from './components/admin-dashboard-tileview/index';
import Footer from './components/footer/index';
import UserDetails from "./components/user-details/index";

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard-list">Dashboard</Link>
            </li>
            <li>
              <Link to="/userdetails">User-Details</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/dashboard-list">
            <MyNavbar />
            <AdminDashboardList />
          </Route>
          <Route path="/dashboard-tile">
            <MyNavbar />
            <AdminDashboardTile />
          </Route>
          <Route path="/userdetails">
            <UserDetails />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>

    // <div>
    //   {/* <h2>Under Maintenance</h2> */}
    //   {/* <MyNavbar /> */}
    //   <Login />
    //   <Footer />
    //   {/* <AdminDashboardList /> */}
    //   {/* <AdminDashboardTile />
    //   <Footer /> */}
    //   {/* <UserDetails /> */}
    // </div>
  );
}

export default App;
