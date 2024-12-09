import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; // Import your custom CSS

const LoginPage = () => {
    return (
        <div className="container-fluid">
            <div className="row split-screen">
                <div className="col-md-6 p-0">
                    <div className="book-image"></div>
                </div>
                <div className="col-md-6 login-section">
                    <div className="container">
                        <div className="site-name">Diskusyonaryo.com</div>
                        <div className="welcome-text">WELCOME</div>
                        <div className="d-flex flex-column align-items-center">
                            <button className="btn btn-custom">
                                <a href="signup.html">Log in / Sign up</a>
                            </button>
                            <div className="divider">or</div>
                            <button className="btn btn-custom">Continue as guest</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
