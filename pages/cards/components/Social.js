import { BsFacebook, BsTelegram, BsInstagram, BsWhatsapp, BsGlobe } from 'react-icons/bs';

const Social = () => {
    return (
        <div className="flex flex-row items-center justify-evenly px-5 gap-3 py-2">
            <a
                href="https://www.facebook.com"
                target="_blank"
                rel='noreferrer'
                className="socialiconcontainer bg-blue-700 p-3">
                <BsFacebook
                    className="socialicons " />
            </a>
            <a
                href="https://www.telegram.com"
                target="_blank"
                rel='noreferrer'
                className="socialiconcontainer bg-blue-800 p-3">
                <BsTelegram className="socialicons" />
            </a>
            <a
                href="https://www.instagram.com"
                target="_blank"
                rel='noreferrer'
                className="socialiconcontainer bg-pink-700 p-3">
                <BsInstagram className="socialicons" />
            </a>
            <a
                href="https://www.whatsapp.com"
                target="_blank"
                rel='noreferrer'
                className="socialiconcontainer bg-green-500 p-3">
                <BsWhatsapp className="socialicons" />
            </a>
        </div>
    );
}

export default Social;