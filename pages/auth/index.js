import React, { useState } from 'react';
import Header from '../components/header';
import { TextInput, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';
// import axios from '../http/axios';


const Index = () => {
    const [authState, setAuthState] = useState('start');

    const loginForm = useForm({
        initialValues: {
            username: '',
            password: '',
        },
        validate: {
            username: (value) => (value.length < 2 ? 'username must be moret han 2' : null),
            password: (value) => (value.length < 4 ? 'password must be more than 8' : null)
        }
    });

    const loginSubmit = (values) => {
        // axios.post('/login', values, {
        //     withCredentials: true,
        // }).then((response) => {

        // })

    }
    const loginError = (errors) => {
        console.log(errors);
    }

    const signupForm = useForm({
        initialValues: {
            fname: '',
            lname: '',
            uname: '',
            email: '',
            password: '',
        },
        validate: {
            fname: (value) => (value.length < 2 ? 'Add more Letter' : null),
            lname: (value) => (value.length < 2 ? 'Add more Letter' : null),
            uname: (value) => (value.length < 2 ? 'Add more Letter' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value) => (value.length < 8 ? 'Passowrd Must be greater that 8 ' : null),
        }
    })

    const signupSubmit = (values) => {
        axios.post('/signup', values, {
            withCredentials: true,
        }).then((response) => {
            console.log(response.data);
        })

    }
    const signupError = (errors) => {
        console.log(errors);
    }


    return (
        <>
            <Header />
            <main className="w-full py-28 flex items-cener justify-center px-5">
                <div className="w-full md:w-1/3 rounded-xl shadow-xl h-auto boorshad shadow-gray-400 py-10">
                    <div
                        className="text-center flex flex-col items-center gap-2 cursor-pointer"
                        onClick={() => {
                            setAuthState('start')
                        }}
                    >
                        <h1 className="text-3xl font-Sanchez">Login or Signup</h1>
                        <hr className="w-1/3 text-gray-400 border border-gray-400" />
                    </div>
                    {authState == "start" &&
                        <div className="flex flex-col gap-5 px-5 md:px-10 py-5">
                            <button
                                onClick={() => {
                                    setAuthState('login')
                                }}
                                className='btn'>Login</button>
                            <button
                                onClick={() => {
                                    setAuthState('signup')
                                }}
                                className='btn'>Signup</button>
                        </div>
                    }
                    {
                        authState == "login" &&
                        <div className=''>
                            <form
                                onSubmit={loginForm.onSubmit(loginSubmit, loginError)}
                                className='flex flex-col gap-5 px-5 md:px-10 py-5'>
                                <TextInput
                                    label="Username"
                                    {...loginForm.getInputProps('username')}
                                />
                                <PasswordInput
                                    label="Password"
                                    {...loginForm.getInputProps('password')}
                                />
                                <button type='submit' className='btn'>Login</button>
                            </form>
                        </div>
                    }
                    {
                        authState == "signup" &&
                        <form
                            onSubmit={signupForm.onSubmit(signupSubmit, signupError)}
                            className='flex flex-col gap-5 px-5 md:px-10 py-5'>
                            <div className='grid grid-cols-2 gap-5'>
                                <TextInput
                                    label="First Name"
                                    {...signupForm.getInputProps('fname')}
                                />
                                <TextInput
                                    label="Last Name"
                                    {...signupForm.getInputProps('lname')}

                                />
                            </div>
                            <TextInput
                                label="Username"
                                {...signupForm.getInputProps('uname')}

                            />
                            <TextInput
                                label="Email"
                                {...signupForm.getInputProps('email')}

                            />
                            <PasswordInput
                                label="Funn Name"
                                {...signupForm.getInputProps('password')}

                            />
                            <button type='submit' className='btn'>Signup</button>
                        </form>
                    }

                </div>
            </main>
        </>
    );
}

export default Index;