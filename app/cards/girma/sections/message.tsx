"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
// CSS
import 'react-toastify/dist/ReactToastify.css';

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { TextInput, Textarea } from '@mantine/core';
const Message = () => {
    const [modalOpened, setModalOpened] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState<any>();
    const [email, setEmail] = useState<any>();
    const [text, setText] = useState<any>();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const notify = () => toast.success('Message Sent Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const handleSend = (Data: any) => {
        console.log(Data)
        // axios.post('https://yeneapi.alamondai.com/girma/add',
        //     {
        //         name: name,
        //         email: email,
        //         text: text
        //     },
        //     { withCredentials: true })
        //     .then(function (response: any) {
        //         console.log(response);
        //         if (response.data.msg == 'success') {
        //             console.log('Sent');
        //             setName('');
        //             setEmail('');
        //             setText('');
        //             setModalOpened(false);
        //             notify();
        //         }
        //     }).then(function (error: any) {
        //         console.log(error);

        //     })
    }

    return (
        <section
            className="flex flex-row items-center justify-center px-5">
            <button
                onClick={onOpen}
                className="px-5 py-3 md:px-6 md:py-4 bg-slate-700 hover:bg-slate-800 hover:shadow-lg text-white rounded-lg">Lets Talk</button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Send A Message</ModalHeader>
                            <ModalBody>
                                <form
                                    onSubmit={handleSubmit(handleSend)}
                                    className='w-full flex flex-col gap-5'>
                                    <div className='flex flex-col gap-4'>
                                        <label htmlFor=""> Name</label>
                                        <input
                                            className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-200'
                                            type="text"
                                            {...register("name", { required: true })}
                                        />
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <label htmlFor="">Email</label>
                                        <input
                                            className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-200'
                                            type="text"
                                            {...register("email", { required: true })}
                                        />
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <label htmlFor="">Message</label>
                                        <textarea
                                            className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-200'
                                            rows={6}
                                            {...register("text", { required: true })}
                                        />
                                    </div>
                                    <button
                                        onClick={handleSend}
                                        className='py-3 bg-blue-600 active:bg-blue-800 hover:bg-slate-600 text-white rounded-md'>Send</button>
                                </form>
                            </ModalBody>

                        </>
                    )}
                </ModalContent>
            </Modal>
        </section>
    );
}

export default Message;