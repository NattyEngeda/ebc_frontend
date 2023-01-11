// Icons
import { BsFacebook, BsTelegram, BsInstagram, BsWhatsapp, BsGlobe } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="flex flex-col gap-5 w-full">
            <div className="grid grid-cols2 w-full gap-3">
                <div className="rounded-lg boorshad shadow-lg p-2 py-4 flex flex-row gap-5 items-center">
                    <AiOutlineMail className="w-8 h-8" />
                    <a
                        href="mailto:nattynengeda@gmail.com"
                        className="text-lg"
                    >nattynengeda@gmail.com</a>
                </div>

                <div className="rounded-lg boorshad shadow-lg p-2 py-4 flex flex-row gap-5 items-center">
                    <BsGlobe className="w-8 h-8" />
                    <a
                        href="https://nattyengeda.github.io"
                        target="_blank"
                        rel='noreferrer'
                        className="text-lg"
                    >https://nattyengeda.github.io</a>
                </div>

                <div className="rounded-lg boorshad shadow-lg p-2 py-4 flex flex-row gap-5 items-center">
                    <MdLocationOn className="w-8 h-8" />
                    <a
                        href="malito:nattynengeda@gmail.com"
                        className="text-lg"
                    >Addis Ababa, Kenenisa Ave</a>
                </div>

                <div className="rounded-lg boorshad shadow-lg p-2 py-4 flex flex-row gap-5 items-center">
                    <FaPhoneAlt className="w-8 h-8" />
                    <a
                        href="tel:+251978538526"
                        className="text-lg"
                    >+251978538526</a>
                </div>

            </div>
        </div>
    );
}

export default Contact;