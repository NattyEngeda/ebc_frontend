import React, { useState } from 'react';
import { Modal, TextInput, Textarea } from '@mantine/core';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

// CSS
import 'react-toastify/dist/ReactToastify.css';

const Message = () => {
    const [modalOpened, setModalOpened] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [text, setText] = useState();

    const notify = () => toast.success('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const handleSend = () => {
        axios.post('http://localhost:8000/girma/add',
            {
                name: name,
                email: email,
                text: text
            },
            { withCredentials: true })
            .then(function (response) {
                console.log(response);
                if (response.data.msg == 'sucess') {
                    console.log('Sent');
                    notify;
                }
            }).then(function (error) {
                console.log(error)
            })
        console.log(process.env.TEST);

        console.log(name, email, text);
    }

    return (
        <section className="flex flex-row items-center justify-center ">
            <button
                onClick={() => setModalOpened(true)}
                className="px-5 py-3 md:px-6 md:py-4 bg-slate-700 hover:bg-slate-800 hover:shadow-lg text-white rounded-lg">Lets Talk</button>
            <Modal
                opened={modalOpened}
                onClose={() => setModalOpened(false)}
                title="Send A Message"
            >
                <div className='w-full flex flex-col gap-5'>
                    <TextInput
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label="Name"
                    />
                    <TextInput
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label="Email / Phone"
                    />
                    <Textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        maxRows={6}
                        label="Message"
                    />
                    <button
                        onClick={handleSend}
                        className='py-3 bg-blue-600 active:bg-blue-800 hover:bg-slate-600 text-white rounded-md'>Send</button>
                </div>
            </Modal>
            <ToastContainer />
        </section>
    );
}

export default Message;