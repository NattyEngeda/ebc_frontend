import { BsFacebook, BsTelegram, BsInstagram, BsWhatsapp, BsGlobe } from 'react-icons/bs';

const Social = () => {
    return (
        <div className="flex flex-row px-5 gap-3 py-10">
            <div className="socialiconcontainer bg-blue-700">
                <BsFacebook className="socialicons " />
            </div>
            <div className="socialiconcontainer bg-blue-800">
                <BsTelegram className="socialicons" />
            </div>
            <div className="socialiconcontainer bg-pink-700">
                <BsInstagram className="socialicons" />
            </div>
            <div className="socialiconcontainer bg-green-500">
                <BsWhatsapp className="socialicons" />
            </div>
        </div>
    );
}

export default Social;