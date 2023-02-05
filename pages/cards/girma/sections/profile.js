import React from 'react';
import Image from 'next/image';

// Images
import girmaLogo from '../../../../assets/images/logo/girma.jpg';
import back from '/assets/images/girma/backgrounds/back.png';
import backi from '/assets/images/girma/backgrounds/back.png';

const Profile = () => {
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }
    
    console.log(back);
    return (
        <section className=" flex flex-col items-start justify-center py-1 px-5 md:px-20 gap-10 min-h-screen">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-2 md:gap-5">
                    <h1 className="hidden text-3xl md:text-6xl text-white">Sanitary Systems and Elector Mechanical System Contractor</h1>
                    
                    <div 
                    style={{
                        backgroundImgae: `url('./back.png')`,
                        width: '400',
                        height: '200'
                    }}

                    className="relative normboor shadow-xl rounded-2xl bg-gray-300 ">
                        {/* <Image
                        className="z-10  top-0 left-0 rounded-2xl"
                        loader={myLoader}
                        src={back}
                        alt="Girma Logo"
                        width={500}
                        height={500}
                    /> */}
                      <div>
                        
                      </div>

                    </div>

                    <hr className="w-1/3" />
                </div>
                <div className="flex flex-col gap-2 md:gap-5">
                    <p className="text-2xl md:text-4xl text-white">GIRMA ATLABACHEW</p>
                    <hr className="w-1/3" />
                </div>
            </div>
        </section>
    );
}

export default Profile;