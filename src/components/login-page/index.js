import React from 'react';
import { Formik } from "formik";
import * as Yup from "yup"; // used when validating with a pre-built solution
import "./index.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import AdminDashboardList from "../admin-dashboard-listview/index";


class Login extends React.Component {

    login = (values) => {
        alert(" You are login successfully!");
        localStorage.setItem('username', values.email);
        // <Link to="/userdetails">
        // </Link>
        // <Route>
        //     <Redirect to="/dashboard-list"></Redirect>
        // </Route>
        // <Router>
        // <div>
        //     <Switch>
        //         <Route path="/dashboard-list" component={AdminDashboardList}>
        //         </Route>
        //     </Switch>
        // </div>
        {/* </Router> */ }

    }

    render() {
        return (
            <Formik
                initialValues={{ email: "", password: "" }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = "Email/Phone should be required!";
                    } else if (values.email.length < 10 || values.email.length > 10) {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                            errors.email = 'Invalid email address!';
                        }
                    } else if (values.email.length === 10) {
                        if (/^[0-9]{10}$/i.test(values.email)) {
                            errors.email = "";
                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                            errors.email = 'Invalid email address!';
                        }
                    }
                    return errors;
                }}
                validationSchema={Yup.object().shape({
                    password: Yup.string()
                        .required("No password provided!")
                        .min(8, "Password is too short - should be 8 chars minimum!")
                        .matches(/(?=.*[0-9])/, "Password must contain a number!")
                })}
            >
                { props => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur
                    } = props;
                    return (
                        <div className="white-panel">
                            <div className="login-show">
                                <h2>LOGIN</h2>
                                <form onSubmit={e => e.preventDefault()}>
                                    <input type="text"
                                        name="email"
                                        placeholder="Email / Mobile"
                                        onChange={handleChange}
                                        value={values.email}
                                        onBlur={handleBlur}
                                        className={errors.email && touched.email && "error"} />
                                    {errors.email && touched.email && (
                                        <div className="input-feedback">{errors.email}</div>
                                    )}
                                    <input type="password"
                                        name="password"
                                        placeholder="Password"
                                        onChange={handleChange}
                                        value={values.password}
                                        onBlur={handleBlur}
                                        className={errors.password && touched.password && "error"}
                                    />
                                    {errors.password && touched.password && (
                                        <div className="input-feedback">{errors.password}</div>
                                    )}
                                    <button type="submit" onClick={() => this.login(values)} disabled={isSubmitting}>Login</button>
                                </form>
                            </div>
                        </div>
                    )
                }
                }

            </Formik >
        );



    }

}

export default Login;