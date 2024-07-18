import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

function Login({ setActiveComponent }) {
    const [formData, setFormData] = useState({
        customerName: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [loginError, setLoginError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let formErrors = {};
        if (!formData.customerName) formErrors.customerName = 'Customer name is required';
        if (!formData.password) formErrors.password = 'Password is required';
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleLoginClick = async () => {
        if (validateForm()) {
            try {
                const response = await axios.post('http://localhost:8090/api/users/login', formData);
                console.log('Login successful:', response.data);
                setLoginError('');
                setActiveComponent('order');
            } catch (error) {
                console.error('Login error:', error.response.data);
                setLoginError('Invalid customer name or password.');
            }
        }
    };

    return (
        <div className="login-container">
            <h2>Login Form</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="customerName">Customer name:</label>
                    <input
                        type="text"
                        id="customerName"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                    />
                    {errors.customerName && <span className="error">{errors.customerName}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                {loginError && <p className="login-error">{loginError}</p>}
                <button type="button" onClick={handleLoginClick}>Login</button>
                <br />
                <br />
                <p className="register-link">Need an Account? Register Here</p>
                <div className="button-container">
                    <button type="button" onClick={() => setActiveComponent('register')}>Register</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
