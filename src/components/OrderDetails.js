import React from 'react';
import '../App.css';

function OrderDetails({ setActiveComponent, formData }) {
    const totalPrice = formData.crateQuantity * 4500; // Assuming 4500 TZS per crate

    return (
        <div className="order-details-container">
            <h2>Order Details</h2>
            <p>Customer Name: <strong>{formData.customerName}</strong></p>
            <p>Customer Location: <strong>{formData.customerLocation}</strong></p>
            <p>Customer Phone: <strong>{formData.customerPhone}</strong></p>
            <p>Customer Email: <strong>{formData.customerEmail}</strong></p>
            <p>Water Name: <strong>{formData.waterName}</strong></p>
            <p>Crate Quantity: <strong>{formData.crateQuantity}</strong></p>
            <p>Order Date: <strong>{formData.orderDate}</strong></p>
            <p>Total Price: <strong>{totalPrice} TZS</strong></p>
            <p>Your order for <strong>{formData.crateQuantity}</strong> crates of <strong>{formData.waterName}</strong> has been successfully placed. The total amount to be paid is <strong>{totalPrice} TZS</strong>.</p>
            <div className="button-container">
                <button onClick={() => setActiveComponent('paymentconfirmation')}>Payment Confirmation</button>
                <button onClick={() => setActiveComponent('order')}>Go Back To Order</button>
            </div>
        </div>
    );
}

export default OrderDetails;
