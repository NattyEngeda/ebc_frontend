import Image from 'next/image';

// Images
import girmaLogo from '../../../../assets/images/logo/girma.jpg';


const Profile = () => {
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }

    return (
        <section className=" flex flex-col items-start justify-center py-1 px-5 md:px-20 gap-10 min-h-screen">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-2 md:gap-5">
                    <h1 className="hidden text-3xl md:text-6xl text-white">Sanitary Systems and Elector Mechanical System Contractor</h1>
                    <Image
                        className="rounded-2xl"
                        loader={myLoader}
                        src={girmaLogo}
                        alt="Girma Logo"
                        width={500}
                        height={500}
                    />

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