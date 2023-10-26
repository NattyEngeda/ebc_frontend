import { BsFacebook, BsTelegram, BsInstagram, BsWhatsapp } from 'react-icons/bs';

export const socialList = [
  { id: 1, name: 'Facebook', icon: <BsFacebook className="socialicons " />, class: 'socialiconcontainer bg-blue-700', link: 'https://www.facebook.com' },
  { id: 2, name: 'Telegram', icon: <BsTelegram className="socialicons" />, class: 'socialiconcontainer bg-blue-800', link: 'https://t.me/nattyengeda' },
  { id: 3, name: 'Instagram', icon: <BsInstagram className="socialicons" />, class: 'socialiconcontainer bg-pink-700', link: 'https://www.instagram.com' },
  { id: 4, name: 'Whatsapp', icon: <BsWhatsapp className="socialicons" />, class: 'socialiconcontainer bg-green-700', link: 'https://www.whatsapp.com' }
];