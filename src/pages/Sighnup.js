import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Context';

const Sighnup = () => {
    const navigat = useNavigate();
    const { creatUser, updateUser } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleSighnUp = (data) => {
        creatUser(data.email, data.password)
        .then(result =>{
            const  userInfo = {
                displayName:data.name
            }
            updateUser(userInfo)
            .then(()=> { 
                toast('User is created and updated')
                navigat('/')

            }).catch((error)=> console.log(error)); 
            


        })
        .catch(error => console.log(error));
       
       
    }
    return (

        <div className='h-[700px] flex justify-center items-center'>
            <div className='w-96 p-6 rounded-md bg-accent'>
                <p className='text-center font-bold'>Register</p>
                <form onSubmit={handleSubmit(handleSighnUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name")} placeholder="Name" className="input input-bordered w-full " />
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email")} placeholder="Email" className="input input-bordered w-full " />
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password",
                            {
                                required: true,
                                minLength: { value: 8, message: "Minimum length must be 8" },
                                pattern: {
                                    value: /(?=.*[A-Z].*[A-Z])/, message: "Password must be strong"
                                }
                            }
                        )} placeholder="Password" className="input input-bordered w-full " />

                        {
                            errors.password && <label className="label">
                                <span className="label-text text-white">{errors.password?.message}</span>
                            </label>
                        }
                    </div>
                    <br />
                    <input type="submit" value="SignUp" className='w-full btn' />
                </form>
            </div>
        </div>
    );
};

export default Sighnup;