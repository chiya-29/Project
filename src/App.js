import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ProjectDetails from './components/ProjectDetails';
import Register from './components/Register';
import Order from './components/Order';
import OrderDetails from './components/OrderDetails';
import Login from './components/Login';
import PaymentConfirmation from './components/PaymentConfirmation';

import './App.css';

function App() {
    const [activeComponent, setActiveComponent] = useState('home');
    const [orders, setOrders] = useState(JSON.parse(localStorage.getItem('orders')) || []);

    const pricePerCrate = 4500;

    const addOrder = (order) => {
        const updatedOrders = [...orders, order];
        setOrders(updatedOrders);
        localStorage.setItem('orders', JSON.stringify(updatedOrders));
        setActiveComponent('orderdetails');
    };


    const clearOrders = () => {
        setOrders([]);
        localStorage.removeItem('orders');
    };

    const renderComponent = () => {
        switch (activeComponent) {
            case 'home':
                return <Home setActiveComponent={setActiveComponent} />;
            case 'about':
                return <About />;
            case 'projectdetails':
                return <ProjectDetails />;
            case 'login':
                return <Login setActiveComponent={setActiveComponent} />;
            case 'register':
                return <Register setActiveComponent={setActiveComponent} />;
            case 'order':
                return <Order setActiveComponent={setActiveComponent} addOrder={addOrder} />;
            case 'paymentconfirmation':
                return (
                    <PaymentConfirmation 
                        setActiveComponent={setActiveComponent} 
                        orders={orders} 
                        pricePerCrate={pricePerCrate} 
                        clearOrders={clearOrders} // Pass clearOrders function
                    />
                );
            case 'orderdetails':
                const lastOrder = orders[orders.length - 1];
                return lastOrder ? (
                    <OrderDetails 
                        setActiveComponent={setActiveComponent} 
                        formData={lastOrder} 
                        totalPrice={lastOrder.crateQuantity * pricePerCrate} 
                    />
                ) : <div>No order details available</div>;
            default:
                return <Home setActiveComponent={setActiveComponent} />;
        }
    };

    return (
        <div className="App">
            {activeComponent !== 'home' && <Navbar setActiveComponent={setActiveComponent} />}
            {renderComponent()}
        </div>
    );
}

export default App;
