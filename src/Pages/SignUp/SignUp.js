import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleSignUp = (data) => {
        console.log(data);
    }
    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className='text-center text-3xl font-bold my-10'>Sign Up</h1>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className='label'>
                            <span className="label-text font-bolds">Name</span>
                        </label>
                        <input type="text"
                            {...register("name",
                                { required: "name is rquired" }
                            )}
                            className="input input-bordered w-full max-w-xs " />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className='label'>
                            <span className="label-text font-bolds">Email</span>
                        </label>
                        <input type="email"
                            {...register("email",
                                { required: "email is required" }
                            )}
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
                                    required: "password is required",
                                    minLength: { value: 6, message: "password must be 6 characters long" }

                                })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </div>
                    <input className='btn btn-accent  w-full mt-4 my-4' value="Login" type="submit" />
                </form>
                <p>Already have an account? <Link className='text-secondary' to="/login">Please login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>

        </div>
    );
};

export default SignUp;