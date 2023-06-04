import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc"
import styles from "../Styles/styles.js";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"
import axios from "axios"
import { server } from '../server.js';
const ShopLogin = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios
            .post(
                `${server}/shop/shop-login`,
                {
                    email,
                    password,
                },
                { withCredentials: true }
            )
            .then((res) => {
                toast.success("ShopLogin Success!");
                navigate("/dashboard")
                window.location.reload(true)
            })
            .catch((err) => {
                toast.error(err.response.data.message);
            });
    }
    return (
        <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                    Login to your Shop
                </h2>
            </div>
            <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                    <form className='form.space-y-6' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                                Email
                            </label>
                            <div className='mt-1'>
                                <input type='email' name="email" autoComplete='email' required value={email} onChange={(e) => setEmail(e.target.value)} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor='password' className='block mt-1 text-sm font-medium text-gray-700'>
                                Password
                            </label>
                            <div className='mt-1 relative'>
                                <input type={show ? 'text' : 'password'} name="password" autoComplete='current-password' required value={password} onChange={(e) => setPassword(e.target.value)} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                {
                                    show ? (
                                        <AiOutlineEye className='absolute right-2 top-2 cursor-pointer' size={25} onClick={() => setShow
                                            (!show)} />) : (
                                        <AiOutlineEyeInvisible className='absolute right-2 top-2 cursor-pointer' size={25} onClick={() => setShow
                                            (!show)} />
                                    )
                                }
                            </div>

                        </div>
                        <div className={`${styles.normalFlex} justify-between flex-col mt-4`}>
                            <div className={`${styles.noramlFlex}`}>
                                <input
                                    type="checkbox"
                                    name="remember-me"
                                    id="remember-me"
                                    className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
                                />
                                <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-900'>Remember Me</label>
                                <div className='text-sm ml-auto mr-0'>
                                    <a href='.forgot-password' className='font-medium text-blue-600 hover:text-blue-500'>
                                        Forgot Password?
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className='flex-row'>
                            <button type='submit' className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 my-2">Submit</button>
                            {/* <button className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-400 hover:bg-pink-300 " onClick={handleGoogleShopLogin}><FcGoogle size={25} mr-5 /><p className='ml-4'> Sign in with Google.</p></button> */}
                            {/* <a href="/api/v2/auth/google" class="btn btn-primary">ShopLogin with Google</a> */}

                        </div>
                        <div className={`${styles.noramlFlex} w-full mx-2`}>
                            <h4 className='mx-2 text-black-900'>Not have any account?</h4>
                            <Link to="/shop-create" className="text-blue-600 pl-2">
                                Sign Up
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ShopLogin