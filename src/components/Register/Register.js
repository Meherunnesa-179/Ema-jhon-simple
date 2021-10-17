import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
              <div className="container mx-auto w-50 text-center m-5 border border-1 border-warning p-5 ">
            <h2 className=" text-warning">Create Account</h2>
               <form action="" onSubmit ="">
                <input type="text" name="" placeholder="Your Name" className="w-50 m-2 text-center" id="" />
               <input type="email" name="" className="w-50 m-2 text-center" id="" placeholder="Your email" />
               <br/>
                <input type="password" name="" id=""  className="w-50 m-2 text-center" placeholder="Password" />
                <input type="password" name="" id=""  className="w-50 m-2 text-center" placeholder="Re-enter Password" />
                <br />
                <input type="submit" className="btn-warning w-50 m-2 text-center" value="Submit" />
                <br />
                <p>Already have an account ? <Link to ="/login">Login Account</Link></p>
                <p>Or</p>
                <button className="btn-warning w-50 m-2 text-center rounded-3" >Sign-in with google</button>
               </form>
            </div>
        </div>
    );
};

export default Register;