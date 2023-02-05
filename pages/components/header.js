import { useState, useEffect } from 'react';
import cx from 'clsx';
import Image from 'next/image';

// Images
import logo from '../../assets/images/logo/logo.png';
import fullLogo from '../../assets/images/logo/logo_full.jpg';


const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
};

const Header = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 0);
        });
    }, []);
    console.log(scroll)

    const headerClass = cx(
        `fixed w-full h-20 bg-white flex flex-row items-center justify-between px-10 z-50 transition-all duration-300 ease-in-out`,
        scroll == true && 'boorshad shadow-lg'
    );
    return (
        <>
            <header className={headerClass}>
            <div className='flex flex-row items-start gap-5'>
                <Image
                    className='w-10'
                    loader={imageLoader}
                    src={logo}
                    alt="Logo"
                    width={100}
                    height={100}
                /> 
                <div>
                    <h1 className='text-lg text-green-600'>Yene Card</h1>
                    <p className='text-sm text-gray-600'>The way I want</p>
                </div>
            </div>
            <div>

            </div>
            </header>
        </>
    );
}

export default Header;