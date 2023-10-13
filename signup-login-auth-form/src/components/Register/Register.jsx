/* eslint-disable react/no-unknown-property */

import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";
import { AiFillEye,AiFillEyeInvisible} from "react-icons/ai";
import { Link } from "react-router-dom";

const Register = () => {

  const [registerError,setRegisterError]=useState('');
  const[successfulww,setsuccessful]=useState('');

   const [showPassword,setShowPassword]=useState(false);
    
    const handleRegister= e =>
    {
        e.preventDefault()
        console.log("from sumitted successfully");
        const email=e.target.email.value;
        const password=e.target.password.value
        const accepted = e.target.terms.checked;
        console.log(email ,password,accepted);
        
        if(password.length <6)
        {
          setRegisterError('password should be at least 6 characters or longer');
          return ;

        }
        else if(!/[A-Z]/.test(password))
        {
          setRegisterError('Your password should have at least one upper case Characters.')
          return ;
        }

        else if(!accepted){
          setRegisterError('Please accept our terms and conditions!')
          return;
      }


        // reset error
        setRegisterError('')
        setsuccessful('')

        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>
          {
            console.log(result.user);
            setsuccessful("Successfully Created ")
          })
        .catch(error=>
          {
            console.error(error);
            setRegisterError(error.message);

          })


          

    }
    return (
        <div className="flex justify-center items-center mt-[10px]">
           
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleRegister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type= {showPassword? "text": "password"} placeholder="password" name="password" className="input input-bordered" required />

          <span onClick={()=>setShowPassword(!showPassword)} className="absolute top-12 right-6
          ">

            {
              showPassword ? <AiFillEye/> :<AiFillEyeInvisible/> 
            }
          </span>
          <br />
          <div className="mb-2">
                        <input type="checkbox" name="terms" id="terms" />
                        <label className="ml-2" htmlFor="terms">Accept our <a href="">Terms and Conditions</a></label>
                    </div>
          
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div  className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        </form>
        {
          registerError && <p className="text-red-500">{registerError}</p>
         
        }
        {
           successfulww &&<p className="text-green-400">{successfulww}</p>
        }
          <p>Already have an account? <Link  to="/login">Login</Link></p>
      </div>
      
    </div>
   
  </div>
</div>
   

        </div>
    );
};

export default Register;