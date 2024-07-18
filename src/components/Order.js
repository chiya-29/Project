import React, { useState } from 'react';
import axios from 'axios';
import dropImage from '../assets/images/drop.jpg';
import './Order.css';

function Order({ setActiveComponent, addOrder }) {
    const initialFormData = {
        customerName: '',
        customerLocation: '',
        customerPhone: '',
        customerEmail: '',
        waterName: '',
        crateQuantity: '',
        orderDate: '',
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
        if (!formData.waterName) formErrors.waterName = 'Water Name is required';
        if (!formData.crateQuantity) {
            formErrors.crateQuantity = 'Crate Quantity is required';
        } else if (formData.crateQuantity < 5) {
            formErrors.crateQuantity = 'Crate Quantity must be at least 5';
        }
        if (!formData.orderDate) formErrors.orderDate = 'Order Date is required';
        if (formData.password !== formData.confirmPassword) formErrors.confirmPassword = 'Passwords do not match';
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            axios.post('http://localhost:8090/api/orders', formData)
                .then(response => {
                    console.log('Order created successfully:', response.data);
                    addOrder(formData); // Add order to the list
                    setActiveComponent('orderdetails');
                    setFormData(initialFormData); // Clear form after submission
                })
                .catch(error => {
                    console.error('There was an error creating the order!', error);
                });
        }
    };

    return (
        <div className="order-container" style={{ backgroundImage: `url(${dropImage})` }}>
            <h2>Order Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="customerName">Customer name:</label>
                    <input
                        type="text"
                        id="customerName"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                        className={errors.customerName ? 'error-input' : ''}
                    />
                    {errors.customerName && <span className="error">{errors.customerName}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="customerLocation">Customer Location:</label>
                    <input
                        type="text"
                        id="customerLocation"
                        name="customerLocation"
                        value={formData.customerLocation}
                        onChange={handleChange}
                        className={errors.customerLocation ? 'error-input' : ''}
                    />
                    {errors.customerLocation && <span className="error">{errors.customerLocation}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="customerPhone">Customer Phone:</label>
                    <input
                        type="text"
                        id="customerPhone"
                        name="customerPhone"
                        value={formData.customerPhone}
                        onChange={handleChange}
                        className={errors.customerPhone ? 'error-input' : ''}
                    />
                    {errors.customerPhone && <span className="error">{errors.customerPhone}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="customerEmail">Customer Email:</label>
                    <input
                        type="email"
                        id="customerEmail"
                        name="customerEmail"
                        value={formData.customerEmail}
                        onChange={handleChange}
                        className={errors.customerEmail ? 'error-input' : ''}
                    />
                    {errors.customerEmail && <span className="error">{errors.customerEmail}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="waterName">Water Name:</label>
                    <input
                        type="text"
                        id="waterName"
                        name="waterName"
                        value={formData.waterName}
                        onChange={handleChange}
                        className={errors.waterName ? 'error-input' : ''}
                    />
                    {errors.waterName && <span className="error">{errors.waterName}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="crateQuantity">Crate Quantity:</label>
                    <input
                        type="number"
                        id="crateQuantity"
                        name="crateQuantity"
                        value={formData.crateQuantity}
                        onChange={handleChange}
                        className={errors.crateQuantity ? 'error-input' : ''}
                    />
                    {errors.crateQuantity && <span className="error">{errors.crateQuantity}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="orderDate">Order Date:</label>
                    <input
                        type="date"
                        id="orderDate"
                        name="orderDate"
                        value={formData.orderDate}
                        onChange={handleChange}
                        className={errors.orderDate ? 'error-input' : ''}
                    />
                    {errors.orderDate && <span className="error">{errors.orderDate}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={errors.password ? 'error-input' : ''}
                    />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={errors.confirmPassword ? 'error-input' : ''}
                    />
                    {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                </div>
                <div className="button-container">
                    <button type="submit">Submit</button>
                    <button type="button" onClick={() => setFormData(initialFormData)}>Clear</button>
                </div>
            </form>
        </div>
    );
}

export default Order;
