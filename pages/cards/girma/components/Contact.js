// Icons
import { BsFacebook, BsTelegram, BsInstagram, BsWhatsapp, BsGlobe } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="flex flex-col gap-5 w-full px-5 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3">
                <div className="rounded-xl boorshad shadow-lg p-2 py-4 flex flex-row gap-5 items-center">
                    <FaPhoneAlt className="w-8 h-8" />
                    <a
                        href="tel:+251923149474"
                        className="text-lg"
                    >+251923149474</a>
                </div>
                <div className="rounded-xl boorshad shadow-lg p-2 py-4 flex flex-row gap-5 items-center">
                    <AiOutlineMail className="w-8 h-8" />
                    <a
                        href="mailto:girmaatlabachew@gmail.com"
                        className="text-lg"
                    >girmaatlabachew@gmail.com</a>
                </div>
                <div className="rounded-xl boorshad shadow-lg p-2 py-4 flex flex-row gap-5 items-center">
                    <MdLocationOn className="w-8 h-8" />
                    <a
                        href="malito:nattynengeda@gmail.com"
                        className="text-lg"
                    >Addis Ababa, Kenenisa Ave</a>
                </div>
                <div className="rounded-xl boorshad shadow-lg p-2 py-4 flex flex-row gap-5 items-center">
                    <BsGlobe className="w-8 h-8" />
                    <a
                        href="#"
                        target="_blank"
                        rel='noreferrer'
                        className="text-lg"
                    >21627</a>
                </div>



            </div>
        </div>
    );
}

export default Contact;