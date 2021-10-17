import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {user, signInWithGoogle} = useFirebase();
    return (
        <div className="container mx-auto w-50 text-center m-5 border border-1 border-warning p-5 ">
            <h2>Login</h2>
               <form action="" onSubmit ="">
               <input type="email" name="" className="w-50 m-2 text-center" id="" placeholder="Enter your email" />
               <br/>
                <input type="password" name="" id=""  className="w-50 m-2 text-center" placeholder="Password" />
                <br />
                <input type="submit" className="btn-warning w-50 m-2 text-center rounded-3" value="Submit" />
                <br />
                <p>new to Ema-jhon ? <Link to ="/register">Create An Account</Link></p>
                <p>Or</p>
                <button className="btn-warning w-50 m-2 text-center rounded-3" onClick={signInWithGoogle} >Sign-in with google</button>
               </form>
            </div>
    );
};

export default Login;