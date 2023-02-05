import { BsFacebook, BsTelegram, BsInstagram, BsWhatsapp, BsGlobe } from 'react-icons/bs';

const Social = () => {
    return (
        <div className="flex flex-row items-center justify-center px-5 gap-5 py-2">
            <a
                href="https://www.facebook.com"
                target="_blank"
                rel='noreferrer'
                className="socialiconcontainer bg-blue-700">
                <BsFacebook
                    className="socialicons " />
            </a>
            <a
                href="https://www.telegram.com"
                target="_blank"
                rel='noreferrer'
                className="socialiconcontainer bg-blue-800">
                <BsTelegram className="socialicons" />
            </a>
            <a
                href="https://www.instagram.com"
                target="_blank"
                rel='noreferrer'
                className="socialiconcontainer bg-pink-700">
                <BsInstagram className="socialicons" />
            </a>
            <a
                href="https://www.whatsapp.com"
                target="_blank"
                rel='noreferrer'
                className="socialiconcontainer bg-green-500">
                <BsWhatsapp className="socialicons" />
            </a>
        </div>
    );
}

export default Social;