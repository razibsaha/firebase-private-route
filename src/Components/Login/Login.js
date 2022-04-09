import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div>
            <h3>Please Login</h3>
            <button onClick={signInWithGoogle}>Google Sign In</button>
            <br /> <br />
            <form action="">
                <input type="email" placeholder="Your Email" /> <br />
                <input type="password" placeholder="Your Password" /> <br />
                <input type="submit" value="Login" /> <br />
            </form>
        </div>
    );
};

export default Login;