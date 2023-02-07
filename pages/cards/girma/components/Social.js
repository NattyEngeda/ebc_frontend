import { BsFacebook, BsTelegram, BsInstagram, BsWhatsapp } from 'react-icons/bs';

const list = [
    { id: 1, name: 'Facebook', icon: <BsFacebook className="socialicons " />, class: 'socialiconcontainer bg-blue-700', link: 'https://www.facebook.com' },
    { id: 2, name: 'Telegram', icon: <BsTelegram className="socialicons" />, class: 'socialiconcontainer bg-blue-800', link: 'https://t.me/Girmaatlabachew' },
    { id: 3, name: 'Instagram', icon: <BsInstagram className="socialicons" />, class: 'socialiconcontainer bg-pink-700', link: 'https://www.instagram.com' },
    { id: 4, name: 'Whatsapp', icon: <BsWhatsapp className="socialicons" />, class: 'socialiconcontainer bg-green-700', link: 'https://www.whatsapp.com' }
];
const Social = () => {
    return (
        <div className="flex flex-row items-center justify-center px-5 gap-5 py-2">
            {
                list.map((items) => (
                    <a
                        key={items.id}
                        href={items.link}
                        target="_blank"
                        rel='noreferrer'
                        className={items.class}>
                        {items.icon}
                    </a>
                ))
            }
        </div>
    );
}

export default Social;