import React, { useState } from 'react';
import './Register.css';
import dropImage from '../assets/images/drop.jpg';
import axios from 'axios';

function Register({ setActiveComponent }) {
    const initialFormData = {
        customerName: '',
        customerLocation: '',
        customerPhone: '',
        customerEmail: '',
        password: '',
        confirmPassword: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const validateForm = () => {
        let formErrors = {};
        if (!formData.customerName) formErrors.customerName = 'Customer name is required';
        if (!formData.customerLocation) formErrors.customerLocation = 'Customer location is required';
        if (!formData.customerPhone) formErrors.customerPhone = 'Customer phone is required';
        if (!formData.customerEmail) formErrors.customerEmail = 'Customer email is required';
        if (!formData.password) formErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) formErrors.confirmPassword = 'Passwords do not match';
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const response = await axios.post('http://localhost:8090/api/register/register', formData);
                console.log('Registration Data:', response.data);
                setFormData(initialFormData);
                setActiveComponent('login');
            } catch (error) {
                console.error('Error registering user:', error);
            }
        }
    };

    const handleReset = () => {
        setFormData(initialFormData);
        setErrors({});
    };

    return (
        <section className="register-container" style={{ backgroundImage: `url(${dropImage})` }}>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="customerName">Customer name:</label>
                    <input type="text" id="customerName" name="customerName" value={formData.customerName} onChange={handleChange} />
                    {errors.customerName && <span className="error">{errors.customerName}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="customerLocation">Customer Location:</label>
                    <input type="text" id="customerLocation" name="customerLocation" value={formData.customerLocation} onChange={handleChange} />
                    {errors.customerLocation && <span className="error">{errors.customerLocation}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="customerPhone">Customer Phone:</label>
                    <input type="text" id="customerPhone" name="customerPhone" value={formData.customerPhone} onChange={handleChange} />
                    {errors.customerPhone && <span className="error">{errors.customerPhone}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="customerEmail">Customer Email:</label>
                    <input type="email" id="customerEmail" name="customerEmail" value={formData.customerEmail} onChange={handleChange} />
                    {errors.customerEmail && <span className="error">{errors.customerEmail}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                    {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                </div>
                <div className="button-container">
                    <button type="submit">Submit</button>
                    <button type="button" onClick={handleReset}>Reset</button>
                </div>
            </form>
        </section>
    );
}

export default Register;
