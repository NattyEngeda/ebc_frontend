import React from 'react';
import Image from 'next/image';
// Images
import back from '/assets/images/girma/backgrounds/back.png';

const Profile = () => {
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }
    return (
        <section className="w-full flex flex-col items-start justify-center py-1 px-5 md:px-10 gap-10 ">
            <div className="w-full flex flex-col gap-10">
                <div className="w-full grid grid-cols-1 items-center justify-start gap-2 md:gap-5 py-10">
                    <div
                        style={{
                            width: 350,
                            height: 200,
                        }}
                        className='overflow-hidden bg-cover bg-no-repeat relative normboor shadow-xl rounded-2xl  '>
                        <div className='absolute z-10 top-0 left-0'>
                            <Image
                                className=""
                                loader={myLoader}
                                src={back}
                                alt="Girma Logo"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className='absolute flex flex-col items-start justify-start gap-1 z-20 top-0 left-0 py-5 px-5'>
                            <h1 className='text-3xl text-white font-bold'>Girma Atlabachew</h1>
                            <p className='text-2xl text-white font-bold'>General Manager</p>
                            <p className='text-lg text-white font-light'>Sanitary and Mechanical <br />Contractor</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Profile;

// <section className=" flex flex-col items-start justify-center py-1 px-5 md:px-20 gap-10 ">
// <div className="flex flex-col gap-10">
//     <div className="grid grid-cols-1 items-center justify-start gap-2 md:gap-5 py-10">
//         {/* <h1 className="hidden text-3xl md:text-6xl text-white">Sanitary Systems and Elector Mechanical System Contractor</h1> */}

//         <div
//         style={{
//             width: 350,
//             height: 200,
//         }} 0913396086
//         className=' overflow-hidden bg-cover bg-no-repeat w-full h-72 relative normboor shadow-xl rounded-2xl  '>
//             <div className='absolute z-10 top-0 left-0'>
//                 <Image
//                     className=""
//                     loader={myLoader}
//                     src={back}
//                     alt="Girma Logo"
//                     width={500}
//                     height={500}
//                 />
//             </div>
//             <div className='absolute flex flex-col items-start justify-start gap-5 z-20 top-0 left-0 py-10 px-5'>
//                 <h1 className='text-3xl text-white'>Girma Atlabachew</h1>
//                 <p className='text-lg text-white'>Sanitary and Mechanical <br/>Contractor</p>

//             </div>

//         </div>

//         {/* <hr className="w-1/3" /> */}
//     </div>
//     <div className="hidden flex flex-col gap-2 md:gap-5">
//         <p className="text-2xl md:text-4xl text-white">GIRMA ATLABACHEW</p>
//         <hr className="w-1/3" />
//     </div>
// </div>
// </section>