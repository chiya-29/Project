import React from 'react';
import '../App.css';

function PaymentConfirmation({ orders, pricePerCrate, setActiveComponent, clearOrders }) {

    const handleClear = () => {
        clearOrders();
    };

    return (
        <div className="confirm-payment-container container">
            <h2>Order Confirmation</h2>
            <p>Thank you for your payment! Your order details:</p>
            <table className="order-details-table">
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Customer Location</th>
                        <th>Customer Phone</th>
                        <th>Customer Email</th>
                        <th>Water Name</th>
                        <th>Crate Quantity</th>
                        <th>Order Date</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td>{order.customerName}</td>
                            <td>{order.customerLocation}</td>
                            <td>{order.customerPhone}</td>
                            <td>{order.customerEmail}</td>
                            <td>{order.waterName}</td>
                            <td>{order.crateQuantity}</td>
                            <td>{order.orderDate}</td>
                            <td>{order.crateQuantity * pricePerCrate} TZS</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="button-container">
                <button onClick={handleClear}>Clear All Orders</button>
                <button onClick={() => setActiveComponent('order')}>Go Back To Order</button>
            </div>
        </div>
    );
}

export default PaymentConfirmation;
