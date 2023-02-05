import { Accordion, TextInput, Textarea } from '@mantine/core';

const Message = () => {
    return (
        <div className='boorshad'>
            <Accordion>
                <Accordion.Item value="contact">
                    <Accordion.Control>Contact Me !!</Accordion.Control>
                    <Accordion.Panel>
                        <div className='w-full flex flex-col gap-5'>
                            <TextInput
                                label="Name"
                            />
                            <TextInput
                                label="Email / Phone"
                            />
                            <Textarea
                                label="Message"
                            />
                            <button className='py-3 bg-blue-800 text-white rounded-md'>Send</button>
                        </div>
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Message;