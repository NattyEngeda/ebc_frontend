// Icons
import { AiOutlineMail } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';

const list = [
    { id: 1, name: 'Phone Number', target: '', label: '+251923149474', icon: <FaPhoneAlt className="w-8 h-8" />, href: 'tel:+251923149474' },
    { id: 2, name: 'Email', target: '', label: 'girmaatlabachew@gmail.com', icon: <AiOutlineMail className="w-8 h-8" />, href: 'mailto:girmaatlabachew@gmail.com' },
    { id: 3, name: 'Address', target: '_blank', label: 'Delina Building | lideta | ደሊና ህንፃ | ልደታ', icon: <MdLocationOn className="w-8 h-8" />, href: 'https://goo.gl/maps/QUE658U7VAdJL7ys8' },
];
const Contact = () => {
    return (
        <div className="flex flex-col gap-5 w-full md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3">
                {
                    list.map((items) => (
                        <div
                            key={items.id}
                            className="w-full rounded-xl boorshad shadow-lg p-2 py-4 flex flex-row gap-5 items-center">
                            {items.icon}
                            <a
                                href={items.href}
                                target={items.target}
                                className="text-lg"
                            >{items.label}</a>
                        </div>
                    ))
                }
            </div>
        </div >
    );
}

export default Contact;