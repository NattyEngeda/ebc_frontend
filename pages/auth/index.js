import React, { useState } from 'react';
import Header from '../components/header';
import { TextInput, PasswordInput } from '@mantine/core';

const Index = () => {
    const [authState, setAuthState] = useState('login');

    return (
        <>
            <Header />
            <main className="w-full py-28 flex items-cener justify-center">
                <div className="w-1/3 rounded-xl shadow-xl h-auto boorshad shadow-gray-400 py-10">
                    <div className="text-center flex flex-col items-center gap-2">
                        <h1 className="text-2xl font-Glory">Login or Signup</h1>
                        <hr className="w-2/3 text-gray-400 border border-gray-400" />
                    </div>
                    {authState == "start" &&
                        <div className="flex flex-col gap-5 px-10 py-5">
                            <button onClick={() => {

                            }} className='btn'>Login</button>
                            <button className='btn'>Signup</button>
                        </div>
                    }
                    {
                        authState == "login" &&
                        <div className='flex flex-col gap-5 px-10 py-5'>
                            <TextInput
                                label="Username"
                            />
                            <PasswordInput
                                label="Password"
                            />
                            <button className='btn'>Login</button>
                        </div>
                    }
                    {
                        authState== "signup" && 
                        <div>
                            
                        </div>
                    }

                </div>
            </main>
        </>
    );
}

export default Index;