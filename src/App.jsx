import React from 'react';
import Navbar from './components/Navbar';
import UserTable from './components/UserTable';
import './App.css'; // You can add global styles here if needed

const App = () => {
    return (
        <div>
            <Navbar />
            <UserTable />
        </div>
    );
};

export default App;
