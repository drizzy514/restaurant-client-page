import "./Login.css";
import {Link} from "react-router-dom"
function Login () {
    return <>
           <div className="login">
             <div className="login__box">
                            <h1 className="login__title">Login</h1>
                            <form className="login__form">
                            <input type="text" className="login__input" placeholder="your email"
                                onChange={
                                    function (e) {
                                        return window.localStorage.setItem("token", e.target.value)
                                    }
                                }
                            />
                            <input type="password" className="login__input" placeholder="your password"
                            onChange={
                                function (e) {
                                    return window.localStorage.setItem("password", e.target.value)
                                }
                            }

                            />
                            <Link className="login-btn">
                                Submit
                            </Link>

                            </form>
                            <Link className="login-text" to="/login">
                                Login
                            </Link>

                        </div>

        </div>
    </>
}

export default Login