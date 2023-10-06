import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit
    } = useForm()
    const handleLogin = data => {
        console.log(data)
    }
    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className='text-center text-3xl font-bold my-10'>Login</h1>

                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className='label'>
                            <span className="label-text font-bolds">Email</span>
                        </label>

                        <input type="email"
                            {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className='label'>
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input type="password"
                            {...register("password",
                                {
                                    required: "Password is required",
                                    maxLength: { value: 2, message: "password must be 6 characters" }
                                })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                        <label className='label'>
                            <span className="label-text">Forget Password?</span>
                        </label>
                    </div>


                    <input className='btn btn-accent  w-full ' value="Login" type="submit" />
                </form>
                <p>New to next dent? <Link className='text-secondary' to="/signup">Create a new account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>

        </div>
    );
};

export default Login;