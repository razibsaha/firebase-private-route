import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const {handleSignOut,user} = useFirebase();
    return (
        <div className='link'>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/register">Register</Link>
            <span>{user?.displayName && user?.displayName}
            </span>
            {user?.uid? <button onClick={handleSignOut}>Sign out</button> :
            <Link to="/login">Login</Link> }

            </nav>
        </div>
    );
};

export default Header;