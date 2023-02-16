import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Context';

const Login = () => {
    const [error, seterror, googlePopup] = useState('');
    const {sighnIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


     const handleGoogle=()=>{
        googlePopup()
        .then(()=>{})
        .catch((err)=>console.log(err));
     }
    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const handleSighnin = (data)=>{
        sighnIn(data.email, data.password)
        .then(result =>{
            const user = result.user;
            navigate(from, {replace: true});

          
        }).catch(error => seterror(error.message));

    }
    return (
        <div className='h-[700px] flex justify-center items-center bg-slate-100'>
            <div className='w-96 bg-accent rounded-lg p-7'>
                <div className='w-88'>
                    <h1 className='text-white font-bold text-center'>Login</h1>
                    <form onSubmit={handleSubmit(handleSighnin)}>
                        <div className="form-control w-full ">
                            <label className="label text-white "><span className="label-text text-white">Email</span></label>
                            <input type="text" {...register("email", { required: "email is required" })}
                                 placeholder="email" className="input input-borderd input-accent   w-full " />
                            {errors.email && <p role="alert" className='text-white' >{errors.email?.message}</p>}

                        </div>
                        <div className="form-control w-full max ">
                            <label className="label text-white "><span className="label-text text-white">Password</span></label>
                            <input type="password" {...register("password",
                             {required:'Password is required',
                             minLength:{value:5, message:"Password must be 8 charecter"}
                        })} placeholder="password" className="input input-borderd  input-accent w-full " />
                            {errors.password && <p role="alert" className='text-primary' >{errors.password?.message}</p>}

                        </div>
                        
                        <input type="submit" className='text-white font-bold mt-2 btn btn-black text-white w-full' />
                    </form>
                    <div>
                        {error && <p>{error}</p> }
                    </div>
                    <label className="label text-accent "><span className="label-text text-white">New to Dr mishrat ? <span className='text-primary'><Link to='/signup'>Create a new account </Link></span></span></label>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider text-white">OR</div>
                    </div>
                    <button onClick={handleGoogle} className='btn btn-primary w-full text-white '>Sign in with Google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;