// Icons
import { AiOutlineMail } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';

export const contactList = [
  { id: 1, name: 'Phone Number', target: '', label: '+251923149474', icon: <FaPhoneAlt className="w-8 h-8" />, href: 'tel:+251923149474' },
  { id: 2, name: 'Email', target: '', label: 'girmaatlabachew@gmail.com', icon: <AiOutlineMail className="w-8 h-8" />, href: 'mailto:girmaatlabachew@gmail.com' },
  { id: 3, name: 'Address', target: '_blank', label: 'Delina Building | lideta | ደሊና ህንፃ | ልደታ', icon: <MdLocationOn className="w-8 h-8" />, href: 'https://goo.gl/maps/QUE658U7VAdJL7ys8' },
];